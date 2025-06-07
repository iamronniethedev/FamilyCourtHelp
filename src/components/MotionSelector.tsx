import React from 'react';
import { FileText, Gavel, Clock, Users } from 'lucide-react';
import { MotionType } from '../types';

interface MotionSelectorProps {
  onSelect: (motion: MotionType) => void;
}

const MotionSelector: React.FC<MotionSelectorProps> = ({ onSelect }) => {
  const motionTypes = [
    {
      type: 'contempt' as MotionType,
      title: 'Motion for Contempt',
      icon: Gavel,
      description: 'File when the other parent is violating a court order',
      details: [
        'Not following parenting time schedule',
        'Refusing to pay child support as ordered',
        'Violating communication restrictions',
        'Not complying with court-ordered requirements'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      type: 'enforce' as MotionType,
      title: 'Motion to Enforce',
      icon: FileText,
      description: 'Enforce specific provisions of an existing court order',
      details: [
        'Enforce parenting time arrangements',
        'Enforce decision-making authority',
        'Enforce relocation restrictions',
        'Enforce other court-ordered obligations'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      type: 'modify' as MotionType,
      title: 'Motion to Modify Parenting Time',
      icon: Clock,
      description: 'Change existing parenting time arrangements',
      details: [
        'Adjust visitation schedule',
        'Modify holiday arrangements',
        'Change pickup/drop-off locations',
        'Adapt to changed circumstances'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Users className="h-12 w-12 text-blue-900" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Choose Your Motion Type
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Select the type of legal motion you need to file. Each option is designed to address specific family court situations with professionally crafted templates.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {motionTypes.map((motion) => {
          const IconComponent = motion.icon;
          return (
            <div
              key={motion.type}
              className={`${motion.bgColor} ${motion.borderColor} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
              onClick={() => onSelect(motion.type)}
            >
              <div className="text-center mb-6">
                <div className={`bg-gradient-to-r ${motion.color} p-4 rounded-full inline-flex mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {motion.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {motion.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 border-b border-gray-300 pb-2">
                  Common Uses:
                </h4>
                <ul className="space-y-2">
                  {motion.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button className={`w-full bg-gradient-to-r ${motion.color} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`}>
                  Select This Motion
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <FileText className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-2">Need Help Choosing?</h3>
            <p className="text-yellow-800 leading-relaxed">
              If you're unsure which motion type fits your situation, consider consulting with a family law attorney for a brief consultation. The right motion type is crucial for achieving your desired outcome in court.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionSelector;