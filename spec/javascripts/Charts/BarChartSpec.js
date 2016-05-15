import { expect as expect } from 'chai';
import d3 from 'd3';
import BarChart from 'Charts/BarChart';
import addChartSpec from './ChartSpec.js';

module.exports = function() {
  describe('Bar Chart', () => {
    let data;
    let options;
    let barChart;

    before(()=>{
      data = [
        [ {'x': new Date('2016-01'), 'y': 29.39, id: 0},
          {'x': new Date('2016-02'), 'y': null, id: 0},
          {'x': new Date('2016-03'), 'y': 0, id: 0}],
        [ {'x': new Date('2016-01'), 'y': 29.39, id: 1},
          {'x': new Date('2016-02'), 'y': null, id: 1},
          {'x': new Date('2016-03'), 'y': 0, id: 1}]
      ];

      options = {
        height: 300,
        data: data,
        element: d3.select('#chart'),
        margin: {top: 0, right: 0, bottom: 0, left: 0}
      };

      barChart = new BarChart(options);
      barChart.init();
    });

    addChartSpec(()=>({ chart: barChart, data: data}));

    it('should create rectangles', () => {
      expect(d3.selectAll('rect').node()).to.not.be.null;
      expect(d3.selectAll('rect')[0].length).to.be.equal(data[1].length + data[0].length);
    });

    it('rects should not have height or width', () => {
      expect(d3.selectAll('rect').attr('width')).to.be.null;
      expect(d3.selectAll('rect').attr('height')).to.be.null;
    });

    it('rects should have correct class', () => {
      d3.selectAll('rect').each(function(){
        expect(d3.select(this).attr('class')).to.be.equal('bar');
      });

    });
    after(()=>{
      barChart.destroy();
    });
  });
}
