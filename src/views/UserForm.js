import m from "mithril"
import User from "../models/User"
	
// const UserForm = {
function UserForm() {
	
	var isDeleteBtnDisable = false

	return { 
	oninit: function(vnode) {
		console.log("UserForm -> oninit :" + vnode.attrs.id)
		User.load(vnode.attrs.id)

		if (vnode.attrs.id == null ) {
			isDeleteBtnDisable = true
		}
		
		console.log(isDeleteBtnDisable)

	},
	onbeforeupdate(vnode){
		console.log("UserForm -> onbeforeupdate :" + vnode.attrs.id)
		// User.load(vnode.attrs.id)

		//if (vnode.attrs.id == null ) {
			// User.current = {firstName:'', lastName: ''}
			// User.current = {}
		//}
	},
	view: function() {
		return m("div", 
			m("form", {
				onsubmit: function(e) {
					e.preventDefault()

					if (confirm("Continue?")) {
						User.save()
					}
				}
			},[
				m("label.label", "First name"),
				m("input.input[type=text][placeholder=First name]", {
					oninput: function(e) {User.current.firstName = e.target.value},
					value: User.current == null ? '' : User.current.firstName
				}), 
				m("label.label", "Last name"),
				m("input.input[placeholder=Last name]", {
					oninput: function(e) {User.current.lastName = e.target.value},
					value: User.current == null ? '' : User.current.lastName
				}),
				m("button.button[type=submit]", "Save"),
				// m("input", {"type":"submit", "value":"Save"}),
			]),
			m("button", {
				"type":"buton", 
				"disabled": isDeleteBtnDisable,
				 // onclick: User.delete()
				 onclick: function() { 
					if (confirm("Continue?")) {
				 		User.delete()
					}
				 }
				}
			, "Delete"),
		)
	}
}
}

export default UserForm
