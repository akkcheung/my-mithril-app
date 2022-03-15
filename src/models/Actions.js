const Actions = state => ({
	increment: () => {
		state.count += 1 
		console.log("increment ->" + state.count)
	},

	decrement: () => { 
		state.count -= 1
		console.log("decrement ->" + state.count)
	}
})

export default Actions

