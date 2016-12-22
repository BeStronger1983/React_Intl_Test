import { createStore, combineReducers } from 'redux';

import i18nReducer from '../reducers/i18nReducer';

const rootReducer = combineReducers({
    i18nReducer
})

export default createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : undefined);