import React from 'react';
import styles from './styles/styles.css';
import ScrollMagic from 'ScrollMagic';


class ScrollMargic extends React.Component {

  constructor() {
    super();
    this.state = {
      transformY: 0,
    };

    this.windowOnScroll = this.windowOnScroll.bind(this);


  }


  windowOnScroll() {
    const that = this;
    const sectionWrapper = this.mainWrapper;
    var controller = new ScrollMagic.Controller({container: sectionWrapper, refreshInterval: 0});
    //this.scene = new ScrollMagic.Scene({triggerHook: 0, offset: 300});

    var scene = new ScrollMagic.Scene({triggerElement: ".content4", duration: 300})
        .on("update", (event)=> {
          that.setState({
            transformY: 0 - event.scrollPos / 2,
          })
        })
        .addTo(controller);

    /*
     this.scene.addTo(this.controller)
     .on("update", (event)=> {
     that.setState({
     transformY: 0 - event.scrollPos / 2,
     });
     });*/


    /*    if (this.props.needIScroll && window.device.mobile()) {
     this.scroll = new IScroll(sectionWrapper, {click: true, probeType: 3});
     this.controller.scrollPos(() => -this.scroll.y);
     this.scroll.on('scroll', () => this.controller.update());
     }*/

  }


  componentDidMount() {
    this.windowOnScroll();
  }

  render() {
    return (
        <div className= {styles.mainWrapper} ref={node => this.mainWrapper = node}>

          <div className={styles.textInfo}>{this.state.transformY}</div>
          <ul>

            <li className="target1" style={{height: '300px', backgroundColor: '#2dd5ff'}}>
              <div className={`content1 ${styles.content}`}> content1</div>
            </li>

            <li className="target2" style={{height: '500px', backgroundColor: '#c1aeff'}} style={{height: '500px', backgroundColor: '#967f1d','transform':' translate3d(0,' + this.state.transformY + 'px,' + '0)'}}>
              <div className={`content2 ${styles.content}`}> content2</div>
            </li>

            <li className="target3" style={{height: '100px', backgroundColor: '#9effbd'}}>
              <div className={`content3 ${styles.content}`}> content3</div>
            </li>

            <li className="target4" style={{height: '300px', backgroundColor: '#ff7195'}}>
              <div className={`content4 ${styles.content}`}> content4</div>
            </li>

            <li className="target5" style={{height: '600px', backgroundColor: '#ffd964'}}>
              <div className={`content5 ${styles.content}`}> content5</div>
            </li>

            <li className="target5" style={{height: '400px', backgroundColor: '#12ff00'}}>
              <div className={`content6 ${styles.content}`}> content6</div>
            </li>
            <li className="target7" style={{height: '200px', backgroundColor: '#a6a4ab'}}>
              <div className={`content7 ${styles.content}`}> content7</div>
            </li>
          </ul>
        </div>
    );
  }
}

ScrollMargic.defaultProps = {};

export default ScrollMargic;
