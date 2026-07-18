// ─────────────────────────────────────────────────────────────────────────────
// The Trulečník ruleset — both languages side by side so they stay in sync and
// are easy to correct. Items marked `house: true` are OUR clarifications /
// improvements over classic cut-throat (the resolved edge cases). Those are the
// ones most worth reviewing.
//
// Body text supports a tiny inline markup: **bold** and [link](#anchor). Each
// string in `body` is a separate paragraph (rendered as its own <p>).
// ─────────────────────────────────────────────────────────────────────────────

export interface L10n {
  cs: string;
  en: string;
}

export type DiagramKey = 'groups' | 'rack' | 'break' | 'legal-shot' | 'own-ball' | 'spotting';

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
      en: 'Trulečník is billiards for three players at once. It is built on classic cut-throat, but we have tuned it so that most of the argument-starting edge cases now have a clear answer.',
    },
    rules: [
      {
        id: 'idea',
        title: { cs: 'Základní myšlenka', en: 'The basic idea' },
        body: [
          {
            cs: 'Patnáct koulí se rozdělí na tři skupiny po pěti. Každý hráč má jednu skupinu koulí — kterou, to rozhodne [losovačka](#picker). Tvým úkolem je potopit koule soupeřů a uchránit ty svoje. **Vyhrává ten, komu na stole zůstane jako poslednímu aspoň jedna vlastní koule.**',
            en: "The fifteen object balls split into three groups of five. Each player owns one group — which one is settled by the [group draw](#picker). Your job is to sink your opponents' balls and protect your own. **The last player with at least one of their own balls still on the table wins.**",
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
            cs: 'Skupiny si rozdělte **před rozstřelem** — napište tři jména do [losovačky](#picker) a ta každému přiřadí jednu skupinu. Přiřazení platí **na celou hru** a už se nemění. Hráči se střídají **podle pořadí skupin (první A, pak B a poslední C)** a hráč se skupinou A [rozstřeluje](#setup-break). Samotné skupiny koulí jsou rovnocenné a pořadí na tahu rozděluje náhoda — los je tedy férový.',
            en: 'Split the groups **before the break** — put the three names into the [group draw](#picker) and it assigns everyone a group. The assignment holds **for the whole game** and never changes. Players take turns **in group order (A first, then B, and C last)**, and the player with group A [breaks](#setup-break). The ball groups themselves are all equal, and the turn order is dealt out by chance — so the draw is fair.',
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
        diagram: 'break',
        body: [
          {
            cs: 'Rozstřeluje hráč se skupinou A; bílou má v ruce za čárou (head string). Rozstřel je platný, když **potopí aspoň jednu číslovanou kouli, nebo pošle aspoň čtyři koule na mantinel.** Když to nesplní, je to faul s vlastním trestem: další hráč může buď hrát pozici jak leží, nebo nechat znovu postavit a rozstřelit sám.',
            en: 'The player who drew group A breaks, with the cue ball in hand behind the head string. The break is legal if it **pockets at least one numbered ball or drives at least four balls to a cushion.** If it does not, it is a foul with its own penalty: the next player may either play the table as it lies, or have it re-racked and break themselves.',
          },
          {
            cs: 'Když při rozstřelu potopíš soupeřovu kouli (a žádnou svoji), pokračuješ dál. Když spadne tvoje vlastní — sama, nebo spolu se soupeřovou — platí normálně pravidlo [Když spadne tvoje vlastní koule](#play-own-ball): zůstává dole a tah přechází na dalšího. Když spadne bílá, je to faul: soupeř, který hraje po tobě, dostává bílou do ruky za čárou a hraje na koule na druhé straně čáry.',
            en: "If the break pockets an opponent's ball (and none of your own), you keep shooting. If your own ball drops — alone or together with an opponent's — the [When you sink your own ball](#play-own-ball) rule applies as usual: it stays down and the turn passes on. If the cue ball drops, it is a foul: the opponent who shoots after you takes the cue ball in hand behind the head string and plays at the balls on the far side of the line.",
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
            cs: 'Hraješ tak dlouho, dokud každým šťouchem **legálně potopíš aspoň jednu soupeřovu kouli — a žádnou vlastní.** Jakmile žádnou soupeřovu kouli nepotopíš, potopíš vlastní, nebo fauluješ, tah přechází na dalšího hráče v pořadí skupin. Jediná výjimka: první ze [dvou šťouchů po faulu](#fouls-penalty) nemusí potopit nic.',
            en: 'You keep shooting as long as every shot **legally pockets at least one opponent ball — and none of your own.** The moment you fail to pocket an opponent ball, sink one of your own, or foul, your turn passes to the next player in group order. The one exception: the first of the [two shots after a foul](#fouls-penalty) does not have to pocket anything.',
          },
        ],
      },
      {
        id: 'legal-shot',
        house: true,
        title: { cs: 'Platný šťouch', en: 'A legal shot' },
        diagram: 'legal-shot',
        body: [
          {
            cs: 'Platný šťouch má dvě podmínky. Bílá musí **nejdřív zasáhnout některou soupeřovu kouli** — je jedno kterou. A **po tomto zásahu musí buď nějaká koule padnout, nebo se aspoň jedna koule dotknout mantinelu.** Když bílá trefí jako první tvoji vlastní kouli, nebo se po zásahu nestane ani jedno z toho, je to faul.',
            en: "A legal shot has two conditions. The cue ball must **first strike one of your opponents' balls** — any of them will do. And **after that contact, either a ball must be pocketed or at least one ball must reach a cushion.** If the cue ball hits one of your own balls first, or neither of those happens after contact, it is a foul.",
          },
          {
            cs: 'U obou těchto faulů bílá zůstává ležet, kde je — soupeř, který hraje po tobě, si ji nebere do ruky, ale má **dva šťouchy**: prvním si obvykle rozehraje bílou do lepší pozice, klidně ale může rovnou potápět. Jak přesně dva šťouchy fungují, popisuje [Trest za faul](#fouls-penalty).',
            en: 'On both of these fouls the cue ball stays where it lies — the opponent who shoots after you does not get ball in hand, but gets **two shots**: usually the first nudges the cue ball into a better spot, though potting right away is fine too. How exactly the two shots work is spelled out under [The penalty for a foul](#fouls-penalty).',
          },
        ],
      },
      {
        id: 'own-ball',
        house: true,
        title: { cs: 'Když spadne tvoje vlastní koule', en: 'When you sink your own ball' },
        diagram: 'own-ball',
        body: [
          {
            cs: 'Stane se. Tvoje potopená koule **zůstává dole** — právě jsi si ublížil sám a navíc jsi pomohl **předchozímu hráči v pořadí skupin**: díky tobě se mu vrací jedna jeho koule do hry, pokud nějakou potopenou má. Počítá se čistě pořadí skupin, i když je tento hráč zrovna vyřazený — touhle vrácenou koulí se rovnou vrací zpátky do hry. Vrácená koule se pokládá na [zadní značku](#fouls-spotting).',
            en: 'It happens. Your potted ball **stays down** — you have just hurt yourself, and on top of that you have helped the **previous player in group order**: thanks to you, one of their balls comes back into play, provided they have any pocketed. Pure group order counts here, even if that player is currently eliminated — this returned ball brings them straight back into the game. The returned ball goes on the [foot spot](#fouls-spotting).',
          },
          {
            cs: 'Potopení vlastní koule ti **vždy končí tah** — i kdybys stejným šťouchem potopil i soupeřovu kouli. V takovém případě tvoje koule i tak zůstává dole a soupeři se navíc vrací ta jeho koule, kterou jsi právě potopil.',
            en: "Sinking your own ball **always ends your turn** — even if the same shot also potted an opponent's ball. In that case your ball still stays down, and on top of that the opponent gets back the very ball you just sank.",
          },
          {
            cs: 'Pokud šťouch nebyl zároveň faul, bílá zůstává ležet a normálně hraje další hráč v pořadí. Když faul byl (třeba jsi potopil i bílou), vracení koulí proběhne úplně stejně a k tomu se přidá běžný [trest za faul](#fouls-penalty).',
            en: 'If the shot was not also a foul, the cue ball stays where it lies and the next player simply plays on. If it was (say you scratched too), the returns happen exactly the same and the usual [foul penalty](#fouls-penalty) is added on top.',
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
            cs: 'Faul je zejména: potopení bílé koule, bílá nebo číslovaná koule vyražená mimo stůl, žádný kontakt s koulí, první kontakt s vlastní koulí, nebo když se po kontaktu nic nepotopí a žádná koule se nedotkne mantinelu. Faul je i dvojitý zásah nebo tlačená koule.',
            en: 'A foul is, in particular: pocketing the cue ball (a scratch), the cue ball or any numbered ball knocked off the table, hitting no ball at all, hitting one of your own balls first, or — after contact — pocketing nothing while no ball reaches a cushion. Double hits and push shots are fouls too.',
          },
        ],
      },
      {
        id: 'penalty',
        house: true,
        title: { cs: 'Trest za faul', en: 'The penalty for a foul' },
        body: [
          {
            cs: 'Trest za faul se řídí tím, kde skončí bílá koule. („Následující hráč" je vždy další žijící hráč v pořadí skupin; vlastní trest má jen nepovedený [rozstřel](#setup-break).)',
            en: 'The penalty for a foul follows where the cue ball ends up. ("The next player" always means the next surviving player in group order; only a failed [break](#setup-break) has its own penalty.)',
          },
          {
            cs: '**Bílá skončila mimo hrací plochu** — spadla do kapsy, nebo sletěla ze stolu. Následující hráč dostává **bílou do ruky** a položí ji, kam chce (po potopení bílé při rozstřelu jen za čáru). Úplně stejně se trestá vyražení číslované koule ze stolu — vyražená koule se navíc vrací na [zadní značku](#fouls-spotting).',
            en: '**The cue ball left the playing area** — potted, or off the table. The next player takes the **cue ball in hand** and places it anywhere (only behind the head string after a scratch on the break). Knocking a numbered ball off the table is punished exactly the same — and the launched ball goes back on the [foot spot](#fouls-spotting).',
          },
          {
            cs: '**Bílá zůstala na stole** — žádný kontakt, první kontakt s vlastní koulí, nebo se po kontaktu nic nepotopilo ani se žádná koule nedotkla mantinelu. Bílá zůstává, kde leží, a následující hráč má **dva šťouchy**.',
            en: '**The cue ball stayed on the table** — no contact, first contact with one of your own balls, or nothing potted and no ball reaching a cushion after contact. The cue ball stays where it lies and the next player gets **two shots**.',
          },
          {
            cs: 'Dva šťouchy fungují takhle: první šťouch je **osvobozený od podmínek platného šťouchu** — smíš bílou jen rozehrát do lepší pozice, nic netrefit ani nepotopit, a faul to není. Když prvním šťouchem rovnou legálně potopíš soupeřovu kouli, hraješ normálně dál — druhý šťouch propadá, do dalších šťouchů se nepřenáší. Ostatní fauly (potopená bílá, koule vyražená ze stolu, dvojitý zásah…) platí i pro první šťouch a potopení vlastní koule ti i tady končí tah — v obou případech o druhý šťouch přicházíš.',
            en: 'The two shots work like this: the first shot is **exempt from the legal-shot conditions** — you may simply nudge the cue ball into a better spot, hitting and potting nothing, and it is not a foul. If your first shot legally pockets an opponent ball right away, you just keep shooting as normal — the second shot is forfeited, it does not carry over. All other fouls (a scratch, a ball knocked off the table, a double hit…) still apply to the first shot, and sinking your own ball ends your turn here too — either way you lose the second shot.',
          },
          {
            cs: 'Faulem se nikomu nevrací žádná koule z kapsy — číslované koule potopené faulovaným šťouchem zůstávají dole. Z kapes se koule vrací výhradně podle pravidla [Když spadne tvoje vlastní koule](#play-own-ball) — a to platí i tehdy, když byl šťouch zároveň faul.',
            en: "A foul never brings anyone's ball back out of a pocket — numbered balls potted on the fouling shot stay down. Pocketed balls return solely under the [When you sink your own ball](#play-own-ball) rule — and that rule applies even when the shot was also a foul.",
          },
        ],
      },
      {
        id: 'spotting',
        house: true,
        title: { cs: 'Kam se vrací koule', en: 'Where returned balls go' },
        diagram: 'spotting',
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
          {
            cs: 'Šťouch se vyhodnocuje v pevném pořadí: nejdřív dopadnou koule, pak se na stůl položí [vrácené koule](#play-own-ball), a teprve nakonec se kontroluje vyřazení a vítězství.',
            en: 'A shot resolves in a fixed order: first the balls drop, then any [returned balls](#play-own-ball) are spotted, and only then are eliminations and the win checked.',
          },
          {
            cs: 'Příklad: hráč A je vyřazený a hráč B jedním šťouchem potopí svou poslední kouli i poslední kouli hráče C. Koule hráče C se vrací na stůl (spadla spolu s vlastní koulí hráče B), hráč A dostává jednu svou kouli zpět (B si potopil vlastní) — a teprve teď se počítá stav: B je bez koulí a vypadává, A i C mají po jedné kouli a hra pokračuje. Na tahu je C, další žijící hráč po B.',
            en: "An example: player A is eliminated, and player B pots their own last ball and player C's last ball with a single shot. C's ball comes back to the table (it fell together with B's own ball), player A gets one ball back (B sank their own) — and only now is the state counted: B has no balls and drops out, A and C have one ball each, and the game goes on. C, the next surviving player after B, is up.",
          },
        ],
      },
      {
        id: 'win-condition',
        house: true,
        title: { cs: 'Kdo vyhrává', en: 'Who wins' },
        body: [
          {
            cs: 'Jakmile po dohraném šťouchu (včetně položení vrácených koulí) zůstane s vlastními koulemi na stole **jediný hráč, okamžitě vyhrává.** Nemusí už nic dohrávat.',
            en: 'As soon as a shot settles (returned balls spotted included) and exactly **one player** has any of their own balls left, that player **wins immediately.** No need to clear anything further.',
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
            cs: 'Když jediným šťouchem potopíš **poslední koule všech soupeřů naráz** a žádnou svoji, **vyhráváš** — na stole zůstaly jen tvoje koule. (Kdyby přitom spadla i tvoje vlastní, platí pravidlo [Když spadne tvoje vlastní koule](#play-own-ball) a hraje se dál.)',
            en: "If a single shot pockets **all remaining opponents' last balls at once** and none of your own, you **win** — only your balls are left on the table. (If your own ball fell too, the [When you sink your own ball](#play-own-ball) rule applies and play goes on.)",
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
            cs: 'Po šťouchu spočítej hráče, kterým zůstala aspoň jedna vlastní koule. Zůstane-li jeden, vyhrává. Zůstanou-li dva a víc, hra pokračuje: vyřazení jsou (prozatím) ze hry a tah jde na dalšího žijícího hráče v pořadí skupin. Ty pokračuješ v tahu jen tehdy, když byl šťouch platný, potopil aspoň jednu soupeřovu kouli **a žádnou tvoji vlastní.**',
            en: 'After the shot, count the players who still have at least one of their own balls. If one remains, they win. If two or more remain, play continues: the eliminated are out (for now) and the turn passes to the next surviving player in group order. You keep shooting only if the shot was legal, pocketed at least one opponent ball, **and none of your own.**',
          },
        ],
      },
      {
        id: 'stalemate',
        house: true,
        title: { cs: 'Patová situace', en: 'Stalemate' },
        body: [
          {
            cs: 'Když se všichni tři shodnou, že se hra nikam nehne (třeba samé bezpečné šťouchy dokola), nechte znovu postavit. Nový rozstřel má další hráč v pořadí skupin po tom, kdo rozstřeloval naposledy. Skupiny zůstávají stejné.',
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
            cs: 'Žádné „získávání" skupiny potopením první koule. [Losuje se](#picker) před rozstřelem a platí na celou hru.',
            en: 'No claiming a group by the first pot. [Draw](#picker) before the break, fixed for the game.',
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
            cs: 'Potopená vlastní koule zůstává dole, tvůj tah vždy končí a předchozímu hráči v pořadí skupin se vrací jedna koule do hry.',
            en: 'A sunk own-ball stays down, your turn always ends, and the previous player in group order gets one ball back.',
          },
        ],
      },
      {
        id: 'recap-foul',
        house: true,
        title: {
          cs: 'Faul = bílá do ruky, nebo dva šťouchy',
          en: 'Foul = ball in hand or two shots',
        },
        body: [
          {
            cs: 'Sjednotili jsme trest za faul podle bílé: když opustí hrací plochu (nebo vyrazíš ze stolu číslovanou kouli), dostává následující hráč bílou do ruky; když bílá zůstane na stole, má dva šťouchy. Vlastní trest má jen nepovedený rozstřel. Faul sám o sobě žádnou kouli z kapsy nevrací.',
            en: 'We unified the foul penalty around the cue ball: if it leaves the playing area (or you knock a numbered ball off the table) the next player gets ball in hand; if it stays on the table, they get two shots. Only a failed break has its own penalty. A foul by itself brings no ball back out of a pocket.',
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
    en: 'Sink opponents, protect your own. The last player with their own ball on the table wins.',
  },
  {
    cs: 'Hraješ dál, dokud každým šťouchem potopíš soupeřovu kouli a žádnou vlastní.',
    en: 'Keep shooting while every shot pockets an opponent ball and none of your own.',
  },
  {
    cs: 'Vlastní koule: zůstává dole, tah končí, hráči před tebou v pořadí se vrací koule.',
    en: 'Own ball: it stays down, your turn ends, the player before you in group order gets a ball back.',
  },
  {
    cs: 'Faul: bílá (či vyražená koule) mimo plochu → bílá do ruky; bílá na stole → dva šťouchy.',
    en: 'Foul: cue ball (or a launched ball) off the area → ball in hand; cue ball on the table → two shots.',
  },
  {
    cs: 'Nula vlastních koulí = konec — vrátí tě, až hráč po tobě v pořadí potopí vlastní kouli.',
    en: 'Zero of your own balls = out — you return when the player after you in group order sinks their own ball.',
  },
  {
    cs: 'Koule z jednoho šťouchu padají naráz — rozhoduje stav stolu.',
    en: 'Balls from one shot fall at once — the table state decides.',
  },
];
