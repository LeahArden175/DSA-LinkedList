class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoubleLinkedList {
  constructor() {
    //the head indicates the beginning of the list
    //the tail indicates the end of the list
    //in this case it starts with an empty list OR null
    this.head = null;
    this.tail = null;
  }

  display() {
    if (!this.head) {
      return conosle.log("empty list");
    } else {
      let currentNode = this.head;

      while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }

  insertFirst(item) {
    this.tail === null ? (this.tail = this.head) : (this.tail = this.tail.next);
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let previousNode = this.head;
      while (tempNode.next !== null) {
        previousNode = tempNode;
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null, previousNode);
    }
  }
  insertBefore(item, beforeItem) {
    if (!this.head) {
      this.insertFirst(item);
      return;
    }

    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode !== item && currentNode.value !== beforeItem) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      return;
    }

    if (currentNode === null) {
      this.insertLast(item);
      return;
    }

    const tempNode = new _Node(item, currentNode);

    previousNode.next = tempNode;
  }
  insertAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    let currentNode = this.head;
    let currentPosition = 1;

    while (currentPosition < position - 1) {
      currentNode = currentNode.next;
      currentPosition++;
    }

    const tempNode = new _Node(item, currentNode.next);

    currentNode.next = tempNode;
  }

  find(item) {
    //start at the head
    let currentNode = this.head;
    //return null if list is empty
    if (!this.head) {
      return null;
    }
    //traverse the list for the item
    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log("item does not exist");
    }
    previousNode.next = currentNode.next;
  }
}

function main() {
  let doubleList = new DoubleLinkedList();

  doubleList.insertFirst("Aquaria");
  doubleList.insertLast("Caprica");
  doubleList.insertLast("Gemenon");
  doubleList.insertLast("Picon");
  doubleList.insertLast("Sagittaron");

  doubleList.insertLast("Tauron");
  doubleList.insertBefore("leah", "Caprica");
  doubleList.remove("Picon");
  doubleList.insertAt("new", "5");

  doubleList.display();
}

main();

let doubleList = new DoubleLinkedList();

doubleList.insertFirst("Aquaria");
doubleList.insertLast("Caprica");
doubleList.insertLast("Gemenon");
doubleList.insertLast("Picon");
doubleList.insertLast("Sagittaron");

function reverseList(list) {
  //A > B > C > null becomes C > B > A > null
  let currentNode = list.head; // A
  let previousNode = list.head; // A
  let nextNode = currentNode.next; // B

  while (nextNode !== null) {
    if (currentNode === previousNode) {
      currentNode.next = null; // A > null
    } else {
      currentNode.next = previousNode; // B > A > null
    }
    previousNode = currentNode; //prev = B
    currentNode = nextNode; //curr = C
    nextNode = nextNode.next; //next = null
  }

  if (nextNode === null) {
    list.head = currentNode; //head > C > B
    currentNode.next = previousNode;
  }
  return list;
}

console.log("b e f o r e");
doubleList.display();

reverseList(doubleList);
console.log("a f t e r");
doubleList.display();
