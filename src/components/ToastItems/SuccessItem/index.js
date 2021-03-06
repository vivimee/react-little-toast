/* eslint-disable */

import React from 'react';
import SuccessIcon from '../../assets/check.png';
import './index.less';

export default ({ message }) => {
    return (
        <div className="rlt-info-item success">
            <img className="s-ico" src={SuccessIcon} />
            <div>{message}</div>
        </div>
    );
};
