```tsx
import React, { useEffect, useState } from 'react';
import { getStyles } from '../utils/figmaAPI';

const StyleReader: React.FC = () => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    async function fetchStyles() {
      const fetchedStyles = await getStyles();
      setStyles(fetchedStyles);
    }

    fetchStyles();
  }, []);

  return (
    <div>
      <h2>Styles</h2>
      {styles.length > 0 ? (
        <ul>
          {styles.map((style, index) => (
            <li key={index}>{style}</li>
          ))}
        </ul>
      ) : (
        <p>No styles found.</p>
      )}
    </div>
  );
};

export default StyleReader;
```