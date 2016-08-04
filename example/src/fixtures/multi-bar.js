const raw = {
	"suffix": "%",
	"latest": {"label": "2016-03", "value": 24},
	"change": 1,
	"summary": "Up by undefined1.00% since 2016-02",
	"id": "no-shows",
	"name": "Users who did not attend their appointment",
	"size": "medium",
	"type": "bar",
	"units": "%",
	"datasets": [{
		"id": "no-shows-rescheduled",
		"data": [{"label": "2016-01", "value": 1}, {"label": "2016-02", "value": 23}, {
			"label": "2016-03",
			"value": 24
		}],
		"name": "Rescheduled",
		"note": "note for this dataset",
		"units": "",
		"recorded_at": "2016-01-01T01:01:01.111Z"
	}, {
		"id": "no-shows-original",
		"data": [{"label": "2016-01", "value": 10}, {"label": "2016-02", "value": 18}, {
			"label": "2016-03",
			"value": 51
		}],
		"name": "Original",
		"note": "note for this dataset",
		"units": "",
		"recorded_at": "2016-01-01T01:01:01.111Z"
	}],
	"definition": "This shows the percentage of users who did not attend their appointments, broken down by those who kept their original appointment and those who rescheduled it. ",
	"updated_at": "2016-01-01T01:01:01.111Z",
	"displayRoundedData": true
}

export const CONV_DATA_MULTI_LINE = [
	[
		{
			"x": "2016-01-01T00:00:00.000Z",
			"y": 1,
			"id": "no-shows-rescheduled",
			"color": "#4892c0",
			"altColor": "url(#qnegk)",
			"altLineStyle": "12,5",
			"name": "Rescheduled"
		},
		{
			"x": "2016-02-01T00:00:00.000Z",
			"y": 23,
			"id": "no-shows-rescheduled",
			"color": "#4892c0",
			"altColor": "url(#qnegk)",
			"altLineStyle": "12,5",
			"name": "Rescheduled"
		},
		{
			"x": "2016-03-01T00:00:00.000Z",
			"y": 24,
			"id": "no-shows-rescheduled",
			"color": "#4892c0",
			"altColor": "url(#qnegk)",
			"altLineStyle": "12,5",
			"name": "Rescheduled"
		}
	],
	[
		{
			"x": "2016-01-01T00:00:00.000Z",
			"y": 10,
			"id": "no-shows-original",
			"color": "#75a370",
			"altColor": "url(#blgag)",
			"altLineStyle": "10, 5",
			"name": "Original"
		},
		{
			"x": "2016-02-01T00:00:00.000Z",
			"y": 18,
			"id": "no-shows-original",
			"color": "#75a370",
			"altColor": "url(#blgag)",
			"altLineStyle": "10, 5",
			"name": "Original"
		},
		{
			"x": "2016-03-01T00:00:00.000Z",
			"y": 51,
			"id": "no-shows-original",
			"color": "#75a370",
			"altColor": "url(#blgag)",
			"altLineStyle": "10, 5",
			"name": "Original"
		}
	]
];
