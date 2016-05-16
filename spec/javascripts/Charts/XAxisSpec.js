import d3 from 'd3';
import XAxis from '../../../lib/javascripts/Charts/XAxis';
import addAxisSpec from 'd3-charts-dto/spec/javascripts/Charts/AxisSpec.js';

module.exports = function() {
  describe('X Axis', () => {
    let chart;
    let axis;

    beforeAll(()=>{
      chart = {
        svg: d3.select('#chart').append('svg'),
        transformedData: [[{x: new Date()}, {x: new Date()}, {x: new Date()}]],
        xScale: d3.time.scale().range([0, 10]).domain([new Date(), new Date()]),
        margin: {left: 0, top: 0},
        height: 0
      };
      axis = new XAxis({chart: chart});
    });

    it('should render', () => {
      expect(axis).not.toBe(null);
    });
  });

  afterAll(()=>{
    d3.selectAll('svg').remove();
  })
};
