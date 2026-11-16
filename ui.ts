
export class GameUI {
  // ==========================================
  // PLAYER DATA
  // ==========================================

  playerHealth = 100;
  playerMaxHealth = 100;

  // ==========================================
  // UI ELEMENTS
  // ==========================================

  private healthContainer!: HTMLDivElement;
  private healthBar!: HTMLDivElement;
  private healthText!: HTMLDivElement;

  constructor() {
    this.createHealthBar();
  }

  // ==========================================
  // CREATE HEALTH BAR
  // ==========================================

  private createHealthBar() {
    // Main container
    this.healthContainer = document.createElement('div');

    this.healthContainer.style.position = 'fixed';
    this.healthContainer.style.top = '20px';
    this.healthContainer.style.left = '20px';
    this.healthContainer.style.width = '250px';
    this.healthContainer.style.height = '24px';
    this.healthContainer.style.backgroundColor = '#222';
    this.healthContainer.style.border = '2px solid #111';
    this.healthContainer.style.borderRadius = '5px';
    this.healthContainer.style.overflow = 'hidden';
    this.healthContainer.style.zIndex = '1000';
    this.healthContainer.style.pointerEvents = 'none';

    // Red health fill
    this.healthBar = document.createElement('div');

    this.healthBar.style.width = '100%';
    this.healthBar.style.height = '100%';
    this.healthBar.style.backgroundColor = '#d62828';
    this.healthBar.style.transition = 'width 0.2s ease';

    // Health text
    this.healthText = document.createElement('div');

    this.healthText.style.position = 'absolute';
    this.healthText.style.inset = '0';
    this.healthText.style.display = 'flex';
    this.healthText.style.alignItems = 'center';
    this.healthText.style.justifyContent = 'center';
    this.healthText.style.color = 'white';
    this.healthText.style.fontFamily = 'Arial, sans-serif';
    this.healthText.style.fontSize = '14px';
    this.healthText.style.fontWeight = 'bold';

    this.healthContainer.appendChild(this.healthBar);
    this.healthContainer.appendChild(this.healthText);

    document.body.appendChild(this.healthContainer);

    this.updateHealthBar();
  }

  // ==========================================
  // UPDATE HEALTH
  // ==========================================

  setHealth(currentHealth: number) {
    this.playerHealth = Math.max(
      0,
      Math.min(currentHealth, this.playerMaxHealth)
    );

    this.updateHealthBar();
  }

  private updateHealthBar() {
    const healthPercentage =
      (this.playerHealth / this.playerMaxHealth) * 100;

    this.healthBar.style.width = `${healthPercentage}%`;

    this.healthText.textContent =
      `${this.playerHealth} / ${this.playerMaxHealth}`;
  }
}

export class ResourceUI {
  wood = 0;
  metal = 0;
  stone = 0;
  energy = 0;

  private resourceContainer!: HTMLDivElement;

  constructor() {
    this.createResourceContainer();
  }

  private createResourceContainer() {
    this.resourceContainer = document.createElement('div');

    this.resourceContainer.style.position = 'fixed';
    this.resourceContainer.style.top = '20px';
    this.resourceContainer.style.left = '20px';
    this.resourceContainer.style.width = '250px';
    this.resourceContainer.style.height = '24px';
    this.resourceContainer.style.backgroundColor = '#222';
    this.resourceContainer.style.border = '2px solid #111';
    this.resourceContainer.style.borderRadius = '5px';
    this.resourceContainer.style.overflow = 'hidden';
    this.resourceContainer.style.zIndex = '1000';
    this.resourceContainer.style.pointerEvents = 'none';
  }
}
