export const pokemon = [
	{ id: 1, name: "bulbasaur", weight: 69 },
	{ id: 2, name: "ivysaur", weight: 130 },
	{ id: 3, name: "venusaur", weight: 1000 },
	{ id: 4, name: "charmander", weight: 85 },
	{ id: 5, name: "charmeleon", weight: 190 },
	{ id: 6, name: "charizard", weight: 905 },
	{ id: 7, name: "squirtle", weight: 90 },
	{ id: 8, name: "wartortle", weight: 225 },
	{ id: 9, name: "blastoise", weight: 855 },
	{ id: 10, name: "caterpie", weight: 29 },
	{ id: 11, name: "metapod", weight: 99 },
	{ id: 12, name: "butterfree", weight: 320 },
	{ id: 13, name: "weedle", weight: 32 },
	{ id: 14, name: "kakuna", weight: 100 },
	{ id: 15, name: "beedrill", weight: 295 },
	{ id: 16, name: "pidgey", weight: 18 },
	{ id: 17, name: "pidgeotto", weight: 300 },
	{ id: 18, name: "pidgeot", weight: 395 },
	{ id: 19, name: "rattata", weight: 35 },
	{ id: 20, name: "raticate", weight: 185 },
	{ id: 21, name: "spearow", weight: 20 },
	{ id: 22, name: "fearow", weight: 380 },
	{ id: 23, name: "ekans", weight: 69 },
	{ id: 24, name: "arbok", weight: 650 },
	{ id: 25, name: "pikachu", weight: 60 },
	{ id: 26, name: "raichu", weight: 300 },
	{ id: 27, name: "sandshrew", weight: 120 },
	{ id: 28, name: "sandslash", weight: 295 },
	{ id: 29, name: "nidoran-f", weight: 70 },
	{ id: 30, name: "nidorina", weight: 200 },
	{ id: 31, name: "nidoqueen", weight: 600 },
	{ id: 32, name: "nidoran-m", weight: 90 },
	{ id: 33, name: "nidorino", weight: 195 },
	{ id: 34, name: "nidoking", weight: 620 },
	{ id: 35, name: "clefairy", weight: 75 },
	{ id: 36, name: "clefable", weight: 400 },
	{ id: 37, name: "vulpix", weight: 99 },
	{ id: 38, name: "ninetales", weight: 199 },
	{ id: 39, name: "jigglypuff", weight: 55 },
	{ id: 40, name: "wigglytuff", weight: 120 },
	{ id: 41, name: "zubat", weight: 75 },
	{ id: 42, name: "golbat", weight: 550 },
	{ id: 43, name: "oddish", weight: 54 },
	{ id: 44, name: "gloom", weight: 86 },
	{ id: 45, name: "vileplume", weight: 186 },
	{ id: 46, name: "paras", weight: 54 },
	{ id: 47, name: "parasect", weight: 295 },
	{ id: 48, name: "venonat", weight: 300 },
	{ id: 49, name: "venomoth", weight: 125 }
  ];
  
  export function fetchData() {
	return new Promise((res) => {
	  setTimeout(() => res(pokemon), 500);
	});
  }
  
  export function createTask(title) {
	return { id: Date.now(), title, status: "pending" };
  }
  