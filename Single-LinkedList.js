const Node = require('./Node');


class LinkedList {
    constructor() {
        this.head = null;
    };

    insertFirst(value) {
        this.head = new Node(value, this.head);
    };

    insertBefore(value) {
        if (this.head === null) {
            return null;
        };
        let tempCurrentNode = this.head;
        let previousNode = this.head;

        while (find(value) != value) {
            previousNode = tempCurrentNode
            tempCurrentNode = tempCurrentNode.next
        }
        previousNode.next = new Node(value, tempCurrentNode)
    }


    insertAfter(value) {
        if (this.head === null) {
            this.insertFirst(value);
        };
        let tempCurrentNode = this.head;
        let previousNode = this.head;
        while (find(value) != value) {
            tempCurrentNode = tempCurrentNode.next
        }
        previousNode.next = new Node(value, tempCurrentNode)
    }


    find(value) {
        let currentNode = this.head
        if (!this.head) {
            return null
        }
        while (currentNode.value != value) {
            if (currentNode.next === null) {
                return null
            }
            currentNode = currentNode.next
        }
        return currentNode
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