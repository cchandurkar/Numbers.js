export default (series) => {

  // keep the occurance count
  let countMap = { },
      maxValue = 0,
      maxKey = null;

  // Loop over and increament occurance
  series.forEach((n) => {
      if(countMap.hasOwnProperty(n.toString())) countMap[n.toString()]++;
      else countMap[n.toString()] = 0;
  });

  // Sort according to value
  for(let key in countMap){
    if(countMap[key] > maxValue){
      maxKey = key;
      maxValue = countMap[key];
    }
  }

  // Return MaxKey as mode
  return +maxKey;

};
