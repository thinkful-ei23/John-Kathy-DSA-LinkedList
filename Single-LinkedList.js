const Node = require('./Node');


class LinkedList {
    constructor() {
        this.head = null;
    };

    insertFirst(value) {
        this.head = new Node(value, this.head);
    };

    find(item) {
        //start at the head
        let currNode = this.head;
        //if the list is empty
        if (!this.head) {
            return null;
        }
        //Check for the item
        while (currNode.value !== item) {
            //return null if end of the list
            // and the item is not on the list
            if (currNode.next === null) {
                return null;
            }
            else {
                //otherwise keep looking
                currNode = currNode.next;
            }
        }
        //found it
        return currNode;
    }
    //make sure to write out the psudo code first to get a better idea in mind how the code is structured
    insertBefore(value, key) {

        let tempCurrentNode = this.head;
        let previousNode = this.head;

        if (this.head === null) {
            return null;
        }

        while (key != tempCurrentNode.value) {
            if (tempCurrentNode.next === null) {
                return null
            }
            previousNode = tempCurrentNode
            tempCurrentNode = tempCurrentNode.next
        }
        previousNode.next = new Node(value, tempCurrentNode)
    }


    insertAfter(value, key) {
        if (this.head === null) {
            this.insertFirst(value);
        };
        let tempCurrentNode = this.head;
        let nextNode = this.head;
        while (tempCurrentNode.value != key) {
            tempCurrentNode = tempCurrentNode.next
            nextNode = tempCurrentNode.next
        }
        tempCurrentNode.next = new Node(value, nextNode)
    }
    insertAt(value, position) {
        let count = 1;

        if (this.head === null) {
            this.insertFirst(value);
        }
        let tempCurrentNode = this.head;
        let previousNode = this.head;
        while (count !== position) {
            if (tempCurrentNode.next === null) {
                return null;
            } else {
                previousNode = tempCurrentNode;
                tempCurrentNode = tempCurrentNode.next;
                count++;
            }
        }
        previousNode.next = new Node(value, tempCurrentNode)
    }




    insertLast(value) {
        if (this.head === null) {
            this.insertFirst(value)
        };
        let tempNode = this.head;
        while (tempNode.next != null) {
            tempNode = tempNode.next;
        };
        tempNode.next = new Node(value, null);
    };

    remove(value) {
        if (!this.head) {
            return null;
        };
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        };
        let currentNode = this.head;
        let previousNode = this.head;
        while ((currentNode != null) && (currentNode.value != value)) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode === null) {
            console.log('item not found');
            return;
        }
        previousNode.next = currentNode.next;
    };

};



module.exports = LinkedList