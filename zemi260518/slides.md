---
theme: neversink
title: Success Discounted, Failure Amplified
info: 16-slide academic Slidev deck generated from draft.tex
drawings:
  persist: false
fonts:
  sans: 'Inter, Noto Sans SC, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  serif: 'Noto Serif SC, serif'
  mono: 'Roboto Mono, monospace'
  provider: google
  weights: '300,400,500,600,700,800'
aspectRatio: 16/9
canvasWidth: 1280
transition: slide-left
duration: 20min
color: navy-light
layout: intro
colorSchema: light
css: unocss
mdc: true
mermaid:
  theme: neutral
  themeVariables:
    primaryColor: '#eef2ff'
    primaryTextColor: '#4338ca'
    primaryBorderColor: '#6366f1'
    lineColor: '#6366f1'
    secondaryColor: '#f0f9ff'
    tertiaryColor: '#fff'
---

<style src="./style.css"></style>

<div class="page" style="height:720px;">
  <img src="./tohokuuniversitylogo.png" alt="Tohoku University" style="position:absolute; top:44px; right:58px; height:104px; width:auto;" />
  <div class="kicker">Session: Work and Employment | PAS 2026 Annual Conference</div>
  <div style="position:absolute; left:58px; right:58px; top:228px;">
    <h1 class="claim wide" style="font-size:48px; line-height:1.08; max-width:1080px; margin-top:0; color:#000000;">Winning Doesn’t Fix the Leak</h1>
    <p style="font-size:28px; max-width:980px; margin-top:24px; color:#111827; font-weight:700; line-height:1.35;">Gendered Interpretation of Feedback in Online Labor Markets</p>
    <p style="font-size:22px; max-width:980px; margin-top:34px; color:#111827; font-weight:700; line-height:1.35;">Wang Zhichao, Lyu Zeyu</p>
  </div>
  <div style="position:absolute; left:58px; right:58px; bottom:58px; color:#374151; font-size:22px; line-height:1.35; font-weight:700;">
    Presented by Wang Zhichao<br>
    <span style="font-size:20px; font-weight:600;">PhD student, Graduate School of Letters, Tohoku University</span>
  </div>
</div>

<!--
Good afternoon, everyone. I am Zhichao Wang, a doctoral student at Tohoku University.

The title of today's presentation is "Winning Doesn't Fix the Leak: Gendered Interpretation of Feedback in Online Labor Markets."
-->

---

<div class="page">
  <div class="kicker">INTRODUCTION</div>
  <h2 class="claim wide">The Leaky Pipeline</h2>
  <div class="vertical-pipeline-layout">
    <div class="pipeline-bullets">
      <div v-click="1">Female entry into male-typed works(eg. IT) rises</div>
      <div v-click="2">Female more likely than men to leave male-typed works</div>
      <div v-click="3">Occupational segregation persists</div>
    </div>
    <img class="leaky-pipeline-image" src="./leaky.png" alt="Leaky pipeline diagram" />
  </div>
  <div class="footer"><span></span><span>02</span></div>
</div>

<!--
Over the past two decades, we've seen substantial progress in women's entry into traditionally male-typed fields such as software, data science, and engineering. But entry is only part of the story.

A growing body of research shows that women are also more likely than men to leave these fields after entering them. So even as more women flow into these occupations, women remain underrepresented overall.

This is the phenomenon often described as the "leaky pipeline." Women enter a male-typed domain, but are gradually lost at every stage over time. As we move toward senior positions or long-term career trajectories, very few women remain.

Most prior work focuses on entry and exit. But the process in between — what actually happens inside this leaky pipeline — remains largely unexplored. That's the gap we want to address.
-->

---

<div class="page">
  <div class="kicker">INTRODUCTION</div>
  <h2 class="claim wide">Gendered Interpretation of Employer Feedback</h2>
  <div class="feedback-clean">
    <div class="feedback-event">
<b>Prior outcomes shape what workers do next</b>
<p>Approval or rejection influences where workers apply next.</p>
    </div>
    <div class="feedback-signal-stack">
      <div class="feedback-signal-line" v-click="1">
        <span>01</span>
        <div><b>Ability</b><p>Can I do this job?</p></div>
      </div>
      <div class="feedback-signal-line" v-click="2">
        <span>02</span>
        <div><b>Belonging</b><p>Do I belong in this work?</p></div>
      </div>
    </div>
  </div>
  <div class="feedback-bottom-line" v-click="3">The meaning of success and failure may differ by gender in male-typed work.</div>
  <div class="footer"><span></span><span>03</span></div>
</div>

<!--
There are many possible mechanisms behind this process. In this study, we focus on one in particular: success and failure signals from employers may shape workers' commitment to specific fields by gender.

As we know, prior outcomes guide what we do next. When you apply for a job and you get accepted, or you get rejected, that experience is not just an outcome — it carries information.

These signals tell us two things: "Can I actually do this job?" and "Do I belong in this kind of work?" Together, they shape where you apply next.

We argue that the meaning of success and failure may differ by gender in male-typed work. A man and a woman who receive the same rejection from an IT project are not hearing the same thing. The man hears: "I lost this one." The woman may hear: "This is not a place for me." The same feedback, two different interpretations. That is the mechanism we want to test.
-->

---

<div class="page">
  <div class="kicker">INTRODUCTION</div>
  <h2 class="claim wide">How Online Labor Markets Work</h2>
  <div class="olms-flow-layout">
    <div class="olms-steps">
      <div class="olms-step-wrap">
        <div class="olms-step olms-step-base">
          <span>01</span>
          <b>Employer posts a project</b>
        </div>
        <div class="olms-step olms-step-active" v-click="1">
          <span>01</span>
          <b>Employer posts a project</b>
        </div>
      </div>
      <div class="olms-connector"></div>
      <div class="olms-step-wrap">
        <div class="olms-step olms-step-base">
          <span>02</span>
          <b>Freelancers bid</b>
        </div>
        <div class="olms-step olms-step-active" v-click="2">
          <span>02</span>
          <b>Freelancers bid</b>
        </div>
      </div>
      <div class="olms-connector"></div>
      <div class="olms-step-wrap">
        <div class="olms-step olms-step-base">
          <span>03</span>
          <b>Employer selects one</b>
        </div>
        <div class="olms-step olms-step-active" v-click="3">
          <span>03</span>
          <b>Employer selects one</b>
        </div>
      </div>
    </div>
    <div class="olms-shot-stage">
      <div class="olms-shot olms-shot-default">
        <img class="olms-default-image" src="./freelancer.png" alt="Freelancer.com overview" />
      </div>
      <div class="olms-shot olms-shot-main" v-click="1">
        <div class="mock-browser">
          <div class="mock-topbar">
            <span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span>
            <b>Online Labor Market</b>
            <em>Synthetic example</em>
          </div>
          <div class="mock-panel mock-project">
            <div class="mock-section-title">Project brief</div>
            <h3>Build a personal website</h3>
            <div class="mock-meta-row">
              <span>Category: IT & Software</span>
              <span>Budget: $500-750</span>
            </div>
            <p>Build a personal academic homepage for me</p>
            <div class="mock-skill-row">
              <span>CSS</span><span>Database</span><span>UI</span><span>API</span>
            </div>
          </div>
          <div class="mock-grid">
            <div class="mock-card"><b>Posted</b><span>10 minutes ago</span></div>
            <div class="mock-card"><b>Open</b><span>Accepting bids</span></div>
            <div class="mock-card"><b>Bidding ends in</b><span> 6 days</span></div>
          </div>
        </div>
      </div>
      <div class="olms-shot olms-shot-main" v-click="2">
        <div class="mock-browser">
          <div class="mock-topbar">
            <span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span>
            <b>Online Labor Market</b>
            <em>Synthetic example</em>
          </div>
          <div class="mock-bid-layout">
            <div class="mock-bid-form">
              <div class="mock-section-title">Submit bid</div>
              <h3>Apply for the project</h3>
              <div class="mock-input-row"><span>Bid amount</span><b>$640</b></div>
              <div class="mock-input-row"><span>Delivery time</span><b>14 days</b></div>
              <div class="mock-textarea">I can build the website in 1 day.</div>
            </div>
            <div class="mock-proposals">
              <div class="mock-proposal"><twemoji-man-technologist class="proposal-avatar"/><span>Worker A</span><b>$620</b></div>
              <div class="mock-proposal marked"><twemoji-woman-technologist class="proposal-avatar"/><span>Worker B</span><b>$640</b></div>
              <div class="mock-proposal"><twemoji-man-technologist class="proposal-avatar"/><span>Worker C</span><b>$700</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="olms-shot olms-shot-main" v-click="3">
        <div class="mock-browser">
          <div class="mock-topbar">
            <span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span>
            <b>Online Labor Market</b>
            <em>Synthetic example</em>
          </div>
          <div class="mock-outcome">
            <div>
              <div class="mock-section-title">Selection outcome</div>
              <p>Employer selects one workers from all participants</p>
            </div>
            <div class="mock-winner-card">
              <b>Worker B</b>
              <em>Contract awarded</em>
            </div>
          </div>
          <div class="mock-result-list">
            <div class="mock-result selected"><span>Worker B</span><b>Approved</b></div>
            <div class="mock-result"><span>Worker A</span><b>Rejected</b></div>
            <div class="mock-result"><span>Worker C</span><b>Rejected</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer"><span></span><span>04</span></div>
</div>

<!--
Online labor markets give us a suitable setting for our research. These are digital platforms that connect employers with remote workers to complete short-term projects over the internet. Let me briefly introduce how this market works.

First, an employer posts a project on platform. In this example, the employer is looking for someone to build a personal homepage. They specify a budget, choose a project category — here, IT and Software — and list the required skills.

Next, freelancers from around the world submit bids. Each bid includes a proposed price, delivery time, and a short self-introduction. Through a freelancer's profile, we can get basic information about the worker, such as their name, gender, or race.
In this example, we see two male workers and one female worker bidding for the same project.

Finally, the employer selects one worker from the pool of bidders. The selected worker wins the contract, while the others are rejected. Every bidder can observe this outcome,so each bid generates a feedback signal for workers.

On the platform, workers bid for projects constantly, and every bid produces a visible outcome. We can observe the full history for each worker across their entire trajectory on the platform.
-->

---

<div class="page">
  <div class="kicker">Motivation</div>
  <h2 class="claim wide">Research Gap.</h2>
  <div class="gap-rq-grid">
    <div class="gap-col" v-click="1">
      <div class="gap-card">
        <div class="gap-eyebrow">Gap 1</div>
        <p>Asked only whether rejected workers <b>reapply to the same employer</b> 
        </p>
      </div>
      <div class="gap-arrow">→</div>
      <div class="gap-q">
        <div class="q-label">Q1</div>
        <p>Do men and women differ in how feedback shapes whether they stay in or reallocate away from a specific domain?</p>
      </div>
    </div>
    <div class="gap-col" v-click="2">
      <div class="gap-card">
        <div class="gap-eyebrow">Gap 2</div>
        <p>Treated job domains as uniform — ignoring that domains are <b>gender-typed differently</b></p>
      </div>
      <div class="gap-arrow">→</div>
      <div class="gap-q">
        <div class="q-label">Q2</div>
        <p>Does this response depend on the work type — the domain's gender-typing?</p>
      </div>
    </div>
  </div>
  <div class="footer"><span class="panel-footnote"></span><span>05</span></div>
</div>

<!--

Prior research mainly focus on how a rejected worker reapplies to the same employer. That's useful, but it misses the job domains. So our first question is: do men and women differ in how feedback shapes whether they stay in, or move away from, a specific domain?

Second, most of this work has treated job domains as if they were uniform. But domains are gender-typed — some coded male, some female — and the same feedback may mean very different things depending on where you stand. That's our second question.
-->

---

<div class="page">
  <div class="kicker">THEORY</div>
  <h2 class="claim wide">Female Workers in Male-Typed Work</h2>
  <div class="theory-three-bullets">
    <div class="theory-bullet" v-click="1">
      <div>
        <b>Bias awareness</b>
        <p>Women know employers tend to undervalue them in male-typed works.</p>
      </div>
    </div>
    <div class="theory-bullet" v-click="2">
      <div>
        <b>Lower self-assessment</b>
        <p>Cultural beliefs tie technical competence more strongly to men than women.</p>
      </div>
    </div>
    <div class="theory-bullet" v-click="3">
      <div>
        <b>Token position</b>
        <p>As minorities in male-typed works, each success reads as exception, not evidence of fit.</p>
      </div>
    </div>
  </div>
  <div class="footer"><span></span><span>06</span></div>
</div>

<!--
Based on these two questions, we reviewed the research on women in male-typed work, and found some mechanisms.

Women in male-typed work know employers tend to undervalue them. Every rejection is read against that background.

Cultural beliefs connect technical competence more strongly to men. Women walk in with a lower prior on themselves.

As women are a minority in male-typed work, each success is read as an exception — not as evidence they belong.
-->

---

<div class="page">
  <div class="kicker">Hypotheses</div>
  <h2 class="claim">In male-typed work, feedback acts asymmetrically.</h2>
  <div class="hypotheses">
    <div class="hypo" v-click="1"><div class="tag">H1</div><div class="text">Discounted Success:<br>Wins anchor women to IT less than they anchor men.</div><div class="expect"></div></div>
    <div class="hypo" v-click="2"><div class="tag">H2</div><div class="text">Amplified Failure:<br>Losses push women out of IT faster than they push men.</div><div class="expect"></div></div>
    <div class="hypo" v-click="3"><div class="tag">H3</div><div class="text">The feedback asymmetry appears only where women are underrepresented.</div><div class="expect"></div></div>
  </div>
  <div class="footer"><span></span><span>07</span></div>
</div>

<!--
Thus, we propose three hypotheses.

H1 — Discounted Success. In male-typed work, wins anchor women less than they anchor men. Even when a woman wins a male-typed project, that win does not pull her further into the field.

H2 — Amplified Failure. Losses push women out of male-typed work faster than they push men.

H3 — Domain Specificity. This feedback asymmetry should appear only where women are underrepresented — that is, only in male-typed work.
-->

---

<div class="page">
  <div class="kicker">Data And Methods</div>
  <h2 class="claim wide">Data overviews</h2>
  <p class="data-overview-copy">We collected Freelancer.com data from 2000 to 2017 and track each worker over their first two years on the platform<sup>1</sup>.</p>
  <div class="setting-metrics">
    <div class="setting-metric"><b>446K</b><span>workers</span></div>
    <div class="setting-metric"><b>455K</b><span>projects</span></div>
    <div class="setting-metric"><b>3.16M</b><span>bids</span></div>
  </div>
  <div class="setting-domain-grid">
    <div class="setting-domain-card" v-click="1">
      <div class="domain-role">Male-typed work</div>
      <h3>IT &amp; Programming Starters</h3>
      <div class="female-share"><b style="color:#2563eb; font-size:60px;">11.7%</b><span>female</span></div>
    </div>
    <div class="setting-domain-card" v-click="2">
      <div class="domain-role">Female-typed work</div>
      <h3>Writing &amp; Translation Starters</h3>
      <div class="female-share"><b style="color:#dc2626; font-size:60px;">44.9%</b><span>female</span></div>
    </div>
  </div>
  <div class="footer"><span class="panel-footnote">[1] Most freelancers leave the platform within 1.7 years, average work activity lasts about 28 weeks.</span><span>08</span></div>
</div>

<!--
We collected data from Freelancer.com, one of the largest online labor markets in the world. For each worker, we track the first two years of their platform career.

We focus on workers whose platform career began in one of the two most representative domains, and examine their commitment to the starting domain by gender. IT and Programming is our male-typed domain — its female share is the lowest on the platform, at 11.7%. Writing and Translation is our female-typed counterpart, where the female share is nearly balanced, at 44.9%.
-->

---

<div class="page">
  <div class="kicker">Data And Methods</div>
  <h2 class="panel-clean-title">Panel Structure</h2>
  <div class="panel-clean-canvas">
    <div class="panel-clean-zone feedback" v-click="1">
      <div class="zone-eyebrow">Input</div>
      <h3>Feedback accumulated from w₁ to wₜ</h3>
      <div class="zone-pills">
        <div class="metric-chip"><b>Cumulative wins (log)</b><em>prior accepted bids</em></div>
        <div class="metric-chip"><b>Failure rate</b><em>prior rejected bids/all bids</em></div>
        <div class="metric-chip"><b>Cumulative wins × Female</b><em>gender interaction</em></div>
        <div class="metric-chip"><b>Failure rate × Female</b><em>gender interaction</em></div>
      </div>
    </div>
    <div class="panel-clean-arrow" v-click="2">
      <span>predict</span>
      <i></i>
    </div>
    <div class="panel-clean-zone outcome" v-click="3">
      <div class="zone-eyebrow">Output</div>
      <h3>Outcome at window wₜ₊₁</h3>
      <div class="zone-pills outcome-grid">
<div class="metric-chip"><b>Total bids</b><em>overall activity</em></div>
<div class="metric-chip"><b>Domain share</b><em>% of bids in IT</em></div>
<div class="metric-chip"><b>First outside bid</b><em>onset of exploration</em></div>
<div class="metric-chip"><b>Domain exit</b><em>stops bidding in IT</em></div>
      </div>
    </div>
    <svg class="panel-clean-axis" viewBox="0 0 1100 170" role="img" aria-label="Biweekly panel windows from w1 to w t plus one">
      <g class="clean-axis-zone feedback" v-click="1">
        <rect x="36" y="38" width="800" height="96" rx="8"></rect>
      </g>
      <g class="clean-axis-zone outcome" v-click="3">
        <rect x="880" y="38" width="158" height="96" rx="8"></rect>
      </g>
      <line class="clean-axis-line" x1="52" y1="96" x2="1048" y2="96"></line>
      <g class="clean-window"><rect x="52" y="78" width="118" height="36" rx="8"></rect><text x="111" y="101">w₁</text></g>
      <g class="clean-window"><rect x="218" y="78" width="118" height="36" rx="8"></rect><text x="277" y="101">w₂</text></g>
      <g class="clean-window"><rect x="384" y="78" width="118" height="36" rx="8"></rect><text x="443" y="101">w₃</text></g>
      <text class="clean-ellipsis" x="566" y="103">...</text>
      <g class="clean-window emphasized feedback"><rect x="690" y="76" width="132" height="40" rx="9"></rect><text x="756" y="102">wₜ</text></g>
      <g class="clean-window emphasized outcome"><rect x="895" y="76" width="132" height="40" rx="9"></rect><text x="961" y="102">wₜ₊₁</text></g>
    </svg>
    <div class="panel-window-note">We partition each worker’s bidding history into consecutive biweekly windows<sup>1</sup> to construct a panel dataset.</div>
  </div>
  <div class="footer"><span class="panel-footnote">[1] We use biweekly windows because they are long enough to capture a typical posting-and-feedback cycle in Freelancer.com.</span><span>09</span></div>
</div>

<!--
We partition each worker's bidding history into biweekly windows.

For each window, we measure the feedback the worker has accumulated up to that point. Specifically: cumulative wins — how many prior bids were accepted; failure rate — the share of prior rejected bids; and both of these interacted with a female indicator, which is what lets us test gender differences.

These cumulative feedback measures are then used to predict outcomes in the next window. We look at four outcomes: how active the worker is;  how concentrated their effort is in the starting domain; when, for the first time, the worker places a bid outside their starting domain; and  whether the worker stops bidding in IT altogether.
-->

---

<div class="page">
  <div class="kicker">Result | H1 </div>
  <h2 class="claim wide">Wins anchor women less.</h2>
  <div class="success-results-grid">
    <div></div>
    <div class="success-head"><b>Main effect of Wins</b></div>
    <div class="success-head"><b>Female × Wins</b><span>gender additional effect</span></div>
    <div class="success-dv">Total bids</div>
    <div class="success-effect positive">
      <div class="effect-line"><span class="coef">+0.24***</span></div>
      <p>wins increase activity</p>
    </div>
    <div class="success-effect positive">
      <div class="effect-line"><span class="coef">+0.68**</span></div>
      <p>women are more encouraged</p>
    </div>
    <div class="success-dv">IT share</div>
    <div class="success-effect positive">
      <div class="effect-line"><span class="coef">+0.09***</span></div>
      <p>wins anchor workers to IT</p>
    </div>
    <div class="success-effect negative">
      <div class="effect-line"><span class="coef">−0.02***</span></div>
      <p>women are anchored less</p>
    </div>
    <div class="success-dv">First outside</div>
    <div class="success-effect negative">
      <div class="effect-line"><span class="coef">−0.04***</span></div>
      <p>wins delay outside exploration</p>
    </div>
    <div class="success-effect positive">
      <div class="effect-line"><span class="coef">+0.06***</span></div>
      <p>that protection fades for women</p>
    </div>
    <div class="success-dv">Domain exit</div>
    <div class="success-effect negative">
      <div class="effect-line"><span class="coef">−0.05***</span></div>
      <p>wins prevent exit IT works</p>
    </div>
    <div class="success-effect negative">
      <div class="effect-line"><span class="coef">−0.01**</span></div>
      <p>slightly stronger for women</p>
    </div>
  </div>
  <div class="footer"><span class="panel-footnote">Note: + P &lt; .10, * P &lt; .05, ** P &lt; .01, *** P &lt; .001. All models include individual fixed effects; standard errors in parentheses are clustered at the individual level.</span><span>10</span></div>
</div>

<!--
We regressed each of the four outcomes on cumulative wins and its interaction with the female indicator.

We found that
Wins engage women on the platform overall — they bid more, they stay longer. But on the domain outcomes, wins don't anchor women into IT the way they anchor men, and they don't slow women's move out of IT.

The overall pattern is consistent with H1: women's wins translate into general activity, but the anchoring effect of success is weaker for women than for men.
-->

---

<div class="page">
  <div class="kicker">Result | H2</div>
  <h2 class="claim wide">Failures push women out faster.</h2>
  <div class="success-results-grid">
    <div></div>
    <div class="success-head"><b>Main effect of Failure</b></div>
    <div class="success-head"><b>Female × Failure</b><span>gender additional effect</span></div>
    <div class="success-dv">Total bids</div>
    <div class="success-effect negative">
      <div class="effect-line"><span class="coef">−1.17***</span></div>
      <p>failure reduces activity</p>
    </div>
    <div class="success-effect nonsig">
      <div class="effect-line"><span class="coef">+0.06</span></div>
      <p>women do not differ</p>
    </div>
    <div class="success-dv">IT share</div>
    <div class="success-effect negative">
      <div class="effect-line"><span class="coef">−0.18***</span></div>
      <p>failure pushes workers out of IT</p>
    </div>
    <div class="success-effect negative">
      <div class="effect-line"><span class="coef">−0.09***</span></div>
      <p>women are pushed out faster</p>
    </div>
    <div class="success-dv">First outside</div>
    <div class="success-effect positive">
      <div class="effect-line"><span class="coef">+0.08***</span></div>
      <p>failure accelerates outside exploration</p>
    </div>
    <div class="success-effect positive">
      <div class="effect-line"><span class="coef">+0.06***</span></div>
      <p>women explore outside faster</p>
    </div>
    <div class="success-dv">Domain exit</div>
    <div class="success-effect positive">
      <div class="effect-line"><span class="coef">+0.12***</span></div>
      <p>failure pushes workers toward exit</p>
    </div>
    <div class="success-effect positive">
      <div class="effect-line"><span class="coef">+0.02***</span></div>
      <p>women are more likely to exit</p>
    </div>
  </div>
  <div class="footer"><span class="panel-footnote">Note: + P &lt; .10, * P &lt; .05, ** P &lt; .01, *** P &lt; .001. All models include individual fixed effects; standard errors in parentheses are clustered at the individual level.</span><span>11</span></div>
</div>

<!--
Similarly, on the failure side: we find failure reduces activity for everyone equally.

But on the domain outcomes, failure pushes women out of IT faster than men — they move outside sooner, their IT share drops more steeply, and they exit IT more readily.

That is consistent with H2: failure has a stronger effect on leaving IT for women than for men.
-->

---

<div class="page">
  <div class="kicker">Result | H3</div>
  <h2 class="claim wide">The feedback asymmetry is domain-specific.</h2>
  <div class="domain-results-grid">
    <div></div>
    <div></div>
    <div class="domain-head"><b>IT</b></div>
    <div class="domain-head"><b>Writing</b></div>
    <div class="domain-group" style="grid-row: span 3;">Female × Wins</div>
    <div class="domain-outcome">Domain share</div>
    <div class="domain-coef negative">−0.020***</div>
    <div class="domain-coef nonsig">+0.006 n.s.</div>
    <div class="domain-outcome">First outside</div>
    <div class="domain-coef positive">+0.056***</div>
    <div class="domain-coef negative">−0.018**</div>
    <div class="domain-outcome">Domain exit</div>
    <div class="domain-coef negative">−0.009**</div>
    <div class="domain-coef positive">+0.008**</div>
    <div class="domain-group" style="grid-row: span 3;">Female × Failure</div>
    <div class="domain-outcome">Domain share</div>
    <div class="domain-coef negative">−0.086***</div>
    <div class="domain-coef positive">+0.094***</div>
    <div class="domain-outcome">First outside</div>
    <div class="domain-coef positive">+0.061***</div>
    <div class="domain-coef negative">−0.018***</div>
    <div class="domain-outcome">Domain exit</div>
    <div class="domain-coef positive">+0.017***</div>
    <div class="domain-coef nonsig">+0.006 n.s.</div>
  </div>
  <div class="domain-takeaway">The Writing comparison does not show the same female penalty observed in IT. Instead, the interactions are either statistically null or run in the opposite direction</div>
  <div class="footer"><span class="panel-footnote">Note: + P &lt; .10, * P &lt; .05, ** P &lt; .01, *** P &lt; .001. All models include individual fixed effects; standard errors in parentheses are clustered at the individual level.</span><span>12</span></div>
</div>

<!--
Finally, we tested whether this gender difference in feedback response is something that shows up everywhere, or is concentrated in gender-specific work.

We rerun the same models on Writing and Translation, and we found that the penalty on women we saw in IT doesn't appear in Writing.

It appears only where women are underrepresented — that is, only in male-typed work. This supports H3.
-->

---

<div class="page">
  <div class="kicker">Contribution And Discussion</div>
  <h2 class="claim wide">Contribution and Discussion</h2>
  <div class="closing">
    <div class="questions" v-click="1">
      <div><b>Theoretical contribution:</b> shifts attention from entry barriers to the leak pipeline.</div>
      <div><b>Empirical contribution:</b> shows that gendered interpretation of feedback is asymmetric in OLMs.</div>
    </div>
    <div v-click="2">
      <div class="quote">Addressing occupational segregation calls for attention not only to entry opportunities, but also to the conditions that sustain women's presence and support their advancement.</div>
    </div>
  </div>
  <div class="footer"><span>Closing slide</span><span>13</span></div>
</div>

<!--
In this study, we shift attention away from the entry barrier toward the leak inside the pipeline. And we show that gendered interpretation of feedback in online labor markets is asymmetric — women's wins are discounted, losses are amplified — and this asymmetry appears only where women are underrepresented.

Getting more women into male-typed work is necessary, but not sufficient. We also have to make sure that, once they are there, every win counts, and every loss is just a loss — not a judgment on whether they belong.
-->

---

<div class="page" style="height:720px;">
  <div class="kicker">Thank You</div>
  <div style="position:absolute; left:58px; right:58px; top:248px;">
    <h1 class="claim wide" style="font-size:56px; line-height:1.08; max-width:1080px; margin-top:0; color:#000000;">Thank you!</h1>
    <p style="font-size:26px; max-width:980px; margin-top:28px; color:#111827; font-weight:700; line-height:1.35;">Questions and comments are very welcome.</p>
  </div>
  <div style="position:absolute; left:58px; right:58px; bottom:58px; color:#374151; font-size:22px; line-height:1.35; font-weight:700;">
    Wang Zhichao, Lyu Zeyu<br>
    <span style="font-size:20px; font-weight:600;">Graduate School of Letters, Tohoku University</span>
  </div>
  <div class="footer"><span>Thank you</span><span>14</span></div>
</div>

<!--
Thank you for listening. I'd be very happy to take your questions.
-->

