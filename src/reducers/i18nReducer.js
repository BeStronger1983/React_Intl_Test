import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...zh]);

import { CHANGE_LOCALE } from '../actions/i18nAction';
import en_US from '../locale/en_US';
import zh_TW from '../locale/zh_TW';

const i18nReducer = (state = {
    locale: 'en',
    messages: en_US
}, action) => {
    switch(action.type) {
        case CHANGE_LOCALE:
            return {
                locale: action.locale,
                messages: langCodeToLocaleData(action.locale)
            };
        default:
            return state;
    }
}

function langCodeToLocaleData(code) {
    switch(code) {
        case 'en': return en_US;
        case 'zh': return zh_TW;
    }
}

export default i18nReducer;
