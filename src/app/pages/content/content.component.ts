import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileHeaderComponent } from '../../components/mobile-header/mobile-header.component';
import { GrammarContentService, GrammarContent } from '../../services/grammar-content.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, MobileHeaderComponent],
  template: `
    <div class="content-page">
      <app-mobile-header
        [title]="content?.title || ''"
        [showBackButton]="true"
        [showOnDesktop]="true"
        (back)="goBack()"
      />

      <div class="content-container">
        @if (content) {
          @for (section of content.sections; track section.subtitle) {
            <div class="content-section card">
              <h3>{{ section.subtitle }}</h3>
              <p class="section-text">{{ section.content }}</p>
              
              @if (section.structure) {
                <div class="structure">
                  <h4>Structure:</h4>
                  <p class="structure-text">{{ section.structure }}</p>
                </div>
              }
              
              @if (section.examples && section.examples.length > 0) {
                <div class="examples">
                  <h4>Examples:</h4>
                  <ul>
                    @for (example of section.examples; track example) {
                      <li>{{ example }}</li>
                    }
                  </ul>
                </div>
              }

              @if (section.practice && section.practice.length > 0) {
                <div class="practice">
                  <h4>Practice:</h4>
                  <ul>
                    @for (item of section.practice; track item) {
                      <li>{{ item }}</li>
                    }
                  </ul>
                </div>
              }
            </div>
          }
        }
      </div>
    </div>
  `,
  styles: [`
    .content-page {
      max-width: 800px;
      margin: 0 auto;
    }

    .content-container {
      padding: 1rem;
    }

    .content-section {
      margin-bottom: 1rem;
    }

    .content-section h3 {
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .section-text {
      line-height: 1.6;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .structure {
      background-color: var(--primary-color);
      color: white;
      padding: 1rem;
      border-radius: 4px;
      margin: 1rem 0;
    }

    .structure h4 {
      margin-bottom: 0.5rem;
    }

    .structure-text {
      font-family: monospace;
      font-size: 1.1em;
    }

    .examples, .practice {
      background-color: var(--background-color);
      padding: 1rem;
      border-radius: 4px;
      margin-top: 1rem;
    }

    .examples h4, .practice h4 {
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .examples ul, .practice ul {
      list-style-position: inside;
      color: var(--text-primary);
    }

    .examples li, .practice li {
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }

    .practice {
      border-left: 4px solid var(--primary-color);
    }
  `]
})
export class ContentComponent implements OnInit {
  content: GrammarContent | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private grammarService: GrammarContentService
  ) {}

  ngOnInit() {
    const topic = this.route.snapshot.params['topic'];
    this.content = topic === 'tense' 
      ? this.grammarService.getTenseContent(): null;
      //: this.grammarService.getOtherContent(topic);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}