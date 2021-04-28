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

badchar = ['.', 'e', 'E'];

function exception(str) {
	console.log('Unknown option argument: "' + str + '"');
	console.log('Usage: node main.js Integer1 Integer2 ...');
	console.log('');
	process.exit(1);
}

input = process.argv.slice(2);
let out = ''
input.forEach(n => {
	for (let i = 0; i < badchar.length; ++i) {
		if (n.indexOf(badchar[i]) !== -1) {
			exception(n);
		}
	}
	if (isNaN(n)) {
		exception(n);
	}
	let n_str = ''
	for (let i = 0; i < n.length; i++) {
		n_str += table[n[i]];
	}
	out += n_str + ',';
})
console.log(out.slice(0, -1));
