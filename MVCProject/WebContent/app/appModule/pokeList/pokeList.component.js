angular.module('appModule')
.component('pokeList', {
	
	templateUrl:'app/appModule/pokeList/pokeList.component.html',
	
	controller: function(pokemonService){
		let vm = this;
		
		vm.pokemons = [];
		
		
		
		pokemonService.index()
		.then(function(response) {
			vm.pokemons = response.data;
			});
		
		var reload = function() {
			pokemonService.index()
			.then(function(response) {
			vm.pokemons = response.data;
			console.log('in reload method');
			});
		}
		
		reload();
		
		
		vm.create = function(pokemon){
			pokemonService.create(pokemon).
			then(reload);
			}
	},
	controllerAs:'vm'
})