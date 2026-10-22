// Règles du formulaire de contact, partagées par le front (Contact.tsx)
// et par l'API (api/contact.ts) : une seule source de vérité.

export type FormValues = {
  name: string
  email: string
  message: string
}

// Un message d'erreur possible par champ (Partial = chaque clé est optionnelle)
export type FormErrors = Partial<Record<keyof FormValues, string>>

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Renvoie un objet d'erreurs ; objet vide = formulaire valide
export function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim() === '') {
    errors.name = 'Veuillez indiquer votre nom.'
  }

  if (values.email.trim() === '') {
    errors.email = 'Veuillez indiquer votre email.'
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Le format de l'email n'est pas valide (exemple : nom@domaine.fr)."
  }

  const messageLength = values.message.trim().length
  if (messageLength === 0) {
    errors.message = 'Veuillez écrire votre message.'
  } else if (messageLength < 10) {
    errors.message = `Votre message est trop court : 10 caractères minimum (${messageLength} actuellement).`
  } else if (messageLength > 400) {
    errors.message = `Votre message est trop long : 400 caractères maximum (${messageLength} actuellement).`
  }

  return errors
}
