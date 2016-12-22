import React from 'react';

class Btn extends React.Component {
    render() {
      const { to_en_US_Action, to_zh_TW_Action, to_zh_Action } = this.props;

      return (
        <div>
          <button onClick={to_en_US_Action}> English </button>
          <button onClick={to_zh_TW_Action}> 繁體中文 </button>
          <button onClick={to_zh_Action}> 简体中文 </button>
        </div>
      )
    }
} 

export default Btn;