export type FormValues = {
  name: string
  email: string
  message: string
}

export type FormErrors = Partial<Record<keyof FormValues, string>>

export const HONEYPOT_FIELD = 'website'
export const MAX_BODY_SIZE = 10_000
export const NAME_MAX_LENGTH = 100
export const EMAIL_MAX_LENGTH = 254

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim() === '') {
    errors.name = 'Veuillez indiquer votre nom.'
  } else if (values.name.trim().length > NAME_MAX_LENGTH) {
    errors.name = `Votre nom est trop long : ${NAME_MAX_LENGTH} caractères maximum.`
  }

  if (values.email.trim() === '') {
    errors.email = 'Veuillez indiquer votre email.'
  } else if (values.email.trim().length > EMAIL_MAX_LENGTH) {
    errors.email = "L'adresse email est trop longue."
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
