import d3 from 'd3';
import Chart from './../../../lib/javascripts/Charts/Chart';
import BarChart from './../../../lib/javascripts/Charts/BarChart';
import StackedBarChart from './../../../lib/javascripts/Charts/StackBarChart';
import XAxis from './../../../lib/javascripts/Charts/XAxis';
import YAxis from './../../../lib/javascripts/Charts/YAxis';
import Legend from './../../../lib/javascripts/Charts/Legend';

import { DATA1, DATA4, DATA3, DATA5 } from './../fixtures/data';
import { CON_DATA1 } from './../fixtures/formatted';
import { CONV_DATA_MULTI_LINE } from './../fixtures/multi-bar';


export default class {
	constructor() {
		// do nothing
		return this;
	}
	init() {
		this.initBasic();
		this.initBasicBar();
		this.initStackedBar();
		this.initStackedBarWithAxis();
		this.initStackedBarWithLegend();
		this.initMultiBar();
		return this;
	}
	initMultiBar() {
		this.chart6 = new StackedBarChart({
			element: d3.select('#chart-multi-bar'),
			data: CONV_DATA_MULTI_LINE
		});
		this.chart6.init();
	}
	initStackedBarWithLegend() {
		this.chart5 = new StackedBarChart({
			element: d3.select('#chart-stacked-bar-w-legend'),
			data: CON_DATA1
		});
		this.chart5.init();
		this.legend5 = new Legend({chart: this.chart5});
	}
	initStackedBarWithAxis() {
		this.chart4 = new StackedBarChart({
			element: d3.select('#chart-stacked-bar-w-axis'),
			data: CON_DATA1
		});
		this.chart4.init();
		this.xAxis4 = new XAxis({chart: this.chart4});
		this.yAxis4 = new YAxis({chart: this.chart4});
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
