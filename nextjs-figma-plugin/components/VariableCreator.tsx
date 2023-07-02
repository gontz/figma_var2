import React, { useState } from 'react';
import { FigmaStyles } from '../utils/figmaAPI';

interface VariableCreatorProps {
  styles: FigmaStyles[];
}

const VariableCreator: React.FC<VariableCreatorProps> = ({ styles }) => {
  const [variables, setVariables] = useState({});

  const createVariables = () => {
    let newVariables = {};
    styles.forEach(style => {
      newVariables[style.name] = style;
    });
    setVariables(newVariables);
  };

  return (
    <div>
      <button onClick={createVariables}>Create Variables</button>
      <pre>{JSON.stringify(variables, null, 2)}</pre>
    </div>
  );
};

export default VariableCreator;