import React, { useEffect } from 'react';

const SaveGameState = (key: string, defaultValue: any) => {
  const [state, setState] = React.useState(
    () => JSON.parse((localStorage.getItem(key) as string)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export default SaveGameState;
