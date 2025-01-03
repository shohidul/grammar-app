import { Injectable } from '@angular/core';

export interface GrammarContent {
  title: string;
  sections: {
    subtitle: string;
    content: string;
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
      title: 'Tense (কাল)',
      sections: [
        {
          subtitle: 'Tense কি?',
          content: 'Tense হল ক্রিয়াপদের সেই রূপ যা কোন কাজ কখন সংঘটিত হয়েছে, হচ্ছে বা হবে তা নির্দেশ করে। এটি কোন action কখন ঘটেছে তা বোঝায়।',
          examples: [
            'Present (বর্তমান): I study English every day - আমি প্রতিদিন ইংরেজি পড়ি',
            'Past (অতীত): I studied English yesterday - আমি গতকাল ইংরেজি পড়েছি',
            'Future (ভবিষ্যৎ): I will study English tomorrow - আমি আগামীকাল ইংরেজি পড়ব'
          ]
        },
        {
          subtitle: 'Tense এর প্রধান প্রকারভেদ',
          content: 'ইংরেজিতে তিনটি মূল Tense আছে:',
          types: [
            '1. Present Tense - বর্তমানে বা নিয়মিত ঘটে এমন কাজ',
            '2. Past Tense - অতীতে ঘটে গেছে এমন কাজ',
            '3. Future Tense - ভবিষ্যতে ঘটবে এমন কাজ'
          ]
        },
        {
          subtitle: 'প্রতিটি Tense এর উপপ্রকার',
          content: 'প্রতিটি মূল Tense এর চারটি করে উপপ্রকার আছে:',
          types: [
            '1. Indefinite/Simple - সাধারণ কাজ',
            '2. Continuous/Progressive - চলমান কাজ',
            '3. Perfect - সম্পূর্ণ হওয়া কাজ',
            '4. Perfect Continuous - চলমান সম্পূর্ণ কাজ'
          ]
        },
        {
          subtitle: 'Present Indefinite Tense',
          content: 'নিত্য কর্ম, সাধারণ সত্য এবং নির্ধারিত ঘটনার জন্য ব্যবহৃত হয়।',
          structure: 'Subject + V1 (he/she/it এর জন্য -s/-es যোগ করতে হয়) + Object',
          examples: [
            'I play cricket - আমি ক্রিকেট খেলি',
            'He plays cricket - সে ক্রিকেট খেলে',
            'The sun rises in the east - সূর্য পূর্বদিকে ওঠে',
            'The train leaves at 9 AM - ট্রেন সকাল ৯টায় ছাড়ে'
          ]
        },
        {
          subtitle: 'Present Indefinite: ইতিবাচক বাক্য',
          content: 'ইতিবাচক বাক্য গঠনের নিয়ম।',
          structure: 'Subject + V1 (base form) + Object',
          examples: [
            'I write letters - আমি চিঠি লিখি',
            'We play football - আমরা ফুটবল খেলি',
            'They sing songs - তারা গান গায়',
            'She writes poems - সে কবিতা লেখে'
          ]
        },
        {
          subtitle: 'Present Indefinite: নেতিবাচক বাক্য',
          content: 'নেতিবাচক বাক্য গঠনের নিয়ম।',
          structure: 'Subject + do/does + not + V1 + Object',
          examples: [
            'I do not write letters - আমি চিঠি লিখি না',
            'He does not play football - সে ফুটবল খেলে না',
            'They do not sing songs - তারা গান গায় না',
            'She does not write poems - সে কবিতা লেখে না'
          ]
        },
        {
          subtitle: 'Present Indefinite: প্রশ্নবোধক বাক্য',
          content: 'প্রশ্নবোধক বাক্য গঠনের নিয়ম।',
          structure: 'Do/Does + Subject + V1 + Object?',
          examples: [
            'Do you write letters? - তুমি কি চিঠি লেখো?',
            'Does he play football? - সে কি ফুটবল খেলে?',
            'Do they sing songs? - তারা কি গান গায়?',
            'Does she write poems? - সে কি কবিতা লেখে?'
          ]
        },
        {
          subtitle: 'অনুশীলনী',
          content: 'নিচের বাক্যগুলিকে নেতিবাচক ও প্রশ্নবোধক বাক্যে রূপান্তর করুন:',
          practice: [
            '1. I go to school. (আমি স্কুলে যাই)',
            '2. She reads books. (সে বই পড়ে)',
            '3. They watch movies. (তারা সিনেমা দেখে)',
            '4. He plays guitar. (সে গিটার বাজায়)',
            '5. We study English. (আমরা ইংরেজি পড়ি)'
          ]
        },
        {
          subtitle: 'ব্যবহারের নিয়মাবলী',
          content: 'Present Indefinite Tense ব্যবহারের মূল নিয়মগুলি:',
          examples: [
            '1. দৈনন্দিন অভ্যাসের জন্য: I drink coffee every morning - আমি প্রতি সকালে কফি খাই',
            '2. সার্বজনীন সত্যের জন্য: The Earth revolves around the Sun - পৃথিবী সূর্যকে প্রদক্ষিণ করে',
            '3. নির্ধারিত ঘটনার জন্য: The movie starts at 8 PM - সিনেমা রাত ৮টায় শুরু হয়',
            '4. সাধারণ তথ্যের জন্য: Dogs bark - কুকুর ঘেউ ঘেউ করে',
            '5. নির্দেশনার জন্য: First, you add sugar, then you stir - প্রথমে চিনি দিন, তারপর নাড়ুন'
          ]
        },
        {
          subtitle: 'সময় নির্দেশক শব্দ',
          content: 'Present Indefinite এ ব্যবহৃত সময় নির্দেশক শব্দ ও বাক্যাংশ:',
          examples: [
            'Every day/week/month/year - প্রতিদিন/সপ্তাহ/মাস/বছর',
            'Always - সবসময়',
            'Usually - সাধারণত',
            'Often - প্রায়ই',
            'Sometimes - মাঝে মাঝে',
            'Rarely - কদাচিৎ',
            'Never - কখনও না',
            'On Mondays/Tuesdays etc. - সোমবার/মঙ্গলবার ইত্যাদি'
          ]
        }
      ]
    };
  }

  // Continue with other content...
}