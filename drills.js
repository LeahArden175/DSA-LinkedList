class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    //the head indicates the beginning of the list
    //in this case it starts with an empty list OR null
    this.head = null;
  }

  insertFirst(item) {
    //Create a new node item
    //Point the head to that new node
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    //create new node item
    //check to see if the list is empty
    if (this.head === null) {
      //if empty insert as first item
      this.insertFirst(item);
    } else {
      //move through the list untill you reach the end
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      //create new node with pointer set to null
      //this indicates that it is as the end of the list
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, beforeItem) {
    // if list is empty return null(end)
    if (!this.head) {
      this.insertFirst(item);
    }
    if (this.head === null) {
      return null;
    }
    // loop through the list to find current and previous nodes
    // if node that has value equal to the target, that node is the current
    // Node and the one before it is the previous Node
    let currentNode = this.head;
    let previous = this.head;
    while (currentNode !== null && currentNode.value !== beforeItem) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log('fuck the target');
    }

    previous.next = new _Node(item, previous.next);
  }

  insertAfter(item, afterItem) {
    //check to see if list is empty
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }
    //find where item is in list
    let currentNode = this.find(afterItem);

    //if next is null insert last
    if (currentNode === null) {
      this.insertLast(item);
      return;
    }

    //create new node
    const tempNode = new _Node(item, currentNode.next);
    //add new node after the afterItem
    currentNode.next = tempNode;
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
    //if the list is empty return null
    if (!this.head) {
      return null;
    }
    //check for the item
    while (currentNode.value !== item) {
      /*return null if it's the end of the list
                  and the item is not on the list*/
      if (currentNode.next === null) {
        return null;
      } else {
        //otherwise keep looking
        currentNode = currentNode.next;
      }
    }
    //found it
    return currentNode;
  }
  remove(item) {
    //If the listi in empty return null
    if (!this.head) {
      return null;
    }
    //if the node to be removed is the head, make the next node head
    if (this.head.value === item) {
      this.head  this.head.next;
      return;
    }
    //start at the hed
    let currentNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      //save the previous node
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currentNode.next;
  }
  display() {
    if (!this.head) {
      return console.log("empty list");
    }
    // else if(!this.head.next){
    //   return console.log(this.head.value)
    // }
    else {
      //move through each item and console.log until end of list
      let currNode = this.head;
      while (currNode !== null) {
        console.log(currNode.value);
        currNode = currNode.next;
      }
      return null;
    }
  }
}


//2. Create a singly linked list
function main() {
  const SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");

  SLL.insertLast("Tauhida");

  SLL.insertBefore("Athena", "Boomer");

  SLL.insertAfter("Hotdog", "Helo");

  SLL.insertAt("Kat", "3");

  SLL.remove("Tauhida");

  // SLL.remove('squirrel')
  // returns item not found

  SLL.display();
}
main();

// 3. Supplemental functions for a linked list

let emptyList = new LinkedList();

let SLL = new LinkedList();
SLL.insertLast('Apollo');
SLL.insertLast('Boomer');
SLL.insertLast('Hello');
SLL.insertLast('Husker');
SLL.insertLast('Starbuck');
SLL.insertLast('Tauhida');
SLL.display();

function size(list) {
  let size = 0;
  let currentNode = list.head;

  while (currentNode !== null) {
    size++;
    currentNode = currentNode.next;
  }
  return size;
}
console.log(size(SLL))

function isEmpty(list) {
    if(list.head === null) {
        return ('the list is empty')
    } else {
        return list
    }
}
console.log(isEmpty(emptyList))

function findPrevious(list, item) {
    if(list.head === null) {
        return('The list is empty')
    }

    let currentNode = list.head
    let previousNode = list.head
    
    while(currentNode !== null && currentNode.value !== item) {
        previousNode = currentNode
        currentNode = currentNode.next
    }

    if( currentNode === null) {
        return('Item not found')
    }

    return previousNode.value
}

console.log(findPrevious(SLL, 'Hello'))
console.log(findPrevious(SLL, 'Starbuck'))
console.log(findPrevious(SLL, 'Leah'))
console.log(findPrevious(emptyList, 'Starbuck'))

function findLast(list) {
    if(list.head === null) {
        return('The list is empty')
    }

    let currentNode = list.head
    
    while (currentNode.next !== null){
        currentNode = currentNode.next
    }

    return currentNode.value
}

console.log(findLast(SLL))

//4. Mystery program
//Removes duplicates from linked list
//O(n^k) Polynomial
//TODO
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
console.log('before')
SLL.display()
WhatDoesThisProgramDo(SLL)
console.log('after')
SLL.display()


//5. Reverse a list

function reverseList(list) {
    //A > B > C > null becomes C > B > A > null 
    let currentNode = list.head // A
    let previousNode = list.head // A
    let nextNode = currentNode.next // B
  
  while (nextNode !== null){
      if(currentNode === previousNode) {
        currentNode.next = null // A > null
      } else {
        currentNode.next = previousNode // B > A > null
      }
      previousNode = currentNode //prev = B
      currentNode = nextNode //curr = C
      nextNode = nextNode.next //next = null
    }
  
    if(nextNode === null) {
      list.head= currentNode //head > C > B
      currentNode.next = previousNode
    }
    return list
  }
  
  console.log('b e f o r e')
  SLL.display()
  reverseList(SLL)
  console.log('a f t e r')
  SLL.display()

  //6. 3rd from the end 

  function thirdToLast(list) {

    if(!list.head){
      return;
    }
    let currentNode = list.head
  
    while(currentNode.next.next.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode.value
  }
  
  console.log(thirdToLast(SLL))

  //7. Middle of a list

  function findMiddle(list) {
    if(!list.head){
      return "the list is empty"
    }
  
    let singleCount = list.head
    let doubleCount = list.head
  
    while(doubleCount.next && doubleCount.next.next) {
      singleCount = singleCount.next
      doubleCount = doubleCount.next.next
      }
      return singleCount.value
  }
  
  findMiddle(SLL)

  //8. Cycle in a list

  function cycleCheck(list) {
    //intial slow and fast pointers at head
    let slow = list.head
    let fast = list.head
    //traverse linked list
    while(fast && fast.next) {
      //fast moves by two
      fast = fast.next.next
      //slow moves by one
      slow = slow.next
      //if two pointers meet then there is a cycle
      if(fast === slow) {
        return true
      }
    }
    return false
  }
  
  cycleCheck(CycleList)
