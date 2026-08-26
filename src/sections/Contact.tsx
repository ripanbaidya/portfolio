import { useEffect, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { Container } from "../components/Container";
import { LinkIcon } from "../components/LinkIcon";
import { SectionHeading } from "../components/SectionHeading";
import { GOOGLE_COLORS } from "../data/googlePalette";
import { profile } from "../data/profile";
import { socialLinks } from "../data/socialLinks";
import { messagePlaceholders } from "../data/contacts";
import { sendContactForm } from "../lib/emailjs";

export function Contact() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const [messagePlaceholderIndex, setMessagePlaceholderIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsFading(true);

      window.setTimeout(() => {
        setMessagePlaceholderIndex(
          (currentIndex) => (currentIndex + 1) % messagePlaceholders.length,
        );
        setIsFading(false);
      }, 250);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  async function handleCopyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setIsEmailCopied(true);
    window.setTimeout(() => setIsEmailCopied(false), 1200);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    setFormStatus("idle");

    try {
      await sendContactForm(form);
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s connect"
              colorfulTitle
            />
            <p>
              Let's connect, discuss and develop some awesome projects together
              or simply stay in touch.
            </p>
            <div className="space-y-5 text-neutral-300">
              <div className="flex items-center gap-3 py-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex min-w-0 items-center gap-3 transition hover:text-white"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${GOOGLE_COLORS[0]}18`,
                      color: GOOGLE_COLORS[0],
                    }}
                  >
                    <LinkIcon name="email" className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.18em] text-neutral-500">
                      Email
                    </span>
                    <span className="block truncate text-base font-medium text-white">
                      {profile.email}
                    </span>
                  </span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={
                    isEmailCopied ? "Email copied" : "Copy email address"
                  }
                  title={isEmailCopied ? "Email copied" : "Copy email address"}
                  className="group relative isolate ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full p-[2px] text-neutral-400 transition hover:scale-105 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  {isEmailCopied && (
                    <span
                      className="copy-email-ring pointer-events-none absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(from 120deg, ${GOOGLE_COLORS.join(", ")}, ${GOOGLE_COLORS[0]})`,
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-neutral-950">
                    {isEmailCopied ? (
                      <FiCheck
                        className="h-4 w-4 text-[#34A853]"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiCopy className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </button>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Social links
                </p>
                <ul className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        aria-label={link.label}
                        className={`group relative isolate inline-flex h-10 w-10 items-center justify-center rounded-full p-[2px] text-sm text-neutral-300 transition duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950 ${link.hoverClassName}`}
                      >
                        <span
                          className="social-link-ring pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                          style={{
                            background: `conic-gradient(from 120deg, ${GOOGLE_COLORS.join(", ")}, ${GOOGLE_COLORS[0]})`,
                          }}
                          aria-hidden="true"
                        />
                        <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full">
                          <LinkIcon
                            name={link.icon}
                            className={`social-link-icon h-5 w-5 ${link.iconClassName}`}
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full border-0 border-b border-white/10 bg-transparent px-0 py-3 text-white placeholder:text-neutral-500 focus:border-[#4285F4] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border-0 border-b border-white/10 bg-transparent px-0 py-3 text-white placeholder:text-neutral-500 focus:border-[#EA4335] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={messagePlaceholders[messagePlaceholderIndex]}
                  required
                  className="w-full resize-none border-0 border-b border-white/10 bg-transparent px-0 py-3 text-white placeholder:text-neutral-500 focus:border-[#34A853] focus:outline-none"
                />
              </div>

              <div className="flex justify-center sm:justify-start">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
                  style={{
                    color: GOOGLE_COLORS[0],
                    borderColor: `${GOOGLE_COLORS[0]}66`,
                  }}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>
              <p
                aria-live="polite"
                className={`text-sm ${
                  formStatus === "success"
                    ? "text-[#34A853]"
                    : formStatus === "error"
                      ? "text-[#EA4335]"
                      : "sr-only"
                }`}
              >
                {formStatus === "success"
                  ? "Thanks, your message has been sent."
                  : "Something went wrong. Please try again or email me directly."}
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

