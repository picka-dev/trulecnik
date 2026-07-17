// ─────────────────────────────────────────────────────────────────────────────
// The Trulečník ruleset — both languages side by side so they stay in sync and
// are easy to correct. Items marked `house: true` are OUR clarifications /
// improvements over classic cut-throat (the resolved edge cases). Those are the
// ones most worth reviewing.
//
// Body text supports a tiny inline markup: **bold**. Each string in `body` is a
// paragraph; use "\n" inside a paragraph string to force a line break.
// ─────────────────────────────────────────────────────────────────────────────

export interface L10n {
  cs: string;
  en: string;
}

export type DiagramKey = 'groups' | 'rack';

export interface Rule {
  id: string;
  title: L10n;
  /** One or more paragraphs. */
  body: L10n[];
  /** True if this is one of our clarifications over classic cut-throat. */
  house?: boolean;
  /** Optional illustration to render alongside the rule. */
  diagram?: DiagramKey;
}

export interface Section {
  /** Anchor id + maps to the nav key `nav.<id>`. */
  id: 'intro' | 'setup' | 'play' | 'fouls' | 'winning' | 'house';
  emoji: string;
  title: L10n;
  intro?: L10n;
  rules: Rule[];
}

export const meta = {
  name: 'Trulečník',
  tagline: {
    cs: 'Kulečník pro tři. Konečně s pravidly, u kterých se nehádáte.',
    en: "Cut-throat billiards for three. Finally with rules you won't argue about.",
  } satisfies L10n,
  lede: {
    cs: 'Tři hráči, jeden stůl, žádné slitování.',
    en: 'Three players, one table, no mercy.',
  } satisfies L10n,
};

export const sections: Section[] = [
  // ── INTRO ──────────────────────────────────────────────────────────────────
  {
    id: 'intro',
    emoji: '🎱',
    title: { cs: 'Co je Trulečník', en: 'What is Trulečník' },
    intro: {
      cs: 'Trulečník je kulečník pro tři hráče najednou. Vychází z klasické hry cut-throat („podřezávání krků"), ale doladili jsme ji tak, aby zmizely všechny sporné momenty, u kterých se odjakživa hádá celý stůl.',
      en: 'Trulečník is billiards for three players at once. It is built on classic cut-throat, but we have tuned it so that every argument-starting edge case now has a clear answer.',
    },
    rules: [
      {
        id: 'idea',
        title: { cs: 'Základní myšlenka', en: 'The basic idea' },
        body: [
          {
            cs: 'Patnáct koulí se rozdělí na tři skupiny po pěti. Každý hráč jednu skupinu „vlastní". Tvým úkolem je sházet koule soupeřů a uchránit ty svoje. **Vyhrává ten, komu na stole zůstane jako poslednímu aspoň jedna vlastní koule.**',
            en: "The fifteen object balls split into three groups of five. Each player owns one group. Your job is to sink your opponents' balls and protect your own. **The last player with at least one of their own balls still on the table wins.**",
          },
        ],
      },
      {
        id: 'equipment',
        title: { cs: 'Co potřebujete', en: 'What you need' },
        body: [
          {
            cs: 'Tři hráče, kulečníkový stůl se šesti kapsami, bílou (hrací) kouli a patnáct číslovaných koulí. Tága klidně sdílejte. A trochu klidu v hlavě, protože zbylí dva hrají proti vám.',
            en: 'Three players, a six-pocket pool table, a cue ball and fifteen numbered balls. Sharing cues is fine. And a cool head, because the other two are playing against you.',
          },
        ],
      },
    ],
  },

  // ── SETUP ──────────────────────────────────────────────────────────────────
  {
    id: 'setup',
    emoji: '🔺',
    title: { cs: 'Příprava hry', en: 'Setting up' },
    rules: [
      {
        id: 'groups',
        title: { cs: 'Tři skupiny koulí', en: 'Three groups of balls' },
        diagram: 'groups',
        body: [
          {
            cs: 'Koule se rozdělí do tří skupin po pěti podle čísel: **skupina A** jsou koule 1–5, **skupina B** koule 6–10 a **skupina C** koule 11–15. Jestli je koule plná nebo půlená, nehraje roli — rozhoduje jen číslo.',
            en: 'The balls form three groups of five by number: **group A** is balls 1–5, **group B** is 6–10, and **group C** is 11–15. Solid or striped does not matter — only the number counts.',
          },
        ],
      },
      {
        id: 'assignment',
        house: true,
        title: { cs: 'Rozdělení skupin', en: 'Who owns which group' },
        body: [
          {
            cs: 'Skupiny si rozlosujte **před rozstřelem** — třeba tahem koule z pytlíku nebo strkem „na dálku" o pořadí. Přiřazení platí **na celou hru** a už se nemění. Hráči se pak střídají **po směru hodinových ručiček.**',
            en: 'Draw for groups **before the break** — pull a ball from a bag, or lag for order. The assignment holds **for the whole game** and never changes. Players then take turns **clockwise.**',
          },
          {
            cs: 'V původní hře se skupina „získávala" až shozením první koule, což vedlo k nejasnostem. My ji přidělujeme dopředu — je to jednoznačné.',
            en: 'In classic cut-throat you "claimed" a group by potting the first ball, which caused disputes. Assigning up front removes all doubt.',
          },
        ],
      },
      {
        id: 'rack',
        title: { cs: 'Postavení koulí', en: 'Racking' },
        diagram: 'rack',
        body: [
          {
            cs: 'Koule postavte do trojúhelníku jako u klasického poolu, špičkou na zadní značku (foot spot). Aby nebyla žádná skupina znevýhodněná, dejte do tří rohů trojúhelníku po jedné kouli z každé skupiny (např. 5, 10 a 15). Zbytek namíchejte.',
            en: 'Rack the balls in a triangle like standard pool, apex on the foot spot. So no group is short-changed, put one ball from each group in the three corners of the triangle (say 5, 10 and 15). Mix the rest.',
          },
        ],
      },
      {
        id: 'break',
        title: { cs: 'Rozstřel', en: 'The break' },
        body: [
          {
            cs: 'Rozstřelující hráč má bílou v ruce za čárou (head string). Rozstřel je platný, když **shodí aspoň jednu kouli, nebo pošle aspoň čtyři koule na mantinel.** Když to nesplní, je to faul a další hráč může buď hrát pozici jak leží, nebo nechat znovu postavit a rozstřelit sám.',
            en: 'The breaker has the cue ball in hand behind the head string. The break is legal if it **pockets at least one ball or drives at least four balls to a cushion.** If it does not, it is a foul and the next player may either play the table as it lies, or have it re-racked and break themselves.',
          },
          {
            cs: 'Když při rozstřelu shodíš soupeřovu kouli, pokračuješ dál. Když spadne jen tvoje vlastní, zůstává dole a tah přechází na dalšího. Když spadne bílá, je to faul.',
            en: "If the break pockets an opponent's ball, you keep shooting. If only your own drops, it stays down and the turn passes on. If the cue ball drops, it is a foul.",
          },
        ],
      },
    ],
  },

  // ── PLAY ───────────────────────────────────────────────────────────────────
  {
    id: 'play',
    emoji: '🎯',
    title: { cs: 'Průběh hry', en: 'Playing' },
    rules: [
      {
        id: 'objective',
        title: { cs: 'Cíl hry', en: 'The goal' },
        body: [
          {
            cs: 'Sházej koule svých soupeřů a hlídej si ty svoje. Jakmile má hráč na stole nula vlastních koulí, **končí ve hře.** Vítězem je ten, komu jako jedinému zůstane aspoň jedna vlastní koule.',
            en: 'Sink your opponents’ balls and guard your own. The moment a player has zero of their own balls left on the table, they are **out.** The winner is the last player with at least one of their own balls remaining.',
          },
        ],
      },
      {
        id: 'turns',
        title: { cs: 'Tahy a pokračování', en: 'Turns and continuation' },
        body: [
          {
            cs: 'Hraješ tak dlouho, dokud každým strkem **legálně shodíš aspoň jednu soupeřovu kouli.** Jakmile žádnou soupeřovu kouli neshodíš (nebo fauluješ), tah přechází na hráče po tvé levici.',
            en: 'You keep shooting as long as every shot **legally pockets at least one opponent ball.** The moment you fail to pocket an opponent ball (or you foul), your turn passes to the player on your left.',
          },
        ],
      },
      {
        id: 'legal-shot',
        title: { cs: 'Platný strk', en: 'A legal shot' },
        body: [
          {
            cs: 'Bílá musí nejdřív zasáhnout nějakou kouli — je jedno kterou, i tvoje vlastní se počítá jako první kontakt. Po kontaktu musí buď padnout nějaká koule, nebo se musí aspoň jedna koule dotknout mantinelu. Jinak je to faul.',
            en: 'The cue ball must first touch some object ball — any of them, even your own counts as first contact. After contact, either a ball must be pocketed or at least one ball must reach a cushion. Otherwise it is a foul.',
          },
        ],
      },
      {
        id: 'own-ball',
        house: true,
        title: { cs: 'Když spadne tvoje vlastní koule', en: 'When you sink your own ball' },
        body: [
          {
            cs: 'Stane se. Tvoje shozená koule **zůstává dole** — právě jsi si ublížil sám. Shození vlastní koule tě ale **neopravňuje pokračovat v tahu.** Když jsi jedním strkem shodil jen vlastní koule a žádnou soupeřovu, tah končí. Žádný další trest za to není.',
            en: 'It happens. Your pocketed ball **stays down** — you have just hurt yourself. But sinking your own ball does **not** let you keep shooting. If a shot pocketed only your own ball(s) and no opponent’s, your turn ends. There is no extra penalty beyond the loss.',
          },
        ],
      },
    ],
  },

  // ── FOULS ──────────────────────────────────────────────────────────────────
  {
    id: 'fouls',
    emoji: '🚫',
    title: { cs: 'Fauly', en: 'Fouls' },
    intro: {
      cs: 'Faul tě nikdy nestojí kouli — ale pomůže tvým soupeřům. Právě proto se vyplatí hrát čistě.',
      en: "A foul never costs you a ball — but it helps your opponents. That is exactly why clean play pays off.",
    },
    rules: [
      {
        id: 'what-is-foul',
        title: { cs: 'Co je faul', en: 'What counts as a foul' },
        body: [
          {
            cs: 'Faul je zejména: shození bílé koule (kiks do kapsy), bílá mimo stůl, žádný kontakt s koulí, nebo když se po kontaktu nic neshodí a žádná koule se nedotkne mantinelu. Faul je i dvojitý zásah nebo tlačená koule.',
            en: 'A foul is, in particular: pocketing the cue ball (a scratch), the cue ball leaving the table, hitting no ball at all, or — after contact — pocketing nothing while no ball reaches a cushion. Double hits and push shots are fouls too.',
          },
        ],
      },
      {
        id: 'penalty',
        house: true,
        title: { cs: 'Trest za faul', en: 'The penalty for a foul' },
        body: [
          {
            cs: 'Za každý faul platí obojí najednou:',
            en: 'Every foul triggers both of these at once:',
          },
          {
            cs: '**1.** Každý soupeř, který je **pořád ve hře** a má nějakou svou kouli shozenou, dostane **jednu** svou kouli zpět na stůl. Faulující hráč zpět nedostává nic.',
            en: '**1.** Each opponent who is **still in the game** and has any of their own balls pocketed gets **one** of them returned to the table. The fouling player gets nothing back.',
          },
          {
            cs: '**2.** Následující hráč (po levici) dostane **bílou do ruky** — položí ji, kam chce. Výjimka: faul při rozstřelu → bílá do ruky za čárou.',
            en: '**2.** The next player (to the left) takes the **cue ball in hand** — placed anywhere. Exception: a foul on the break → cue ball in hand behind the head string.',
          },
          {
            cs: 'Shozené číslované koule z faulovaného strku zůstávají dole. Zpět se vrací jen bílá.',
            en: 'Object balls pocketed on the fouling shot stay down. Only the cue ball comes back.',
          },
        ],
      },
      {
        id: 'spotting',
        house: true,
        title: { cs: 'Kam se vrací koule', en: 'Where returned balls go' },
        body: [
          {
            cs: 'Vrácená koule se pokládá na zadní značku (foot spot). Když je obsazená, položí se těsně za ni na podélné ose směrem k zadnímu mantinelu, na první volné místo. Vrací se vždy koule toho hráče, kterému patří, a **jen hráčům, kteří jsou pořád ve hře** — vyřazeného hráče vrácená koule neoživí.',
            en: 'A returned ball goes on the foot spot. If it is occupied, place it just behind, on the long string toward the foot rail, at the first free spot. A returned ball always belongs to its owner and goes **only to players still in the game** — it never revives an eliminated player.',
          },
        ],
      },
    ],
  },

  // ── WINNING ────────────────────────────────────────────────────────────────
  {
    id: 'winning',
    emoji: '🏆',
    title: { cs: 'Vyřazení a vítězství', en: 'Elimination and winning' },
    rules: [
      {
        id: 'elimination',
        house: true,
        title: { cs: 'Kdy jsi vyřazen', en: 'When you are eliminated' },
        body: [
          {
            cs: 'Jsi ze hry ve chvíli, kdy máš na stole **nula vlastních koulí.** Koule shozené jedním strkem se počítají **naráz** — nejdřív se dohraje strk, teprve pak se vyhodnotí, kdo skončil. Platí to i pro tebe: když si sám shodíš svou poslední kouli, končíš — i kdyby sis ji „podřízl" vlastním tágem.',
            en: 'You are out the instant you have **zero of your own balls** on the table. Balls pocketed on a single shot count **simultaneously** — the shot finishes first, then eliminations are checked. This applies to you too: if you sink your own last ball, you are out — even if you did it with your own cue.',
          },
        ],
      },
      {
        id: 'win-condition',
        house: true,
        title: { cs: 'Kdo vyhrává', en: 'Who wins' },
        body: [
          {
            cs: 'Jakmile po dohraném strku zůstane s koulemi na stole **jediný hráč, okamžitě vyhrává.** Nemusí už nic dohrávat.',
            en: 'As soon as, after a shot settles, exactly **one player** has any balls left, that player **wins immediately.** No need to clear anything further.',
          },
        ],
      },
      {
        id: 'clear-table',
        house: true,
        title: {
          cs: 'Když jedním strkem smeteš celý stůl',
          en: 'Clearing the whole table in one shot',
        },
        body: [
          {
            cs: 'Když jediným strkem shodíš **poslední koule všech soupeřů naráz** (a na stole zůstanou jen tvoje), **vyhráváš.** A když nastane úplná rarita a jeden strk smete poslední koule úplně všech včetně tebe, **vítězem je ten, kdo strkal.**',
            en: "If a single shot pockets **all remaining opponents' last balls at once** (leaving only yours), you **win.** And in the rare freak case where one shot clears the last balls of literally everyone including you, the **shooter wins.**",
          },
        ],
      },
      {
        id: 'multi-elim',
        house: true,
        title: {
          cs: 'Když jedním strkem vypadne víc hráčů',
          en: 'When one shot knocks out several players',
        },
        body: [
          {
            cs: 'Po strku spočítej hráče, kterým zůstala aspoň jedna vlastní koule. Zůstane-li jeden, vyhrává. Zůstanou-li dva a víc, hra pokračuje: vyřazení jsou ze hry a tah jde na dalšího žijícího hráče po levici. Ty pokračuješ v tahu jen tehdy, když byl strk platný, shodil aspoň jednu soupeřovu kouli **a ty jsi sám nevypadl.**',
            en: 'After the shot, count the players who still have at least one of their own balls. If one remains, they win. If two or more remain, play continues: the eliminated are out and the turn passes to the next surviving player on the left. You keep shooting only if the shot was legal, pocketed at least one opponent ball, **and you did not eliminate yourself.**',
          },
        ],
      },
      {
        id: 'no-reentry',
        house: true,
        title: { cs: 'Kdo vypadne, nevrací se', en: 'Once you are out, you are out' },
        body: [
          {
            cs: 'Vyřazený hráč se do hry **nevrací.** Vrácené koule z faulů dostávají jen hráči, kteří pořád mají na stole aspoň jednu svou kouli. (Existuje i varianta s návratem, ale u nás platí čistý vyřazovací režim, aby hra vždy spěla ke konci.)',
            en: 'An eliminated player **does not come back.** Balls returned by fouls go only to players who still have at least one ball on the table. (A re-entry variant exists, but we play straight knockout so the game always heads toward an end.)',
          },
        ],
      },
      {
        id: 'stalemate',
        house: true,
        title: { cs: 'Patová situace', en: 'Stalemate' },
        body: [
          {
            cs: 'Když se všichni tři shodnou, že se hra nikam nehne (třeba samé bezpečné strky dokola), nechte znovu postavit. Nový rozstřel má hráč po levici toho, kdo rozstřeloval naposledy. Skupiny zůstávají stejné.',
            en: 'If all three agree the game is going nowhere (endless safeties, say), re-rack. The new break goes to the player on the left of whoever broke last. Groups stay the same.',
          },
        ],
      },
    ],
  },

  // ── HOUSE RULES RECAP ───────────────────────────────────────────────────────
  {
    id: 'house',
    emoji: '🛠️',
    title: {
      cs: 'Co jsme oproti klasice změnili',
      en: 'What we changed vs. classic cut-throat',
    },
    intro: {
      cs: 'Klasický cut-throat je zábava, ale nechává spoustu situací nedořešených. Tady je přehled míst, kde jsme udělali jasno. Přesně u těchto pravidel nás nejvíc zajímá, jestli je hrajete stejně.',
      en: "Classic cut-throat is fun, but it leaves a lot of situations unresolved. Here is a summary of where we made a firm call. These are exactly the rules we are most curious whether you play the same way.",
    },
    rules: [
      {
        id: 'recap-groups',
        house: true,
        title: { cs: 'Skupiny se přidělují předem', en: 'Groups are assigned up front' },
        body: [
          {
            cs: 'Žádné „získávání" skupiny shozením první koule. Losuje se před rozstřelem a platí na celou hru.',
            en: 'No claiming a group by the first pot. Draw before the break, fixed for the game.',
          },
        ],
      },
      {
        id: 'recap-own-ball',
        house: true,
        title: {
          cs: 'Vlastní koule se počítá, ale nepokračuješ',
          en: 'Your own ball counts, but you do not continue',
        },
        body: [
          {
            cs: 'Shozená vlastní koule zůstává dole bez dalšího trestu, ale neopravňuje k dalšímu strku.',
            en: 'A sunk own-ball stays down with no extra penalty, but does not earn another shot.',
          },
        ],
      },
      {
        id: 'recap-foul',
        house: true,
        title: {
          cs: 'Faul = bílá do ruky + koule zpět soupeřům',
          en: 'Foul = ball in hand + balls back to opponents',
        },
        body: [
          {
            cs: 'Sjednotili jsme trest: soupeři ve hře dostanou po jedné kouli zpět a další hráč dostává bílou do ruky.',
            en: 'We unified the penalty: opponents still in the game each get one ball back, and the next player gets ball in hand.',
          },
        ],
      },
      {
        id: 'recap-elim',
        house: true,
        title: {
          cs: 'Rozhoduje stav stolu, ne kdo strkal',
          en: 'The table state decides, not who shot',
        },
        body: [
          {
            cs: 'Koule z jednoho strku padají naráz; rozhoduje výsledný stav stolu. Kdo smete všechny soupeře, vyhrává.',
            en: 'Balls from one shot fall simultaneously; the resulting table state decides. Clear all opponents and you win.',
          },
        ],
      },
      {
        id: 'recap-no-reentry',
        house: true,
        title: { cs: 'Bez návratu do hry', en: 'No re-entry' },
        body: [
          {
            cs: 'Kdo přijde o všechny koule, končí. Vrácené koule nikoho neoživují.',
            en: 'Lose all your balls and you are done. Returned balls revive no one.',
          },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// One-page cheat sheet — short, quotable lines for mid-game arguments.
// ─────────────────────────────────────────────────────────────────────────────

export const cheatsheet: L10n[] = [
  {
    cs: '3 hráči, 15 koulí, 3 skupiny: 1–5, 6–10, 11–15.',
    en: '3 players, 15 balls, 3 groups: 1–5, 6–10, 11–15.',
  },
  {
    cs: 'Skupiny se losují před rozstřelem a nemění se.',
    en: 'Groups are drawn before the break and never change.',
  },
  {
    cs: 'Sházej soupeře, chraň si svoje. Poslední s vlastní koulí na stole vyhrává.',
    en: 'Sink opponents, protect your own. Last with a ball on the table wins.',
  },
  {
    cs: 'Hraješ dál, dokud každým strkem shodíš soupeřovu kouli.',
    en: 'Keep shooting while every shot pockets an opponent ball.',
  },
  {
    cs: 'Vlastní koule: zůstává dole, ale nepokračuješ.',
    en: 'Own ball: it stays down, but you do not continue.',
  },
  {
    cs: 'Faul: soupeři ve hře dostanou kouli zpět, další hráč má bílou do ruky.',
    en: 'Foul: opponents in the game get a ball back, next player has ball in hand.',
  },
  {
    cs: 'Nula vlastních koulí = konec. Návrat není.',
    en: 'Zero of your own balls = out. No coming back.',
  },
  {
    cs: 'Koule z jednoho strku padají naráz — rozhoduje stav stolu.',
    en: 'Balls from one shot fall at once — the table state decides.',
  },
];
