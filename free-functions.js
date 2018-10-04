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


module.exports = { display, size, isEmpty, findPrevious }