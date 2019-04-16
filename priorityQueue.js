function priorityQueue() {
  const collection = []

  this.printCollection = function() {
    console.log(collection)
  }

  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      let added = false
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element)
          added = true
          break
        }
      }
      if (!added) {
        collection.push(element)
      }
    }
  }

  this.dequeue = function(element) {
    const value = collection.shift()
    return value[0]
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

const pq = new priorityQueue()

pq.enqueue(['michael', 2])
pq.enqueue(['gaucher', 3])
pq.enqueue(['tanner', 1])
pq.printCollection()
