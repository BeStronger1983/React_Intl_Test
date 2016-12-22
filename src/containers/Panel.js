import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Btn from '../components/Btn';

import * as i18nAction from '../actions/i18nAction';
import { IntlProvider, FormattedMessage } from 'react-intl';

class Panel extends React.Component {
    render() {
        const { i18n, actions } = this.props;
        return (
            <div>
                <div>
                    <IntlProvider {...i18n}>
                        <FormattedMessage
                           id='hello'
                           description='say hello to David.'
                           defaultMessage='Hello, David'
                        />
                    </IntlProvider>
                </div>
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
        i18n: state.i18nReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(i18nAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
