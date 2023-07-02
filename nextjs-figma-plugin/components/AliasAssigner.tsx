import React, { useState } from 'react';

interface AliasAssignerProps {
  variables: string[];
}

const AliasAssigner: React.FC<AliasAssignerProps> = ({ variables }) => {
  const [aliasMap, setAliasMap] = useState<{ [key: string]: string }>({});

  const handleAliasChange = (variable: string, alias: string) => {
    setAliasMap(prev => ({ ...prev, [variable]: alias }));
  };

  return (
    <div>
      <h2>Alias Assigner</h2>
      {variables.map(variable => (
        <div key={variable}>
          <label>{variable}</label>
          <input
            type="text"
            value={aliasMap[variable] || ''}
            onChange={e => handleAliasChange(variable, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default AliasAssigner;