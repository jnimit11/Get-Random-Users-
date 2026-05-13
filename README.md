# 👥 Random Users UI

A modern, responsive web application that displays random user profiles with search functionality. Built with React and Vite, featuring a sleek, contemporary design with smooth animations and excellent user experience.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## 📖 About

**Random Users UI** is a React mini-project that fetches random user data from an external API and displays it in an interactive, visually appealing interface. Users can search through the list of users by name, refresh to load new users, and enjoy a smooth browsing experience with modern UI/UX patterns.

This project demonstrates:

- React hooks (useState, useEffect)
- API data fetching
- Search/filter functionality
- Modern CSS with gradients and animations
- Responsive grid layout
- Component-based architecture

## ✨ Features

- **Random User Generation**: Fetches 20 random users from a public API
- **Search Functionality**: Filter users by first or last name in real-time
- **Refresh Users**: Load a new batch of random users with a single click
- **Modern UI Design**:
  - Gradient backgrounds and glass-morphism effects
  - Smooth hover animations on user cards
  - Responsive grid layout that adapts to all screen sizes
- **Enhanced Loading State**: Animated spinner with descriptive message
- **Empty State Handling**: User-friendly message when no search results found
- **Professional Footer**: Copyright information with hover effects

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Build Tool**: Vite
- **Styling**: CSS3 (with gradients, animations, backdrop-filter)
- **API**: [Free API - Random Users](https://api.freeapi.app/api/v1/public/randomusers)
- **Linting**: ESLint

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/jnimit11/Get-Random-Users-.git
   cd random-users-ui
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (default Vite port)

## 🚀 Usage

### Development

```bash
npm run dev
```

Runs the app in development mode with hot module replacement (HMR).

### Production Build

```bash
npm run build
```

Creates an optimized production bundle.

### Preview Build

```bash
npm run preview
```

Locally preview the production build.

## 📁 Project Structure

```
random-users-ui/
├── src/
│   ├── components/
│   │   ├── Loader.jsx           # Loading spinner component
│   │   └── UserCard.jsx         # Individual user profile card
│   ├── pages/
│   │   └── Home.jsx             # Main home page with search
│   ├── App.jsx                  # Root app component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                    # This file
```

## 🎨 Component Overview

### App.jsx

Root component that renders the Home page.

### Home.jsx

Main page component featuring:

- Search input with icon
- Refresh button
- User grid display
- Empty state handling

### UserCard.jsx

Displays individual user information:

- Profile picture
- Name, email
- Location and phone number
- Hover effects and animations

### Loader.jsx

Loading indicator with smooth spinner animation.

## 🎯 How It Works

1. On page load, the app fetches 20 random users from the API
2. Users are displayed in an interactive grid layout
3. Search input filters users by name (first or last name)
4. Refresh button loads a new batch of users
5. Cards have smooth hover animations and transitions
6. Empty state shows when no search results match

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

© 2026 Nimit Jain. All rights reserved.

---

**Made with ❤️ by Nimit Jain**
