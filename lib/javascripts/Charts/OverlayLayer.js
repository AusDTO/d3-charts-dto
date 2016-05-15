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
    super.init();
    this.layer.selectAll('rect')
        .attr('fill', '#FFFFFF')
        .attr('fill-opacity', 0)
        .on('mouseover', (d, i)=>{
          this.chart.hover(i);
          this.legend.hover(i);
        });
    let lastIndex = this.chart.data[0].length - 1;
    this.chart.hover(lastIndex);
    // Legend is undefined
    this.legend.hover(lastIndex);
  }
}
module.exports = OverlayLayer;

