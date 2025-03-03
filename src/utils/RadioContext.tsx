import { createContext } from "preact";
import { useState, useContext } from "preact/hooks";
import { YOUTUBE_STREAM } from "../consts";

const RadioContext = createContext(null);

export function RadioProvider({ children }) {
  const [streamUrl, setStreamUrl] = useState<string>(YOUTUBE_STREAM);

  return (
    <RadioContext.Provider value={{ streamUrl, setStreamUrl }}>
      {children}
    </RadioContext.Provider>
  );
}

export function useRadio() {
  return useContext(RadioContext);
}

export default useRadio;