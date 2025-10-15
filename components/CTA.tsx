
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-green-700 py-16 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          এখনই সিদ্ধান্ত নিন - আপনার IELTS সফলতা নির্ভর করছে এটার উপর!
        </h3>
        <a
          href="https://wa.me/8801674163570?text=I%20want%20to%20order%20the%20IELTS%20package."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-yellow-400 text-green-900 font-extrabold text-xl md:text-2xl py-4 px-10 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-pulse"
        >
          <span role="img" aria-label="zap">⚡</span> অর্ডার করুন - ৭০% ডিস্কাউন্ট + ফ্রী গিফ্টস! <span role="img" aria-label="zap">⚡</span>
        </a>
      </div>
    </section>
  );
};

export default CTA;
