angular.module('appModule')
.component('toDoList',{
	templateUrl:'app/appModule/toDoList/toDoList.component.html',
	
	controller: function(todoService){
	const vm = this;
	
//	vm.products=[];
//	
//	vm.products = productService.index();
//	
//	vm.getNumProduct = function() {
//		vm.products = productService.index();
//		return vm.products.length;
//      };
//	vm.addProduct = function(product) {
//		let copy = angular.copy(product)
//		console.log(copy);
//		
//		 productService.create(copy);
//	      vm.products = productService.index();
//	};

	vm.todos = [];
	
	var reload = function() {
		todoService.index()
		.then(function(response) {
		vm.todos = response.data;
		console.log('in reload method');
		});
	}
	
	reload();
	
	
	vm.addTodo = function(todo) {
			todo.completed = false;
			todoService.create(todo).
			then(reload);
			}
	

//	
vm.getNumTodo = function() {
return vm.todos.length;
    };
      
      vm.selected= null;
      vm.editTodo= null;
      
      vm.displayTodo = function(todo){
    	  	vm.selected = todo;
    	  
      };
      
      vm.displayTable = function(){
   	  	vm.selected = null;
   	  
      };
    
      vm.setEditTodo = function(){
    	  		let copy = angular.copy(vm.selected);
    	  		
    	  		vm.editTodo = copy;	
      };
      
      vm.updateTodo = function(todo) {
    	  todoService.update(todo)
    	  .then(reload);
    	  vm.selected = todo;
  	  
      };
      
      vm.deleteTodo = function(id){
    	  todoService.delete(id)
    	  .then(reload);
      };
      
	},
	controllerAs:'vm'
})