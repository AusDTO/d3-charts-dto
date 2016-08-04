import d3 from 'd3';
import LineChart from './../../../lib/javascripts/Charts/LineChart';

import { CONV_DATA_LINE } from './../fixtures/line';
import { CONV_DATA_MULTI_LINE } from './../fixtures/multi-line';


export default class {
	constructor() {
		// do nothing
		return this;
	}
	init() {
		this.initBasicLine();
		this.initMultiLine();
		return this;
	}
	initBasicLine() {
		this.chart1 = new LineChart({
			element: d3.select('#chart-basic-line'),
			data: CONV_DATA_LINE
		});
		this.chart1.init();
	}
	initMultiLine() {
		this.chart2 = new LineChart({
			element: d3.select('#chart-multi-line'),
			data: CONV_DATA_MULTI_LINE
		});
		this.chart2.init();
	}
}
