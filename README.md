# Numbers.js
A helper library to operate numbers

# Install
Numbers.js is available as npm package and can be installed as `$ npm install number.js` or browserified build can be used from http://cchandurkar.github.io/Numbers.js/numbers.min.js



## Number Operations
```javascript
// 1. Checks whether number is prime number
numbers.isPrime(number) => [boolean]

// 2. Checks whether number is abundant number
numbers.isAbundant(number) => [boolean]

// 3. Checks whether number is perfect number
numbers.isPerfect(number) => [boolean]

// 4. Checks whether number is deficient number
numbers.isDeficient(number) => [boolean]

// 5. Checks whether number is perfect square
numbers.isPerfectSquare(number) => [boolean]

// 6. Get all divisors of a number
numbers.divisors(number) => [array]
```

## Series Operations
```javascript
// 1. Get a sum of all integers
numbers.series.sum([numbers]) => [number]

// 2. Finds a median of the series
numbers.series.median([numbers]) => [number]

// 3. Finds a range of the series
numbers.series.range([numbers]) => [number]

// 4. Finds a mean of the series
numbers.series.mean([numbers]) => [number]

// 5. Finds a mode of the series
numbers.series.mode([numbers]) => [number]

// 6. Sorts an array in ascending or descending order
numbers.series.sort([numbers], descending[boolean]) => [array]

// 7. Finds nth number in arithmetic series
numbers.series.nthArithmetic([numbers], n[number]) => [number]

// 8. Finds nth number in geometric series
numbers.series.nthGeometric([numbers], n[number]) => [number]

// 9. Checks whether series is in arithmetic progression
numbers.series.isArithmetic([numbers]) => [boolean]

// 10. Checks whether series is in geotetric progression
numbers.series.isGeometric([numbers]) => [boolean]
```
