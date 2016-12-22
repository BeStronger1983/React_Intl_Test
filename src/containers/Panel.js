import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Btn from '../components/Btn';

import * as i18nAction from '../actions/i18nAction';
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import en_US from '../locale/en_US';
import zh_TW from '../locale/zh_TW';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
addLocaleData([...en,...zh]);

class Panel extends React.Component {
    constructor() {
        super();
    }

    render() {

        const { currentLocale, actions } = this.props;
        let children;
        let localeSTR = "en";
        let messageObj = {en_US};

        console.log(currentLocale);

        switch(currentLocale){
            case 'en_US':
            {
                localeSTR = "en";
                messageObj = en_US;
                break;
            };
            case 'zh_TW':
            {
                localeSTR = "zh";
                messageObj = zh_TW;
                break;
            };
        };

        console.log(messageObj);

        children = (
            <IntlProvider locale={localeSTR} messages={messageObj}>
                <FormattedMessage
                   id='hello'
                   description='say hello to David.'
                   defaultMessage='Hello, David'
                />
            </IntlProvider>
        );

        return (
            <div>
                <div> {children} </div>
                <div>
                    <Btn 
                       to_en_US_Action={actions.to_en_US_Action} 
                       to_zh_TW_Action={actions.to_zh_TW_Action}
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