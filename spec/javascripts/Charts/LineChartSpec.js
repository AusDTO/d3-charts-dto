import { expect as expect } from 'chai';
import d3 from 'd3';
import LineChart from 'Charts/LineChart';
import addChartSpec from './ChartSpec.js';

module.exports = function() {
  describe('Single lineChart', () => {
    let data;
    let options;
    let lineChart;

    before(()=>{
      data = [[ {'x': new Date('2016-01'), 'y': 29.39, id: 0, index: 0},
                {'x': new Date('2016-02'), 'y': null, id: 0, index: 0},
                {'x': new Date('2016-03'), 'y': 0, id: 0, index: 0}]];

      options = {
        height: 300,
        data: data,
        element: d3.select('#chart'),
        margin: {top: 0, right: 0, bottom: 0, left: 0}
      };

      lineChart = new LineChart(options);
      lineChart.init();
    });
  addChartSpec(()=>({ chart: lineChart, data: data}));

  it('should have correct class', () => {
    expect(d3.selectAll('.line')[0][0].getAttribute('class')).to.be.equal('line line-0');
  });

  it('should append one path', () => {
    expect(d3.selectAll('path').node()).to.not.be.null;
    expect(d3.selectAll('path')[0].length).to.be.equal(1);
  });

  it('should append tooltip circles', () => {
    expect(d3.selectAll('circle').node()).to.not.be.null;
    expect(d3.selectAll('circle')[0].length).to.be.equal(3);
  });

  it('tooltip circle should have correct size', () => {
    d3.selectAll('circle').each(function() {
      expect(d3.select(this).attr('r')).to.be.equal('0');
    });
  });

  it('should append tooltip rulers', () => {
    expect(d3.selectAll('.ruler').node()).to.not.be.null;
    expect(d3.selectAll('.ruler')[0].length).to.be.equal(3);
  });

  it('tooltip rulers should have correct position', () => {
    d3.selectAll('.ruler').each(function(d, i) {
      expect(d3.select(this).attr('y1')).to.be.equal('0');
      expect(d3.select(this).attr('y2')).to.be.equal('300');
      expect(d3.select(this).attr('x1')).to.be.equal(d3.select(this).attr('x2'));
    });
    let x1 = +d3.selectAll('.ruler')[0][0].getAttribute('x1');
    let x2 = +d3.selectAll('.ruler')[0][1].getAttribute('x1');
    let x3 = +d3.selectAll('.ruler')[0][2].getAttribute('x1');
    expect(x3).to.be.above(x2);
    expect(x2).to.be.above(x1);
  });

  it('tooltip rulers should not be visible', () => {
    d3.selectAll('.ruler').each(function() {
      expect(d3.select(this).attr('stroke-width')).to.be.equal('0');
    });
  });

  it('path should not be empty', () => {
    expect(d3.selectAll('path').attr('d')).to.not.be.null;
  });

  it('should have break for null data', () => {
    let line = d3.select('.line-0');
    let pathArray = line.attr('d').split('');
    let filtered = pathArray.filter(d=> d === 'M');
    expect(filtered.length).to.be.equal(2);
  });

  it('circles should indicate hover', ()=>{
    lineChart.hover(0);
    d3.selectAll('circle').each(function(d, i) {
      if (i === 0) {
        expect(d3.select(this).attr('stroke-width')).to.be.equal('1');
        expect(d3.select(this).attr('fill')).to.be.equal('#ffffff');
        expect(d3.select(this).attr('r')).to.be.equal('3');
      } else {
        expect(d3.select(this).attr('stroke-width')).to.be.equal('0');
        expect(d3.select(this).attr('r')).to.be.equal('0');
      }
    });
  });

  it('tooltip rulers should be visible on hover', () => {
    lineChart.hover(0);
    d3.selectAll('.ruler').each(function(d, i ) {
      if(i === 0){
        expect(d3.select(this).attr('stroke-width')).to.be.equal('1');
      } else {
        expect(d3.select(this).attr('stroke-width')).to.be.equal('0');
      }
    });
  });

  after(()=>{
    lineChart.destroy();
  });
});

describe('Multiple lineChart', () => {
  let data;
  let options;
  let lineChart;

  before(()=>{
    data = [
      [{'x': new Date('2016-01'), 'y': 29.39, id: 0, index: 0},
       {'x': new Date('2016-02'), 'y': null, id: 0, index: 0},
       {'x': new Date('2016-03'), 'y': 0, id: 0, index: 0}],
      [{'x': new Date('2016-01'), 'y': 29.39, id: 1, index: 1},
       {'x': new Date('2016-02'), 'y': null, id: 1, index: 1},
       {'x': new Date('2016-03'), 'y': 0, id: 1, index: 1}]
    ];

    options = {
      height: 300,
      data: data,
      element: d3.select('#chart'),
      margin: {top: 0, right: 0, bottom: 0, left: 0}
    };

    lineChart = new LineChart(options);

    lineChart.init();
  });

  addChartSpec(()=>({ chart: lineChart, data: data}));

  it('should have correct class', () => {
    expect(d3.selectAll('.line')[0][0].getAttribute('class')).to.be.equal('line line-0');
    expect(d3.selectAll('.line')[0][1].getAttribute('class')).to.be.equal('line line-1');
  });

  it('should append two path', () => {
    expect(d3.selectAll('path').node()).to.not.be.null;
    expect(d3.selectAll('path')[0].length).to.be.equal(2);
  });

  it('should append tooltip circles', () => {
    expect(d3.selectAll('circle').node()).to.not.be.null;
    expect(d3.selectAll('circle')[0].length).to.be.equal(6);
  });

  it('should append tooltip rulers', () => {
    expect(d3.selectAll('.ruler').node()).to.not.be.null;
    expect(d3.selectAll('.ruler')[0].length).to.be.equal(3);
  });

  it('tooltip rulers should have correct position', () => {
    d3.selectAll('.ruler').each(function(d, i) {
      expect(d3.select(this).attr('y1')).to.be.equal('0');
      expect(d3.select(this).attr('y2')).to.be.equal('300');
    });
  });

  it('tooltip rulers should not be visible', () => {
    d3.selectAll('.ruler').each(function() {
      expect(d3.select(this).attr('stroke-width')).to.be.equal('0');
    });
  });


  it('path should not be empty', () => {
    expect(d3.selectAll('path').attr('d')).to.not.be.null;
  });

  it('should have break for null data', () => {
    let line = d3.select('.line-0');
    let pathArray = line.attr('d').split('');
    let filtered = pathArray.filter(d=> d === 'M');
    expect(filtered.length).to.be.equal(2)
  });

    it('circles should indicate hover', ()=>{
    lineChart.hover(0);
    d3.selectAll('circle').each(function(d, i) {
      if (i === 0 || i === 3) {
        expect(d3.select(this).attr('stroke-width')).to.be.equal('1');
        expect(d3.select(this).attr('fill')).to.be.equal('#ffffff');
      } else {
        expect(d3.select(this).attr('stroke-width')).to.be.equal('0');
      }
    });
  });

  it('tooltip rulers should be visible on hover', () => {
    lineChart.hover(0);
    d3.selectAll('.ruler').each(function(d, i ) {
      if(i === 0 || i === 3){
        expect(d3.select(this).attr('stroke-width')).to.be.equal('1');
      } else {
        expect(d3.select(this).attr('stroke-width')).to.be.equal('0');
      }
    });
  });
  after(()=>{
    lineChart.destroy();
  });
});
}
