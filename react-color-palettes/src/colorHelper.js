import chroma from 'chroma-js';
/*
const oldPalette = {
    paletteName: "Material UI Colors",
    id: "material-ui-colors",
    emoji: "🎨",
    colors: [
      { name: "red", color: "#F44336" },
      { name: "pink", color: "#E91E63" },
      { name: "purple", color: "#9C27B0" },
      { name: "deeppurple", color: "#673AB7" },
      { name: "indigo", color: "#3F51B5" },
      { name: "blue", color: "#2196F3" },
      { name: "lightblue", color: "#03A9F4" },
      { name: "cyan", color: "#00BCD4" },
      { name: "teal", color: "#009688" },
      { name: "green", color: "#4CAF50" },
      { name: "lightgreen", color: "#8BC34A" },
      { name: "lime", color: "#CDDC39" },
      { name: "yellow", color: "#FFEB3B" },
      { name: "amber", color: "#FFC107" },
      { name: "orange", color: "#FF9800" },
      { name: "deeporange", color: "#FF5722" },
      { name: "brown", color: "#795548" },
      { name: "grey", color: "#9E9E9E" },
      { name: "bluegrey", color: "#607D8B" }
    ]
  }*/
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]; 

function generateColors(oldPalette, numOfColors){
	let newPalette = {
		paletteName: oldPalette.paletteName,
		id: oldPalette.id,
		emoji: oldPalette.emoji,
		colors: {}
	};

	// iterate over the levels and assign an empty array to all of em. 
	// colors: {
	// 	50: [],
	// 	100: []....
	// }
	for(let level of levels){
		newPalette.colors[level] = [];
	}

	// iterate over the oldPalete colors and generate 10 shades of each of em
	// colors: {
	// 	50: [
		// 	0:{
		// 		hex: "#d6f1e8",
		// 		id: "turquoise",
		// 		name: "Turquoise 100",
		// 		rgb: "rgb(214,241,232)",
		// 		rgba: "rgba(214,241,232,1.0)"
		// 	}
		// ],
		//  1: {
		//  	hex: "#d9f5df"
		//  	id: "emerald"
		//  	name: "Emerald 100"
		//  	rgb: "rgb(217,245,223)"
		//  	rgba: "rgba(217,245,223,1.0)"
		//  }
	// 	100: []....
	// }
	for(let color of oldPalette.colors){
		let scale = generateScale(color.color, 10).reverse();
		for(let i in scale){
			newPalette.colors[levels[i]].push({
				name: `${color.name} ${levels[i]}`,
				id: color.name.toLowerCase().replace(/ /g, "-"),
				hex: scale[i],
				rgb: chroma(scale[i]).css(),
				rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
			})
		}
	}

	return newPalette;

}

// for chroma range - syntax [dark, middle, light] 
function getRange(hexColor){
	const end = '#fff';
	return [
		chroma(hexColor).darken(1.4).hex(),
		hexColor,
		end
	];
}

// get the shades of colors using the range extracted above
function generateScale(hexColor, numOfColors){
	return chroma.scale(getRange(hexColor)).mode("lab").colors(numOfColors);
}

export {generateColors}