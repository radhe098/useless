    // utils/slugGenerator.js

function customHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; 
    }
    return hash.toString(16); 
  } 
  export function generateSlug(input) {
    const now = new Date();
    const halfHourInterval = Math.floor(now.getTime() / (20 * 60 * 1000));
    const combinedInput = `${halfHourInterval}${input}`;
    return customHash(combinedInput);
  }
  