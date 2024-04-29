function cubeChecker(volume, side) {
  return volume > 0 && side > 0 ? volume==Math.pow(side, 3) : false;
}

console.log(cubeChecker(125, 5));