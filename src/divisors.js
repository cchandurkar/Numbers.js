export default (number) => {
  let divsr = [ number ];
  for(let i = 1; i <= number/2; i++){
    if(number % i === 0)
    divsr.push(i);
  } return divsr;
};
