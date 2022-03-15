import m from "mithril"

const User = {
	list: [],
	loadList: function() {
		return m.request({
			method: "GET",
			//url: "https://rem-rest-api.herokuapp.com/api/users",
			//withCredentials: true
			url: "http://localhost:8081/api/students",
			withCredentials: false 
			})
			.then(function(result) {
				User.list = result.data
		})
	},

	current: {},
	load: function(id) {
		console.log(`load ${id}`)

		if (id == null) {
			User.current = {firstName: '', lastName: ''}
		} else {

			return m.request({
				method: "GET",
				//url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
				//withCredentials: true,
				url: "http://localhost:8081/api/students/" + id,
				withCredentials: false,
			})
			.then(function(result) {
				User.current = result
			})
		}
	},

	save: function(){

		// console.log("save is pressed")
		console.log(JSON.stringify(User.current))

		let url = "http://localhost:8081/api/students/"
		let method = "POST"
		
		if (User.current.id != null) {
			url = "http://localhost:8081/api/students/" + User.current.id,
			method = "PUT"
		}

		return m.request({
			//method: "PUT",
			//url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
			//url: "http://localhost:8081/api/students/" + User.current.id,

			method: method,
			url: url,
			body: User.current,

			//withCredentials: true,
			withCredentials: false,
		})
		.then(function(result) {
			m.route.set("/list")
		})
	},

	delete: function(){
		let url = "http://localhost:8081/api/students/" + User.current.id
		let method = "Delete"

		return m.request({
			method: method,
			url: url,
			body: User.current,
		})
		.then(function(result) {
			m.route.set("/list")
		})
			
	},
}

export default User
