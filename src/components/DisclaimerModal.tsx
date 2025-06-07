import React from 'react';
import { AlertTriangle, Scale, X } from 'lucide-react';

interface DisclaimerModalProps {
  onAccept: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Important Legal Disclaimer
          </h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-red-900 mb-2">
                THIS IS NOT LEGAL ADVICE
              </p>
              <p className="text-red-800">
                The information and documents provided by this website are for informational purposes only and do not constitute legal advice.
              </p>
            </div>
            
            <p>
              <strong>By using this service, you acknowledge and understand that:</strong>
            </p>
            
            <ul className="space-y-2 ml-6">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>This service provides document templates and general information only</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Every legal situation is unique and requires individual consideration</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>You should consult with a qualified attorney for advice specific to your situation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>We are not responsible for the outcome of any legal proceedings</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>All information you provide will be used solely for document preparation</span>
              </li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Scale className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Professional Recommendation</span>
              </div>
              <p className="text-blue-800">
                While self-representation is your right, complex family law matters often benefit from professional legal guidance. Consider consulting with an attorney, especially for contested cases.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onAccept}
              className="flex-1 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              I Understand and Agree to Continue
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            By clicking "I Understand and Agree to Continue", you acknowledge that you have read and understood this disclaimer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;