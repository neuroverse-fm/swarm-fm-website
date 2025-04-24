import { createContext } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";
import { selfQueryYouTubeStream } from "../consts";

const RadioContext = createContext(null);

export function RadioProvider({ children }) {
  const [streamUrl, setStreamUrl] = useState<string>("");

  useEffect(() => {
    async function fetchStreamUrl() {
      const url = await selfQueryYouTubeStream();
      setStreamUrl(url);
    }
    fetchStreamUrl();
  }, []);

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