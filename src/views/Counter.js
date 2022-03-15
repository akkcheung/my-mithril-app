import m from "mithril"

import Child from "./Child"

function Counter(vnode) {

	let { state, actions } = vnode.attrs	

	return {
		view: function() {

			 return m('div',
					m('h1', 'Counter'),
					m('p', state.count),

					m('button', { 
						onclick: function() {
							actions.increment()
						} 
					}, '+'),


					m('button', { 
						onclick: function() {
							actions.decrement() }
						}, '-'),

					m(Child, {state, actions}) 

			 )
		}
	}
}

export default Counter
