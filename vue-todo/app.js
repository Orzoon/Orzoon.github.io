var app = new Vue({
 el: "#app",
 data: {
   lists: [
     {  item: "Input task from the input field above", strike:false},
     {  item: "Check the checkbox to cross the completed task", strike:false},
   ],
   newItem:'',
   message:'',
   isAdded:false,
   isRemoved:false
  },
  methods: {
   addItem: function(){
     //initializing the id
     let id = this.lists.length + 1;
     if(this.newItem !== ''){
       //creating the list
       const newList = {id:id, item:this.newItem, strike: false}
       //pushing into the newList
       this.lists.push(newList);
       //setting input string to empty string
       this.newItem = ''
       this.message = "Task added to the List"
       this.isAdded= true;
       setTimeout(function(){
         this.isAdded = false;
         this.message = '';
       }.bind(this),1000);
     }
    },
   removeItem: function(list){
     //Removing the items based on id number
     this.lists.splice(this.lists.indexOf(list),1);
     console.log(this.id);
     this.message = "Task removed from the List"
     this.isRemoved = true;
     setTimeout(function(){
       this.isRemoved = false;
       this.message = '';
     }.bind(this),1000)

   }
 }
})
