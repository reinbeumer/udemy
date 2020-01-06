function createPasswordORG(t) {
	for (
		var r = '',
			e = String(
				t + ' ' + new Date().getHours() + ':' + new Date().getMinutes()
			),
			n = Math.floor(10 * Math.random()) + 1,
			a = String(''.substring(0, 9)),
			o = '',
			g = 0;
		g < e.split(' ')[1].length;
		g++
	)
		o = btoa(e[r]).replace('==', '') + o;
	for (o.length < e.length && (o += o); a.length < 10;) {
		for (var l = 0; l < e.split(' ')[0].length; l++)
			r += btoa(e.split(' ')[0][l] + o[l]).replace('=', '');
		a += String.fromCharCode(Math.floor(25 * Math.random()) + 97);
	}
	return r
		.concat(
			Math.random()
				.toString(36)
				.substr(2, n)
		)
		.slice(0, -n)
		.substring(r.length - 16);
}
function createPasswordORG2(t) {
	for (
		var r = '',
			e = String(
				t + ' ' + '3:23'
			),
			n = Math.floor(10 * Math.random()) + 1,
			a = String(''.substring(0, 9)),
			o = '',
			g = 0;
		g < e.split(' ')[1].length;
		g++
	)
		o = btoa(e[r]).replace('==', '') + o;
	for (o.length < e.length && (o += o); a.length < 10;) {
		for (var l = 0; l < e.split(' ')[0].length; l++)
			r += btoa(e.split(' ')[0][l] + o[l]).replace('=', '');
		a += String.fromCharCode(Math.floor(25 * Math.random()) + 97);
	}
	return r
		.concat(
			Math.random()
				.toString(36)
				.substr(2, n)
		)
		.slice(0, -n)
		.substring(r.length - 16);
}
function createPasswordREIN(t) {
	t = String(t);
	var r = '';
	var o = 'dW5kZWZpbmVkdW5kZWZpbmVkdW5kZWZpbmVkdW5kZWZpbmVkdW5kZWZpbmVk';
	for (var a=0; a < 10; a++) {
		for (var l = 0; l < t.split(' ')[0].length; l++)
			r += btoa(t[l] + o[l]).replace('=', '');
	}
	var substringing = r.substring(r.length - 16);
	return substringing;
}
function createPassword(t) {
	var org = createPasswordORG(t);
	var org2 = createPasswordORG2(t);
	var rein = createPasswordREIN(t);
	console.log('org    -> ' + org);
	console.log('org2   -> '+org2);
	console.log('rein   -> '+rein);
}
