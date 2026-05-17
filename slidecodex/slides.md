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
              <div class="mock-proposal"><i></i><span>Worker A</span><b>$620</b></div>
              <div class="mock-proposal marked"><i></i><span>Worker B</span><b>$640</b></div>
              <div class="mock-proposal"><i></i><span>Worker C</span><b>$700</b></div>
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

---

<div class="page">
  <div class="kicker">INTRODUCTION</div>
  <h2 class="claim wide">Online labor markets make the leakage observable.</h2>
  <div class="need-provide-table">
    <div class="need-provide-head">What we need to observe</div>
    <div class="need-provide-head">What OLMs provide</div>
    <div class="need-provide-cell">Cumulative win/loss</div>
    <div class="need-provide-cell">High-frequency bidding</div>
    <div class="need-provide-cell">Shifts across works</div>
    <div class="need-provide-cell">12 categories free movement</div>
    <div class="need-provide-cell">Long-run effects</div>
    <div class="need-provide-cell">Full platform trajectory</div>
  </div>
  <div class="footer"><span></span><span>05</span></div>
</div>

---

<div class="page">
  <div class="kicker">Research Question</div>
  <h2 class="claim wide">Research Question</h2>
  <div class="research-questions">
    <div class="rq-card" v-click="1">
      <div class="rq-label">Q1</div>
      <p>Do men and women respond to feedback differently?</p>
    </div>
    <div class="rq-card" v-click="2">
      <div class="rq-label">Q2</div>
      <p>Does the response depend on the work type?</p>
    </div>
  </div>
  <div class="footer"><span></span><span>06</span></div>
</div>

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
  <div class="footer"><span></span><span>07</span></div>
</div>

---

<div class="page">
  <div class="kicker">Hypotheses</div>
  <h2 class="claim">In male-typed work, feedback acts asymmetrically.</h2>
  <div class="hypotheses">
    <div class="hypo" v-click="1"><div class="tag">H1</div><div class="text">Discounted Success:<br>Wins anchor women to IT less than they anchor men.</div><div class="expect"></div></div>
    <div class="hypo" v-click="2"><div class="tag">H2</div><div class="text">Amplified Failure:<br>Losses push women out of IT faster than they push men.</div><div class="expect"></div></div>
    <div class="hypo" v-click="3"><div class="tag">H3</div><div class="text">The feedback asymmetry appears only where women are underrepresented.</div><div class="expect"></div></div>
  </div>
  <div class="footer"><span></span><span>08</span></div>
</div>

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
      <h3>IT &amp; Programming</h3>
      <div class="female-share"><b style="color:#2563eb; font-size:60px;">11.7%</b><span>female</span></div>
    </div>
    <div class="setting-domain-card" v-click="2">
      <div class="domain-role">Female-typed work</div>
      <h3>Writing &amp; Translation</h3>
      <div class="female-share"><b style="color:#dc2626; font-size:60px;">44.9%</b><span>female</span></div>
    </div>
  </div>
  <div class="footer"><span class="panel-footnote">[1] Most freelancers leave the platform within 1.7 years, average work activity lasts about 28 weeks.</span><span>09</span></div>
</div>

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
  <div class="footer"><span class="panel-footnote">[1] We use biweekly windows because they are long enough to capture a typical posting-and-feedback cycle in Freelancer.com.</span><span>10</span></div>
</div>



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
  <div class="footer"><span class="panel-footnote">Note: + P &lt; .10, * P &lt; .05, ** P &lt; .01, *** P &lt; .001. All models include individual fixed effects; standard errors in parentheses are clustered at the individual level.</span><span>11</span></div>
</div>

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
  <div class="footer"><span class="panel-footnote">Note: + P &lt; .10, * P &lt; .05, ** P &lt; .01, *** P &lt; .001. All models include individual fixed effects; standard errors in parentheses are clustered at the individual level.</span><span>12</span></div>
</div>

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
  <div class="footer"><span class="panel-footnote">Note: + P &lt; .10, * P &lt; .05, ** P &lt; .01, *** P &lt; .001. All models include individual fixed effects; standard errors in parentheses are clustered at the individual level.</span><span>13</span></div>
</div>



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
  <div class="footer"><span>Closing slide</span><span>15</span></div>
</div>
