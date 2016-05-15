import { expect as expect } from 'chai';
import cropData from '../../../lib/javascripts/Helpers/cropData';

describe('Crop array', () => {
  it('should get latest 3 month out of 5 month', () => {
    let array = [
      {'label': '2016-01', 'value': 1},
      {'label': '2016-02', 'value': 2},
      {'label': '2016-03', 'value': 3},
      {'label': '2016-04', 'value': 4},
      {'label': '2016-05', 'value': 5}
    ];
    expect(cropData(array, 3).length).to.equal(3);
    expect(cropData(array, 3)[0].value).to.equal(3);
    expect(cropData(array, 3)[2].value).to.equal(5);
  });

  it('should not crop if only 3 months are provided', () => {
    let array = [
      {'label': '2016-01', 'value': 1},
      {'label': '2016-02', 'value': 2},
      {'label': '2016-03', 'value': 3}
    ];
    expect(cropData(array, 3)[0].value).to.equal(1);
    expect(cropData(array, 3)[2].value).to.equal(3);
    expect(cropData(array, 3).length).to.equal(3);
  });
});
