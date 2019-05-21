/* eslint-disable */

import React from 'react';

export default (ToastItem) => {
    return class extends React.Component {
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
            return display ? (
                <div className={`rlt-toast-item ${timeup ? 'fade' : ''}`}>
                    <ToastItem {...this.props} />
                </div>
            ) : null;
        }
    }
};