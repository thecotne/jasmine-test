import '../node_modules/babel-core/browser-polyfill.min.js';

export async function loadData() {
	let response = await fetch('http://jsonplaceholder.typicode.com/posts/100');
	let post = await response.json();
	console.log(post.title);
	return post;
}

