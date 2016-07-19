import d3 from 'd3';
import Chart from './../../../lib/javascripts/Charts/Chart';


export default class {
	constructor() {
		// do nothing
		return this;
	}
	init() {
		this.initBasic();
	}
	initBasic() {
		this.basicChart = new Chart({
			element: d3.select('#chart-basic')
		});
	}
}
