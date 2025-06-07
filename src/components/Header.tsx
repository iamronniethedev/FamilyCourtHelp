import React from 'react';
import { Scale, Shield, Award } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-2 rounded-lg">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">FamilyCourtHelp</h1>
              <p className="text-sm text-gray-600">Self-Representation Made Simple</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-green-600" />
              <span>Secure & Confidential</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Award className="h-4 w-4 text-blue-600" />
              <span>Professional Quality</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;