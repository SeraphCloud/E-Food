# 🍽️ E-Food - Restaurant Delivery Platform

A modern, responsive restaurant delivery platform built with React, TypeScript, and Redux Toolkit. Browse restaurants, explore menus, add items to your cart, and manage your orders with an intuitive user interface.

## 🚀 Features

### 🏪 Restaurant Discovery
- Browse a curated selection of restaurants
- View restaurant details, ratings, and cuisines
- Filter restaurants by type and featured status

### 🍕 Menu Management
- Detailed menu items with descriptions and pricing
- High-quality food images
- Responsive menu layouts for all devices

### 🛒 Shopping Cart
- Add items to cart directly from restaurant menus
- Quantity controls with increment/decrement buttons
- Real-time cart total calculation
- Persistent cart state management
- Click header cart indicator to open cart

### 💰 Brazilian Currency Formatting
- Proper Brazilian Real (R$) formatting with comma decimal separators
- Currency symbols and locale-specific formatting

### 🎨 Modern UI/UX
- Clean, intuitive design with consistent color scheme
- Responsive layout for mobile and desktop
- Smooth animations and transitions
- Accessible interface with proper ARIA labels

### 🔧 Technical Features
- TypeScript for type safety
- Redux Toolkit for state management
- RTK Query for API data fetching
- Styled Components for maintainable CSS-in-JS
- React Router for navigation
- ESLint and Biome for code quality

## 🛠️ Technologies Used

### Frontend Framework
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

### State Management
- **Redux Toolkit** - Simplified Redux implementation
- **RTK Query** - Powerful data fetching and caching

### Styling
- **Styled Components** - CSS-in-JS with theme support
- **React Icons** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **Biome** - Fast code formatting and linting
- **Vite** - Lightning-fast development server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SeraphCloud/E-Food.git
   cd efood
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Cart/           # Shopping cart functionality
│   ├── FoodCard/       # Individual food item display
│   ├── Modal/          # Modal dialogs for item details
│   ├── RestaurantCard/ # Restaurant listing cards
│   └── ...
├── pages/              # Page components and routing
├── hooks/              # Custom React hooks
├── store/              # Redux store and reducers
├── styles/             # Global styles and theme
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── services/           # API service configurations
```

## 🎨 Design System

The application uses a consistent color palette:
- **Orange (#E66767)** - Primary brand color for buttons and accents
- **Cream (#FFEBD9)** - Background and secondary elements
- **Off-white (#FFF8F2)** - Page backgrounds

## 🌐 API Integration

The application integrates with a mock API endpoint:
- **Base URL**: `https://fake-api-havokk.vercel.app/api/efood`
- **Endpoints**: Restaurants and menu data
- Uses RTK Query for efficient data fetching and caching

## 📱 Responsive Design

- **Mobile-first approach** with breakpoints
- **Tablet and desktop optimized layouts**
- **Touch-friendly interface elements**

## 🔒 Code Quality

- **TypeScript** for compile-time type checking
- **ESLint** for code linting and consistency
- **Biome** for fast code formatting
- **Prettier-compatible** formatting rules

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

For questions or support, please contact the development team.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
