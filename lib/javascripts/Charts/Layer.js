import d3 from 'd3';

let numberOfInstance = 0;

/** Abstract Class representing a layer. */
class Layer {
  constructor(options) {
    this.chart = options.chart;
    if (options.above === true) {
      this.layer = this.chart.svg.append('g').attr('class', 'layer--top');
    } else {
      this.layer = this.chart.svg.insert('g', 'g.chart__wrapper').attr('class', 'layer--bottom');
    }
  }

  /**
   * Caculate the width of the layer rect
   * @private
   * @param  {Object} d - Data point
   * @param  {Number} i Index
   * @return {Number}   width for this rect
   */
  _rectW(d, i) {
    if (this.chart.type === 'bar') {
      return this.chart.xScale.rangeBand() * 2;
    }

    let nextX = this._getNextX(i);
    let prevX = this._getPrevX(i);

    if (prevX === null && nextX === null) {
      return this.chart.width;
    }
    if (prevX === null) { prevX = this.chart.xScale.domain()[0]; }
    if (nextX === null) { nextX = this.chart.xScale.domain()[this.chart.xScale.domain().length - 1]; }

    return Math.max(0, (this.chart.xScale(nextX) - this.chart.xScale(prevX)) / 2);
  }

  /**
   * X position of this rect
   * @param  {Object} d [description]
   * @param  {Number} i [description]
   * @return {Number}   [description]
   */
  _rectX(d, i) {
    let thisX = d.x;
    if (typeof this.chart.xScale.rangeBand === 'function') {
      return this.chart.xScale(thisX) - this.chart.xScale.rangeBand() * 0.5;
    }

    let nextX = this._getNextX(i);
    let prevX = this._getPrevX(i);


    // if there this is a single data point position the eventRect at 0
    if (prevX === null && nextX === null) {
      return 0;
    }

    if (prevX === null) { prevX = this.chart.xScale.domain()[0]; }
    return (this.chart.xScale(thisX) + this.chart.xScale(prevX)) / 2;
  }

  /**
   * Previous data point relative to index i
   * @private
   * @param  {Number} i [description]
   * @return {Object}   [description]
   */
  _getPrevX(i) {
    let d = this.chart.data[0][i - 1];
    return typeof d !== 'undefined' ? d.x : null;
  }

  /**
   * Next data point relative to index i
   * @private
   * @param  {Number} i [description]
   * @return {Object}   [description]
   */
  _getNextX(i) {
    let d = this.chart.data[0][i + 1];
    return typeof d !== 'undefined' ? d.x : null;
  }

  /**
   * Init the layer
   * @return {undefined} [description]
   */
  init() {
    this.layer.attr('transform', `translate(${this.chart.margin.left} , ${this.chart.margin.top})`);

    this.layer.selectAll('rect')
        .data(this.chart.data[0])
        .enter()
        .append('rect');

    this.render();
    numberOfInstance++;
    d3.select(window).on('resize.' + 'layer' + numberOfInstance, this.render.bind(this));
  }

  /**
   * render the layer
   * @return {undefined} [description]
   */
  render() {
    if (this.chart.width > 0 && this.chart.height > 0) {
      this.layer.selectAll('rect')
          .attr('height', this.chart.height)
          .attr('width', (d, i)=> this._rectW(d, i))
          .attr('x', (d, i)=>this._rectX(d, i));
    }
  }
}

module.exports = Layer;
