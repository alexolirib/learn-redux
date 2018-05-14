import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {inc, exp, setup, reset} from './actionCreator/actionCount'

class Count extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.numb}</h1>
                <button onClick={this.props.inc}>inc</button>
                <button onClick={this.props.exp}>exp</button>
                <button onClick={this.props.reset}>Reset</button>
                <input type="number" value={this.props.set} onChange={this.props.setup} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    numb: state.count.number,
    set: state.count.set
})

const mapDispatchToProps = dispatch => (bindActionCreators({inc,exp,setup,reset},dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Count);