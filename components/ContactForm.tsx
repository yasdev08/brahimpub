"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, Send } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const serviceOptions = [
  "Enseignes publicitaires",
  "Enseignes lumineuses",
  "Impression numérique",
  "Impression grand format",
  "Habillage vitrine / façade",
  "Design graphique",
  "Affichage digital LED",
  "Solutions QR",
  "Solutions digitales",
  "Autre",
];

interface FormState {
  nom: string;
  entreprise: string;
  telephone: string;
  email: string;
  service: string;
  description: string;
}

const initialForm: FormState = {
  nom: "",
  entreprise: "",
  telephone: "",
  email: "",
  service: "",
  description: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.nom.trim()) newErrors.nom = "Votre nom est requis";
    if (!form.telephone.trim()) newErrors.telephone = "Votre téléphone est requis";
    if (!form.service) newErrors.service = "Choisissez un service";
    if (!form.description.trim()) newErrors.description = "Décrivez votre projet";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    const message = [
      "Bonjour MB PUB",
      "",
      "Je souhaite demander un devis.",
      "",
      `Nom : ${form.nom}`,
      `Entreprise : ${form.entreprise || "Non renseignée"}`,
      `Téléphone : ${form.telephone}`,
      `Email : ${form.email || "Non renseigné"}`,
      "",
      `Service : ${form.service}`,
      "",
      "Description :",
      form.description,
    ].join("\n");

    window.open(
      `https://wa.me/213553924419?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    trackEvent("contact_request_prepared", {
      source: "contact_page_form",
      service: form.service,
      has_company: Boolean(form.entreprise.trim()),
      has_email: Boolean(form.email.trim()),
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 flex flex-col items-center text-center gap-5">
        <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center">
          <CheckCircle size={32} className="text-brand" />
        </div>
        <div>
          <h2 className="font-display font-bold text-dark text-2xl mb-2">
            Demande préparée !
          </h2>
          <p className="text-muted leading-relaxed max-w-sm">
            WhatsApp a été ouvert avec votre demande préremplie. Envoyez le
            message pour terminer l&apos;envoi.
          </p>
        </div>
        <a
          href="https://wa.me/213553924419"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-xl transition-colors font-display mt-2"
        >
          Ou contactez-nous sur WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 lg:p-9">
      <h2 className="font-display font-bold text-dark text-2xl mb-2">
        Demander un devis gratuit
      </h2>
      <p className="text-muted text-sm mb-7">
        Remplissez ce formulaire et nous vous répondrons rapidement.
      </p>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="nom" className="block text-sm font-semibold text-dark mb-1.5">
              Nom complet <span className="text-brand">*</span>
            </label>
            <input
              id="nom"
              type="text"
              autoComplete="name"
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
              placeholder="Votre nom"
              className={`form-input ${errors.nom ? "border-red-400" : ""}`}
            />
            {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
          </div>
          <div>
            <label htmlFor="entreprise" className="block text-sm font-semibold text-dark mb-1.5">
              Entreprise / Commerce
            </label>
            <input
              id="entreprise"
              type="text"
              autoComplete="organization"
              value={form.entreprise}
              onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
              placeholder="Nom de votre commerce"
              className="form-input"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="telephone" className="block text-sm font-semibold text-dark mb-1.5">
              Téléphone <span className="text-brand">*</span>
            </label>
            <input
              id="telephone"
              type="tel"
              autoComplete="tel"
              value={form.telephone}
              onChange={(e) => setForm({ ...form, telephone: e.target.value })}
              placeholder="+213 XXX XXX XXX"
              className={`form-input ${errors.telephone ? "border-red-400" : ""}`}
            />
            {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-dark mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="votre@email.com"
              className="form-input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-dark mb-1.5">
            Service souhaité <span className="text-brand">*</span>
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={`form-input ${errors.service ? "border-red-400" : ""}`}
          >
            <option value="">Sélectionnez un service</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-dark mb-1.5">
            Décrivez votre projet <span className="text-brand">*</span>
          </label>
          <textarea
            id="description"
            rows={5}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Dimensions, quantités, délais, toute information utile..."
            className={`form-input resize-none ${errors.description ? "border-red-400" : ""}`}
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark disabled:bg-brand/60 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-brand/25 hover:-translate-y-0.5 disabled:translate-y-0 font-display text-base"
        >
          {loading ? (
            <>
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              Envoi en cours…
            </>
          ) : (
            <>
              <Send size={17} />
              Envoyer ma demande
            </>
          )}
        </button>
      </form>
    </div>
  );
}
