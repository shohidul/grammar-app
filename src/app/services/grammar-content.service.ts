import { Injectable } from '@angular/core';
import { tenseContent } from '../content/tenses';
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

export interface Buttons{
  name: string;
  icon: string;
  route: string;
}

export interface GrammarContent {
  title: string;
  sections: {
    subtitle: string;
    content: string;
    buttons?: Buttons[];
    types?: string[];
    examples?: string[];
    practice?: string[];
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
}