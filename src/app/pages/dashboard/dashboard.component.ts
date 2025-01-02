import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MonthPickerComponent } from '../../components/month-picker/month-picker.component';
import { TranslatePipe } from '../../components/shared/translate.pipe';
import { TranslateDatePipe } from '../../components/shared/translate-date.pipe';
import { TranslateNumberPipe } from '../../components/shared/translate-number.pipe';
import { FeatureFlagService } from '../../services/feature-flag.service';
import { DOCUMENT } from '@angular/common';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MonthPickerComponent,
    TranslatePipe,
    TranslateDatePipe,
    TranslateNumberPipe
  ],
  template: `
    <div class="dashboard">
      <div class="top-actions card">
        <button class="menu-button" (click)="toggleMenu()">
          <span class="material-icons">menu</span>
        </button>

        <button class="sync-button" (click)="reloadPage()">
          <span class="material-icons">sync</span>
        </button>
      </div>

      <div class="contents">
        <div class="categories-grid" #categoriesGrid>
          @for (category of grammerCategories; track category.name) {
            <button 
              class="category-item"
              [class.selected]="selectedIcon?.icon === category.icon && selectedIcon?.name === category.name"
              (click)="selectCategory(category)"
              #categoryButton
            >
              <span class="material-symbols-rounded">{{ category.icon }}</span>
              <span class="category-name">{{ category.name | translate }}</span>
            </button>
          }
        </div>
      </div>
      
    </div>
  `,

  styles: [
    `
  .dashboard {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  .top-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    position: sticky;
    top: -16px;
    z-index: 100;
  }

  .menu-button, .sync-button {
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-button:hover, .sync-button:hover {
    background-color: var(--background-color-hover);
  }

  @media (min-width: 769px) {
    .menu-button {
      display: none;
    }
  }
  
  .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      gap: 1rem;
      padding: 1rem 1rem 3.125rem 1rem;
      overflow-y: auto;
    }

    .category-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      border: none;
      border-radius: 8px;
      background: none;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      outline: none;
      border: 1px dashed var(--dashed-border);
    }

    .category-item:hover {
      background-color: var(--background-color-hover);
    }

    .category-item.selected {
      background-color: var(--primary-color);
      color: white !important;
    }

    .category-name {
      font-size: 0.75rem;
      text-align: center;
    }
`,
  ],
})
  
export class DashboardComponent implements OnInit {
  isAdvancedMode: boolean = false;
  selectedIcon: any = null;
  grammerCategories = [
    { name: 'Tense', icon: 'schedule' },
    { name: 'Sentence', icon: 'text_fields' },
    { name: 'Article', icon: 'article' }
  ];

  constructor(
    private router: Router, 
    private menuService: MenuService, 
    private featureFlagService: FeatureFlagService, 
    @Inject(DOCUMENT) private document: Document
  ) {}
  
  async ngOnInit() {
    
    this.featureFlagService.getAppMode().subscribe(
      isAdvanced => this.isAdvancedMode = isAdvanced
    );
    
  }

  selectCategory(category: any) {
    this.selectedIcon = category;

  }
  
  reloadPage() {
    this.document.defaultView?.location.reload();
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  
}