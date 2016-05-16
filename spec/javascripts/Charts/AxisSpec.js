import { expect as expect } from 'chai';
import d3 from 'd3';
import Axis from '../../../lib/javascripts/Charts/Axis';

module.exports = function(callback) {
  describe('Axis base', () => {
    let data;
    let chart;
    let axis;

    before(()=>{
      if(!callback){
        chart = {
          svg: d3.select('#chart').append('svg')
        }
        axis = new Axis({chart: chart});

      } else{
        chart = callback().chart;
        data = callback().data;
        axis = callback().axis;
      }
    });

    it('should create a svg group', () => {
      this.svg.to.be.not.null;
      console.log(this.svg);
    });

    after(function() {
      chart.destroy();
    });
  });
};
