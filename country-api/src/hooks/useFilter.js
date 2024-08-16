import { useState } from 'react';

const useFilter = () => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleFilterChange = (region) => {
    setSelectedRegion(region);
  };

  return {
    selectedRegion,
    handleFilterChange
  };
};

export default useFilter;