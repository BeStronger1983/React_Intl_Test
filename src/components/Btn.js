import React from 'react';

class Btn extends React.Component {
    render() {
      const { to_en_US_Action, to_zh_TW_Action } = this.props;

      return (
        <div>
          <button onClick={to_en_US_Action}> en_US </button>
          <button onClick={to_zh_TW_Action}> zh_TW </button>
        </div>
      )
    }
} 

export default Btn;