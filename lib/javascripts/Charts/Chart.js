import d3 from 'd3';
import defined from '../Helpers/defined';

let numberOfInstance = 0;

/** Abstract Class representing a chart. */
class Chart {
  /**
   * Chart base class constructor
   * @param  {Object} options [description]
   */
  constructor(options) {
    /**
     * Height of the chart, the height of the svg would be height of the chart + margin
     * @type {Number}
     */
    this.height = options.height;
    /**
     * The element to append the chart to
     * @type {Object}
     */
    this.element = options.element;

    /**
     * Margin of chart relative to its wrapping svg
     * @type {Object}
     */
    this.margin = options.margin;

    /**
     * Units of the datasets
     * @type {String}
     */
    this.units = options.units || '';

    /**
     * Prefix of the datasets
     * @type {String}
     */
    this.prefix = options.prefix || '';

    /**
     * Suffix of the datasets
     * @type {String}
     */
    this.suffix = options.suffix || '';

    /**
     * Wrapper for the svg
     * @type {Object}
     */
    this.wrapper = this.element.append('div').attr('class', 'chart');

    /**
     * The svg element
     * @type {Object}
     */
    this.svg = this.wrapper.append('svg');

    /**
     * Data for the chart
     * @type {Array}
     */
    this.data = options.data;

    /**
     * Type of chart, could be line, bar or pie
     * @type {'String'}
     */
    this.type = options.type;

    /**
     * Whether data displayed for this chart should be rounded, for example, if a tooltip is displayed
     * @type {Boolean}
     */
    this.displayRoundedData = options.displayRoundedData;

    /**
     * When calculating x and y axis range, some padding can be added to those ranges, horizontal padding do not apply to bar chart
     * @type {Object}
     */
    this.padding = options.padding || {top: 0, right: 0, bottom: 0, left: 0};
  }

/**
 * The width of the chart content
 * @return {Number} [description]
 */
  get width() {
    return this.wrapper.node().getBoundingClientRect().width - this.margin.left - this.margin.right;
  }

  /**
   * Compute and cache graphic properties
   * @return {undefined} [description]
   */
  computeRenderProperty() {
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
  }

  /**
   * Compute and cache data properties
   * @return {undefined} [description]
   */
  computeDataProperty() {
    this.transformedData = this.transformForD3();
    this.yMin = this.calculateYMin();
    this.yMax = this.calculateYMax();
  }

  /**
   * Caculate min y values
   * @return {Number}
   */
  calculateYMin() {
    return null;
  }

  /**
   * Caculate max y values
   * @return {Number}
   */
  calculateYMax() {
    return null;
  }

  /**
   * get x scale
   * @return {Function}
   */
  getXScale() {
    return null;
  }

  /**
   * get x scale
   * @return {Function}
   */
  getYScale() {
    return null;
  }

/**
 * Render the chart based computed render properties
 * @return {undefined}
 */
  render() {
    this.svg
        .attr('width', this.width + this.margin.left + this.margin.right)
        .attr('height', this.height + this.margin.top + this.margin.bottom);
    this.computeRenderProperty();
  }

/**
 * Highlight datapoint
 * @param  {Number} j index of the dataset that should be highlighted
 * @return {undefined}
 */
  hover() {
    throw new Error('hover must be implemented in derived classes');
  }

/**
 * Sometimes data needs to be transformed for certain layout(e.g: stack layout, pie layout)
 * @return {Array} [description]
 */
  transformForD3() {
    // copy the data
    return this.data.slice();
  }

/**
 * init the chart
 * @return {undefined}
 */
  init() {
    this.computeDataProperty();
    this.svg
        .append('g')
        .attr('class', 'chart__wrapper')
        .attr('transform', `translate(${this.margin.left} , ${this.margin.top})`)
        .datum(this.transformedData);
    numberOfInstance ++;
    d3.select(window).on('resize.' + 'chart' + numberOfInstance, this.render.bind(this));
  }

/**
 * Destroy the chart
 * @return {undefined}
 */
  destroy() {
    this.wrapper.remove();
    d3.select(window).on('resize.' + 'chart' + numberOfInstance, null);
  }
}

module.exports = Chart;
