const expect = require('chai').expect;

import hasNegativeValueSpec from './Helpers/hasNegativeValueSpec.js';
import cropDataSpec from './Helpers/cropDataSpec.js';
import getDateSpec from './Helpers/getDateSpec.js';
import normalizeSpec from './Helpers/normalizeSpec.js';
import addChartSpec from './Charts/ChartSpec.js';
import addLineChartSpec from './Charts/LineChartSpec.js';
import addBarChartSpec from './Charts/BarChartSpec.js';
import addStackBarChartSpec from './Charts/StackBarChartSpec.js';
import addStackBarChartNegativeSpec from './Charts/StackBarChartNegativeSpec.js';

describe('Test setup', () => {
  it('Testing test setup', () => {
    expect(true).to.be.true;
  });
});

addChartSpec();
addLineChartSpec();
addBarChartSpec();
addStackBarChartSpec();
addStackBarChartNegativeSpec();

