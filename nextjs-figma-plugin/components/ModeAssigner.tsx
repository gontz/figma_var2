import React, { useState } from 'react';

interface ModeAssignerProps {
  styles: any[];
  variables: any[];
  aliases: any[];
}

const ModeAssigner: React.FC<ModeAssignerProps> = ({ styles, variables, aliases }) => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [selectedStyles, setSelectedStyles] = useState<any[]>([]);

  const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMode(event.target.value);
  };

  const handleStyleSelection = (style: any) => {
    setSelectedStyles(prevStyles => [...prevStyles, style]);
  };

  const assignModeToStyles = () => {
    // Here you would use the Figma API to assign the selected mode to the selected styles
    // This is just a placeholder as the actual implementation would depend on the Figma API
  };

  return (
    <div>
      <h2>Mode Assigner</h2>
      <select onChange={handleModeChange}>
        <option value="">Select a mode</option>
        {variables.map(variable => (
          <option key={variable.id} value={variable.id}>{variable.name}</option>
        ))}
      </select>
      <div>
        {styles.map(style => (
          <div key={style.id}>
            <input type="checkbox" id={style.id} onChange={() => handleStyleSelection(style)} />
            <label htmlFor={style.id}>{aliases[style.id] || style.name}</label>
          </div>
        ))}
      </div>
      <button onClick={assignModeToStyles}>Assign Mode</button>
    </div>
  );
};

export default ModeAssigner;