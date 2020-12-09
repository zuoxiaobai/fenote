(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{451:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-变量、作用域与内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-变量、作用域与内存"}},[t._v("#")]),t._v(" 4. 变量、作用域与内存")]),t._v(" "),a("p",[t._v("基本类型与引用类型的值，一个存的是真实的值，一个存的是地址，类似C指针。")]),t._v(" "),a("h2",{attrs:{id:"基本数据类型与引用类型的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型与引用类型的区别"}},[t._v("#")]),t._v(" 基本数据类型与引用类型的区别")]),t._v(" "),a("ul",[a("li",[t._v("只有引用类型值可以动态的添加属性")]),t._v(" "),a("li",[t._v("复制变量值时，基本类型相互不影响，引用类型值复制时，只是复制了值得地址，他们指向同一个堆内存区域，原先的值属性发生改变，新的值也会有对应的改变")]),t._v(" "),a("li",[t._v("做函数参数时，引用类型的变量有可能改变值本身，基本类型不会")]),t._v(" "),a("li",[t._v("基本数据类型保存在栈内存里，引用值是对象，存储在堆内存上。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里的obj是个局部变量，存的值指向堆内存对应的区域")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zuo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改的堆上的内容, 修改的值会影响到person")]),t._v("\n  obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改变了obj这个局部变量，指向另一个对象")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里修改的值不会影响到person")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "zuo"')]),t._v("\n")])])]),a("h2",{attrs:{id:"检测引用类型值的具体类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检测引用类型值的具体类型"}},[t._v("#")]),t._v(" 检测引用类型值的具体类型")]),t._v(" "),a("p",[t._v("基本类型用 "),a("strong",[t._v("typeof")]),t._v(" 就可以，引用类型用"),a("strong",[t._v("typeof")]),t._v("都是"),a("strong",[t._v("object")]),t._v("，还有一些引用类型是基于最基础的object的。如Array, Date或自定义对象。可以使用 "),a("strong",[t._v("instanceof")]),t._v(" 来判断这些类型的值是否属于某个引用类型")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量person是Object吗, 如果是返回true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colors "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量colors是Arrary吗")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JS里面所有引用类型的值都是Object的实例，任何引用类型 instanceof Object 都是true")]),t._v("\n")])])]),a("p",[t._v("在判断数据类型时，基本数据类型使用 "),a("code",[t._v("typeof")]),t._v("，引用类型使用 "),a("code",[t._v("instanceof")])]),t._v(" "),a("h2",{attrs:{id:"执行上下文和作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文和作用域"}},[t._v("#")]),t._v(" 执行上下文和作用域")]),t._v(" "),a("p",[t._v("执行上下文（execution context, 之前为"),a("code",[t._v("执行环境")]),t._v("、JS高程4将翻译改为 "),a("code",[t._v("执行上下文")]),t._v("，简称 "),a("code",[t._v("上下文")]),t._v("，看个人理解，选择自己比较好理解的一个翻译即可）定义了变量或函数有权访问的数据，决定了它们各自的行为。每一个执行上下文都有一个关联的"),a("strong",[t._v("变量对象")]),t._v("（variable object），用来存储该环境中定义的所有变量和函数")]),t._v(" "),a("ul",[a("li",[t._v("全局执环境是最外层的一个执行环境。根据宿主环境不同，表示执行环境的对象也不一样，web里，全局执行环境为Window对象，所有的全局变量和函数都是作为window对象的属性和方法创建的。全局执行环境直到浏览器关闭才会被销毁。")]),t._v(" "),a("li",[t._v("非全局执行环境（函数）在执行结束后销毁，保存在其中的变量和函数定义也随之销毁")]),t._v(" "),a("li",[t._v("每个函数都有自己的执行环境。当进入一个函数执行时，函数的环境会被push到一个环境栈中，执行完成后再pop函数的环境，返回原来的执行环境。")]),t._v(" "),a("li",[t._v("代码在一个环境（上下文）中执行时。会创建变量对象的"),a("strong",[t._v("作用域链")]),t._v("（scope chain），保证对执行环境有权访问的所有变量和函数的有序访问。作用域链的前端始终是当前执行代码所在环境的变量对象。（如果这个环境是函数，最开始时变量对象只有一个arguments对象），作用域的下一个变量对象来自包含(外部)环境，一直延续到全局执行环境。全局执行环境的变量对象始终是作用域链的最后一个对象。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" anotherColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapColors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tempColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" anotherColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    anotherColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tempColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// swapColors()局部执行环境，可访问 tempColor、anotherColor、color")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// changeColor() 局部执行环境，可以访问 antherColor、color")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapColors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行环境，只能访问 color")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上面的例子中，内部的环境可以通过作用域链访问所有的外部环境，外部环境不能访问内部环境的变量。")]),t._v(" "),a("ul",[a("li",[t._v("函数swapColors()的作用域链包含三个变量对象：他自己的变量对象(其中定义着arguments对象)，changeCOlor()的变量对象，全局执行环境的变量对象")]),t._v(" "),a("li",[t._v("函数changeColor()的作用域链包含两个变量对象：他自己的变量对象(其中定义着arguments对象)，全局执行环境的变量对象")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/js/4_0_%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE.png",alt:"4_0_作用域链.png"}})]),t._v(" "),a("h3",{attrs:{id:"延长作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延长作用域链"}},[t._v("#")]),t._v(" 延长作用域链")]),t._v(" "),a("p",[t._v("当执行环境下列任何一个语句时，作用域链就会得到加长")]),t._v(" "),a("ul",[a("li",[t._v("try-catch语句的catch块 （会创建一个新的变量对象，包含错误对象的声明）")]),t._v(" "),a("li",[t._v("with语句")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" qs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?debug=true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会将指定的对象location添加到作用域链前端，就可以直接访问location.href属性")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" qs\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" url\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"var-没有块级作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-没有块级作用域"}},[t._v("#")]),t._v(" var 没有块级作用域")]),t._v(" "),a("p",[t._v("除函数外，有{}封闭的代码块没有自己的作用域。")]),t._v(" "),a("ul",[a("li",[t._v("函数内容用var定义的，在函数执行完毕后，会直接销毁，如果函数内容使用了未定义的变量，会直接被添加到全局环境中。")]),t._v(" "),a("li",[t._v("函数中访问一个变量的值，会优先从当前作用域去找，然后会一级一级向全局作用域链查找，直到找到为止。找到了就会停止，直接使用该值。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例1：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "blue"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例2：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n")])])]),a("h3",{attrs:{id:"let、const-块级作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let、const-块级作用域"}},[t._v("#")]),t._v(" let、const 块级作用域")]),t._v(" "),a("p",[t._v("第四版新增内容，使用 let、const 声明的变量，他们的作用域是块级的（"),a("code",[t._v("{}括起来的部分")]),t._v("）。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught ReferenceError: color is not defined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用错误，color 未定义")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError: i is not defined")]),t._v("\n")])])]),a("p",[t._v("const 声明变量的同时必须初始化一个值，不然就无法修改了。其他和 let 基本一致。更多")]),t._v(" "),a("h2",{attrs:{id:"标识符查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标识符查找"}},[t._v("#")]),t._v(" 标识符查找")]),t._v(" "),a("p",[t._v("标识符就是变量名。当出现一个变量名时，需要搜索作用域链，从当前作用域像外层作用域查找，确定标识符表示什么，找到了就结束。没找到就提示未定义。因此理论上访问局部变量的速度比访问全局变量的速度要快。但经过 JS 引擎的优化，这个差异可能就微不足道了。")]),t._v(" "),a("h2",{attrs:{id:"垃圾收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集"}},[t._v("#")]),t._v(" 垃圾收集")]),t._v(" "),a("p",[t._v("JS是一门具有自动垃圾收集机制的编程语言，开发人员不必关心内存分配和回收问题。")]),t._v(" "),a("ul",[a("li",[t._v("JS中最常用的垃圾收集方式是"),a("strong",[t._v("标记清除")]),t._v("(mark-and-sweep)，这种算法的思想是给当前不使用的值加上标记，然后再回收其内存。")]),t._v(" "),a("li",[t._v('当进入执行环境时，当前环境定义的变量函数都会标记为"进入环境"，当前的执行环境结束后，再标记为"离开环境"，**离开作用域的值被标记为可以回收，然后在垃圾回收期间被删除。')]),t._v(" "),a("li",[t._v("另一种不太常见的垃圾收集策略是"),a("strong",[t._v("引用计数")]),t._v("(reference counting)，这种算法的思想是跟踪记录所有值被引用的次数。次数为0时，回收。在循环引用时会有问题，导致内存无法回收造成内存泄漏。")]),t._v(" "),a("li",[a("strong",[t._v("解除变量的引用，有助于消除循环引用、内存回收。为确保有效的回收内存，应及时解除不再使用的全局对象、全局对象属性等变量的引用")])])]),t._v(" "),a("h3",{attrs:{id:"内存管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[t._v("#")]),t._v(" 内存管理")]),t._v(" "),a("p",[t._v("虽然JS自带标记清除的垃圾回收机制，我们一般不需要管理内存管理。但需要注意：分片给浏览器的内存通常比分配给桌面软件的要少很多，分配给移动端浏览器的就更少了。这更多是出于安全考虑。将内存占用保持在一个较小的值，可以让页面性能能好。")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("解除引用")]),t._v("，解除引用并不会自动导致相关内存被回收，它会在下次垃圾回收时被回收。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解除 obj 对值得引用")]),t._v("\nobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("下面是第四版新增的内容。通过 const 和 let 声明提升性能、隐藏类和删除操作、内存泄漏、静态分片与对象池。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[a("strong",[t._v("通过 const 和 let 声明提升性能")]),t._v("。相比 var 的非块级作用域，ES6新增的 let、const 拥有块级作用域，不仅有助于改善代码风格，还有利于改进垃圾回收的过程。可能会更早的让垃圾回收程序介入，尽早回收内存。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("V8隐藏类: 避免动态新增或删除类实例属性")])])])]),t._v(" "),a("p",[t._v("V8引擎在解释执行JS代码时，会利用 "),a("code",[t._v("隐藏类")]),t._v("，如果代码非常注重性能，这一点对你可能很重要。")]),t._v(" "),a("p",[t._v("什么是隐藏类？在下面的例子中。V8会在后台配置，两个 Article 的类实例 a1、a2 会共享相同的隐藏类。因为这两个实例共享同一个构造函数和原型。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Article")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Some Title'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Article")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Article")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("假设之后又加入了下面的代码，那么两个 Article 实例就会对应两个不同的隐藏类。根据这种操作的频率和隐藏内的大小，可能会对内存有明显影响。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("a2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("author "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),t._v("\n")])])]),a("p",[a("strong",[t._v("解决方法是：避免动态新增或删除实例的属性，如果要新增属性，最好在定义的时候就声明，如果要删除实例属性，最好将实例属性设置为 null")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("strong",[t._v("内存泄漏")])])]),t._v(" "),a("p",[t._v("一般主要发生在下面两种情况:")]),t._v(" "),a("ul",[a("li",[t._v("未定义就直接使用的变量被提升到 window 全局，导致函数结束内存没回收")]),t._v(" "),a("li",[t._v("闭包的情况，注意闭包引用的内容不要过大。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 未定义变量就使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 闭包，定时器内部引用外部变量，定时器不结束，内存不会回收")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 闭包，函数使用了除自身作用域外部的变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("outer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("假设 name 的内容很大，不止是一个小字符串，那可能就是大问题了。")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("strong",[t._v("静态分配与对象池")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("静态分配是一种极端的形式，如果应用程序不是被垃圾回收严重的拖了后腿，就不需要使用。大多数情况，这都属于过早优化，因此不用考虑")])]),t._v(" "),a("p",[t._v("为了提升 JS 性能，最后要考虑的一点就是压榨浏览器了。核心是 "),a("strong",[t._v("减少不必要的垃圾回收")]),t._v("，合理的使用分配的内存，避免多余的垃圾回收，就可以保住因释放内存而损失的性能。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面的例子中，每次调用这个函数，都会在堆上面创建一个新的对象，然后修改它。再返回给调用者。如果这个对象的生命周期很短，很快成为可以被回收的值。当这个方法被频繁使用时，会使浏览器更频繁的安排垃圾回收。")]),t._v(" "),a("p",[t._v("解决方法是 不要动态创建对象，使用一个已有的对象即可，怎么让数据不乱、且尽少触发回收呢？可以使用对象池，用来管理 res 实例。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("对象池逻辑：")]),t._v(" "),a("ul",[a("li",[t._v("先分配多个可回收的对象实例，比如 res1、res2、res3。")]),t._v(" "),a("li",[t._v("调用 add 方法需要使用时，就从对象池里取，如果没有就新增 res4，再使用，所以需要合理的分配对象池实例个数。")]),t._v(" "),a("li",[t._v("如果用完了 res1，通知对象池已释放，这样可以分配给下次调用 add 时使用了。")])]),t._v(" "),a("p",[t._v("感觉逻辑就比较复杂了，主要是一种思维方法，绝大多数场景都没必要使用，属于过早优化。")])])}),[],!1,null,null,null);s.default=e.exports}}]);