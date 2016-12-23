import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Show from '../components/Show';
import Btn from '../components/Btn';

import * as i18nAction from '../actions/i18nAction';
import { addLocaleData, IntlProvider} from 'react-intl';
import en_US from '../locale/en_US'; // 英文 美國
import zh_TW from '../locale/zh_TW'; // 繁體中文
import zh_S from '../locale/zh_S'; // 簡體中文
import en from 'react-intl/locale-data/en';
addLocaleData([...en,...zh]);
import zh from 'react-intl/locale-data/zh'; // 包括繁體中文(zh-Hant)、簡體中文(zh)

import cookie from 'react-cookie';

class Panel extends React.Component {
    constructor() {
        super();
    }

    render() {

        const { currentLocale, actions } = this.props;
        let children;
        let localeSTR = "zh";
        let messageObj = {zh_S};
        let langType = currentLocale || cookie.load('lang');

        switch(langType){
            case 'en_us':
            {
                localeSTR = "en";
                messageObj = en_US;
                break;
            };
            case 'zh_tw':
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

        cookie.save('lang', currentLocale);

        children = (
            <IntlProvider locale={localeSTR} messages={messageObj}>
                <Show />
            </IntlProvider>
        );

        return (
            <div>
                <div> {children} </div>
                <div>
                    <Btn 
                       to_en_US_Action={actions.to_en_US_Action} 
                       to_zh_TW_Action={actions.to_zh_TW_Action}
                       to_zh_Action={actions.to_zh_Action}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentLocale: state.i18nReducer.locale
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(i18nAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);