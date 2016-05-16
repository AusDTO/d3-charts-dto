import d3 from 'd3';
import Chart from './Chart';

/**
 * Class representing a pie chart.
 * @extends Chart
 */
class PieChart extends Chart {
  constructor(options) {
    super(options);
    this.computeDataProperty();
  }

  transformForD3() {
    let tempData = this.data;
    return d3.layout.pie()
             .sort(null)
             .value(d=>d.y)(tempData);
  }

  computeDataProperty() {
    this.transformedData = this.transformForD3();
  }

  get arc() {
    let radius = Math.min(this.width, this.height) / 2;
    return d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius / 2);
  }

  init() {
    super.init();
    this.svg.select('g')
        .each(function(_data) {
          let group = d3.select(this)
                        .selectAll('g')
                        .data(_data)
                        .enter()
                        .append('g')
                        .attr('class', 'arc-group');

          group.append('path')
               .attr('class', 'arc')
               .style('fill', d=> d.data.color)
               .on('mouseover', function() {
                 d3.select(this).style('fill', d=> d3.rgb(d.data.color).darker(0.2));
               })
               .on('mouseout', function() {
                 d3.select(this).style('fill', d=> d.data.color);
               });
        });
    this.render();
  }

  render() {
    super.render();
    this.svg.select('g')
        .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
    this.svg.selectAll('.arc')
        .attr('d', this.arc);
  }
}

module.exports = PieChart;
