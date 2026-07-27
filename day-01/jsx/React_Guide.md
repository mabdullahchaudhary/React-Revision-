# ⚛️ React, JSX, and Optimization Guide

This guide covers basic concepts of React, how JSX works, and best practices for front end optimization.

## 1. ⚡ React and Vite Setup

This project uses Vite to set up React quickly. Vite provides Hot Module Replacement and fast build times.

* 🔌 You can use the Vite React plugin which uses Oxc, or the Vite SWC plugin which uses SWC.
* ⚙️ The React Compiler is turned off by default to save performance during development.
* 🛡️ For big projects, it is highly recommended to use TypeScript with ESLint for better code quality and type safety.

## 2. 🧩 Understanding JSX

Browsers do not understand JSX or even HTML written inside JavaScript files (like `<p>hello</p>`). Browsers only understand pure JavaScript.

During the build process, tools like SWC or Babel convert your JSX or TSX files into pure JavaScript. This helps the browser understand and run your code.

📝 Example of JSX:

```javascript
const element = <h1 className="header">Hello World</h1>
```

🔄 After compilation, it becomes pure JavaScript:

```javascript
const element = _jsx("h1", {
  className: "header",
  children: "Hello World"
});
```

## 3. 🚀 Frontend Optimization

Front end optimization has three main pillars:
1. 🖼️ Asset Optimization 
2. 📦 Bundle Optimization 
3. 🧹 Clean Code and Preventing Extra Re renders

### 🖼️ Asset Optimization

* **📂 Public vs. Assets Folder:** The `public` folder contains static files that Vite does not process. However, it is better to place images and logos in the `src/assets/images` folder so Vite can optimize them during the build.
* **⚡ Image Loading:** Use `loading="eager"` and `fetchpriority="high"` for important images (like the logo or banner) that must show immediately.
* **⏳ Lazy Loading Images:** Use `loading="lazy"` for images that are not immediately visible. They will only load when the user scrolls down to see them.
* **📸 Modern Image Formats:** Always try to use WebP or AVIF formats. These file sizes are about 70 percent smaller than JPEG or PNG.
* **🔤 Font Optimization:** Preload custom fonts from the server to make text render faster. For example: `<link rel="preload" as="style" href="..." />`

### 📦 Bundle Optimization

* **🧩 Lazy Loading Components:** Create chunks by lazy loading components. For example: `const HomePage = lazy(() => import('@/pages/HomePage'));`. This ensures the app only loads the code needed for the current screen.
* **🔮 Prefetching:** You can use mouse hover events to prefetch the next page (like a Dashboard) in the background before the user even clicks it.
* **🪶 Smaller Libraries:** Before installing a heavy library, check if there is a lighter alternative that takes up less space.
* **🎯 Targeted Imports:** Do not import everything from a library. Only import the specific parts you need.

### 🧹 Clean Code and React Optimization

* **🗑️ Remove Console Logs:** Do not leave `console.log` statements in your production code. You can easily remove them during the build by adding `drop: ['console', 'debugger']` to your vite.config.js file.
* **🛡️ Preventing Re renders:** In React, prevent the whole component from updating if only a small part changes. Use hooks like `useMemo` and `useCallback` to cache values and functions.
* **📜 Virtualization for Long Lists:** If your page has 200 or more items, do not render all of them at once. Render only the items visible on the screen, and load more as the user scrolls.
