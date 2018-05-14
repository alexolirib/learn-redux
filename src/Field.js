import React, { Component } from 'react';
import { connect } from 'react-redux';
//o bindActionCreators é o que liga as ações criadas com os dispatchs
import { bindActionCreators } from 'redux';
import { changeValue } from './actionCreator/changeValue'

class Field extends Component {



  render() {
    return (
      <div className="App">
        <p>{this.props.value}</p>
        <input type="text" onChange={this.props.changeValue} value={this.props.value} />
      </div>
    );
  }
}

//aqui fico mapeando o estado para propriedade
const mapStateToProps = state => ({ value: state.field.value })


//aqui estamos mapeando o método para a props
//recebe como parametro o dispatch é que dispara a ação e assim fazer o connect
//bindActionCreators(todas os actions creator(sendo um objeto), aqui o dispatch(dispar ação))
const mapDispatchToProps = dispatch => (bindActionCreators({ changeValue }, dispatch));

//connect para conectar a aplicação com o redux
//mapStateToProps - mapear o estado e jogar na propriedade dos meus componentes
//mapDispatchToProps - mapear os meus actionCreator e como jogar no meus componentes
export default connect(mapStateToProps, mapDispatchToProps)(Field);
