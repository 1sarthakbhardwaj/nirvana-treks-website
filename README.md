# Nirvana Treks & Tours Website

A professional, modern website for Nirvana Treks & Tours - a Government of India authorized travel company specializing in Himalayan adventures and cultural tours across incredible India.

![Nirvana Treks & Tours](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38bdf8)

## ✨ Features

### 🎨 Modern Design
- **Professional UI/UX** with stunning gradients and glass-morphism effects
- **Responsive design** that works perfectly on all devices
- **Dark/Light theme support** with smooth transitions
- **Professional animations** and micro-interactions

### 🏔️ Business Features
- **Government authorization badges** for credibility
- **Tour showcase** with detailed itineraries and pricing
- **Interactive contact form** with destination selector
- **Professional booking flow** with call-to-action buttons
- **SEO optimized** for search engine visibility

### 🚀 Technical Excellence
- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS 4** for modern styling
- **Server-side rendering** for optimal performance
- **Mobile-first responsive design**
- **Accessibility compliant** with proper ARIA labels

## 🏞️ Tour Offerings

### Featured Adventures
- **Kashmir Great Lakes Trek** - 7-day alpine adventure through pristine lakes
- **Spiti Valley Road Trip** - 8-day journey through the cold desert
- **Kerala Backwaters Retreat** - 4-day peaceful houseboat experience

### Tour Features
- ✅ Government authorized and licensed
- ✅ Expert local guides and safety equipment
- ✅ Small group sizes (max 12 travelers)
- ✅ All permits and transportation included
- ✅ 24/7 emergency support during adventures

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Ready for Vercel/Netlify

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/1sarthakbhardwaj/nirvana-treks-website.git

# Navigate to project directory
cd nirvana-treks-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
nirvana-website/
├── app/                    # Next.js App Router
│   ├── (site)/            # Site pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   └── tours/         # Tours pages
│   ├── globals.css        # Global styles with theme support
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── hero.tsx          # Hero section
│   ├── site-header.tsx   # Navigation header
│   ├── footer.tsx        # Footer
│   ├── theme-provider.tsx # Theme context
│   └── theme-toggle.tsx  # Dark/light mode toggle
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🎯 Key Pages

- **Homepage** (`/`) - Hero section, featured tours, company highlights
- **Tours** (`/tours`) - Complete tour listings with filters
- **Tour Details** (`/tours/[slug]`) - Detailed itineraries, pricing, booking
- **About** (`/about`) - Company information and certifications
- **Contact** (`/contact`) - Interactive contact form and business details

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🌙 Theme Support

- **Light Mode**: Clean, professional appearance for daytime browsing
- **Dark Mode**: Rich, immersive experience for evening browsing
- **System**: Automatically follows user's device preference
- **Smooth Transitions**: Elegant 300ms transitions between themes

## 🔧 Customization

### Updating Tour Content
Edit tour data in:
- `app/(site)/tours/[slug]/page.tsx` - Individual tour details
- `app/(site)/tours/page.tsx` - Tours listing
- `app/page.tsx` - Featured tours on homepage

### Styling Customization
- Theme colors in `app/globals.css`
- Component styles using Tailwind classes
- Custom animations and transitions

### Contact Information
Update business details in:
- `app/(site)/contact/page.tsx`
- `components/footer.tsx`

## 📈 SEO Optimization

- ✅ Proper meta tags and OpenGraph data
- ✅ Semantic HTML structure
- ✅ Image alt texts and descriptions
- ✅ Optimized loading and performance
- ✅ Mobile-friendly design

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy the 'out' folder to Netlify
```

## 📞 Contact & Support

For questions about the website or Nirvana Treks & Tours:

- **Website**: [Live Demo](https://nirvana-treks-website.vercel.app)
- **Email**: info@nirvanatreks.com
- **Phone**: +91 98765 43210

## 📄 License

This project is created for Nirvana Treks & Tours. All rights reserved.

---

**Built with ❤️ for authentic Indian adventures**

*Government of India Authorized Travel Company*