import React, { useState } from 'react';

interface StyleSelectorProps {
  styles: string[];
  onStyleSelect: (selectedStyles: string[]) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ styles, onStyleSelect }) => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  const handleStyleSelect = (style: string) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter(s => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  const handleSubmit = () => {
    onStyleSelect(selectedStyles);
  };

  return (
    <div>
      <h2>Select Styles</h2>
      {styles.map(style => (
        <div key={style}>
          <input
            type="checkbox"
            id={style}
            name={style}
            value={style}
            onChange={() => handleStyleSelect(style)}
          />
          <label htmlFor={style}>{style}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StyleSelector;