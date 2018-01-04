angular.module('appModule')
.factory('pokemonService', function($http){
	var service = {};
	const baseUrl = 'http://52.25.225.137:8080/pokemon/data/poke';

	 service.index = function() {
		 	return $http({
		      method : 'GET',
		      url : baseUrl
		    })
		  };
		  
		  service.create = function(pokemon) {
			  return $http({
			      method : 'POST',
			      url : baseUrl,
			      headers : {
			        'Content-Type' : 'application/json'
			      },
			      data : pokemon
			    })
		  };
	return service;	  
});