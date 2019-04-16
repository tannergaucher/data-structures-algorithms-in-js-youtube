// implementation of a set in JS

function mySet() {
  const collection = []

  this.has = function(element) {
    return collection.indexOf(element) !== -1
  }

  this.values = function() {
    return collection
  }

  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element)
      return true
    }
  }
  // delete() in es6
  this.remove = function(element) {
    if (this.has(element)) {
      index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    }
    return false
  }

  this.size = function() {
    return collection.length
  }

  // not in es6. combine sets and leave out any duplicates
  this.union = function(otherSet) {
    const unionSet = new Set()
    const firstSet = this.values()
    const secondSet = otherSet.values()

    firstSet.map(x => {
      unionSet.add(x)
    })

    secondSet.map(x => {
      unionSet.add(x)
    })

    return unionSet
  }

  // return the intersection of 2 sets as a new set
  this.interSection = function(otherSet) {
    const interSectionSet = new Set()
    const firstSet = this.values()

    firstSet.map(x => {
      if (otherSet.has(x)) {
        interSectionSet.add(x)
      }
    })

    return interSectionSet
  }

  this.difference = function(otherSet) {
    const differenceSet = new Set()
    const firstSet = this.values()

    firstSet.map(x => {
      if (!otherSet.has(x)) {
        differenceSet.add(x)
      }
    })

    return differenceSet
  }

  // test if a set is a subset of a given set
  this.subset = function(otherSet) {
    var firstSet = this.values()
    return firstSet.every(function(value) {
      return otherSet.has(value)
    })
  }
}

const setA = new mySet()
const setB = new mySet()

setA.add('T')
setA.add('A')
setA.values()
setA.remove('A')
setA.values()
setB.add('T')
// setB.add('N')
