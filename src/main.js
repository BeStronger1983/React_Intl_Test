import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import I18n from './containers/I18n';

import configureStore from './store/configureStore';

ReactDOM.render(
	<Provider store={configureStore}>		
		<I18n />
	</Provider>,
	document.getElementById('app')
);
