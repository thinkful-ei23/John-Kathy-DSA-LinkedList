'use strict'

const LinkedList = require('./Single-LinkedList');


function main() {

	const SLL = new LinkedList

	SLL.insertFirst('Apollo');
	SLL.insertLast('Boomer');
	SLL.insertLast('Helo');
	SLL.insertLast('Husker');
	SLL.insertLast('Starbuck');
	// console.log(SLL.head.next.next, 'here in the stars3')
	SLL.insertLast('Tahida');
	SLL.remove('squirrel');
	console.log(JSON.stringify(SLL));

}

main()