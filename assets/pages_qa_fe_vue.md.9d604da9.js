import{_ as e,c as t,o as a,Q as o}from"./chunks/framework.8adc4ca2.js";const r="/assets/80b653050433436da876459a26ab5a65tplv-k3u1fbpfcp-zoom-in-crop-mark4536000.61d951f6.webp",v=JSON.parse('{"title":"vue","description":"","frontmatter":{"title":"vue","order":5},"headers":[],"relativePath":"pages/qa/fe/vue.md","lastUpdated":1682310629000}'),i={name:"pages/qa/fe/vue.md"},l=o('<h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h1><h2 id="高频" tabindex="-1">高频 <a class="header-anchor" href="#高频" aria-label="Permalink to &quot;高频&quot;">​</a></h2><h3 id="组件间通讯方式" tabindex="-1">组件间通讯方式 <a class="header-anchor" href="#组件间通讯方式" aria-label="Permalink to &quot;组件间通讯方式&quot;">​</a></h3><p>思路</p><ol><li><p>总述知道的所有方式</p></li><li><p>按组件关系阐述使用场景</p></li></ol><details class="details-block"><summary>答案</summary> 组件间通讯分类 <ul><li>父子组件</li><li>兄弟组件</li><li>祖孙组件</li><li>非关系组件</li></ul><p>常见通讯方式</p><ol><li><code>props</code> 传递 - 父子</li><li><code>$emits</code> 触发 - 子父</li><li><code>ref</code> - 父子</li><li><code>eventBus</code> - 兄弟</li><li><code>$parent</code> 和 <code>$root</code> - 兄弟</li><li><code>$attrs</code> 与 <code>$listeners</code> - 祖先传给子孙</li><li><code>provide</code> 和 <code>inject</code> - 祖先传给子孙</li><li><code>vuex</code> - 任意组件传值</li></ol><blockquote><p>$parent 和 $root:通过共同 $parent 或 $root</p></blockquote></details><h3 id="vue-生命周期及每个阶段做的事" tabindex="-1">Vue 生命周期及每个阶段做的事 <a class="header-anchor" href="#vue-生命周期及每个阶段做的事" aria-label="Permalink to &quot;Vue 生命周期及每个阶段做的事&quot;">​</a></h3><p>思路</p><ol><li>给出概念</li><li>列举生命周期各阶段</li><li>阐述整体流程</li><li>结合实践</li><li>扩展：vue3 变化</li></ol><details class="details-block"><summary>答案</summary><ol><li><p>每个 Vue 组件实例被创建后都会经过一系列初始化步骤，比如，<strong>数据观测，模板编译，挂载实例到 dom 上，以及数据变化时更新 dom</strong>。这个过程会运行叫做生命周期钩子的函数，以便开发者在特定的阶段做特定的事情。</p></li><li><p>生命周期总共可以分为 8 个阶段：<strong>创建前后, 载入前后, 更新前后, 销毁前后</strong>。</p></li><li><p>具体描述</p></li></ol><table><thead><tr><th>生命周期 v2</th><th>生命周期 v3</th><th>描述</th></tr></thead><tbody><tr><td>beforeCreate</td><td>-</td><td>在实例初始化之后**，数据观测 (data observer) 和 event/watcher 事件配置之前**被调用。</td></tr><tr><td>created</td><td>-</td><td>实例<strong>创建完成后</strong>被立即调用。</td></tr><tr><td>beforeMount</td><td>-</td><td>挂载开始之前被调用，相关的 <strong>render 函数首次被调用</strong>。</td></tr><tr><td>mounted</td><td>-</td><td>挂载完成后被调用，这时<strong>组件已经被挂载到了 DOM 上</strong>。</td></tr><tr><td>beforeUpdate</td><td>-</td><td>数据更新时调用，发生在<strong>虚拟 DOM 重新渲染和打补丁之前</strong>。</td></tr><tr><td>updated</td><td>-</td><td>数据更新之后调用，发生<strong>在虚拟 DOM 重新渲染和打补丁之后</strong>。</td></tr><tr><td>beforeDestroy</td><td><strong>beforeUnmount</strong></td><td>组件实例销毁之前</td></tr><tr><td>destroyed</td><td><strong>unmounted</strong></td><td>组件实例销毁之后</td></tr><tr><td>activated</td><td>-</td><td>keep-alive 缓存的组件激活时</td></tr><tr><td>deactivated</td><td>-</td><td>keep-alive 缓存的组件停用时调用</td></tr><tr><td>errorCaptured</td><td>-</td><td>捕获一个来自子孙组件的错误时被调用</td></tr><tr><td>-</td><td><strong>renderTracked</strong></td><td>调试钩子，响应式依赖被收集时调用</td></tr><tr><td>-</td><td><strong>renderTriggered</strong></td><td>调试钩子，响应式依赖被触发时调用</td></tr><tr><td>-</td><td><strong>serverPrefetch</strong></td><td>ssr only，组件实例在服务器上被渲染前调用</td></tr></tbody></table><p>vue3 差异详解：</p><ol><li><code>beforeDestroy -&gt; beforeUnmount</code> , <code>Destoryed -&gt; Unmounted</code></li><li>新增了三个用于调试和服务端渲染场景 （<code>renderTracked、renderTriggered、serverPrefetch</code>）</li><li>composition 下新增 setup 函数在 <code>beforeCreate</code> 和 <code>created</code> 之前执行。<code>setupStatefulComponent</code>进行 setup 函数调用，之后在 <code>finishComponentSetup</code> 中 <code>applyOptions</code>中进行 <code>beforeCreate</code> 和 <code>created</code> 钩子函数调用</li></ol><p>相关代码：</p><p><a href="https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/componentOptions.ts" target="_blank" rel="noreferrer">setupStatefulComponent</a></p><p><a href="https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/componentOptions.ts#L610" target="_blank" rel="noreferrer">applyOptions</a></p></details><h3 id="能说一说双向绑定使用和原理吗" tabindex="-1">能说一说双向绑定使用和原理吗？ <a class="header-anchor" href="#能说一说双向绑定使用和原理吗" aria-label="Permalink to &quot;能说一说双向绑定使用和原理吗？&quot;">​</a></h3><p>思路：</p><ol><li>双向绑定是什么</li><li>双向绑定如何实现</li><li>vue2 和 vue3 差异</li></ol><details class="details-block"><summary>答案</summary><p><strong>双向绑定</strong>（Two-way Binding）是指<strong>数据模型（Model）和视图（View）之间的自动同步机制</strong>，即数据变化视图更新，反之，视图变化数据也更新</p><p>Vue 数据双向绑定原理是通过 <strong>数据劫持</strong> + <strong>发布订阅模式</strong> 的方式来实现。</p><p>发布/订阅模式：主要<strong>负责维护订阅者列表和通知订阅者更新</strong></p><p>数据劫持：主要用于<strong>监听数据变化并触发通知更新</strong>的机制</p><p><strong><code>vue2</code> 中表现</strong></p><p><strong>数据劫持</strong> ：使用 <code>Object.defineProperty()</code> 方法，将每个属性转换为访问器属性，并重写其 getter 和 setter 方法。</p><p><strong><code>vue3</code> 中表现</strong></p><p><strong>数据劫持</strong>：使用 <code>Proxy</code> 对象实现数据劫持。可以监听整个对象而不仅仅是属性，可以监听数组的变化，可以使用 Reflect 对象进行反射操作等等。</p><p><strong>发布订阅模式</strong>：使用了 <code>ReactiveEffect</code> 类来实现响应式数据的管理，支持更加灵活和高效的副作用管理。在 <code>ReactiveEffect</code> 中，每个副作用函数都可以<strong>通过 <code>track</code> 方法来关联一个响应式对象的属性，并将自己添加到该属性的依赖列表中</strong>。当<strong>属性发生变化时</strong>，<code>ReactiveEffect</code> 对象会<strong>自动触发</strong>所有与该属性关联的副作用函数，并执行它们的操作。</p><p>相关代码：</p><p><a href="https://github1s.com/vuejs/vue/blob/HEAD/src/core/observer/dep.ts#L31" target="_blank" rel="noreferrer">Dep 对象</a></p><p><a href="https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/effect.ts#L53" target="_blank" rel="noreferrer">ReactiveEffect 对象</a></p></details><h3 id="_08-vue-响应式的理解" tabindex="-1">08-vue 响应式的理解 <a class="header-anchor" href="#_08-vue-响应式的理解" aria-label="Permalink to &quot;08-vue 响应式的理解&quot;">​</a></h3><p><a href="https://juejin.cn/post/7097067108663558151#heading-37" target="_blank" rel="noreferrer">https://juejin.cn/post/7097067108663558151#heading-37</a></p><p>思路：</p><ol><li>响应式是什么</li><li>响应式如何实现</li><li>vue2 和 vue3 有什么差异</li></ol><details class="details-block"><summary>答案</summary><p>响应式指的是当 Vue 中的<strong>数据发生变化时，页面上相应的内容会自动更新</strong>，从而实现了数据与视图的同步。</p><p>响应式实现：通过<strong>数据劫持</strong>来完成的。当一个 Vue 实例创建时，Vue 会<strong>遍历 data 选项中的所有属性，使用 Object.defineProperty 把这些属性全部转为 getter/setter，从而实现在属性被访问或修改时拦截并通知 Vue</strong>。</p><p>当页面上某个<strong>数据被修改</strong>时，Vue 会通过<strong>依赖追踪</strong>（<code>Dependency Tracking</code>）的方式<strong>自动追踪这个数据的依赖关系</strong>，把<strong>依赖这个数据的所有组件全部记录下来</strong>。</p><p>当这个数据发生变化时，Vue 会<strong>遍历这个数据的依赖关系</strong>，重新计算所有依赖这个数据的组件，最终把这些组件全部更新。</p><p>vue2</p><p>数据响应式会根据数据类型来做不同处理，<strong>对象</strong>则采用<code>Object.defineProperty()</code>的方式定义数据拦截；<strong>数组</strong>则通<strong>过覆盖数组对象原型的7个变更方法</strong>。</p><p>缺点：</p><ol><li>对象层级过深，初始化时的<strong>递归遍历会造成性能损失</strong>；</li><li><strong>新增或删除</strong>属性无法处理，需要使用<code>Vue.set/delete</code></li><li><code>Map、Set</code>这些数据结构不支持等问题</li></ol><p>vue3</p><p>利用ES6的Proxy代理要响应化的数据，初始化性能和内存消耗都得到了大幅改善。响应化实现代码抽取为独立的reactivity包</p></details><h3 id="_09-虚拟-dom-的理解" tabindex="-1">09-虚拟 DOM 的理解？ <a class="header-anchor" href="#_09-虚拟-dom-的理解" aria-label="Permalink to &quot;09-虚拟 DOM 的理解？&quot;">​</a></h3><p>思路</p><ol><li>vdom是什么</li><li>引入vdom的好处</li><li>vdom如何生成，又如何成为dom</li><li>在后续的diff中的作用</li></ol><details class="details-block"><summary>答案</summary><p>虚拟dom（虚拟dom对象），是一个 JavaScript 对象，通过不同的属性描述视图对象。</p><p>引入<strong>vdom好处</strong>：</p><p>将真实元素节点抽象成 VNode，有效<strong>减少直接操作 <code>dom</code> 次数</strong>，从而提高程序性能</p><ol><li>操作 dom 是有限制。一个真实元素上有许多的内容，如果直接对其进行 diff 操作，会去额外 diff 一些没有必要的内容。进行 clone 那么需要将其全部内容进行复制。到 <code>js</code> 对象上，那么就会变得简单了。</li><li>操作 dom 是比较昂贵的操作。<strong>频繁的<code>dom</code>操作容易引起页面的重绘和回流</strong>，但是通过抽象 VNode 进行中间处理，可以有效减少直接操作dom的次数，从而减少页面重绘和回流。</li></ol><p>方便实现跨平台</p><ol><li>vnode 可以渲染成不同平台上的对应的内容。比如：渲染在浏览器是 dom 元素节点，渲染在 Native( iOS、Android) 变为对应的控件、可以实现 SSR 、渲染到 WebGL 中等等。</li><li>vue3 中允许开发者基于 VNode 实现自定义渲染器（renderer），以便于针对不同平台进行渲染。</li></ol><p>vdom如何生成？</p><ol><li>编写模板 - <code>template</code></li><li>模板会编译为 <code>render</code> 函数</li><li>挂载（mount）过程中会调用<code>render</code>函数，返回的对象就是 虚拟<code>dom</code>。在后续的patch过程中 vdom 进一步转化为 dom。</li><li>挂载过程结束后，vue程序进入更新流程。如果某些响应式数据发生变化，将会引起组件重新render，此时就会生成新的vdom，和上一次的渲染结果diff就能得到变化的地方，从而转换为最小量的dom操作，高效更新视图。</li></ol><p><img src="'+r+'" alt="1"></p></details><h3 id="patch-过程" tabindex="-1">patch 过程 <a class="header-anchor" href="#patch-过程" aria-label="Permalink to &quot;patch 过程&quot;">​</a></h3><details class="details-block"><summary>答案</summary><p>在 Vue 中，组件渲染的过程可以分为两个阶段：mounting（挂载）和 updating（更新）。其中，挂载阶段是指组件第一次渲染到页面上的过程，更新阶段则是指组件在数据发生变化时重新渲染的过程。</p><p>在更新阶段中，Vue 会调用一个叫做 <code>patch</code> 的方法来比较新旧虚拟节点（Virtual DOM），并将差异应用到真实的 DOM 上，从而实现视图的更新。</p><p>具体来说，<code>patch</code> 方法会接收两个参数：旧的虚拟节点 <code>oldVnode</code> 和新的虚拟节点 <code>vnode</code>。它会通过一系列的判断，比较这两个虚拟节点之间的差异，并将这些差异应用到真实的 DOM 上。</p><p>在 <code>patch</code> 方法内部，会根据虚拟节点的类型执行不同的操作。比如，如果新旧虚拟节点都是文本节点，那么 <code>patch</code> 方法会直接更新文本节点的内容。如果新旧虚拟节点都是普通的 HTML 标签节点，那么 <code>patch</code> 方法会递归比较它们的子节点，并对子节点进行相应的操作（添加、删除、更新等）。如果新旧虚拟节点都是组件节点，那么 <code>patch</code> 方法会执行一系列的生命周期钩子函数，以及更新组件实例的 props 和 data 等属性。</p></details><h3 id="_10-diff-算法" tabindex="-1">10-diff 算法 <a class="header-anchor" href="#_10-diff-算法" aria-label="Permalink to &quot;10-diff 算法&quot;">​</a></h3><p><a href="https://juejin.cn/post/7097067108663558151#heading-47" target="_blank" rel="noreferrer">https://juejin.cn/post/7097067108663558151#heading-47</a></p><ol><li>diff算法是干什么的</li><li>它的必要性</li><li>它何时执行</li><li>具体执行方式</li><li>拔高：说一下vue3中的优化</li></ol><details class="details-block"><summary>答案</summary><p>Vue中的diff算法称为patching算法，它由Snabbdom修改而来，<strong>虚拟DOM要想转化为真实DOM</strong>就需要通过patch方法转换。</p><p>最初Vue1.x视图中每个依赖均有更新函数对应，可以做到精准更新，因此并不需要虚拟DOM和patching算法支持，但是这样粒度过细导致Vue1.x无法承载较大应用；</p><p>Vue 2.x中为了降低<code>Watcher</code>粒度，<strong>每个组件只有一个<code>Watcher</code>与之对应</strong>，此时就需要<strong>引入<code>patching</code>算法才能精确找到发生变化的地方并高效更新</strong>。</p><p><strong><code>diff</code>执行时刻</strong></p><ol><li>组件内响应式数据变更触发实例执行其更新函数时</li><li>更新函数会再次执行render函数获得最新的虚拟DOM</li><li>然后执行patch函数，并传入新旧两次虚拟DOM，通过比对两者找到变化的地方，最后将其转化为对应的DOM操作。</li></ol><p>patch过程是一个递归过程，遵循<strong>深度优先、同层比较</strong>的策略；</p><p>以vue3的patch为例：</p><ul><li>首先判断两个节点<strong>是否为相同同类节点</strong>，不同则删除重新创建 <ul><li>如果双方<strong>都是文本</strong>则更新文本内容</li><li>如果双方<strong>都是元素节点</strong>则递归更新子元素，同时更新元素属性</li></ul></li></ul><p><strong>更新子节点</strong>时又分了几种情况：</p><ul><li>新的子节点是文本，老的子节点是数组则清空，并设置文本；</li><li>新的子节点是文本，老的子节点是文本则直接更新文本；</li><li>新的子节点是数组，老的子节点是文本则清空文本，并创建新子节点数组中的子元素；</li><li>新的子节点是数组，老的子节点也是数组，那么比较两组子节点，更新细节blabla</li></ul><p>vue3中引入的更新策略：编译期优化patchFlags、block等</p></details><h3 id="_11-vue3-新特性" tabindex="-1">11-vue3 新特性 <a class="header-anchor" href="#_11-vue3-新特性" aria-label="Permalink to &quot;11-vue3 新特性&quot;">​</a></h3><p><a href="https://juejin.cn/post/7097067108663558151#heading-52" target="_blank" rel="noreferrer">https://juejin.cn/post/7097067108663558151#heading-52</a></p><details class="details-block"><summary>答案</summary><p>api层面Vue3新特性主要包括：Composition API、SFC Composition API语法糖、Teleport传送门、Fragments 片段、Emits选项、自定义渲染器、SFC CSS变量、Suspense</p><p>另外，Vue3.0在框架层面也有很多亮眼的改进：</p><p>更快</p><ul><li>虚拟DOM重写</li><li>编译器优化：静态提升、patchFlags、block等</li><li>基于Proxy的响应式系统</li></ul><p>更小：更好的摇树优化</p><p>更容易维护：TypeScript + 模块化</p><p>更容易扩展</p><ul><li>独立的响应化模块</li><li>自定义渲染器</li></ul><h3 id="_14-key-作用" tabindex="-1">14-key 作用 <a class="header-anchor" href="#_14-key-作用" aria-label="Permalink to &quot;14-key 作用&quot;">​</a></h3></details><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h3><details class="details-block"><summary>答案</summary><p>key的作用主要是为了更高效的更新虚拟DOM。</p><p>vue在patch过程中<strong>判断两个节点是否是相同节点是key是一个必要条件</strong>，渲染一组列表时，key往往是唯一标识，所以如果不定义key的话，vue只能认为比较的两个节点是同一个，哪怕它们实际上不是，这导致了频繁更新元素，使得整个patch过程比较低效，影响性能。</p><p>实际使用中在渲染一组列表时key必须设置，而且必须是唯一标识，应该避免使用数组索引作为key，这可能导致一些隐蔽的bug；vue中在使用相同标签元素过渡切换时，也会使用key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。</p><p>从源码中可以知道，vue判断两个节点是否相同时主要判断两者的key和元素类型等，因此如果不设置key，它的值就是undefined，则可能永远认为这是两个相同节点，只能去做更新操作，这造成了大量的dom更新操作，明显是不可取的。</p></details><h3 id="_15-nexttick-使用和原理" tabindex="-1">15-nextTick 使用和原理？ <a class="header-anchor" href="#_15-nexttick-使用和原理" aria-label="Permalink to &quot;15-nextTick 使用和原理？&quot;">​</a></h3><p>思路：</p><ol><li>nextTick是做什么的？</li><li>为什么需要它呢？</li><li>开发时何时使用它？抓抓头，想想你在平时开发中使用它的地方</li><li>下面介绍一下如何使用nextTick</li><li>原理解读，结合异步更新和nextTick生效方式，会显得你格外优秀</li></ol><details class="details-block"><summary>答案</summary> 1. nextTick是**等待下一次 DOM 更新刷新的工具方法**。 2. Vue异步更新策略，**如果数据变化，Vue不会立刻更新DOM，而是开启一个队列，把组件更新函数保存在队列中，在同一事件循环中发生的所有数据变更会异步的批量更新**。这会导致对数据的修改不会立刻体现在DOM上，此时如果想要获取更新后的DOM状态，就需要使用nextTick。 3. 开发时，有**两个场景我们会用到`nextTick`** <ul><li>created中想要获取DOM时</li><li>响应式数据变化后获取DOM更新后的状态</li></ul><ol start="4"><li><p>nextTick签名如下：<code>funcion nextTick(callback?: () =&gt; void): Promise&lt;void&gt;</code></p><p>在传入的回调函数中访问最新DOM状态即可，或者我们可以<code>await nextTick()</code>方法返回的Promise之后做这件事。</p></li><li><p>原理：<strong>传入的callback会被添加到队列刷新函数(<code>flushSchedulerQueue</code>)的后面</strong>，等队列内部的更新函数都执行完毕，所有DOM操作也结束了，callback自然能够获取到最新的DOM值。</p></li></ol></details><h3 id="_17-vue-子组件和父组件创建和挂载顺序" tabindex="-1">17-Vue 子组件和父组件创建和挂载顺序 <a class="header-anchor" href="#_17-vue-子组件和父组件创建和挂载顺序" aria-label="Permalink to &quot;17-Vue 子组件和父组件创建和挂载顺序&quot;">​</a></h3><details class="details-block"><summary>答案</summary><p>创建过程自上而下，挂载过程自下而上；即：</p><ul><li>parent created</li><li>child created</li><li>child mounted</li><li>parent mounted</li></ul><p>之所以会这样是因为Vue创建过程是一个递归过程，先创建父组件，有子组件就会创建子组件，因此创建时先有父组件再有子组件；子组件首次创建时会添加mounted钩子到队列，等到patch结束再执行它们，可见子组件的mounted钩子是先进入到队列中的，因此等到patch结束执行这些钩子时也先执行。</p></details><h3 id="_18-怎么缓存当前的组件-缓存后怎么更新" tabindex="-1">18-怎么缓存当前的组件？缓存后怎么更新？ <a class="header-anchor" href="#_18-怎么缓存当前的组件-缓存后怎么更新" aria-label="Permalink to &quot;18-怎么缓存当前的组件？缓存后怎么更新？&quot;">​</a></h3><h3 id="_22-从-template-到-render-处理过程" tabindex="-1">22-从 template 到 render 处理过程 <a class="header-anchor" href="#_22-从-template-到-render-处理过程" aria-label="Permalink to &quot;22-从 template 到 render 处理过程&quot;">​</a></h3><details class="details-block"><summary>答案</summary> Vue中有个独特的编译器模块，称为“compiler”，它的主要作用是将用户编写的template编译为js中可执行的render函数。 <p>之所以需要这个编译过程是为了便于前端程序员能高效的编写视图模板。相比而言，我们还是更愿意用HTML来编写视图，直观且高效。手写render函数不仅效率底下，而且失去了编译期的优化能力。</p><p>在Vue中编译器会先对template进行解析，这一步称为parse，结束之后会得到一个JS对象，我们成为抽象语法树AST，然后是对AST进行深加工的转换过程，这一步成为transform，最后将前面得到的AST生成为JS代码，也就是render函数。</p></details><h3 id="_23-vue-实例挂载的过程中发生了什么" tabindex="-1">23-Vue 实例挂载的过程中发生了什么? <a class="header-anchor" href="#_23-vue-实例挂载的过程中发生了什么" aria-label="Permalink to &quot;23-Vue 实例挂载的过程中发生了什么?&quot;">​</a></h3><details class="details-block"><summary>答案</summary><p>挂载过程指的是app.mount()过程，这个过程中整体上做了两件事：<strong>初始化</strong>和<strong>建立更新机制</strong></p><p>初始化会创建组件实例、初始化组件状态，创建各种响应式数据</p><p>建立更新机制这一步会立即执行一次组件更新函数，这会首次执行组件渲染函数并执行patch将前面获得vnode转换为dom；同时首次执行渲染函数会创建它内部响应式数据之间和组件更新函数之间的依赖关系，这使得以后数据变化时会执行对应的更新函数。</p></details><h3 id="_24-vue-3-的设计目标是什么-做了哪些优化" tabindex="-1">24-Vue 3 的设计目标是什么？做了哪些优化? <a class="header-anchor" href="#_24-vue-3-的设计目标是什么-做了哪些优化" aria-label="Permalink to &quot;24-Vue 3 的设计目标是什么？做了哪些优化?&quot;">​</a></h3><details class="details-block"><summary>答案</summary> Vue3的最大设计目标是替代Vue2（皮一下），为了实现这一点，Vue3在以下几个方面做了很大改进，如：易用性、框架性能、扩展性、可维护性、开发体验等 <p>易用性方面主要是API简化，比如<code>v-model</code>在Vue3中变成了Vue2中<code>v-model</code>和<code>sync</code>修饰符的结合体，用户不用区分两者不同，也不用选择困难。类似的简化还有用于渲染函数内部生成VNode的<code>h(type, props, children)</code>，其中<code>props</code>不用考虑区分属性、特性、事件等，框架替我们判断，易用性大增。</p><p>开发体验方面，新组件<code>Teleport</code>传送门、<code>Fragments</code> 、<code>Suspense</code>等都会简化特定场景的代码编写，<code>SFC Composition API</code>语法糖更是极大提升我们开发体验。</p><p>扩展性方面提升如独立的<code>reactivity</code>模块，<code>custom renderer</code> API等</p><p>可维护性方面主要是<code>Composition API</code>，更容易编写高复用性的业务逻辑。还有对TypeScript支持的提升。</p><p>性能方面的改进也很显著，例如编译期优化、基于<code>Proxy</code>的响应式系统</p><p>。。。</p></details><h3 id="_25-你了解哪些-vue-性能优化方法" tabindex="-1">25-你了解哪些 Vue 性能优化方法？ <a class="header-anchor" href="#_25-你了解哪些-vue-性能优化方法" aria-label="Permalink to &quot;25-你了解哪些 Vue 性能优化方法？&quot;">​</a></h3><p><a href="https://juejin.cn/post/7115055320913117220#heading-8" target="_blank" rel="noreferrer">https://juejin.cn/post/7115055320913117220#heading-8</a></p><h3 id="_26-vue-组件为什么只能有一个根元素" tabindex="-1">26-Vue 组件为什么只能有一个根元素? <a class="header-anchor" href="#_26-vue-组件为什么只能有一个根元素" aria-label="Permalink to &quot;26-Vue 组件为什么只能有一个根元素?&quot;">​</a></h3><p><a href="https://juejin.cn/post/7115055320913117220#heading-12" target="_blank" rel="noreferrer">https://juejin.cn/post/7115055320913117220#heading-12</a></p><h3 id="_35-什么是递归组件-举个例子说明下" tabindex="-1">35-什么是递归组件？举个例子说明下？ <a class="header-anchor" href="#_35-什么是递归组件-举个例子说明下" aria-label="Permalink to &quot;35-什么是递归组件？举个例子说明下？&quot;">​</a></h3><h3 id="_36-异步组件是什么-使用场景有哪些" tabindex="-1">36-异步组件是什么？使用场景有哪些？ <a class="header-anchor" href="#_36-异步组件是什么-使用场景有哪些" aria-label="Permalink to &quot;36-异步组件是什么？使用场景有哪些？&quot;">​</a></h3><p><a href="https://juejin.cn/post/7115055320913117220#heading-71" target="_blank" rel="noreferrer">https://juejin.cn/post/7115055320913117220#heading-71</a></p><h3 id="_40-使用-vue-渲染大量数据时应该怎么优化-说下你的思路" tabindex="-1">40-使用 vue 渲染大量数据时应该怎么优化？说下你的思路！ <a class="header-anchor" href="#_40-使用-vue-渲染大量数据时应该怎么优化-说下你的思路" aria-label="Permalink to &quot;40-使用 vue 渲染大量数据时应该怎么优化？说下你的思路！&quot;">​</a></h3><h3 id="_44-vue3-0-性能提升体现在哪些方面" tabindex="-1">44-Vue3.0 性能提升体现在哪些方面？ <a class="header-anchor" href="#_44-vue3-0-性能提升体现在哪些方面" aria-label="Permalink to &quot;44-Vue3.0 性能提升体现在哪些方面？&quot;">​</a></h3><details class="details-block"><summary>答案</summary> 我分别从代码、编译、打包三方面介绍vue3性能方面的提升 <p>代码层面性能优化主要体现在全新响应式API，基于Proxy实现，初始化时间和内存占用均大幅改进；</p><p>编译层面做了更多编译优化处理，比如静态提升、动态标记、事件缓存，区块等，可以有效跳过大量diff过程；</p><p>打包时更好的支持tree-shaking，因此整体体积更小，加载更快</p></details><h3 id="_45-vue3-0-里为什么要用-proxy-替代-defineproperty" tabindex="-1">45-Vue3.0 里为什么要用 Proxy 替代 defineProperty ？ <a class="header-anchor" href="#_45-vue3-0-里为什么要用-proxy-替代-defineproperty" aria-label="Permalink to &quot;45-Vue3.0 里为什么要用 Proxy 替代 defineProperty ？&quot;">​</a></h3><details class="details-block"><summary>答案</summary><p>JS中做属性拦截常见的方式有三：: <a href="https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FObject%2FdefineProperty" target="_blank" rel="noreferrer">defineProperty</a>，<a href="https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FFunctions%2Fget" target="_blank" rel="noreferrer">getter</a>/<a href="https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FFunctions%2Fset" target="_blank" rel="noreferrer">setters</a> 和<a href="https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FProxy" target="_blank" rel="noreferrer">Proxies</a>.</p><p>Vue2中使用<code>defineProperty</code>的原因是，2013年时只能用这种方式。由于该API存在一些局限性，比如对于数组的拦截有问题，为此vue需要专门为数组响应式做一套实现。另外不能拦截那些新增、删除属性；最后<code>defineProperty</code>方案在初始化时需要深度递归遍历待处理的对象才能对它进行完全拦截，明显增加了初始化的时间。</p><p>以上两点在Proxy出现之后迎刃而解，不仅可以对数组实现拦截，还能对Map、Set实现拦截；另外Proxy的拦截也是懒处理行为，如果用户没有访问嵌套对象，那么也不会实施拦截，这就让初始化的速度和内存占用都改善了。</p><p>当然Proxy是有兼容性问题的，IE完全不支持，所以如果需要IE兼容就不合适</p></details><h3 id="_49-你觉得-vuex-有什么缺点" tabindex="-1">49-你觉得 vuex 有什么缺点？ <a class="header-anchor" href="#_49-你觉得-vuex-有什么缺点" aria-label="Permalink to &quot;49-你觉得 vuex 有什么缺点？&quot;">​</a></h3><h3 id="介绍-render-函数-描述虚拟-dom-到真实-dom-的过程" tabindex="-1">介绍 render 函数，描述虚拟 dom 到真实 dom 的过程 <a class="header-anchor" href="#介绍-render-函数-描述虚拟-dom-到真实-dom-的过程" aria-label="Permalink to &quot;介绍 render 函数，描述虚拟 dom 到真实 dom 的过程&quot;">​</a></h3><h3 id="vue-中如何做-seo-优化" tabindex="-1">vue 中如何做 seo 优化 <a class="header-anchor" href="#vue-中如何做-seo-优化" aria-label="Permalink to &quot;vue 中如何做 seo 优化&quot;">​</a></h3><h3 id="单页应用和多页应用的区别" tabindex="-1">单页应用和多页应用的区别 <a class="header-anchor" href="#单页应用和多页应用的区别" aria-label="Permalink to &quot;单页应用和多页应用的区别&quot;">​</a></h3><h2 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比&quot;">​</a></h2><h3 id="vue2-和-vue3-的区别" tabindex="-1">vue2 和 vue3 的区别 <a class="header-anchor" href="#vue2-和-vue3-的区别" aria-label="Permalink to &quot;vue2 和 vue3 的区别&quot;">​</a></h3><details class="details-block"><summary>答案</summary> **响应性系统**：Vue 3 引入了 `Proxy` 对象作为响应式系统的基础，相较于 Vue 2 中使用的 `Object.defineProperty` 实现，Proxy 具有更好的性能和更丰富的 API。在 Vue 3 中，数据响应式的实现基于 Proxy 对象，可以监听到对象属性的任何变化，包括新增属性和删除属性，相比于 Vue 2 更加灵活。 <p><strong>运行时</strong>：Vue 3 的运行时体积缩小了约 40%。在 Vue 3 中，除了一些核心的 runtime-dom 和 runtime-core 之外，其他功能都可以通过使用 Tree-shaking 技术在打包时自动优化掉，避免了无用代码的加载，提高了性能。</p><p><strong>编译器</strong>：Vue 3 引入了基于模板 AST 的<strong>静态提升</strong>（<code>Static Inlining</code>）和基于标记的<strong>树摇优化</strong>（<code>Mark-Element-Style</code>），这两个优化技术都可以<strong>显著提高模板编译的性能和生成的代码质量</strong>。</p><p>补充：静态提升和树摇优化</p><p><strong>静态提升</strong>：将模板中的静态节点预编译成渲染函数中的常量，避免了重复的计算和创建 VNode 的开销，从而提高了应用的性能。</p><p><strong>树摇优化</strong>：通过分析模板中的元素、指令和样式等信息，判断哪些是无用的，并将其优化掉。</p><p>补充：vue2 无法进行静态提升和树摇优化的原因</p><p>vue2 基于<strong>字符串的模板编译</strong>方式， Vue 3 基于<strong>函数调用的模板编译</strong>方式。</p><p><strong>模板字符串的编译过程在运行时进行，而函数编译可以在编译时完成。</strong></p><p><strong>模板字符串</strong>在编译时会被解析成抽象语法树，然后在运行时根据这个抽象语法树动态生成代码。意味着在每次渲染过程中，都需要对整个模板进行解析，检查哪些部分需要更新，因此无法对模板进行静态优化，因此无法进行静态提升等优化。</p><p><strong>函数编译</strong>在编译时静态分析模板中的静态内容，并将其直接编译为静态的渲染函数。在运行时只需要调用渲染函数即可，避免了每次渲染都需要解析模板的开销。</p><p>同时，在静态分析时，还可以进行树摇优化，去掉不需要的代码，进一步减少代码的大小和运行时的负担。</p></details><h3 id="_02-v-if-和-v-for-哪个优先级更高" tabindex="-1">02-v-if 和 v-for 哪个优先级更高？ <a class="header-anchor" href="#_02-v-if-和-v-for-哪个优先级更高" aria-label="Permalink to &quot;02-v-if 和 v-for 哪个优先级更高？&quot;">​</a></h3><p>思路</p><ol><li>先给出结论</li><li>为什么是这样的，说出细节</li><li>哪些场景可能导致我们这样做，该怎么处理</li><li>总结，拔高</li></ol><h3 id="_16-watch-和-computed-的区别以及选择" tabindex="-1">16-watch 和 computed 的区别以及选择? <a class="header-anchor" href="#_16-watch-和-computed-的区别以及选择" aria-label="Permalink to &quot;16-watch 和 computed 的区别以及选择?&quot;">​</a></h3><p><a href="https://juejin.cn/post/7097067108663558151#heading-75" target="_blank" rel="noreferrer">https://juejin.cn/post/7097067108663558151#heading-75</a></p><h3 id="_29-ref-和-reactive-异同" tabindex="-1">29-ref 和 reactive 异同 <a class="header-anchor" href="#_29-ref-和-reactive-异同" aria-label="Permalink to &quot;29-ref 和 reactive 异同&quot;">​</a></h3><p><a href="https://juejin.cn/post/7115055320913117220#heading-27" target="_blank" rel="noreferrer">https://juejin.cn/post/7115055320913117220#heading-27</a></p><details class="details-block"><summary>答案</summary><p><code>ref</code>接收内部值（inner value）返回响应式<code>Ref</code>对象，<code>reactive</code>返回响应式代理对象</p><p>从定义上看<code>ref</code>通常用于处理单值的响应式，<code>reactive</code>用于处理对象类型的数据响应式</p><p>两者均是用于构造响应式数据，但是<code>ref</code>主要解决原始值的响应式问题</p><p>ref返回的响应式数据在JS中使用需要加上<code>.value</code>才能访问其值，在视图中使用会自动脱ref，不需要<code>.value</code>；ref可以接收对象或数组等非原始值，但内部依然是<code>reactive</code>实现响应式；reactive内部如果接收Ref对象会自动脱ref；使用展开运算符(...)展开reactive返回的响应式对象会使其失去响应性，可以结合toRefs()将值转换为Ref对象之后再展开。</p><p>reactive内部使用Proxy代理传入对象并拦截该对象各种操作（trap），从而实现响应式。ref内部封装一个RefImpl类，并设置get value/set value，拦截用户对值的访问，从而实现响应式。</p></details><h3 id="_30-watch-和-watcheffect-异同" tabindex="-1">30-watch 和 watchEffect 异同 <a class="header-anchor" href="#_30-watch-和-watcheffect-异同" aria-label="Permalink to &quot;30-watch 和 watchEffect 异同&quot;">​</a></h3><p><a href="https://juejin.cn/post/7115055320913117220#heading-32" target="_blank" rel="noreferrer">https://juejin.cn/post/7115055320913117220#heading-32</a></p><h3 id="_31-spa、ssr-的区别是什么" tabindex="-1">31-SPA、SSR 的区别是什么 <a class="header-anchor" href="#_31-spa、ssr-的区别是什么" aria-label="Permalink to &quot;31-SPA、SSR 的区别是什么&quot;">​</a></h3><h3 id="_39-vuex-中-actions-和-mutations-有什么区别" tabindex="-1">39-vuex 中 actions 和 mutations 有什么区别？ <a class="header-anchor" href="#_39-vuex-中-actions-和-mutations-有什么区别" aria-label="Permalink to &quot;39-vuex 中 actions 和 mutations 有什么区别？&quot;">​</a></h3><h3 id="_46-history-模式和-hash-模式有何区别" tabindex="-1">46-History 模式和 Hash 模式有何区别？ <a class="header-anchor" href="#_46-history-模式和-hash-模式有何区别" aria-label="Permalink to &quot;46-History 模式和 Hash 模式有何区别？&quot;">​</a></h3><details class="details-block"><summary>答案</summary><p>hash 路由: <a href="https://example.com/#/user/id" target="_blank" rel="noreferrer">https://example.com/#/user/id</a></p><p>机制：使用哈希字符（#）进行路由切换，实际 URL 并未发送到服务器，不需要在服务器层做处理</p><p>history 路由: <a href="https://example.com/user/id" target="_blank" rel="noreferrer">https://example.com/user/id</a></p><p>问题：应用是一个单页的客户端应用，如果没有适当的服务器配置，用户在浏览器中直接访问 <a href="https://example.com/user/id%EF%BC%8C%E5%B0%B1%E4%BC%9A%E5%BE%97%E5%88%B0%E4%B8%80%E4%B8%AA" target="_blank" rel="noreferrer">https://example.com/user/id，就会得到一个</a> 404 错误。</p><p>解决：如果 URL 不匹配任何静态资源，它应提供与你的应用程序中的 index.html 相同的页面</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location / {</span></span>\n<span class="line"><span style="color:#A6ACCD;">  try_files $uri $uri/ /index.html;</span></span>\n<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></details><h3 id="_50-composition-api-与-options-api-有什么不同" tabindex="-1">50-Composition API 与 Options API 有什么不同 <a class="header-anchor" href="#_50-composition-api-与-options-api-有什么不同" aria-label="Permalink to &quot;50-Composition API 与 Options API 有什么不同&quot;">​</a></h3><details class="details-block"><summary>答案</summary> `Composition API`是一组API，包括：Reactivity API、生命周期钩子、依赖注入，使用户可以通过导入函数方式编写vue组件。而`Options API`则通过声明组件选项的对象形式编写组件。 <p><code>Composition API</code>最主要作用是能够简洁、高效复用逻辑。解决了过去<code>Options API</code>中<code>mixins</code>的各种缺点；另外<code>Composition API</code>具有更加敏捷的代码组织能力，很多用户喜欢<code>Options API</code>，认为所有东西都有固定位置的选项放置代码，但是单个组件增长过大之后这反而成为限制，一个逻辑关注点分散在组件各处，形成代码碎片，维护时需要反复横跳，<code>Composition API</code>则可以将它们有效组织在一起。最后<code>Composition API</code>拥有更好的类型推断，对ts支持更友好，<code>Options API</code>在设计之初并未考虑类型推断因素，虽然官方为此做了很多复杂的类型体操，确保用户可以在使用<code>Options API</code>时获得类型推断，然而还是没办法用在mixins和provide/inject上。</p><p>Vue3首推<code>Composition API</code>，但是这会让我们在代码组织上多花点心思，因此在选择上，如果我们项目属于中低复杂度的场景，<code>Options API</code>仍是一个好选择。对于那些大型，高扩展，强维护的项目上，<code>Composition API</code>会获得更大收益。</p></details><h3 id="sync-和-v-model-区别" tabindex="-1">.sync 和 v-model 区别 <a class="header-anchor" href="#sync-和-v-model-区别" aria-label="Permalink to &quot;.sync 和 v-model 区别&quot;">​</a></h3><h3 id="vue-和-react-区别" tabindex="-1">Vue 和 React 区别 <a class="header-anchor" href="#vue-和-react-区别" aria-label="Permalink to &quot;Vue 和 React 区别&quot;">​</a></h3><p>1、响应式原理不同；</p><p>2、监听数据变化的实现原理不同；</p><p>3、组件写法不同；</p><p>4、Diff算法不同；</p><p>5、核心思想不同；</p><p>6、数据流不同；</p><p>7、组合不同功能的方式不同；</p><p>8、组件通信方法不同；</p><p>9、模板渲染方式不同；</p><p>10、渲染过程不同；</p><p>11、框架本质不同。</p><details class="details-block"><summary>答案</summary><p>1、响应式原理不同</p><p>vue：vue会遍历data数据对象，使用Object.definedProperty()将每个属性都转换为getter和setter，<strong>每个Vue组件实例都有一个对应的watcher实例</strong>，在组件初次渲染的时候会记录组件用到了那些数据，当数据发生改变的时候，会触发setter方法，并通知所有依赖这个数据的watcher实例调用update方法去触发组件的compile渲染方法，进行渲染数据。</p><p>react：React主要是通过<strong>setState()方法来更新状态</strong>，<strong>状态更新之后，组件也会重新渲染</strong>。</p><p>2、监听数据变化的实现原理不同</p><p>vue：Vue<strong>通过 getter/setter以及一些函数的劫持</strong>，能精确知道数据变化。</p><p>react：React默认是<strong>通过比较引用的方式（diff）进行的</strong>，如果不优化可能导致大量不必要的VDOM的重新渲染。为什么React不精确监听数据变化呢？这是因为Vue和React设计理念上的区别，Vue使用的是可变数据，而React更强调数据的不可变。</p><p>3、组件写法不同</p><p>vue：Vue的组件写法是通过<strong>template的单文件</strong>组件格式。</p><p>react：React的组件写法是<strong>JSX+inline style</strong>。</p><p>4、Diff算法不同</p><p>vue和react的diff算法都是进行同层次的比较，主要有以下两点不同：</p><p><strong>vue</strong>对比节点，<strong>如果节点元素类型相同，但是className不同</strong>，认为是不同类型的元素，会进行删除重建，但是<strong>react则会认为是同类型的节点，只会修改节点属性</strong>。</p><p><strong>vue的列表比对采用的是首尾指针法</strong>，而<strong>react采用的是从左到右依次比对的方式</strong>，当一个集合只是把最后一个节点移动到了第一个，react会把前面的节点依次移动，而vue只会把最后一个节点移动到最后一个。</p><p>5、核心思想不同</p><p>vue：Vue的核心思想是尽可能的降低前端开发的门槛，是一个<strong>灵活易用的渐进式双向绑定的MVVM框架</strong>。</p><p>react：React的核心思想是<strong>声明式渲染和组件化、单向数据流</strong>，React既不属于MVC也不属于MVVM架构。</p><p>6、数据流不同</p><p>vue：Vue1.0中可以实现两种双向绑定：父子组件之间，props可以双向绑定；组件与DOM之间可以通过v-model双向绑定。Vue2.x中去掉了第一种，也就是<strong>父子组件之间不能双向绑定了</strong>（但是提供了一个语法糖自动帮你通过事件的方式修改）。</p><p>react：React一直不支持双向绑定，<strong>提倡的是单向数据流</strong>，称之为onChange/setState()模式。不过由于我们一般都会用Vuex以及Redux等单向数据流的状态管理框架。</p><p>7、组合不同功能的方式不同</p><p>vue：Vue<strong>组合不同功能的方式是通过mixin</strong>，Vue中组件是一个被包装的函数，并不简单的就是我们定义组件的时候传入的对象或者函数。比如我们定义的模板怎么被编译的？比如声明的props怎么接收到的？这些都是vue创建组件实例的时候隐式干的事。</p><p>react：React组合不同功能的方式是<strong>通过HOC(高阶组件）</strong>。React最早也是使用mixins的，不过后来他们觉得这种方式对组件侵入太强会导致很多问题，就弃用了mixinx转而使用HoC。高阶组件本质就是高阶函数，React的组件是一个纯粹的函数。</p><p>8、组件通信方法不同</p><p>vue：Vue中有三种方式可以实现组件通信：</p><p>父组件<strong>通过props</strong>向子组件传递数据或者回调，虽然可以传递回调，但是我们一般只传数据；</p><p>子组件<strong>通过事件</strong>向父组件发送消息；</p><p>通过V2.2.0中<strong>新增的provide/inject</strong>来实现父组件向子组件注入数据，可以跨越多个层级。</p><p>react：React中也有对应的三种方式：父组件通过props可以向子组件传递数据或者回调；可以通过 context 进行跨层级的通信，这其实和 provide/inject 起到的作用差不多。</p><p><strong>React 本身并不支持自定义事件</strong>，而Vue中子组件向父组件传递消息有两种方式：事件和回调函数，但Vue更倾向于使用事件。在React中我们都是<strong>使用回调函数</strong>的，这可能是他们二者最大的区别。</p><p>9、模板渲染方式不同</p><p>vue：Vue是在和组件JS代码分离的单独的模板中，通过指令来实现的，比如条件语句就需要 v-if 来实现对这一点，这样的做法显得有些独特，会把HTML弄得很乱</p><p>react：React是在组件JS代码中，通过原生JS实现模板中的常见语法，比如插值，条件，循环等，都是通过JS语法实现的，更加纯粹更加原生</p><p>10、渲染过程不同</p><p>vue：Vue可以更快地计算出Virtual DOM的差异，这是由于它在渲染过程中，<strong>会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树</strong>。</p><p>react：React<strong>在应用的状态被改变时，全部子组件都会重新渲染</strong>。通过shouldComponentUpdate这个生命周期方法可以进行控制，但Vue将此视为默认的优化。</p><p>11、框架本质不同</p><p>vue：Vue本质是MVVM框架，由MVC发展而来；</p><p>react：React是前端组件化框架，由后端组件化发展而来。</p></details><h3 id="vuex-和-pinia-区别" tabindex="-1">vuex 和 pinia 区别 <a class="header-anchor" href="#vuex-和-pinia-区别" aria-label="Permalink to &quot;vuex 和 pinia 区别&quot;">​</a></h3><h3 id="react-diff-和-vue-diff-区别" tabindex="-1">react diff 和 vue diff 区别 <a class="header-anchor" href="#react-diff-和-vue-diff-区别" aria-label="Permalink to &quot;react diff 和 vue diff 区别&quot;">​</a></h3><h3 id="mvc-和-mvvc-区别" tabindex="-1">MVC 和 MVVC 区别 <a class="header-anchor" href="#mvc-和-mvvc-区别" aria-label="Permalink to &quot;MVC 和 MVVC 区别&quot;">​</a></h3><p>MVVC和MVC都是设计模式，用于组织和管理应用程序的代码。它们的主要区别在于它们的结构和组织方式。</p><details class="details-block"><summary>区别</summary><p>MVC代表Model-View-Controller（模型-视图-控制器）。在MVC中，应用程序被分成三个部分：</p><ol><li>模型(Model)：它表示应用程序中使用的数据和业务逻辑。</li><li>视图(View)：它负责显示数据给用户，通常是通过用户界面实现。</li><li>控制器(Controller)：它接受用户输入并与模型和视图交互，以完成用户请求。</li></ol><p>MVVC代表Model-View-ViewModel（模型-视图-视图模型）。在MVVC中，应用程序被分成三个部分：</p><ol><li>模型(Model)：与MVC相同，表示应用程序中使用的数据和业务逻辑。</li><li>视图(View)：与MVC相同，负责显示数据给用户。</li><li>视图模型(ViewModel)：它是连接视图和模型的组件，它从模型中获取数据，并将其转换为视图可以使用的格式。它还接受用户输入并将其传递给模型。</li></ol><p>因此，MVVC与MVC的不同之处在于，它使用了一个额外的组件——视图模型——来协调视图和模型之间的交互，使得视图和模型之间的解耦更加明显。</p></details><details class="details-block"><summary>优缺点</summary><p>MVVC的优点包括：</p><ol><li>更好的可测试性：由于视图模型中的代码与视图和模型的代码分离，因此更容易对其进行单元测试。</li><li>更好的可维护性：由于视图模型可以充当视图和模型之间的中间人，因此当应用程序需要更改时，它可以更轻松地进行更改而不会影响其他部分。</li><li>更好的可扩展性：由于视图模型可以根据需要添加或删除，因此更容易扩展应用程序。</li></ol><p>MVC的优点包括：</p><ol><li>更简单的结构：MVC的结构相对简单，因此更容易理解和实现。</li><li>更广泛的支持：MVC是一种常见的设计模式，因此有许多支持MVC的开发工具和框架。</li></ol><p>MVVC的缺点包括：</p><ol><li>更复杂的结构：由于MVVC引入了一个新的组件——视图模型，因此它的结构比MVC更复杂。</li><li>更高的学习曲线：由于MVVC的结构和组件比MVC更复杂，因此开发人员需要更多的时间和精力来学习和理解MVVC。</li></ol><p>MVC的缺点包括：</p><ol><li>更难测试：由于视图和控制器之间的紧密耦合，因此更难对其进行单元测试。</li><li>更难维护：当应用程序需要更改时，可能需要更改多个MVC组件，这可能会导致代码变得难以维护。</li><li>更难扩展：由于MVC中的组件相对固定，因此更难扩展应用程序。</li></ol></details><h3 id="常见的双向绑定方法以及优缺点" tabindex="-1">常见的双向绑定方法以及优缺点 <a class="header-anchor" href="#常见的双向绑定方法以及优缺点" aria-label="Permalink to &quot;常见的双向绑定方法以及优缺点&quot;">​</a></h3><details class="details-block"><summary>答案</summary><p><strong>发布/订阅模式</strong>：将数据模型和视图<strong>通过发布/订阅模式进行关联，在数据模型发生变化时，自动更新视图</strong>。常见的库有 <code>Backbone.js、Knockout.js</code> 等。</p><p>优点：实现模块化和解耦，减少代码的耦合性，提高应用的可维护性。</p><p>缺点：需要在发布者和订阅者之间建立关系，增加代码的复杂度。</p><p><strong>脏值检查</strong>：在 <code>AngularJS</code> 中采用的方法，通过<strong>周期性的检查视图和数据模型之间的差异</strong>，来判断是否需要更新视图。在每个周期中，检查所有的数据模型，如果存在差异则更新视图。</p><p>优点：实现方式相对简单，不需要引入额外的框架或库。只有数据模型发生变化时才会进行视图更新，降低了性能开销。能够实现数据和视图的实时同步更新。</p><p>缺点：监听整个数据模型，数据模型越大，性能越低。并且每次数据变化都需要进行一次完整的遍历，降低了性能。</p><p><strong>数据劫持</strong>：通过<strong>重写属性的 setter 和 getter 方法，实现对数据的监听和响应</strong>，从而实现双向绑定。常见的库有 <code>Vue.js、React.js</code> 等。</p><p>优点：实现高效的双向绑定，只需要在数据发生变化时更新视图。</p><p>缺点：实现起来较为复杂。</p><p><strong>模板引擎</strong>：使用模板引擎<strong>将数据绑定到视图中，在视图中进行编辑时，再将变化的数据传递回到数据模型中</strong>。常见的模板引擎有 <code>Mustache、Handlebars、EJS</code> 等。</p><p>优点：模板引擎简单易用。</p><p>缺点：当应用变得复杂时，模板会变得越来越复杂，难以维护。</p></details><h2 id="低频" tabindex="-1">低频 <a class="header-anchor" href="#低频" aria-label="Permalink to &quot;低频&quot;">​</a></h2><h3 id="_05-vue-中如何扩展一个组件" tabindex="-1">05-Vue 中如何扩展一个组件 <a class="header-anchor" href="#_05-vue-中如何扩展一个组件" aria-label="Permalink to &quot;05-Vue 中如何扩展一个组件&quot;">​</a></h3><p>思路：</p><ol><li>按照逻辑扩展和内容扩展</li></ol><ul><li>逻辑扩展有：mixins、extends、composition api；</li><li>内容扩展有 slots；</li></ul><ol start="2"><li><p>分别说使用方法、场景差异和问题。</p></li><li><p>作为扩展，还可以说说 vue3 中新引入的 composition api 带来的变化</p></li></ol><h3 id="_06-子组件能否直接改变父组件的数据" tabindex="-1">06-子组件能否直接改变父组件的数据？ <a class="header-anchor" href="#_06-子组件能否直接改变父组件的数据" aria-label="Permalink to &quot;06-子组件能否直接改变父组件的数据？&quot;">​</a></h3><h3 id="_07-vue-权限管理" tabindex="-1">07-Vue 权限管理 <a class="header-anchor" href="#_07-vue-权限管理" aria-label="Permalink to &quot;07-Vue 权限管理&quot;">​</a></h3><h3 id="_12-怎么定义动态路由-怎么获取传过来的动态参数" tabindex="-1">12-怎么定义动态路由？怎么获取传过来的动态参数？ <a class="header-anchor" href="#_12-怎么定义动态路由-怎么获取传过来的动态参数" aria-label="Permalink to &quot;12-怎么定义动态路由？怎么获取传过来的动态参数？&quot;">​</a></h3><h3 id="_13-如果让你从零开始写一个-vue-路由" tabindex="-1">13-如果让你从零开始写一个 vue 路由？ <a class="header-anchor" href="#_13-如果让你从零开始写一个-vue-路由" aria-label="Permalink to &quot;13-如果让你从零开始写一个 vue 路由？&quot;">​</a></h3><h3 id="_19-构架一个-vue-项目流程" tabindex="-1">19-构架一个 vue 项目流程 <a class="header-anchor" href="#_19-构架一个-vue-项目流程" aria-label="Permalink to &quot;19-构架一个 vue 项目流程&quot;">​</a></h3><h3 id="_20-实际工作中-总结的-vue-最佳实践有哪些" tabindex="-1">20-实际工作中，总结的 vue 最佳实践有哪些？ <a class="header-anchor" href="#_20-实际工作中-总结的-vue-最佳实践有哪些" aria-label="Permalink to &quot;20-实际工作中，总结的 vue 最佳实践有哪些？&quot;">​</a></h3><h3 id="_21-简单说一说你对-vuex-理解" tabindex="-1">21-简单说一说你对 vuex 理解？ <a class="header-anchor" href="#_21-简单说一说你对-vuex-理解" aria-label="Permalink to &quot;21-简单说一说你对 vuex 理解？&quot;">​</a></h3><h3 id="_27-使用过-vuex-的-module-吗" tabindex="-1">27-使用过 vuex 的 module 吗？ <a class="header-anchor" href="#_27-使用过-vuex-的-module-吗" aria-label="Permalink to &quot;27-使用过 vuex 的 module 吗？&quot;">​</a></h3><h3 id="_28-怎么实现路由懒加载呢" tabindex="-1">28-怎么实现路由懒加载呢？ <a class="header-anchor" href="#_28-怎么实现路由懒加载呢" aria-label="Permalink to &quot;28-怎么实现路由懒加载呢？&quot;">​</a></h3><h3 id="_32-vue-loader-是什么-它有什么作用" tabindex="-1">32-vue-loader 是什么？它有什么作用？ <a class="header-anchor" href="#_32-vue-loader-是什么-它有什么作用" aria-label="Permalink to &quot;32-vue-loader 是什么？它有什么作用？&quot;">​</a></h3><h3 id="_33-你写过自定义指令吗-使用场景有哪些" tabindex="-1">33-你写过自定义指令吗？使用场景有哪些？ <a class="header-anchor" href="#_33-你写过自定义指令吗-使用场景有哪些" aria-label="Permalink to &quot;33-你写过自定义指令吗？使用场景有哪些？&quot;">​</a></h3><h3 id="_34-说下-attrs和-listeners-的使用场景" tabindex="-1">34-说下$attrs和$listeners 的使用场景 <a class="header-anchor" href="#_34-说下-attrs和-listeners-的使用场景" aria-label="Permalink to &quot;34-说下$attrs和$listeners 的使用场景&quot;">​</a></h3><h3 id="_34-v-once-的使用场景有哪些" tabindex="-1">34-v-once 的使用场景有哪些？ <a class="header-anchor" href="#_34-v-once-的使用场景有哪些" aria-label="Permalink to &quot;34-v-once 的使用场景有哪些？&quot;">​</a></h3><h3 id="_37-你是怎么处理-vue-项目中的错误的" tabindex="-1">37-你是怎么处理 vue 项目中的错误的？ <a class="header-anchor" href="#_37-你是怎么处理-vue-项目中的错误的" aria-label="Permalink to &quot;37-你是怎么处理 vue 项目中的错误的？&quot;">​</a></h3><h3 id="_38-如果让你从零开始写一个-vuex-说说你的思路" tabindex="-1">38-如果让你从零开始写一个 vuex，说说你的思路 <a class="header-anchor" href="#_38-如果让你从零开始写一个-vuex-说说你的思路" aria-label="Permalink to &quot;38-如果让你从零开始写一个 vuex，说说你的思路&quot;">​</a></h3><h3 id="_41-怎么监听-vuex-数据的变化" tabindex="-1">41-怎么监听 vuex 数据的变化？ <a class="header-anchor" href="#_41-怎么监听-vuex-数据的变化" aria-label="Permalink to &quot;41-怎么监听 vuex 数据的变化？&quot;">​</a></h3><h3 id="_42-router-link-和-router-view-是如何起作用的" tabindex="-1">42-router-link 和 router-view 是如何起作用的？ <a class="header-anchor" href="#_42-router-link-和-router-view-是如何起作用的" aria-label="Permalink to &quot;42-router-link 和 router-view 是如何起作用的？&quot;">​</a></h3><h3 id="_43-vue-router-除了-router-link-怎么实现跳转" tabindex="-1">43-Vue-router 除了 router-link 怎么实现跳转 <a class="header-anchor" href="#_43-vue-router-除了-router-link-怎么实现跳转" aria-label="Permalink to &quot;43-Vue-router 除了 router-link 怎么实现跳转&quot;">​</a></h3><h3 id="_47-在什么场景下会用到嵌套路由" tabindex="-1">47-在什么场景下会用到嵌套路由？ <a class="header-anchor" href="#_47-在什么场景下会用到嵌套路由" aria-label="Permalink to &quot;47-在什么场景下会用到嵌套路由？&quot;">​</a></h3><h3 id="_48-页面刷新后-vuex-的-state-数据丢失怎么解决" tabindex="-1">48-页面刷新后 vuex 的 state 数据丢失怎么解决？ <a class="header-anchor" href="#_48-页面刷新后-vuex-的-state-数据丢失怎么解决" aria-label="Permalink to &quot;48-页面刷新后 vuex 的 state 数据丢失怎么解决？&quot;">​</a></h3><h3 id="_51-vue-router-中如何保护路由" tabindex="-1">51-vue-router 中如何保护路由？ <a class="header-anchor" href="#_51-vue-router-中如何保护路由" aria-label="Permalink to &quot;51-vue-router 中如何保护路由？&quot;">​</a></h3><h2 id="实战篇" tabindex="-1">实战篇 <a class="header-anchor" href="#实战篇" aria-label="Permalink to &quot;实战篇&quot;">​</a></h2><h3 id="实现-el-table" tabindex="-1">实现 el-table <a class="header-anchor" href="#实现-el-table" aria-label="Permalink to &quot;实现 el-table&quot;">​</a></h3><h2 id="收集篇" tabindex="-1">收集篇 <a class="header-anchor" href="#收集篇" aria-label="Permalink to &quot;收集篇&quot;">​</a></h2><p>uni-app 怎么实现一套代码可以生成多端小程序的包参考链接</p><p>nextTick 除了解决异步导致页面显示错误的问题，还有什么用？</p><p>小程序和 uniapp 的渲染机制</p><p>小程序的架构有什么优点</p><p>前端和原生 native 的通信是怎么实现的</p><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><p><a href="https://juejin.cn/post/7097067108663558151" target="_blank" rel="noreferrer">https://juejin.cn/post/7097067108663558151</a></p><p><a href="https://juejin.cn/post/7115055320913117220" target="_blank" rel="noreferrer">https://juejin.cn/post/7115055320913117220</a></p>',142),s=[l];function d(n,c,p,u,h,m){return a(),t("div",null,s)}const f=e(i,[["render",d]]);export{v as __pageData,f as default};
