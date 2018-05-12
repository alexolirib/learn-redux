import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {



  render() {
    return (
      <div className="App">
        <p>{this.props.value}</p>
        <input type="text" value={this.props.value} onChange={this.onHandleValue} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ value: state.field.value })

export default connect(mapStateToProps)(App);
