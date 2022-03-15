import m from "mithril"

const Layout = {
	view: function(vnode) {
		return m("main.layout", [
			m("nav.menu", [
				m(m.route.Link, {href: "/list"}, "Users"),
				m(m.route.Link, {href: "/new"}, "New"),
				m(m.route.Link, {href: "/counter"}, "Counter")
			]),
			m("section", vnode.children)
		])
	}
}

export default Layout
