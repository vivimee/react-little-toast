/* eslint-disable */

import React from 'react';
import { render } from 'react-dom';
import ToastContainer from './ToastContainer';

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
      this.toastContainer.pushToastItem({ ...config, _type: 'info' });
    };
  
    success = config => {
      this.toastContainer.pushToastItem({ ...config, _type: 'success' });
    };

    error = config => {
      this.toastContainer.pushToastItem({ ...config, _type: 'error' });
    }
  }
  
  export default new Toast();
  