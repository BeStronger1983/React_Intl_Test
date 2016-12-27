import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addLocaleData, IntlProvider} from 'react-intl';
import en_US from '../locale/en_US'; // 英文 美國
import zh_TW from '../locale/zh_TW'; // 繁體中文
import zh_S from '../locale/zh_S'; // 簡體中文
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh'; // 包括繁體中文(zh-Hant)、簡體中文(zh)

import cookie from 'react-cookie';

import Panel from '../containers/Panel';

addLocaleData([...en,...zh]);

class I18n extends Component {

	render() {
		const { currentLocale } = this.props;
	    let localeSTR = "zh";
	    let messageObj = {zh_S};
	    let langType = currentLocale || cookie.load('lang') || 'zh';

	    switch(langType){
	        case 'en_US':
	        {
	            localeSTR = "en";
	            messageObj = en_US;
	            break;
	        };
	        case 'zh_TW':
	        {
	            localeSTR = "zh-Hant";
	            messageObj = zh_TW;
	            break;
	        };
	        case 'zh':
	        {
	            localeSTR = "zh";
	            messageObj = zh_S;
	            break;
	        };
	    };

	    cookie.save('lang', langType);

	    return (
          <div>
          	<IntlProvider key={currentLocale} locale={localeSTR} messages={messageObj}>
		            <Panel />
		        </IntlProvider>
          </div>
        )
	}
}

const mapStateToProps = (state) => {
    return {
        currentLocale: state.i18nReducer.locale
    }
}

export default connect(mapStateToProps)(I18n);
