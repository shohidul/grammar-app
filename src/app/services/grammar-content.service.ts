import { Injectable } from '@angular/core';
import { tenseContent } from '../content/tenses/tense';
import { presentIndefiniteTense } from '../content/tenses/present-indefinite';
import { presentContinuousTense } from '../content/tenses/present-continuous';
import { presentPerfectTense } from '../content/tenses/present-perfect';
import { presentPerfectContinuousTense } from '../content/tenses/present-perfect-continuous';
import { pastIndefiniteTense } from '../content/tenses/past-indefinite';
import { pastContinuousTense } from '../content/tenses/past-continuous';
import { pastPerfectTense } from '../content/tenses/past-perfect';
import { pastPerfectContinuousTense } from '../content/tenses/past-perfect-continuous';
import { futureIndefiniteTense } from '../content/tenses/future-indefinite';
import { futureContinuousTense } from '../content/tenses/future-continuous';
import { futurePerfectTense } from '../content/tenses/future-perfect';
import { futurePerfectContinuousTense } from '../content/tenses/future-perfect-continuous';
import { partsOfSpeechContent } from '../content/parts-of-speech/parts-of-speech';
import { nounContent } from '../content/parts-of-speech/noun';
import { pronounContent } from '../content/parts-of-speech/pronoun';
import { verbContent } from '../content/parts-of-speech/verb';
import { adjectiveContent } from '../content/parts-of-speech/adjective';
import { adverbContent } from '../content/parts-of-speech/adverb';
import { prepositionContent } from '../content/parts-of-speech/preposition';
import { conjunctionContent } from '../content/parts-of-speech/conjunction';
import { interjectionContent } from '../content/parts-of-speech/interjection';
import { verbFormsContent } from '../content/verb-forms/verb-forms';
import { sentenceContent } from '../content/sentence/sentence';
import { simpleSentenceContent } from '../content/sentence/simple-sentence';
import { compoundSentenceContent } from '../content/sentence/compound-sentence';
import { complexSentenceContent } from '../content/sentence/complex-sentence';
import { compoundComplexSentenceContent } from '../content/sentence/compound-complex-sentence';
import { assertiveSentenceContent } from '../content/sentence/assertive-sentence';
import { interrogativeSentenceContent } from '../content/sentence/interrogative-sentence';
import { imperativeSentenceContent } from '../content/sentence/imperative-sentence';
import { exclamatorySentenceContent } from '../content/sentence/exclamatory-sentence';
import { articlesContent } from '../content/article/article';

export interface Buttons{
  name: string;
  icon: string;
  route: string;
}

export interface GrammarContent {
  title: string;
  sections: {
    subtitle: string;
    content?: string;
    buttons?: Buttons[];
    types?: string[];
    examples?: string[];
    practice?: string[];
    rules?: string[];
    structure?: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class GrammarContentService {
  getTenseContent(): GrammarContent {
    return {
      title: tenseContent.title,
      sections: [
        ...tenseContent.sections,
      ]
    };
  }
  getPresentIndefiniteTenseContent(): GrammarContent {
    return {
      title: presentIndefiniteTense.title,
      sections: [
        ...presentIndefiniteTense.sections,
      ]
    };
  }

  getPresentContinuousTenseContent(): GrammarContent | null {
    return {
      title: presentContinuousTense.title,
      sections: [
        ...presentContinuousTense.sections,
      ]
    };  }
  getPresentPerfectTenseContent(): GrammarContent | null {
    return {
      title: presentPerfectTense.title,
      sections: [
        ...presentPerfectTense.sections,
      ]
    };  }
  getPresentPerfectContinuousTenseContent(): GrammarContent | null {
    return {
      title: presentPerfectContinuousTense.title,
      sections: [
        ...presentPerfectContinuousTense.sections,
      ]
    };  }
  getPastIndefiniteTenseContent(): GrammarContent | null {
    return {
      title: pastIndefiniteTense.title,
      sections: [
        ...pastIndefiniteTense.sections,
      ]
    }
  }
  getPastContinuousTenseContent(): GrammarContent | null {
    return {
      title: pastContinuousTense.title,
      sections: [
        ...pastContinuousTense.sections,
      ]
    }
  }
  getPastPerfectTenseContent(): GrammarContent | null {
    return {
      title: pastPerfectTense.title,
      sections: [
        ...pastPerfectTense.sections,
      ]
    }
  }
  getPastPerfectContinuousTenseContent(): GrammarContent | null {
    return {
      title: pastPerfectContinuousTense.title,
      sections: [
        ...pastPerfectContinuousTense.sections,
      ]
    };  }
  getFutureIndefiniteTenseContent(): GrammarContent | null {
    return {
      title: futureIndefiniteTense.title,
      sections: [
        ...futureIndefiniteTense.sections,
      ]
    }
  }
  getFutureContinuousTenseContent(): GrammarContent | null {
    return {
      title: futureContinuousTense.title,
      sections: [
        ...futureContinuousTense.sections,
      ]
    }
  }
  getFuturePerfectTenseContent(): GrammarContent | null {
    return {
      title: futurePerfectTense.title,
      sections: [
        ...futurePerfectTense.sections,
      ]
    }
  }
  getFuturePerfectContinuousTenseContent(): GrammarContent | null {
    return {
      title: futurePerfectContinuousTense.title,
      sections: [
        ...futurePerfectContinuousTense.sections,
      ]
    }
  }

  getPartsOfSpeechContent(): GrammarContent | null {
    return {
      title: partsOfSpeechContent.title,
      sections: [
        ...partsOfSpeechContent.sections,
      ]
    }
  }

  getNounContent(): GrammarContent | null {
    return {
      title: nounContent.title,
      sections: [
        ...nounContent.sections,
      ]
    }
  }

  getPronounContent(): GrammarContent | null {
    return {
      title: pronounContent.title,
      sections: [
        ...pronounContent.sections,
      ]
    }
  }

  getVerbContent(): GrammarContent | null {
    return {
      title: verbContent.title,
      sections: [
        ...verbContent.sections,
      ]
    }
  }

  getAdjectiveContent(): GrammarContent | null {
    return {
      title: adjectiveContent.title,
      sections: [
        ...adjectiveContent.sections,
      ]
    }
  }

  getAdverbContent(): GrammarContent | null {
    return {
      title: adverbContent.title,
      sections: [
        ...adverbContent.sections,
      ]
    }
  }

  getPrepositionContent(): GrammarContent | null {
    return {
      title: prepositionContent.title,
      sections: [
        ...prepositionContent.sections,
      ]
    }
  }

  getConjunctionContent(): GrammarContent | null {
    return {
      title: conjunctionContent.title,
      sections: [
        ...conjunctionContent.sections,
      ]
    }
  }

  getInterjectionContent(): GrammarContent | null {
    return {
      title: interjectionContent.title,
      sections: [
        ...interjectionContent.sections,
      ]
    }
  }

  getVerbFormsContent(): GrammarContent | null {
    return {
      title: verbFormsContent.title,
      sections: [
        ...verbFormsContent.sections,
      ]
    }
  }

  getSentenceContent(): GrammarContent | null {
    return {
      title: sentenceContent.title,
      sections: [
        ...sentenceContent.sections,
      ]
    }
  }

  getSimpleSentenceContent(): GrammarContent | null {
    return {
      title: simpleSentenceContent.title,
      sections: [
        ...simpleSentenceContent.sections,
      ]
    }
  }

  getCompoundSentenceContent(): GrammarContent | null {
    return {
      title: compoundSentenceContent.title,
      sections: [
        ...compoundSentenceContent.sections,
      ]
    }
  }

  getComplexSentenceContent(): GrammarContent | null {
    return {
      title: complexSentenceContent.title,
      sections: [
        ...complexSentenceContent.sections,
      ]
    }
  }

  getCompoundComplexSentenceContent(): GrammarContent | null {
    return {
      title: compoundComplexSentenceContent.title,
      sections: [
        ...compoundComplexSentenceContent.sections,
      ]
    }
  }

  getAssertiveSentenceContent(): GrammarContent | null {
    return {
      title: assertiveSentenceContent.title,
      sections: [
        ...assertiveSentenceContent.sections,
      ]
    }
  }

  getInterrogativeSentenceContent(): GrammarContent | null {
    return {
      title: interrogativeSentenceContent.title,
      sections: [
        ...interrogativeSentenceContent.sections,
      ]
    }
  }

  getImperativeSentenceContent(): GrammarContent | null {
    return {
      title: imperativeSentenceContent.title,
      sections: [
        ...imperativeSentenceContent.sections,
      ]
    }
  }

  getExclamatorySentenceContent(): GrammarContent | null {
    return {
      title: exclamatorySentenceContent.title,
      sections: [
        ...exclamatorySentenceContent.sections,
      ]
    }
  }

  getArticlesContent(): GrammarContent | null {
    return {
      title: articlesContent.title,
      sections: [
        ...articlesContent.sections,
      ]
    }
  }
}