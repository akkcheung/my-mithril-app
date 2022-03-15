import m from "mithril"

// m.render(document.body, "hello world")

import UserList from "./views/UserList"
import UserForm from "./views/UserForm"
import Layout from "./views/Layout"

import Counter from "./views/Counter"

import State from "./models/State"
import Actions from "./models/Actions"

// m.mount(document.body, UserList)

m.route(document.body, "/list", {
	"/list": {
		render: function(){
			return m(Layout, m(UserList))
		}
	},
	"/edit/:id": {
		render: function(vnode){
			return m(Layout, m(UserForm, vnode.attrs))
		}
	},
	"/new": {
		render: function(vnode){
			return m(Layout, m(UserForm, vnode.attrs))
		}
	},
	"/counter": {
		render: function(vnode){
			const state = State()
			const actions = Actions(state)

			return m(Layout, m(Counter(state, actions)))
			// return m(Layout, m(Counter))
		}
	}
})


