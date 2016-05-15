import d3 from 'd3';
import formatData from 'Helpers/formatData';
import getDate from 'Helpers/getDate';
import _ from 'lodash';

/** Class representing a legend. */
class Legend {
  constructor(options) {
    this.chart = options.chart;
    this.type = this.chart.type;
    this.displayRoundedData = this.chart.displayRoundedData;
    this.data = this.chart.type === 'bar' ? _.reverse(this.chart.transformedData) : this.chart.transformedData;
    this.container = this.chart.element.insert('div', '.chart').attr('class', 'legend');
    this.render();
  }

  render() {
    this.date = this.container.append('div')
                .attr('class', 'date')
                .datum(this.data[0]);

    let row = this.container.append('table')
              .selectAll('tr')
              .data(this.data)
              .enter()
              .append('tr');
    this.th = row.append('th')
             .html(this.getHtml.bind(this));
    this.td = row.append('td');
    if(this.type === 'pie') {
      this.td.text(d=>formatData(d.data.y, this.chart.prefix, this.chart.suffix, this.displayRoundedData));
    }
  }

  getHtml(d) {
    if (this.type !== 'pie') {
      let icon = `<i class="fa fa-circle" aria-hidden="true" style="color: ${d[0].color}"></i>`;
      return `${icon} ${d[0].name}`;
    }
    let icon = `<i class="fa fa-circle" aria-hidden="true" style="color: ${d.data.color}"></i>`;
    return `${icon} ${d.data.name}`;
  }

  hover(i){
    this.date.text(d=> getDate().long(d[i].x));
    this.td.text(d=> formatData(d[i].y, this.chart.prefix, this.chart.suffix, this.displayRoundedData));
  }
}

module.exports = Legend;
