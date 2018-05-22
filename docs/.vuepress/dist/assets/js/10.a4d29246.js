(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{60:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),s("p",[t._v("This "),s("a",{attrs:{href:"https://github.com/vuex-orm/vuex-orm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex-ORM")]),t._v(" plugin uses the\n"),s("a",{attrs:{href:"https://www.apollographql.com/client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("apollo-client")]),t._v(" to let you sync your Vuex state with\na "),s("a",{attrs:{href:"http://graphql.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL API")]),t._v(".")]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),s("p",[t._v("This plugin is in BETA stage, please use with care.")])]),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#actions"}},[t._v("Actions")])]),s("li",[s("a",{attrs:{href:"#example-usage"}},[t._v("Example usage")])]),s("li",[s("a",{attrs:{href:"#license"}},[t._v("License")])])])]),s("p"),s("h2",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[t._v("#")]),t._v(" Actions")]),s("p",[t._v("While using Vuex-ORM with the Apollo plugin you have to distinct between two types of Vuex actions:")]),s("ul",[s("li",[t._v("Vuex-ORM actions: Retrieve data from or save data to Vuex ("),s("code",[t._v("Vue Component <--\x3e Vuex Store")]),t._v(")")]),s("li",[t._v("Persistence actions: Load data from or persist data to the GraphQL API ("),s("code",[t._v("Vuex Store <--\x3e GraphQL Server")]),t._v(")")])]),s("p",[t._v("The following table lists all actions and what they to:")]),s("table",[s("thead",[s("tr",[s("th",[t._v("CRUD")]),s("th",[t._v("Vuex Only")]),s("th",[t._v("Persist to GraphQL API")])])]),s("tbody",[s("tr",[s("td",[s("strong",[t._v("R")]),t._v("EAD")]),s("td",[t._v("getters['find'] & getters['findAll']")]),s("td",[t._v("dispatch('fetch')")])]),s("tr",[s("td",[s("strong",[t._v("C")]),t._v("REATE")]),s("td",[t._v("dispatch('create')")]),s("td",[t._v("dispatch('persist')")])]),s("tr",[s("td",[s("strong",[t._v("U")]),t._v("PDATE")]),s("td",[t._v("dispatch('save')")]),s("td",[t._v("dispatch('push')")])]),s("tr",[s("td",[s("strong",[t._v("D")]),t._v("ELETE")]),s("td",[t._v("dispatch('delete')")]),s("td",[t._v("dispatch('destroy')")])])])]),s("p",[t._v("See the example below to get an idea of how this plugin interacts with Vuex-ORM.")]),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Example usage")]),s("p",[t._v("After "),s("a",{attrs:{href:"/guide/setup"}},[t._v("installing")]),t._v(" this plugin you can load data in your component:")]),s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user in users"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":key")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user.name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{user.name}}"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        computed"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            users"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" store"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getters"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'entities/users/all'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),s("span",{attrs:{class:"token function"}},[t._v("created")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'entities/users/fetch'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[t._v("#")]),t._v(" License")]),s("p",[t._v("Vuex ORM Apollo is open-sourced software licensed under the\n"),s("a",{attrs:{href:"https://github.com/phortx/vuex-orm-apollo/blob/master/LICENSE.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT license")]),t._v(".")])])}],!1,null,null,null);a.default=e.exports}}]);