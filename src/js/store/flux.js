const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: {},
			characters: {},
			vehicles: {},
			onePlanet: {},
			onePerson: {},
			oneVehicle: {},
			favorites: [],
			oneTest: {}
		},
		actions: {
			getCharacters: async (page = 1) => {
				try {
					const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
					const data = await response.json();
					if (response.ok) {
						setStore({
							characters: data
						});
					} else {
						alert("Error");
					}
				} catch (error) {
					alert(error);
				}
			},
			getPlanets: (page = 1) => {
				fetch(`https://swapi.dev/api/planets/?page=${page}`)
					.then(resp => resp.json())
					.then(data => {
						setStore({
							planets: data
						});
					});
			},
			getVehicles: (page = 1) => {
				fetch(`https://swapi.dev/api/vehicles/?page=${page}`)
					.then(resp => resp.json())
					.then(data => {
						setStore({
							vehicles: data
						});
					});
			},
			getOnePlanet: id => {
				fetch(`https://swapi.dev/api/planets/${id}`)
					.then(resp => resp.json())
					.then(data => {
						setStore({
							onePlanet: data
						});
					});
			},
			getOnePerson: id => {
				fetch(`https://swapi.dev/api/people/${id}`)
					.then(resp => resp.json())
					.then(data => {
						setStore({
							onePerson: data
						});
					});
			},
			getOneVehicle: id => {
				fetch(`https://swapi.dev/api/vehicles/${id}`)
					.then(resp => resp.json())
					.then(data => {
						setStore({
							oneVehicle: data
						});
					});
			},
			getFavorites: (nombre, url) => {
				const store = getStore();

				setStore({
					favorites: store.favorites.concat({ name: nombre, idUrl: url })
				});
			},
			deleteFavorite: deleted => {
				setStore({
					favorites: getStore().favorites.filter(elem => elem.name != deleted)
				});
			},
			getTest: id => {
				fetch(id)
					.then(resp => resp.json())
					.then(data => {
						setStore({
							oneTest: data
						});
					});
			}
		}
	};
};

export default getState;
