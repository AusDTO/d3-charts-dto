import d3 from 'd3';
import Chart from './../../../lib/javascripts/Charts/Chart';
import BarChart from './../../../lib/javascripts/Charts/BarChart';
import StackedBarChart from './../../../lib/javascripts/Charts/StackBarChart';

import { DATA1, DATA4, DATA3, DATA5 } from './../fixtures/data';
import { CON_DATA1 } from './../fixtures/formatted';


export default class {
	constructor() {
		// do nothing
		return this;
	}
	init() {
		this.initBasic();
		this.initBasicBar();
		this.initStackedBar();
		return this;
	}
	initStackedBar() {
		this.chart3 = new StackedBarChart({
			element: d3.select('#chart-stacked-bar'),
			data: CON_DATA1
		});
		this.chart3.init();
	}
	initBasicBar() {
		this.chart2 = new BarChart({
			element: d3.select('#chart-basic-bar'),
			data: CON_DATA1
		});
		this.chart2.init();
	}
	initBasic() {
		this.chart1 = new Chart({
			element: d3.select('#chart-basic'),
			data: DATA1
		});
		this.chart1.init();
		this.chart1.render();
	}
}
