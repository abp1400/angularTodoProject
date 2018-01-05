angular.module('appModule')
.factory('todoService', function($http){
	var service = {};
	
	const baseUrl = 'rest/user/1/todos';
	 
	service.index = function() {
			 	return $http({
			      method : 'GET',
			      url : baseUrl 
			    })
			  };
			  
			  service.create = function(todo) {
				  return $http({
				      method : 'POST',
				      url : baseUrl,
				      headers : {
				        'Content-Type' : 'application/json'
				      },
				      data : todo
				    })
			  };
		  
		  service.update = function(todo){
			  return $http({
			      method : 'PUT',
			      url : baseUrl + '/' + todo.id,
			      headers : {
			        'Content-Type' : 'application/json'
			      },
			      data : todo
			    })
	      
	      };
	      
	      service.delete = function(id){
	    	 	return $http({
				      method : 'DELETE',
				      url : baseUrl + '/' + id,
				    })
	      };
		  
	return service;
})