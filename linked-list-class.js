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
      if(!this.head) {
          return null;
      }
      //if the node to be removed is the head, make the next node head
      if(this.head.value === item) {
          this.head - this.head.next;
          return;
      }
      //start at the hed
      let currentNode = this.head;
      //keep track of previous
      let previousNode = this.head;

      while((currentNode !== null) && (currentNode.value !== item)) {
          //save the previous node
          previousNode = currentNode;
          currentNode - currentNode.next;
      }
      if(currentNode === null) {
          console.log('Item not found');
          return;
      }
      previousNode.next = currentNode.next;
  }
}


module.exports = LinkedList;