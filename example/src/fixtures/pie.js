const raw = {
	"suffix": "%",
	"latest": {"label": "2016-04", "value": 41.37},
	"change": 1.2199999999999989,
	"summary": "Up by undefined1.2% since 2016-03",
	"id": "browser-types",
	"name": "Browser types",
	"size": "small",
	"type": "pie",
	"units": "%",
	"datasets": [{
		"id": "browser-usage-chrome",
		"data": [{"label": "2016-01", "value": 41.15}, {"label": "2016-02", "value": 41.7}, {
			"label": "2016-03",
			"value": 40.15
		}, {"label": "2016-04", "value": 41.37}],
		"name": "Chrome",
		"note": "note for this dataset",
		"color": "#ea7b49",
		"units": "%",
		"recorded_at": "2016-04-30T01:01:01.111Z"
	}, {
		"id": "browser-usage-safari",
		"data": [{"label": "2016-01", "value": 28.65}, {"label": "2016-02", "value": 27.09}, {
			"label": "2016-03",
			"value": 26.33
		}, {"label": "2016-04", "value": 24.82}],
		"name": "Safari",
		"note": "note for this dataset",
		"color": "#fcb639",
		"units": "%",
		"recorded_at": "2016-04-30T01:01:01.111Z"
	}, {
		"id": "browser-usage-mozilla",
		"data": [{"label": "2016-01", "value": 25.09}, {"label": "2016-02", "value": 26.2}, {
			"label": "2016-03",
			"value": 29.39
		}, {"label": "2016-04", "value": 30.74}],
		"name": "Mozilla",
		"note": "note for this dataset",
		"color": "#79be73",
		"units": "%",
		"recorded_at": "2016-04-30T01:01:01.111Z"
	}, {
		"id": "browser-usage-IE",
		"data": [{"label": "2016-01", "value": 3.68}, {"label": "2016-02", "value": 3.74}, {
			"label": "2016-03",
			"value": 2.81
		}, {"label": "2016-04", "value": 2.16}],
		"name": "IE",
		"note": "note for this dataset",
		"color": "#32b0b4",
		"units": "%",
		"recorded_at": "2016-04-30T01:01:01.111Z"
	}, {
		"id": "browser-usage-other",
		"data": [{"label": "2016-01", "value": 1.43}, {"label": "2016-02", "value": 1.26}, {
			"label": "2016-03",
			"value": 1.32
		}, {"label": "2016-03", "value": 0.91}],
		"name": "Other",
		"note": "note for this dataset",
		"color": "#5261c9",
		"units": "%",
		"recorded_at": "2016-04-30T01:01:01.111Z"
	}],
	"definition": "Types of browsers used to access myGov",
	"updated_at": "2016-07-20T20:39:35.707Z",
	"displayRoundedData": true
};


export const CONV_DATA_PIE = [
	{
		"x": "browser-usage-chrome",
		"y": 41.093527338183456,
		"color": "#4892c0",
		"altColor": "url(#liifm)",
		"id": "browser-usage-chrome",
		"name": "Chrome"
	},
	{
		"x": "browser-usage-safari",
		"y": 26.723168079201976,
		"color": "#75a370",
		"altColor": "url(#afjee)",
		"id": "browser-usage-safari",
		"name": "Safari"
	},
	{
		"x": "browser-usage-mozilla",
		"y": 27.85569639240981,
		"color": "#f2b038",
		"altColor": "url(#ctfhy)",
		"id": "browser-usage-mozilla",
		"name": "Mozilla"
	},
	{
		"x": "browser-usage-IE",
		"y": 3.0975774394359856,
		"color": "#47bcac",
		"altColor": "url(#oiuge)",
		"id": "browser-usage-IE",
		"name": "IE"
	},
	{
		"x": "browser-usage-other",
		"y": 1.230030750768769,
		"color": "#7066a5",
		"altColor": "url(#aumik)",
		"id": "browser-usage-other",
		"name": "Other"
	}
];