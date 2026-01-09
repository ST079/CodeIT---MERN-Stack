# Day 9 of Mern Stack Journey

## 🌙 Tailwind CSS Dark Mode & Customization
Tailwind CSS provides built-in support for **dark mode** and allows deep **customization** using the `tailwind.config.js` file. These features help you build modern, theme-based, and scalable user interfaces.

---

## 🌙 Dark Mode in Tailwind CSS

Dark mode allows your website to switch between **light** and **dark** themes for better user experience, especially in low-light environments.

---

### 🔹 Enabling Dark Mode

In `tailwind.config.js`, enable dark mode using one of the following methods:

### 1️⃣ Class-Based Dark Mode (Recommended)
```js
module.exports = {
  darkMode: 'class',
}

📌 Dark mode is enabled by adding the dark class to the <html> or <body> element.
```

2️⃣ Media-Based Dark Mode
```
module.exports = {
  darkMode: 'media',
}

📌 Automatically follows the user’s system dark mode preference.
```
---

## 🎨 Using Dark Mode Utilities
Tailwind provides the dark: prefix to apply styles when dark mode is active.

Example
```
<div class="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
  Dark Mode Card
</div>
```
```
✔ Light mode → white background
✔ Dark mode → dark background
```

## 🔁 Toggling Dark Mode (Class Method)
```
<html class="dark">
📌 Removing the dark class switches back to light mode.
```

Example Button
```
<button class="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded">
  Toggle Theme
</button>
```

## 🧠 Best Practices for Dark Mode

- Use neutral colors for dark backgrounds
- Avoid pure black (#000)
- Ensure text contrast for readability
- Test UI in both modes
🛠️ Customization in Tailwind CSS
---

Tailwind is fully customizable using the tailwind.config.js file.

## 🎨 Custom Colors
```
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#9333ea',
      },
    },
  },
}
```
Usage
```
<div class="bg-primary text-white">
  Custom Color
</div>
```

## 🔤 Custom Fonts
```
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
}

<p class="font-sans">
  Custom Font Text
</p>
```
---

## 📏 Custom Spacing
```
module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
    },
  },
}

<div class="p-72">
  Custom Spacing
</div>
```

## 📱 Custom Breakpoints
```
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
    },
  },
}

<div class="xs:text-lg">
  Extra Small Screen Text
</div>
```
