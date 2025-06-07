import React, { useState } from 'react';
import { Scale, FileText, Users, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import DisclaimerModal from './components/DisclaimerModal';
import MotionSelector from './components/MotionSelector';
import LegalForm from './components/LegalForm';
import PaymentGateway from './components/PaymentGateway';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Header from './components/Header';
import { FormData, MotionType } from './types';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [selectedMotion, setSelectedMotion] = useState<MotionType | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    caseNumber: '',
    county: '',
    otherParent: '',
    orderDate: '',
    violationDescription: '',
    reliefRequested: '',
    children: '',
    signature: '',
    date: ''
  });
  const [currentStep, setCurrentStep] = useState<'disclaimer' | 'selection' | 'form' | 'payment' | 'terms' | 'privacy'>('disclaimer');

  const handleDisclaimerAccept = () => {
    setShowDisclaimer(false);
    setCurrentStep('selection');
  };

  const handleMotionSelect = (motion: MotionType) => {
    setSelectedMotion(motion);
    setCurrentStep('form');
  };

  const handleFormComplete = (data: FormData) => {
    setFormData(data);
    setCurrentStep('payment');
  };

  const handleBackToSelection = () => {
    setSelectedMotion(null);
    setCurrentStep('selection');
  };

  const handleBackToForm = () => {
    setCurrentStep('form');
  };

  const handleShowTerms = () => {
    setCurrentStep('terms');
  };

  const handleShowPrivacy = () => {
    setCurrentStep('privacy');
  };

  const handleBackToMain = () => {
    setCurrentStep('selection');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {showDisclaimer && (
        <DisclaimerModal onAccept={handleDisclaimerAccept} />
      )}

      <main className="container mx-auto px-4 py-8">
        {currentStep === 'selection' && (
          <MotionSelector onSelect={handleMotionSelect} />
        )}

        {currentStep === 'form' && selectedMotion && (
          <LegalForm 
            motionType={selectedMotion}
            onComplete={handleFormComplete}
            onBack={handleBackToSelection}
            initialData={formData}
          />
        )}

        {currentStep === 'payment' && selectedMotion && (
          <PaymentGateway 
            motionType={selectedMotion}
            formData={formData}
            onBack={handleBackToForm}
          />
        )}

        {currentStep === 'terms' && (
          <TermsOfService onBack={handleBackToMain} />
        )}

        {currentStep === 'privacy' && (
          <PrivacyPolicy onBack={handleBackToMain} />
        )}
      </main>

      <footer className="bg-navy-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-8 w-8 text-gold-500" />
                <span className="text-xl font-bold">FamilyCourtHelp</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering families with accessible legal document preparation for court proceedings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Contempt Motions</li>
                <li>• Enforcement Actions</li>
                <li>• Parenting Time Modifications</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={handleShowTerms}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleShowPrivacy}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="text-gray-300 space-y-2">
                <p>support@familycourthelp.com</p>
                <p>Professional legal document preparation services</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FamilyCourtHelp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;