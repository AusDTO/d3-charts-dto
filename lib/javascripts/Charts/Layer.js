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

  rectW(d, i) {
    if (typeof this.chart.xScale.rangeBand === 'function') {
      return this.chart.xScale.rangeBand() * 2;
    }

    let nextX = this.getNextX(i);
    let prevX = this.getPrevX(i);

    if (prevX === null && nextX === null) {
      return this.chart.width;
    }
    if (prevX === null) { prevX = this.chart.xScale.domain()[0]; }
    if (nextX === null) { nextX = this.chart.xScale.domain()[this.chart.xScale.domain().length - 1]; }

    return Math.max(0, (this.chart.xScale(nextX) - this.chart.xScale(prevX)) / 2);
  }

  rectX(d, i) {
    let thisX = d.x;
    if (typeof this.chart.xScale.rangeBand === 'function') {
      return this.chart.xScale(thisX) - this.chart.xScale.rangeBand() * 0.5;
    }

    let nextX = this.getNextX(i);
    let prevX = this.getPrevX(i);


    // if there this is a single data point position the eventRect at 0
    if (prevX === null && nextX === null) {
      return 0;
    }

    if (prevX === null) { prevX = this.chart.xScale.domain()[0]; }
    return (this.chart.xScale(thisX) + this.chart.xScale(prevX)) / 2;
  }

  getPrevX(i) {
    let d = this.chart.data[0][i - 1];
    return typeof d !== 'undefined' ? d.x : null;
  }

  getNextX(i) {
    let d = this.chart.data[0][i + 1];
    return typeof d !== 'undefined' ? d.x : null;
  }

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

  render() {
    this.layer.selectAll('rect')
        .attr('height', this.chart.height)
        .attr('width', (d, i)=> this.rectW(d, i))
        .attr('x', (d, i)=>this.rectX(d, i));
  }
}

module.exports = Layer;
