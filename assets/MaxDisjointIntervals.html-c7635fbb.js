import{_ as c,V as l,W as i,X as n,Y as s,Z as a,a0 as p,$ as u,F as e}from"./framework-c6791857.js";const r="/assets/acwing_908-96c7f531.png",k={},d=n("h1",{id:"最大不相交区间数量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最大不相交区间数量","aria-hidden":"true"},"#"),s(" 最大不相交区间数量")],-1),m=n("h2",{id:"例题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#例题","aria-hidden":"true"},"#"),s(" 例题")],-1),v={href:"https://www.acwing.com/problem/content/910/",target:"_blank",rel:"noopener noreferrer"},b=n("figure",null,[n("img",{src:r,alt:"最大不相交区间数量-acwing",tabindex:"0",loading:"lazy"}),n("figcaption",null,"最大不相交区间数量-acwing")],-1),_=n("h3",{id:"分析",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分析","aria-hidden":"true"},"#"),s(" 分析")],-1),w=n("p",null,"同样的, 我们先将所有区间按照右端点大小从小到大排序. 从右端点最小的区间开始选取, 如果下一个区间包含了当前选取区间的右端点, 就跳过; 如果不包含, 就选取.",-1),y=n("p",null,[s("证明: 设最大不相交区间数量为 "),n("code",null,"max"),s(", 我们选择的数量为 "),n("code",null,"cnt"),s(", 只需要证明 "),n("code",null,"max >= cnt && max <= cnt"),s(" 即可.")],-1),h=n("li",null,[n("code",null,"max >= cnt"),s(": "),n("code",null,"cnt"),s(" 是不相交区间的一种选法, "),n("code",null,"max"),s(" 是不相交区间选法中的最大值, "),n("code",null,"max >= cnt"),s(".")],-1),f=n("code",null,"max <= cnt",-1),g=n("code",null,"cnt",-1),x=n("code",null,"cnt",-1),I=n("code",null,"ans",-1),E=n("code",null,"max <= cnt",-1),j=u(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> acwing_905 <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token class-name">BufferedReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">;</span>

    <span class="token keyword">record</span> <span class="token class-name">Entry</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Entry</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Entry</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> o<span class="token punctuation">.</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span> e <span class="token operator">:</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">&gt;=</span> e<span class="token punctuation">.</span>l<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>

            r <span class="token operator">=</span> e<span class="token punctuation">.</span>r<span class="token punctuation">;</span>
            cnt<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cnt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function L(S,V){const o=e("ExternalLinkIcon"),t=e("RouterLink");return l(),i("div",null,[d,m,n("p",null,[n("a",v,[s("最大不相交区间数量-acwing"),a(o)])]),b,_,w,n("blockquote",null,[y,n("ol",null,[h,n("li",null,[f,s(": 使用反证法, 假设 "),g,s(" 不是最佳选法, 那么还有至少一个区间可以选择. 也就是说, 如果要选取点来覆盖整个区间, "),x,s(" 个区间不足以覆盖掉, 但是我们根据上一题("),a(t,{to:"/posts/Algorithm/Template/Greedy/MaxDisjointIntervals.html"},{default:p(()=>[s("区间合并")]),_:1}),s(")的情况, "),I,s(" 个点即可覆盖. 所以, "),E,s(".")])])]),j,n("p",null,[s("最后我们发现, 本题代码与("),a(t,{to:"/posts/Algorithm/Template/Greedy/MaxDisjointIntervals.html"},{default:p(()=>[s("区间合并")]),_:1}),s(")的代码完全相同, 可以思考一下原因(选点覆盖与分割?).")])])}const M=c(k,[["render",L],["__file","MaxDisjointIntervals.html.vue"]]);export{M as default};