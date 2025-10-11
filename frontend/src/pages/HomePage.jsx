import React from 'react';
import Hero from '../components/Hero';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';

const HomePage = () => {
  return (
    <div className="text-[var(--text-white)]">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default HomePage;