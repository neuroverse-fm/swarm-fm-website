import { h, createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';

const RadioContext = createContext(null);

export function RadioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <RadioContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </RadioContext.Provider>
  );
}

export function useRadio() {
  return useContext(RadioContext);
}