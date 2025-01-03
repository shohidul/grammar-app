export const sentenceContent = {
  title: 'Sentence (বাক্য)',
  sections: [
    {
      subtitle: 'Sentence কি?',
      content: 'Sentence হল শব্দের সমষ্টি যা একটি সম্পূর্ণ অর্থ প্রকাশ করে। এটি সাধারণত একটি বিষয় এবং ক্রিয়া নিয়ে গঠিত।',
      examples: [
        'I am reading a book. - আমি একটি বই পড়ছি।',
        'The sun rises in the east. - সূর্য পূর্ব দিকে উদিত হয়।',
        'He plays football every afternoon. - সে প্রতিদিন বিকেলে ফুটবল খেলে।'
      ]
    },
    {
      subtitle: 'Sentence এর প্রকারভেদ (Structural Classification)',
      content: 'Structure অনুযায়ী Sentence কে চার ভাগে ভাগ করা যায়:',
      types: [
        '1. Simple Sentence - একটি Subject ও একটি Predicate নিয়ে গঠিত।',
        '2. Compound Sentence - দুটি বা তার বেশি Independent Clause নিয়ে গঠিত।',
        '3. Complex Sentence - একটি Independent Clause ও একটি বা তার বেশি Dependent Clause নিয়ে গঠিত।',
        '4. Compound-Complex Sentence - দুটি বা তার বেশি Independent Clause এবং একটি বা তার বেশি Dependent Clause নিয়ে গঠিত।'
      ]
    },
    {
      subtitle: 'Sentence এর প্রকারভেদ (Functional Classification)',
      content: 'Function অনুযায়ী Sentence কে চার ভাগে ভাগ করা যায়:',
      types: [
        '1. Assertive/Declarative Sentence - কোনো তথ্য বা বক্তব্য প্রকাশ করে।',
        '2. Interrogative Sentence - প্রশ্ন করে।',
        '3. Imperative Sentence - আদেশ, অনুরোধ, বা নিষেধাজ্ঞা দেয়।',
        '4. Exclamatory Sentence - আবেগ প্রকাশ করে।'
      ]
    },
    {
      subtitle: 'Sentence গঠনের নিয়মাবলী',
      content: 'Sentence তৈরির জন্য কিছু সাধারণ নিয়ম রয়েছে:',
      rules: [
        '1. প্রতিটি বাক্যে একটি বিষয় (Subject) ও একটি ক্রিয়া (Verb) থাকতে হবে।',
        '2. বাক্যের শুরুতে Capital Letter ও শেষে পূর্ণবিরতি চিহ্ন (Full Stop, Question Mark, বা Exclamation Mark) ব্যবহার করতে হবে।',
        '3. শব্দের সঠিক বিন্যাস বজায় রাখতে হবে।'
      ],
      practice: [
        'ইংরেজিতে অনুবাদ করুন: আমি একটি আপেল খাচ্ছি।',
        'এই বাক্যের প্রকার চিহ্নিত করুন: What are you doing?',
        'এই বাক্যটি Negative করুন: She is happy.'
      ]
    },
    {
      subtitle: 'প্রতিটি Sentence এর প্রকার বিস্তারিত পড়ুন',
      content: '',
      buttons: [
        { name: 'Simple Sentence', icon: 'schedule', route: 'simple-sentence' },
        { name: 'Compound Sentence', icon: 'schedule', route: 'compound-sentence' },
        { name: 'Complex Sentence', icon: 'schedule', route: 'complex-sentence' },
        { name: 'Compound-Complex Sentence', icon: 'schedule', route: 'compound-complex-sentence' },
        { name: 'Assertive Sentence', icon: 'schedule', route: 'assertive-sentence' },
        { name: 'Interrogative Sentence', icon: 'schedule', route: 'interrogative-sentence' },
        { name: 'Imperative Sentence', icon: 'schedule', route: 'imperative-sentence' },
        { name: 'Exclamatory Sentence', icon: 'schedule', route: 'exclamatory-sentence' }
      ]
    }
  ]
};
