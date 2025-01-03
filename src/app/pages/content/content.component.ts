import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
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
              
              @if (section.types && section.types.length > 0) {
                <div class="types">
                  <h4>Types:</h4>
                  <ul>
                    @for (type of section.types; track type) {
                      <li>{{ type }}</li>
                    }
                  </ul>
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
              
              @if (section.rules && section.rules.length > 0) {
                <div class="rules">
                  <h4>Rules:</h4>
                  <ul>
                    @for (rule of section.rules; track rule) {
                      <li>{{ rule }}</li>
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

              @if (section.buttons && section.buttons.length > 0) {
                <div class="buttons">
                @for (button of section.buttons;  track button ) {
                  <button
                      class="button"
                      (click)="goToDetails(button.route)"
                      #categoryButton
                    >
                      <!-- <span class="material-symbols-rounded">{{ i + 1 }}</span> -->
                      <span class="button-name">{{ button.name }}</span>
                    </button>
                }
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
      display: flex;
      column-gap: 0.5rem;
      align-items: baseline;
      flex-wrap: wrap;
    }

    .structure h4 {
      margin-bottom: 0.5rem;
    }

    .structure-text {
      font-family: monospace;
      font-size: 1.1em;
    }

    .types, .examples, .practice, .rules {
      background-color: var(--background-color);
      padding: 1rem;
      border-radius: 4px;
      margin-top: 1rem;
    }

    .types h4, .examples h4, .practice h4, .rules h4 {
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .types ul, .examples ul, .practice ul, .rules ul {
      list-style-position: inside;
      color: var(--text-primary);
    }

    .types li, .examples li, .practice li, .rules li {
      margin-bottom: 0.5rem;
      line-height: 1.4;
      list-style: none;
    }

    span {
      display: contents;
    }

    .practice {
      border-left: 4px solid var(--primary-color);
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.5rem;
      padding: 1rem 0;
      overflow-y: auto;
    }

    .button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 0.5rem;
      border-radius: 8px;
      background: none;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      outline: none;
      border: 1px dashed var(--dashed-border);
    }

    .button:hover {
      background-color: var(--background-color-hover);
    }

    .button.selected {
      background-color: var(--primary-color);
      color: white !important;
    }

    .button-name {
      font-size: 0.75rem;
      text-align: center;
    }
  `]
})
export class ContentComponent implements OnInit {
  content: GrammarContent | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private grammarService: GrammarContentService,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      this.content = this.loadContent(params['topic']);
    });
  }

  ngOnInit() {
  }

  private loadContent(topic: string): GrammarContent | null {
    const contentMap = new Map<string, () => GrammarContent | null>([
      // Tense
      ['tense', () => this.grammarService.getTenseContent()],
      ['present-indefinite', () => this.grammarService.getPresentIndefiniteTenseContent()],
      ['present-continuous', () => this.grammarService.getPresentContinuousTenseContent()],
      ['present-perfect', () => this.grammarService.getPresentPerfectTenseContent()],
      ['present-perfect-continuous', () => this.grammarService.getPresentPerfectContinuousTenseContent()],
      ['past-indefinite', () => this.grammarService.getPastIndefiniteTenseContent()],
      ['past-continuous', () => this.grammarService.getPastContinuousTenseContent()],
      ['past-perfect', () => this.grammarService.getPastPerfectTenseContent()],
      ['past-perfect-continuous', () => this.grammarService.getPastPerfectContinuousTenseContent()],
      ['future-indefinite', () => this.grammarService.getFutureIndefiniteTenseContent()],
      ['future-continuous', () => this.grammarService.getFutureContinuousTenseContent()],
      ['future-perfect', () => this.grammarService.getFuturePerfectTenseContent()],
      ['future-perfect-continuous', () => this.grammarService.getFuturePerfectContinuousTenseContent()],
      
      // Parts of Speech
      ['parts-of-speech', () => this.grammarService.getPartsOfSpeechContent()],
      ['noun', () => this.grammarService.getNounContent()],
      ['pronoun', () => this.grammarService.getPronounContent()],
      ['verb', () => this.grammarService.getVerbContent()],
      ['adjective', () => this.grammarService.getAdjectiveContent()],
      ['adverb', () => this.grammarService.getAdverbContent()],
      ['preposition', () => this.grammarService.getPrepositionContent()],
      ['conjunction', () => this.grammarService.getConjunctionContent()],
      ['interjection', () => this.grammarService.getInterjectionContent()],
      
      // Verb Forms
      ['verb-forms', () => this.grammarService.getVerbFormsContent()],

      // Sentence
      ['sentence', () => this.grammarService.getSentenceContent()],
      ['simple-sentence', () => this.grammarService.getSimpleSentenceContent()],
      ['compound-sentence', () => this.grammarService.getCompoundSentenceContent()],
      ['complex-sentence', () => this.grammarService.getComplexSentenceContent()],
      ['compound-complex-sentence', () => this.grammarService.getCompoundComplexSentenceContent()],
      ['assertive-sentence', () => this.grammarService.getAssertiveSentenceContent()],
      ['interrogative-sentence', () => this.grammarService.getInterrogativeSentenceContent()],
      ['imperative-sentence', () => this.grammarService.getImperativeSentenceContent()],
      ['exclamatory-sentence', () => this.grammarService.getExclamatorySentenceContent()],
      
      // Articles
      ['article', () => this.grammarService.getArticlesContent()],

      // Voice
      ['voice', () => this.grammarService.getVoiceContent()],

      // Narration
      ['narration', () => this.grammarService.getNarrationContent()],
    ]);
  
    const contentLoader = contentMap.get(topic);
    return contentLoader ? contentLoader() : null;
  }  

  goToDetails(route: string) {
    const formattedRoute = route.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/content', formattedRoute]);
  }

  goBack() {
    this.location.back();
  }
}