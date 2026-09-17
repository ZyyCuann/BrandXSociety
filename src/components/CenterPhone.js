export function createCenterPhone({ currentStep }) {
  const container = document.createElement('section');
  container.className = 'panel-phone-container';

  container.innerHTML = `
    <div class="phone-device">
      <div class="phone-header-notch">
        <span class="phone-time">9:41</span>
        <div class="dynamic-island"></div>
        <div class="phone-icons">
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 20.3a1 1 0 0 0 1.35 1.35l2.69-.62A8.95 8.95 0 0 0 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h20V2z"/></svg>
        </div>
      </div>

      <div class="phone-screen">
        ${currentStep.phoneUI}
      </div>

      <div class="phone-tabbar">
        <div class="tabbar-item active">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          <span>Home</span>
        </div>
        <div class="tabbar-item">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span>Market</span>
        </div>
        <div class="tabbar-item">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          <span>Earn</span>
        </div>
        <div class="tabbar-item">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Profile</span>
        </div>
      </div>
    </div>
  `;

  return container;
}
