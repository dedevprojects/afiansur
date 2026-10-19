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
import { BrandModal } from './components/BrandModal';
import { ContactModal } from './components/ContactModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { InstitutionalReportModal } from './components/InstitutionalReportModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTargetBrand, setContactTargetBrand] = useState<Brand | null>(null);
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  const handleSelectBrand = (brand: Brand) => {
    setSelectedBrand(brand);
  };

  const handleSelectBrandName = (name: string) => {
    const brand = BRANDS.find((b) => b.name.toLowerCase() === name.toLowerCase());
    if (brand) {
      setSelectedBrand(brand);
    }
  };

  const handleOpenContact = (brand?: Brand) => {
    setContactTargetBrand(brand || null);
    setIsContactOpen(true);
  };

  const handleContactFromBrandModal = (brand: Brand) => {
    setSelectedBrand(null);
    setContactTargetBrand(brand);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f8] text-[#191b1b] flex flex-col font-sans selection:bg-[#121313] selection:text-white">
      {/* Header */}
      <Header
        onOpenContact={() => handleOpenContact()}
        onOpenReport={() => setIsReportOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-24 md:pt-28 lg:pt-32 flex-1">
        {/* Section 01: Hero */}
        <Hero
          onOpenArchitecture={() => setIsArchitectureOpen(true)}
        />

        {/* Section 02: El Grupo (Company Overview) */}
        <CompanyOverview
          onOpenReport={() => setIsReportOpen(true)}
        />

        {/* Section 03: Unidades de Negocio (Business Units) */}
        <BusinessUnits
          onSelectBrandName={handleSelectBrandName}
        />

        {/* Section 04: Tecnología y Productos Propios (Technology Showcase) */}
        <TechnologyShowcase
          brands={BRANDS}
          onSelectBrand={handleSelectBrand}
        />

        {/* Section 05: Nuestros Negocios (Brand Ledger & Directory) */}
        <BrandDirectory
          brands={BRANDS}
          onSelectBrand={handleSelectBrand}
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

      {/* Interactive Modals */}
      <BrandModal
        brand={selectedBrand}
        onClose={() => setSelectedBrand(null)}
        onContactBrand={handleContactFromBrandModal}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        preselectedBrand={contactTargetBrand}
      />

      <ArchitectureModal
        isOpen={isArchitectureOpen}
        onClose={() => setIsArchitectureOpen(false)}
      />

      <InstitutionalReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
