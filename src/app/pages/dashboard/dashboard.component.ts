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
      
    </div>
  `,

  styles: [
    `
  .dashboard {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  
`,
  ],
})
  
export class DashboardComponent implements OnInit {
  isAdvancedMode: boolean = false;

  constructor(
    private router: Router, 
    private featureFlagService: FeatureFlagService, 
    @Inject(DOCUMENT) private document: Document
  ) {}

  reloadPage() {
    this.document.defaultView?.location.reload();
  }

  async ngOnInit() {

    this.featureFlagService.getAppMode().subscribe(
      isAdvanced => this.isAdvancedMode = isAdvanced
    );
    
  }

}