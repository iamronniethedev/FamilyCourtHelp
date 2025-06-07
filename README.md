# FamilyCourtHelp - Legal Document Preparation Service

A professional web application for generating family court legal documents including contempt motions, enforcement actions, and parenting time modifications.

## Features

- **Motion for Contempt** - File when the other parent is violating a court order
- **Motion to Enforce** - Enforce specific provisions of an existing court order  
- **Motion to Modify Parenting Time** - Change existing parenting time arrangements
- Professional legal document generation
- Secure payment processing (Stripe integration ready)
- Responsive design with modern UI/UX
- Legal disclaimers and privacy protection

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Payment Processing**: Stripe (integration ready)
- **Document Generation**: AI-powered (ChatGPT integration ready)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/familycourthelp.git
cd familycourthelp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push to main branch

### Other Platforms

The built static files in `dist/` can be deployed to any static hosting service.

## Payment Integration

To enable payment processing:

1. Create a [Stripe account](https://dashboard.stripe.com/register)
2. Get your API keys from the Stripe Dashboard
3. Set up webhooks for payment processing
4. Integrate with document generation service

## Legal Compliance

This application includes:
- Comprehensive legal disclaimers
- Terms of Service
- Privacy Policy
- Data protection measures

**Important**: This service provides document templates only and does not constitute legal advice. Users should consult with qualified attorneys for legal guidance.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary. All rights reserved.

## Contact

For questions or support, contact: support@familycourthelp.com

---

**Disclaimer**: This application is for document preparation only and does not provide legal advice. Consult with a qualified attorney for legal guidance specific to your situation.