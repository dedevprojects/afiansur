import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isTerms = type === 'terms';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in-up">
      <div
        className="relative w-full max-w-2xl bg-[#f9f9f8] border border-[#d3cfc8] shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d3cfc8]/50 bg-[#f4f3f1]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#121313]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#191b1b]">
              {isTerms ? 'TÉRMINOS Y CONDICIONES INSTITUCIONALES' : 'POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS'}
            </span>
          </div>
          <button onClick={onClose} className="p-1 text-[#7b766f] hover:text-[#191b1b]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8 space-y-4 text-xs text-[#5f5d59] leading-relaxed">
          {isTerms ? (
            <>
              <h3 className="font-serif text-xl text-[#191b1b] mb-2">
                Términos Generales de Uso del Portal Institucional
              </h3>
              <p>
                El acceso y navegación en este sitio web de Grupo Afiansur S.A. implica el conocimiento y aceptación de los términos y condiciones de uso. Todos los contenidos, marcas comerciales, logotipos, imágenes fotográficas, manuales de estilo y códigos informáticos expuestos son propiedad exclusiva de Grupo Afiansur S.A. o de sus subsidiarias autorizadas.
              </p>
              <p>
                Queda terminantemente prohibida la reproducción, duplicación, distribución o explotación con fines comerciales no autorizados expresamente por escrito por la secretaría del directorio.
              </p>
              <p>
                La información sobre marcas y productos tiene fines institucionales e informativos respecto al alcance de las operaciones del grupo y no constituye una oferta vinculante de suscripción pública de valores o acciones.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-serif text-xl text-[#191b1b] mb-2">
                Tratamiento y Protección de Datos Personales
              </h3>
              <p>
                Grupo Afiansur S.A. se compromete a proteger la privacidad y los datos de contacto brindados por representantes corporativos, clientes y postulantes a través de nuestros canales institucionales, de conformidad con la Ley 25.326 de Protección de Datos Personales de la República Argentina y directrices internacionales afines.
              </p>
              <p>
                Los datos recolectados en el formulario de contacto institucional son utilizados exclusivamente con fines de gestión de consultas comerciales, alianzas de negocios y relaciones públicas. Bajo ninguna circunstancia se comercializan ni ceden a terceras partes no afiliadas al grupo.
              </p>
            </>
          )}
        </div>

        <div className="p-4 px-6 bg-[#f4f3f1] border-t border-[#d3cfc8]/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#121313] text-white text-xs uppercase tracking-widest font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
