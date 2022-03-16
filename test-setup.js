import o from "ospec"
import jsdom from "jsdom"

var dom = new jsdom.JSDOM("", {
	pretendToBeVisual: true,
})

global.window = dom.window
global.document = dom.window.document

global.requestAnimationFrame = dom.window.requestAnimationFrame

o.after(function(){
	dom.window.close()
})
