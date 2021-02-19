import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <>
    <button className="btn" onClick={() => history.push('/')}>Back</button>
    </>
  )
}
