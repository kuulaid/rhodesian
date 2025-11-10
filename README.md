# Rhodesian Sales Corp. Website

A modern, responsive web application showcasing products and company information for **Rhodesian Sales Corp.**, built with **React**, **TypeScript**, **Tailwind CSS**, and **React Router**.

## Features

- **Product Catalog**
  - Browse products with images and names.
  - Filter products by category via URL query parameters or dropdown.
  - View product details in a modal window.

- **Search Functionality**
  - Search products by name.
  - Combines with category filter for precise results.

- **Responsive Layout**
  - Grid layout for products.
  - Fully responsive across mobile, tablet, and desktop screens.

- **Footer**
  - Company information.
  - Quick links to About, Products, Contact pages.
  - Connect with social media (Facebook, Shopee).
  - Cookies information modal.

- **Modular Components**


## Project Structure

src/
├── components/
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── ProductModal.tsx
├── data/
│   └── products.ts
├── pages/
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── ProductsPage.tsx
└── App.tsx



- **components/** – Reusable UI components
- **data/** – Product data
- **pages/** – Main page components (Products, Contact, About)
- **App.tsx** – Route definitions

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kuulaid/rhodesian.git
cd rhodesian-sales

    Install dependencies:

npm install
# or
yarn install

    Start the development server:

npm run dev
# or
yarn dev

The app will be available at http://localhost:5173.


Build the production version:

npm run build
# or
yarn build

This project is proprietary, developed for Rhodesian Sales Corp.