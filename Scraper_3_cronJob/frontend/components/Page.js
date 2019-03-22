import { useEffect, useState } from 'react';
import { ScrapeProvider } from './ScrapeContext';

//Custom Hook

function useScrapes() {
  //This is the initial state inside the Hook
  const [scrapes, setScrapes] = useState({
    twitter: [],
    instagram: []
  });

  useEffect(function() {
    (async () => {
      console.log('Mounting or Updating');
      const res = await fetch('http://localhost:2093/Data');
      const data = await res.json();
      console.log(data);
      setScrapes(data);
    })();
  }, []);
  return scrapes;
}

export default function Page({ children }) {
  const scrapes = useScrapes();
  return (
    <ScrapeProvider
      value={{
        scrapes
      }}
    >
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}
