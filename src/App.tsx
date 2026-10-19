/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BRANDS, Brand } from './data/afiansurData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyOverview } from './components/CompanyOverview';
import { BusinessUnits } from './components/BusinessUnits';
import { TechnologyShowcase } from './components/TechnologyShowcase';
import { BrandDirectory } from './components/BrandDirectory';
import { InstitutionalClosing } from './components/InstitutionalClosing';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTargetBrand, setContactTargetBrand] = useState<Brand | null>(null);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  const handleOpenContact = (brand?: Brand) => {
    setContactTargetBrand(brand || null);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f8] text-[#191b1b] flex flex-col font-sans selection:bg-[#121313] selection:text-white">
      {/* Header */}
      <Header
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-24 md:pt-28 lg:pt-32 flex-1">
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: El Grupo (Company Overview) */}
        <CompanyOverview />

        {/* Section 03: Unidades de Negocio (Business Units) */}
        <BusinessUnits />

        {/* Section 04: Tecnología y Productos Propios (Technology Showcase) */}
        <TechnologyShowcase
          brands={BRANDS}
        />

        {/* Section 05: Empresas del Grupo (Brand Ledger & Directory) */}
        <BrandDirectory
          brands={BRANDS}
        />

        {/* Section 06: Cierre Institucional */}
        <InstitutionalClosing
          onOpenContact={() => handleOpenContact()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => handleOpenContact()}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />

      {/* Interactive Contact & Legal Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        preselectedBrand={contactTargetBrand}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
