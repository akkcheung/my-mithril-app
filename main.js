import m from "mithril"

var count = 0

var Splash ={
	view: function() {
		return m("a", {href: "#!/hello"}, "Enter!")
	}
}

var Hello = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "My first app"),
            // m("button", { onclick: function() {count++}
            m("button", { onclick: increment}, count + " clicks"),
        ])
    }
}

/*
function MyComponent() {
	return {
			view: () => {
					<main>
						<h1>Hello world</h1>
					</main>
			}
	}	
}
*/

// m.mount(document.body, Hello)
// m.mount(document.body, MyComponent)

var increment = function() {
	m.request({
		method: "PUT",
		url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
		body: {count: count + 1},
		withCredentials: true
	})
	.then(function(data){
			count = parseInt(data.count)
	})
}


m.route(document.body, "/splash", {
	"/splash": Splash,
	"/hello": Hello,
})


