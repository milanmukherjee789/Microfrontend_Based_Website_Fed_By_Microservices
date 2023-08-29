import React, { useEffect, useState } from 'react';

const App2Container = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'http://localhost:3003/static/js/bundle.js'; // Replace with the correct relative path to the bundle.js file for App2
      script.async = true;

      // Check if the bundle.js file is already loaded
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (!existingScript) {
        document.body.appendChild(script);
      }

      return () => {
        // Remove the script element on component unmount
        document.body.removeChild(script);
      };
    }
  }, []);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     fetch('http://localhost:3001') // Replace with the appropriate URL for your App2 server
  //       .then(response => response.json())
  //       .then(data => setContent(data.content));
  //   }
  // }, []);

  return (
    <div id="app_container2">
      
      {content && <p>{content}</p>}
    </div>
  );
};

export default App2Container;
