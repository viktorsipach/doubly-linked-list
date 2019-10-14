const Node = require('./node');

class LinkedList {

    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }
    
append(data) {
            
  const node = new Node(data);
    
  if (this._head) {
    
    this._tail.next = node;
    node.prev = this._tail;
    
    this._tail = node;
    
  } else {
    
    this._head = node;
    this._tail = node;
    
  }
    
  this.length++;
    
  return this;
}
    
head() {
    
  if (this._head) {
    
    return this._head.data;
    
  } else {
    
    return null;
    
  }
}
    
tail() {
    
  if (this._tail) {
    
    return this._tail.data;
    
  } else {
    
    return null;
    
  }
}
    
at(index) {
    
  if (this._head) {
    
    let current = this._head;
    let counter = 1;
    
  while (counter <= index) {
    current = current.next;
    counter++;

    }
    
    return current.data;
    
  } else {
    
    return null;
    
  }
    
}
    
insertAt(index, data) {
    
  if(this._head) {
    
    let item = new Node(data);
    
    let current = this._head;
    let counter = 1;

  while (counter <= index) {
    
    current = current.next;
    counter++;
    
  }
    
    item.next = current;
    
  if(current.prev) {
    
    current.prev.next = item;
    
  } else {
    
    this._head = item;
    
  }
    
    this.length++;

  } else {
    
    this.append(data);
    
  }
    
    return this;

}
    
isEmpty() {
    return this.length === 0 ? true : false;
}
    
clear() {
    
  this._head = null;
  this._tail = null;
  this.length = 0;
    
  return this;
}
    
deleteAt(index) {
    
  let current = this._head;
  let counter = 1;
    
  while (counter <= index) {
    
    current = current.next;
    counter++;
    
  }
    
  if (current.prev) {
    
    current.prev.next = current.next;
    
  } else {
    
    this._head = current.next;
    
    this.length--;
    
    return this;
  }
}  

reverse() {

  [this._head, this._tail] = [this._tail, this._head];
    
  let current = this._tail; 
    
  while(current && this.length > 1) {
    
    [current.prev, current.next] = [current.next, current.prev];
    current = current.prev;
    
  }

    return this;
}
 
    
indexOf(data) {
    
  let current = this._head;
  let counter = 0;
  let result = null;
    
  while (current) {
    
    if (current.data === data) {
    
        result = counter;
    
        break;
    
    }
    
      current = current.next;
      counter++;
    
    }
    
    return result !== null ? result : -1;
    
}
}      


module.exports = LinkedList;


