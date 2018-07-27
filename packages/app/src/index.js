//
// Include general styles
// This styles will be extracted by "Extract Text Plugin"
import 'styles/index.styl';
// Web App Manifest (Progressive Apps)
import './web-app.manifest';
// --------- Keep on top

import * as OfflinePlugin from '@offline-plugin/runtime';
OfflinePlugin.install();

// fake render
const render = (html, elem) => {
  elem.innerHTML = html;
};

const bootstrap = () => {
  render('<h1>Reboot Ok!</h1>', document.getElementById('root'));
};

window.addEventListener('DOMContentLoaded', bootstrap, false);
