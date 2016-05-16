import d3 from 'd3';
import Axis from './Axis';
import getDate from '../Helpers/getDate';

let numberOfInstance = 0;

/**
 * Class representing an X axis.
 * @extends Axis
 */
class XAxis extends Axis {

  /**
   * Constructor
   * @param  {Object} options - [description]
   * @return {undefined}
   */
  constructor(options) {
    super(options);
    this.render();
  }

  /**
   * Create a new x axis based on the x values of the first series of the data
   */
  get Axis() {
    let sampleData = this.chart.transformedData[0];
    return d3.svg.axis()
          .scale(this.chart.xScale)
          .orient('bottom')
          .tickFormat(getDate().short)
          .tickValues([sampleData[0].x, sampleData[Math.floor(sampleData.length / 2)].x, sampleData[sampleData.length - 1].x]);
  }

  /**
   * Render function
   * @return {undefined} - description
   */
  render() {
    super.render();
    this.axis.attr('class', 'x axis')
        .attr('transform', `translate(${this.chart.margin.left}, ${this.chart.height + this.chart.margin.top})`);

    numberOfInstance ++;
    d3.select(window).on('resize.' + 'xAxis' + numberOfInstance, ()=>{
      this.axis.call(this.Axis);
    });
  }
}

module.exports = XAxis;
