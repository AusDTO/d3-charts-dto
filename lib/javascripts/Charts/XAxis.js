import d3 from 'd3';
import Axis from './Axis';
import getDate from '../Helpers/getDate';
import { isEven } from '../Helpers/number';


/**
 * Get the Best Number of Ticks for axis from tick size
 * @param size {Number} - the count of ticks
 * @returns {Number}
 */
const getBestTickNum = (size) => {
  // provide all ticks _or_ only first, last and middle ticks
  return isEven(size) || size == 1 ? size : 3;
};


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
    let sampleData = this.chart.data[0];
    let size = sampleData.length;

    return d3.svg.axis()
          .scale(this.chart.xScale)
          .orient('bottom')
          .tickFormat(getDate().long)
          .ticks(getBestTickNum(size))
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
