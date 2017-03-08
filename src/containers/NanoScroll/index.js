/**
 * Created by cform on 16/7/1.
 */
import React from 'react';
import styles from './styles/styles.less';
import nanoScroller from  'nanoScroller';

class NanoScroll extends React.Component {

  constructor() {
    super();
  }


  componentDidMount() {
    $(".nano").nanoScroller();

  }

  render() {
    return (

        <div className='mainWrapper' ref={node => this.mainWrapper = node}>
          <span style={{display : 'block', width : '100%', textAlign : 'center', padding : '36px 16px', fontSize : '36px' }}> NanoScroll Block </span>

          <div className="nano">
            <ul className ='scrollBlock nano-content'>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
              <li/>
            </ul>
          </div>


          <span style={{display : 'block', width : '100%', textAlign : 'center', padding : '36px 16px', fontSize : '36px' }}> No NanoSCroll Block</span>

          <div className = 'colorBlock'>

          </div>
          <div className = 'colorBlock'>

          </div>
          <div className = 'colorBlock'>

          </div>
          <div className = 'colorBlock'>

          </div>

        </div>
    );
  }
}

NanoScroll.defaultProps = {};

export default NanoScroll;
