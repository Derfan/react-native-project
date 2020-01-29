import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useDimensions = () => {
  const [window, setWindow] = useState(Dimensions.get('window'));

  const handler = ({ window }) => setWindow(window);

  useEffect(() => {
    Dimensions.addEventListener('change', handler);

    return () => {
      Dimensions.removeEventListener('change', handler);
    };
  }, []);

  return { ...window, mode: window.height > window.width ? 'portrait' : 'landscape' };
};

export default useDimensions;
