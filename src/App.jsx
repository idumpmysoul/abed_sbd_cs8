import React from 'react';
import Navbar from './components/NavigationBar';
import Hero from './Pages/Hero';
import ProductGrid from './Pages/ProductGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;