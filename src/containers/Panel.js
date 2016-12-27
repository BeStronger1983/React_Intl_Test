import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Show from '../components/Show';
import Btn from '../components/Btn';

import * as i18nAction from '../actions/i18nAction';

class Panel extends React.Component {
    render() {
        const { actions } = this.props;

        return (
            <div>
                <div> <Show /> </div>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(i18nAction, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Panel);
