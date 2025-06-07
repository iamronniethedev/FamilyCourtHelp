import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, Shield, Download, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { FormData, MotionType } from '../types';

interface PaymentGatewayProps {
  motionType: MotionType;
  formData: FormData;
  onBack: () => void;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({ motionType, formData, onBack }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isWaitingForPayment, setIsWaitingForPayment] = useState(false);

  const motionTitles = {
    contempt: 'Motion for Contempt',
    enforce: 'Motion to Enforce',
    modify: 'Motion to Modify Parenting Time'
  };

  const handlePaymentClick = () => {
    setIsWaitingForPayment(true);
    // In a real implementation, you would listen for payment completion
    // For demo purposes, we'll simulate payment completion after 10 seconds
    setTimeout(() => {
      setIsWaitingForPayment(false);
      setShowSuccess(true);
    }, 10000);
  };

  const showCheckoutWindow = (e: React.MouseEvent) => {
    e.preventDefault();
    handlePaymentClick();

    const url = 'https://square.link/u/fOCIWgTN?src=embed';
    const title = 'Square Payment Links';

    // Some platforms embed in an iframe, so we want to top window to calculate sizes correctly
    const topWindow = window.top ? window.top : window;

    // Fixes dual-screen position                                Most browsers          Firefox
    const dualScreenLeft = topWindow.screenLeft !== undefined ? topWindow.screenLeft : topWindow.screenX;
    const dualScreenTop = topWindow.screenTop !== undefined ? topWindow.screenTop : topWindow.screenY;

    const width = topWindow.innerWidth ? topWindow.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = topWindow.innerHeight ? topWindow.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const h = height * 0.75;
    const w = 500;

    const systemZoom = width / topWindow.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(url, title, `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`);

    if (window.focus && newWindow) newWindow.focus();
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

            {/* Payment Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Secure Payment</h3>
              
              {isWaitingForPayment && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    <div>
                      <p className="font-semibold text-blue-900">Waiting for payment completion...</p>
                      <p className="text-blue-800 text-sm">Complete your payment in the popup window</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-900">Secure Square Payment</span>
                </div>
                <p className="text-green-800 text-sm">
                  Your payment is processed securely through Square. We accept all major credit cards and digital wallets.
                </p>
              </div>
              
              {/* Square Payment Button */}
              <div className="flex justify-center mb-6">
                <div style={{
                  overflow: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: '300px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: '-2px 10px 5px rgba(0, 0, 0, 0)',
                  borderRadius: '10px',
                  fontFamily: 'SQ Market, SQ Market, Helvetica, Arial, sans-serif'
                }}>
                  <div style={{ padding: '20px', width: '100%' }}>
                    <button
                      onClick={showCheckoutWindow}
                      disabled={isWaitingForPayment}
                      style={{
                        display: 'inline-block',
                        fontSize: '18px',
                        lineHeight: '48px',
                        height: '48px',
                        color: '#ffffff',
                        width: '100%',
                        backgroundColor: isWaitingForPayment ? '#cccccc' : '#006aff',
                        textAlign: 'center',
                        boxShadow: '0 0 0 1px rgba(0,0,0,.1) inset',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: isWaitingForPayment ? 'not-allowed' : 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      className="hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {isWaitingForPayment ? 'Processing...' : 'Pay $49.99 Now'}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-4">
                  <ExternalLink className="h-4 w-4" />
                  <span>Payment opens in a secure popup window</span>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-semibold mb-1">Payment Instructions:</p>
                      <p>Click "Pay Now" to open the secure Square payment window. After completing payment, return to this page to download your document.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>SSL Secured</span>
            </div>
            <span>•</span>
            <span>Square Payment Processing</span>
            <span>•</span>
            <span>PCI Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
