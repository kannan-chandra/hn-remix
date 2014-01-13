window.onload = function() {
	var list = document.getElementById('list');
	for (var i=0;i<stories.length;i++) {
		var node = document.createElement('li');
		node.innerHTML = stories[i].title;
		list.appendChild(node);
	}
}


var stories = [];

var story = {
	title:"blah blah story title",
	href:"#"

};
stories.push(story);
stories.push(story);