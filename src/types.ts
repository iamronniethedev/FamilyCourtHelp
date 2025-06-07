export type MotionType = 'contempt' | 'enforce' | 'modify';

export interface FormData {
  name: string;
  caseNumber: string;
  county: string;
  otherParent: string;
  orderDate: string;
  violationDescription: string;
  reliefRequested: string;
  children: string;
  signature: string;
  date: string;
}