
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Offer from './components/Offer';
import PackageList from './components/PackageList';
import Highlights from './components/Highlights';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              <PackageList />
              <Highlights />
              <Features />
            </div>
            <div className="lg:col-span-1 sticky top-8">
              <Offer />
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
