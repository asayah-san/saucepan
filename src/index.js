import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import Saucepan from './app/Saucepan';
import i18n from './i18n';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<Saucepan />
		</I18nextProvider>
	</React.StrictMode>,
  document.getElementById('root')
);