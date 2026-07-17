// UI "chrome" strings — navigation, buttons, labels. The actual rules content
// lives in src/data/rules.ts (both languages side by side, easy to correct).

export const languages = {
  cs: 'Čeština',
  en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'cs';
export const locales = Object.keys(languages) as Locale[];

export const ui = {
  cs: {
    'lang.name': 'Čeština',
    'lang.switchTo': 'English',
    'lang.switchToCode': 'EN',

    'nav.intro': 'Co to je',
    'nav.setup': 'Příprava',
    'nav.play': 'Jak se hraje',
    'nav.fouls': 'Fauly',
    'nav.winning': 'Konec hry',
    'nav.house': 'Naše úpravy',
    'nav.cheatsheet': 'Tahák',

    'hero.cta': 'Přečíst pravidla',
    'hero.ctaCheatsheet': 'Rovnou na tahák',

    'badge.house': 'Naše úprava',
    'badge.houseTitle': 'Vylepšené pravidlo — vyřešená sporná situace',

    'toc.title': 'Obsah',
    'jumpTo': 'Přejít na',

    'cheatsheet.title': 'Tahák na jednu stranu',
    'cheatsheet.subtitle': 'Rychlý přehled pro chvíle, kdy se hádáte u stolu.',
    'print': 'Vytisknout pravidla',

    'legend.title': 'Skupiny koulí',
    'legend.groupA': 'Skupina A — koule 1 až 5',
    'legend.groupB': 'Skupina B — koule 6 až 10',
    'legend.groupC': 'Skupina C — koule 11 až 15',

    'footer.tagline': 'Kulečník pro tři, konečně s jasnými pravidly.',
    'footer.madeWith': 'Od hráčů pro hráče.',
    'footer.draftNote':
      'Pravidla jsou zatím pracovní návrh — sporné situace jsme vyřešili po svém. Něco byste hráli jinak? Dej vědět.',
  },
  en: {
    'lang.name': 'English',
    'lang.switchTo': 'Čeština',
    'lang.switchToCode': 'CS',

    'nav.intro': 'What it is',
    'nav.setup': 'Setup',
    'nav.play': 'How to play',
    'nav.fouls': 'Fouls',
    'nav.winning': 'Ending the game',
    'nav.house': 'Our fixes',
    'nav.cheatsheet': 'Cheat sheet',

    'hero.cta': 'Read the rules',
    'hero.ctaCheatsheet': 'Skip to cheat sheet',

    'badge.house': 'Our fix',
    'badge.houseTitle': 'Improved rule — a resolved edge case',

    'toc.title': 'Contents',
    'jumpTo': 'Jump to',

    'cheatsheet.title': 'One-page cheat sheet',
    'cheatsheet.subtitle': 'A quick reference for when the table starts arguing.',
    'print': 'Print the rules',

    'legend.title': 'Ball groups',
    'legend.groupA': 'Group A — balls 1 to 5',
    'legend.groupB': 'Group B — balls 6 to 10',
    'legend.groupC': 'Group C — balls 11 to 15',

    'footer.tagline': 'Billiards for three, finally with clear rules.',
    'footer.madeWith': 'By players, for players.',
    'footer.draftNote':
      'These rules are a working draft — we resolved the edge cases our own way. Play something differently? Let us know.',
  },
} as const;

export type UIKey = keyof (typeof ui)['cs'];
