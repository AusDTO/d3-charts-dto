import { expect as expect } from 'chai';
import d3 from 'd3';
import StackBarChart from 'Charts/StackBarChart';
import addChartSpec from './ChartSpec.js';

module.exports = function() {
  describe('Single Bar Chart', () => {
    let data;
    let options;
    let barChart;

    before(()=>{
      data = [
        [ {'x': new Date('2016-01'), 'y': 29.39, id: 0},
          {'x': new Date('2016-02'), 'y': null, id: 0},
          {'x': new Date('2016-03'), 'y': 0, id: 0}]
      ];

      options = {
        height: 300,
        data: data,
        element: d3.select('#chart'),
        margin: {top: 0, right: 0, bottom: 0, left: 0}
      };

      barChart = new StackBarChart(options);
      barChart.init();
    });

    addChartSpec(()=>({ chart: barChart, data: data}));

    it('should have correct class', () => {
      expect(d3.select('.bar-group').attr('class')).to.be.equal('bar-group bar-group-0');
    });

    it('should create rectangles', () => {
      expect(d3.selectAll('rect').node()).to.not.be.null;
      expect(d3.selectAll('rect')[0].length).to.be.equal(data[0].length);
    });

    it('rects should have correct height and width', () => {
      let wCeil = Math.ceil(window.testChartWidth / (data[0].length + data[0].length + 1));
      let wFloor = Math.floor(window.testChartWidth / (data[0].length + data[0].length + 1));

      for (let i = 0; i < data[0].length; i ++) {
        expect(parseInt(d3.selectAll('rect')[0][i].getAttribute('width'))).to.be.equal(wCeil||wFloor);
      }
      expect(parseInt(d3.selectAll('rect')[0][0].getAttribute('height'))).to.be.equal(294);
      expect(parseInt(d3.selectAll('rect')[0][1].getAttribute('height'))).to.be.equal(0);
      expect(parseInt(d3.selectAll('rect')[0][2].getAttribute('height'))).to.be.equal(0);
    });

    after(()=>{
      barChart.destroy();
    });
  });

  describe('Stacked Bar Chart', () => {
    let data;
    let options;
    let barChart;

    before(()=>{
      data = [
        [ {'x': new Date('2016-01'), 'y': 29.39, id: 0},
          {'x': new Date('2016-02'), 'y': null, id: 0},
          {'x': new Date('2016-03'), 'y': 0, id: 0}],
        [ {'x': new Date('2016-01'), 'y': 29.39, id: 1},
          {'x': new Date('2016-02'), 'y': 10, id: 1},
          {'x': new Date('2016-03'), 'y': 10, id: 1}]
      ];

      options = {
        height: 300,
        data: data,
        element: d3.select('#chart'),
        margin: {top: 0, right: 0, bottom: 0, left: 0}
      };

      barChart = new StackBarChart(options);
      barChart.init();
    });

    addChartSpec(()=>({ chart: barChart, data: data}));

    it('should have correct class', () => {
      expect(d3.selectAll('.bar-group')[0][0].getAttribute('class')).to.be.equal('bar-group bar-group-0');
      expect(d3.selectAll('.bar-group')[0][1].getAttribute('class')).to.be.equal('bar-group bar-group-1');
    });

    it('should create rectangles', () => {
      expect(d3.selectAll('rect').node()).to.not.be.null;
      expect(d3.selectAll('rect')[0].length).to.be.equal(data[0].length * 2);
    });

    it('rects should have correct height and width for each rect', () => {
      let wCeil = Math.ceil(window.testChartWidth / (data[0].length + data[0].length + 1));
      let wFloor = Math.floor(window.testChartWidth / (data[0].length + data[0].length + 1));
      for (let i = 0; i < data[0].length * 2; i ++) {
        expect(parseInt(d3.selectAll('rect')[0][i].getAttribute('width'))).to.be.equal(wCeil || wFloor);
      }
      expect(parseInt(d3.selectAll('.bar-group-0 rect')[0][0].getAttribute('height'))).to.be.equal(147);
      expect(parseInt(d3.selectAll('.bar-group-0 rect')[0][1].getAttribute('height'))).to.be.equal(0);
      expect(parseInt(d3.selectAll('.bar-group-0 rect')[0][2].getAttribute('height'))).to.be.equal(0);


      expect(parseInt(d3.selectAll('.bar-group-1 rect')[0][0].getAttribute('height'))).to.be.equal(147);
      expect(parseInt(d3.selectAll('.bar-group-1 rect')[0][1].getAttribute('height'))).to.be.equal(50);
      expect(parseInt(d3.selectAll('.bar-group-1 rect')[0][2].getAttribute('height'))).to.be.equal(50);
    });

    after(()=>{
      barChart.destroy();
    });
  });
}
