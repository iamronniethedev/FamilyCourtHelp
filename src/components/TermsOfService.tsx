import React from 'react';
import { ArrowLeft, Scale, FileText } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-white" />
              <div>
                <h1 className="text-2xl font-bold text-white">Terms of Service</h1>
                <p className="text-blue-100">Last updated: January 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using FamilyCourtHelp ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FamilyCourtHelp provides legal document preparation services for family court proceedings. Our service generates customized legal motions based on information you provide. We offer:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Motion for Contempt documents</li>
              <li>Motion to Enforce documents</li>
              <li>Motion to Modify Parenting Time documents</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Not Legal Advice</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-900 font-semibold">
                IMPORTANT: This service does NOT provide legal advice. We provide document preparation services only.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The documents and information provided are for informational purposes only and should not be considered legal advice. You should consult with a qualified attorney for advice specific to your situation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Use the service for lawful purposes only</li>
              <li>Review all generated documents carefully before filing</li>
              <li>Understand that you are responsible for the accuracy of your submissions</li>
              <li>Comply with all applicable laws and court rules</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Payment and Refunds</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment is required before document generation. Our current pricing is $49.99 per motion. All sales are final. Refunds may be considered on a case-by-case basis for technical issues that prevent document delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We take your privacy seriously. All information you provide is used solely for document preparation and is handled in accordance with our Privacy Policy. We do not share your personal information with third parties except as necessary to provide our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FamilyCourtHelp shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our service, including but not limited to damages for loss of profits, use, data, or other intangibles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The service is provided "as is" without any warranties, expressed or implied. We do not warrant that the service will be uninterrupted, error-free, or that defects will be corrected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Modifications to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of any modifications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900">
                <strong>Email:</strong> support@familycourthelp.com<br />
                <strong>Address:</strong> [Your Business Address]<br />
                <strong>Phone:</strong> [Your Phone Number]
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;