// Удилить из строки все повторяющиеся подряд слова или символы: "Привет мир мир!! Привет привет мир!"
const Clear = (str) => {
	let mutated = str.split(' ').map(item=>item.toLowerCase())
	for(let i = 0; i < mutated.length; i++)
	{
		for(let j = i + 1; j < mutated.length; j++)
		{
			if(mutated[i].includes(mutated[j]))
				mutated[j] = ''
			else if (mutated[j].includes(mutated[i]))
				mutated[i] = ''
		}
		mutated[i] = [...(new Set(mutated[i].split('')))].join('')
	}
	return mutated.join(' ')
}
console.log(Clear("Привет мир мир!! Привет привет мир!"))
//Привет мир!