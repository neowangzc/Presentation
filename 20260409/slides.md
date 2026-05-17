---
theme: seriph
background: https://cover.sli.dev
title: Research Progress & Plan
info: |
  ## Research Progress and Plan
  Cultural fields · Online labor markets · LLM social simulation · Human-Agent HCI
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
duration: 35
---

# Research Progress & Plan

WANG ZHICHAO · D2 · Computational Humanities & Social Sciences

<div class="abs-br m-6 text-xl">
  <carbon:presentation-file />
</div>

<!--
Opening: This talk covers four research lines I am currently pursuing. The first three all have preliminary results; the fourth (the HCI platform) serves as experimental infrastructure for the others and is still under construction.
-->

---
transition: fade-out
layout: center
---

<div class="text-center">
<div class="text-sm uppercase tracking-widest opacity-50 mb-2">Overarching theme</div>
<div class="text-3xl font-light leading-relaxed mb-12">How are <strong>values</strong> and <strong>norms</strong><br/>formed and changed?</div>

<div class="grid grid-cols-2 gap-x-16 gap-y-6 text-left text-lg max-w-xl mx-auto">
  <div class="border-l-3 border-blue-400 pl-4">I. Networks, Status &<br/>Consecration in Cultural Fields</div>
  <div class="border-l-3 border-green-400 pl-4">II. Online Labor Markets</div>
  <div class="border-l-3 border-amber-400 pl-4">III. AI / LLM Behavior &<br/>Social Simulation</div>
  <div class="border-l-3 border-red-400 pl-4">IV. HCI: Human-Agent<br/>Social Platform</div>
</div>
</div>

---

# I. Study 1. Centrality, Closure & Award Nominations

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Core question**  
How does an actor's position in the collaboration network translate into peer recognition (nominations)?

**Theoretical tension**
- Centrality → resource & information access
- Closure → reputation endorsement & trust
- Their relative contribution to consecration

**Progress**
- ✅ Collaboration network built (full sample)
- ✅ Nomination event panel assembled
- ✅ Preliminary model results in hand

</div>

<div>

**Next steps**
- Interactions with era and genre
- Target: cultural sociology
  
</div>
</div>

---

# I. Study 2. Juror Ties & Award Outcomes

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Core question**  
Do pre-existing social ties between actors and jurors increase the probability of nominations and wins?

**Identification**
- Juror rotation as exogenous variation
- Nomination years vs non-nomination years
- Strict controls for work/actor quality

**Progress**
- ✅ Joint juror–actor network constructed
- ✅ Initial regressions show significant network effects

</div>

<div>

**Next steps**
- Dig deeper into the research question

</div>
</div>

---

# I. Study 3. Debut Works & Subsequent Careers

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Core question**  
Do debut-work characteristics (genre, scale, director prestige, collaborators) predict actors' later career trajectories?

**Theoretical lens**
- Path dependence & cumulative advantage
- Long-run effects of early consecration
- "Patron" effect vs individual talent

**Progress**
- ✅ Feature vector of debut works built
- ✅ Preliminary prediction of 5–10 year outcomes

</div>

<div>

**Preliminary findings**
- Box office performance of debut work matters for later career
- Collaborator prestige at debut has a lasting effect

**Next steps**
- Dig deeper into the research question

</div>
</div>

---

# I. Study 4. ML for Box Office & Ratings

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Core question**  
What factors drive a film's commercial performance and its critical/audience reception? Are the drivers the same?

**Method**
- Gradient Boosting / Random Forest
- SHAP for feature importance
- Box office vs ratings contrast

**Progress**
- ✅ Preliminary results complete

</div>

<div>

**Next steps**
- Current results are predictive but lack a sociological explanation — need to anchor findings in theory

</div>
</div>

---

# II. Study 1: Why Do Women Exit Male-Typed Domains?

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Question**  
Why are women underrepresented in male-typed work (especially IT) on online freelance platforms?

**Core finding**

**Asymmetric effect:** Failure *accelerates* women's exit from male-typed domains, while success fails to **proportionally** counteract it.

</div>

<div>

**Progress**
- ✅ One paper published in *proceedings of IEEE Bigdata 2025*
- ✅ Draft complete; to be presented at PAS 2026

**Next steps**
- Collect feedback and submit to a journal

</div>
</div>

---

# II. Study 2: The Reputation Discount in OLMs

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Core finding**

Women face a **reputation discount** in OLMs: at equal experience and ratings, their win rate is systematically lower than men's.

</div>

<div>

**Progress**
- ✅ Draft complete

**Next steps**
- Collect feedback and submit to a journal

</div>
</div>

---

# III. Study 1: Steering Vectors & Norm Compliance

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Question**  
Can activation steering manipulate an LLM's norm-compliance behavior? Specifically, test the effect of:
- normative expectation vectors
- empirical expectation vectors  

on normative decisions.


</div>

<div>

**Progress**

- ✅ Single-scenario steering works: LLM decisions can be manipulated
- ⚠️ Cross-scenario generalization is weak

**Next steps**
- Disentangle norm encoding from scenario-specific features
- Joint multi-scenario training for better generalization
- Cross-model transferability

</div>
</div>

---

# III. Study 2: Extracting Steering Vectors from Human Data

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Question**  
Can we extract steering vectors/fine tuning from human survey data (social-science experiments) and use them to make LLMs reproduce human decision patterns?


</div>

<div>

**Progress**

- ⚠️ Cross-scenario generalization is weak

**Next steps**
- Explore latent space representations for theoretical contribution

</div>
</div>

---

# III. Study 3: Norm Emergence in an AI-Agent Social Platform

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Question**  
When an AI-agent-driven social platform runs over time, how do norms, language, and culture emerge?

</div>

<div>

**Progress**

- ✅ Data collection and preliminary processing complete

**Next steps**
- Time series of text embedding shifts
- Detect critical points of norm formation
- Compare against human social experiments
- Link with Part V (HCI platform): pure-AI → mixed human-agent environment

</div>
</div>

---

# IV. Study 1: Retrofitting a Legacy Platform with LLM Agents

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Goal**  
Integrate LLM agents into an existing social media platform to enable human–agent coexistence and interaction.

**Progress**
- ✅ Legacy platform retrofitted
- ✅ LLM agents successfully integrated and running

</div>

<div>

**Next steps**
- Run first pilot experiments on the retrofitted platform
- IRB approval and user recruitment workflow

</div>
</div>

---

# IV. Study 2: Building a New Human-Agent Social Platform

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Goal**  
Build a new social media platform, designed for human–LLM-agent coexistence as experimental infrastructure for behavioral science and social simulation.

**Progress**
- 🟡 Development in progress

</div>

<div>

**Next steps**
- Finish core interaction modules and observability
- Design the first pilot experiment
- Build the data pipeline into Part III Study 4 (norm emergence)

</div>
</div>

---

# Others

<div class="grid grid-cols-2 gap-8 mt-2">
<div>

**Narrative Tropes**
- Two papers submitted to ACL 2026 and IC2S2

**LLM Simulation**
- Two collaborative papers submitted to ACL 2026 and *Online Social Networks and Media*
- One collaborative paper targeting NeurIPS 2026

</div>

<div>

**Science of Science**
- One collaborative paper submitted to *Scientific Reports*
- Two more papers in early conceptualization

**Recommendation Algorithms**
- One collaborative paper submitted to ACM SIGIR 2026

</div>
</div>

---
layout: default
---

# Timeline & Next Steps

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### Next 1–6 months
Wrap up and submit ongoing work in **Part I** (Cultural Fields) and **Part II** (Online Labor Markets)

</div>

<div>

### Next 1 year
- Focus on **Part III** (AI/LLM Simulation) and **Part IV** (Human-Agent Platform)
- Explore new workflows for social science research with LLMs
- Increase research collaboration and co-authored outputs

</div>
</div>

---
layout: center
class: text-center
---

# Discussion

Feedback welcome

<div class="mt-10 opacity-70">
Thank you
</div>

<div class="abs-br m-6 text-xl opacity-50">
  <carbon:chat />
</div>
