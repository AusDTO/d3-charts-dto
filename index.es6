import d3 from 'd3';
import Legend from './lib/javascripts/Charts/Legend.js';
import LineChart from './lib/javascripts/Charts/LineChart.js';
import StackBarChart from './lib/javascripts/Charts/StackBarChart.js';
import PieChart from './lib/javascripts/Charts/PieChart.js';

import NullDataLayer from './lib/javascripts/Charts/NullDataLayer.js';
import OverlayLayer from './lib/javascripts/Charts/OverlayLayer.js';
import XAxis from './lib/javascripts/Charts/XAxis';
import YAxis from './lib/javascripts/Charts/YAxis';

function createPoint(day, color){
  return {altColor:d3.rgb(color).darker(0.85), 
          altLineStyle:"12,5",
          color:color,
          id:"data-0", 
          name: 'data 0',
          x: new Date(new Date().getTime() + day * 10000),
          y: Math.random()*100
         }
}

function createDataset(size, color) {
    let dataset = [];
    for (let i = 0; i < size; i ++){
       dataset[i] = createPoint(i+1, color)
    }
    return dataset;
}


let data0 = [createDataset(30, '#3498db')];
let data1 = [createDataset(30, '#c0392b'), createDataset(30, '#1abc9c')];
let dataPie = [createPoint(1, '#3498db'), createPoint(1, '#c0392b'), createPoint(1, '#1abc9c')]

let lSingle = new LineChart({
    height: 200,
    element: d3.select('#chart0'),
    type: 'line',
    data: data0
});

let lMulti = new LineChart({
    height: 200,
    element: d3.select('#chart1'),
    type: 'line',
    data: data1
});

let bSingle = new StackBarChart({
    height: 200,
    element: d3.select('#chart2'),
    type: 'bar',
    data: data0
});

let bMulti = new StackBarChart({
    height: 200,
    element: d3.select('#chart3'),
    type: 'bar',
    data: data1
});

let pie = new PieChart({
    height: 200,
    element: d3.select('#chart4'),
    type: 'pie',
    data: dataPie
})


lSingle.init();
let lSingleXAxis = new XAxis({chart: lSingle});
let lSingleYAxis = new YAxis({chart: lSingle});
let lSingleLegend = new Legend({chart: lSingle});
let lSingleoverlay = new OverlayLayer({chart: lSingle, legend: lSingleLegend, above: true});


let dataMissing = [createDataset(30, '#c0392b'), createDataset(30, '#1abc9c')];
dataMissing[0][4].y = null;
dataMissing[0][5].y = null;
dataMissing[0][6].y = null;

console.log(dataMissing);

let lSingleWithMissingData = new LineChart({
    height: 200,
    element: d3.select('#chart5'),
    type: 'line',
    data: dataMissing
});
lSingleWithMissingData.init();
let lSingleWithMissingDataXAxis = new XAxis({chart: lSingleWithMissingData});
let lSingleWithMissingDataYAxis = new YAxis({chart: lSingleWithMissingData});
let lSingleWithMissingDataLegend = new Legend({chart: lSingleWithMissingData});
let lSingleWithMissingDataOverlay = new OverlayLayer({chart: lSingleWithMissingData, legend: lSingleWithMissingDataLegend, above: true});
let lSingleWithMissingDataNullDataLayer = new NullDataLayer({chart: lSingleWithMissingData, legend: lSingleWithMissingDataLegend, above: false});

lMulti.init();
bSingle.init();
bMulti.init();
pie.init();

