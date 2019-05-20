/* eslint-disable */

import React from 'react';
import { render } from 'react-dom';
import './Toast.less';
// import PropTypes from 'prop-types';

class InfoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      timeup: false,
      display: true,
    };
  }

  componentDidMount() {
    const { timeout = 3000 } = this.props;
    this.timmer = setTimeout(() => {
      this.setState({ timeup: true }, () => {
        this.timmer = setTimeout(() => {
          this.setState({ display: false });
        }, 200);
      });
    }, timeout);
  }

  componentWillUnmount() {
    clearTimeout(this.timmer);
  }

  render() {
    const { timeup, display } = this.state;
    const { message, _type = 'info', className } = this.props;
    return display ? (
      <div className={`rlt-toast-item ${_type} ${timeup ? 'fade' : ''} ${className || ''}`}>
        {message}
      </div>
    ) : null;
  }
}

class ToastContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  pushInfo = config => {
    const { messages } = this.state;
    this.setState({ messages: messages.concat([{ ...config, _type: 'info' }]) });
  };

  pushSuccess = config => {
    const { messages } = this.state;
    this.setState({ messages: messages.concat([{ ...config, _type: 'success' }]) });
  };

  messageMapper = (config, idx) => {
    if (config._type === 'info') {
      return <InfoItem key={idx} {...config} />;
    } else if (config._type === 'success') {
      return <InfoItem key={idx} {...config} />
    }
  };

  render() {
    const { messages } = this.state;
    return (<div className="rlt-toast-container">
      {messages.map(this.messageMapper)}
    </div>);
  }
}

ToastContainer.propTypes = {
  /** 按钮边距 */
  // margin: PropTypes.string,
};

class Toast {
  constructor() {
    if (typeof window === 'undefined') return;
    const ele = document.createElement('div');
    document.body.appendChild(ele);
    render(<ToastContainer ref={this.bindToastContainer} />, ele);
    this.ele = ele;
  }

  bindToastContainer = dom => {
    this.toastContainer = dom;
  };

  info = config => {
    this.toastContainer.pushInfo(config);
  };

  success = config => {
    this.toastContainer.pushSuccess(config);
  };
}

export default new Toast();
