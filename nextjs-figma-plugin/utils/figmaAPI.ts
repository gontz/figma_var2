```typescript
import axios from 'axios';

const FIGMA_API_URL = 'https://api.figma.com/v1';

export const getStyles = async (fileId: string, token: string) => {
  const response = await axios.get(`${FIGMA_API_URL}/files/${fileId}/styles`, {
    headers: {
      'X-Figma-Token': token,
    },
  });
  return response.data;
};

export const createVariable = async (styleId: string, token: string) => {
  const response = await axios.post(
    `${FIGMA_API_URL}/styles/${styleId}/variables`,
    {},
    {
      headers: {
        'X-Figma-Token': token,
      },
    }
  );
  return response.data;
};

export const assignAlias = async (variableId: string, alias: string, token: string) => {
  const response = await axios.put(
    `${FIGMA_API_URL}/variables/${variableId}/alias`,
    { alias },
    {
      headers: {
        'X-Figma-Token': token,
      },
    }
  );
  return response.data;
};

export const selectStyles = async (styleIds: string[], token: string) => {
  const response = await axios.post(
    `${FIGMA_API_URL}/styles/select`,
    { styleIds },
    {
      headers: {
        'X-Figma-Token': token,
      },
    }
  );
  return response.data;
};

export const assignMode = async (styleId: string, mode: string, token: string) => {
  const response = await axios.put(
    `${FIGMA_API_URL}/styles/${styleId}/mode`,
    { mode },
    {
      headers: {
        'X-Figma-Token': token,
      },
    }
  );
  return response.data;
};
```