const answer = []

// Write your code below this line
// Loop through numbers from 1 to 15
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    answer.push('FizzBuzz')
  } else if (i % 3 === 0) {
    answer.push('Fizz')
  } else if (i % 5 === 0) {
    answer.push('Buzz')
  } else {
    // Otherwise, push the number itself
    answer.push(i)
  }
}
// Don't touch the code below this line, we'll cover it later
module.exports = answer
