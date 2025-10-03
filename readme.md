# 🚀 Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and cutting-edge web technologies. Showcasing my projects, skills, and professional journey with an elegant and interactive user experience.

![Portfolio Preview](./preview.png) <!-- Add your portfolio screenshot -->

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **🌓 Dark Mode** - Seamless theme switching for comfortable viewing
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Fast Performance** - Built with Vite for lightning-fast load times
- **🎭 Interactive Elements** - Engaging animations and transitions
- **♿ Accessible** - WCAG compliant with semantic HTML
- **🔍 SEO Optimized** - Meta tags and structured data for better visibility

## 🛠️ Built With

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **UI Components:** Custom components with Aceternity UI inspiration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📦 Build for Production

```bash
npm run build
npm run preview
```

The optimized production build will be in the `dist` folder.

## 🎯 Project Structure

```
portfolio/
├── public/
│   ├── logo.png
│   └── projects/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── sections/        # Page sections (Hero, Projects, etc.)
│   │   └── ...
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── assets/              # Images, fonts, etc.
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── vite.config.ts
```

## 🎨 Customization

### Update Personal Information

Edit the following files to personalize your portfolio:

- `src/components/Hero.tsx` - Your name, title, and introduction
- `src/components/About.tsx` - Your bio and skills
- `src/components/Projects.tsx` - Your project showcase
- `src/components/Contact.tsx` - Contact information

### Change Theme Colors

Modify `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Add Your Logo

Replace `public/logo.png` with your own logo image.

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/portfolio)

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting service
3. Configure your domain and SSL certificate

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 👨‍💻 Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📸 Screenshots

### Desktop View
![Desktop](./screenshots/desktop.png)

### Mobile View
![Mobile](./screenshots/mobile.png)

### Dark Mode
![Dark Mode](./screenshots/dark-mode.png)

---

<p align="center">Made with ❤️ and React</p>