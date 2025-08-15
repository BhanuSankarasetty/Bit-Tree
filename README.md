# 🌳 Bittree — Your Link in Bio, Reimagined

Bittree is a modern **Next.js 14** application that lets you create a single, shareable link for all your content.  

---

## 🚀 Features
- **Modern UI** with Tailwind CSS
- **Instant navigation** using Next.js App Router
- **Custom handle** for your Bittree profile
- Optimized images with Next.js `<Image />`
- Responsive and mobile-friendly layout
- Dynamic routes for handles


---

## 📂 Project Structure

```
bittree/
├── app/ # Next.js app directory (routes, pages, API)
│ ├── [handle]/ # Dynamic route for user profiles
│ ├── generate/ # Handle generation page
│ ├── page.js # Homepage
│ ├── layout.js # Root layout
│ ├── globals.css # Global styles
├── components/ # Reusable UI components
├── public/ # Static assets (images, icons, fonts)
├── lib/ # Utility functions
├── package.json # Project dependencies
├── README.md # This file

```

---

## 🛠️ Tech Stack
- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: JavaScript / JSX
- **Routing**: App Router with dynamic routes
- **Package Manager**: npm

---

## 📦 Installation
```
# Clone this repository
git clone https://github.com/yourusername/bittree.git
cd bittree
```

# Install dependencies
```
npm install
```

# Start development server
```
npm run dev
```
- The app will be running at http://localhost:3000

## 🔧 Environment Variables

Create a .env.local file in the root directory and add:
```
NEXT_PUBLIC_HOST=http://localhost:3000
```