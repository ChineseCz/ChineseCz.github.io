const e=JSON.parse('{"key":"v-4c0249ae","path":"/posts/Algorithm/Template/DataStructure/DisjoinSet.html","title":"并查集","lang":"zh-CN","frontmatter":{"date":"2023-08-09T00:00:00.000Z","category":["算法"],"tag":["算法模板","并查集"],"description":"并查集 并查集的功能 合并(Union): 合并两个集合, 查询(Find): 查询某个元素是否在集合中. 核心要点 以树的形式维护集合. 集合的编号为根节点的编号. 根节点为代表元素. 每个节点都保存其父节点的编号, 用于查找元素属于的集合. 用什么数据结构存储? 使用数组进行维护. // 并查集 int[] p; // 并查集大小(可选) int[] size;","head":[["meta",{"property":"og:url","content":"https://riicarus.github.io/posts/Algorithm/Template/DataStructure/DisjoinSet.html"}],["meta",{"property":"og:site_name","content":"Riicarus"}],["meta",{"property":"og:title","content":"并查集"}],["meta",{"property":"og:description","content":"并查集 并查集的功能 合并(Union): 合并两个集合, 查询(Find): 查询某个元素是否在集合中. 核心要点 以树的形式维护集合. 集合的编号为根节点的编号. 根节点为代表元素. 每个节点都保存其父节点的编号, 用于查找元素属于的集合. 用什么数据结构存储? 使用数组进行维护. // 并查集 int[] p; // 并查集大小(可选) int[] size;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-11T15:46:37.000Z"}],["meta",{"property":"article:tag","content":"算法模板"}],["meta",{"property":"article:tag","content":"并查集"}],["meta",{"property":"article:published_time","content":"2023-08-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-11T15:46:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并查集\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-11T15:46:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"并查集的功能","slug":"并查集的功能","link":"#并查集的功能","children":[]},{"level":2,"title":"核心要点","slug":"核心要点","link":"#核心要点","children":[{"level":3,"title":"用什么数据结构存储?","slug":"用什么数据结构存储","link":"#用什么数据结构存储","children":[]},{"level":3,"title":"如何判断树根?","slug":"如何判断树根","link":"#如何判断树根","children":[]},{"level":3,"title":"如何求元素对应的集合编号?","slug":"如何求元素对应的集合编号","link":"#如何求元素对应的集合编号","children":[]},{"level":3,"title":"如何合并集合?","slug":"如何合并集合","link":"#如何合并集合","children":[]}]},{"level":2,"title":"例题","slug":"例题","link":"#例题","children":[]}],"git":{"createdTime":1691768537000,"updatedTime":1691768797000,"contributors":[{"name":"Riicarus","email":"riicarus.acc@gmail.com","commits":2}]},"readingTime":{"minutes":1.49,"words":447},"filePathRelative":"posts/Algorithm/Template/DataStructure/DisjoinSet.md","localizedDate":"2023年8月9日","excerpt":"<h1> 并查集</h1>\\n<h2> 并查集的功能</h2>\\n<ol>\\n<li>合并(Union): 合并两个集合,</li>\\n<li>查询(Find): 查询某个元素是否在集合中.</li>\\n</ol>\\n<h2> 核心要点</h2>\\n<ol>\\n<li>以树的形式维护集合.</li>\\n<li>集合的编号为根节点的编号. 根节点为代表元素.</li>\\n<li>每个节点都保存其父节点的编号, 用于查找元素属于的集合.</li>\\n</ol>\\n<h3> 用什么数据结构存储?</h3>\\n<p>使用数组进行维护.</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 并查集</span>\\n<span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> p<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 并查集大小(可选)</span>\\n<span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> size<span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
