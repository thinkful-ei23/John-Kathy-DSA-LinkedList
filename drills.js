'use strict'

const LinkedList = require('./Single-LinkedList');
const { display, size, isEmpty, findPrevious,findLast,reverseIt } = require('./free-functions')


function main() {

	const SLL = new LinkedList
	const TOO = new LinkedList
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
	// console.log(JSON.stringify(SLL));
	// console.log(display(SLL.head))
	// size(SLL)
	// isEmpty(SLL);
	// isEmpty(TOO);
	// console.log(findPrevious(SLL, 'Hotdog'))
	//	console.log(findLast(SLL))
	console.log(JSON.stringify(reverseIt(SLL,SLL.head)))
}

main()