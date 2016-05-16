/** Class representing an Axis. */
class Axis {
  /**
   * Constructor
   * @param  {Object} options
   * @return {undefined}
   */
  constructor(options) {
    /**
     * The chart to append this axis to
     * @type {Object}
     */
    this.chart = options.chart;

    /**
     * Axis element
     * @type {Object}
     */
    this.axis = this.chart.svg.append('g');
  }

  /**
   * Axis function
   * need to be implemented in child class
   */
  get Axis() {
    return false;
  }

  /**
   * Render function
   * @return {undefined}
   */
  render() {
    this.axis.call(this.Axis);
  }

  destroy(){
    this.axis.remove();
  }
}

module.exports = Axis;
