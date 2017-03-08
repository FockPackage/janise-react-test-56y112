import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../../components/main/';
import {numberAddOne} from './action';




/* Populated by react-webpack-redux:reducer */
class App extends Component {

  constructor(){
    super();
    this.handerAddNumber = this.handerAddNumber.bind(this);
  }

  handerAddNumber(){
    const {actions} = this.props;
    actions.numberAddOne('2');
  }


  render() {
    const {actions,appReaducer} = this.props;
    return <div>
      <button style={{width:'120px', height:'60px'}} onClick={this.handerAddNumber}>
      </button>

      <span>
        {appReaducer.number}
      </span>
      <Main actions={actions}/>
    </div>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {appReaducer: state.appReaducer};
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {numberAddOne};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
