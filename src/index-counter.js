import m from "mithril"

import State from "./models/State"
import Actions from "./models/Actions"
import Counter from "./views/Counter"
import Child from "./views/Child"

const state = State()
const actions = Actions(state)

m.mount(document.body, {

	// view: () => m(Counter, {state, actions})

	
	view: () => 
		m("div",
			m(Counter, {state, actions}),
			// m(Child, {state, actions}),
		)

})
