

class Node {
   constructor(val){
      this.val = val;
      this.next = null;
   }
}

class SinglyLinkedList{
   constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   push(val){
      const newNode = new Node(val);
         // if head doesnt exist ( edge case )
         if(!this.head){
            this.head = newNode;
            this.tail = this.head;
         }
         else{
            this.tail.next = newNode; // creates tail.next key with val of newNode
            this.tail = newNode;  // reassigns the tail value to newNode 
         }
         this.length ++
         return this
   }
   pop(){
         if(this.length < 1){
            return 'list has no items'
         }
         else{
            let current = this.head
            let newTail = current
            while(current !== null){
               newTail = current;
               current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length --;
            return current;
         }

   }
   shift(){
      if(this.length < 1) return undefined
      const tempHead = this.head;
      this.head = this.head.next;
      this.length --;
      return tempHead;
   }
   unshift(val){
      const newNode = new Node(val)
         if(!this.head){
            this.head = newNode;
            this.tail = newNode;
         }else{
            newNode.next = this.head;
            this.head = newNode;
         }
      this.length ++;
      return this;
   }
   get(index){
      if(index >= this.length || index < 0){
         return null
      }
      let count = 0;
      let currentNode = this.head;
      while(count < this.length){
         currentNode.next;
         count++;
      }
      return currentNode;
   }
   set(index, val){
      let nodeAtIndx = this.get(index) 
      if (nodeAtIndx === null) return false;
      nodeAtIndx.val = val;
      return true;
   }
   insert(index, val){
      let newNode = new Node(val)
      if (nodeAtIndx === null) return false;
      if (index === 0) {this.unshift(val); return true;}

      let newNode = new Node(val)
      let nodeAtIndx = this.get(index)
      let prevNode = this.get(index - 1)
   
      newNode.next = nodeAtIndx;
      prevNode.next = newNode;
      this.length++

      return true;
   }
}

const list = new SinglyLinkedList()
