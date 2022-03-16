import mq from "mithril-query"
import o from "ospec"

import State from "../models/State.js"
import Actions from "../models/Actions.js"

import Counter from "../views/Counter.js"
import Child from "../views/Child.js"

const state = State()
const actions = Actions(state)

o.spec("Counter", function(){
	o("things are working", function(){
		var out = mq(Counter, {state, actions})

		out.should.contain("0")
	})
})
