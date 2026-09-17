export function createLeftPanel({ steps, currentStepIndex, currentFlow, onSelectStep, onPrevStep, onNextStep }) {
  const panel = document.createElement('section');
  panel.className = 'panel-navigator';

  const currentStep = steps[currentStepIndex];
  const isBrand = currentFlow === 'brand';
  const title = isBrand ? "Brand Portal Journey" : "Creator Journey";
  const desc = isBrand 
    ? "Simulasi alur pembuatan kampanye, pencarian kreator, hingga escrow settlement."
    : "Simulasi alur pembuatan AI Resume & pencarian opportunity kampanye brand.";

  let stepsHtml = '';
  steps.forEach((step, idx) => {
    const isActive = idx === currentStepIndex ? 'active' : '';
    const isBrandTheme = isBrand ? 'brand-theme' : '';
    stepsHtml += `
      <div class="step-item ${isActive} ${isBrandTheme}" data-index="${idx}">
        <div class="step-number">${step.id}</div>
        <div class="step-content">
          <div class="step-title-text">${step.title}</div>
          <div class="step-sub-text">${step.subTitle}</div>
          <span class="step-tag">${step.tag}</span>
        </div>
      </div>
    `;
  });

  panel.innerHTML = `
    <div class="nav-header">
      <div class="nav-phase-badge">${currentStep.phase}</div>
      <h2 class="nav-title">${title}</h2>
      <p class="nav-desc">${desc}</p>
    </div>

    <div class="steps-container">
      ${stepsHtml}
    </div>

    <div class="nav-controls">
      <span class="step-progress-text">Step ${currentStep.id} of ${steps.length}</span>
      <div class="nav-arrow-btns">
        <button class="icon-btn" id="btnPrevStep" title="Langkah Sebelumnya">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
        </button>
        <button class="icon-btn" id="btnNextStep" title="Langkah Berikutnya">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
        </button>
      </div>
    </div>
  `;

  panel.querySelectorAll('.step-item').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.getAttribute('data-index'), 10);
      onSelectStep(idx);
    });
  });

  panel.querySelector('#btnPrevStep').addEventListener('click', onPrevStep);
  panel.querySelector('#btnNextStep').addEventListener('click', onNextStep);

  return panel;
}
