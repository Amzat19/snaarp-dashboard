# Snaarp Dashboard - Frontend Assessment

A modern, interactive drag-and-drop dashboard built with React, TypeScript, and Tailwind CSS. This project demonstrates advanced frontend development skills including complex state management, data visualization, and responsive UI design.

![Dashboard Preview](https://snaarp.netlify.app/)

## 🚀 Features

### Core Functionality

- **Drag & Drop Interface**: Reorganize dashboard widgets seamlessly using `@hello-pangea/dnd`
- **Real-time Data Visualization**: Interactive charts using Recharts
- **Responsive Design**: Fully responsive layout that works on all screen sizes
- **Type Safety**: 100% TypeScript coverage with strict type checking

### Dashboard Widgets

1. **Cloud Network**: Overview of users, groups, uploads, and departments with trend indicators
2. **Storage Management**: Visual storage breakdown with usage alerts
3. **File Sharing Analytics**: Monthly file sharing statistics with stacked bar charts
4. **Active Users Map**: Geographic user distribution with country-wise breakdown
5. **Device Management**: Comprehensive device and email statistics
6. **Productivity Report**: Team productivity metrics with visual trends
7. **Email Analytics**: Email traffic analysis with pie and area charts
8. **Online Users Table**: Real-time user activity monitoring
9. **App Activity Report**: Application usage tracking
10. **Web Activity**: Browser and web app usage statistics

## 🛠 Tech Stack

| Category    | Technology              |
| ----------- | ----------------------- |
| Framework   | React 18                |
| Language    | TypeScript              |
| Styling     | Tailwind CSS            |
| Drag & Drop | @hello-pangea/dnd       |
| Charts      | Recharts                |
| Icons       | Lucide React            |
| Build Tool  | Create React App / Vite |

## 📁 Project Structure

src/
├── components/
│ ├── Layout/ # Sidebar, Header, Layout wrapper
│ ├── Dashboard/ # Main dashboard logic, DnD wrapper
│ ├── Widgets/ # Individual dashboard widgets
│ ├── Charts/ # Reusable chart components
│ ├── Cards/ # Stat cards and UI components
│ └── Common/ # Shared utilities and icons
├── types/ # TypeScript interfaces and types
├── data/ # Mock data and constants
└── App.tsx # Application entry point

## 🚦 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/snaarp-dashboard.git

# Navigate to project directory
cd snaarp-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at http://localhost:5173

# Build for Production

npm run build

## 🎯 Key Implementation Details

# Drag & Drop Architecture

- Implemented using @hello-pangea/dnd (maintained fork of react-beautiful-dnd)
- StrictMode-compatible wrapper for React 18
- Smooth animations and visual feedback during drag operations
- Persistent state management for widget order
- Performance Optimizations
- Memoized chart components to prevent unnecessary re-renders
- High contrast mode compatibility

## 🧪 Testing Strategy

Due to time constraints, comprehensive test coverage was planned but not fully implemented. Recommended test approach:

# Unit tests for components

npm test

# E2E tests for drag-and-drop flows

npm run cypress

## 📝 Design Decisions

- Component Composition: Chose composition over inheritance for widget flexibility
- State Management: Used React hooks (useState) over Redux for simpler state needs
- Styling: Tailwind CSS for rapid, consistent styling without CSS-in-JS overhead
- Charts: Recharts for React integration and customization flexibility
