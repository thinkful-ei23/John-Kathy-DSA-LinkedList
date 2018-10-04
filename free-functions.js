function display(currentNode){
    if(currentNode.next === null){
        return currentNode.value
    }
    return currentNode.value + ' '+display(currentNode.next)
}


function size(List){
    let tempCurrentNode = List.head
    let count = 1
    if(List.head === null){
        return 0
    }

    while(tempCurrentNode.next != null){
        tempCurrentNode = tempCurrentNode.next
        count++
    }
    return console.log(count)
}





module.exports = {display,size}