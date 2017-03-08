/**
 * Created by cform on 16/7/1.
 */
import React from 'react';
import styles from './styles/styles.css';
import slick from 'slick-carousel';

class Slick extends React.Component {

  constructor() {
    super();
    this.state = {
      info: 1
    };
    this.handClick = this.handClick.bind(this);
  }


  componentDidMount() {

    $(this.slickWrapperNav).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      dots: true,
      asNavFor: this.slickWrapperFor,
    });

    $(this.slickWrapperFor).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      asNavFor: this.slickWrapperNav,
    });
  }

  handClick() {
    const that = this;
    console.log(this.state.info);

    let info = this.state.info + 1;
    this.setState({
      info: info
    })
  }

  render() {
    return (

        <div className={styles.mainWrapper} ref={node => this.mainWrapper = node}>
          <span
              style={{display : 'block', width : '100%', textAlign : 'center', padding : '36px 16px', fontSize : '36px' }}> Slick Test </span>

          <div className={`slider-for ${styles.slickWrapper}`} ref={node => this.slickWrapperFor = node}>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
          </div>

          <div className={`slider-nav ${styles.slickWrapper}`} ref={node => this.slickWrapperNav = node}>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
            <div className={styles.imgList} onClick={this.handClick}>
              <span>{this.state.info}</span>
            </div>
          </div>
        </div>
    );
  }
}

Slick.defaultProps = {};

export default Slick;
