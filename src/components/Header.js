export function createHeader({ currentFlow, isAutoPlaying, onFlowSwitch, onAutoPlayToggle }) {
  const header = document.createElement('header');
  header.className = 'top-navbar';
  
  const isCustomerActive = currentFlow === 'customer' ? 'active' : '';
  const isBrandActive = currentFlow === 'brand' ? 'active brand-active' : '';
  const autoPlayText = isAutoPlaying ? 'Pause Demo' : 'Auto-Play Demo';

  header.innerHTML = `
    <div class="navbar-container">
      <a href="#" class="brand-logo">
        <div class="logo-badge">BxS</div>
        <div class="logo-text">
          <span class="logo-title">BrandxSociety</span>
          <span class="logo-sub"><span class="live-dot"></span> Live Prototype • Vite + Vanilla JS</span>
        </div>
      </a>

      <div class="flow-switcher">
        <button id="btnFlowCustomer" class="flow-tab ${isCustomerActive}">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Creator Flow (10 Steps)
        </button>
        <button id="btnFlowBrand" class="flow-tab ${isBrandActive}">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 21h18M3 7v14M21 7v14M6 21V11m4 10V11m4 10V11m4 10V11M12 3l9 4H3l9-4z"></path></svg>
          Brand Flow (10 Steps)
        </button>
      </div>

      <div class="navbar-actions">
        <button class="btn btn-secondary" id="btnAutoPlay">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          <span>${autoPlayText}</span>
        </button>
        <a href="https://github.com/ZyyCuann/BrandXSociety" target="_blank" class="btn btn-primary">
          GitHub Repo
        </a>
      </div>
    </div>
  `;

  header.querySelector('#btnFlowCustomer').addEventListener('click', () => onFlowSwitch('customer'));
  header.querySelector('#btnFlowBrand').addEventListener('click', () => onFlowSwitch('brand'));
  header.querySelector('#btnAutoPlay').addEventListener('click', onAutoPlayToggle);

  return header;
}
