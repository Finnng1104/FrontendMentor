import { useState } from 'react';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return {
    searchTerm,
    handleSearch
  };
};

export default useSearch;