const initialState = {
}

const i18nReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_LOCALE':
            return {
                ...state,
                locale: action.locale
            }
        default: 
            return state;
    }
}

export default i18nReducer;