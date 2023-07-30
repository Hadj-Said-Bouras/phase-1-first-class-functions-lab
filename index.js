// Code your solution in this file!

const drivers = ['any', 'oaos', 'dsfsd', 'dsofjh', 'wdfsf']

const returnFirstTwoDrivers = function (par){
    const newArray = par.slice(0, 2);
    return newArray;
}

const returnLastTwoDrivers = function (any) {
    const nnew = any.slice(any.length -2, any.length + 1)
    return nnew;
}

const a = returnFirstTwoDrivers;
const b = returnLastTwoDrivers;

const selectingDrivers = [a, b]

console.log(selectingDrivers)

const createFareMultiplier = function (multiplier) {
    const fareMultiplier = function (fare) {
      return fare * multiplier;
    };
    return fareMultiplier;
  };

  const fareDoubler = function (fare){
    return createFareMultiplier(2)(fare)
  }

  const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
  }

function selectDifferentDrivers(array, fun) {
  return fun(array)
}