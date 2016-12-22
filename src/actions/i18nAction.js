export const CHANGE_LOCALE = 'CHANGE_LOCALE';

export const to_en_US_Action = () => {
    return {
        type: CHANGE_LOCALE,
        locale: 'en'
    }
}

export const to_zh_TW_Action = () => {
    return {
        type: CHANGE_LOCALE,
        locale: 'zh'
    }
}
