import{_ as e,o as a,c as t,Q as s}from"./chunks/framework.caffda30.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"course/5-DOM+BOM.md","filePath":"course/5-DOM+BOM.md","lastUpdated":null}'),o={name:"course/5-DOM+BOM.md"},l=s(`<h2 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-label="Permalink to &quot;DOM&quot;">​</a></h2><p>html内容被浏览器解析为DOM树，进行渲染</p><p>document的全局变量可以用来获取dom元素</p><p>querySelector/All 推荐使用，而getElementByClassName。。。不要使用！</p><p>dom事件</p><p>onclick -- addEventListener</p><p>event使用</p><p>click：event.target</p><p>mouse: x,y</p><p>正则表达式</p><p>无敌的教程：<a href="https://www.bilibili.com/video/BV1da4y1p7iZ/" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1da4y1p7iZ/</a></p><p>BOM</p><p>setTimeout/setInterval</p><h2 id="定时器" tabindex="-1">定时器 <a class="header-anchor" href="#定时器" aria-label="Permalink to &quot;定时器&quot;">​</a></h2><p>nodelist是伪数组</p><p>转数组：[...nodelist] Array.from(nodelist)</p><h3 id="dataset" tabindex="-1">dataset <a class="header-anchor" href="#dataset" aria-label="Permalink to &quot;dataset&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement" target="_blank" rel="noreferrer"><code>HTMLElement</code></a> 接口的只读属性 <strong><code>dataset</code></strong> 提供了对元素上<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*" target="_blank" rel="noreferrer">自定义数据属性</a>（<code>data-*</code>）读/写访问。它暴露了一个字符串映射（<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/DOMStringMap" target="_blank" rel="noreferrer"><code>DOMStringMap</code></a>），其中包含每个 <code>data-*</code> 属性条目。</p><p>获取</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#babed8;">&lt;div id=&quot;user&quot; data-id=&quot;1234567890&quot; data-user=&quot;johndoe&quot; data-date-of-birth&gt;</span></span>
<span class="line"><span style="color:#babed8;">  John Doe</span></span>
<span class="line"><span style="color:#babed8;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div id=&quot;user&quot; data-id=&quot;1234567890&quot; data-user=&quot;johndoe&quot; data-date-of-birth&gt;</span></span>
<span class="line"><span style="color:#24292e;">  John Doe</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#babed8;">const el = document.querySelector(&quot;#user&quot;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">el.dataset.user</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const el = document.querySelector(&quot;#user&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">el.dataset.user</span></span></code></pre></div><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute" target="_blank" rel="noreferrer"><code>Element.getAttribute()</code></a> 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute" target="_blank" rel="noreferrer"><code>Element.setAttribute()</code></a>也可以</li></ul>`,22),n=[l];function r(p,d,c,i,h,u){return a(),t("div",null,n)}const g=e(o,[["render",r]]);export{m as __pageData,g as default};