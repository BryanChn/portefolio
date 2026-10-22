import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { validate, type FormErrors, type FormValues } from '../lib/contact'

type Status = 'idle' | 'loading' | 'success' | 'error'

const emptyForm: FormValues = { name: '', email: '', message: '' }

// Simulation d'envoi (remplacée plus tard par l'appel à /api/contact)
function fakeSend(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 1200))
}

function Contact() {
  const [values, setValues] = useState<FormValues>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  // Un seul handler pour tous les champs, grâce à l'attribut name de chaque input
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = validate(values)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setStatus('loading')
    try {
      // TODO(human): remplace fakeSend() par l'appel à /api/contact (voir instructions)
      await fakeSend()
      setStatus('success')
      setValues(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-md bg-highlight px-4 py-3 text-white placeholder:text-muted outline-none ring-accent transition focus:ring-2'

  return (
    <section id="contact" className="px-6 py-10">
      <h2 className="mb-2 text-2xl font-bold">Contact</h2>
      <p className="mb-6 text-muted">Un poste, un projet, une question ? Écrivez-moi.</p>

      {status === 'success' ? (
        <div className="flex max-w-xl items-center gap-3 rounded-lg bg-elevated p-6">
          <CheckCircle2 className="shrink-0 text-accent-light" size={28} />
          <div>
            <p className="font-bold">Message envoyé !</p>
            <p className="text-sm text-muted">Je vous réponds au plus vite.</p>
          </div>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="ml-auto text-sm text-muted underline hover:text-white"
          >
            Nouveau message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex max-w-xl flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">Nom</label>
            <input id="name" name="name" value={values.name} onChange={handleChange} placeholder="Votre nom" className={inputClass} />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value={values.email} onChange={handleChange} placeholder="vous@exemple.com" className={inputClass} />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} value={values.message} onChange={handleChange} placeholder="Votre message…" className={`${inputClass} resize-y`} />
            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
          </div>

          {status === 'error' && (
            <p className="flex items-center gap-2 text-sm text-red-400">
              <TriangleAlert size={16} /> L'envoi a échoué, veuillez réessayer dans un instant.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-black transition hover:scale-105 hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            {status === 'loading' ? 'Envoi…' : 'Envoyer'}
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact
