/** @function convertData */
function convertData(data) {
  let tempData = data.map((c, i)=>c.data.map(d=>({
    x: new Date(d.label),
    y: d.value,
    id: c.id,
    color: c.color,
    name: c.name
  })));
  for (let i = 0; i < tempData.length; i ++) {
    tempData[i].sort((a, b)=> a.x - b.x);
  }
  return tempData;
}
module.exports = convertData;
