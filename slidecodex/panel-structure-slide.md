---
layout: default
title: Panel structure
---

<style>
/* Self-contained Slidev panel slide. Tune the variables below for colors/timing. */
.panel-slide {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 46px 58px 38px;
  background: #ffffff;
  color: #1f2937;
  font-family: "Avenir Next", "Inter", "Segoe UI", sans-serif;
  overflow: hidden;
}

.panel-title {
  margin: 0;
  max-width: 1080px;
  font-size: 34px;
  line-height: 1.18;
  font-weight: 800;
  letter-spacing: 0;
}

.panel-canvas {
  position: absolute;
  left: 58px;
  right: 58px;
  top: 156px;
  height: 470px;
}

.panel-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
  font-family: "Avenir Next", "Inter", "Segoe UI", sans-serif;
}

/* Slidev v-click animation. Change duration here if you want faster/slower reveals. */
.panel-reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 280ms ease, transform 280ms ease;
}

.panel-reveal.slidev-vclick-hidden {
  opacity: 0;
  transform: translateY(8px);
}

/* Shaded regions: blue=input feedback; orange=output outcome. */
.panel-zone {
  stroke-width: 1.5;
}

.panel-feedback-zone {
  fill: #dbeafe;
  stroke: #2563eb;
  opacity: 0.74;
}

.panel-outcome-zone {
  fill: #fed7aa;
  stroke: #ea580c;
  opacity: 0.82;
}

.panel-zone-label {
  font-size: 19px;
  font-weight: 800;
}

.panel-feedback-text,
.panel-callout.feedback {
  fill: #2563eb;
}

.panel-outcome-text,
.panel-callout.outcome {
  fill: #ea580c;
}

.panel-axis {
  stroke: #6b7280;
  stroke-width: 3;
  stroke-linecap: round;
}

.panel-marker circle {
  fill: #ffffff;
  stroke: #6b7280;
  stroke-width: 3;
}

.panel-marker text {
  fill: #4b5563;
  font-size: 20px;
  font-weight: 700;
}

.panel-marker.emphasized circle {
  fill: #ffffff;
  stroke: #111827;
  stroke-width: 4;
}

.panel-marker.emphasized text {
  fill: #111827;
  font-size: 25px;
  font-weight: 900;
}

.panel-marker.outcome circle {
  stroke: #ea580c;
}

.panel-marker.continuation text {
  fill: #6b7280;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 4px;
}

.panel-callout-line {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.panel-callout-line.feedback {
  stroke: #2563eb;
}

.panel-callout-line.outcome {
  stroke: #ea580c;
}

.panel-callout {
  font-size: 16px;
  font-weight: 800;
}

.panel-predict-arrow {
  fill: none;
  stroke: #374151;
  stroke-width: 3;
  stroke-linecap: round;
  marker-end: url(#panel-standalone-arrow);
}

.panel-predict-label {
  fill: #374151;
  font-size: 19px;
  font-style: italic;
  font-weight: 800;
}

.panel-fe-note {
  text-anchor: middle;
  fill: #1f2937;
  font-size: 24px;
  font-weight: 800;
}
</style>

<div class="panel-slide">
  <h1 class="panel-title">Panel structure: predicting next-window behavior from accumulated feedback</h1>
  <div class="panel-canvas">
    <svg class="panel-svg" viewBox="0 0 1164 430" role="img" aria-label="Longitudinal panel structure showing feedback accumulated up to window w t predicting outcome at window w t plus one">
      <defs>
        <marker id="panel-standalone-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#374151"></path>
        </marker>
      </defs>
      <g class="panel-reveal" v-click="1">
        <rect class="panel-zone panel-feedback-zone" x="70" y="166" width="710" height="148" rx="6"></rect>
        <text class="panel-zone-label panel-feedback-text" x="260" y="150">Feedback accumulated up to wₜ</text>
        <path class="panel-callout-line feedback" d="M 735 270 L 620 86"></path>
        <path class="panel-callout-line feedback" d="M 735 270 L 620 128"></path>
        <text class="panel-callout feedback" x="632" y="91">Cumulative wins (log)</text>
        <text class="panel-callout feedback" x="632" y="133">Cumulative failure rate</text>
      </g>
      <g class="panel-reveal" v-click="3">
        <rect class="panel-zone panel-outcome-zone" x="905" y="166" width="170" height="148" rx="6"></rect>
        <text class="panel-zone-label panel-outcome-text" x="914" y="206">Outcome at wₜ₊₁</text>
        <path class="panel-callout-line outcome" d="M 950 270 L 976 58 L 1002 58"></path>
        <path class="panel-callout-line outcome" d="M 950 270 L 976 92 L 1002 92"></path>
        <path class="panel-callout-line outcome" d="M 950 270 L 976 126 L 1002 126"></path>
        <path class="panel-callout-line outcome" d="M 950 270 L 976 160 L 1002 160"></path>
        <text class="panel-callout outcome" x="1014" y="63">Total bids</text>
        <text class="panel-callout outcome" x="1014" y="97">Domain share</text>
        <text class="panel-callout outcome" x="1014" y="131">First outside bid</text>
        <text class="panel-callout outcome" x="1014" y="165">Exit</text>
      </g>
      <line class="panel-axis" x1="70" y1="270" x2="1076" y2="270"></line>
      <g class="panel-marker"><circle cx="90" cy="270" r="8"></circle><text x="78" y="308">w₁</text></g>
      <g class="panel-marker"><circle cx="250" cy="270" r="8"></circle><text x="238" y="308">w₂</text></g>
      <g class="panel-marker"><circle cx="410" cy="270" r="8"></circle><text x="398" y="308">w₃</text></g>
      <g class="panel-marker continuation"><text x="558" y="276">...</text></g>
      <g class="panel-marker emphasized"><circle cx="735" cy="270" r="11"></circle><text x="718" y="313">wₜ</text></g>
      <g class="panel-marker emphasized outcome"><circle cx="950" cy="270" r="11"></circle><text x="922" y="313">wₜ₊₁</text></g>
      <g class="panel-reveal" v-click="2">
        <path class="panel-predict-arrow" d="M 760 270 C 815 238, 885 238, 934 270"></path>
        <text class="panel-predict-label" x="835" y="238">predict</text>
      </g>
      <g class="panel-reveal" v-click="4">
        <text class="panel-fe-note" x="582" y="382">Past feedback → future behavior (within-worker variation)</text>
      </g>
    </svg>
  </div>
</div>
