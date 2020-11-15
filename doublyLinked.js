
class Node {
   constructor(val){
      this.val = val;
      this.next = null;
      this.prev = null;
   }
}

class SinglyLinkedList{
   constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   push(val){
      const newNode = new Node(val)
      if(this.length === 0){
         this.head = newNode;
         this.tail = newNode;
      }
      else{
         this.tail.next = newNode;
         newNode.prev = this.tail
         newNode = this.tail;
      }
      this.length++
      return this;
   }

   pop(){
      if(!this.head){
         return null;
      }
      const popped = this.tail

         if(this.length === 1){
            this.head.next=null;
            this.tail = null;
            return popped;
         }
         else{
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null // sever all ties
         }
         this.length--
   }

   shift(){
      if(this.length === 0)return null;
      var oldHead = this.head;
      if(this.length===1){
         this.head = null;
         this.tail = null;
      }
      else{
         this.head = this.head.next
         this.head.prev = null
         this.oldHead.next = null;

      }
      this.length --
      return oldHead
   }

   unshift(val){
      const newNode = new Node(val);
      if(this.length === 0){
         this.head = newNode
         this.tail = newNode
      }
      else{
         this.head.prev = newNode;
         newNode.next = this.head.next;
         this.head = newNode;
      }
      length ++;
      return this
   }

   get(index){
      if(index >= this.length || index < 0){
         return 'index larger then list'
      }
      if( index <= this.length/2){
         let count = 0;
         let current = this.head;
         while(count!==index){
            current = current.next;
            count++
         }
      }
      else{
         let count = this.length-1;
         let current = this.tail;
         while(count!==index){
            current = current.prev;
            count++
         }
      }
      return current
   }

   set(index, val){
      const nodeAtIndx = this.get(index);
      if(nodeAtIndx != null){
         nodeAtIndx.val = val;
         return true;
      }
      return false;
   }
   insert(index, val){
      if(index >= this.length  || index < 0 ){
         return null
      }
      if(index ===0) return this.unshift(val) 
      if(index === this.length -1) {return this.push(val)}
      else{
      const newNode = new Node(val);
      let prevNode = this.get(index-1)
      let nextNode = prevNode.next;
      newNode.prev = prevNode; newNode.next = nextNode;
      
      this.length++;
      return true;
      }
   }
   
   remove(index){
      if(index >= this.length  || index < 0 ){
         return null
      }
      if(index===0){
         return this.shift()
      }
      if(index===this.length-1){
         return this.pop()
      }
      const removed = this.get(index)
      const prev = removed.prev;
      const next = removed.next;
      prev.next = next;
      next.prev = prev;

      removed.next = null
      removed.prev = null
      this.length--
      return removed
   }  
}