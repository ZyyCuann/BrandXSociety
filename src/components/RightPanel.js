export function createRightPanel({ currentStep, activeTab, onTabSwitch }) {
  const panel = document.createElement('section');
  panel.className = 'panel-telemetry';

  let logHtml = '';
  currentStep.telemetry.logs.forEach(log => {
    logHtml += `
      <div class="term-line">
        <span class="term-ts">[${log.ts}]</span>
        <span class="term-key">${log.key}:</span>
        <span class="${log.str ? 'term-str' : 'term-val'}">${log.str || log.val}</span>
      </div>
    `;
  });

  panel.innerHTML = `
    <div class="telemetry-top">
      <div class="telemetry-tabs">
        <button class="t-tab ${activeTab === 'logic' ? 'active' : ''}" data-tab="logic">⚡ Logic & Data</button>
        <button class="t-tab ${activeTab === 'ai' ? 'active' : ''}" data-tab="ai">🤖 AI Vector Matrix</button>
        <button class="t-tab ${activeTab === 'escrow' ? 'active' : ''}" data-tab="escrow">🔒 Escrow Vault</button>
      </div>
      <div class="telemetry-status-pill">
        <span class="live-dot"></span> 24ms Latency
      </div>
    </div>

    <div class="process-flow-card">
      <div class="metric-label">
        <span>Live Data Pipeline State</span>
        <span style="color:var(--primary); font-weight:700;">${currentStep.telemetry.stage}</span>
      </div>
      <div class="flow-diagram">
        <div class="diagram-node">
          <div class="node-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <span class="node-label">Creator</span>
        </div>
        <div class="diagram-line"><div class="diagram-line-active" style="width:70%;"></div></div>
        <div class="diagram-node">
          <div class="node-icon" style="color:var(--indigo);">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <span class="node-label">AI Engine</span>
        </div>
        <div class="diagram-line"><div class="diagram-line-active" style="width:50%;"></div></div>
        <div class="diagram-node">
          <div class="node-icon" style="color:var(--success);">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 21h18M3 7v14M21 7v14M6 21V11m4 10V11m4 10V11m4 10V11M12 3l9 4H3l9-4z"></path></svg>
          </div>
          <span class="node-label">Brand Vault</span>
        </div>
      </div>
    </div>

    <div class="data-grid-2">
      <div class="metric-card">
        <div class="metric-label">Identity Match Index</div>
        <div class="metric-val">${currentStep.telemetry.score}</div>
        <div style="font-size:11px; color:var(--success); margin-top:4px;">High Affinity Tier</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Escrow Locked Fund</div>
        <div class="metric-val">${currentStep.telemetry.escrow}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:4px;">Stripe Vault #89342</div>
      </div>
    </div>

    <div class="terminal-box">
      <div class="terminal-header">
        <div class="mac-dots">
          <div class="mac-dot red"></div>
          <div class="mac-dot yellow"></div>
          <div class="mac-dot green"></div>
        </div>
        <span style="font-size:11px; color:#666;">brandxsociety-telemetry --live</span>
      </div>
      <div>
        ${logHtml}
      </div>
    </div>
  `;

  panel.querySelectorAll('.t-tab').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      onTabSwitch(tabBtn.getAttribute('data-tab'));
    });
  });

  return panel;
}
