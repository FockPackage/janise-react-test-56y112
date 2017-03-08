/**
 * Created by cform on 16/7/1.
 */
import React from 'react';


class SortTable extends React.Component {

  constructor() {
    super();
  }


  componentDidMount() {
  }


  render() {
    return <div>
            <span>canvas Test222</span>
            <canvas ref={node => this.testCanvas = node} width="960" height="400" style={{background: 'black'}} />
      </div>;
  }
}

SortTable.defaultProps = {};

export default SortTable;
