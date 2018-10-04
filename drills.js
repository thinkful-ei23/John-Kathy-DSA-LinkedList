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
	SLL.insertLast('Tauhida');
	//SLL.remove('squirrel');
	// console.log(JSON.stringify(SLL));
	SLL.insertBefore('Athena', 'Boomer');
	SLL.insertAfter('Hotdog', 'Helo');
	SLL.insertAt('Kat', 3);
	SLL.remove('Tauhida');
	console.log(JSON.stringify(SLL));

}

main()