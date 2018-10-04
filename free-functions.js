const Node = require('./Node')

function display(currentNode) {
    if (currentNode.next === null) {
        return currentNode.value
    }
    return currentNode.value + ' ' + display(currentNode.next)
}


function size(List) {
    let tempCurrentNode = List.head
    let count = 1
    if (List.head === null) {
        return 0
    }

    while (tempCurrentNode.next != null) {
        tempCurrentNode = tempCurrentNode.next
        count++
    }
    return console.log(count)
}

function isEmpty(list) {
    if (list.head === null) {
        return console.log('empty')
    } else {
        return console.log("I'm here, really!")
    }
}

function findPrevious(list, node) {
    let currentNode = list.head;
    let previousNode = list.head;

    if (list.head === null) {
        return null
    } while (currentNode.value !== node) {
        previousNode = currentNode
        currentNode = currentNode.next
    }
    return previousNode
}

function findLast(list){
    let currentNode = list.head

    if(list.head === null){
        return null
    }
    while(currentNode.next != null){
        currentNode = currentNode.next
    }
    return currentNode
}

//find the last in the list
// if .next === null this.head === currentNode
//set .next to currentNode

function reverseIt(list,currentNode){
    if(currentNode.next === null){
        return list.head = new Node(currentNode, previousNode)
    }
    console.log(previousNode.value)
    return new Node(currentNode, previousNode), reverseIt(list,currentNode.next)
}

function reverseIt2(list){
    
}


module.exports = { display, size, isEmpty, findPrevious,findLast,reverseIt }