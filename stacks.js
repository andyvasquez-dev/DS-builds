class Node{
   constructor(val){
      this.val = val;
      this.next = null;
   }
}

class Stack{
   constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
   }
   pop(){
      if(!this.size){
         return null
      } 

      if(this.first === this.last){
         this.last = null;
      }
      else{
         let newFirst = this.first.next;
         let currentFirst = this.first;
         this.first = newFirst;
         this.size--;
         return `removed ${currentFirst}, ${this.size} nodes left`;
      }
   }
   push(val){
      let newNode = new Node(val)
      if(!this.first){
         this.first = newNode;
         this.last = newNode;
      } else{
         const temp = this.first;
         this.first = newNode;
         newNode.next = temp;
      }
      return this.size++
   }

}