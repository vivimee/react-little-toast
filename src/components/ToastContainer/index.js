/* eslint-disable */

import React from 'react';
import ToastItemWrapper from '../ToastItemWrapper';
import InfoItem from '../ToastItems/InfoItem';
import SuccessItem from '../ToastItems/SuccessItem';
import './index.less';

const WrappedInfoItem = ToastItemWrapper(InfoItem);
const WrappedSuccessitem = ToastItemWrapper(SuccessItem);

export default class ToastContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        messages: [],
      };
    }

    pushToastItem = config => {
        const { messages } = this.state;
        this.setState({ messages: messages.concat([config])}); 
    };
  
    messageMapper = (config, idx) => {
      switch (config._type) {
          case 'success':
            return <WrappedSuccessitem key={idx} {...config} />
          case 'info':
          default:
            return <WrappedInfoItem key={idx} {...config} />
      }
    };
  
    render() {
      const { messages } = this.state;
      return (<div className="rlt-toast-container">
        {messages.map(this.messageMapper)}
      </div>);
    }
}
