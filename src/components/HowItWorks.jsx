import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Choose',
      description: 'Pick your favorites',
      icon: '🎁'
    },
    {
      number: '2',
      title: 'We Prepare',
      description: 'Made fresh with care',
      icon: '👨‍🍳'
    },
    {
      number: '3',
      title: 'Delivered',
      description: 'To your door, warm',
      icon: '🚚'
    }
  ];

  return (
    <section className="bg-[#f5f1ed] px-4 md:px-12 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-xs font-bold text-[#b8860b] tracking-widest uppercase mb-2">HOW IT WORKS</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c2c2c]">Simple. Fresh. Delivered.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-2xl font-bold text-[#2c2c2c] mb-2">{step.number}. {step.title}</h3>
            <p className="text-[#666]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
