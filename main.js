table = {
	'0': 'Zero',
	'1': 'One',
	'2': 'Two',
	'3': 'Three',
	'4': 'Four',
	'5': 'Five',
	'6': 'Six',
	'7': 'Seven',
	'8': 'Eight',
	'9': 'Nine'
};
input = process.argv.slice(2);
let out = ''
input.forEach(n => {
	/* TODO: if n is not numeric */
	let n_str = ''
	for (let i = 0; i < n.length; i++) {
		n_str += table[n[i]];
	}
	out += n_str + ',';
})
console.log(out.slice(0, -1));

