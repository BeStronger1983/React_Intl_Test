import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Panel from './containers/Panel';

import configureStore from './store/configureStore';

// i18n
// import zh_TW from './locale/zh_TW';
// import en_US from './locale/en_US';
// import intl from 'intl';
// import zh from 'react-intl/locale-data/zh';
// import en from 'react-intl/locale-data/en';
// import {IntlProvider, addLocaleData} from 'react-intl';
// addLocaleData([...en,...zh]);

// const localeList = {
// 	en_US: 'en',
// 	zh_TW: 'zh'
// };

// const messagesList = {
// 	en_US,
// 	zh_TW
// };

// <IntlProvider locale={localeList[]} messages={zh_TW}>
// </IntlProvider>

ReactDOM.render(
	<Provider store={configureStore}>		
		<Panel />
	</Provider>,
	document.getElementById('app')
);
