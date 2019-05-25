import React, { Component } from 'react';
import Toast from 'src/components/index';
import './App.less';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello World',
      timeout: 3000,
      method: 'info',
    };
  }

  run = () => {
    const { message, timeout, method } = this.state;
    Toast[method]({
      message,
      timeout,
    });
  };

  render() {
    const { message, timeout, method } = this.state;
    return (
      <div className="page-content">
        <header>
          <div className="form-item">
            <span className="label">text</span>
            <input value={message} onChange={e => this.setState({ message: e.target.value })} />
          </div>
          <div className="form-item">
            <span className="label">timeout</span>
            <input value={timeout} onChange={e => this.setState({ timeout: e.target.value })} />
          </div>
          <div className="form-item">
            <span className="label">timeout</span>
            <select value={method} onChange={e => this.setState({ method: e.target.value })}>
              <option value="info">info</option>
              <option value="success">success</option>
              <option value="error">error</option>
            </select>
            {/* <input value={timeout} onChange={e => this.setState({ timeout: e.target.value })} /> */}
          </div>
          <button className="submit-btn" type="button" onClick={this.run}>
            Show Toast
          </button>
        </header>
      </div>
    );
  }
}

export default App;
