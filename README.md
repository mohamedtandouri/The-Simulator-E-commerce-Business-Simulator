# The Simulator - E-commerce Business Simulator

A comprehensive e-commerce business simulation tool that helps entrepreneurs calculate profitability metrics and make data-driven decisions for their online businesses. With an intuitive interface and accurate calculations based on real market data, you can model different business scenarios before launching your store.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?logo=vite)

---

## 📸 Screenshots

![Home Page - Light Mode](/public/homewhit.png)

![Home Page - Dark Mode](/public/home.png)

![Login Page](/public/login.png)

![Business Setup](/public/business-setup.png)

![Calculator](/public/calculator.png)

---

## 🎯 Key Features

### 🧮 Business Calculator
- **Traffic Analysis**: Calculate spending and traffic volume with precision
- **CPC (Cost Per Click)**: Input and track your advertising costs
- **Landing Page Optimization**:
  - Enable/disable landing page configurations
  - CTR (Click Through Rate) calculations
  - Conversion tracking
- **Sales Metrics**:
  - Product pricing configuration
  - Product cost analysis
  - Real-time conversion rate tracking
- **Up-Sales Management**:
  - Additional product pricing
  - Secondary offer costs and conversions
  - Upsell revenue projections
- **Call Center & Shipping** (for COD businesses):
  - Call center confirmation rates
  - Shipping cost calculations
  - Delivery estimates
- **Instant Results**: Comprehensive profitability calculations with visual charts

### 💡 Core Benefits
- **Easy to Use**: Intuitive interface designed for quick results
- **Accurate Projections**: Based on real market data and trends
- **Detailed Insights**: Comprehensive business metrics visualization
- **Scenario Modeling**: Test different configurations instantly
- **Dark/Light Mode**: Eye-friendly themes for all preferences
- **Secure Authentication**: Protected routes and user sessions

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm, pnpm, or bun package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/tandouridev/The-Simulator---E-commerce-Business-Simulator.git
cd The-Simulator---E-commerce-Business-Simulator
```

2. **Install dependencies**
```bash
npm install
# or
bun install
# or
pnpm install
```

3. **Start the development server**
```bash
npm run dev
# or
bun run dev
```

4. **Open in your browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
bun run build
```

This will create an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
bun run preview
```

---

## 📁 Project Structure

```
The-Simulator---E-commerce-Business-Simulator/
├── src/
│   ├── components/
│   │   ├── ProtectedRoute.tsx          # Route protection for authenticated users
│   │   ├── calculator/                 # Calculator-related components
│   │   │   ├── CallCenterShippingSection.tsx
│   │   │   ├── InputField.tsx          # Reusable input component
│   │   │   ├── LandingPageSection.tsx
│   │   │   ├── SalesSection.tsx
│   │   │   ├── TrafficSection.tsx
│   │   │   └── UpSalesSection.tsx
│   │   └── ui/                         # Shadcn/ui component library
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── header.tsx
│   │       ├── footer.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── tooltip.tsx
│   │       ├── sonner.tsx
│   │       └── use-toast.ts
│   │
│   ├── hooks/                          # Custom React hooks
│   │   ├── use-mobile.tsx             # Mobile detection hook
│   │   └── use-toast.ts               # Toast notification hook
│   │
│   ├── lib/
│   │   └── utils.ts                   # Utility functions and helpers
│   │
│   ├── pages/                          # Page components / Routes
│   │   ├── Index.tsx                  # Home page
│   │   ├── About.tsx                  # About page
│   │   ├── Contact.tsx                # Contact page
│   │   ├── Login.tsx                  # Login page
│   │   ├── Signup.tsx                 # Signup page
│   │   ├── Simulator.tsx              # Business setup page
│   │   ├── Calculator.tsx             # Main calculator page
│   │   ├── Results.tsx                # Results & analytics page
│   │   ├── FAQ.tsx                    # FAQ page
│   │   ├── Legal.tsx                  # Legal information
│   │   ├── Privacy.tsx                # Privacy policy
│   │   ├── Terms.tsx                  # Terms of service
│   │   └── NotFound.tsx               # 404 page
│   │
│   ├── App.tsx                         # Main app component with routing
│   ├── main.tsx                        # React entry point
│   ├── App.css                         # Global styles
│   ├── index.css                       # Base styles
│   └── vite-env.d.ts                  # Vite environment types
│
├── public/                             # Static assets
│   ├── homewhit.png                   # Light mode screenshot
│   ├── home.png                       # Dark mode screenshot
│   ├── login.png                      # Login page screenshot
│   ├── business-setup.png             # Setup page screenshot
│   └── calculator.png                 # Calculator screenshot
│
├── config files
│   ├── vite.config.ts                 # Vite configuration
│   ├── tsconfig.json                  # TypeScript configuration
│   ├── tailwind.config.ts             # Tailwind CSS configuration
│   ├── postcss.config.js              # PostCSS configuration
│   ├── eslint.config.js               # ESLint configuration
│   ├── components.json                # Components metadata
│   └── package.json                   # Project dependencies
│
├── README.md                           # This file
└── .gitignore                          # Git ignore rules
```

---

## 💻 Tech Stack

### Frontend
- **React 18**: Modern UI library with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS transformations

### Routing & State
- **React Router DOM**: Client-side routing
- **React Context API**: State management
- **TanStack React Query**: Data fetching and caching

### UI Components
- **Shadcn/ui**: High-quality UI components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library

### Data Visualization
- **ECharts**: Powerful charting library
- **echarts-for-react**: React wrapper for ECharts

### Forms & Validation
- **React Hook Form**: Efficient form management
- **Zod**: TypeScript-first schema validation

### Utilities
- **clsx**: Conditional CSS class names
- **date-fns**: Modern date utility library

### Development Tools
- **ESLint**: Code quality and style checking
- **Embla Carousel**: Accessible carousel library

---

## 📖 Usage Guide

### 1. User Authentication
- Visit the home page and click "Start"
- Sign up or log in with your credentials
- Mock authentication is used for demo purposes

### 2. Business Setup
- Select your business type (E-commerce/Dropshipping or COD)
- Choose your preferred currency
- Select your preferred language
- Click "Continue" to proceed

### 3. Calculator Configuration
- **Traffic Section**: Enter your traffic spending and CPC costs
- **Landing Page** (optional): Enable to add CTR calculations
- **Sales Metrics**: Input product price, cost, and conversion rate
- **Up Sales** (optional): Add secondary product offers
- **Call Center & Shipping** (for COD): Configure additional costs

### 4. View Results
- Click "Calculate Results" to process your inputs
- View comprehensive profitability metrics
- See visualized data with interactive charts
- Get annual revenue projections

### 5. Export Results
- Download results as CSV for further analysis
- Use insights to optimize your business strategy

---

## 🔐 Security Features

### Authentication
- Session-based authentication with localStorage
- Protected routes for authenticated users only
- Mock token generation for demonstration
- User email validation

### Data Handling
- Input validation on all form fields
- Number range validation for calculations
- Prevention of negative values and invalid conversions
- Clear error messages for user guidance

### Best Practices
- Secure password handling in signup/login
- Protected calculator routes
- Automatic redirect to login for unauthenticated users

---

## ⚙️ Configuration

### Environment Setup
No environment variables required for the demo version.

### Customization Options

#### Theme Configuration
Edit `tailwind.config.ts` to customize:
- Colors
- Fonts
- Spacing
- Dark mode settings

#### Calculator Settings
Modify calculator components in `src/components/calculator/` to:
- Add new calculation metrics
- Change validation rules
- Update business logic

#### UI Components
Customize UI components in `src/components/ui/` for:
- Button styles
- Form layouts
- Dialog appearances
- Notification styles

---

## 🔄 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot reload on `http://localhost:5173`

### Build
```bash
npm run build
```
Creates an optimized production build

### Build (Development Mode)
```bash
npm run build:dev
```
Creates a development build with source maps

### Preview
```bash
npm run preview
```
Preview the production build locally

### Linting
```bash
npm run lint
```
Run ESLint to check code quality

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Traditional Hosting
1. Run `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes (SPA)

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 📊 Features in Detail

### Business Calculator
The calculator uses real-world formulas for:
- **Revenue Calculation**: Product Price × Conversion Rate
- **Cost Analysis**: Traffic Spending + Product Cost
- **Net Profit**: Total Revenue - Total Costs
- **ROAS**: Return on Ad Spend calculations
- **Margin Analysis**: Profit margin percentages

### Results Visualization
Interactive charts showing:
- Pie charts for cost/revenue breakdown
- Rose type pie charts for alternative views
- Auto-rotating visualizations
- Hover tooltips with detailed information

### Business Type Support
- **E-commerce/Dropshipping**: Basic product sales model
- **COD (Cash on Delivery)**: Includes call center and shipping costs

---

## 🐛 Error Handling

The app includes comprehensive error handling for:
- Missing required fields
- Invalid number formats
- Negative values
- Percentage range validation (0-100%)
- Product cost exceeding product price
- Network errors with retry logic

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Code Guidelines
- Follow TypeScript best practices
- Use React hooks and functional components
- Maintain consistent code style with ESLint
- Add comments for complex logic
- Test your changes thoroughly
- Update README if adding new features

---

## 📋 Page Overview

| Page | Route | Description | Access |
|------|-------|-------------|--------|
| Home | `/` | Landing page with features | Public |
| Login | `/login` | User authentication | Public |
| Signup | `/signup` | User registration | Public |
| Simulator | `/simulator` | Business setup | Protected |
| Calculator | `/calculator` | Main calculator tool | Protected |
| Results | `/results` | Results & analytics | Protected |
| About | `/about` | Company information | Public |
| Contact | `/contact` | Contact form | Public |
| FAQ | `/faq` | Frequently asked questions | Public |
| Privacy | `/privacy` | Privacy policy | Public |
| Terms | `/terms` | Terms of service | Public |
| Legal | `/legal` | Legal information | Public |
| 404 | `/*` | Page not found | All |

---

## 🔍 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Change the port
npm run dev -- --port 3000
```

**Node modules issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Clear Vite cache
rm -rf dist .vite
npm run build
```

**TypeScript errors:**
```bash
# Ensure TypeScript is up to date
npm install --save-dev typescript@latest
```

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [React Router Documentation](https://reactrouter.com)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙋 Support & Feedback

### Contact Information
- **Email**: contact@simulator.com
- **Website**: https://simulator.com
- **GitHub**: [@tandouridev](https://github.com/tandouridev)

### Report Issues
1. Check existing issues on GitHub
2. Provide detailed description and steps to reproduce
3. Include screenshots if applicable
4. Mention your OS and browser version

### Feature Requests
We'd love to hear your suggestions! Please open an issue with:
- Clear description of the feature
- Use cases and benefits
- Any additional context

---

## 🗺️ Roadmap

### Upcoming Features
- [ ] Multi-language support (i18n)
- [ ] Advanced analytics and reporting
- [ ] API integration for real market data
- [ ] User profiles and saved simulations
- [ ] Collaborative features
- [ ] Mobile app (React Native)
- [ ] Email report generation
- [ ] Integration with payment platforms
- [ ] A/B testing simulator
- [ ] Competitor analysis tools

### Bug Fixes & Improvements
- [ ] Performance optimization
- [ ] Accessibility enhancements
- [ ] More detailed chart customization
- [ ] Extended error handling
- [ ] Better mobile responsiveness

---

## 👨‍💻 Author

**Tandouri Dev**
- GitHub: [@tandouridev](https://github.com/tandouridev)
- Portfolio: [tandouri.dev](https://tandouri.dev)

---

## ⭐ Show Your Support

If you find this project helpful, please consider:
- Starring the repository
- Sharing with others
- Contributing to the project
- Providing feedback and suggestions

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Shadcn/ui](https://ui.shadcn.com) - UI components
- [ECharts](https://echarts.apache.org) - Data visualization
- [Lucide Icons](https://lucide.dev) - Icons
- [React Router](https://reactrouter.com) - Routing

---

**Last Updated**: January 2026

**Current Version**: 1.0.0

**Status**: Active Development ✨

