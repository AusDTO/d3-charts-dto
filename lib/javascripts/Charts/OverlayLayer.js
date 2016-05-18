import d3 from 'd3';
import Layer from './Layer';

/**
 * Class representing a layer to aid interaction.
 * @extends Layer
 */
class OverlayLayer extends Layer {
  constructor(options) {
    super(options);
    this.legend = options.legend;
    this.init();
    this.bisectDate = d3.bisector(function(d) { return d.x; }).left;
  }

  init() {
    let that = this;
    let lastIndex = this.chart.data[0].length - 1;
    super.init();
    this.layer.selectAll('rect')
        .attr('fill', '#FFFFFF')
        .attr('fill-opacity', 0)
        .on('mouseover', (d, i)=>{
          this.chart.hover(i);
          this.legend.hover(i);
        })
        .on('touchmove', function() {
          let x = d3.touches(this)[0][0];
          let x0 = that.chart.xScale.invert(x);
          let data = that.chart.transformedData[0];
          let i = that.bisectDate(data, x0, 1);
          let d0 = data[i - 1];
          let d1 = data[i];
          let index = lastIndex;
          if(d0 && d1){
            index = x0 - d0.x > d1.x - x0 ? i : i - 1;
          }
          that.chart.hover(index);
          that.legend.hover(index);
        });


    this.chart.hover(lastIndex);
    this.legend.hover(lastIndex);
  }
}
module.exports = OverlayLayer;

