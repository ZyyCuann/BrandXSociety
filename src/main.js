import './styles/variables.css';
import './styles/layout.css';
import './styles/components.css';

import { customerSteps, brandSteps } from './data/flowData.js';
import { createHeader } from './components/Header.js';
import { createLeftPanel } from './components/LeftPanel.js';
import { createCenterPhone } from './components/CenterPhone.js';
import { createRightPanel } from './components/RightPanel.js';

let currentFlow = 'customer';
let currentStepIndex = 0;
let isAutoPlaying = false;
let autoPlayInterval = null;
let activeRightTab = 'logic';

function getActiveSteps() {
  return currentFlow === 'customer' ? customerSteps : brandSteps;
}

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const steps = getActiveSteps();
  const currentStep = steps[currentStepIndex];

  // 1. Header
  const header = createHeader({
    currentFlow,
    isAutoPlaying,
    onFlowSwitch: (flow) => {
      currentFlow = flow;
      currentStepIndex = 0;
      renderApp();
    },
    onAutoPlayToggle: () => {
      toggleAutoPlay();
    }
  });

  // 2. Main Viewport Grid
  const viewport = document.createElement('main');
  viewport.className = 'app-viewport';

  const leftPanel = createLeftPanel({
    steps,
    currentStepIndex,
    currentFlow,
    onSelectStep: (idx) => {
      currentStepIndex = idx;
      renderApp();
    },
    onPrevStep: () => {
      currentStepIndex = (currentStepIndex - 1 + steps.length) % steps.length;
      renderApp();
    },
    onNextStep: () => {
      currentStepIndex = (currentStepIndex + 1) % steps.length;
      renderApp();
    }
  });

  const centerPhone = createCenterPhone({ currentStep });

  const rightPanel = createRightPanel({
    currentStep,
    activeTab: activeRightTab,
    onTabSwitch: (tab) => {
      activeRightTab = tab;
      renderApp();
    }
  });

  viewport.appendChild(leftPanel);
  viewport.appendChild(centerPhone);
  viewport.appendChild(rightPanel);

  app.appendChild(header);
  app.appendChild(viewport);
}

function toggleAutoPlay() {
  const steps = getActiveSteps();
  if (isAutoPlaying) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
    isAutoPlaying = false;
  } else {
    isAutoPlaying = true;
    autoPlayInterval = setInterval(() => {
      currentStepIndex = (currentStepIndex + 1) % steps.length;
      renderApp();
    }, 3500);
  }
  renderApp();
}

// Global Keyboard Navigation
document.addEventListener('keydown', (e) => {
  const steps = getActiveSteps();
  if (e.key === 'ArrowRight') {
    currentStepIndex = (currentStepIndex + 1) % steps.length;
    renderApp();
  }
  if (e.key === 'ArrowLeft') {
    currentStepIndex = (currentStepIndex - 1 + steps.length) % steps.length;
    renderApp();
  }
  if (e.key === ' ') {
    e.preventDefault();
    toggleAutoPlay();
  }
});

// Initial Render
renderApp();
