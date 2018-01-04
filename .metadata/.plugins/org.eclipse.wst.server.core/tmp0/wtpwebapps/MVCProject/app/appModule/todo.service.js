angular.module('appModule')
.factory('todoService', function(){
	var service = {};
	
	var todos = [
	      {
	        id : 1,
	        task : 'Walk the dog',
	        description : 'do it in the morning',
	        completed : false
	      },
	      {
	        id : 2,
	        task : 'Exercise',
	        description : 'at gym after work',
	        completed : false
	      },
	      {
	        id : 3,
	        task : 'Read lots of books',
	        description : 'do after dinner',
	        completed :  false
	      }
	    ];
	
	 service.index = function() {
		    return todos;
		  };

		  service.create = function(todo) {
			  var generateId = function() {
					return todos[todos.length-1].id + 1;	
				}
			  	todo.id = generateId();
				todo.completed = false;
				todos.push(todo);
		  };
		  
		  service.update = function(todo){
	    	  todos.find( function(element,idx,arr){
	    		  if(element.id === todo.id){
	    			  todos.splice(idx,1,todo);
	    		  }  
	    	  });  	
	      
	      };
	      
	      service.delete = function(id){
	    	  todos.find( function(element,idx,arr){
	    		  if(element.id === id){
	    			  todos.splice(idx,1);
	    		  }  
	    	  });
	      };
		  
	
	console.log(service)
	return service;
})