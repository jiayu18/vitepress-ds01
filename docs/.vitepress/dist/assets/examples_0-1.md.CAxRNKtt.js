import{_ as l,c as e,o as p,ag as t,j as a,a as s}from"./chunks/framework.DPkH3Wt3.js";const i="/vitepress-ds01/assets/Rectangle.B2rTDllO.png",k=JSON.parse('{"title":"Markdown 語法大全，範例模板","description":"","frontmatter":{},"headers":[],"relativePath":"examples/0-1.md","filePath":"examples/0-1.md","lastUpdated":1759381707000}'),o={name:"examples/0-1.md"};function d(r,n,h,c,g,u){return p(),e("div",null,n[0]||(n[0]=[t(`<p>#Markdown 快速開始</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>初次使用Markdown 寫法可參考一下教學</p><p>VitePress 獲取用 Markdown 編寫的內容，對其應用主題，並生成可以輕鬆部署到任何地方的靜態 HTML 頁面。 補充 Vue 模板裡自訂組件標籤不能用斜線、空白或連字符作為變數名 Vue 官方和社群慣例推薦使用 PascalCase（大駝峰） 或者網頁標準的 kebab-case（用連字符）。</p></div><p><a href="https://vitepress.dev/zh/guide/markdown#errors-and-warnings-in-code-blocks" target="_blank" rel="noreferrer">https://vitepress.dev/zh/guide/markdown#errors-and-warnings-in-code-blocks</a></p><h6 id="tags-markdown" tabindex="-1">tags: <code>Markdown</code> <a class="header-anchor" href="#tags-markdown" aria-label="Permalink to &quot;tags: \`Markdown\`&quot;">​</a></h6><h1 id="markdown-語法大全-範例模板" tabindex="-1">Markdown 語法大全，範例模板 <a class="header-anchor" href="#markdown-語法大全-範例模板" aria-label="Permalink to &quot;Markdown 語法大全，範例模板&quot;">​</a></h1><p><code>僅收入常用語法</code></p><h2 id="目錄" tabindex="-1">目錄 <a class="header-anchor" href="#目錄" aria-label="Permalink to &quot;目錄&quot;">​</a></h2><ul><li>標題</li><li>內文</li><li>清單</li><li>標註</li><li>區塊</li><li>程式碼</li><li>分隔線</li><li>超連結</li><li>圖片</li><li>表格 [TOC]</li></ul><h2 id="標題" tabindex="-1">標題 <a class="header-anchor" href="#標題" aria-label="Permalink to &quot;標題&quot;">​</a></h2><p><code>H1 ~ H6</code></p><h3 id="語法" tabindex="-1">語法 <a class="header-anchor" href="#語法" aria-label="Permalink to &quot;語法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># H1 大標題</span></span>
<span class="line"><span>## H2 標題 </span></span>
<span class="line"><span>### H3 子標題 </span></span>
<span class="line"><span>#### H4 小標題 </span></span>
<span class="line"><span>##### H5 小標題 </span></span>
<span class="line"><span>###### H6 小標題</span></span></code></pre></div><h3 id="標體-渲染效果" tabindex="-1">標體 - 渲染效果 <a class="header-anchor" href="#標體-渲染效果" aria-label="Permalink to &quot;標體 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><h1 id="h1-大標題" tabindex="-1">H1 大標題 <a class="header-anchor" href="#h1-大標題" aria-label="Permalink to &quot;H1 大標題&quot;">​</a></h1><h2 id="h2-標題" tabindex="-1">H2 標題 <a class="header-anchor" href="#h2-標題" aria-label="Permalink to &quot;H2 標題&quot;">​</a></h2><h3 id="h3-子標題" tabindex="-1">H3 子標題 <a class="header-anchor" href="#h3-子標題" aria-label="Permalink to &quot;H3 子標題&quot;">​</a></h3><h4 id="h4-小標題" tabindex="-1">H4 小標題 <a class="header-anchor" href="#h4-小標題" aria-label="Permalink to &quot;H4 小標題&quot;">​</a></h4><h5 id="h5-小標題" tabindex="-1">H5 小標題 <a class="header-anchor" href="#h5-小標題" aria-label="Permalink to &quot;H5 小標題&quot;">​</a></h5><h6 id="h6-小標題" tabindex="-1">H6 小標題 <a class="header-anchor" href="#h6-小標題" aria-label="Permalink to &quot;H6 小標題&quot;">​</a></h6><hr><p><strong>↑↑↑</strong></p><h3 id="另外一種標題寫法" tabindex="-1">另外一種標題寫法 <a class="header-anchor" href="#另外一種標題寫法" aria-label="Permalink to &quot;另外一種標題寫法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>H1 大標題</span></span>
<span class="line"><span>======</span></span>
<span class="line"><span></span></span>
<span class="line"><span>H2 標題</span></span>
<span class="line"><span>------</span></span></code></pre></div><h3 id="標體-渲染效果-1" tabindex="-1">標體 - 渲染效果 <a class="header-anchor" href="#標體-渲染效果-1" aria-label="Permalink to &quot;標體 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><h1 id="h1-大標題-1" tabindex="-1">H1 大標題 <a class="header-anchor" href="#h1-大標題-1" aria-label="Permalink to &quot;H1 大標題&quot;">​</a></h1><h2 id="h2-標題-1" tabindex="-1">H2 標題 <a class="header-anchor" href="#h2-標題-1" aria-label="Permalink to &quot;H2 標題&quot;">​</a></h2><hr><p><strong>↑↑↑</strong></p><h2 id="內文" tabindex="-1">內文 <a class="header-anchor" href="#內文" aria-label="Permalink to &quot;內文&quot;">​</a></h2><p><code>文章內容</code></p><h3 id="語法-1" tabindex="-1">語法 <a class="header-anchor" href="#語法-1" aria-label="Permalink to &quot;語法&quot;">​</a></h3><ul><li>Text : 一般文字，不添加任何符號</li><li>Bold : 粗體，使用兩個 <code>+</code>、<code>-</code>、<code>*</code> 符號</li><li>Italic : 斜體 ，使用一個 <code>+</code>、<code>-</code>、<code>*</code> 符號</li><li>Underline : 下劃線，使用 HTML <code>&lt;u&gt;</code> 標籤</li><li>Delete : 刪除線，使用兩個 <code>~</code> 符號</li><li>TextWrap : 文字換行，需使用兩次，否則會以空格形式呈現</li><li>#1#2#3 : #字符號前面需添加倒斜線，否則無法渲染</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Text **Bold** *Italic* &lt;u&gt;underline&lt;/u&gt; ~~delete~~</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Text __Bold__ _Italic_ &lt;u&gt;underline&lt;/u&gt; ~~delete~~</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.TextWrap</span></span>
<span class="line"><span>2.TextWrap</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.TextWrap</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1#2#3</span></span>
<span class="line"><span>\\#1\\#2\\#3</span></span></code></pre></div><h3 id="內文-渲染效果" tabindex="-1">內文 - 渲染效果 <a class="header-anchor" href="#內文-渲染效果" aria-label="Permalink to &quot;內文 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><p>Text <strong>Bold</strong> <em>Italic</em> <u>underline</u> <s>delete</s></p><p>Text <strong>Bold</strong> <em>Italic</em> <u>underline</u> <s>delete</s></p><p>1.TextWrap 2.TextWrap</p><p>3.TextWrap</p><p>#1#2#3 #1#2#3</p><hr><p><strong>↑↑↑</strong></p><h2 id="清單" tabindex="-1">清單 <a class="header-anchor" href="#清單" aria-label="Permalink to &quot;清單&quot;">​</a></h2><p><code>項目列表、任務列表</code></p><h3 id="語法-2" tabindex="-1">語法 <a class="header-anchor" href="#語法-2" aria-label="Permalink to &quot;語法&quot;">​</a></h3><ul><li>Item : 項目符號使用 <code>+</code>、<code>-</code>、<code>*</code> 皆可</li><li>Number : 數字項目使用 <code>數字.</code> 開頭，實際數字不影響渲染結果</li><li>CheckBox : 任務清單，前方除 Item 符號以外，使用 <code>[ ]</code> 符號 <ul><li><code>+ [ ]</code> : 渲染未打勾</li><li><code>+ [X]</code> : 渲染為打勾</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>+ Item1</span></span>
<span class="line"><span>    + Item1.1</span></span>
<span class="line"><span>    + Item1.2</span></span>
<span class="line"><span>- Item2</span></span>
<span class="line"><span>    - Item2.1</span></span>
<span class="line"><span>    - Item2.2</span></span>
<span class="line"><span>        * Item2.2.1</span></span>
<span class="line"><span>1. Number</span></span>
<span class="line"><span>2. Number</span></span>
<span class="line"><span>2. Number</span></span>
<span class="line"><span>- [ ] CheckBox</span></span>
<span class="line"><span>+ [X] To-Do</span></span>
<span class="line"><span>* [ ] To-Do</span></span></code></pre></div><h3 id="清單-渲染效果" tabindex="-1">清單 - 渲染效果 <a class="header-anchor" href="#清單-渲染效果" aria-label="Permalink to &quot;清單 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><ul><li>Item1 <ul><li>Item1.1</li><li>Item1.2</li></ul></li></ul><ul><li>Item2 <ul><li>Item2.1</li><li>Item2.2 <ul><li>Item2.2.1</li></ul></li></ul></li></ul><ol><li>Number</li><li>Number</li><li>Number</li></ol><ul><li>[ ] CheckBox</li></ul><ul><li>[X] To-Do</li></ul><ul><li>[ ] To-Do</li></ul><hr><p><strong>↑↑↑</strong></p><h2 id="標註" tabindex="-1">標註 <a class="header-anchor" href="#標註" aria-label="Permalink to &quot;標註&quot;">​</a></h2><p><code>Highlight</code></p><h3 id="語法-3" tabindex="-1">語法 <a class="header-anchor" href="#語法-3" aria-label="Permalink to &quot;語法&quot;">​</a></h3><ul><li>Highlight : 使用 \`\` 符號</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Text\`Highlight\`Remark</span></span></code></pre></div><h3 id="標註-渲染效果" tabindex="-1">標註 - 渲染效果 <a class="header-anchor" href="#標註-渲染效果" aria-label="Permalink to &quot;標註 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><p>Text<code>Highlight</code>Remark</p><hr><p><strong>↑↑↑</strong></p><h2 id="區塊" tabindex="-1">區塊 <a class="header-anchor" href="#區塊" aria-label="Permalink to &quot;區塊&quot;">​</a></h2><h3 id="語法-4" tabindex="-1">語法 <a class="header-anchor" href="#語法-4" aria-label="Permalink to &quot;語法&quot;">​</a></h3><ul><li>Block : 文字前使用四個空格</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    Text Block</span></span></code></pre></div><h3 id="區塊-渲染效果" tabindex="-1">區塊 - 渲染效果 <a class="header-anchor" href="#區塊-渲染效果" aria-label="Permalink to &quot;區塊 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><pre><code>Text Block
</code></pre><hr><p><strong>↑↑↑</strong></p><h2 id="程式碼" tabindex="-1">程式碼 <a class="header-anchor" href="#程式碼" aria-label="Permalink to &quot;程式碼&quot;">​</a></h2><h3 id="語法-5" tabindex="-1">語法 <a class="header-anchor" href="#語法-5" aria-label="Permalink to &quot;語法&quot;">​</a></h3><ul><li>Text : 一般的文字說明，若內容字數太長，使用程式碼區塊 <ul><li><code>避免一般文字換行排版的困擾</code></li></ul></li><li>java : 區塊的語法類型，使用三個 \` 符號，後方加上程式語言名稱 <ul><li><code>程式碼語法高亮取決於軟體的支援</code></li></ul></li><li>diff : 類似於 git 版本比對功能 <ul><li><code>+</code> : 綠色代表新增</li><li><code>-</code> : 紅色代表刪除</li></ul></li></ul><pre><code>
\`\`\`
Text - 文字說明
\`\`\`

\`\`\`java
// Java Code 
System.out.println(&quot;Hello Word&quot;);
\`\`\`

\`\`\`diff
+ System.out.println(&quot;Hello Word&quot;);
- System.out.println(&quot;Hello Word&quot;);
\`\`\`
</code>
</pre><h3 id="程式碼-渲染效果" tabindex="-1">程式碼 - 渲染效果 <a class="header-anchor" href="#程式碼-渲染效果" aria-label="Permalink to &quot;程式碼 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Text - 文字說明</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Java Code </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello Word&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+ System.out.println(&quot;Hello Word&quot;);</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">- System.out.println(&quot;Hello Word&quot;);</span></span></code></pre></div><hr><p><strong>↑↑↑</strong></p><h2 id="分隔線" tabindex="-1">分隔線 <a class="header-anchor" href="#分隔線" aria-label="Permalink to &quot;分隔線&quot;">​</a></h2><h3 id="語法-6" tabindex="-1">語法 <a class="header-anchor" href="#語法-6" aria-label="Permalink to &quot;語法&quot;">​</a></h3><ul><li><code>---</code> : 使用 <code>*</code> 或 <code>-</code> 符號，數量要大於 三個</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>--</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-----</span></span>
<span class="line"><span></span></span>
<span class="line"><span>***</span></span></code></pre></div><h3 id="分隔線-渲染效果" tabindex="-1">分隔線 - 渲染效果 <a class="header-anchor" href="#分隔線-渲染效果" aria-label="Permalink to &quot;分隔線 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><hr><hr><p><strong>↑↑↑</strong></p><h2 id="超連結" tabindex="-1">超連結 <a class="header-anchor" href="#超連結" aria-label="Permalink to &quot;超連結&quot;">​</a></h2><p><code>url</code></p><h3 id="語法-7" tabindex="-1">語法 <a class="header-anchor" href="#語法-7" aria-label="Permalink to &quot;語法&quot;">​</a></h3><ul><li>Gitlab : 使用 <code>&lt;&gt;</code>符號，將網址渲染成超連結</li><li>Blogger : 使用 <code>[]</code> 與 <code>()</code>，將文字變成指定網址的超連結標籤</li><li>YouTube : 另一種將文字變成指定網址的超連結方法，統一管理連結的網址</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>### Gitlab</span></span>
<span class="line"><span>&lt;https://gitlab.com/GammaRayStudio&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Blogger](https://gamma-ray-studio.blogspot.com/)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Youtube]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[YouTube]: https://www.youtube.com/user/rhxs020</span></span></code></pre></div><h3 id="超連結-渲染效果" tabindex="-1">超連結 - 渲染效果 <a class="header-anchor" href="#超連結-渲染效果" aria-label="Permalink to &quot;超連結 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><h3 id="gitlab" tabindex="-1">Gitlab <a class="header-anchor" href="#gitlab" aria-label="Permalink to &quot;Gitlab&quot;">​</a></h3><p><a href="https://gitlab.com/GammaRayStudio" target="_blank" rel="noreferrer">https://gitlab.com/GammaRayStudio</a></p><p><a href="https://gamma-ray-studio.blogspot.com/" target="_blank" rel="noreferrer">Blogger</a></p><p><a href="https://www.youtube.com/user/rhxs020" target="_blank" rel="noreferrer">Youtube</a></p><hr><p><strong>↑↑↑</strong></p><h2 id="圖片" tabindex="-1">圖片 <a class="header-anchor" href="#圖片" aria-label="Permalink to &quot;圖片&quot;">​</a></h2><h3 id="語法-8" tabindex="-1">語法 <a class="header-anchor" href="#語法-8" aria-label="Permalink to &quot;語法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>![demo1](../../img/demo/Rectangle.png)</span></span></code></pre></div><h3 id="圖片-渲染效果" tabindex="-1">圖片 - 渲染效果 <a class="header-anchor" href="#圖片-渲染效果" aria-label="Permalink to &quot;圖片 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><p><img src="`+i+`" alt="demo1"></p><hr><p><strong>↑↑↑</strong></p><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><h3 id="語法-9" tabindex="-1">語法 <a class="header-anchor" href="#語法-9" aria-label="Permalink to &quot;語法&quot;">​</a></h3><ul><li>Table - Align : 表格對齊方式，置左、置右、置中</li><li>Table - Text : 表格中使用文字符號</li><li>Table - Html : 在 Markdown 中，使用 Html 表格標籤</li><li>Table - Span : 使用 Html 標籤，合併表格欄位</li><li>Table - Mix : 混合使用 Markdown 格式與 Html 標籤</li><li>Table - Item : 使用 Html 標籤，在表格中呈現項目列表</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>### Table - Align</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| Markdown             | Simple               | Table           |</span></span>
<span class="line"><span>| :------------------- | -------------------: |:---------------:|</span></span>
<span class="line"><span>| left-aligned column  | right-aligned column | centered column |</span></span>
<span class="line"><span>| $100                 | $100                 | $100            |</span></span>
<span class="line"><span>| $10                  | $10                  | $10             |</span></span>
<span class="line"><span>| $1                   | $1                   | $1              |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Table - Text</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 | 2 | 3</span></span>
<span class="line"><span>--- | --- | ---</span></span>
<span class="line"><span>one | two | three</span></span>
<span class="line"><span>*Italic* | \`Hightlight\` | **Bold**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Table - Html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;table&gt;</span></span>
<span class="line"><span>  &lt;thead&gt;</span></span>
<span class="line"><span>    &lt;tr&gt;</span></span>
<span class="line"><span>      &lt;th&gt;Month&lt;/th&gt;</span></span>
<span class="line"><span>      &lt;th&gt;Savings&lt;/th&gt;</span></span>
<span class="line"><span>    &lt;/tr&gt;</span></span>
<span class="line"><span>  &lt;/thead&gt;</span></span>
<span class="line"><span>  &lt;tbody&gt;</span></span>
<span class="line"><span>    &lt;tr&gt;</span></span>
<span class="line"><span>      &lt;td&gt;January&lt;/td&gt;</span></span>
<span class="line"><span>      &lt;td&gt;$100&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;/tr&gt;</span></span>
<span class="line"><span>    &lt;tr&gt;</span></span>
<span class="line"><span>      &lt;td&gt;February&lt;/td&gt;</span></span>
<span class="line"><span>      &lt;td&gt;$80&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;/tr&gt;</span></span>
<span class="line"><span>  &lt;/tbody&gt;</span></span>
<span class="line"><span>  &lt;tfoot&gt;</span></span>
<span class="line"><span>    &lt;tr&gt;</span></span>
<span class="line"><span>      &lt;td&gt;Sum&lt;/td&gt;</span></span>
<span class="line"><span>      &lt;td&gt;$180&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;/tr&gt;</span></span>
<span class="line"><span>  &lt;/tfoot&gt;</span></span>
<span class="line"><span>&lt;/table&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Table - Span</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;table&gt;</span></span>
<span class="line"><span>  &lt;tr&gt;</span></span>
<span class="line"><span>    &lt;th&gt;Item1&lt;/th&gt;</span></span>
<span class="line"><span>    &lt;th&gt;Item2&lt;/th&gt;</span></span>
<span class="line"><span>    &lt;th&gt;Item3&lt;/th&gt;</span></span>
<span class="line"><span>  &lt;/tr&gt;</span></span>
<span class="line"><span>  &lt;tr&gt;</span></span>
<span class="line"><span>    &lt;td&gt;A1&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;td colspan=&quot;2&quot;&gt;A2&lt;/td&gt;</span></span>
<span class="line"><span>  &lt;/tr&gt;</span></span>
<span class="line"><span>  &lt;tr&gt;</span></span>
<span class="line"><span>    &lt;td rowspan=&quot;2&quot;&gt;B1&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;td&gt;B2&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;td&gt;B3&lt;/td&gt;</span></span>
<span class="line"><span>  &lt;/tr&gt;</span></span>
<span class="line"><span>  &lt;tr&gt;</span></span>
<span class="line"><span>    &lt;td&gt;C2&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;td&gt;C3&lt;/td&gt;</span></span>
<span class="line"><span>  &lt;/tr&gt;</span></span>
<span class="line"><span>&lt;/table&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Table - Mix</span></span>
<span class="line"><span></span></span>
<span class="line"><span>|Table 1|Table 2| </span></span>
<span class="line"><span>|--|--| </span></span>
<span class="line"><span>|&lt;table&gt; &lt;tr&gt;&lt;th&gt;Table 1 Heading 1&lt;/th&gt;&lt;th&gt;Table 1 Heading 2&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Row 1 Column 1&lt;/td&gt;&lt;td&gt;Row 1 Column 2&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;| &lt;table&gt; &lt;tr&gt;&lt;th&gt;Table 2 Heading 1&lt;/th&gt;&lt;th&gt;Table 2 Heading 2&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Row 1 Column 1&lt;/td&gt;&lt;td&gt;Row 1 Column 2&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;| </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Html - Item</span></span>
<span class="line"><span>&lt;table&gt;</span></span>
<span class="line"><span>  &lt;thead&gt;</span></span>
<span class="line"><span>    &lt;tr&gt;</span></span>
<span class="line"><span>      &lt;th&gt;Java&lt;/th&gt;</span></span>
<span class="line"><span>      &lt;th&gt;Android&lt;/th&gt;</span></span>
<span class="line"><span>      &lt;th&gt;iOS&lt;/th&gt;</span></span>
<span class="line"><span>    &lt;/tr&gt;</span></span>
<span class="line"><span>  &lt;/thead&gt;</span></span>
<span class="line"><span>  &lt;tbody&gt;</span></span>
<span class="line"><span>    &lt;tr&gt;</span></span>
<span class="line"><span>      &lt;td valign=&quot;top&quot; width=&quot;300&quot;&gt;</span></span>
<span class="line"><span>          &lt;ul&gt;</span></span>
<span class="line"><span>              &lt;li&gt;OwO&lt;/li&gt;</span></span>
<span class="line"><span>              &lt;li&gt;OwO&lt;/li&gt;</span></span>
<span class="line"><span>              &lt;li&gt;OwO&lt;/li&gt;</span></span>
<span class="line"><span>          &lt;/ul&gt;</span></span>
<span class="line"><span>      &lt;/td&gt;</span></span>
<span class="line"><span>      &lt;td valign=&quot;top&quot; width=&quot;300&quot;&gt;</span></span>
<span class="line"><span>         &lt;ul&gt;</span></span>
<span class="line"><span>         &lt;li&gt;OwO#1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;OwO#2</span></span>
<span class="line"><span>               &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li&gt;OwO@3&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;OwO@4&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;OwO@5&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;/ul&gt;</span></span>
<span class="line"><span>            &lt;/li&gt;</span></span>
<span class="line"><span>          &lt;/ul&gt;</span></span>
<span class="line"><span>      &lt;/td&gt;</span></span>
<span class="line"><span>      &lt;td valign=&quot;top&quot; width=&quot;300&quot;&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>         &lt;li&gt;OwO#1&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;OwO#2</span></span>
<span class="line"><span>               &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li&gt;OwO@3&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;OwO@4&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;li&gt;OwO@5</span></span>
<span class="line"><span>                &lt;ul&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;OwO$1&lt;/li&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;OwO$2&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;/ul&gt;</span></span>
<span class="line"><span>                &lt;/li&gt;</span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>      &lt;/td&gt;</span></span>
<span class="line"><span>    &lt;/tr&gt;</span></span>
<span class="line"><span>  &lt;/tbody&gt;</span></span>
<span class="line"><span>&lt;/table&gt;</span></span></code></pre></div><h3 id="表格-渲染效果" tabindex="-1">表格 - 渲染效果 <a class="header-anchor" href="#表格-渲染效果" aria-label="Permalink to &quot;表格 - 渲染效果&quot;">​</a></h3><p><strong>↓↓↓</strong></p><hr><h3 id="table-align" tabindex="-1">Table - Align <a class="header-anchor" href="#table-align" aria-label="Permalink to &quot;Table - Align&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">Fun</th><th style="text-align:right;">With</th><th style="text-align:center;">Tables</th></tr></thead><tbody><tr><td style="text-align:left;">left-aligned column</td><td style="text-align:right;">right-aligned column</td><td style="text-align:center;">centered column</td></tr><tr><td style="text-align:left;">$100</td><td style="text-align:right;">$100</td><td style="text-align:center;">$100</td></tr><tr><td style="text-align:left;">$10</td><td style="text-align:right;">$10</td><td style="text-align:center;">$10</td></tr><tr><td style="text-align:left;">$1</td><td style="text-align:right;">$1</td><td style="text-align:center;">$1</td></tr></tbody></table><h3 id="table-text" tabindex="-1">Table - Text <a class="header-anchor" href="#table-text" aria-label="Permalink to &quot;Table - Text&quot;">​</a></h3><table tabindex="0"><thead><tr><th>1</th><th>2</th><th>3</th></tr></thead><tbody><tr><td>one</td><td>two</td><td>three</td></tr><tr><td><em>Italic</em></td><td><code>Hightlight</code></td><td><strong>Bold</strong></td></tr></tbody></table><h3 id="table-html" tabindex="-1">Table - Html <a class="header-anchor" href="#table-html" aria-label="Permalink to &quot;Table - Html&quot;">​</a></h3><table><thead><tr><th>Month</th><th>Savings</th></tr></thead><tbody><tr><td>January</td><td>$100</td></tr><tr><td>February</td><td>$80</td></tr></tbody><tfoot><tr><td>Sum</td><td>$180</td></tr></tfoot></table><h3 id="table-span" tabindex="-1">Table - Span <a class="header-anchor" href="#table-span" aria-label="Permalink to &quot;Table - Span&quot;">​</a></h3><table><tr><th>Item1</th><th>Item2</th><th>Item3</th></tr><tr><td>A1</td><td colspan="2">A2</td></tr><tr><td rowspan="2">B1</td><td>B2</td><td>B3</td></tr><tr><td>C2</td><td>C3</td></tr></table><h3 id="table-mix" tabindex="-1">Table - Mix <a class="header-anchor" href="#table-mix" aria-label="Permalink to &quot;Table - Mix&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Table 1</th><th>Table 2</th></tr></thead><tbody><tr><td><table><tr><th>Table 1 Heading 1</th><th>Table 1 Heading 2</th></tr><tr><td>Row 1 Column 1</td><td>Row 1 Column 2</td></tr></table></td><td><table><tr><th>Table 2 Heading 1</th><th>Table 2 Heading 2</th></tr><tr><td>Row 1 Column 1</td><td>Row 1 Column 2</td></tr></table></td></tr></tbody></table><h3 id="html-item" tabindex="-1">Html - Item <a class="header-anchor" href="#html-item" aria-label="Permalink to &quot;Html - Item&quot;">​</a></h3>`,147),a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"Java"),a("th",null,"Android"),a("th",null,"iOS")])]),a("tbody",null,[a("tr",null,[a("td",{valign:"top",width:"300"},[a("ul",null,[a("li",null,"OwO"),a("li",null,"OwO"),a("li",null,"OwO")])]),a("td",{valign:"top",width:"300"},[a("ul",null,[a("li",null,"OwO#1"),a("li",null,[s("OwO#2 "),a("ul",null,[a("li",null,"OwO@3"),a("li",null,"OwO@4"),a("li",null,"OwO@5")])])])]),a("td",{valign:"top",width:"300"},[a("ul",null,[a("li",null,"OwO#1"),a("li",null,[s("OwO#2 "),a("ul",null,[a("li",null,"OwO@3"),a("li",null,"OwO@4"),a("li",null,[s("OwO@5 "),a("ul",null,[a("li",null,"OwO$1"),a("li",null,"OwO$2")])])])])])])])])],-1),t(`<hr><p><strong>↑↑↑</strong></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-m9hUZ" id="tab-KgP1mwW" checked><label data-title="config.js" for="tab-KgP1mwW">config.js</label><input type="radio" name="group-m9hUZ" id="tab-ozQU6_q"><label data-title="config.ts" for="tab-ozQU6_q">config.ts</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">* </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { UserConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config</span></span></code></pre></div></div></div>`,3)]))}const m=l(o,[["render",d]]);export{k as __pageData,m as default};
