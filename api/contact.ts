import { Resend } from 'resend'
import { validate, type FormValues } from '../src/lib/contact.js'

// Fonction serverless Vercel : POST /api/contact
// La clé Resend reste ici, côté serveur ; elle n'est jamais envoyée au navigateur.
export async function POST(request: Request): Promise<Response> {
  // 1. Lire le corps JSON (on ne fait pas confiance à ce qui arrive)
  let values: FormValues
  try {
    const body = (await request.json()) as Partial<Record<keyof FormValues, unknown>> | null
    values = {
      name: String(body?.name ?? ''),
      email: String(body?.email ?? ''),
      message: String(body?.message ?? ''),
    }
  } catch {
    return Response.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  // 2. Revalider côté serveur : on peut appeler l'API sans passer par le formulaire
  const errors = validate(values)
  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 })
  }

  // 3. Vérifier la configuration (variables d'environnement)
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.error('RESEND_API_KEY ou CONTACT_TO_EMAIL manquant')
    return Response.json({ error: 'Configuration serveur manquante.' }, { status: 500 })
  }

  // 4. Envoyer l'email
  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to,
    replyTo: values.email.trim(), // « Répondre » dans Gmail écrit directement au visiteur
    subject: `Portfolio : nouveau message de ${values.name.trim()}`,
    text: `Nom : ${values.name.trim()}\nEmail : ${values.email.trim()}\n\n${values.message.trim()}`,
  })

  if (error) {
    console.error('Resend:', error)
    return Response.json({ error: "L'envoi a échoué." }, { status: 502 })
  }

  return Response.json({ ok: true })
}
