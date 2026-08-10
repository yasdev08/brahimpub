"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  AtSign,
  Share2,
  CheckCircle,
} from "lucide-react";

const serviceOptions = [
  "Cartes de visite",
  "Flyers & prospectus",
  "Affiches",
  "Banderoles & grand format",
  "Enseignes",
  "Design graphique",
  "Carte QR / Menu QR",
  "Site web",
  "Autre",
];

const budgetOptions = [
  "Moins de 5 000 DA",
  "5 000 – 20 000 DA",
  "20 000 – 50 000 DA",
  "50 000 – 100 000 DA",
  "Plus de 100 000 DA",
];

interface FormState {
  nom: string;
  entreprise: string;
  telephone: string;
  email: string;
  service: string;
  budget: string;
  description: string;
}

const initialForm: FormState = {
  nom: "",
  entreprise: "",
  telephone: "",
  email: "",
  service: "",
  budget: "",
  description: "",
};

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+213 553 924 419",
    href: "https://wa.me/+213553924419",
    color: "text-green-500",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+213 553 924 419",
    href: "tel:+213553924419",
    color: "text-blue-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mbpublicite31@gmail.com",
    href: "mailto:mbpublicite31@gmail.com",
    color: "text-brand",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Maraval ,Oran, Algérie",
    href: "https://www.google.com/maps/place/Mb+Pub/@35.6752124,-0.6495351,17z/data=!4m14!1m7!3m6!1s0xd7e89e38198d39b:0xaac900da3133f09f!2sMb+Pub!8m2!3d35.6752124!4d-0.6469602!16s%2Fg%2F11tf7ds30q!3m5!1s0xd7e89e38198d39b:0xaac900da3133f09f!8m2!3d35.6752124!4d-0.6469602!16s%2Fg%2F11tf7ds30q?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",
    color: "text-amber-500",
  },
];

const socials = [
  { icon: AtSign, label: "Socials", href: "https://lnk.bio/mbpub31" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/+213553924419",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.nom.trim()) newErrors.nom = "Votre nom est requis";
    if (!form.telephone.trim())
      newErrors.telephone = "Votre téléphone est requis";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email invalide";
    if (!form.service) newErrors.service = "Sélectionnez un service";
    if (!form.description.trim())
      newErrors.description = "Décrivez votre projet";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const message = `
Bonjour MB PUB 👋

Je souhaite demander un devis.

👤 Nom : ${form.nom}
🏢 Entreprise : ${form.entreprise || "Non renseignée"}
📞 Téléphone : ${form.telephone}
📧 Email : ${form.email || "Non renseigné"}

🛠️ Service : ${form.service}
💰 Budget estimé : ${form.budget || "Non renseigné"}

📝 Description :
${form.description}
  `.trim();

    const whatsappNumber = "+213553924419";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-white py-20 lg:py-28"
      aria-label="Contact et devis"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-brand text-sm font-bold uppercase tracking-widest mb-4 font-display"
          >
            Contactez-nous
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-dark leading-tight"
          >
            Parlons de
            <br />
            votre projet.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Contact items */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-soft rounded-xl hover:bg-brand/5 hover:border-brand/10 border border-transparent transition-all duration-200 group"
                  >
                    <div
                      className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm ${item.color} flex-shrink-0`}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-muted font-semibold uppercase tracking-wide font-display">
                        {item.label}
                      </div>
                      <div className="text-dark font-semibold text-sm">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social media */}
            <div>
              <p className="text-muted text-xs font-bold uppercase tracking-widest mb-3 font-display">
                Réseaux sociaux
              </p>
              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 bg-gray-100 hover:bg-brand hover:text-white text-gray-600 rounded-xl flex items-center justify-center transition-all duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick response note */}
            <div className="bg-brand/5 border border-brand/15 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-display font-bold text-dark text-sm">
                  Réponse rapide
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Nous répondons généralement dans les{" "}
                <strong>2 à 4 heures</strong> ouvrables. Pour une réponse
                immédiate, contactez-nous via WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full gap-6 py-20"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-dark mb-2">
                    Demande envoyée !
                  </h3>
                  <p className="text-muted text-base max-w-sm mx-auto">
                    Merci pour votre message. Notre équipe vous contactera très
                    prochainement.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="text-brand font-semibold text-sm hover:underline font-display"
                >
                  Envoyer une autre demande
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-xs font-bold text-dark mb-1.5 font-display uppercase tracking-wide"
                    >
                      Nom complet <span className="text-brand">*</span>
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className={`form-input ${errors.nom ? "border-red-400" : ""}`}
                      aria-required="true"
                    />
                    {errors.nom && (
                      <p className="text-red-500 text-xs mt-1">{errors.nom}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="entreprise"
                      className="block text-xs font-bold text-dark mb-1.5 font-display uppercase tracking-wide"
                    >
                      Entreprise
                    </label>
                    <input
                      id="entreprise"
                      name="entreprise"
                      type="text"
                      value={form.entreprise}
                      onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-xs font-bold text-dark mb-1.5 font-display uppercase tracking-wide"
                    >
                      Téléphone <span className="text-brand">*</span>
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="+213 XXX XXX XXX"
                      className={`form-input ${errors.telephone ? "border-red-400" : ""}`}
                      aria-required="true"
                    />
                    {errors.telephone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.telephone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-dark mb-1.5 font-display uppercase tracking-wide"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="vous@exemple.com"
                      className={`form-input ${errors.email ? "border-red-400" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-bold text-dark mb-1.5 font-display uppercase tracking-wide"
                    >
                      Service souhaité <span className="text-brand">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`form-input ${errors.service ? "border-red-400" : ""}`}
                      aria-required="true"
                    >
                      <option value="">Sélectionnez un service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-bold text-dark mb-1.5 font-display uppercase tracking-wide"
                    >
                      Budget estimé
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Sélectionnez un budget</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-bold text-dark mb-1.5 font-display uppercase tracking-wide"
                  >
                    Décrivez votre projet <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Expliquez-nous votre besoin, vos idées, vos délais..."
                    rows={4}
                    className={`form-input resize-none ${errors.description ? "border-red-400" : ""}`}
                    aria-required="true"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-bold text-base py-4 rounded-xl transition-all duration-200 shadow-lg shadow-brand/20 hover:shadow-brand/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 font-display"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg
                        className="animate-spin w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </button>

                <p className="text-center text-muted text-xs">
                  En soumettant ce formulaire, vous acceptez d&apos;être
                  contacté par MB PUB concernant votre demande.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
