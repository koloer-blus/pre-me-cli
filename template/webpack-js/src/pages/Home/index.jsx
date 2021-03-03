import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Logo from './logo.svg';
import './index.less';

const HelloWorldDemoPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="/demo"
          target="_blank"
          rel="demo"
        >
          Click here jump to demo~
        </a>
        <Logo className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default HelloWorldDemoPage;
