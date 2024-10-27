// /pages/_app.js
import { createContext, useState, useEffect, useContext } from 'react';


// 1. Create SlugContext to provide global access to the slugs
const SlugContext = createContext();

// 2. Custom hook to access slug map from any component
export function useSlugMap() {
  return useContext(SlugContext);
}

// 3. Custom hash function
function customHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to a 32-bit integer
  }
  return hash.toString(16); // Convert to hexadecimal string
}

// 4. Function to generate a map of slugs based on interval and inputs
function generateHashMapForInterval(inputs) {
  const now = new Date();
  const halfHourInterval = Math.floor(now.getTime() / (20 * 60 * 1000));
  const slugMap = {};

  inputs.forEach((input) => {
    const combinedInput = `${halfHourInterval}${input}`;
    slugMap[input] = customHash(combinedInput); // Store the hash in the map
  });

  return slugMap;
}

function MyApp({ Component, pageProps }) {
  const [slugMap, setSlugMap] = useState({});

  useEffect(() => {
    const inputs = ["blogs", "intervals", "phase3"]; // Unique inputs for route slugs

    function updateSlugMap() {
      setSlugMap(generateHashMapForInterval(inputs));
    }

    updateSlugMap();

    // Update slugs every 20 minutes
    const intervalId = setInterval(updateSlugMap, 20 * 60 * 1000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  // Provide the slugMap globally
  return (
    <SlugContext.Provider value={slugMap}>
      <Component {...pageProps} />
    </SlugContext.Provider>
  );
}

export default MyApp;
