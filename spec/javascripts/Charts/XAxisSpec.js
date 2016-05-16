import XAxis from '../../../lib/javascripts/Charts/XAxis';
import addAxisSpec from 'd3-charts-dto/spec/javascripts/Charts/AxisSpec.js';



module.exports = function() {
  describe('X Axis', () => {
    let chart;
    let axis;

    beforeAll(()=>{
        chart = {
            svg: jasmine.createSpyObj('svg', ['append'])
        };

        chart.transformedData = [[1, 2, 3]];

        let getDate = function(){
          return {
            long: ()=>{new Date()}
          }
        }

        axis = new XAxis({chart: chart});
        spyOn(axis, ['render']);
    });

    it('should render', () => {
      expect(axis.render).toHaveBeenCalled();
    });

    addAxisSpec(()=>({ chart: chart, axis: axis}));
  });
};
