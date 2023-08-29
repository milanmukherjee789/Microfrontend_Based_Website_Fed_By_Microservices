import React, { useEffect, useState } from 'react';

const App5Container = (props) => {
  const [content, setContent] = useState(null);
    const [productsInCartCount, setProductsInCartCount] = useState(0);
window.username = props.username;
  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = props.url;//'http://localhost:3001/static/js/bundle.js'; // Replace with the correct relative path to the bundle.js file for App2
      script.async = false;

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
    <div id="app_container1">
      
      {content && <p>{content}</p>}
    </div>
  );
};

export default App5Container;
