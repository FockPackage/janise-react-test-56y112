/**
 * Created by cform on 16/7/1.
 */
import React from 'react';
import styles from './styles/styles.css';

class Canvas extends React.Component {

  constructor() {
    super();
  }


  componentDidMount() {

  }

  render() {
    return (

        <div className={styles.mainWrapper} ref={node => this.mainWrapper = node}>
          <span>Canvas</span>
          <div className={styles.radius}>

          </div>
          <div className= {styles.other}></div>
        </div>
    );
  }
}

Canvas.defaultProps = {};

export default Canvas;