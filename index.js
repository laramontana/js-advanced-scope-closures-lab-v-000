const produceDrivingRange = function (range) {
  return function (s, f) {
    const start = s.slice(0,2);
    const finish = f.slice(0,2);

    if (finish - start > range) { return `${(finish-start)-range} blocks out of range`}
    else if (finish - start <= range) { return `within range by ${range-(finish-start)}`}
  }
}

const produceTipCalculator = function (tipShare) {
  return function (fare) {
    return fare*tipShare;
  }
}

function createDriver(){
  let DriverId = 0

  return class {
    constructor(name){
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
