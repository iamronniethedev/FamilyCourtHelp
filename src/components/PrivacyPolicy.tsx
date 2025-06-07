import React from 'react';
import { ArrowLeft, Shield, Lock } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="text-white hover:text-green-200 transition-colors duration-200"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-white" />
              <div>
                <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
                <p className="text-green-100">Last updated: January 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information you provide directly to us when using our legal document preparation service:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Personal information (name, contact details)</li>
              <li>Case information (case numbers, court details)</li>
              <li>Legal matter details (violation descriptions, relief requested)</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Usage data (how you interact with our website)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Generate customized legal documents based on your input</li>
              <li>Process payments for our services</li>
              <li>Communicate with you about your order</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Lock className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-900">We do not sell your personal information.</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>With service providers who help us operate our business (e.g., payment processors, AI services)</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>SSL encryption for all data transmission</li>
              <li>Secure payment processing through Stripe</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure data storage with reputable cloud providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Specifically:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Document generation data: Retained for 30 days after service completion</li>
              <li>Payment records: Retained for 7 years for tax and legal compliance</li>
              <li>Usage data: Retained for 2 years for service improvement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request data portability</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to improve your experience on our website. These help us:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Remember your preferences</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content</li>
              <li>Ensure website security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our service integrates with third-party providers:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li><strong>Stripe:</strong> For secure payment processing</li>
              <li><strong>OpenAI:</strong> For AI-powered document generation</li>
              <li><strong>Analytics providers:</strong> For website performance monitoring</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our service is not intended for children under 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-900">
                <strong>Email:</strong> privacy@familycourthelp.com<br />
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

export default PrivacyPolicy;