
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-green-800 text-white py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0">
            <img src="https://picsum.photos/1200/400?image=24" alt="Study materials" className="w-full h-full object-cover opacity-20"/>
        </div>
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          বাছাইকৃত IELTS এক্সপার্টদের ৪০টি প্রিমিয়াম প্যাকেজ
        </h2>
        <p className="mt-4 text-xl md:text-2xl text-green-200">
          আপনার প্রয়োজন অনুযায়ী সেরা প্রস্তুতি নিন
        </p>
      </div>
    </section>
  );
};

export default Hero;
