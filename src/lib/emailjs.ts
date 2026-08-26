import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function sendContactForm(form: HTMLFormElement) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS environment variables are not configured.");
  }

  return emailjs.sendForm(serviceId, templateId, form, publicKey);
}
