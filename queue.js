// implementation of a queue

function Queue() {
  collection = []

  this.print = function() {
    console.log(collection)
  }

  this.enqueue = function(element) {
    collection.push(element)
  }

  this.dequeue = function(element) {
    return collection.shift()
  }

  this.front = function(element) {
    return collection[0]
  }

  this.size = function(element) {
    return collection.length
  }

  this.isEmpty = function(element) {
    return collection.length === 0
  }
}

const a = new Queue()

a.enqueue('tanner')
a.print()
a.enqueue('gaucher')
a.print()
console.log(a.size())
console.log(a.front())
console.log(a.isEmpty())
