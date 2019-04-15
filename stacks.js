// check if palindrome with a stack

const letters = []
const word = 'racecar'
let reversed = ''

// put letters on to stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i])
}

// pop off stack in reverse order
for (let i = 0; i < word.length; i++) {
  reversed += letters.pop()
}

if (reversed === word) {
  console.log(`${word} is a palindrome`)
}

//  implementing stack methods in js

const stack = {
  count: 0,
  storage: {},
  push: value => {
    stack.storage[stack.count] = value
    stack.count++
  },
  pop: () => {
    if (stack.count === undefined) {
      return undefined
    }
    stack.count--
    const result = stack.storage[stack.count]
    delete stack.storage[stack.count]
    return result
  },
  size: () => {
    return stack.count
  },
  // returns value at the end of the stack
  peek: () => {
    return stack.storage[stack.count - 1]
  },
}

stack.push(9)
stack.push(6)
stack.push(2)
stack.pop()

console.log(stack.size())

console.log(stack)
