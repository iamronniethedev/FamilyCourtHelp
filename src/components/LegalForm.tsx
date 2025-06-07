import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { FormData, MotionType } from '../types';

interface LegalFormProps {
  motionType: MotionType;
  onComplete: (data: FormData) => void;
  onBack: () => void;
  initialData: FormData;
}

const LegalForm: React.FC<LegalFormProps> = ({ motionType, onComplete, onBack, initialData }) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isValid, setIsValid] = useState(false);

  const motionTitles = {
    contempt: 'Motion for Contempt',
    enforce: 'Motion to Enforce',
    modify: 'Motion to Modify Parenting Time'
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Full legal name is required';
    if (!formData.caseNumber.trim()) newErrors.caseNumber = 'Case number is required';
    if (!formData.county.trim()) newErrors.county = 'County and state are required';
    if (!formData.otherParent.trim()) newErrors.otherParent = 'Other parent\'s name is required';
    if (!formData.orderDate.trim()) newErrors.orderDate = 'Order date is required';
    if (!formData.violationDescription.trim()) newErrors.violationDescription = 'Violation description is required';
    if (!formData.reliefRequested.trim()) newErrors.reliefRequested = 'Relief requested is required';
    if (!formData.children.trim()) newErrors.children = 'Children\'s names are required';
    if (!formData.signature.trim()) newErrors.signature = 'Signature name is required';
    if (!formData.date.trim()) newErrors.date = 'Date is required';

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onComplete(formData);
    }
  };

  const getPlaceholderText = (field: keyof FormData) => {
    const placeholders = {
      name: 'Enter your full legal name as it appears on official documents',
      caseNumber: 'Enter the case number from your existing court order',
      county: 'Enter county and state (e.g., Cook County, Illinois)',
      otherParent: 'Enter the other parent\'s full legal name',
      orderDate: 'MM/DD/YYYY',
      violationDescription: 'Describe specifically how the court order is being violated...',
      reliefRequested: 'Describe what you want the judge to order...',
      children: 'Enter the first names of all children involved',
      signature: 'Enter your name as you will sign the document',
      date: 'MM/DD/YYYY'
    };
    return placeholders[field];
  };

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
                  {motionTitles[motionType]}
                </h2>
                <p className="text-blue-100">Complete the form below to generate your motion</p>
              </div>
            </div>
            <FileText className="h-8 w-8 text-white" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Full Legal Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={getPlaceholderText('name')}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Case Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Case Number *
              </label>
              <input
                type="text"
                value={formData.caseNumber}
                onChange={(e) => handleInputChange('caseNumber', e.target.value)}
                placeholder={getPlaceholderText('caseNumber')}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.caseNumber ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {errors.caseNumber && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.caseNumber}</span>
                </p>
              )}
            </div>

            {/* County */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                County & State *
              </label>
              <input
                type="text"
                value={formData.county}
                onChange={(e) => handleInputChange('county', e.target.value)}
                placeholder={getPlaceholderText('county')}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.county ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {errors.county && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.county}</span>
                </p>
              )}
            </div>

            {/* Other Parent */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Other Parent's Name *
              </label>
              <input
                type="text"
                value={formData.otherParent}
                onChange={(e) => handleInputChange('otherParent', e.target.value)}
                placeholder={getPlaceholderText('otherParent')}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.otherParent ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {errors.otherParent && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.otherParent}</span>
                </p>
              )}
            </div>

            {/* Order Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Date of Current Order *
              </label>
              <input
                type="date"
                value={formData.orderDate}
                onChange={(e) => handleInputChange('orderDate', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.orderDate ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {errors.orderDate && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.orderDate}</span>
                </p>
              )}
            </div>

            {/* Children */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Children's First Names *
              </label>
              <input
                type="text"
                value={formData.children}
                onChange={(e) => handleInputChange('children', e.target.value)}
                placeholder={getPlaceholderText('children')}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.children ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {errors.children && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.children}</span>
                </p>
              )}
            </div>
          </div>

          {/* Violation Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              How is the order being violated? *
            </label>
            <textarea
              value={formData.violationDescription}
              onChange={(e) => handleInputChange('violationDescription', e.target.value)}
              placeholder={getPlaceholderText('violationDescription')}
              rows={4}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 resize-none ${
                errors.violationDescription ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
            />
            {errors.violationDescription && (
              <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.violationDescription}</span>
              </p>
            )}
          </div>

          {/* Relief Requested */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              What are you asking the judge to do? *
            </label>
            <textarea
              value={formData.reliefRequested}
              onChange={(e) => handleInputChange('reliefRequested', e.target.value)}
              placeholder={getPlaceholderText('reliefRequested')}
              rows={4}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 resize-none ${
                errors.reliefRequested ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
            />
            {errors.reliefRequested && (
              <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.reliefRequested}</span>
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Signature */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Your Signature Name *
              </label>
              <input
                type="text"
                value={formData.signature}
                onChange={(e) => handleInputChange('signature', e.target.value)}
                placeholder={getPlaceholderText('signature')}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.signature ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {errors.signature && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.signature}</span>
                </p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Today's Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.date ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.date}</span>
                </p>
              )}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Before you continue:</p>
                <p>Please review all information carefully. This data will be used to generate your legal motion document. Ensure all names, dates, and descriptions are accurate.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={onBack}
              className="sm:w-auto px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Back to Motion Selection
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className={`flex-1 sm:flex-none px-8 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isValid
                  ? 'bg-gradient-to-r from-blue-900 to-blue-700 text-white hover:shadow-lg focus:ring-blue-500'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LegalForm;