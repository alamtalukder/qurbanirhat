import Banner from '@/components/home/Banner';
import FeaturedAnimals from '@/components/home/FeaturedAnimals';
import QurbaniTipsAndBreeds from '@/components/home/QurbaniTipsAndBreeds';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeaturedAnimals />
      <QurbaniTipsAndBreeds/>
    </div>
  );
};

export default HomePage;