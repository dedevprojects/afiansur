import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, AlertCircle, Loader2 } from 'lucide-react';
import { Brand } from '../data/afiansurData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedBrand?: Brand | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  preselectedBrand,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: 'Alianzas estratégicas y nuevos negocios',
    targetUnit: preselectedBrand ? preselectedBrand.name : 'Dirección General de Grupo Afiansur',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedBrand) {
      setFormData((prev) => ({
        ...prev,
        targetUnit: preselectedBrand.name,
      }));
    }
  }, [preselectedBrand]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const randomId = Math.floor(1000 + Math.random() * 9000);
    const ref = `REF-AF-2025-${randomId}`;

    try {
      const response = await fetch('https://formsubmit.co/ajax/grupoafiansur@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Web Afiansur] Propuesta: ${formData.targetUnit} - ${formData.subject} (${ref})`,
          "Código de Referencia": ref,
          "Nombre y Apellido": formData.name,
          "Empresa u Organización": formData.organization,
          "Email de Contacto": formData.email,
          "Teléfono": formData.phone || 'No especificado',
          "Unidad Destino": formData.targetUnit,
          "Asunto": formData.subject,
          "Mensaje": formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario a grupoafiansur@gmail.com');
      }

      setTicketRef(ref);
      setSubmitted(true);
    } catch (err) {
      console.error('Error al enviar propuesta:', err);
      setErrorMessage('No se pudo enviar el mensaje en este momento. Por favor revise su conexión e intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in-up">
      <div
        className="relative w-full max-w-3xl bg-[#f9f9f8] border border-[#d3cfc8] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d3cfc8]/50 bg-[#f4f3f1]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#121313]"></span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#191b1b]">
              RELACIONES INSTITUCIONALES & PROPUESTAS DE NEGOCIOS
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#7b766f] hover:text-[#191b1b] transition-colors"
            aria-label="Cerrar formulario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 bg-[#121313] text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7b766f]">
                  REGISTRO RECIBIDO: {ticketRef}
                </span>
                <h3 className="font-serif text-3xl text-[#191b1b]">
                  Propuesta recibida satisfactoriamente
                </h3>
                <p className="text-sm text-[#5f5d59] leading-relaxed">
                  Agradecemos su comunicación con Grupo Afiansur. El área de Relaciones Institucionales y el equipo directivo de <strong>{formData.targetUnit}</strong> evaluarán su mensaje y responderán a <strong>{formData.email}</strong> a la brevedad.
                </p>
              </div>

              <div className="p-4 bg-[#f4f3f1] border border-[#d3cfc8]/60 max-w-md mx-auto text-left text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#5f5d59]">Unidad / Marca:</span>
                  <span className="font-semibold text-[#191b1b]">{formData.targetUnit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5f5d59]">Asunto:</span>
                  <span className="font-semibold text-[#191b1b]">{formData.subject}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#121313] text-white text-xs uppercase tracking-widest font-semibold hover:bg-black transition-colors cursor-pointer"
              >
                Volver al Sitio
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#5f5d59] font-medium block mb-1">
                  MESA DE ENLACE CORPORATIVO
                </span>
                <h3 className="font-serif text-[28px] md:text-[34px] text-[#191b1b] leading-tight">
                  Inicie una conversación institucional
                </h3>
                <p className="text-sm text-[#5f5d59] leading-relaxed mt-1">
                  Complete los siguientes campos para coordinar reuniones, explorar alianzas o vincularse con nuestras unidades de negocio.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#191b1b] block mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Martín Soler"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f4f3f1] border border-[#d3cfc8] px-3.5 py-2.5 text-sm text-[#191b1b] placeholder:text-[#7b766f] focus:outline-hidden focus:border-[#121313]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#191b1b] block mb-1">
                      Empresa u Organización *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Inversiones Cono Sur"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#f4f3f1] border border-[#d3cfc8] px-3.5 py-2.5 text-sm text-[#191b1b] placeholder:text-[#7b766f] focus:outline-hidden focus:border-[#121313]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#191b1b] block mb-1">
                      Correo Electrónico Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f4f3f1] border border-[#d3cfc8] px-3.5 py-2.5 text-sm text-[#191b1b] placeholder:text-[#7b766f] focus:outline-hidden focus:border-[#121313]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#191b1b] block mb-1">
                      Teléfono de Contacto (opcional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+54 11 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f4f3f1] border border-[#d3cfc8] px-3.5 py-2.5 text-sm text-[#191b1b] placeholder:text-[#7b766f] focus:outline-hidden focus:border-[#121313]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#191b1b] block mb-1">
                      Unidad / Marca de Destino
                    </label>
                    <select
                      value={formData.targetUnit}
                      onChange={(e) => setFormData({ ...formData, targetUnit: e.target.value })}
                      className="w-full bg-[#f4f3f1] border border-[#d3cfc8] px-3.5 py-2.5 text-sm text-[#191b1b] focus:outline-hidden focus:border-[#121313]"
                    >
                      <option value="Dirección General de Grupo Afiansur">Dirección General de Grupo Afiansur</option>
                      <option value="Agencia Gol">Agencia Gol (Software & Cloud)</option>
                      <option value="Agroconexiones">Agroconexiones (AgTech)</option>
                      <option value="ReservaClick">ReservaClick (Agendamiento)</option>
                      <option value="Inmobiliosis">Inmobiliosis (PropTech)</option>
                      <option value="Krafyx">Krafyx (Identidad & Marca)</option>
                      <option value="Hatrixa">Hatrixa (Publicidad)</option>
                      <option value="Mandel Producciones">Mandel Producciones (Audiovisual)</option>
                      <option value="Consultora Contraluz">Consultora Contraluz (Selección IT)</option>
                      <option value="GM">GM (Soluciones de RR. HH.)</option>
                      <option value="Historias Narradas">Historias Narradas (Editorial)</option>
                      <option value="Guía Sabor">Guía Sabor (Gastronomía)</option>
                      <option value="Escuela Online">Escuela Online (Educación)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#191b1b] block mb-1">
                      Motivo o Asunto Principal
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#f4f3f1] border border-[#d3cfc8] px-3.5 py-2.5 text-sm text-[#191b1b] focus:outline-hidden focus:border-[#121313]"
                    >
                      <option value="Alianzas estratégicas y nuevos negocios">Alianzas estratégicas y nuevos negocios</option>
                      <option value="Inversiones y desarrollo de capital">Inversiones y desarrollo de capital</option>
                      <option value="Contratación de servicios de una subsidiaria">Contratación de servicios de una subsidiaria</option>
                      <option value="Relaciones Institucionales y Prensa">Relaciones Institucionales y Prensa</option>
                      <option value="Contacto de RRHH y Proveedores">Contacto de RRHH y Proveedores</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#191b1b] block mb-1">
                    Mensaje o Síntesis de la Propuesta *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describa el alcance de la iniciativa, objetivos y tiempos estimados..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#f4f3f1] border border-[#d3cfc8] p-3 text-sm text-[#191b1b] placeholder:text-[#7b766f] focus:outline-hidden focus:border-[#121313]"
                  ></textarea>
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-[#7b766f]">
                    * Datos tratados bajo estricta confidencialidad profesional.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#121313] text-white text-xs uppercase tracking-widest font-semibold hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Comunicación</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
