import React from 'react';
import { render } from 'react-dom';

import App from './app';
import { withGlobalState } from './state';
import { initRouter } from './router';

initRouter();

const WithState = withGlobalState(App);
render(<WithState />, document.getElementById('root'));