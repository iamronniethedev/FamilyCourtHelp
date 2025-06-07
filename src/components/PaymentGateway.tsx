import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Shield, Download, CheckCircle, AlertTriangle } from 'lucide-react';
import { FormData, MotionType } from '../types';

interface PaymentGatewayProps {
  motionType: MotionType;
  formData: FormData;
  onBack: () => void;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({ motionType, formData, onBack }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const motionTitles = {
    contempt: 'Motion for Contempt',
    enforce: 'Motion to Enforce',
    modify: 'Motion to Modify Parenting Time'
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 3000);
  };

  const handleDownload = () => {
    // In a real implementation, this would generate and download the Word document
    alert('Document generation would happen here with ChatGPT integration');
  };

  if (showSuccess) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your {motionTitles[motionType].toLowerCase()} has been generated and is ready for download.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-green-900 mb-3">Your Document Includes:</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Professionally formatted legal motion</li>
                <li>• All your information properly integrated</li>
                <li>• Court-ready formatting and language</li>
                <li>• Filing instructions and next steps</li>
              </ul>
            </div>
            
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Download Your Motion (Word Document)</span>
            </button>
            
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-yellow-800">
                  <p className="font-semibold mb-1">Important Reminder:</p>
                  <p>Please review your document carefully before filing. Consider having it reviewed by an attorney, especially for complex situations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Complete Your Order
                </h2>
                <p className="text-blue-100">Secure payment to generate your legal document</p>
              </div>
            </div>
            <CreditCard className="h-8 w-8 text-white" />
          </div>
        </div>

        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">{motionTitles[motionType]}</h4>
                    <p className="text-sm text-gray-600">Professional legal document generation</p>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">$49.99</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>$49.99</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">What's Included:</p>
                    <ul className="space-y-1">
                      <li>• AI-generated legal motion using your information</li>
                      <li>• Professional court formatting</li>
                      <li>• Downloadable Word document</li>
                      <li>• Basic filing instructions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h3>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-900">Stripe Integration Required</span>
                </div>
                <p className="text-yellow-800 text-sm mt-2">
                  To accept payments in your application, you'll need to set up Stripe. This includes:
                </p>
                <ul className="text-yellow-800 text-sm mt-2 ml-4 space-y-1">
                  <li>• Create a Stripe account</li>
                  <li>• Configure your secret keys</li>
                  <li>• Set up webhooks for payment processing</li>
                  <li>• Integrate with ChatGPT API for document generation</li>
                </ul>
              </div>
              
              {/* Mock Payment Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Billing Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50"
                    disabled
                  />
                </div>
              </div>
              
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full mt-8 py-4 px-6 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isProcessing
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg focus:ring-green-500'
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing Payment...</span>
                  </div>
                ) : (
                  `Complete Payment - $49.99`
                )}
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>SSL Secured</span>
            </div>
            <span>•</span>
            <span>256-bit Encryption</span>
            <span>•</span>
            <span>PCI Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;