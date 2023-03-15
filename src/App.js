import React from 'react';
import { CountDown } from './components/CountDown';

export const App = () => {
  return (
    <>
      <main>
        <h1>Website Currently Under Development</h1>
        <CountDown />
        <div className="hills" />
      </main>
    </>
  );
};
