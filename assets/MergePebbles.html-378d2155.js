import{_ as t,V as e,W as o,X as n,Y as s,Z as c,$ as a,F as l}from"./framework-c6791857.js";const i="/assets/acwing_282-a211fea3.png",u={},k=n("h1",{id:"石子合并",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#石子合并","aria-hidden":"true"},"#"),s(" 石子合并")],-1),r=n("p",null,"石子合并是区间 DP 的经典问题.",-1),d=n("h2",{id:"例题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#例题","aria-hidden":"true"},"#"),s(" 例题")],-1),m={href:"https://www.acwing.com/problem/content/description/284/",target:"_blank",rel:"noopener noreferrer"},v=a('<figure><img src="'+i+'" alt="石子合并-acwing" tabindex="0" loading="lazy"><figcaption>石子合并-acwing</figcaption></figure><h3 id="状态分析" tabindex="-1"><a class="header-anchor" href="#状态分析" aria-hidden="true">#</a> 状态分析</h3><p><strong>区间 DP 状态通常使用 <code>f(i, j)</code> 来代表从 <code>i</code> 到 <code>j</code> 的一段区间的状态集合.</strong></p><p>本题中, 我们用 <code>f(i, j)</code> 来表示合并区间 <code>i ~ j</code> 所需的代价, 属性为 MIN.</p>',4),b=n("p",null,[s("那么 "),n("code",null,"f(i, j)"),s(" 可以由如下状态转换: "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"k"),n("mo",null,"∈"),n("mo",{stretchy:"false"},"("),n("mi",null,"i"),n("mo",{separator:"true"},","),n("mi",null,"j"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"k \\in (i, j)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"∈"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"i"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),n("span",{class:"mclose"},")")])])]),s(", "),n("code",null,"f(i, j) = min(f(i, k) + f(k + 1, j) + s[j] - s[i - 1])"),s(", "),n("code",null,"s[i]"),s(" 为前 "),n("code",null,"i"),s(" 个元素的前缀和.")],-1),h=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> acwing_282 <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> <span class="token number">310</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token class-name">N</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token class-name">BufferedReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 枚举区间长度</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> len <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> len<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 枚举起点</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">+</span> len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 区间终点</span>
                <span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> i<span class="token punctuation">;</span> k <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">+</span> f<span class="token punctuation">[</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区间-dp-通用模板" tabindex="-1"><a class="header-anchor" href="#区间-dp-通用模板" aria-hidden="true">#</a> 区间 DP 通用模板</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>        <span class="token comment">// 枚举区间长度</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> len <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> len<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 枚举起点</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">+</span> len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 区间终点</span>
                <span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token comment">// ...</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(f,g){const p=l("ExternalLinkIcon");return e(),o("div",null,[k,r,d,n("p",null,[n("a",m,[s("石子合并-acwing"),c(p)])]),v,b,h])}const _=t(u,[["render",w],["__file","MergePebbles.html.vue"]]);export{_ as default};
