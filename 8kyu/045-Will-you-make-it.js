const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return distanceToPump <= mpg*fuelLeft;
  };

  console.info(zeroFuel(50, 25, 2));
  console.info(zeroFuel(100, 50, 1));