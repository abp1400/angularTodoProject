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
	
	vm.todos = todoService.index();
	
	vm.addTodo = function(todo) {
		let copy = angular.copy(todo)
		
		todoService.create(copy);
		vm.todos = todoService.index();
		
	};
	
	vm.getNumTodo = function() {
		vm.todos = todoService.index();
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
    	  todoService.update(todo);
    	  vm.selected = todo;
    	  vm.todos = todoService.index();
    	  
      };
      
      vm.deleteTodo = function(id){
    	  todoService.delete(id);
    	  vm.todos = todoService.index();
      }
      
	},
	controllerAs:'vm'
})