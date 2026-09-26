// Single source of truth for all client-editable wedding invitation data.
// Components consume this data dynamically without hardcoding names, dates, or text.

export const weddingData = {
  couple: {
    brideName: "Sultana Tabasum",
    groomName: "Jawed Ansari",
    brideInitial: "S",
    groomInitial: "J",
    monogram: "S ♥ J",
    subtitle: "A journey of two souls bound by faith, love, and grace."
  },

  hero: {
    bismillah: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    bismillahTranslation: "In the name of Allah, the Most Gracious, the Most Merciful",
    greeting: "With the blessings of Allah Almighty",
    invitationText: "Together with their families, they joyfully invite you to celebrate their union of togetherness.",
    weddingDate: "16 December 2026",
    venueSummary: "The Grand Palace, Royal Garden Estate",
    scrollPrompt: "Scroll to explore our story"
  },

  bride: {
    role: "THE BRIDE",
    name: "Ayesha Khan",
    fatherName: "Mr. Imran Khan",
    motherName: "Mrs. Farida Khan",
    profession: "Software Engineer",
    personalLine: "A graceful soul stepping forward with hope, elegance, and infinite prayers into a beautiful new chapter.",
    quote: "And among His signs is that He created for you spouses from among yourselves so that you may find tranquility in them."
  },

  groom: {
    role: "THE GROOM",
    name: "Muhammad Ahmed",
    fatherName: "Mr. Ahmed Rahman",
    motherName: "Mrs. Yasmin Rahman",
    profession: "Entrepreneur",
    personalLine: "A steadfast heart embracing a sacred covenant with kindness, devotion, and joy.",
    quote: "Love is not about finding the perfect person, but seeing an imperfect person perfectly through Allah's grace."
  },

  union: {
    title: "TWO STORIES",
    subtitle: "ONE SACRED BEGINNING",
    description: "Two paths guided by faith, woven together by divine decree, now embarking on an eternal journey of love and togetherness."
  },

  dua: {
    title: "Sacred Du'a for the Union",
    arabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    transliteration: "Barakallahu laka wa baraka 'alayka wa jama'a baynakuma fii khayr",
    translation: "May Allah bless you, and shower His blessings upon you, and join you together in goodness and harmony.",
    reference: "Sunan Abi Dawud 2130",
    ending: "آمين يا رب العالمين"
  },

  events: [
    {
      id: "mehndi",
      title: "Mehndi Ceremony",
      date: "12 December 2026",
      time: "07:00 PM onwards",
      venue: "Rose Garden Pavilion",
      address: "Palace Road, Block 4, Royal Enclave",
      colorTag: "Rose & Gold",
      description: "An evening filled with vibrant colors, traditional songs, henna artistry, and joyful laughter.",
      gmapUrl: "https://maps.google.com/?q=Rose+Garden+Pavilion"
    },
    {
      id: "chowk",
      title: "Chowk & Sangeet",
      date: "14 December 2026",
      time: "06:00 PM onwards",
      venue: "Family Residence",
      address: "Villa 14, Gardenia Crest, Heritage Hills",
      colorTag: "Emerald & Cream",
      description: "An intimate gathering of traditional rituals, fragrant flowers, and family blessings.",
      gmapUrl: "https://maps.google.com/?q=Family+Residence"
    },
    {
      id: "barat",
      title: "Barat Procession",
      date: "16 December 2026",
      time: "08:00 PM",
      venue: "Grand Palace Ballroom",
      address: "7th Avenue, Imperial Boulevard, Sector 9",
      colorTag: "Royal Gold & Ivory",
      description: "The grand arrival of the groom and family welcomed with royal warmth and celebrations.",
      gmapUrl: "https://maps.google.com/?q=Grand+Palace+Ballroom"
    },
    {
      id: "nikah",
      title: "Sacred Nikah",
      date: "16 December 2026",
      time: "09:00 PM",
      venue: "Grand Palace Central Hall",
      address: "7th Avenue, Imperial Boulevard, Sector 9",
      colorTag: "Pure White & Gold",
      description: "The holy solemnization of marriage in the presence of beloved family and elders.",
      gmapUrl: "https://maps.google.com/?q=Grand+Palace+Central+Hall"
    },
    {
      id: "rukhsati",
      title: "Rukhsati",
      date: "17 December 2026",
      time: "11:00 AM",
      venue: "Grand Palace Courtyard",
      address: "7th Avenue, Imperial Boulevard, Sector 9",
      colorTag: "Soft Blush & Sage",
      description: "The emotional sendoff of the bride with tears of joy, heartfelt du'as, and unconditional love.",
      gmapUrl: "https://maps.google.com/?q=Grand+Palace+Courtyard"
    }
  ],

  countdown: {
    targetDate: "2026-12-16T21:00:00",
    heading: "Counting Down to the Sacred Day",
    subtext: "Insha'Allah, we look forward to celebrating this blessed occasion with you."
  },

  greetings: {
    enabled: true,
    heading: "Send Your Blessings & Wishes",
    subtext: "Your du'as and warm wishes mean the world to us. Send your personal blessing directly to the couple.",
    whatsappNumber: "919999999999"
  },

  footer: {
    closingText: "With love, prayers and endless blessings from the Khan & Rahman families.",
    islamicSignoff: "جَزاكُمُ اللهُ خَيْراً",
    copyright: "© 2026 Ayesha & Muhammad Wedding. Crafted with devotion."
  }
};
