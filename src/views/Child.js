import m from "mithril"

// const Child = (state, actions) =>
function Child(vnode){

	let { state, actions } = vnode.attrs	

	return {
		view: function(){
			return m('div',
				m('h1', 'Child'),
				m('p', state.count * 2),

				m('button', { 
					onclick: function() {
						actions.increment()
					}
				}, '+'),

				m('button', { 
					onclick: function() {
						actions.decrement() 
					}
				}, '-'),

			)
		}
	}
}

export default Child
