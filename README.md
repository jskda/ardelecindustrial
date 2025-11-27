# Ardelec Industrial — Corporate Website

[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Swiper](https://img.shields.io/badge/Swiper.js-6332F6?logo=swiper&logoColor=white)](https://swiperjs.com/)
[![React Router](https://img.shields.io/badge/React_Router-000000?logo=react-router&logoColor=white)](https://reactrouter.com/)

> A modern, responsive corporate website for **Ardelec Industrial Solutions**, rebuilt from legacy Bootstrap/jQuery using **React 19**, **Tailwind CSS v4**, **React Router**, and **Swiper.js**.  
> Features modular components, unified spacing system, adaptive typography, and optimized WebP assets for superior performance.


## 📋 Features

> [!NOTE]  
> **Production-ready static site** with zero server dependencies

- **🌐 Fully Responsive** — Mobile-first design with Tailwind breakpoints
- **⚡ Hero Slider** — Autoplay, navigation, animated text layers (100-400ms stagger)
- **📱 Sticky Navigation** — Desktop dropdowns + mobile accordion menu
- **🎨 Dynamic Titles** — Angled "bookmark" labels with background images
- **⚙️ Optimized Assets** — WebP images, lazy loading ready
- **🔗 Clean Routing** — React Router v6 with nested `/activities/*` routes


## 🛠 Tech Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | [React](https://react.dev/) | 19 | Component architecture |
| **Routing** | [React Router DOM](https://reactrouter.com/) | 6 | SPA navigation |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first CSS |
| **Slider** | [Swiper.js](https://swiperjs.com/) | latest | Hero carousel |
| **Build** | [Vite](https://vitejs.dev/) | latest | Fast dev/build |
| **Assets** | WebP | Optimized | Image performance |


## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation
#### Clone & install
- git clone [jskda/ardelecindustrial.git](https://github.com/jskda/ardelecindustrial.git)
- cd ardelec-website
- npm install

#### Development server
npm run dev

#### Build for production
npm run build

**Output:** `dist/` — Deploy anywhere!


## 📦 Deployment

> [!TIP]  
> **Zero-config deployment** — just upload `dist/`

| Platform | Command | URL |
|----------|---------|-----|
| Vercel | `vercel --prod` | [vercel.com](https://vercel.com) |
| Netlify | Drag `dist/` | [netlify.com](https://netlify.com) |
| GitHub Pages | `gh-pages -d dist` | [pages.github.com](https://pages.github.com) |
| Cloudflare | `wrangler pages publish dist/` | [pages.cloudflare.com](https://pages.cloudflare.com) |


## 🎨 Customization

1. **Colors** — Edit `tailwind.config.js`
2. **Assets** — Replace `src/assets/*.webp`
3. **Content** — Update `pages/*.jsx`
4. **Menu** — Modify `MainMenu.jsx` items


## 🔧 Development Scripts

- npm run dev # → http://localhost:5173
- npm run build # → dist/
- npm run preview # → Preview production build
- npm run lint # → ESLint check


## 🤝 Contributing

1. Fork the repo
2. Create feature branch (`git checkout -b feature/amazing-slider`)
3. Commit changes (`git commit -m "Add amazing slider"`)
4. Push & open PR

> [!IMPORTANT]  
> External PRs welcome for documentation & performance improvements!


## 📄 License

Proprietary - Ardelec Industrial Solutions Ltd
Company Registration: 14794597
See LICENSE for details


## 🙌 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Swiper.js](https://swiperjs.com/) — Amazing slider library
- [React Spring](https://react-spring.dev/) — Smooth animations
- Original design inspiration: [ardelecindustrial.com](mailto:info@ardelecindustrial.com)


<div align="center">

**⭐ Star to show some love!**  
**📧 Contact:** info@ardelecindustrial.com | **📞** +44 203 693 3963

</div>