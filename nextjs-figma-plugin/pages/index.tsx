```tsx
import React from 'react';
import StyleReader from '../components/StyleReader';
import VariableCreator from '../components/VariableCreator';
import AliasAssigner from '../components/AliasAssigner';
import StyleSelector from '../components/StyleSelector';
import ModeAssigner from '../components/ModeAssigner';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Next.js Figma Plugin</h1>
      <StyleReader />
      <VariableCreator />
      <AliasAssigner />
      <StyleSelector />
      <ModeAssigner />
    </div>
  );
};

export default Home;
```