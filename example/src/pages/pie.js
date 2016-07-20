import d3 from 'd3';
import PieChart from './../../../lib/javascripts/Charts/PieChart';

import { CONV_DATA_PIE } from './../fixtures/pie';


export default class {
	constructor() {
		// do nothing
		return this;
	}
	init() {
		this.initBasicPie();
		return this;
	}
	initBasicPie() {
		this.chart1 = new PieChart({
			element: d3.select('#chart-basic-pie'),
			data: CONV_DATA_PIE
		});
		this.chart1.init();
	}
}
