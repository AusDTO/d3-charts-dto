import d3 from 'd3';
import Layer from './Layer';
import Hammer from 'Hammerjs';

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
    super.init();
    this.layer.selectAll('rect')
        .attr('fill', '#FFFFFF')
        .attr('fill-opacity', 0)
        .on('mouseover', (d, i)=>{
          this.chart.hover(i);
          this.legend.hover(i);
        })
        .each(function(d, i) {
          that.addHammerEventListener(this, i, that);
        });

    let lastIndex = this.chart.data[0].length - 1;

    this.chart.hover(lastIndex);
    this.legend.hover(lastIndex);
  }

  addHammerEventListener(that, i, layer) {
    Hammer(that).on('panleft panright tap press', ()=>{
      layer.chart.hover(i);
      layer.legend.hover(i);
    });
  }
}
module.exports = OverlayLayer;

