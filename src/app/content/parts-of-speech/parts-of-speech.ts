export const partsOfSpeechContent = {
  title: 'Parts of Speech',
  description: 'ভাষার মৌলিক উপাদান যা বাক্যের গঠন ও অর্থ নির্ধারণ করে।',
  sections: [
    {
      subtitle: 'Parts of Speech পরিচিতি',
      content: 'ভাষার মৌলিক উপাদান বা Parts of Speech হল বাক্যের সেই সকল শব্দ যা বাক্যের গঠন ও অর্থ নির্ধারণ করে।',
      types: [
        'Parts of Speech গুলো হল: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection',
        'প্রত্যেক Parts of Speech-এর নিজস্ব ভূমিকা ও ব্যবহার রয়েছে'
      ]
    },
    {
      subtitle: 'প্রতিটি Parts of Speech এর উপপ্রকার গুলো বিস্তারিত পড়ুন',
      content: '',
      buttons: [
        { name: 'Noun', icon: 'account_box', route: 'noun' },
        { name: 'Pronoun', icon: 'person', route: 'pronoun' },
        { name: 'Verb', icon: 'play_arrow', route: 'verb' },
        { name: 'Adjective', icon: 'palette', route: 'adjective' },
        { name: 'Adverb', icon: 'speed', route: 'adverb' },
        { name: 'Preposition', icon: 'near_me', route: 'preposition' },
        { name: 'Conjunction', icon: 'join_inner', route: 'conjunction' },
        { name: 'Interjection', icon: 'chat', route: 'interjection' }
      ]
    }
  ]
};
