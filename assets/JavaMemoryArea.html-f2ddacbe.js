const e=JSON.parse('{"key":"v-022767e3","path":"/posts/Java/JVM/JavaMemoryArea.html","title":"Java 内存区域","lang":"zh-CN","frontmatter":{"date":"2023-03-26T00:00:00.000Z","category":["Java","JVM"],"tag":["Java","JVM"],"description":"Java 内存区域 概述 Java 内存区域(Java Memory Area) 做的事情主要如下: 对象怎么创建? 创建了放在哪? 对象里面有什么信息? 放之后怎么找到? 怎么找到不用了的对象? 怎么收集和清除他们? 收集不了怎么抛异常? 运行时数据区域 Java 运行时数据区域如下: JavaRuntimeDataArea 程序计数器","head":[["meta",{"property":"og:url","content":"https://riicarus.github.io/posts/Java/JVM/JavaMemoryArea.html"}],["meta",{"property":"og:site_name","content":"Riicarus"}],["meta",{"property":"og:title","content":"Java 内存区域"}],["meta",{"property":"og:description","content":"Java 内存区域 概述 Java 内存区域(Java Memory Area) 做的事情主要如下: 对象怎么创建? 创建了放在哪? 对象里面有什么信息? 放之后怎么找到? 怎么找到不用了的对象? 怎么收集和清除他们? 收集不了怎么抛异常? 运行时数据区域 Java 运行时数据区域如下: JavaRuntimeDataArea 程序计数器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://riicarus.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-11T01:38:36.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java 内存区域"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2023-03-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-11T01:38:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 内存区域\\",\\"image\\":[\\"https://riicarus.github.io/\\"],\\"datePublished\\":\\"2023-03-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-11T01:38:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"运行时数据区域","slug":"运行时数据区域","link":"#运行时数据区域","children":[{"level":3,"title":"程序计数器","slug":"程序计数器","link":"#程序计数器","children":[]},{"level":3,"title":"Java 虚拟机栈","slug":"java-虚拟机栈","link":"#java-虚拟机栈","children":[]},{"level":3,"title":"本地方法栈","slug":"本地方法栈","link":"#本地方法栈","children":[]},{"level":3,"title":"Java 堆","slug":"java-堆","link":"#java-堆","children":[]},{"level":3,"title":"方法区","slug":"方法区","link":"#方法区","children":[]},{"level":3,"title":"直接内存","slug":"直接内存","link":"#直接内存","children":[]}]},{"level":2,"title":"HotSpot 虚拟机堆中的对象","slug":"hotspot-虚拟机堆中的对象","link":"#hotspot-虚拟机堆中的对象","children":[{"level":3,"title":"对象创建","slug":"对象创建","link":"#对象创建","children":[]},{"level":3,"title":"对象内存布局","slug":"对象内存布局","link":"#对象内存布局","children":[]},{"level":3,"title":"程序层面构建","slug":"程序层面构建","link":"#程序层面构建","children":[]},{"level":3,"title":"对象的访问","slug":"对象的访问","link":"#对象的访问","children":[]}]}],"git":{"createdTime":1679991158000,"updatedTime":1694396316000,"contributors":[{"name":"Riicarus","email":"riicarus.acc@gmail.com","commits":4}]},"readingTime":{"minutes":6.84,"words":2053},"filePathRelative":"posts/Java/JVM/JavaMemoryArea.md","localizedDate":"2023年3月26日","excerpt":"<h1> Java 内存区域</h1>\\n<h2> 概述</h2>\\n<p>Java 内存区域(Java Memory Area) 做的事情主要如下:</p>\\n<ul>\\n<li>对象怎么创建? 创建了放在哪? 对象里面有什么信息? 放之后怎么找到?</li>\\n<li>怎么找到不用了的对象? 怎么收集和清除他们?</li>\\n<li>收集不了怎么抛异常?</li>\\n</ul>\\n<h2> 运行时数据区域</h2>\\n<p>Java 运行时数据区域如下:</p>\\n<figure><figcaption>JavaRuntimeDataArea</figcaption></figure>\\n<h3> 程序计数器</h3>","autoDesc":true}');export{e as data};
