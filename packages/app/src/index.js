//
// Base styles
import './styles/index.css';
// Web App Manifest (Progressive Apps)
import './manifest.json';
// --------- Keep on top

import React from 'react';
import { render } from 'react-dom';

import { Button } from '@reboot/ui';

// install offline-plugin
require('offline-plugin/runtime').install();

// fake render
// const render = (html, elem) => {
// elem.innerHTML = html;
// };

const bootstrap = () => {
  render(
    <h1>
      <Button>Reboot Ok!</Button>
    </h1>,
    document.getElementById('root')
  );
};

window.addEventListener('DOMContentLoaded', bootstrap, false);
