// ─────────────────────────────────────────────────────────────────────────────
// The Trulečník ruleset — both languages side by side so they stay in sync and
// are easy to correct. Items marked `house: true` are OUR clarifications /
// improvements over classic cut-throat (the resolved edge cases). Those are the
// ones most worth reviewing.
//
// Body text supports a tiny inline markup: **bold**. Each string in `body` is a
// separate paragraph (rendered as its own <p>).
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
    cs: 'Kulečník pro tři, také zvaný cut-throat, s trochu upravenými pravidly.',
    en: "Cut-throat billiards for three. Finally with rules you won't argue about.",
  } satisfies L10n,
};

export const sections: Section[] = [
  // ── INTRO ──────────────────────────────────────────────────────────────────
  {
    id: 'intro',
    emoji: '🎱',
    title: { cs: 'Co je Trulečník', en: 'What is Trulečník' },
    intro: {
      cs: 'Trulečník je kulečník pro tři hráče najednou. Vychází z klasické hry cut-throat, ale doladili jsme ji tak, aby zmizela většina sporných momentů.',
      en: 'Trulečník is billiards for three players at once. It is built on classic cut-throat, but we have tuned it so that every argument-starting edge case now has a clear answer.',
    },
    rules: [
      {
        id: 'idea',
        title: { cs: 'Základní myšlenka', en: 'The basic idea' },
        body: [
          {
            cs: 'Patnáct koulí se rozdělí na tři skupiny po pěti. Každý hráč má jednu skupinu koulí. Tvým úkolem je potopit koule soupeřů a uchránit ty svoje. **Vyhrává ten, komu na stole zůstane jako poslednímu aspoň jedna vlastní koule.**',
            en: "The fifteen object balls split into three groups of five. Each player owns one group. Your job is to sink your opponents' balls and protect your own. **The last player with at least one of their own balls still on the table wins.**",
          },
        ],
      },
      {
        id: 'equipment',
        title: { cs: 'Co potřebujete', en: 'What you need' },
        body: [
          {
            cs: 'Tři hráče, kulečníkový stůl se šesti kapsami, bílou (hrací) kouli a patnáct číslovaných koulí. Tága klidně sdílejte.',
            en: 'Three players, a six-pocket pool table, a cue ball and fifteen numbered balls. Sharing cues is fine.',
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
            cs: 'Skupiny si rozdělte před rozstřelem — kámen-nůžky-papír, tahem koule z pytlíku nebo šťouchem „na dálku" o pořadí — je to úplně jedno, žádná skupina koulí nemá specifickou výhodu. Přiřazení platí **na celou hru** a už se nemění. Hráči se pak střídají **podle pořadí skupin (první A, pak B a poslední C).**',
            en: 'Split the groups **before the break** — rock-paper-scissors, drawing a ball from a bag, or lagging for order — it truly does not matter, no group has a built-in advantage. The assignment holds **for the whole game** and never changes. Players then take turns **in group order (A first, then B, and C last).**',
          },
          {
            cs: 'V původní hře se skupina „získávala" až potopením první koule, což vedlo k nejasnostem. My ji přidělujeme dopředu — je to jednoznačné.',
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
            cs: 'Rozstřelující hráč má bílou v ruce za čárou (head string). Rozstřel je platný, když **potopí aspoň jednu kouli, nebo pošle aspoň čtyři koule na mantinel.** Když to nesplní, je to faul a další hráč může buď hrát pozici jak leží, nebo nechat znovu postavit a rozstřelit sám.',
            en: 'The breaker has the cue ball in hand behind the head string. The break is legal if it **pockets at least one ball or drives at least four balls to a cushion.** If it does not, it is a foul and the next player may either play the table as it lies, or have it re-racked and break themselves.',
          },
          {
            cs: 'Když při rozstřelu potopíš soupeřovu kouli, pokračuješ dál. Když spadne jen tvoje vlastní, zůstává dole a tah přechází na dalšího. Když spadne bílá, je to faul: soupeř, který hraje po tobě, dostává bílou do ruky za čárou a hraje na koule na druhé straně čáry.',
            en: "If the break pockets an opponent's ball, you keep shooting. If only your own drops, it stays down and the turn passes on. If the cue ball drops, it is a foul: the opponent who shoots after you takes the cue ball in hand behind the head string and plays at the balls on the far side of the line.",
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
            cs: 'Potápěj koule svých soupeřů a hlídej si ty svoje. Jakmile má hráč na stole nula vlastních koulí, **končí ve hře** (ale nemusí to být napořád). Vítězem je ten, komu jako jedinému zůstane aspoň jedna vlastní koule.',
            en: "Sink your opponents' balls and guard your own. The moment a player has zero of their own balls left on the table, they are **out** (though not necessarily for good). The winner is the last player with at least one of their own balls remaining.",
          },
        ],
      },
      {
        id: 'turns',
        title: { cs: 'Tahy a pokračování', en: 'Turns and continuation' },
        body: [
          {
            cs: 'Hraješ tak dlouho, dokud každým šťouchem **legálně potopíš aspoň jednu soupeřovu kouli.** Jakmile žádnou soupeřovu kouli nepotopíš (nebo fauluješ), tah přechází na dalšího hráče v pořadí skupin (A → B → C → A atd.).',
            en: 'You keep shooting as long as every shot **legally pockets at least one opponent ball.** The moment you fail to pocket an opponent ball (or you foul), your turn passes to the next player in group order (A → B → C → A …).',
          },
        ],
      },
      {
        id: 'legal-shot',
        house: true,
        title: { cs: 'Platný šťouch', en: 'A legal shot' },
        body: [
          {
            cs: 'Bílá musí nejdřív zasáhnout některou soupeřovu kouli — je jedno kterou. Když bílá zasáhne jako první tvoji vlastní kouli, je to faul. Soupeř, který hraje po tobě, si v tom případě nebere bílou do ruky, ale má **dva šťouchy** — prvním si může bílou rozehrát do lepší pozice a teprve druhým potápět. Po prvním kontaktu navíc musí buď padnout nějaká koule, nebo se aspoň jedna koule musí dotknout mantinelu. Jinak je to faul se stejným trestem (dva šťouchy pro soupeře).',
            en: "The cue ball must first strike one of your opponents' balls — any of them will do. If the cue ball hits one of your own balls first, that is a foul. The opponent who shoots next does not get ball in hand for it; instead they get **two shots** — they may use the first to nudge the cue ball into a better spot and only pot on the second. On top of that, after the first contact a ball must be pocketed or at least one ball must reach a cushion. Otherwise it is a foul with the same penalty (two shots for the next opponent).",
          },
        ],
      },
      {
        id: 'own-ball',
        house: true,
        title: { cs: 'Když spadne tvoje vlastní koule', en: 'When you sink your own ball' },
        body: [
          {
            cs: 'Stane se. Tvoje potopená koule **zůstává dole** — právě jsi si ublížil sám a navíc jsi pomohl soupeři, který hraje v kole před tebou: díky tobě se mu vrací jedna jeho koule do hry, pokud nějakou potopenou má. Vrácená koule se pokládá na zadní značku (foot spot) stejně jako každá jiná vrácená koule. Potopením vlastní koule ti končí tah — bílá zůstává ležet a normálně hraje další hráč v pořadí. Když jsi ale jedním šťouchem potopil svoji kouli i soupeřovu, vrátí se do hry i ta tvoje potopená koule.',
            en: 'It happens. Your potted ball **stays down** — you have just hurt yourself, and on top of that you have helped the opponent who takes their turn just before you: thanks to you, one of their balls comes back into play, provided they have any pocketed. The returned ball goes on the foot spot, just like any other returned ball. Potting your own ball ends your turn — the cue ball stays where it lies and the next player simply plays on. If, however, a single shot potted both your own ball and an opponent’s, then your potted ball comes back into play as well.',
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
            cs: 'Faul je zejména: potopení bílé koule, bílá mimo stůl, žádný kontakt s koulí, první kontakt s vlastní koulí, nebo když se po kontaktu nic nepotopí a žádná koule se nedotkne mantinelu. Faul je i dvojitý zásah nebo tlačená koule.',
            en: 'A foul is, in particular: pocketing the cue ball (a scratch), the cue ball leaving the table, hitting no ball at all, hitting one of your own balls first, or — after contact — pocketing nothing while no ball reaches a cushion. Double hits and push shots are fouls too.',
          },
        ],
      },
      {
        id: 'penalty',
        house: true,
        title: { cs: 'Trest za faul', en: 'The penalty for a foul' },
        body: [
          {
            cs: 'Každý faul má dva důsledky zároveň — ten druhý závisí na tom, kde skončí bílá:',
            en: 'Every foul carries two consequences at once — the second one depends on where the cue ball ends up:',
          },
          {
            cs: '**1.** Následující hráč dostane **jednu** svoji potopenou kouli zpět na stůl, pokud nějakou potopenou má. Platí to **i když je tento hráč už vyřazený** — vrácená koule ho rovnou vrací zpátky do hry. Faulující hráč nedostává nic.',
            en: '**1.** The next player gets **one** of their own pocketed balls returned to the table, if they have any pocketed. This holds **even if that player is already eliminated** — the returned ball brings them straight back into the game. The fouling player gets nothing.',
          },
          {
            cs: '**2.** Co dostane soupeř navíc, závisí na bílé:',
            en: '**2.** What the next player gets on top of that depends on the cue ball:',
          },
          {
            cs: '**Bílá skončila mimo hrací plochu** — spadla do kapsy, sletěla ze stolu, nebo jde o faul z rozstřelu. Následující hráč dostává **bílou do ruky** a položí ji, kam chce (u faulu z rozstřelu za čáru).',
            en: '**The cue ball left the playing area** — potted, off the table, or a foul on the break. The next player takes the **cue ball in hand** and places it anywhere (behind the head string after a break foul).',
          },
          {
            cs: '**Bílá zůstala na stole** — žádný kontakt, první kontakt s vlastní koulí, nebo se po kontaktu nic nepotopilo ani se žádná koule nedotkla mantinelu. Bílá zůstává, kde leží, a následující hráč má **dva šťouchy** (prvním si může bílou rozehrát, potápí až druhým).',
            en: '**The cue ball stayed on the table** — no contact, first contact with one of your own balls, or nothing potted and no ball reaching a cushion after contact. The cue ball stays where it lies and the next player gets **two shots** (reposition the cue ball with the first, only pot on the second).',
          },
          {
            cs: 'Číslované koule potopené faulovaným šťouchem zůstávají dole. Na stůl se vrací jen bílá (když opustila hrací plochu) a jedna soupeřova koule podle bodu 1.',
            en: "Numbered balls potted on the fouling shot stay down. Only the cue ball comes back (when it left the playing area), plus one of the next player's balls under point 1.",
          },
        ],
      },
      {
        id: 'spotting',
        house: true,
        title: { cs: 'Kam se vrací koule', en: 'Where returned balls go' },
        body: [
          {
            cs: 'Vrácená koule se pokládá na zadní značku (foot spot). Když je obsazená, položí se těsně za ni na podélné ose směrem k zadnímu mantinelu, na první volné místo.',
            en: 'A returned ball goes on the foot spot. If it is occupied, place it just behind it on the long string toward the foot rail, at the first free spot.',
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
            cs: 'Jsi ze hry ve chvíli, kdy máš na stole **nula vlastních koulí.** Koule potopené jedním šťouchem se počítají **naráz** — nejdřív se dohraje šťouch, teprve pak se vyhodnotí, kdo skončil. Platí to i pro tebe: když si sám potopíš svou poslední kouli, končíš — i kdyby sis ji „podřízl" vlastním tágem.',
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
            cs: 'Jakmile po dohraném šťouchu zůstane s koulemi na stole **jediný hráč, okamžitě vyhrává.** Nemusí už nic dohrávat.',
            en: 'As soon as, after a shot settles, exactly **one player** has any balls left, that player **wins immediately.** No need to clear anything further.',
          },
        ],
      },
      {
        id: 'clear-table',
        house: true,
        title: {
          cs: 'Když jedním šťouchem smeteš celý stůl',
          en: 'Clearing the whole table in one shot',
        },
        body: [
          {
            cs: 'Když jediným šťouchem potopíš **poslední koule všech soupeřů naráz** (a na stole zůstanou jen tvoje), **vyhráváš.**',
            en: "If a single shot pockets **all remaining opponents' last balls at once** (leaving only yours), you **win.**",
          },
        ],
      },
      {
        id: 'multi-elim',
        house: true,
        title: {
          cs: 'Když jedním šťouchem vypadne víc hráčů',
          en: 'When one shot knocks out several players',
        },
        body: [
          {
            cs: 'Po šťouchu spočítej hráče, kterým zůstala aspoň jedna vlastní koule. Zůstane-li jeden, vyhrává. Zůstanou-li dva a víc, hra pokračuje: vyřazení jsou (prozatím) ze hry a tah jde na dalšího žijícího hráče v pořadí skupin. Ty pokračuješ v tahu jen tehdy, když byl šťouch platný, potopil aspoň jednu soupeřovu kouli **a ty jsi sám nevypadl.**',
            en: 'After the shot, count the players who still have at least one of their own balls. If one remains, they win. If two or more remain, play continues: the eliminated are out (for now) and the turn passes to the next surviving player in group order. You keep shooting only if the shot was legal, pocketed at least one opponent ball, **and you did not eliminate yourself.**',
          },
        ],
      },
      {
        id: 'stalemate',
        house: true,
        title: { cs: 'Patová situace', en: 'Stalemate' },
        body: [
          {
            cs: 'Když se všichni tři shodnou, že se hra nikam nehne (třeba samé bezpečné šťouchy dokola), nechte znovu postavit. Nový rozstřel má další hráč po tom, kdo rozstřeloval naposledy. Skupiny zůstávají stejné.',
            en: 'If all three agree the game is going nowhere (endless safeties, say), re-rack. The new break goes to the next player in group order after whoever broke last. Groups stay the same.',
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
            cs: 'Žádné „získávání" skupiny potopením první koule. Losuje se před rozstřelem a platí na celou hru.',
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
            cs: 'Potopená vlastní koule zůstává dole, tvůj tah končí a soupeři před tebou se vrací jedna koule do hry.',
            en: 'A sunk own-ball stays down, your turn ends, and the opponent before you gets one ball back.',
          },
        ],
      },
      {
        id: 'recap-foul',
        house: true,
        title: {
          cs: 'Faul = koule zpět + bílá do ruky nebo dva šťouchy',
          en: 'Foul = a ball back + ball in hand or two shots',
        },
        body: [
          {
            cs: 'Sjednotili jsme trest: následující hráč dostane jednu kouli zpět (i když už byl vyřazený) a k tomu bílou do ruky, nebo dva šťouchy — podle toho, kde skončí bílá.',
            en: 'We unified the penalty: the next player gets one ball back (even if they were already eliminated), plus either ball in hand or two shots — depending on where the cue ball ends up.',
          },
        ],
      },
      {
        id: 'recap-elim',
        house: true,
        title: {
          cs: 'Rozhoduje stav stolu, ne kdo šťouchal',
          en: 'The table state decides, not who shot',
        },
        body: [
          {
            cs: 'Koule z jednoho šťouchu padají naráz; rozhoduje výsledný stav stolu. Kdo smete všechny soupeře, vyhrává.',
            en: 'Balls from one shot fall simultaneously; the resulting table state decides. Clear all opponents and you win.',
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
    cs: 'Potápěj soupeře, chraň si svoje. Poslední s vlastní koulí na stole vyhrává.',
    en: 'Sink opponents, protect your own. Last with a ball on the table wins.',
  },
  {
    cs: 'Hraješ dál, dokud každým šťouchem potopíš soupeřovu kouli.',
    en: 'Keep shooting while every shot pockets an opponent ball.',
  },
  {
    cs: 'Vlastní koule: zůstává dole, tah končí, soupeři před tebou se vrací koule.',
    en: 'Own ball: it stays down, your turn ends, the opponent before you gets a ball back.',
  },
  {
    cs: 'Faul: následující hráč dostane kouli zpět a k tomu bílou do ruky, nebo dva šťouchy.',
    en: 'Foul: the next player gets a ball back, plus ball in hand or two shots.',
  },
  {
    cs: 'Nula vlastních koulí = konec — ale faul soupeře tě může vrátit do hry.',
    en: "Zero of your own balls = out — but an opponent's foul can bring you back.",
  },
  {
    cs: 'Koule z jednoho šťouchu padají naráz — rozhoduje stav stolu.',
    en: 'Balls from one shot fall at once — the table state decides.',
  },
];
