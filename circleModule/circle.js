module.exports = {
  circleArea,
  circleCircumference,
};
function circleArea(radius) {
  //pr^2
  console.log(Math.PI * radius ** 2);
}
function circleCircumference(radius) {
  //2pr
  console.log(Math.PI * radius * 2);
}
