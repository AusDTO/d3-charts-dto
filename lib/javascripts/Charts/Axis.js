/** Class representing an Axis. */
class Axis {
  constructor(options) {
    this.chart = options.chart;
    this.axis = this.chart.svg.append('g');
  }
  get Axis() {
    return false;
  }

  render() {
    this.axis.call(this.Axis);
  }
}

module.exports = Axis;
