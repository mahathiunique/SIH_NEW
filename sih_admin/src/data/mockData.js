// src/data/mockData.js

// src/data/mockData.js

export const MOCK_PROJECTS = [
  {
    id: 'proj_1',
    name: 'Welding Safety Protocols',
    sourceLanguage: 'en',
    targetLanguages: ['hi', 'ka'],
    status: 'in-progress',
    type: 'document',
    uploadedAt: '2025-09-22',
    progress: 75,
    assets: [
      { type: 'pdf', name: 'Welding_Module_En.pdf' },
      { type: 'pdf', name: 'Welding_Module_Hi.pdf' },
      { type: 'pdf', name: 'Welding_Module_Ka.pdf' },
      { type: 'image', name: 'Safety_Poster_En.png' },
      { type: 'image', name: 'Safety_Poster_Ka.png' },
      { type: 'image', name: 'Safety_Poster_Hi.png' },
    ],
    analytics: {
      domain: 'Industrial Safety',
      parameters: {
        totalLanguages: 2,
        sectionsTranslated: 9,
        sectionsPending: 3,
        progressRate: '75%',
        estimatedCost: 520,
        expectedCompletion: '2 hours remaining',
      },
      insights: [
        'AI struggled with regional terminology for welding types.',
        'Pending review of Kannada translation.',
      ],
    },
    activityLog: [
      { timestamp: '2025-09-22T14:30:00Z', message: 'Project created.' },
      { timestamp: '2025-09-22T14:40:00Z', message: 'AI translation in progress.' },
    ],
  },
  {
    id: 'proj_2',
    name: 'Intro to Plumbing & Pipefitting',
    sourceLanguage: 'en',
    targetLanguages: ['hi', 'ta', 'te'],
    status: 'completed',
    type: 'video',
    uploadedAt: '2025-09-25',
    progress: 100,
    assets: [
      { type: 'video', name: 'Original.mp4' },
      { type: 'BookAudio', name: 'Hindi_Dubbed.mp3' },
      { type: 'BookAudio', name: 'Tamil_Dubbed.mp3' },
      { type: 'BookAudio', name: 'Telugu_Dubbed.mp3' },
      { type: 'text', name: 'Hindi_Subtitles.srt' },
      { type: 'text', name: 'Tamil_Subtitles.srt' },
      { type: 'text', name: 'Telugu_Subtitles.srt' },
      { type: 'pdf', name: 'Assessment_hi.pdf' },
      { type: 'image', name: 'Safety_Poster_Hi.png' },
    ],
    analytics: {
      domain: 'Technical Skills - Plumbing',
      parameters: {
        totalLanguages: 3,
        videoDuration: '15 min',
        wordCount: 2800,
        estimatedCost: 420,
        completionTime: '5 hours',
        accuracyRate: '97%',
      },
      insights: [
        'High translation consistency in Tamil and Hindi.',
        'Minor subtitle sync issue auto-corrected by AI.',
        'Strong engagement from field trainees (based on view analytics).',
      ],
    },
    activityLog: [
      { timestamp: '2025-09-25T08:00:00Z', message: 'Project created.' },
      { timestamp: '2025-09-25T14:00:00Z', message: 'Localization completed successfully.' },
    ],
  },
  
  {
    id: 'proj_4',
    name: 'Introduction to Data Entry',
    sourceLanguage: 'en',
    targetLanguages: ['ur', 'as', 'or'],
    status: 'completed',
    type: 'document',
    uploadedAt: '2025-09-19',
    progress: 100,
    assets: [
      { type: 'pdf', name: 'Data_Entry_Module_Ur.pdf' },
      { type: 'pdf', name: 'Data_Entry_Module_As.pdf' },
      { type: 'pdf', name: 'Data_Entry_Module_Or.pdf' },
    ],
    analytics: {
      domain: 'Office Skills',
      parameters: {
        totalLanguages: 3,
        wordCount: 3100,
        estimatedCost: 465,
        completionTime: '4 hours',
        accuracyRate: '98%',
      },
      insights: [
        'Smooth translation workflow with minimal manual edits.',
        'Completed ahead of schedule.',
      ],
    },
    activityLog: [
      { timestamp: '2025-09-19T10:00:00Z', message: 'Project created.' },
      { timestamp: '2025-09-19T16:30:00Z', message: 'Translation completed.' },
    ],
  },
  {
    id: 'proj_5',
    name: 'Customer Service Excellence',
    sourceLanguage: 'en',
    targetLanguages: ['hi', 'bn', 'gu', 'mr'],
    status: 'completed',
    type: 'video',
    uploadedAt: '2025-09-15',
    progress: 100,
    assets: [
      { type: 'video', name: 'Original.mp4' },
      { type: 'BookAudio', name: 'Hindi_Dubbed.mp3' },
      { type: 'BookAudio', name: 'Bengali_Dubbed.mp3' },
      { type: 'BookAudio', name: 'Gujarati_Dubbed.mp3' },
      { type: 'BookAudio', name: 'Marathi_Dubbed.mp3' },
      { type: 'text', name: 'Hindi_Subtitles.srt' },
      { type: 'text', name: 'Bengali_Subtitles.srt' },
      { type: 'pdf', name: 'Training_Guide_Hi.pdf' },
    ],
    analytics: {
      domain: 'Customer Support',
      parameters: {
        totalLanguages: 4,
        wordCount: 3200,
        estimatedCost: 480,
        completionTime: '4 hours',
        satisfactionScore: '9.5/10',
      },
      insights: [
        'Audio dubbing achieved high clarity scores.',
        'Bengali subtitles slightly lagged; auto-fixed.',
        'Recommended as base template for future training content.',
      ],
    },
    activityLog: [
      { timestamp: '2025-09-15T09:00:00Z', message: 'Project created.' },
      { timestamp: '2025-09-15T13:30:00Z', message: 'All translations completed.' },
    ],
  },
  {
    id: 'proj_6',
    name: 'Fire Safety Training Module',
    sourceLanguage: 'en',
    targetLanguages: ['ta', 'te', 'kn', 'ml'],
    status: 'in-progress',
    type: 'video',
    uploadedAt: '2025-09-18',
    progress: 45,
    assets: [
      { type: 'video', name: 'Original.mp4' },
      { type: 'BookAudio', name: 'Tamil_Dubbed.mp3' },
      { type: 'text', name: 'Tamil_Subtitles.srt' },
      { type: 'image', name: 'Fire_Extinguisher_Guide.png' },
    ],
    analytics: {
      domain: 'Emergency Response',
      parameters: {
        totalLanguages: 4,
        progressRate: '45%',
        scenesTranslated: 8,
        remainingScenes: 10,
        estimatedCost: 600,
        eta: '3 hours left',
      },
      insights: [
        'Real-time translation lags observed in Telugu subtitles.',
        'High-quality dubbing for Tamil and Malayalam.',
      ],
    },
    activityLog: [
      { timestamp: '2025-09-18T11:00:00Z', message: 'Project created.' },
      { timestamp: '2025-09-18T14:20:00Z', message: 'Tamil dubbing in progress.' },
    ],
  },
  {
    id: 'proj_7',
    name: 'Electrical Safety Standards',
    sourceLanguage: 'en',
    targetLanguages: ['hi', 'pa', 'ur'],
    status: 'review-needed',
    type: 'document',
    uploadedAt: '2025-09-20',
    progress: 90,
    assets: [
      { type: 'pdf', name: 'Safety_Standards_En.pdf' },
      { type: 'pdf', name: 'Safety_Standards_Hi.pdf' },
      { type: 'pdf', name: 'Safety_Standards_Pa.pdf' },
      { type: 'image', name: 'Warning_Signs.png' },
    ],
    analytics: {
      domain: 'Electrical Engineering Safety',
      parameters: {
        totalLanguages: 3,
        progressRate: '90%',
        errorFlags: 2,
        wordCount: 4000,
        estimatedCost: 600,
      },
      insights: [
        'Two flagged sentences need SME review.',
        'Hindi version exceeds readability threshold slightly.',
      ],
    },
    activityLog: [
      { timestamp: '2025-09-20T08:00:00Z', message: 'Project created.' },
      { timestamp: '2025-09-20T12:45:00Z', message: 'Translation flagged for review.' },
    ],
  },
  {
    id: 'proj_8',
    name: 'Basic Computer Skills',
    sourceLanguage: 'en',
    targetLanguages: ['hi', 'bn', 'as', 'or', 'mr'],
    status: 'completed',
    type: 'document',
    uploadedAt: '2025-09-12',
    progress: 100,
    assets: [
      { type: 'pdf', name: 'Computer_Basics_Hi.pdf' },
      { type: 'pdf', name: 'Computer_Basics_Bn.pdf' },
      { type: 'pdf', name: 'Computer_Basics_As.pdf' },
      { type: 'pdf', name: 'Computer_Basics_Or.pdf' },
      { type: 'pdf', name: 'Computer_Basics_Mr.pdf' },
      { type: 'image', name: 'Keyboard_Layout.png' },
    ],
    analytics: {
      domain: 'Digital Literacy',
      parameters: {
        totalLanguages: 5,
        wordCount: 4500,
        estimatedCost: 675,
        completionTime: '6 hours',
        accuracyRate: '99%',
      },
      insights: [
        'Flawless translation detected across all Indian languages.',
        'Best-performing project in overall efficiency.',
      ],
    },
    activityLog: [
      { timestamp: '2025-09-12T07:00:00Z', message: 'Project created.' },
      { timestamp: '2025-09-12T15:00:00Z', message: 'All translations completed.' },
    ],
  },
  {
    id: 'proj_9',
    name: 'Workplace Hygiene Guidelines',
    sourceLanguage: 'en',
    targetLanguages: ['hi', 'ta', 'gu'],
    status: 'failed',
    type: 'document',
    uploadedAt: '2025-09-21',
    progress: 0,
    assets: [{ type: 'pdf', name: 'Hygiene_Guidelines_En.pdf' }],
    analytics: {
      domain: 'Workplace Safety',
      parameters: {
        totalLanguages: 3,
        progressRate: '0%',
        failureReason: 'Unsupported file format',
        retryRecommended: true,
      },
      insights: [
        'Translation aborted due to PDF encoding mismatch.',
        'Recommend re-uploading with OCR-enabled source.',
      ],
    },
    activityLog: [
      { timestamp: '2025-09-21T10:30:00Z', message: 'Project created.' },
      { timestamp: '2025-09-21T11:00:00Z', message: 'Translation failed: unsupported file format.' },
    ],
  },
];


export const MOCK_GLOSSARY = [

  {
    term: 'Valve',
    translation: { hi: 'वाल्व', ta: 'வால்வு', te: 'వాల్వ్' },
    sector: 'Plumbing',
    status: 'Approved',
  },
  {
    term: 'Pipefitting',
    translation: { hi: 'पाइपफिटिंग', ta: 'குழாய் பொருத்துதல்' },
    sector: 'Plumbing',
    status: 'Pending',
  },
  {
    term: 'Welding',
    translation: { hi: 'वेल्डिंग', ka: 'ವೆಲ್ಡಿಂಗ್' },
    sector: 'Welding',
    status: 'Approved',
  },
  {
    term: 'Electrode',
    translation: { hi: 'इलेक्ट्रोड', ka: 'ಎಲೆಕ್ಟ್ರೋಡ್' },
    sector: 'Welding',
    status: 'Approved',
  },
  {
    term: 'Circuit Breaker',
    translation: { hi: 'सर्किट ब्रेकर', pa: 'ਸਰਕਟ ਤੋੜਨ ਵਾਲਾ' },
    sector: 'Electrics',
    status: 'Approved',
  },
  {
    term: 'Voltage',
    translation: { hi: 'वोल्टेज', ur: 'وولٹیج' },
    sector: 'Electrics',
    status: 'Pending',
  },

  // --- Safety & Healthcare ---
  {
    term: 'Fire Extinguisher',
    translation: { hi: 'अग्निशामक', ta: 'தீயணைப்பான்' },
    sector: 'Safety',
    status: 'Approved',
  },
  {
    term: 'Evacuation',
    translation: { hi: 'निकासी', ml: 'ഒഴിപ്പിക്കൽ' },
    sector: 'Safety',
    status: 'Approved',
  },
  {
    term: 'Hygiene',
    translation: { hi: 'स्वच्छता', gu: 'સ્વચ્છતા' },
    sector: 'Healthcare',
    status: 'Pending',
  },
  {
    term: 'Sanitization',
    translation: { hi: 'स्वच्छता', ta: 'சுகாதாரம்' },
    sector: 'Healthcare',
    status: 'Approved',
  },

  // --- IT & Office Skills ---
  {
    term: 'Data Entry',
    translation: { hi: 'डेटा एंट्री', ur: 'ڈیٹا انٹری' },
    sector: 'IT',
    status: 'Approved',
  },
  {
    term: 'Spreadsheet',
    translation: { hi: 'स्प्रेडशीट', as: 'স্প্ৰেডশ্বীট' },
    sector: 'IT',
    status: 'Approved',
  },
  {
    term: 'Keyboard',
    translation: { hi: 'कीबोर्ड', bn: 'কীবোর্ড', mr: 'कीबोर्ड' },
    sector: 'IT',
    status: 'Pending',
  },
  {
    term: 'Customer Service',
    translation: { hi: 'ग्राहक सेवा', gu: 'ગ્રાહક સેવા', bn: 'গ্রাহক সেবা' },
    sector: 'Retail',
    status: 'Approved',
  },
  {
    term: 'Feedback',
    translation: { hi: 'प्रतिक्रिया', mr: 'अभिप्राय' },
    sector: 'Retail',
    status: 'Approved',
  },
];

export const MOCK_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'bn', name: 'Bengali' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'ur', name: 'Urdu' },
  { code: 'mr', name: 'Marathi' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'kn', name: 'Kannada' },
  { code: 'as', name: 'Assamese' },
  { code: 'or', name: 'Odia' },
];

// Consistent icon mappings (normalized for lowercase use)
export const fileTypeIcons = {
  pdf: 'FileText',
  ppt: 'FileText',
  docx: 'FileText',
  video: 'Video',
  bookaudio: 'BookAudio',
  document: 'FileText',
  image: 'Image',
  scorm: 'FileArchive',
  text: 'FileText',
};