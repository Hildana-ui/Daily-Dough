import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '👑',
      title: 'Freshly Made Daily',
      description: 'Crafted every morning'
    },
    {
      icon: '🍃',
      title: 'Premium Ingredients',
      description: 'No shortcuts, ever'
    },
    {
      icon: '❤️',
      title: 'Made With Love',
      description: 'From our kitchen to you'
    }
  ];

  return (
    <section className="bg-[#fff9f3] px-4 md:px-12 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">{feature.title}</h3>
            <p className="text-[#666]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
