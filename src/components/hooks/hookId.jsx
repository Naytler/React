import { useState } from 'react';

const useId = () => {
  const [id, setId] = useState('');

  const generateId = () => {
    const newId = `id-${Math.random().toString(36).substr(2, 9)}`;
    setId(newId);
  };
  useState(() => {
    generateId();
  });
  return id;
};

export default useId;
