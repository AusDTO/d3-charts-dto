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
  }

  init() {
    let that = this;
    let lastIndex = this.chart.data[0].length - 1;
    this.chart.hover(lastIndex);
    this.legend.hover(lastIndex);

    super.init();
    function handleTouchMove(){
      d3.event.preventDefault();
      d3.event.stopPropagation();
      let index = lastIndex;
      let x = d3.touches(this)[0][0];
      let data = that.chart.transformedData[0];

      if(that.chart.type === 'bar') {
        let rectW = that.chart.xScale.rangeBand() * 2;
        let indexTemp = Math.floor(x / rectW);
        if(data[indexTemp]){
          index = indexTemp;
        }
      } else {
        let bisectDate = d3.bisector(function(d) { return d.x; }).left;
        let x0 = that.chart.xScale.invert(x);

        let i = bisectDate(data, x0, 1);
        let d0 = data[i - 1];
        let d1 = data[i];
        if(d0 && d1) {
          index = x0 - d0.x > d1.x - x0 ? i : i - 1;
        }
      }
      that.chart.hover(index);
      that.legend.hover(index);
    }

    this.layer.selectAll('rect')
        .attr('fill', '#FFFFFF')
        .attr('fill-opacity', 0)
        .on('mouseover', (d, i)=>{
          this.chart.hover(i);
          this.legend.hover(i);
        })
        .on('touchmove', handleTouchMove);

  }
}
module.exports = OverlayLayer;

