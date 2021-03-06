import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Core } from './core/core';
import i18n from './i18n';

import './assets/output.css';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<Core />
		</I18nextProvider>
	</React.StrictMode>,
  document.getElementById('root')
);