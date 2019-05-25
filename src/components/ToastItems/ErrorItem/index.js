/* eslint-disable */

import React from 'react';
import ErrorIcon from '../../assets/error.png';
import './index.less';

export default ({ message }) => {
    return (
        <div className="rlt-info-item fail">
            <img className="s-ico" src={ErrorIcon} />
            <div>{message}</div>
        </div>
    );
};
