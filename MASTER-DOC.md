# African AI Founder OS — Research & Strategy Master Document

> **Version** 1.0 · **Date** 2026-09-02 · **Auteur** Souraka HAMIDA (Bénin) · **Licence** CC-BY-4.0 (contenu) / MIT (code & templates)
>
> Ce document est la source unique pour construire le repo GitHub **`african-ai-founder-os`** de A à Z : théories, outils, playbooks, skills IA, contenu Afrique, stratégie de viralité, architecture du repo, distribution, monétisation.
>
> **Comment lire ce document.** Chaque partie est autonome. Les parties 1 (théorie) et 6 (viralité) répondent au *pourquoi*. Les parties 2, 3, 4 (outils, playbooks, skills) sont le *quoi faire aujourd'hui*. La partie 5 (Afrique) est l'avantage concurrentiel du repo. Les parties 7-10 sont l'infrastructure. Les annexes sont des checklists à cocher.

---

## Table des matières

- [Executive Summary](#executive-summary)
- [Part 1 — Théories & Frameworks](#part-1--théories--frameworks)
- [Part 2 — Tools & Stack](#part-2--tools--stack)
- [Part 3 — Playbooks & Templates](#part-3--playbooks--templates)
- [Part 4 — AI Skills (prompts exécutables)](#part-4--ai-skills-prompts-exécutables)
- [Part 5 — Africa-Specific](#part-5--africa-specific)
- [Part 6 — Virality Strategy (J-7 → J+90)](#part-6--virality-strategy-j-7--j90)
- [Part 7 — Metrics & Analytics](#part-7--metrics--analytics)
- [Part 8 — Repository Architecture](#part-8--repository-architecture)
- [Part 9 — Distribution & Marketing](#part-9--distribution--marketing)
- [Part 10 — Monetization & Sustainability](#part-10--monetization--sustainability)
- [Annexe A — Sources](#annexe-a--sources)
- [Annexe B — Glossaire](#annexe-b--glossaire)
- [Annexe C — Checklists](#annexe-c--checklists)

---

# Executive Summary

## Vision

**`african-ai-founder-os`** est le système d'exploitation open source du founder africain qui construit avec l'IA — de l'idée jusqu'au premier **$10k MRR**. Pas un cours. Pas un annuaire mort. Un OS : des playbooks exécutables, des skills IA copiables dans Claude Code, une stack pré-triée, et une couche « Afrique » (grants, paiements mobile money, accélérateurs, régulations) que personne n'a rassemblée au même endroit en 2026.

**Positionnement en une phrase :** *« The open-source operating system for African founders who ship with AI — from idea to $10k MRR. »*

**Le « pourquoi maintenant ».** Trois vagues convergent en 2026 : (1) le coût de construire un MVP est tombé quasi à zéro grâce aux agents de code (Claude Code, Cursor) ; (2) l'infrastructure de paiement panafricaine est mature (Paystack, Flutterwave, CinetPay couvrent 30+ pays) ; (3) le capital non-dilutif pour founders africains a explosé (500M$+ de grants recensés en 2026). Ce qui manque, c'est la **couche d'orchestration** : quoi utiliser, dans quel ordre, avec quels scripts. C'est le repo.

## Objectifs chiffrés (6 mois — deadline S+26)

| Métrique | Cible 6 mois | Palier « viral confirmé » | Comment on mesure |
|---|---|---|---|
| ⭐ Stars GitHub | **10 000** | 1 000 en 72 h post-launch | GitHub Insights + star-history.com |
| 🍴 Forks | 500 | 100 | GitHub Insights |
| 👥 Contributeurs uniques (merged PR) | 100 | 25 | GitHub Insights → Contributors |
| 💬 Membres communauté (Discord/WhatsApp) | 2 000 | 500 | Dashboard Discord |
| 📰 Mentions presse tier-1 | 3 (TechCrunch / TechCabal / HN front page / PH #1-3) | 1 | Veille manuelle + Google Alerts |
| 🔁 Repeat visitors / semaine (GitHub traffic) | 2 000 | 500 | GitHub Insights → Traffic (14 j glissants) |
| ✉️ Emails newsletter | 3 000 | 500 | Buttondown / ConvertKit |

## Timeline condensée

| Phase | Semaines | Objectif | Livrable clé |
|---|---|---|---|
| **0. Build** | S-4 → S0 | Repo « launch-ready » | README + 3 playbooks + 10 skills + 20 outils Afrique |
| **1. Soft launch** | S0 → S1 | 500 ⭐, feedback communauté | Post dans 5 communautés Afrique + 20 DMs |
| **2. Hard launch** | S1 (mardi) | 1 000 ⭐ en 72 h | HN + Product Hunt + X thread + TechCabal pitch |
| **3. Momentum** | S2 → S8 | 4 000 ⭐, 50 contributeurs | 1 playbook/semaine, 2 threads/semaine, contributor onboarding |
| **4. Scale** | S9 → S20 | 8 000 ⭐, partenariats | 1 partenariat accélérateur, ambassadeurs pays |
| **5. Consolidation** | S21 → S26 | 10 000 ⭐, sustainability | GitHub Sponsors actif, roadmap v2 publique |

## Ressources nécessaires

| Ressource | Détail | Coût |
|---|---|---|
| **Temps** | ~15 h/sem pendant 8 semaines (build + launch), puis ~6 h/sem | — |
| **Domaine** | `africanaifounder.dev` ou `.os` redirigé vers le repo + une landing | ~15 $/an |
| **Newsletter** | Buttondown (gratuit < 100 abonnés, 9 $/mois ensuite) | 0-9 $/mois |
| **Design** | Bannière README + og-image (Figma gratuit / Canva) | 0 $ |
| **Communauté** | Discord (gratuit) + groupe WhatsApp | 0 $ |
| **Analytics** | Plausible self-host ou GoatCounter (landing) + star-history | 0-6 $/mois |
| **Budget pub** | Optionnel : 100-300 $ boost X/LinkedIn au hard launch | 0-300 $ |
| **Total 6 mois** | | **< 150 $** hors pub |

## Les 5 décisions structurantes (à ne pas rater)

1. **Licence duale.** Code/templates en **MIT**, contenu éditorial en **CC-BY-4.0**. Raison : maximiser la réutilisation (blogs, cours) *avec* attribution → backlinks.
2. **Un seul thème, pas dix.** « Founder africain + IA + idée→$10k MRR ». Ne pas diluer en « awesome-startup » générique (déjà saturé).
3. **Africa-first, pas Africa-only.** Le contenu générique (skills, playbooks) attire le monde entier ; la couche Afrique convertit et différencie.
4. **Exécutable > exhaustif.** Chaque fichier doit permettre d'agir en < 15 min. Un playbook qu'on ne peut pas exécuter est un article de blog.
5. **Launch un mardi, sur Hacker News en premier** (87 % des repos qui explosent le font — voir Part 6), narratif personnel « je construis RESTAFY au Bénin, voici mon OS ».

---

# Part 1 — Théories & Frameworks

> **Pourquoi cette partie.** Un repo viral n'est pas un coup de chance : c'est l'application disciplinée de 4 corpus — viralité open source, validation startup, croissance produit, et monétisation open source. Cette partie donne, pour chaque framework : origine, concept clé, application concrète au repo *et* aux startups des utilisateurs, limites, exemple.

## 1.1 Théories de viralité open source (croissance des stars GitHub)

### Framework A — « README as Product » (les 7 patterns 0→10k stars)

- **Origine :** analyse de 50 repos passés de 0 à 10k stars, publiée sur DEV Community (2025). Recoupée par les données GitHub Octoverse.
- **Concept clé :** *le README vend le repo en moins de 7 secondes ; tout le reste est secondaire.*
- **Les 7 patterns :**
  1. **README as Product** — 1 phrase de description, preuve visuelle (GIF/screenshot), commande d'install, 3 cas d'usage.
  2. **Solve pain, not features** — on résout une frustration (ex. htmx supprime la complexité JS ; uv accélère le packaging Python), on n'ajoute pas des fonctionnalités.
  3. **Strategic launch timing** — 87 % des repos explosifs lancent sur **Hacker News d'abord**, puis Reddit + X. Mardi-jeudi, 8-10 h EST. Post technique + narratif personnel.
  4. **Five-minute onboarding** — 95 % demandent un setup minimal ; un essai navigateur (StackBlitz) double la conversion.
  5. **Awesome-list positioning** — être listé dans les bons `awesome-*` génère 50-200 stars/mois en passif.
  6. **Documentation balance** — README = problème + exemples ; doc séparée pour l'avancé ; **pas de wiki GitHub**.
  7. **Rapid community response** — accuser réception de **chaque issue en < 24 h** ; ça transforme le visiteur en contributeur.
- **Application au repo :**
  - README : hook « The OS for African founders who ship with AI », GIF de 15 s montrant `/validate-idea` dans Claude Code, bouton « Use this template », 3 parcours (« J'ai une idée », « J'ai un MVP », « Je cherche du financement »).
  - « Pain » ciblé : *« J'ai une idée mais je ne sais pas quel outil / quel grant / quel paiement utiliser au Bénin/Nigeria/Kenya. »*
  - Onboarding : `00-start-here/README.md` = 15 minutes chrono, sans compte à créer.
- **Limites :** ces patterns maximisent le *pic* de launch ; ils ne garantissent pas la rétention. Sans mises à jour hebdo (Part 6), la courbe retombe après J+14.
- **Exemple :** `public-apis` (300k+ stars) — une liste, un README scannable, zéro friction. `build-your-own-x` — un titre qui *est* la promesse.

### Framework B — Le « Star Velocity Loop »

- **Concept clé :** GitHub met en avant les repos dont la *vitesse* de stars accélère (trending = dérivée, pas total). Objectif : concentrer les stars sur une fenêtre de 72 h pour percer le trending, qui déclenche une boucle (trending → visibilité → stars → trending).
- **Application :** ne pas « teaser » le repo public pendant des semaines. Le garder discret, accumuler des soft-supporters (liste de 100 personnes qui promettent de star le jour J), puis tout déclencher le même mardi 14 h UTC (voir Part 6, J0).
- **Limites :** GitHub pénalise les vagues artificielles (bots) — shadowban possible. Les 100 stars doivent être de vrais comptes engagés.

### Framework C — Growth loops vs funnels (Reforge)

- **Origine :** Reforge / Andrew Chen, popularisé 2020-2024.
- **Concept clé :** un *funnel* s'épuise (tu payes pour chaque visiteur) ; une *loop* se rembourse (l'output d'un tour finance l'input du suivant).
- **Loops du repo :**
  - **Contribution loop :** contributeur ajoute un outil → il partage « je suis dans ce repo » → son audience découvre → nouveaux contributeurs.
  - **Skill loop :** un founder lance `/create-viral-hook`, publie le thread généré, met le repo en source → clics → stars → plus de skills.
  - **Case-study loop :** un founder atteint $10k MRR avec l'OS → on publie l'étude de cas → preuve sociale → nouveaux founders.
- **Application :** chaque artefact du repo (skill, template, playbook) doit contenir un mécanisme de partage natif (footer « Made with african-ai-founder-os », lien pré-rempli).

## 1.2 Frameworks de validation startup

| Framework | Origine | Concept clé (1 phrase) | Quand l'utiliser | Piège principal |
|---|---|---|---|---|
| **The Mom Test** | Rob Fitzpatrick, 2013 | Poser des questions sur le passé et les faits, jamais sur des opinions ou le futur hypothétique. | Interviews de découverte (avant toute ligne de code). | Demander « est-ce que tu utiliserais ça ? » → toujours « oui » poli, zéro signal. |
| **Lean Startup / Build-Measure-Learn** | Eric Ries, 2011 | Réduire le cycle « idée → produit → données → apprentissage » ; pivoter ou persévérer. | Après le premier MVP, pour itérer. | Confondre « MVP » avec « produit médiocre » ; ne pas définir la métrique d'apprentissage à l'avance. |
| **Jobs To Be Done (JTBD)** | Christensen / Bob Moesta | Les gens « embauchent » un produit pour faire progresser une situation ; comprends le *job*, pas le persona. | Définir le positionnement et le pricing. | Rester au niveau fonctionnel et rater les jobs émotionnels/sociaux. |
| **Value Proposition Canvas** | Strategyzer (Osterwalder) | Aligner pains/gains du client avec pain-relievers/gain-creators du produit. | Rédiger la landing et le pitch. | Lister des features au lieu de résultats. |
| **Sean Ellis PMF Test** | Sean Ellis, 2010 | « Seriez-vous très déçu si le produit disparaissait ? » ≥ 40 % de « très déçu » = signal PMF. | Après ~40 utilisateurs actifs. | Interroger des utilisateurs inactifs → faux négatif. |
| **Fake Door / Smoke Test** | Growth teams (2015+) | Vendre avant de construire : landing + bouton « Acheter » qui log l'intention. | Prioriser entre 3 idées. | Trafic non qualifié → taux de clic ininterprétable. |
| **RAT — Riskiest Assumption Test** | Rik Higham, 2018 | Tester d'abord l'hypothèse qui tue tout le projet si elle est fausse (pas la plus facile). | Avant de choisir quoi construire dans le MVP. | Tester la faisabilité technique alors que le risque est la demande. |
| **Continuous Discovery** | Teresa Torres, 2021 | Au moins 1 interview client/semaine, en continu, liée aux décisions produit (opportunity solution tree). | En permanence, post-launch. | Interviews « one-shot » sans arbre d'opportunités → insights perdus. |

**Application au repo :** ces 8 frameworks deviennent (a) le contenu de `01-theories-frameworks/`, (b) la logique interne du skill `/validate-idea` (Part 4), (c) le playbook 01 (Part 3). Le repo *incarne* The Mom Test : les scripts d'interview fournis interdisent les questions hypothétiques.

## 1.3 Théories de croissance

### Product-Led Growth (PLG)
- **Concept clé :** le produit lui-même acquiert, active et étend les utilisateurs (free/freemium, self-serve, time-to-value court).
- **Bon quand :** ACV faible-moyen, usage individuel, valeur démontrable en < 10 min (ex. RESTAFY : un resto teste l'ordering en 5 min).
- **Limite :** difficile si l'onboarding exige des données/intégrations lourdes, ou si l'acheteur ≠ utilisateur.

### Community-Led Growth (CLG)
- **Concept clé :** la communauté (Discord, WhatsApp, GitHub Discussions) est le canal principal d'acquisition, de support et de rétention.
- **Bon quand :** sujet identitaire (« founder africain »), cycle d'apprentissage, contenu généré par les pairs. **C'est le moteur principal de ce repo.**
- **Limite :** ne « scale » pas linéairement ; exige des modérateurs/ambassadeurs ; métriques floues.

### Sales-Led Growth (SLG) / hybride
- **Concept clé :** commercial humain pour deals à fort ACV ; souvent hybride « PLG pour entrer, SLG pour étendre » (PLG + sales assist).
- **Bon quand :** B2B, ACV > 5-10k $/an, achat par comité.

| Modèle | ACV typique | Canal | Métrique nord | Exemple Afrique |
|---|---|---|---|---|
| PLG | 0-2k $/an | Produit + SEO + communauté | Activation rate, PQL | Paystack (self-serve devs) |
| CLG | variable | Communauté + contenu | Membres actifs, contribution | Andela (talent), ce repo |
| SLG | 5k $+/an | Outbound + démos | Pipeline, win rate | Flutterwave Enterprise |
| Hybride PLG+sales | 2-10k $/an | Produit → sales assist | Expansion revenue (NRR) | RESTAFY (self-serve → multi-sites) |

## 1.4 Modèles de business SaaS

- **Freemium :** gratuit avec limites (sièges, volume, features). Convertit 2-5 % en payant. Piège : donner trop → personne ne paye.
- **Free trial (14-30 j) :** meilleure conversion (8-25 %) mais moins de top-of-funnel.
- **Usage-based / PAYG :** facturation à la consommation (API calls, transactions). Aligné valeur, revenu moins prévisible. Fréquent en fintech Afrique (% par transaction).
- **Per-seat :** simple, prévisible ; frein à l'expansion virale interne.
- **Hybride (seat + usage) :** standard 2025-2026 pour l'IA (siège + crédits).
- **Recommandation RESTAFY-type :** abonnement par établissement (per-location) + % sur volume de commandes au-delà d'un palier → PLG + expansion naturelle quand le resto ouvre un 2ᵉ point de vente.

## 1.5 Psychologie du contributeur open source

- **Origine :** littérature OSS (Von Hippel ; GitHub Open Source Survey 2017 ; « Working in Public », Nadia Asparouhova, 2020).
- **Moteurs de motivation (par fréquence) :**
  1. **Réputation / signaling** — le profil GitHub = CV public.
  2. **Scratch your own itch** — besoin réel de la fonctionnalité.
  3. **Appartenance / identité** — se sentir membre d'un mouvement.
  4. **Apprentissage** — pratiquer sur un vrai projet.
  5. **Altruisme / cause** — « aider les founders africains ».
- **Leviers concrets pour le repo :**
  - **`good-first-issue` toujours pourvues** (15-20 ouvertes en permanence) + « definition of done » explicite.
  - **All-Contributors bot** : chaque contributeur (photo) dans le README → réputation visible.
  - **CONTRIBUTORS spotlight** mensuel dans la newsletter → appartenance.
  - **Réponse < 24 h** + merci nominatif → réciprocité.
  - **Templates de contribution ultra-cadrés** (ajouter un outil = remplir un YAML) → coût d'entrée minimal.
- **Anti-pattern :** PR qui pourrit 2 semaines sans réponse → le contributeur ne revient jamais et le raconte.

## 1.6 Théories de distribution

| Livre / théorie | Auteur | Idée exploitable pour le repo |
|---|---|---|
| **Traction (Bullseye Framework)** | Weinberg & Mares, 2015 | Tester ~19 canaux en parallèle à petite échelle, doubler sur celui qui marche. Pour le repo : HN, awesome-lists, communautés Afrique, X threads, newsletters partenaires, Product Hunt. |
| **Zero to One** | Peter Thiel, 2014 | Monopole sur une niche minuscule d'abord (« founders francophones d'Afrique de l'Ouest qui codent avec l'IA »), puis élargir. |
| **Crossing the Chasm** | Geoffrey Moore, 1991 | Cibler un « beachhead » (early adopters = founders techniques déjà sur Claude Code), pas le marché de masse. |
| **The Cold Start Problem** | Andrew Chen, 2021 | Amorcer un côté du réseau (contributeurs/mainteneurs) avant l'autre (lecteurs) ; atteindre le « tipping point ». |
| **Made to Stick (SUCCESs)** | Heath & Heath, 2007 | Messages Simples, Inattendus, Concrets, Crédibles, Émotionnels, en Story. Appliqué au README et aux threads. |
| **Contagious (STEPPS)** | Jonah Berger, 2013 | Social currency, Triggers, Emotion, Public, Practical value, Stories → checklist pour chaque post de launch. |
| **1000 True Fans** | Kevin Kelly, 2008 | Viser 1000 vrais fans (founders qui utilisent l'OS chaque semaine) plutôt que 100k spectateurs. |

## 1.7 Frameworks de pricing

| Méthode | Principe | Pour / Contre | Outil pour l'appliquer |
|---|---|---|---|
| **Value-based** | Prix = % de la valeur créée pour le client. | + Marge max, aligné client. − Exige de quantifier le ROI. | Interviews « willingness to pay », Van Westendorp. |
| **Competitive** | Se caler sur les concurrents ± 10-20 %. | + Rapide. − Course vers le bas ; ignore ta valeur unique. | Tableau concurrentiel (skill `/research-competitors`). |
| **Cost-plus** | Coût + marge cible. | + Simple. − Laisse de l'argent sur la table pour du SaaS. | Modèle de coûts unitaires. |
| **Van Westendorp PSM** | 4 questions prix → fourchette acceptable. | + Data terrain, ~30 répondants suffisent. | Google Form + tableur. |
| **Price laddering / tiers** | 3 paliers (Good-Better-Best), ancre au milieu. | + Augmente l'ACV moyen. − Trop de paliers = paralysie. | `templates/pricing-page.md`. |
| **Freemium threshold** | Placer la limite du plan gratuit là où la valeur devient « pro ». | Le curseur le plus sensible du modèle. | A/B test de la limite. |

**Règle pratique Afrique :** pricing en **monnaie locale** (NGN, XOF, KES, GHS) + **palier « mobile money »** bas (mensuel plutôt qu'annuel) — la contrainte de trésorerie prime sur le prix total.

## 1.8 Modèles de monétisation open source

| Modèle | Comment ça marche | Exemples | Applicable à ce repo ? |
|---|---|---|---|
| **Open Core** | Cœur open source, features avancées payantes. | GitLab, Sentry | Non (c'est du contenu) ; oui pour RESTAFY. |
| **SaaS / hosted** | Même logiciel, hébergé contre abonnement. | Ghost, Plausible, Coolify Cloud | Indirect : un « Founder OS Pro » (dashboard, cohortes) plus tard. |
| **Support & services** | Consulting, formation, done-for-you. | Nombreux | Oui : ateliers payants « idée→MVP en 7 j » pour accélérateurs. |
| **Sponsorship / donations** | GitHub Sponsors, Open Collective, Ko-fi. | caddy, Vue (historique), tailwind (early) | **Oui — canal principal de sustainability.** |
| **Grants** | Fonds pour l'open source. | Sovereign Tech Fund, GitHub Fund, ecosystem funds | Oui : postuler dès 2 000 ⭐. |
| **Sponsored content** | Un accélérateur/outil sponsorise une section (label obligatoire). | Nombreux awesome-lists | Oui, avec label `Sponsored` explicite. |
| **Paid community tier** | Cercle privé (office hours, deal flow, intros). | IndieHackers Pro, MegaMaker | Oui à moyen terme (« OS Circle », 10-20 $/mois). |

**Roadmap de monétisation :** 0-3 mois = rien (croissance pure) ; 3-6 mois = GitHub Sponsors + 1 atelier payant pilote ; 6-12 mois = « OS Circle » + partenariats outils ; 12-24 mois = grant open source + offre B2B accélérateurs.

---

# Part 2 — Tools & Stack

> **Transition depuis la Part 1.** La théorie dit *quoi optimiser* (time-to-value, loops, coût d'entrée). Cette partie dit *avec quoi*. Chaque tableau est trié « top tier / solide / à surveiller ». Prix = ordre de grandeur 2026, à revérifier au moment d'acheter (liens directs fournis). Tous les prix en USD sauf mention.

## 2.1 Top 50 outils AI pour founders

### Tier 1 — Le noyau (à installer aujourd'hui)

| # | Outil | Catégorie | Prix | Pourquoi lui | Lien |
|---|---|---|---|---|---|
| 1 | **Claude Code** | Agent de code CLI | 20 $/mo (Pro) → usage | Construit des MVP entiers en terminal, lit ton repo, exécute. Cœur de ce repo. | claude.com/claude-code |
| 2 | **Cursor** | IDE IA | 20 $/mo | Édition IA multi-fichiers, autocomplétion agressive. Alternative/complément à Claude Code. | cursor.com |
| 3 | **Claude (app + API)** | Raisonnement / écriture / stratégie | 20 $/mo Pro ; API à l'usage | Memos, PRD, pitch, analyse. « L'outil quand ça doit être juste. » | claude.ai |
| 4 | **ChatGPT** | Assistant généraliste | 20 $/mo | Brainstorm rapide, image (DALL·E), voix. Second avis. | chatgpt.com |
| 5 | **Perplexity** | Recherche marché sourcée | 20 $/mo Pro | Réponses citées, analyse concurrents, veille. | perplexity.ai |
| 6 | **v0 (Vercel)** | UI → code React | Freemium, 20 $/mo | Génère des interfaces Next.js/Tailwind déployables. | v0.dev |
| 7 | **Lovable** | App full-stack par prompt | Freemium, ~25 $/mo | Prototype full-stack + Supabase en minutes. | lovable.dev |
| 8 | **Bolt.new (StackBlitz)** | App in-browser par prompt | Freemium | MVP jetable dans le navigateur, zéro install → parfait pour « fake door » interactive. | bolt.new |
| 9 | **Supabase** | Backend (Postgres, auth, storage, edge fn) | Gratuit → 25 $/mo | Backend par défaut du founder IA 2026. | supabase.com |
| 10 | **GitHub + Copilot** | Versioning + complétion | Gratuit / 10 $/mo | Indispensable. Copilot en complément de Claude Code. | github.com |

### Tier 2 — Solide (selon le besoin)

| # | Outil | Catégorie | Prix | Usage | Lien |
|---|---|---|---|---|---|
| 11 | Windsurf | IDE IA agentique | 15 $/mo | Alternative Cursor, « Cascade » agent. | windsurf.com |
| 12 | Replit + Agent | IDE cloud + agent | Freemium → 25 $/mo | Build + host au même endroit, mobile-friendly. | replit.com |
| 13 | Gemini (Google) | LLM multimodal, long contexte | Freemium / 20 $/mo | Analyse de gros docs, vidéo, Google Workspace. | gemini.google.com |
| 14 | NotebookLM | Synthèse de sources + audio | Gratuit | Transformer 20 PDF de recherche en brief + podcast. | notebooklm.google |
| 15 | Grok (xAI) | LLM + accès X temps réel | X Premium | Veille temps réel sur X, tendances. | x.ai |
| 16 | DeepSeek | LLM open, très bon marché (API) | ~10x moins cher | Batch de génération à bas coût. | deepseek.com |
| 17 | ElevenLabs | Voix IA | Freemium → 22 $/mo | Voix-off démos produit, pubs WhatsApp audio. | elevenlabs.io |
| 18 | HeyGen | Vidéo avatar IA | 24 $/mo | Vidéos de lancement multilingues (EN/FR). | heygen.com |
| 19 | Descript | Édition vidéo/podcast par texte | 12-24 $/mo | Monter les démos et clips launch. | descript.com |
| 20 | Midjourney / Ideogram | Images | 10-30 $/mo | Visuels landing, og-image, réseaux. | midjourney.com / ideogram.ai |
| 21 | Recraft | Illustrations + SVG cohérents | Freemium → 12 $/mo | Set d'illustrations de marque. | recraft.ai |
| 22 | Gamma | Deck / site par prompt | Freemium → 10 $/mo | Pitch deck v0, one-pager. | gamma.app |
| 23 | Tome / Beautiful.ai | Pitch deck IA | 10-20 $/mo | Alternatives Gamma. | tome.app |
| 24 | Fathom / tl;dv | Notetaker de calls | Freemium | Transcrit les interviews client (matière brute Mom Test). | fathom.video |
| 25 | Granola | Notes de réunion IA | 18 $/mo | Notes d'interviews structurées. | granola.ai |
| 26 | Dovetail / Marvin | Analyse de recherche utilisateur | 0-30 $/mo | Coder les insights d'interviews. | dovetailapp.com |
| 27 | Clay | Enrichment + outbound IA | 149 $/mo+ | Construire des listes de prospects enrichies + séquences. | clay.com |
| 28 | Apollo.io | Base B2B + séquences | Freemium → 49 $/mo | Emails + numéros, cadences. | apollo.io |
| 29 | Instantly / Smartlead | Cold email à l'échelle | 30-40 $/mo | Warmup + envoi multi-boîtes. | instantly.ai |
| 30 | Lemlist | Cold outreach multicanal | 39 $/mo+ | Perso d'images, LinkedIn+email. | lemlist.com |
| 31 | PostHog | Product analytics + flags + session replay | Gratuit < 1M events | Tout-en-un analytics, open source. | posthog.com |
| 32 | Jasper / Copy.ai | Copywriting marketing | 39-49 $/mo | Volume de contenu ads/landing. | jasper.ai |
| 33 | Taplio / Hypefury | Growth X + LinkedIn | 39-65 $/mo | Programmer threads, recycler, analytics. | taplio.com |
| 34 | Cal.com | Prise de RDV open source | Gratuit → 12 $/mo | Booker les interviews et démos. | cal.com |
| 35 | Tally / Fillout | Formulaires | Gratuit | Waitlist, questionnaires de validation. | tally.so |
| 36 | Framer / Webflow | Landing pages | 5-20 $/mo | Landing rapide, CMS. | framer.com |
| 37 | Resend | Email transactionnel (API, DX top) | Gratuit → 20 $/mo | Emails produit, magic links. | resend.com |
| 38 | Trigger.dev | Jobs & workflows en background | Freemium | Automations produit (relances, digests). | trigger.dev |
| 39 | Make / n8n | Automatisation no-code | Gratuit (n8n self-host) | Coller les outils sans code ; n8n = open source. | n8n.io |
| 40 | Dub.co | Raccourcisseur de liens + analytics | Gratuit → 24 $/mo | Tracker chaque canal de launch. | dub.co |
| 41 | Plausible / Umami | Web analytics privacy | 9 $/mo / gratuit self-host | Analytics landing sans cookies. | plausible.io |
| 42 | Sentry | Error monitoring | Gratuit → 26 $/mo | Voir les bugs prod avant les users. | sentry.io |
| 43 | LangSmith / Langfuse | Observabilité LLM | Freemium | Debugger tes features IA en prod. | langfuse.com |
| 44 | Cursor rules / Claude skills | Config d'agents | Inclus | Standardiser la sortie des agents (ce repo en fournit 10). | — |
| 45 | Raycast (+ AI) | Launcher + IA desktop | Gratuit → 8 $/mo | Prompts rapides, snippets, clipboard. | raycast.com |
| 46 | Superwhisper / Wispr Flow | Dictée IA | 8-15 $/mo | Écrire 3x plus vite (specs, DMs). | superwhisper.com |
| 47 | Warp | Terminal IA | Gratuit → 15 $/mo | Terminal moderne pour piloter Claude Code. | warp.dev |
| 48 | Firecrawl | Scraping web → markdown pour LLM | Freemium | Alimenter des analyses concurrents/marché. | firecrawl.dev |
| 49 | Exa / Tavily | API de recherche pour agents | Freemium | Recherche web dans tes skills. | exa.ai |
| 50 | OpenRouter | Routeur multi-LLM (1 clé API) | À l'usage | Tester/mixer les modèles sans multi-comptes. | openrouter.ai |

**À surveiller (emerging) :** agents « computer use » (navigation autonome), Claude in Chrome, MCP servers spécialisés (paiements, compta), génération de vidéo produit (Sora-like), coding agents cloud (tâches longues en background).

### Acheter des crédits IA depuis l'Afrique (le mur d'accès)

Beaucoup de founders africains ne peuvent pas recharger OpenAI / Anthropic directement (cartes refusées, pas de moyen de paiement local). Options, du moins friction au plus :

| Option | Ce que c'est | Note |
|---|---|---|
| **RodiumAI** (rodiumai.io) | Agrège plusieurs modèles derrière une API, **recharge avec des moyens de paiement locaux, en petites quantités**. Conçu par des devs africains (Bénin, projet de Parfait TOKE). | Choisis le modèle selon le cas d'usage, achète juste les crédits nécessaires, intègre directement. Vérifier la liste des modèles + tarifs sur le site. |
| **OpenRouter** | 1 clé API, route vers la plupart des modèles, paiement à l'usage. | Recharge carte/crypto ; il faut quand même un moyen de paiement qui marche. |
| **Crédits cloud** | Anthropic via **AWS Bedrock**, OpenAI via **Azure OpenAI**, Gemini via **Google Vertex** — payés avec tes crédits cloud (voir 2.4). | Meilleure voie si tu as des crédits Activate / Founders Hub / Google for Startups. |
| **Reseller / pool communautaire** | Certaines communautés (Cursor Community Bénin, cohortes MEST) partagent des accès. | Demander dans la communauté. |

## 2.2 Top boilerplates SaaS (Next.js / Supabase et alternatives)

| Boilerplate | Stack | Prix | Multi-tenant B2B | Paiements | Open source | Idéal pour |
|---|---|---|---|---|---|---|
| **MakerKit** | Next.js 16 / React 19 / Supabase / Drizzle / Better Auth | One-time (~$299) | ★★★★★ | Stripe, LS | Non (Lite = oui) | SaaS B2B avec orgs & rôles |
| **Supastarter** | Next.js **+ Nuxt + SvelteKit**, DB-agnostic | One-time (~$299) | ★★★★★ | Stripe, LS, Polar | Non | Flexibilité de framework/DB |
| **ShipFast** | Next.js / Mongo ou Supabase / NextAuth | One-time (~$199-299) | ★★☆ | Stripe, LS | Non | Micro-SaaS solo, ship en jours |
| **SaaSRocket** | Next.js 14 / Supabase / Stripe + LS / Resend | ~$50 one-time | ★★★ | Stripe, LS | Non | Le moins cher, features correctes |
| **Open SaaS (Wasp)** | React / Node / Prisma / Wasp | **Gratuit / MIT** | ★★★ | Stripe, LS | **Oui** | Budget zéro, full open source |
| **nextjs/saas-starter** | Next.js / Postgres / Drizzle / Stripe | **Gratuit / MIT** | ★★ | Stripe | **Oui** | Base minimale officielle Vercel |
| **ixartz/SaaS-Boilerplate** | Next.js / Drizzle / Clerk / Stripe | **Gratuit / MIT** | ★★★★ | Stripe | **Oui** | Bonne base gratuite multi-tenant |
| **rk-kit** (`create-rk-kit`) | **TanStack Start** / Better Auth / PostgreSQL + Drizzle + **RLS multi-tenant** / shadcn-style / Sentry + PostHog / Docker + Redis | **Gratuit / OSS** | ★★★★ | (à ajouter) | **Oui** | Monorepo type-safe, multi-tenant dès le départ. **Construit au Bénin** par Régis KIKI (mainteneur local actif) |
| **T3 Stack (create-t3-app)** | Next.js / tRPC / Prisma / NextAuth / Tailwind | Gratuit | ★★ | — | Oui | Type-safety end-to-end, tu ajoutes le SaaS |
| **Divjoy** | Générateur (choisis stack) | ~$99+ | ★★ | Stripe | Non | Générer une base sur mesure |
| **Vercel + Supabase Starter** | Next.js / Supabase Auth | Gratuit | ★ | — | Oui | Démarrage ultra simple |

**Recommandation par scénario :**
- **Budget zéro + apprendre :** `ixartz/SaaS-Boilerplate`, Open SaaS ou **rk-kit**.
- **Ship un micro-SaaS ce week-end :** ShipFast ou SaaSRocket.
- **B2B avec équipes/rôles (type RESTAFY multi-restos) :** MakerKit, Supastarter ou **rk-kit** (Postgres + RLS).
- **Tu veux garder le contrôle total de la DB :** Supastarter (DB-agnostic) + Drizzle, ou **rk-kit**.
- **Tu préfères TanStack Start à Next.js :** **rk-kit**.

> ⚠️ **Piège paiements Afrique :** la plupart des boilerplates sont câblés Stripe, indisponible pour encaisser dans beaucoup de pays africains. Prévoir une **couche d'abstraction paiement** (voir 2.3) et brancher Paystack/Flutterwave. Le repo fournira `templates/payments-adapter.ts`.

## 2.3 Payment providers Afrique (top 20)

| Provider | Couverture | Méthodes | Frais indicatifs | Recurring | Payout devise | Docs / lien |
|---|---|---|---|---|---|---|
| **Paystack** (Stripe) | NG, GH, ZA, KE, CI | Cartes, virement, USSD, mobile money, Apple/Google Pay | ~1.5% + frais fixe local (NG) ; ~2.9% intl | Oui (subscriptions) | Locale + USD (settlement select) | paystack.com/docs |
| **Flutterwave** | 30+ pays | Cartes, MoMo (M-Pesa, MTN, Airtel), virement, USSD, Barter | ~1.4% local / 3.8% intl (varie pays) | Oui (Payment Plans) | Multi (30+ devises) | developer.flutterwave.com |
| **CinetPay** | ~12 pays francophones (WAEMU/CEMAC) : CI, SN, BJ, TG, BF, ML, CM, CD… | 64+ moyens : Orange/MTN/Moov Money, Wave, cartes | ~2-5% selon canal/pays | Oui (abonnements) | XOF/XAF | cinetpay.com |
| **PayDunya** | CI, SN, BJ, TG, BF, ML | Mobile money WAEMU, cartes, Wave | ~2-3.5% | Oui | XOF | paydunya.com |
| **Wave** | SN, CI, ML, BF, GM… | Mobile money à frais très bas / gratuits P2P ; API business | ~1% marchand | Via API/agrégateur | XOF | wave.com |
| **KkiaPay** | BJ, CI, SN, TG | MTN/Moov Money, cartes, agrégation | ~1.5-2.5% | Oui | XOF | kkiapay.me |
| **FedaPay** | BJ, CI, SN, TG, NE | Mobile money, cartes, virement | ~1.5-3% | Oui | XOF | fedapay.com |
| **Semoa / Bizao** | Multi-pays FR + Orange | Agrégateur mobile money Orange et autres | négocié | Oui | XOF/XAF | bizao.com |
| **Paydunya, Hub2, Djamo (biz)** | CI + WAEMU | Mobile money, cartes | varie | partiel | XOF | — |
| **M-Pesa (Daraja API)** | KE (+ TZ, autres via partenaires) | M-Pesa STK Push, B2C, C2B | ~0-1.5% selon tarif | via abonnement custom | KES | developer.safaricom.co.ke |
| **MTN MoMo API** | 15+ pays MTN | Collections, disbursements, remittance | négocié | via récurrence custom | locale | momodeveloper.mtn.com |
| **Airtel Money API** | 14 pays | Collections/payouts | négocié | custom | locale | developers.airtel.africa |
| **Yoco** | ZA | Cartes (in-person + online) | ~2.6-2.95% | Oui | ZAR | yoco.com |
| **Peach Payments** | ZA, KE, MU | Cartes, EFT, mobile | négocié | Oui | ZAR/KES | peachpayments.com |
| **Ozow** | ZA | Instant EFT (bank-to-bank) | ~1-1.5% | Oui (debit) | ZAR | ozow.com |
| **Stitch** | ZA (+ NG expansion) | Pay-by-bank, cartes, payouts | négocié | Oui | ZAR | stitch.money |
| **Fincra** | NG, GH, KE, ZA + payouts pan-Afr | Virement, cartes, collections, FX | négocié | Oui | multi | fincra.com |
| **Kora (KoraPay)** | NG, GH, KE + pan-Afr payouts | Cartes, virement, MoMo, disbursements | négocié | Oui | multi | korahq.com |
| **Monnify (Moniepoint)** | NG | Virement (comptes dédiés), cartes, USSD | ~1% capé (NG) | Oui | NGN | monnify.com |
| **Chapa** | ET | Telebirr, CBE, cartes | ~3.5% local | Oui | ETB | chapa.co |
| **Pesapal** | KE, UG, TZ, ZM, MW, ZW | Cartes, M-Pesa, Airtel | ~3-3.5% | Oui | multi EA | pesapal.com |
| **Pa3 / Lenco / Bani** | pan-Afr B2B | Comptes, payouts, collections | négocié | partiel | multi | — |

**Guide de choix rapide :**
- **Nigeria/Ghana/Kenya/SA, DX moderne, recurring propre :** Paystack.
- **Multi-pays anglophone + mobile money large :** Flutterwave.
- **Francophone / Bénin / WAEMU / XOF :** CinetPay (couverture) ou KkiaPay/FedaPay (DX plus simple, Bénin natif) ; Wave si frais bas critiques.
- **Payouts pan-africains (payer des vendeurs/livreurs) :** Fincra ou Kora.
- **Un seul pays MoMo précis :** API directe (M-Pesa Daraja, MTN MoMo) — moins de frais, plus d'intégration.

> **Pattern d'archi recommandé :** ne pas coupler le code à un provider. Créer `PaymentProvider` interface (`createCheckout`, `verifyWebhook`, `createSubscription`, `refund`) et 2 implémentations (ex. Paystack + CinetPay). Le repo fournit le template.

## 2.4 Cloud credits programs (montants 2026)

| Programme | Crédit max | Conditions d'accès | Durée | Inclut aussi | Lien |
|---|---|---|---|---|---|
| **AWS Activate — Founders** | **1 000 $** | Startup early-stage, pas besoin d'investisseur | 2 ans | Support basique, formations | aws.amazon.com/activate |
| **AWS Activate — Portfolio** | **jusqu'à 100 000 $** | Être affilié à un accélérateur / VC / partenaire Activate | 2 ans | Business support, crédits training | idem |
| **AWS Activate — Generative AI tier** | **jusqu'à 300 000 $** | Affiliation VC/accélérateur + focus GenAI | 2 ans | Crédits Bedrock, GPU | idem |
| **Google for Startups Cloud Program** | **jusqu'à 200 000 $** (100k/an sur 2 ans) | Startup < ~5 ans, financée ou via partenaire | 2 ans | Support, formation, crédits Workspace | cloud.google.com/startup |
| **Google — AI-First startups** | **jusqu'à 350 000 $** | Classée « AI-first » (via partenaire/VC) | 2 ans | TPU, Gemini via Vertex AI, mentoring | idem |
| **Microsoft for Startups Founders Hub** | **jusqu'à 150 000 $** Azure (4 paliers) | Société privée < 3 ans ; **palier 1 000 $ sans VC** | progressif | GitHub Enterprise, VS, M365, OpenAI via Azure | foundershub.startups.microsoft.com |
| **Oracle for Startups** | Crédits OCI (varie) + jusqu'à 70 % de réduction | Candidature | 1-2 ans | Support | oracle.com/startup |
| **DigitalOcean Hatch** | jusqu'à **100 000 $** (souvent 2 000-10 000 $ selon profil) | Startup < 5 ans, non déjà gros client | 1 an | Support prio, communauté | digitalocean.com/hatch |
| **Cloudflare for Startups** | Crédits produits (Workers, R2, etc.) | Via partenaire accélérateur/VC | 1 an | Enterprise features | cloudflare.com/forstartups |
| **MongoDB for Startups** | **jusqu'à 5 000 $** Atlas | Early-stage | 1 an | Support technique, revue d'archi | mongodb.com/startups |
| **Supabase (OSS / startup)** | Crédits ponctuels + plan Pro offert (programmes) | Via YC / accélérateurs partenaires | varie | — | supabase.com |
| **Vercel** | Crédits via partenaires / programme startups | Accélérateur partenaire | varie | — | vercel.com/startups |
| **Notion for Startups** | **jusqu'à 6 000 $** de crédits Notion (+ IA) | Via partenaire (YC, accélérateurs, VC) | 1 an | Notion AI | notion.so/startups |
| **HubSpot for Startups** | **30-90 % de réduction** an 1-2 | Via accélérateur/VC partenaire | 2 ans | CRM, marketing | hubspot.com/startups |
| **Stripe (Atlas)** | Réductions partenaires + 20 000 $ de traitement sans frais (Atlas) | Créer sa société via Atlas (500 $) | — | Incorporation Delaware | stripe.com/atlas |
| **Airtable, Segment (Twilio), Intercom, Brex, Mercury, AWS/Datadog…** | Réductions/crédits via **YC Deals, Founderpath, Secret, Joinsecret** | Souvent besoin d'un « proof of startup » | varie | — | joinsecret.com / stripe/partners |
| **NVIDIA Inception** | Crédits cloud GPU partenaires, prix DGX, formation | Candidature (gratuit) | continu | Go-to-market, VC intros | nvidia.com/inception |
| **Hugging Face** | Crédits GPU (programmes), ZeroGPU | Candidature / partenaires | varie | — | huggingface.co |
| **Modal / Replicate / Baseten** | Crédits GPU de démarrage (25-500 $ + programmes startup) | Sign-up / candidature | varie | — | modal.com |
| **GitHub for Startups** | GitHub Enterprise gratuit ~20 sièges 1 an | Via VC/accélérateur partenaire | 1 an | — | github.com/enterprise/startups |

**Comment débloquer les gros paliers sans VC :** rejoindre un **accélérateur partenaire** (même 100 % remote et non-dilutif — voir Part 5), ou passer par des **programmes communautaires** (MongoDB, DigitalOcean Hatch, Microsoft palier 1). Empiler AWS + Google + Azure = potentiellement 500k$+ combinés pour une startup accélérée.

## 2.5 Analytics & product tools (top 15)

| Outil | Type | Prix | Force | Lien |
|---|---|---|---|---|
| **PostHog** | Product analytics + replay + flags + A/B + surveys | Gratuit < 1M events | Tout-en-un, self-host possible, généreux | posthog.com |
| **Mixpanel** | Product analytics events | Gratuit < 1M events | Analyse de funnels/rétention mûre | mixpanel.com |
| **Amplitude** | Product analytics + CDP | Gratuit (starter) | Behavioral cohorts, North Star | amplitude.com |
| **June** | Analytics « B2B SaaS » clé en main (sur Segment) | Freemium | Rapports auto par compte | june.so |
| **Plausible** | Web analytics privacy | 9 $/mo / self-host | Léger, RGPD, pas de cookies | plausible.io |
| **Umami** | Web analytics open source | Gratuit self-host | Simple, self-host | umami.is |
| **GoatCounter** | Web analytics minimaliste | Gratuit | Pour landing/repo | goatcounter.com |
| **Google Analytics 4** | Web/app analytics | Gratuit | Gratuit, intégrations ads | analytics.google.com |
| **Segment / RudderStack** | CDP (collecte & routage d'events) | Free tier / OSS | Un SDK → tous les outils ; RudderStack = OSS | rudderstack.com |
| **Hotjar / Microsoft Clarity** | Heatmaps & recordings | Clarity **gratuit illimité** | Voir où ça bloque sur la landing | clarity.microsoft.com |
| **LogRocket** | Session replay + perf front | Freemium | Debug UX + erreurs | logrocket.com |
| **Metabase** | BI / dashboards SQL | OSS gratuit / cloud | Dashboards internes sur ta DB | metabase.com |
| **Databox / Geckoboard** | Dashboards KPI multi-sources | Freemium | TV de métriques équipe | databox.com |
| **Statsig** | Feature flags + experiments | Généreux free tier | Expérimentation rigoureuse | statsig.com |
| **Dub Analytics** | Attribution par lien | Freemium | Quel canal amène les stars/signups | dub.co |

**Stack analytics minimal (gratuit) :** Microsoft Clarity (heatmaps) + PostHog free (product) + Plausible/GoatCounter (landing) + Dub (liens de campagne).

## 2.6 Deployment / DevOps (top 12)

| Outil | Modèle | Prix | Quand le choisir | Lien |
|---|---|---|---|---|
| **Vercel** | PaaS front (Next.js natif) | Gratuit (hobby) → 20 $/mo | Front Next.js, previews par PR | vercel.com |
| **Netlify** | PaaS front / JAMstack | Gratuit → 19 $/mo | Sites statiques, functions | netlify.com |
| **Railway** | PaaS full (app + DB + cron) | Usage-based (~5 $/mo mini) | Backend + DB simple, super DX | railway.app |
| **Render** | PaaS full | Gratuit (limité) → payant | Feature set large managé | render.com |
| **Fly.io** | Conteneurs multi-région | Usage-based | Latence géo (Afrique : région proche via edge) | fly.io |
| **Coolify** | PaaS **self-hosted** open source | Prix du VPS (~5-10 $/mo Hetzner) | Contrôle total, coût plat, 20+ apps sur 1 VPS. 44k+ ⭐ | coolify.io |
| **Dokploy / CapRover** | PaaS self-hosted OSS | VPS | Alternatives Coolify | dokploy.com |
| **Hetzner / OVH / Contabo** | VPS bruts | 4-15 $/mo | Le moins cher pour self-host | hetzner.com |
| **Cloudflare Pages + Workers** | Edge | Gratuit généreux | Edge global, KV/R2/D1, pas d'egress | cloudflare.com |
| **DigitalOcean App Platform** | PaaS | 5 $/mo+ | Simplicité + crédits Hatch | digitalocean.com |
| **Supabase** | BaaS (DB/auth/storage/functions) | Gratuit → 25 $/mo | Le backend par défaut | supabase.com |
| **Neon / Turso** | Postgres / SQLite serverless | Généreux free | DB découplée, branches de DB | neon.tech / turso.tech |

**CI/CD :** GitHub Actions (gratuit pour repos publics — parfait pour ce repo). **Secrets :** Doppler / Infisical (OSS). **Monitoring uptime :** BetterStack / UptimeRobin / OpenStatus (OSS).

**Reco Afrique (latence + coût) :** front sur Cloudflare Pages/Vercel (edge), backend Supabase (région eu proche) ou VPS Hetzner + Coolify pour maîtriser le coût en devise forte. Éviter les egress fees (Cloudflare R2 > S3 pour le storage média).

## 2.7 GTM / Sales tools (top 12)

| Outil | Usage | Prix | Lien |
|---|---|---|---|
| **Clay** | Enrichment + waterfall + IA de recherche de comptes | 149 $/mo+ | clay.com |
| **Apollo.io** | Base de contacts B2B + séquences + dialer | Freemium → 49 $/mo | apollo.io |
| **Instantly / Smartlead** | Cold email volume + warmup multi-inbox | 30-40 $/mo | instantly.ai |
| **Lemlist** | Séquences multicanal (email + LinkedIn) + perso visuelle | 39 $/mo+ | lemlist.com |
| **HeyReach / Expandi** | LinkedIn automation (safe) | 79 $/mo+ | heyreach.io |
| **Attio** | CRM moderne, modulable | Freemium → 29 $/user | attio.com |
| **HubSpot for Startups** | CRM + marketing (réduc 30-90 %) | via partenaire | hubspot.com/startups |
| **Folk** | CRM léger relationnel | 20 $/user | folk.app |
| **Cal.com** | Booking de démos/interviews | Gratuit → 12 $/mo | cal.com |
| **Reply.io / Woodpecker** | Cadences email PME | 49-60 $/mo | reply.io |
| **Trigify / Clay signals** | Signaux d'intent (job change, hiring) | varie | — |
| **PhantomBuster** | Scraping social pour listes | 56 $/mo+ | phantombuster.com |

## 2.8 WhatsApp & communication Afrique-first (top 12)

| Outil | Usage | Prix | Note Afrique | Lien |
|---|---|---|---|---|
| **WhatsApp Business App** | Catalogue, réponses rapides, labels | Gratuit | Canal #1 de vente informelle en Afrique | business.whatsapp.com |
| **WhatsApp Cloud API (Meta)** | API officielle : templates, automations, multi-agents | Gratuit d'accès + tarif par conversation (varie pays) | Base de tout bot WhatsApp sérieux | developers.facebook.com/docs/whatsapp |
| **360dialog** | BSP (fournisseur d'accès API) sans marge par message | ~49 €/mo + coût Meta | Populaire, transparent | 360dialog.com |
| **Twilio** | API WhatsApp/SMS/voix | Usage | Fiable, docs top, cher | twilio.com |
| **Africa's Talking** | SMS, USSD, voix, airtime — **API panafricaine** | Usage (bas) | *La* référence SMS/USSD Afrique (KE, NG, UG, etc.) | africastalking.com |
| **Termii** | SMS/OTP/WhatsApp/voice, delivery Afrique optimisée | Usage | Bon delivery NG + Afrique de l'Ouest | termii.com |
| **Sendchamp** | Multicanal (SMS, WhatsApp, email, OTP) | Usage | NG-first | sendchamp.com |
| **Wati / AiSensy / Interakt** | CRM WhatsApp no-code sur Cloud API | 39-99 $/mo | Bots, broadcasts, catalogue | wati.io |
| **Chatwoot** | Support omnicanal **open source** (WhatsApp, IG, email, chat) | Self-host gratuit / 19 $/agent | Self-host = coût maîtrisé | chatwoot.com |
| **Rasa / Botpress / Typebot** | Constructeurs de chatbots (Typebot = OSS) | OSS / freemium | Flows WhatsApp visuels | typebot.io |
| **Telegram Bot API** | Bots, canaux, groupes | Gratuit | Fort chez devs & crypto Afrique | core.telegram.org/bots |
| **Africa's Talking USSD** | Menus USSD (feature phones, sans internet) | Usage | Atteindre les non-smartphones | africastalking.com |

**Insight :** pour RESTAFY et la plupart des SaaS Afrique B2C/B2SMB, le tunnel de conversion réel est **landing → WhatsApp → paiement mobile money**. Construire le bot sur **Cloud API via 360dialog ou Termii**, support client sur **Chatwoot self-host**, notifications transac sur **Africa's Talking / Termii**.

## 2.9 Stack recommandée par scénario

### Scénario A — Bootstrap solo, budget < 20 $/mois
- **Build :** Claude Code + `ixartz/SaaS-Boilerplate` (gratuit) + Supabase free + v0 pour l'UI.
- **Deploy :** Vercel hobby + Supabase free (ou Cloudflare Pages).
- **Paiement :** Paystack (NG/GH/KE) ou KkiaPay/CinetPay (francophone).
- **Analytics :** Clarity + PostHog free + GoatCounter.
- **GTM :** WhatsApp Business App + Tally (waitlist) + Dub (liens) + X/LinkedIn manuels.
- **Comms :** Chatwoot self-host (1 petit VPS) ou WhatsApp Business App seul.

### Scénario B — Post-grant / accéléré, ~500-2000 $/mois, non-dilutif
- **Build :** Claude Code + Cursor + MakerKit (multi-tenant) + Supabase Pro.
- **Deploy :** Vercel Pro + Supabase Pro + Cloudflare (media R2).
- **Credits :** activer AWS Activate Portfolio + Google Cloud + Azure via l'accélérateur.
- **Paiement :** couche d'abstraction + Flutterwave (pan-Afr) + provider local.
- **Analytics :** PostHog (payant) + Metabase sur la DB.
- **GTM :** Apollo/Instantly (cold email) + Clay (si B2B) + Cal.com + HubSpot Startups.
- **Comms :** WhatsApp Cloud API via 360dialog + Wati + Termii (OTP/SMS).

### Scénario C — AI-first (le produit EST un agent)
- **Build :** Claude Code + API Claude/OpenAI via **OpenRouter** + Langfuse (observabilité) + Trigger.dev (jobs).
- **Infra IA :** Modal/Replicate pour le GPU + crédits NVIDIA Inception + Google AI-first (350k$).
- **Vector/DB :** Supabase pgvector ou Turso + Upstash (Redis/queues).
- **Deploy :** Vercel (front) + Fly.io/Modal (workers IA).
- **Analytics :** PostHog + LangSmith/Langfuse (qualité des réponses).

### Scénario D — Funded pré-seed (avec VC)
- Débloquer tous les paliers de crédits (AWS GenAI 300k, Google 350k, Azure 150k).
- CRM HubSpot, data stack (RudderStack + BigQuery/Snowflake + dbt léger), Sentry team, Statsig.
- Recrutement : Andela/talent Afrique, Deel/Remote (contrats), Mercury/Brex (banque).

---

# Part 3 — Playbooks & Templates

> **Transition.** La Part 2 t'a donné la boîte à outils. La Part 3 est le mode d'emploi séquentiel : 10 playbooks qui vont de « je n'ai qu'une idée » à « j'ai 1000 users et je lève / je scale ». Chaque playbook tient sur une page, se lit en 5 min, s'exécute en jours. Format identique partout : **Objectif → Pré-requis → Étapes → Template → Metrics de succès → Pièges.**

**Ordre d'exécution recommandé :** 1 → 2 → 3 → (4, 5, 6 en parallèle) → 7 dès que tu as de la traction → 8 & 9 en continu → 10 quand tu vises la levée.

| # | Playbook | Objectif | Durée |
|---|---|---|---|
| 1 | Valider l'idée | 10 interviews + 100 inscrits waitlist + go/no-go | 14 j |
| 2 | Construire le MVP avec l'IA | Produit utilisable en prod | 7 j |
| 3 | GTM 0 → 1000 users | Premiers 1000 utilisateurs | 90 j |
| 4 | Content marketing | 1 → 10 → 100 contenus, moteur de trafic | continu |
| 5 | Cold outreach | 30 conversations qualifiées | 21 j |
| 6 | Launch (PH / HN / X) | Pic de visibilité + backlinks | 1 j (prépa 7 j) |
| 7 | Funding (grants → pré-seed) | 5-50k$ non-dilutif ou pré-seed | 60-120 j |
| 8 | Community building | 500 membres actifs | 90 j |
| 9 | Contribution open source | 25 contributeurs sur ton repo | continu |
| 10 | Pricing & monétisation | Premier $1k puis $10k MRR | 30-90 j |

---

## Playbook 1 — Valider l'idée (0 → 10 interviews → 100 waitlist)

**Objectif :** obtenir un go/no-go fondé sur des faits en 14 jours : 10 interviews « Mom Test », 100 inscrits sur une waitlist, ≥ 5 personnes qui acceptent de payer/pré-commander.

**Pré-requis :** une idée formulée en 1 phrase (« J'aide [QUI] à [FAIRE X] pour que [RÉSULTAT] »), un accès à ~30 personnes du segment cible (WhatsApp, LinkedIn, communautés), 2 h/jour.

**Étapes :**
1. **J1 — Écris l'hypothèse.** Remplis le canvas : segment, problème, solution actuelle, « riskiest assumption » (RAT). Exemple RESTAFY : « Les restos de Cotonou perdent des commandes parce qu'ils gèrent WhatsApp à la main → RAT : ils *veulent* changer, pas juste s'en plaindre. »
2. **J2 — Prépare le guide d'interview** (Mom Test) : questions sur le passé et les faits uniquement. *Voir template ci-dessous.*
3. **J2 — Monte la waitlist** : Tally ou Framer, 1 phrase de promesse + champ email + 1 question qualifiante + case « prêt à payer X ? ».
4. **J3-J10 — Fais 10 interviews** (20-30 min, visio ou téléphone). Enregistre (Fathom/Granola). 1 par jour minimum. Après chacune : note le verbatim le plus dur, le workaround actuel, le budget évoqué.
5. **J3-J12 — Recrute la waitlist** : 3 posts (LinkedIn, X, 2 groupes WhatsApp), 20 DMs personnalisés, 1 message dans 2 communautés. Vise 100 inscrits.
6. **J11 — Test de pré-vente** : propose aux 10 interviewés (et à la waitlist chaude) de réserver leur place avec un acompte symbolique (mobile money) ou une LOI. Objectif : ≥ 5 « oui » concrets.
7. **J13 — Synthèse** : code les insights (skill `/validate-idea` fait ça), remplis la grille de décision.
8. **J14 — Décision** : Go / Pivot / No-go selon les seuils ci-dessous.

**Template — Guide d'interview Mom Test (à copier) :**
```
1. Raconte-moi la dernière fois que tu as [fait la tâche liée au problème].
2. Qu'est-ce qui était pénible dans ce moment-là ? (laisse le silence)
3. Qu'as-tu fait pour contourner ça ? (outil, personne, bricolage)
4. Combien de temps / d'argent ça t'a coûté, à peu près ?
5. As-tu déjà cherché une solution ? Qu'as-tu essayé ? Pourquoi ça n'a pas collé ?
6. Si tu avais une baguette magique sur ce sujet, ce serait quoi ? (juste pour explorer)
7. Qui d'autre vit ce problème et à qui je devrais parler ?
INTERDIT : "Est-ce que tu utiliserais...", "Est-ce que tu paierais...", "Tu aimerais si...".
```

**Metrics de succès (seuils go) :**
| Signal | No-go | Zone grise | Go |
|---|---|---|---|
| Interviews où le problème est « top 3 » du persona | < 3/10 | 3-5/10 | ≥ 6/10 |
| Workaround coûteux existant (temps/argent) | rare | parfois | ≥ 6/10 |
| Waitlist en 12 j | < 40 | 40-99 | ≥ 100 |
| Pré-ventes / LOI | 0-1 | 2-4 | ≥ 5 |

**Pièges :** interviewer ses amis ; poser des questions hypothétiques ; « pitcher » au lieu d'écouter ; confondre politesse et intérêt ; waitlist sans question qualifiante (chiffre vaniteux).

---

## Playbook 2 — Construire le MVP avec l'IA en 7 jours

**Objectif :** un produit **en production**, utilisable par un vrai utilisateur, qui adresse *uniquement* la riskiest assumption validée au Playbook 1.

**Pré-requis :** Playbook 1 = Go. Claude Code installé. Un boilerplate choisi (Part 2.2). Comptes Supabase + Vercel + provider de paiement. Le « one-thing » du MVP écrit en 1 phrase.

**Plan de sprint (7 jours) :**
| Jour | Livrable | Skill/outil |
|---|---|---|
| J1 | PRD court + user stories + schéma de données + maquette (v0) | `/generate-prd`, v0.dev |
| J2 | Scaffolding : boilerplate cloné, auth OK, DB migrée, déployé « hello world » en prod | Claude Code + `/build-mvp` |
| J3 | Parcours cœur (le « one-thing ») end-to-end, sans design fin | Claude Code |
| J4 | Intégration paiement (checkout + webhook + statut) via l'adapter | `templates/payments-adapter.ts` |
| J5 | Notifications (email Resend / WhatsApp) + page de succès + onboarding minimal | Claude Code |
| J6 | Polissage : responsive mobile, états vides, erreurs, analytics (PostHog), Sentry | Claude Code |
| J7 | Tests manuels sur 3 devices Afrique-réalistes (Android milieu de gamme, 3G), fix, **mise en prod + 1 vrai user onboardé** | — |

**Template — PRD court (1 page) :**
```
# [Produit] — MVP PRD
Problème (1 phrase) :
Utilisateur cible (1 phrase) :
Le "one-thing" que le MVP doit faire :
Hors scope (explicite) : - ... - ...
User stories (max 5) :
  - En tant que [X], je veux [Y] pour [Z].
Données (entités + champs clés) :
Écrans (max 5) :
Intégrations : auth=..., paiement=..., email/WA=...
Definition of done : un utilisateur peut [action clé] et je reçois [signal].
Métrique d'activation : % d'inscrits qui font [action clé] < 24h.
```

**Metrics de succès :** déployé en prod à J7 ; 1 utilisateur réel a complété le parcours cœur ; time-to-value < 10 min ; tu peux voir l'event d'activation dans PostHog.

**Pièges :** scope creep (ajouter « juste un petit truc ») ; soigner le design avant d'avoir la valeur ; ignorer la perf mobile/3G ; câbler Stripe alors qu'il faut Paystack ; ne pas mettre d'analytics dès J6 (tu voles à l'aveugle).

---

## Playbook 3 — GTM : 0 → 1000 users en 90 jours

**Objectif :** 1000 utilisateurs inscrits, dont ≥ 100 actifs hebdo, via 2 canaux prouvés (Bullseye).

**Pré-requis :** MVP live, event d'activation instrumenté, waitlist du Playbook 1.

**Étapes :**
1. **Semaine 1 — Convertir la waitlist.** Email + WhatsApp à chaque inscrit, onboarding assisté pour les 20 premiers (appel/écran partagé). Cible : 50-100 users.
2. **Semaines 2-4 — Tester 5 canaux** à petite dose (règle Bullseye) : (a) communautés/groupes WhatsApp du secteur, (b) LinkedIn/X contenu, (c) cold outreach (Playbook 5), (d) partenariat micro-influenceur secteur, (e) SEO/annuaire de niche. Budget temps égal, 2 semaines, mesure coût/user et activation par canal.
3. **Semaine 5 — Doubler sur le canal #1**, garder le #2 en soutien, couper les 3 autres.
4. **Semaines 6-10 — Boucle de contenu** (Playbook 4) : 3 contenus/semaine, chacun avec CTA vers le produit, chacun recyclé en 3 formats.
5. **Semaines 8-12 — Boucle de référral** : ajoute un mécanisme « invite et gagne X » adapté (crédit, mois offert, place prioritaire). Mesure le coefficient (invitations envoyées × taux d'acceptation).
6. **Semaine 12 — Revue :** 1000 users ? sinon, quel maillon casse (acquisition, activation, rétention) → 1 semaine de fix ciblé.

**Template — Tableau de test de canal :**
```
Canal | Heures investies | Users obtenus | Coût $ | Taux d'activation | Verdict (double/soutien/coupe)
```

**Metrics de succès :** 1000 inscrits ; ≥ 10 % activation ; ≥ 100 WAU ; CAC soutenable (< valeur d'un user sur 3 mois) ; 1 canal avec pente régulière.

**Pièges :** lancer 10 canaux à moitié ; juger un canal en 3 jours ; optimiser l'acquisition alors que la rétention fuit ; négliger l'onboarding manuel des 50 premiers (c'est là qu'on apprend).

---

## Playbook 4 — Content marketing : 1 → 10 → 100

**Objectif :** un moteur de trafic organique qui produit ≥ 500 visites/mois vers le produit à M+3, ≥ 3000 à M+6.

**Pré-requis :** 5 sujets où tu as un angle unique (ton terrain, tes chiffres, ton pays).

**Système (répétable chaque semaine) :**
1. **1 contenu-pilier/semaine** (article 800-1500 mots OU vidéo 3-6 min OU teardown). Toujours : problème réel → méthode → résultat chiffré → CTA produit.
2. **Éclatement en 3-4 atomes** : 1 thread X, 1 post LinkedIn, 1 court (Reel/Short), 1 message communauté.
3. **Distribution** : publie sur ton compte + 2 communautés + 1 newsletter partenaire (échange de mentions) + reddit/HN si pertinent.
4. **Recyclage à M+1** : reformate les 4 meilleurs de M-1.
5. **SEO léger** : 1 mot-clé longue traîne par pilier, titre + H2 + FAQ, maillage interne vers le produit.

**Template — Structure d'article-pilier :**
```
Titre : Comment [résultat concret] au [pays/contexte] (avec chiffres)
Hook (2 lignes) : la tension + la promesse.
Contexte : pourquoi c'est dur ici précisément.
Méthode : 3-5 étapes numérotées, screenshots, commandes.
Résultat : chiffres avant/après, capture PostHog.
Ce que je ferais différemment.
CTA : "Le playbook complet + les templates : [repo] · Essaie [produit] : [lien]"
```

**Metrics de succès :** ≥ 4 contenus-piliers/mois ; ≥ 1 contenu « hit » (>5k vues) par mois à partir de M+2 ; trafic organique produit en hausse 3 mois de suite.

**Pièges :** contenu générique « 10 astuces productivité » (aucun angle) ; publier sans distribuer ; changer de format toutes les semaines ; pas de CTA ; ne jamais recycler.

---

## Playbook 5 — Cold outreach (WhatsApp / LinkedIn / email)

**Objectif :** 30 conversations qualifiées en 21 jours → 10 démos → 3-5 clients ou design partners.

**Pré-requis :** ICP précis (secteur, taille, rôle, pays, déclencheur), liste de 150 comptes cibles (Apollo/Clay/manuel), 3 variantes de message.

**Étapes :**
1. **J1-J2 — Construis la liste** (150 contacts, vérifie les emails, note le déclencheur perso pour chacun des 30 premiers).
2. **J2 — Écris 3 séquences** (skill `/write-cold-outreach`) : WhatsApp (court, vocal optionnel), LinkedIn (connexion + note + follow-up), email (3 touches).
3. **J3-J17 — Envoie 10 contacts/jour/canal**, personnalise la 1ʳᵉ ligne. Relance à J+3 et J+7.
4. **En continu — Réponds en < 2 h**, propose un créneau Cal.com direct.
5. **J18-J21 — Fais les démos**, propose un statut « design partner » (accès gratuit/réduit contre feedback + témoignage).

**Template — Cold WhatsApp (FR, secteur resto) :**
```
Bonjour [Prénom], je suis Souraka, je construis [Produit] à Cotonou.
J'ai vu que [détail concret : votre page, votre file d'attente WhatsApp].
On aide les restos comme [le vôtre] à [résultat : ne plus perdre de commandes le soir].
Ça vous dit 15 min cette semaine pour me dire si ça a du sens pour vous ?
(pas de vente, je veux surtout comprendre comment vous gérez aujourd'hui)
```
**Template — Cold email (3 touches) :**
```
T1 (jour 0) — Objet : [résultat] pour [entreprise] ?
  1 ligne de perso · 1 ligne de problème · 1 ligne de preuve · 1 question douce.
T2 (jour 3) — "Je remonte ce message au cas où — un exemple : [mini case study 1 ligne]."
T3 (jour 7) — "Je n'insiste plus. Si un jour [problème] devient prioritaire, je reste dispo. Un lien utile en attendant : [ressource repo]."
```

**Metrics de succès :** taux de réponse ≥ 15 % (WhatsApp souvent 30 %+), ≥ 30 conversations, ≥ 10 démos, ≥ 3 design partners.

**Pièges :** pitch trop long ; pas de perso ; parler produit avant problème ; 1 seule touche ; envoyer en masse depuis une boîte non « warmée » (spam) ; ignorer les fuseaux/heures locales.

---

## Playbook 6 — Launch (Product Hunt / Hacker News / X)

**Objectif :** un pic de visibilité coordonné → top 3 Product Hunt du jour OU front page HN OU thread X > 100k vues → backlinks + inscriptions + stars.

**Pré-requis (J-7) :** page produit prête, GIF de 15 s, 5 captures, FAQ, 1 « founder story » écrite, liste de 50-100 soutiens prévenus, compte PH « hunter » chaud (ou toi), asset kit.

**Plan J-7 → J+1 :**
| Jour | Actions |
|---|---|
| J-7 | Prévenir 80 soutiens (DM perso, pas de groupe spam). Préparer 3 tweets + 1 thread + post LinkedIn + texte HN (« Show HN »). Programmer la newsletter. |
| J-3 | Tester la page sur mobile/3G. Relire la founder story. Préparer les réponses aux objections. |
| J-1 | Confirmer 30 soutiens pour la 1ʳᵉ heure. Programmer le post PH à 00:01 PT (09:01 UTC). Nuit de sommeil. |
| **J0** | 00:01 PT : PH en ligne. 08:00 ET : « Show HN ». Puis thread X + LinkedIn. Répondre à **tous** les commentaires en < 15 min pendant 12 h. Poster dans 5 communautés. Newsletter le matin. |
| J+1 | Remercier nominativement. Publier le « recap » (chiffres du jour). Transformer les retours en issues. Relancer les indécis. |

**Template — « Show HN » :**
```
Show HN: African AI Founder OS – an open-source OS to go from idea to $10k MRR with AI

I'm building RESTAFY (restaurant SaaS) from Benin. Every week I hit the same wall:
which tool, which grant, which payment provider works *here*? So I turned my playbook
into a repo: 10 executable playbooks, 10 Claude Code skills, a pre-vetted stack, and an
Africa layer (mobile-money providers by country, grants, accelerators, regulations).

It's opinionated and Africa-first but the playbooks/skills are useful anywhere.
Would love feedback on the skills and what's missing for your country. [link]
```

**Metrics de succès :** PH top 5 / HN front page ≥ 2 h / thread > 50k vues ; +300 stars le jour J ; +200 emails ; ≥ 5 backlinks.

**Pièges :** lancer un vendredi/lundi ; demander « upvote » explicitement (bannissable PH/HN) ; disparaître après avoir posté ; page pas prête pour mobile ; pas de founder story (le narratif fait 50 % du succès).

---

## Playbook 7 — Funding (grants → accélérateurs → pré-seed)

**Objectif :** sécuriser 5-50k$ non-dilutif en 60-120 j, ou entrer dans 1 accélérateur, ou closer un pré-seed.

**Pré-requis :** traction minimale (users actifs OU revenus OU LOIs), one-pager, deck 10-12 slides (`/generate-pitch-deck`), société enregistrée (ou en cours).

**Étapes :**
1. **Semaine 1 — Cartographie.** Liste 15-20 opportunités (voir Part 5) triées par : montant, dilution (0 d'abord), deadline, fit géo/secteur, effort de dossier.
2. **Semaine 1 — Assets de base réutilisables :** one-pager, deck, vidéo 2 min, réponses types (problème, marché, traction, équipe, usage des fonds, impact).
3. **Semaines 2-8 — Applique par vagues** : 3 candidatures/semaine. Personnalise l'intro et la section « impact » à chaque programme. Track dans un tableau.
4. **En continu — Réseau :** 5 intros chaudes/semaine (mentors, alumni de programmes, autres founders). Les grants/accélérateurs sélectionnent aussi sur recommandation.
5. **Pour le pré-seed :** vise 20-30 angels/micro-VC actifs sur l'Afrique, format « raise » sur 6-8 semaines, momentum (« je closerai le [date] »).

**Template — Section « usage des fonds » :**
```
Sur [montant] :
- 50 % produit (2 devs IA, 4 mois) → objectif : X → Y sur [métrique]
- 25 % go-to-market ([canal prouvé]) → CAC cible, [N] clients
- 15 % opérations / conformité ([pays])
- 10 % buffer
Jalons à 6 mois : [MRR], [users actifs], [1 preuve de rétention]
```

**Metrics de succès :** ≥ 12 candidatures soumises ; ≥ 3 shortlists ; ≥ 1 financement/programme obtenu ; pipeline d'angels ≥ 20.

**Pièges :** un seul dossier générique copié-collé ; viser l'equity avant d'avoir épuisé le non-dilutif ; sous-estimer le temps de décaissement (souvent 2-4 mois) ; négliger la conformité (KYB, enregistrement) qui bloque le versement.

---

## Playbook 8 — Community building (Discord / WhatsApp / GitHub Discussions)

**Objectif :** 500 membres actifs (postent/réagissent au moins 1×/mois) en 90 jours, avec 10 contributeurs de contenu réguliers.

**Pré-requis :** un « pourquoi on se réunit » clair (« founders africains qui shippent avec l'IA »), 3-5 salons max au départ, 5 membres fondateurs engagés.

**Étapes :**
1. **J1 — Structure minimale :** salons `#présentez-vous`, `#idées-et-feedback`, `#wins`, `#outils-afrique`, `#offres-grants`. Règles courtes. Bot de bienvenue.
2. **J1-J14 — Amorçage (Cold Start) :** invite 50 personnes 1-à-1, pas de lien public. Poste toi-même 1 chose utile/jour (un outil, un grant qui ferme bientôt, une question).
3. **Semaines 3-6 — Rituels :** « Win du vendredi », « Office hours » mensuelles (toi + 1 invité), « Deal of the week » (un crédit/grant). Mets en avant les membres.
4. **Semaines 6-12 — Déléguer :** nomme 3-5 modérateurs/ambassadeurs (par pays si possible), donne-leur un rôle et de la visibilité.
5. **En continu — Boucle repo↔communauté :** chaque nouvelle ressource du repo est annoncée dans la communauté ; chaque bonne discussion devient une PR.

**Metrics de succès :** ≥ 500 membres, ≥ 25 % actifs/mois, ≥ 10 posts non-fondateur/jour, ≥ 3 ambassadeurs autonomes, taux de réponse aux nouveaux < 12 h.

**Pièges :** ouvrir 20 salons vides ; lancer public trop tôt (effet « ville fantôme ») ; ne pas modérer le spam/scam (fréquent sur les groupes « founders Afrique ») ; tout centraliser sur toi.

---

## Playbook 9 — Contribution open source (25 contributeurs sur `african-ai-founder-os`)

**Objectif :** 25 contributeurs avec PR mergée en 8-12 semaines, dont 5 récurrents.

**Pré-requis :** `CONTRIBUTING.md` clair, templates d'issue/PR, 15-20 `good-first-issue` prêtes, CI verte, All-Contributors bot.

**Étapes :**
1. **Avant le launch — Prépare 20 `good-first-issue`** : « Ajouter le provider X pour le pays Y (remplir `payments/xx.yml`) », « Traduire le playbook 2 en anglais », « Ajouter un grant récent avec source ». Chacune : contexte + fichiers concernés + definition of done.
2. **Au launch — CTA explicite** dans le README et le thread : « Ajoute ton pays en 1 PR ».
3. **Chaque PR :** réponse < 24 h, ton chaleureux, review qui *enseigne*, merge rapide, ajout au README (bot), tweet de remerciement.
4. **Semaine 2+ — Programme « pays maintainer »** : qui contribue 3× sur un pays devient « maintainer » de ce dossier (badge, mention).
5. **Mensuel — Contributor spotlight** dans la newsletter + « call for contributions » thématique (« ce mois : Afrique de l'Est »).

**Template — `good-first-issue` :**
```
### Ajouter [ressource] pour [pays]
**Contexte :** il nous manque [X] pour [pays].
**Fichier à modifier :** `05-africa/payments-by-country.md` (+ `data/payments/[iso].yml`)
**Definition of done :**
- [ ] Entrée ajoutée avec : nom, méthodes, frais indicatifs, recurring oui/non, lien docs
- [ ] Source datée (lien) en commentaire
- [ ] `npm run lint:data` passe
**Difficulté :** ⭐ (30 min) · **Mentor :** @souraka
```

**Metrics de succès :** ≥ 25 contributeurs, délai 1ʳᵉ review médian < 24 h, ≥ 15 GFI ouvertes en permanence, ≥ 5 « pays maintainers ».

**Pièges :** issues vagues ; PR ignorées ; review sèche/critique ; pas de reconnaissance publique ; exiger un CLA lourd.

---

## Playbook 10 — Pricing & premiers revenus ($1k → $10k MRR)

**Objectif :** passer de 0 à $1k MRR en 30 j, puis viser $10k MRR en 90 j.

**Pré-requis :** ≥ 100 users actifs OU ≥ 10 design partners contents ; compréhension du « job » (JTBD) et de la valeur créée (temps/argent).

**Étapes :**
1. **Semaine 1 — Recherche de prix :** Van Westendorp sur 30 users (`/optimize-pricing`), + analyse de 5 concurrents (`/research-competitors`), + « quel budget mensuel ça mérite pour toi ? ».
2. **Semaine 1 — Construis 3 paliers** (Good-Better-Best), l'offre du milieu = la cible, en **monnaie locale** + option mobile money mensuelle. Ancre la valeur (« = X commandes récupérées »).
3. **Semaine 2 — Active la facturation** (Paystack/Flutterwave subscriptions ou l'adapter). Page pricing (`templates/pricing-page.md`).
4. **Semaine 2-3 — Convertis les design partners** : entretien 1-à-1, offre « early adopter » (-30-50 % à vie) contre engagement annuel ou témoignage.
5. **Semaine 3-4 — Onboard payant** : le paywall arrive *après* le moment de valeur (activation), pas avant.
6. **Mois 2-3 — Expansion :** upsell (volume, sièges, multi-sites), réduis le churn (relances d'échec de paiement mobile money = enjeu #1), demande des reviews.

**Template — 3 paliers :**
```
Starter (mensuel, mobile money) — [prix local] : 1 point de vente, [limite volume], support WhatsApp.
Pro (recommandé) — [prix local] : jusqu'à 3 points de vente, [volume x5], analytics, sans marque.
Business — [prix local ou "nous contacter"] : multi-sites, API, onboarding dédié, SLA.
Annuel : -2 mois. Early adopter : -40 % à vie (30 premières signatures).
```

**Metrics de succès :** $1k MRR à J30 ; ≥ 20 clients payants ; churn mensuel < 7 % ; ≥ 1 upsell ; $10k MRR trajectoire à J90.

**Pièges :** pricing en USD only ; annuel forcé (trésorerie) ; paywall avant la valeur ; ignorer les échecs de paiement récurrents (mobile money = beaucoup de retries) ; trop de paliers ; remises non limitées dans le temps.

---

## 3.11 Index des templates (dossier `templates/`)

| Fichier | Contenu |
|---|---|
| `templates/prd.md` | PRD court 1 page (Playbook 2) |
| `templates/one-pager.md` | One-pager investisseur/grant |
| `templates/pitch-deck.md` | 12 slides, contenu slide par slide |
| `templates/pricing-page.md` | Structure + copy d'une page pricing 3 paliers |
| `templates/landing-page.md` | Wireframe + copy section par section |
| `templates/cold-dm-whatsapp.md` | 5 variantes WhatsApp FR/EN |
| `templates/cold-email.md` | Séquence 3 touches + objets |
| `templates/interview-guide.md` | Guide Mom Test + grille de codage |
| `templates/launch-checklist.md` | Checklist J-7 → J+1 |
| `templates/payments-adapter.ts` | Interface `PaymentProvider` + stubs Paystack/CinetPay |
| `templates/grant-application.md` | Réponses types (problème, marché, traction, impact, usage des fonds) |
| `templates/content-calendar.md` | Calendrier éditorial 30 jours |

---

# Part 4 — AI Skills (prompts exécutables)

> **Transition.** Les playbooks disent quoi faire ; les skills le font *avec toi*. Chaque skill ci-dessous est un prompt complet prêt à coller dans **Claude Code** (ou l'app Claude / Manus / Cursor). Format identique : **But → Variables → Prompt (copier tel quel) → Exemple d'input → Exemple d'output (abrégé) → Pièges.**
>
> **Installation dans Claude Code :** crée `.claude/skills/<nom>/SKILL.md` avec le contenu du prompt, ou colle-le directement dans le chat. Le repo fournit les 10 fichiers dans `04-ai-skills/`.
>
> **Convention de variables :** `{pays}`, `{secteur}`, `{ICP}`, `{idee}`, `{produit}`, `{langue}`, `{devise}`, `{concurrents}`, `{url}`. Remplace, ou laisse le skill te les demander.

| Skill | Ce qu'il produit |
|---|---|
| `/validate-idea` | Questionnaire d'interview + script waitlist + grille d'analyse + verdict go/no-go |
| `/generate-prd` | PRD complet (problème, users, scope, data, écrans, DoD, métriques) |
| `/build-mvp` | Plan de sprint 7 jours + scaffolding commands + structure de fichiers |
| `/create-gtm` | Plan GTM 30/60/90 jours avec canaux, messages, métriques |
| `/write-cold-outreach` | 10 variantes de cold DM/email (WhatsApp, LinkedIn, email) |
| `/optimize-pricing` | Analyse concurrents + Van Westendorp + 3 paliers recommandés |
| `/create-viral-hook` | 20 hooks X/LinkedIn + 2 threads complets |
| `/research-competitors` | Tableau comparatif 10 concurrents + positionnement + gaps |
| `/generate-pitch-deck` | 12 slides, contenu rédigé slide par slide + notes orateur |
| `/plan-content-30-days` | Calendrier éditorial 30 jours (sujets, formats, canaux, CTA) |

---

## Skill 1 — `/validate-idea`

**But :** transformer une idée floue en plan de validation exécutable + analyser les réponses et rendre un verdict.

**Variables :** `{idee}`, `{segment}`, `{pays}`, `{langue}`.

**Prompt (à copier) :**
```
Tu es un expert en validation de startup, formé à "The Mom Test" (Rob Fitzpatrick),
"Continuous Discovery" (Teresa Torres) et au test PMF de Sean Ellis.

CONTEXTE
Idée : {idee}
Segment cible : {segment}
Pays / marché : {pays}
Langue des livrables : {langue}

MODE
Si je te donne juste l'idée -> produis le PLAN DE VALIDATION (sections 1 à 4).
Si je te colle des notes/verbatims d'interviews -> produis l'ANALYSE (sections 5 à 6).

1. HYPOTHÈSES
   - Reformule l'idée en : "J'aide {qui} à {faire X} pour que {résultat}."
   - Liste 5 hypothèses testables (problème, segment, willingness to pay, canal, solution).
   - Identifie LA "riskiest assumption" (celle qui, si fausse, tue le projet).

2. GUIDE D'INTERVIEW (Mom Test, 7 questions max)
   - Uniquement des questions sur le passé et les faits.
   - Interdis explicitement les questions hypothétiques ; donne 3 exemples de
     questions à NE PAS poser pour cette idée précise.
   - Ajoute 3 "questions de suivi" pour creuser un signal.

3. PLAN WAITLIST
   - 1 phrase de promesse (< 12 mots) adaptée à {pays}.
   - 1 question qualifiante + 1 question "prêt à payer {devise}X ?".
   - 3 endroits précis où recruter dans {pays} (communautés, groupes, canaux).
   - Objectif chiffré sur 12 jours.

4. TEST DE PRÉ-VENTE
   - Formule d'ask pour obtenir un acompte / une LOI, adaptée au contexte local.
   - Seuil de succès.

5. ANALYSE DES RÉPONSES (si verbatims fournis)
   - Tableau : verbatim | job/problème | intensité (1-5) | workaround actuel | budget évoqué.
   - Top 3 douleurs récurrentes, top 3 objections.
   - Signaux d'achat vs signaux de politesse (liste séparée).

6. VERDICT
   - Remplis la grille : problème top-3 (x/10), workaround coûteux (x/10), waitlist,
     pré-ventes.
   - Conclusion : GO / PIVOT (préciser lequel) / NO-GO, en 3 lignes, avec la
     prochaine action concrète.

Sois concret, cite mes mots quand tu analyses, pas de généralités.
```

**Exemple d'input :** `idee = "app qui prend les commandes resto par WhatsApp automatiquement" ; segment = "restos 1-3 points de vente" ; pays = "Bénin" ; langue = FR`

**Exemple d'output (abrégé) :** reformulation « J'aide les restos de Cotonou à recevoir leurs commandes du soir sans rater de messages pour qu'ils encaissent plus » ; riskiest assumption = « les gérants veulent déléguer WhatsApp, pas juste s'en plaindre » ; 7 questions Mom Test ; à ne pas poser : « tu utiliserais un bot ? » ; promesse waitlist « Ne perdez plus une commande WhatsApp le soir » ; recrutement : groupes « Restaurateurs Cotonou », marché Dantokpa, Facebook « Bonne table Bénin » ; objectif 100 inscrits/12 j.

**Pièges :** ne pas fournir de vrais verbatims → l'analyse est creuse. Mélanger 5 idées → le skill se disperse (1 idée à la fois).

---

## Skill 2 — `/generate-prd`

**But :** produire un PRD court, buildable, qui contraint le scope.

**Variables :** `{idee}`, `{one_thing}`, `{stack}`, `{contraintes}`.

**Prompt :**
```
Tu es un PM senior qui écrit des PRD "MVP" ultra-cadrés pour des founders solo qui
codent avec un agent IA. Objectif : un doc d'1 page qui empêche le scope creep.

ENTRÉE
Idée : {idee}
Le "one-thing" que le MVP doit faire : {one_thing}
Stack imposée : {stack}   (ex: Next.js + Supabase + Paystack)
Contraintes : {contraintes}  (ex: users Android 3G, français, budget 0)

PRODUIS EXACTEMENT
# {Produit} — MVP PRD
- Problème (1 phrase)
- Utilisateur cible (1 phrase)
- Le one-thing (1 phrase, mesurable)
- HORS SCOPE (au moins 6 puces explicites de ce qu'on NE fait PAS)
- User stories : 5 max, format "En tant que X, je veux Y pour Z"
- Modèle de données : entités + champs clés + relations (liste ou mini-schéma)
- Écrans : 5 max, avec le but de chaque écran en 1 ligne
- Intégrations : auth / paiement / notif — précise le fournisseur
- Definition of Done : condition binaire vérifiable
- Métrique d'activation : formule exacte + seuil cible
- Risques (3) + parade pour chacun

RÈGLES
- Si le one-thing implique plusieurs parcours, garde le plus risqué, mets les autres en HORS SCOPE.
- Pas de feature "nice to have". Si tu hésites -> HORS SCOPE.
- Adapte les intégrations aux contraintes (ex: pas Stripe si {pays} non couvert).
```

**Exemple d'input :** `one_thing = "un client scanne un QR sur la table, voit le menu, commande, paie en mobile money" ; stack = Next.js + Supabase + KkiaPay ; contraintes = Android 3G, FR`

**Exemple d'output (abrégé) :** hors scope = compte client, historique, fidélité, multi-langue, dashboard analytics, gestion stock… ; 5 écrans = QR landing menu, panier, checkout mobile money, confirmation, vue cuisine ; DoD = « un client complète une commande payée et elle apparaît sur la vue cuisine en < 5 s » ; activation = « % de tables qui passent ≥ 1 commande payée / jour ≥ 30 % ».

**Pièges :** donner un one-thing vague (« gérer le resto ») → PRD trop large. Ne pas préciser le pays → mauvais provider de paiement.

---

## Skill 3 — `/build-mvp`

**But :** convertir le PRD en plan de sprint 7 jours + commandes de scaffolding + arborescence.

**Variables :** `{prd}`, `{boilerplate}`, `{stack}`, `{deploy}`.

**Prompt :**
```
Tu es un tech lead qui pilote un agent de code (Claude Code). À partir du PRD fourni,
produis un plan d'exécution de 7 jours, exécutable, avec commandes réelles.

ENTRÉE
PRD : {prd}
Boilerplate choisi : {boilerplate}
Stack : {stack}
Cible de déploiement : {deploy}

PRODUIS
1. ARBORESCENCE de fichiers à créer/modifier (tree), commentée.
2. SETUP (jour 0) : commandes shell exactes (clone, install, env vars à définir,
   migration DB, premier deploy "hello world"). Liste les comptes/API keys requis.
3. PLAN JOUR PAR JOUR (J1..J7) : pour chaque jour -> objectif, tâches (checklist),
   prompt à donner à Claude Code pour chaque tâche, critère de fin de journée.
4. SCHÉMA DB : DDL SQL (ou migration) prêt à appliquer.
5. ADAPTER PAIEMENT : signature d'interface + points d'intégration (checkout, webhook,
   vérif de statut) pour le provider du PRD.
6. CHECKLIST "prod-ready Afrique" : perf mobile/3G, états d'erreur, retries paiement,
   analytics (PostHog events à tracker), Sentry, RGPD/ää local si pertinent.
7. RISQUES d'implémentation + ordre de repli si on prend du retard (quoi couper).

RÈGLES
- Commandes réelles, pas de pseudo-code.
- Chaque "prompt à donner à Claude Code" doit être autonome et copiable.
- Priorise le parcours cœur du PRD ; le reste est optionnel.
```

**Exemple d'output (abrégé) :** `npx create-next-app` / `git clone <boilerplate>` ; env : `NEXT_PUBLIC_SUPABASE_URL`, `KKIAPAY_PUBLIC_KEY`, `KKIAPAY_PRIVATE_KEY`, `KKIAPAY_SECRET` ; J2 prompt Claude Code = « Implémente la table `orders` (schema ci-dessous), la route `/api/orders` POST qui crée une commande en statut `pending`, et la page `/t/[tableId]` qui liste le menu depuis `menu_items` » ; events PostHog : `menu_viewed`, `cart_started`, `checkout_started`, `payment_succeeded`, `order_ready`.

**Pièges :** lancer sans le PRD → plan générique. Ne pas fixer l'ordre de repli → à J6 on panique.

---

## Skill 4 — `/create-gtm`

**But :** un plan GTM 30/60/90 jours, orienté canaux testables (Bullseye).

**Variables :** `{produit}`, `{ICP}`, `{pays}`, `{canaux_dispo}`, `{budget}`, `{objectif_users}`.

**Prompt :**
```
Tu es un growth lead qui applique le Bullseye Framework (Traction) et le
Community-Led Growth. Conçois un plan GTM 30/60/90 jours.

ENTRÉE
Produit : {produit}
ICP (précis) : {ICP}
Marché : {pays}
Canaux accessibles : {canaux_dispo}
Budget mensuel : {budget}
Objectif : {objectif_users} utilisateurs en 90 jours

PRODUIS
1. POSITIONNEMENT : 1 phrase (pour {ICP}, {produit} est le {catégorie} qui {bénéfice
   unique}, contrairement à {alternative}).
2. 5 CANAUX À TESTER (parmi {canaux_dispo}) : pour chacun -> hypothèse, action
   concrète semaine 1-2, budget/temps, métrique, seuil "on double / on coupe".
3. MESSAGES : 1 accroche + 1 CTA par canal, en {langue}, adaptés {pays}.
4. PLAN 30 j : semaine par semaine (actions, cible chiffrée).
5. PLAN 60 j : doubler le canal gagnant + boucle de contenu + boucle de referral
   (mécanique précise adaptée au contexte : crédit, mois offert, priorité...).
6. PLAN 90 j : consolidation, objectif WAU, ce qu'on arrête.
7. TABLEAU DE BORD : 6 métriques à suivre chaque semaine + valeurs cibles.
8. PLAN B : si aucun canal ne marche à J30, 3 diagnostics + 3 actions.

Sois spécifique au marché {pays} (communautés nommées, plateformes dominantes,
saisonnalité, moyens de paiement).
```

**Exemple d'output (abrégé) :** canaux testés pour un SaaS resto Bénin = (1) groupes WhatsApp restaurateurs, (2) visites terrain Cotonou/Porto-Novo (porte-à-porte), (3) partenariat avec 1 grossiste boissons, (4) TikTok démo « avant/après », (5) LinkedIn (fournisseurs/franchises) ; referral = « 1 mois offert par resto parrainé qui reste 60 j ».

**Pièges :** canaux génériques (« SEO, ads ») sans ancrage local. Objectif users irréaliste vs budget.

---

## Skill 5 — `/write-cold-outreach`

**But :** 10 variantes de messages froids, multicanal, prêts à envoyer.

**Variables :** `{produit}`, `{ICP}`, `{declencheur}`, `{resultat}`, `{langue}`, `{canal}`.

**Prompt :**
```
Tu es un expert outbound B2B (style Josh Braun / Clay). Écris des messages froids
courts, centrés problème, jamais "salesy".

ENTRÉE
Produit : {produit}
Cible : {ICP}
Déclencheur observable : {declencheur}  (ex: file d'attente WhatsApp, recrutement, nouvelle ouverture)
Résultat promis : {resultat}
Langue : {langue}
Canal(aux) : {canal}  (WhatsApp / LinkedIn / email / tous)

PRODUIS
- WhatsApp : 3 variantes (< 60 mots), 1 avec proposition de note vocale.
- LinkedIn : note de connexion (< 300 caractères) + 2 messages de suivi.
- Email : 3 séquences complètes de 3 touches (objet + corps), 1 "casual", 1
  "chiffres/preuve", 1 "question courte".
- Pour chaque message : la 1ère ligne de perso est un [CROCHET] à remplir.
- 1 liste de 8 [CROCHETS] de personnalisation observables pour {ICP} dans {pays}.
- Règles de cadence (jours, nb/jour, heures locales) et 3 erreurs à éviter.

TON : humain, direct, respectueux du temps. Pas de superlatifs, pas de "j'espère
que ce message vous trouve bien".
```

**Exemple d'output (abrégé) :** WhatsApp v1 « Bonjour [Prénom], je suis Souraka (je construis RESTAFY à Cotonou). J'ai vu [CROCHET : votre file de commandes le vendredi soir]. On aide les restos comme le vôtre à ne plus rater de commandes. 15 min cette semaine pour comprendre comment vous gérez ça aujourd'hui ? » ; crochets = nouvelle ouverture, avis Google récents, page Insta active, recrutement serveur, promo en cours…

**Pièges :** crochets non observables (« j'imagine que… ») → ça sonne faux. Envoyer les 3 touches en 24 h.

---

## Skill 6 — `/optimize-pricing`

**But :** recommander 3 paliers de prix fondés sur concurrents + willingness to pay + contexte local.

**Variables :** `{produit}`, `{valeur_creee}`, `{concurrents}`, `{pays}`, `{devise}`, `{reponses_vw}` (optionnel).

**Prompt :**
```
Tu es un expert pricing SaaS (méthodes : value-based, Van Westendorp PSM, price
laddering). Recommande une grille tarifaire.

ENTRÉE
Produit : {produit}
Valeur créée pour le client (quantifiée si possible) : {valeur_creee}
Concurrents + prix connus : {concurrents}
Marché / devise : {pays} / {devise}
Réponses Van Westendorp (si dispo) : {reponses_vw}

PRODUIS
1. ANCRAGE DE VALEUR : traduis {valeur_creee} en équivalent monétaire mensuel pour
   le client (fourchette basse/haute + hypothèses).
2. BENCHMARK : tableau concurrents (offre | prix | modèle | ce qu'ils facturent).
3. ANALYSE VW (si données) : point de prix optimal + fourchette acceptable ; sinon,
   fournis le questionnaire VW (4 questions) prêt à envoyer.
4. GRILLE RECOMMANDÉE : 3 paliers (Good-Better-Best), le milieu = cible, en {devise}
   + option paiement mobile money mensuel. Pour chaque palier : nom, prix, limites,
   pour qui, "aha" inclus.
5. LEVIERS : axe de métrique de valeur (par siège / par site / par volume / hybride)
   + justification.
6. OFFRE DE LANCEMENT : remise early-adopter limitée (nombre + durée).
7. RISQUES LOCAUX : trésorerie, taux de change, échecs de paiement récurrents, et
   parades.

Donne des chiffres, pas des fourchettes vagues. Explique le raisonnement en 2 lignes
par décision.
```

**Pièges :** pas de concurrents fournis → benchmark inventé. Oublier de préciser la devise → prix en USD inadaptés.

---

## Skill 7 — `/create-viral-hook`

**But :** 20 accroches + 2 threads complets pour X/LinkedIn autour d'un contenu ou d'un launch.

**Variables :** `{sujet}`, `{preuve}` (chiffre/résultat), `{audience}`, `{langue}`, `{lien}`.

**Prompt :**
```
Tu es un ghostwriter growth (style Nicolas Cole / Justin Welsh) spécialisé founders
et open source. Génère des accroches et des threads qui déclenchent le partage
(cadre STEPPS : Social currency, Triggers, Emotion, Public, Practical value, Story).

ENTRÉE
Sujet : {sujet}
Preuve / résultat chiffré : {preuve}
Audience : {audience}
Langue : {langue}
Lien à promouvoir : {lien}

PRODUIS
1. 20 HOOKS (1ère ligne d'un post), classés en 5 familles :
   - Contrarian ("Tout le monde dit X. Faux.")
   - Résultat/Chiffre ("J'ai fait X en Y jours. Voici comment.")
   - Liste/Ressource ("50 outils que j'aurais aimé connaître à mon lancement.")
   - Histoire perso ("Je code depuis Cotonou. Voici ce que personne ne dit.")
   - Question/tension ("Pourquoi 90 % des founders africains ratent leur launch ?")
2. Pour les 3 meilleurs hooks : le POST COMPLET (X : <280 c. par tweet, 6-9 tweets ;
   LinkedIn : 120-200 mots, aéré).
3. 2 THREADS X COMPLETS (8-12 tweets) : structure hook -> contexte -> 5-7 points
   actionnables -> récap -> CTA vers {lien}.
4. 5 variantes de CTA (doux -> direct).
5. Règles : 1ère ligne < 10 mots, pas de hashtags dans le corps, 1 idée par tweet,
   "curiosity gap" mais jamais clickbait mensonger.

Adapte les exemples à {audience}. Évite le franglais inutile.
```

**Pièges :** preuve absente → hooks creux (« game changer »). Trop de hooks clickbait → perte de crédibilité, effet inverse.

---

## Skill 8 — `/research-competitors`

**But :** tableau comparatif de 10 concurrents + carte de positionnement + gaps exploitables.

**Variables :** `{produit}`, `{marche}`, `{axes}`, `{concurrents_connus}`.

**Prompt :**
```
Tu es analyste concurrentiel. Produis une analyse structurée et honnête.

ENTRÉE
Produit / catégorie : {produit}
Marché géographique : {marche}
Axes de comparaison prioritaires : {axes}  (ex: prix, paiement local, mobile, langue, onboarding)
Concurrents déjà identifiés : {concurrents_connus}

PRODUIS
1. LISTE de 10 concurrents (directs + indirects + "do nothing" / solution manuelle).
   Pour chacun : nom, pays d'origine, cible, modèle de prix, financement/traction connue, lien.
2. TABLEAU COMPARATIF : lignes = concurrents (+ "MOI"), colonnes = {axes} + note /5.
3. CARTE DE POSITIONNEMENT : choisis 2 axes discriminants, place chaque acteur
   (description textuelle du quadrant, pas d'image).
4. FORCES/FAIBLESSES : 3 + 3 par concurrent top-5.
5. GAPS : 5 espaces non couverts sur {marche} (surtout : paiement local, langue,
   support WhatsApp, pricing trésorerie, onboarding offline).
6. POSITIONNEMENT RECOMMANDÉ pour MOI : 1 phrase + 3 preuves à construire.
7. VEILLE : 5 requêtes/sources à suivre (Crunchbase, TechCabal, App stores, LinkedIn).

Distingue clairement FAIT (sourcé) et HYPOTHÈSE. Ne surestime pas mes avantages.
```

**Pièges :** ne comparer que des concurrents étrangers → on rate les acteurs locaux. Accepter les claims marketing comme des faits.

---

## Skill 9 — `/generate-pitch-deck`

**But :** un deck de 12 slides, contenu rédigé, adapté grant ou pré-seed.

**Variables :** `{produit}`, `{traction}`, `{marche}`, `{equipe}`, `{ask}`, `{type}` (grant | pre-seed).

**Prompt :**
```
Tu es un partner qui a vu 5000 decks. Rédige un deck de 12 slides, prêt à mettre en
forme, adapté à {type}.

ENTRÉE
Produit : {produit}
Traction (chiffres réels) : {traction}
Marché : {marche}
Équipe : {equipe}
Demande : {ask}  (montant + usage)
Type : {type}

PRODUIS pour CHAQUE slide :
- Titre de slide
- 3-5 puces de contenu (texte final, pas des consignes)
- 1 note orateur (ce que tu dis à l'oral, 2-3 phrases)
- 1 "asset" à préparer (graphique, capture, chiffre en gros)

SLIDES
1. Accroche / vision (1 phrase mémorable)
2. Problème (concret, {marche}, avec une anecdote)
3. Solution (démo en 1 image mentale)
4. Pourquoi maintenant (les 3 vagues : IA, paiement, capital)
5. Produit (le "one-thing" + capture)
6. Marché (bottom-up : {marche}, TAM/SAM/SOM raisonné)
7. Business model + pricing
8. Traction ({traction} + courbe)
9. Go-to-market (canal prouvé)
10. Concurrence (carte de positionnement)
11. Équipe (pourquoi VOUS, unfair advantage local)
12. Ask + usage des fonds + jalons 6-12 mois

Si {type}=grant : renforce impact (emplois, inclusion, {marche}), allège la partie
"exit". Si {type}=pre-seed : renforce marché, moat, et trajectoire vers $10k puis
$100k MRR.
```

**Pièges :** inventer de la traction → rédhibitoire en due diligence. TAM top-down « 1 % d'un marché à 50 Md$ » → non crédible.

---

## Skill 10 — `/plan-content-30-days`

**But :** un calendrier éditorial de 30 jours, prêt à exécuter (Playbook 4).

**Variables :** `{produit}`, `{audience}`, `{angles}`, `{canaux}`, `{cadence}`, `{lien}`.

**Prompt :**
```
Tu es responsable contenu d'une startup en phase de traction. Construis un calendrier
éditorial de 30 jours, réaliste pour un founder solo.

ENTRÉE
Produit : {produit}
Audience : {audience}
Angles uniques (mon terrain, mes chiffres, mon pays) : {angles}
Canaux : {canaux}
Cadence soutenable : {cadence}  (ex: 1 pilier + 3 atomes / semaine)
Lien à promouvoir : {lien}

PRODUIS
1. 4 CONTENUS-PILIERS (1/semaine) : titre, format, promesse, plan en 5 points, CTA,
   mot-clé longue traîne, "pourquoi ça peut percer".
2. CALENDRIER JOUR PAR JOUR (J1..J30) : date | canal | format | sujet | CTA | temps estimé.
   Inclure les atomes (threads, posts, shorts, messages communauté) dérivés des piliers.
3. 10 IDÉES DE HOOKS réutilisables (renvoyer vers /create-viral-hook pour les décliner).
4. BOUCLE DE RECYCLAGE : quoi reposter/reformater à J31-J45.
5. MÉTRIQUES : ce qu'on regarde par semaine (portée, clics {lien}, signups attribués
   via Dub) + seuils "ça marche / on ajuste".
6. RÈGLE anti-burnout : quoi couper si une semaine déborde (garder le pilier, sacrifier
   2 atomes).

Adapte le ton et les références à {audience}. Pas de contenu générique "productivité".
```

**Pièges :** cadence trop ambitieuse → abandon à J10. Aucun angle propre → contenu indistinguable.

---

## 4.11 Intégrer les skills à Claude Code (repo)

Structure fournie dans `04-ai-skills/` :
```
04-ai-skills/
├── README.md                # comment installer / utiliser
├── validate-idea.md
├── generate-prd.md
├── build-mvp.md
├── create-gtm.md
├── write-cold-outreach.md
├── optimize-pricing.md
├── create-viral-hook.md
├── research-competitors.md
├── generate-pitch-deck.md
├── plan-content-30-days.md
└── .claude/skills/          # même contenu au format SKILL.md, prêt à copier dans un projet
```
Chaque fichier `.md` : front-matter (`name`, `description`, `variables`) + le prompt + exemple d'input/output. `install.sh` copie `.claude/skills/*` dans le projet cible de l'utilisateur.

---

# Part 5 — Africa-Specific

> **Transition & avertissement.** C'est la partie qui rend le repo *irremplaçable* : nulle part ailleurs cette couche n'est agrégée et tenue à jour par des contributeurs pays. **Les montants, deadlines et programmes changent** — chaque entrée du repo doit porter une `source:` datée et un `last_checked:`. Ce qui suit est l'état connu mi-2026 ; à vérifier au clic.

## 5.1 Grants & capital non-dilutif (par portée)

### Panafricain

| Programme | Montant | Dilution | Fenêtre | Cible | Lien |
|---|---|---|---|---|---|
| **Tony Elumelu Foundation Entrepreneurship Programme** | 5 000 $ seed + formation + mentorat | 0 % | ~1 janv → 1 mars (annuel) | 54 pays, tous secteurs, early | tonyelumelufoundation.org |
| **Google for Startups — Black Founders Fund Africa** | Cash equity-free + crédits Google Cloud + mentorat (fonds ~3 M$ / ~50 startups) | 0 % | Annuel (via CcHUB) | Startups tech Black-led, avec traction | startup.google.com/programs/black-founders-fund/africa |
| **Africa's Business Heroes (Jack Ma Foundation)** | Prize pool 1,5 M$ (jusqu'à 300k$ top) | 0 % | Candidatures ~mars-mai | 54 pays, impact + business | africabusinessheroes.org |
| **Google for Startups Accelerator: Africa** | Equity-free, crédits, mentorat, 10 sem. | 0 % | Cohorte ~avril-juin | Growth-stage, revenus, tech | startup.google.com/programs/accelerator/africa |
| **MEST Africa — AI Startup Program** | Formation 7 mois + incubation 4 mois + chance de pré-seed | investissement conditionnel | Annuel | Fondateurs software/IA | meltwater.org |
| **AfricaTech Awards (VivaTech)** | Prix + visibilité VivaTech Paris | 0 % | ~janv-mars | 3 catégories (fintech, climate, health…) | — |
| **Visa Everywhere Initiative Africa** | Prix cash + accès Visa | 0 % | Annuel | Fintech/commerce | — |
| **Ecobank Fintech Challenge** | Cash + intégration Ecobank (33 pays) | 0 % | Annuel | Fintech | ecobank.com |
| **Orange Corners (par pays)** | Grant (varie, ~non-dilutif) + incubation + espace | 0 % (grant) | Selon pays | Early-stage, plusieurs pays (SN, CI, CM, NG, GH, ET, RW…) | orangecorners.com |
| **AWS / Microsoft / Google credits** | Voir Part 2.4 | 0 % | Continu | Toutes | — |
| **The Baobab Network** | 50 000 $ pour 10 % (accélérateur, léger equity) | 10 % | Cohortes | Pan-Afr early | thebaobabnetwork.com |
| **Antler East Africa / Africa** | Pré-seed (~100-200k$) contre equity | equity | Cohortes | Idéation → pré-seed | antler.co |
| **Norrsken22 / Partech Africa / TLcom / Ventures Platform / Future Africa** | Seed → Series A (equity) | equity | Continu | Traction | — |
| **Sovereign Tech Fund / GitHub Fund / Open Collective (open source)** | Grants pour projets OSS d'infrastructure | 0 % | Continu | Projets open source (⚠️ pour le repo lui-même) | sovereign.tech |

### Afrique de l'Ouest francophone (dont Bénin — ton marché)

| Programme | Pays | Détail | Source à vérifier |
|---|---|---|---|
| **Sèmè City / Bénin Excellence** | BJ | Incubateur d'État, appels à projets, bourses, espace | semecity.bj |
| **Fonds National de la Microfinance / ADPME** | BJ | Appuis aux PME/startups (varie) | gouv.bj |
| **Loi Startup Bénin** (statut « startup ») | BJ | Label donnant accès à avantages fiscaux/soutiens — vérifier le décret d'application | asin.bj |
| **Orange Corners Sénégal / Côte d'Ivoire / Cameroun** | SN, CI, CM | Grant + incubation 6 mois | orangecorners.com |
| **Der/FJ, DER Sénégal** | SN | Financement entrepreneuriat jeunes | der.sn |
| **Fonds Jeunesse Numérique / AGENCE (CI)** | CI | Subventions numériques | — |
| **BPI / AFD Digital Africa — Bridge Fund** | FR-Afr | Ticket 50-500k€ (dette/quasi-equity) startups africaines | digital-africa.co |
| **Investisseurs & Partenaires (I&P) — Acceleration** | Afr francophone | Accompagnement + ticket | ietp.com |
| **Fondation Botnar / Jokkolabs / Impact Hub (Dakar, Bamako, Abidjan)** | multi | Incubation, petites bourses | — |
| **Total Startupper of the Year Challenge** | multi (dont BJ) | Prix cash + coaching + visibilité, par pays | startupper.totalenergies.com |
| **Seedstars (chapters)** | multi | Compétition + accès investisseurs | seedstars.com |

### Afrique de l'Est / Australe / Nord (repères)

- **Est (KE, UG, TZ, RW) :** iHub / CcHUB Nairobi, MEST, Antler EA, Villgro Africa (health), GSMA Innovation Fund, Norrsken Kigali, Rwanda ICT Chamber.
- **Australe (ZA) :** SA SME Fund, Grindstone Accelerator, AlphaCode (fintech, Rand Merchant), Startupbootcamp AfriTech, Google BFF, 22 On Sloane.
- **Nord (EG, MA, TN, NG-adjacent) :** Flat6Labs (EG, TN, MA), Falak Startups (EG), MITEF Arab/Pan-Arab, Orange Fab, Plug and Play, 212Founders (MA, CDG).

> **Règle d'or financement Afrique :** épuiser le **non-dilutif** (grants, prix, crédits cloud) avant l'equity. Empiler : 1 grant cash (TEF/ABH) + 1 accélérateur equity-free (Google) + crédits cloud (AWS+GCP+Azure) + prix corporate (Ecobank/Visa/Total) peut financer 12-18 mois sans céder une part.

## 5.2 Accélérateurs & incubateurs (annuaire condensé)

| Nom | Base | Modèle | Ticket | Focus |
|---|---|---|---|---|
| CcHUB (Co-creation Hub) | NG / RW / KE | Incubation, BFF disbursement, design lab | varie | Tech, gov, santé, éduc |
| MEST Africa | GH (+ NG, CI, KE, ZA, SN) | Training 7-12 mois + pré-seed | ~50-100k$ | Software / IA |
| Launch Africa Ventures | pan-Afr (Maurice) | VC seed multi-pays | 300k$ moyen | B2B, fintech, SaaS |
| Google for Startups Accelerator Africa | pan-Afr | 10 sem. equity-free | 0 | Growth-stage tech |
| The Baobab Network | KE / pan-Afr | Accélérateur | 50k$ / 10 % | Early pan-Afr |
| Flat6Labs | EG, TN, MA, SN, KSA | Seed + programme | 100-500k$ | Early |
| Startupbootcamp AfriTech | ZA | 3 mois | ~15k€ / equity | AfriTech |
| Grindstone | ZA | Scale-up (post-revenue) | 0 (equity option) | Growth |
| Antler | KE, NG (Africa) | Company building | ~100-200k$ | Idéation → pré-seed |
| 212Founders | MA | CDG, equity-free | grant | Maroc |
| Norrsken Kigali / Norrsken22 | RW / pan-Afr | Hub + fonds 200M$ | Series A/B | Growth |
| Villgro Africa | KE | Health impact | 50-100k$ | HealthTech |
| Seedstars | pan-Afr chapters | Compétition + bootcamp | prix + invest | Emerging markets |
| Sèmè City | BJ | Incubateur d'État | bourses / espace | Bénin |
| AfricArena | pan-Afr | Ecosystem accelerator + summits | mise en relation | Scale-ups |

## 5.3 Paiements par pays (mobile money + cartes)

| Pays | Mobile money dominant | Providers/API recommandés | Devise |
|---|---|---|---|
| **Bénin** | MTN MoMo, Moov Money, Celtiis Cash | **KkiaPay**, FedaPay, CinetPay, PayDunya | XOF |
| Côte d'Ivoire | Orange, MTN, Moov, Wave | CinetPay, PayDunya, Wave API, Hub2 | XOF |
| Sénégal | Orange Money, Free Money, Wave | Wave, PayDunya, CinetPay, InTouch | XOF |
| Togo | T-Money, Flooz (Moov) | CinetPay, PayGate, Semoa | XOF |
| Burkina Faso | Orange, Moov | CinetPay, Ligdicash | XOF |
| Mali | Orange Money, Moov | CinetPay, SamaMoney | XOF |
| Cameroun | MTN MoMo, Orange Money | CinetPay, Notch Pay, Flutterwave, Adumo | XAF |
| **Nigeria** | (bank transfer > MoMo) OPay, PalmPay, Moniepoint | **Paystack**, Flutterwave, Monnify, Kora, Squad | NGN |
| Ghana | MTN MoMo, Telecel, AirtelTigo | Paystack, Flutterwave, Hubtel, ExpressPay | GHS |
| Kenya | **M-Pesa** (dominant), Airtel | M-Pesa Daraja API, Flutterwave, Paystack, Pesapal, IntaSend | KES |
| Uganda | MTN MoMo, Airtel Money | Flutterwave, Pesapal, Beyonic/MFS, DusuPay | UGX |
| Tanzania | M-Pesa, Tigo Pesa, Airtel | Flutterwave, Pesapal, Selcom, ClickPesa | TZS |
| Rwanda | MTN MoMo, Airtel | Flutterwave, Paypack, Kpay, IremboPay | RWF |
| South Africa | (cartes + instant EFT > MoMo) | Yoco, Peach, Ozow, Stitch, PayFast, Paystack | ZAR |
| Egypt | Vodafone Cash, Fawry | Paymob, Fawry, Kashier, Flutterwave | EGP |
| Morocco | (cartes, cash) inwi money, Orange | CMI, YouCan Pay, PayZone, Flutterwave | MAD |
| Ethiopia | Telebirr | Chapa, ArifPay, Santimpay | ETB |
| Zambia | MTN, Airtel, Zamtel | Flutterwave, Broadpay, Lenco, Pesapal | ZMW |
| DR Congo | Orange, Airtel, M-Pesa (Vodacom) | CinetPay, FlexPay, MaxiCash | CDF |
| Zimbabwe | EcoCash | Paynow, Pesepay | USD/ZWG |

**Implémentation :** garde 1 provider « large » (Flutterwave) + 1 provider « local optimal » par marché prioritaire. Toujours gérer : idempotence des webhooks, réconciliation quotidienne, retries sur échec MoMo, statuts « pending » longs (MoMo peut confirmer en minutes).

## 5.4 Canaux de distribution par géographie

| Canal | Où il domine | Usage founder |
|---|---|---|
| **WhatsApp** | Partout (Afrique de l'Ouest ++), B2C & B2SMB | Vente, support, onboarding, broadcast (Cloud API) |
| **Facebook / Groups** | Afrique de l'Ouest & Centrale, 30+ | Communautés secteur, marketplace, pubs pas chères |
| **TikTok** | Jeunes, urbain, KE/NG/CI/SN/ZA | Démos produit « avant/après », créateurs locaux |
| **Instagram** | Urbain, lifestyle, restaurants/mode | Vitrine produit, DM sales |
| **Telegram** | Devs, crypto, communautés tech | Groupes founders/devs, canaux d'annonces |
| **LinkedIn** | B2B, corporate, Nigeria/SA/Kenya | Outbound entreprises, recrutement, thought leadership |
| **X (Twitter)** | Tech Twitter NG/KE (« Tech Twitter »), diaspora | Launch, threads, networking VC/founders |
| **Radio / affichage / terrain** | Zones péri-urbaines, B2SMB | Porte-à-porte, partenariats distributeurs, marchés |
| **USSD / SMS** | Non-smartphones, zones rurales | Onboarding sans data (Africa's Talking) |
| **Podcasts / YouTube tech Afrique** | Diaspora + urbain | Interviews founder, backlinks |

## 5.5 Études de cas (à documenter dans le repo, `05-africa/case-studies.md`)

| Startup | Pays | Leçon exploitable |
|---|---|---|
| **Paystack** | NG → acquis par Stripe (~200 M$, 2020) | DX irréprochable + focus 1 pays d'abord + docs = moat. |
| **Flutterwave** | NG → licorne (~3 Md$) | Infra « rails » panafricaine ; partenariats banques/télécoms ; expansion pays par pays. |
| **Jumia** | NG/pan-Afr → NYSE | Logistique + paiement à la livraison = adaptation au terrain ; brûle du cash → attention à l'unit economics. |
| **M-Pesa (Safaricom)** | KE | Distribution via réseau d'agents + cas d'usage P2P simple → effet réseau massif. |
| **Wave** | SN/CI → licorne | Casser les prix (frais quasi nuls) sur un marché à marges élevées → adoption virale. |
| **Andela** | NG/pan-Afr | Talent comme produit ; pivots successifs (bootcamp → marketplace). |
| **mPharma / Field Intelligence** | GH/NG | B2B santé : intégrer l'existant (pharmacies) plutôt que désintermédier. |
| **Kuda / FairMoney / Moniepoint** | NG | Néobanque/agent banking : conformité + distribution agents = barrière. |
| **Chipper Cash** | pan-Afr | Remittance + effet réseau diaspora ; sensibilité réglementaire forte. |
| **RESTAFY** (ton cas) | BJ | *À écrire au fil de l'eau : c'est ta preuve sociale et ton contenu.* |

## 5.6 Régulations par pays (checklist, pas conseil juridique)

Pour chaque marché, le repo tient une fiche `05-africa/regulations/<iso>.md` avec :
- **Création d'entreprise :** structure (SARL/Ltd), coût, délai, guichet unique (ex. BJ : APIeX ; NG : CAC ; KE : eCitizen/BRS ; SN : APIX).
- **Statut « startup » :** existe-t-il une Startup Act ? (TN pionnière ; SN, BJ, CI, NG, KE, GH, RW, ET ont adopté ou préparé un cadre). Avantages : fiscalité, accès financement, visas talents.
- **Protection des données :** loi applicable + autorité (NG : NDPA/NDPC ; KE : DPA + ODPC ; ZA : POPIA ; Afrique francophone : lois nationales + APDP au Bénin ; convention de Malabo). Obligations : enregistrement du responsable de traitement, consentement, DPO au-delà d'un seuil.
- **Fintech / paiements :** faut-il une licence (PSP, agrégateur) ou peut-on opérer sous celle d'un partenaire (Paystack/Flutterwave) ? (souvent : partenaire au début, licence à l'échelle). Banque centrale : BCEAO (UEMOA), CBN (NG), CBK (KE), SARB (ZA).
- **Fiscalité :** TVA (taux, seuil d'assujettissement), retenue à la source, facturation électronique (obligatoire NG e-invoicing, normalisée FNE en CI, etc.).
- **Import de fonds / rapatriement :** contrôle des changes (strict en UEMOA/CEMAC et NG), impact sur le versement des grants et des levées.
- **Emploi :** contrats, charges sociales, freelances/portage (Deel, Remote pour l'international).

## 5.7 Communautés tech (à enrichir par pays dans le repo)

| Communauté | Portée | Plateforme |
|---|---|---|
| ForLoop Africa | NG + chapitres (GH, KE, TZ, UG, ZW, ZM) | Slack / events |
| Google Developer Groups (GDG) | Continent, par ville (DevFest) | Meetup / Discord |
| Developer Circles / Meta | multi-villes | Facebook / Slack |
| Devcenter Square | NG | Slack |
| She Code Africa / Women Techmakers | Continent | Slack / WhatsApp |
| Zindi | Data science Afrique | Web + Slack |
| AfricaHackon / DjangoGirls / PyData chapters | multi | varie |
| Francophone : GDG Cotonou, Benin Blockchain, ODC Dakar, Baobab (SN), Jokkolabs, Abidjan Tech, WeTechCare, Digital Grand Baie | Afrique de l'Ouest FR | WhatsApp / Slack / Meetup |
| Diaspora : AfroTech (US), Founders of Africa, AfricArena network, Silicon Valley African founders | Global | Slack / Discord / LinkedIn |
| Indie/Buildspace/IndieHackers Africa threads | Global | Web |

## 5.8 Événements tech (repères annuels)

| Événement | Lieu | Période | Pourquoi y être |
|---|---|---|---|
| **Africa Tech Summit** | Nairobi / Londres | Février | Investisseurs + policy |
| **GITEX Africa** | Marrakech | Avril-Mai | Le plus gros salon tech du continent |
| **Moonshot by TechCabal** | Lagos | Octobre | Founders + media + VC (Afrique de l'Ouest) |
| **AfricArena Grand Summit** | Cape Town | Novembre | Deal flow scale-ups |
| **VivaTech (AfricaTech Awards)** | Paris | Juin | Diaspora + corporates FR |
| **Africa's Business Heroes Summit** | varie | Q4 | Prix + visibilité |
| **DevFest (GDG)** | ~30 villes | Sept-Déc | Communauté dev locale |
| **Sèmè City events / Bénin Tech** | Cotonou | varie | Ton écosystème local |
| **Startup Grind chapters, Seedstars regionals** | multi-villes | toute l'année | Networking local régulier |

---

# Part 6 — Virality Strategy (J-7 → J+90)

> **Transition.** Les parties 1-5 construisent un repo qui *mérite* 10k stars. La Part 6 est l'exécution qui les obtient : décomposition de repos viraux, plan jour par jour, contenu, communauté, partenariats, métriques, et la liste des choses qui *tuent* la viralité.

## 6.1 Analyse de 20 repos viraux (patterns)

| Repo | Type | Ce qui a marché |
|---|---|---|
| freeCodeCamp | Curriculum | Mission claire + gratuité radicale + communauté forum. |
| public-apis | Liste | README = index scannable, zéro friction, PR triviales. |
| build-your-own-x | Liste | Le titre EST la promesse ; curation, pas de code. |
| awesome / awesome-* | Métaliste | Nom devenu un standard ; badge « Awesome ». |
| the-art-of-command-line | Guide | Un seul fichier, dense, traduit en 20 langues. |
| coding-interview-university | Curriculum | Histoire perso (« je me suis préparé, voici tout »). |
| system-design-primer | Guide | Résout une douleur d'entretien universelle + diagrammes. |
| developer-roadmap | Visuel | Roadmaps illustrées shareables ; site + repo. |
| free-programming-books | Liste | Utilité évidente, contribution facile, multilingue. |
| 30-seconds-of-code | Snippets | Format atomique, site élégant. |
| project-based-learning | Liste | « Apprendre en construisant » = angle. |
| awesome-chatgpt-prompts | Liste | Timing (vague IA) + format copiable + site. |
| Marketing-for-Engineers / marketing-for-founders | Guide | Niche « devs/founders qui détestent le marketing ». |
| open-source-alternatives / awesome-selfhosted | Liste | « Alternative gratuite à X » = intention de recherche forte. |
| llama / whisper / stable-diffusion | Software | Lâcher un modèle utile = pic immédiat. |
| ollama | Software | Rendre trivial ce qui était dur (LLM en local en 1 commande). |
| supabase | Software | « Firebase open source » = positionnement instantané. |
| twenty / cal.com / dub | Software | « Alternative open source à [outil cher] » + design soigné. |
| n8n | Software | Fair-code + templates communautaires = boucle de contribution. |
| shadcn/ui | Composants | Copy-paste (pas de dépendance) + esthétique = adoption virale. |

**Patterns communs (à copier) :**
1. **Positionnement en 5 mots** (« Firebase open source », « alternative à X »). → Ici : *« The open-source OS for African founders who ship with AI. »*
2. **Le titre/README fait le travail** : promesse + preuve visuelle + « comment démarrer » en < 7 s.
3. **Contribution triviale** : ajouter une ligne / un YAML / un pays. Barrière quasi nulle.
4. **Angle identitaire ou anti-douleur** : « pour les founders africains », « pour les devs qui détestent le marketing ».
5. **Launch concentré** : HN d'abord, mardi-jeudi 8-10 h ET, narratif personnel.
6. **Site/landing léger** en plus du repo (developer-roadmap, 30-seconds, cal.com).
7. **Multilingue** = multiplicateur (FR/EN d'emblée ici — avantage naturel).
8. **Rythme post-launch** : sorties hebdo, changelog visible, contributors mis en avant.
9. **Boucle de contribution** : chaque contributeur ramène son audience.
10. **Preuve sociale continue** : stars-over-time affiché, témoignages, « used by ».

## 6.2 Structure de README qui convertit (gabarit)

```
[Bannière image : logo + tagline + 1 visuel]
[Badges : stars · forks · contributors · license · Discord · "Made in Benin 🇧🇯"]

# African AI Founder OS
> The open-source operating system for African founders who ship with AI —
> from idea to $10k MRR.

[GIF 15 s : /validate-idea qui tourne dans Claude Code]

## Why this exists  (3 lignes : la douleur — quel outil/grant/paiement ICI ?)

## Start here
- 🧭 I have an idea → 00-start-here + Playbook 1 + /validate-idea
- 🛠️ I have an MVP → Playbook 3 + Part 2 (stack) + /create-gtm
- 💰 I need funding → Part 5 (grants/accelerators by country)

## What's inside
| 10 playbooks | 10 Claude Code skills | 50 tools vetted | Africa layer (payments, grants, regs) |

## Use it
- `Use this template` (bouton) OU `git clone ...`
- `./install.sh` copie les skills dans ton projet

## Contribute in 1 PR
Add your country's payment provider / a fresh grant / translate a playbook.
→ CONTRIBUTING.md · good first issues

## Star history  [graphe star-history.com]

## Backed by the community  [All-Contributors] · [Sponsors]
```

**Règles :** 1 seul H1 ; la promesse au-dessus de la ligne de flottaison ; le GIF avant tout texte long ; 3 parcours cliquables ; bouton « Use this template » activé (Settings → Template repository).

## 6.3 Plan de lancement jour par jour

### Phase 0 — Build (S-4 → S-1)

| Quand | Action | Done quand |
|---|---|---|
| S-4 | Geler le scope v1 : README + 3 playbooks (1,2,3) + 10 skills + Part 2 + Part 5 (paiements 10 pays, grants panafr). | Checklist Annexe C cochée |
| S-4 | Créer identité : nom de repo, tagline, logo simple, og-image, couleur. | Assets dans `/assets` |
| S-3 | Écrire `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, 20 `good-first-issue` (brouillons), templates issue/PR. | Fichiers commités |
| S-3 | GitHub Actions : welcome bot, link-check, stale, All-Contributors. | CI verte |
| S-2 | Enregistrer le GIF de démo (15 s) + 5 captures. Landing 1 page (Framer/Cloudflare Pages) → redirige vers repo, capte les emails. | GIF dans README, landing en ligne |
| S-2 | Rédiger : « Show HN », thread X (10 tweets), post LinkedIn, texte Product Hunt, 5 messages communautés, newsletter #1. | Doc `launch/copy.md` |
| S-1 | Constituer la **liste de 100 soutiens** (nom, canal, relation, créneau J0). DM perso à chacun : « je lance mardi, voici ce que c'est, ça t'aiderait ? un ⭐ + un retour honnête me suffiraient ». | 100 « oui » ou « je regarde » |
| S-1 | Pré-remplir : Product Hunt (draft programmé), comptes prêts, 3 communautés Afrique prévenues d'un « truc mardi ». | Draft PH prêt |
| S-1 | Répétition : quelqu'un clone le repo à froid en 15 min et note les frictions. | Frictions corrigées |

### Phase 1 — Soft launch (S0, lundi)

| Heure (UTC) | Action |
|---|---|
| Lundi 09:00 | Rendre le repo public **sans le crier**. Le partager dans **5 communautés Afrique** (WhatsApp founders, ForLoop, GDG, 1 Slack, 1 Discord) avec un message « feedback wanted », pas « star me ». |
| Lundi journée | Répondre à chaque retour. Ouvrir des issues à partir des retours. Corriger le README si un point revient 2×. |
| Lundi soir | Debrief : qu'est-ce qui accroche / bloque ? Ajuster la copy du hard launch. Viser 100-300 ⭐ « organiques » de la communauté. |

### Phase 2 — Hard launch (S1, **mardi**)

| Heure (UTC) | Action | Détail |
|---|---|---|
| 08:00 | **Product Hunt** en ligne (00:01 PT). | Titre + tagline + 1er commentaire = founder story. Notifier 30 soutiens pour la 1ʳᵉ heure (commenter, pas juste upvote). |
| 13:00 | **« Show HN »** posté. | Titre exact de Playbook 6. Rester sur HN 4-6 h, répondre à *tout* en < 15 min, ton humble, jamais défensif. |
| 13:15 | **Thread X** + **post LinkedIn** + **newsletter**. | Thread = founder story + 5 choses concrètes dans le repo + CTA. Épingler. |
| 13:30 | Poster dans **10 communautés** (les 5 de lundi + 5 nouvelles) + subreddits pertinents (r/Entrepreneur, r/SideProject, r/webdev si angle, r/Africa). | 1 message par communauté, adapté, jamais copié-collé identique. |
| 14:00-02:00 | **War room** : répondre partout en < 15 min. Remercier chaque contributeur nominativement. Tweeter les milestones (« 500 ⭐ en 3 h, merci 🇧🇯 »). | Bloquer 12 h dans l'agenda. |
| 22:00 | Mettre à jour le README avec les 1ers témoignages / « trending #X ». | — |

### Phase 3 — Momentum (S2 → S8)

| Cadence | Action |
|---|---|
| Chaque semaine | **1 nouveau playbook OU 1 nouveau pays** (paiements+grants+régul) mergé et annoncé (thread + newsletter + communauté). |
| 2×/semaine | 1 thread X + 1 post LinkedIn (skill `/create-viral-hook`) : teardown, chiffre, ressource, histoire. |
| Chaque semaine | 15-20 `good-first-issue` ouvertes en permanence. Review < 24 h. Contributor spotlight. |
| Semaine 2 | Soumettre le repo aux **awesome-lists** pertinentes (awesome-startup, awesome-entrepreneurship, awesome-selfhosted-adjacent, awesome-africa, awesome-claude, awesome-ai-tools). 1 PR chacune. |
| Semaine 3 | Pitch à **TechCabal / Disrupt Africa / Benjamindada / Techpoint Africa / Rest of World** (email + angle « founder béninois open-source l'OS des founders africains »). |
| Semaine 4 | 1 **collab** : co-écrire un guide avec un autre repo/newsletter (échange d'audience). |
| Semaines 5-8 | Lancer le **programme ambassadeurs pays** (5-10 pays), chacun anime les contributions de son marché. |
| Semaines 5-8 | Publier la **1ʳᵉ étude de cas** (RESTAFY ou un early user) : « idée → X users avec l'OS ». |

### Phase 4 — Scale (S9 → S20)

- **1 partenariat institutionnel** : un accélérateur (MEST, CcHUB, Sèmè City, Orange Corners) adopte l'OS comme ressource de cohorte (co-branding, atelier).
- **Traductions** : figer FR+EN, ouvrir PT (Angola/Mozambique) et éventuellement AR (Afrique du Nord) via contributeurs.
- **Repackaging** : sortir un « Founder OS Weekly » (newsletter) — capital d'audience détaché de GitHub.
- **PH/HN round 2** possible sur un sous-produit (les skills packagés, ou un « payments-adapter » standalone).
- **Conférences** : proposer un talk (GITEX Africa, Moonshot, DevFest) « Building in public from Benin ».

### Phase 5 — Consolidation (S21 → S26)

- Activer **GitHub Sponsors** + **Open Collective** ; publier une page « sustainability ».
- Publier la **roadmap v2** (RFC ouverte) → réengage la communauté.
- **Audit qualité** : link-check global, dédoublonnage, `last_checked` sur toutes les entrées Afrique.
- Bilan public des 6 mois (thread + article) = nouveau pic + crédibilité.

## 6.4 Stratégie de contenu (les formats qui rapportent des stars)

| Format | Fréquence | Exemple de titre | Canal | Effet |
|---|---|---|---|---|
| **Thread « ressource »** | 1/sem | « 20 grants non-dilutifs pour founders africains (deadlines 2026) » | X + LinkedIn | Saves + clics repo |
| **Teardown** | 1/2 sem | « J'ai refait ma stack de paiement pour le Bénin : voici l'archi » | X + article | Crédibilité tech |
| **Build-in-public update** | 1/sem | « Semaine 3 : +1 200 ⭐, 14 pays ajoutés, ce que j'apprends » | X + newsletter | Loyauté + FOMO |
| **Étude de cas** | 1/mois | « De l'idée à 40 restos payants avec l'OS » | Article + thread | Preuve → conversion |
| **Comparo/annuaire** | 1/mois | « Paystack vs Flutterwave vs CinetPay : le vrai tableau » | Article SEO | Trafic organique long terme |
| **Vidéo démo** | 2-3 total | « /build-mvp : un MVP resto en 7 jours (timelapse) » | YouTube/X | Partage + backlinks |
| **Interview/collab** | 1/mois | Podcast tech Afrique | Audio | Nouvelle audience |

**Règle STEPPS par post :** cocher au moins 3 sur 6 (Social currency, Trigger, Emotion, Public, Practical value, Story) avant de publier.

## 6.5 Stratégie de communauté

- **Amorçage (Cold Start) :** 50 invitations 1-à-1 avant tout lien public. 5 membres fondateurs qui postent tous les jours la 1ʳᵉ semaine.
- **Rituels :** « Win du vendredi », office hours mensuelles, « Deal/Grant of the week ».
- **Rôles :** `@country-maintainer` (par pays), `@skill-author`, `@translator`, `@moderator`. Chaque rôle = badge + mention README + accès à un salon privé.
- **Boucle repo↔communauté :** toute ressource du repo est annoncée en communauté ; toute bonne discussion devient une issue → PR.
- **Modération :** règle anti-scam stricte (les groupes « founders Afrique » attirent les arnaques crypto/« investisseurs »). Vérif à l'entrée, pas de DM promo.

## 6.6 Stratégie de partenariats

| Type | Cibles | Offre | Contrepartie |
|---|---|---|---|
| **Médias** | TechCabal, Disrupt Africa, Benjamindada, Techpoint, Rest of World, Sifted (Africa), IndieHackers | Accès exclusif à l'étude de cas + data agrégée (grants, paiements) | Article + backlink dofollow |
| **Accélérateurs** | MEST, CcHUB, Sèmè City, Orange Corners, Baobab | OS comme ressource officielle de cohorte + atelier animé | Co-branding, mention, accès aux founders |
| **Outils** | Supabase, Vercel, PostHog, Paystack, Flutterwave, Coolify, Clay | Section « stack » + tuto intégré | Amplification (retweet, newsletter), éventuel sponsor (labellisé) |
| **Newsletters** | Startup Africa Weekly, The Flip, Big Deal, TLDR, Console.dev | Contenu invité / échange de mentions | Mentions croisées |
| **Créateurs** | YouTubers tech Afrique, « build in public » FR/EN, devrel Afrique | Kit de contenu + accès anticipé aux nouveautés | Vidéo/thread avec lien |
| **Universités / clubs GDG** | Campus tech (Bénin, Sénégal, Nigeria, Kenya) | Ateliers « idée→MVP » avec l'OS | Contributions étudiantes, ambassadeurs |

**Process :** 1 doc de partenariat type, 5 contacts/semaine, suivi dans un tableau, relance à J+4.

## 6.7 Anti-patterns (ce qui tue la viralité)

| Anti-pattern | Pourquoi c'est fatal | À faire à la place |
|---|---|---|
| Demander explicitement « star this repo » / « upvote » | Bannissable sur PH/HN ; sonne désespéré | Montrer la valeur, laisser le CTA implicite (« si ça t'aide… ») |
| Launch un lundi ou un vendredi | Moins de trafic, se fait enterrer | Mardi-jeudi, 8-13 h UTC |
| Poster puis disparaître | Les commentaires HN/PH sans réponse = mort du post | Bloquer 12 h de war room |
| README mur de texte, pas de visuel | Rebond en 7 s | GIF + 3 parcours + promesse en tête |
| Scope trop large (« awesome everything startup ») | Indistinct, pas de raison de star | 1 thème : founder africain + IA + idée→$10k |
| Acheter des stars / vagues de bots | Shadowban GitHub, réputation détruite | 100 vrais soutiens engagés |
| PR ignorées > 48 h | Le contributeur ne revient jamais et le dit | Review < 24 h, merge rapide |
| Zéro sortie après le launch | La courbe retombe, plus jamais dans le trending | 1 livrable/semaine minimum pendant 8 semaines |
| Contenu générique sans angle pays | Rien à partager, aucune identité | Toujours un chiffre / un terrain / un pays |
| Tout centraliser sur toi | Burnout à S6, la communauté s'éteint | Déléguer via rôles dès S3 |
| Négliger la version anglaise | -70 % d'audience potentielle | FR+EN dès le launch |
| Liens morts / infos périmées dans la partie Afrique | Détruit la confiance (c'est ton USP) | link-check en CI + `last_checked` |

---

# Part 7 — Metrics & Analytics

> **Transition.** On a lancé (Part 6). Maintenant on pilote. Trois tableaux de bord : GitHub, communauté, contenu. Plus des OKR trimestriels et des benchmarks.

## 7.1 Dashboard GitHub

| Métrique | Où | Cible S+4 / S+13 / S+26 | Outil |
|---|---|---|---|
| Stars (total + vélocité/jour) | Insights + star-history.com | 800 / 4 000 / 10 000 | star-history, ossinsight.io |
| Forks | Insights → Forks | 40 / 200 / 500 | — |
| Unique visitors / 14 j | Insights → Traffic | 1 500 / 8 000 / 20 000 | GitHub (14 j glissants — **exporter chaque semaine**, non historisé) |
| Referring sites (top 10) | Insights → Traffic → Referrers | HN, PH, X, TechCabal… | GitHub + Dub (liens de campagne) |
| Clones | Insights → Traffic | — | GitHub |
| Contributors (PR mergée) | Insights → Contributors | 15 / 50 / 100 | All-Contributors, ossinsight |
| Issues : temps de 1ʳᵉ réponse (médian) | manuel / ossinsight | < 24 h | ossinsight.io |
| PR : temps de merge (médian) | ossinsight | < 72 h | ossinsight.io |
| Open GFI en permanence | label `good first issue` | ≥ 15 | GitHub search |
| « Used by » / dependents | sidebar | croissant | GitHub |
| Trending (langue/topic) | github.com/trending | apparaître ≥ 1 j au launch | veille manuelle |

**Automatisation :** un GitHub Action hebdo qui exporte `traffic`, `stars`, `clones` via l'API dans un CSV commité (`/metrics/history.csv`) → tu gardes l'historique que GitHub jette après 14 j. Graphe simple avec un README badge ou un petit script.

## 7.2 Dashboard communauté

| Métrique | Cible | Outil |
|---|---|---|
| Membres Discord/WhatsApp | 500 / 1 000 / 2 000 | Discord Insights, compteur manuel WA |
| Membres actifs / mois (post ou réaction) | ≥ 25 % | Discord Insights, Orbit/Common Room (free tier) ou tableur |
| Messages / jour (hors fondateurs) | ≥ 10 | Discord Insights |
| Nouveaux accueillis < 12 h | 100 % | check manuel / bot |
| Ambassadeurs pays autonomes | 3 / 6 / 10 | suivi manuel |
| Newsletter : abonnés / open rate / CTR | 500 / 3 000 ; >40 % ; >5 % | Buttondown/ConvertKit |

## 7.3 Dashboard contenu

| Métrique | Cible | Outil |
|---|---|---|
| Contenus-piliers publiés / mois | ≥ 4 | calendrier |
| Impressions X + LinkedIn / semaine | 20 000 → 100 000 | analytics natifs, Taplio |
| Clics vers le repo / semaine (par lien Dub) | 300 → 2 000 | Dub.co |
| Signups newsletter attribués / semaine | 30 → 200 | Dub + Buttondown |
| Backlinks dofollow cumulés | 5 / 25 / 60 | Ahrefs Webmaster (gratuit), Search Console |
| Position SEO sur 3 requêtes cibles | top 20 → top 5 | Search Console |

**Requêtes SEO cibles (exemples) :** « payment providers Africa comparison », « grants for African startups 2026 », « african founder tools », « Claude Code skills for founders », « MVP in 7 days playbook ».

## 7.4 OKR trimestriels

**T1 (S0-S13) — « Percer »**
- O : établir `african-ai-founder-os` comme LA référence francophone+anglophone.
  - KR1 : 4 000 ⭐, 200 forks.
  - KR2 : 50 contributeurs, 15 pays documentés (paiements+grants).
  - KR3 : 1 000 membres communauté, 3 000 abonnés newsletter.
  - KR4 : 1 mention presse tier-1 + listé dans 5 awesome-lists.

**T2 (S14-S26) — « Consolider & durer »**
- O : transformer l'audience en mouvement soutenable.
  - KR1 : 10 000 ⭐, 500 forks, 100 contributeurs.
  - KR2 : 25 pays documentés, 10 ambassadeurs autonomes.
  - KR3 : 1 partenariat accélérateur signé + 1 étude de cas publiée.
  - KR4 : GitHub Sponsors actif (≥ 10 sponsors) + 1 atelier payant pilote réalisé.

## 7.5 Benchmarks (ordre de grandeur)

| Repo comparable | Temps pour 10k ⭐ | Note |
|---|---|---|
| Guides/listes de niche bien lancés (marketing-for-founders-like) | 2-6 mois | Launch HN fort + rythme hebdo |
| awesome-* dans une vague porteuse | 1-4 mois | Timing = tout |
| Guides sans distribution | 12-36 mois ou jamais | Le contenu ne suffit pas |

**Lecture :** 10k en 6 mois est *ambitieux mais atteint* par des repos type-liste/guide avec (a) un angle identitaire net, (b) un launch HN/PH réussi, (c) 8 semaines de rythme hebdo, (d) une boucle de contribution active. Sans le launch réussi, viser 12 mois.

---

# Part 8 — Repository Architecture

> **Transition.** Voici l'arborescence exacte à créer, fichier par fichier, avec objectif et squelette de contenu. Le repo scaffoldé fourni avec ce document suit cette structure.

## 8.1 Arborescence complète

```
african-ai-founder-os/
├── README.md                     # Hook + navigation + preuve. LE fichier qui convertit.
├── MASTER-DOC.md                 # Ce document (référence complète).
├── LICENSE                       # MIT (code/templates)
├── LICENSE-CONTENT                # CC-BY-4.0 (contenu éditorial)
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
├── install.sh                    # Copie .claude/skills/* dans un projet cible
├── .github/
│   ├── FUNDING.yml               # GitHub Sponsors / Open Collective / Ko-fi
│   ├── ISSUE_TEMPLATE/
│   │   ├── add-tool.yml
│   │   ├── add-country-resource.yml
│   │   ├── improve-playbook.yml
│   │   ├── report-outdated.yml
│   │   └── config.yml
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
│       ├── welcome.yml           # Message auto 1ʳᵉ issue/PR
│       ├── link-check.yml        # lychee : casse la CI si lien mort
│       ├── data-lint.yml         # valide les YAML data/ (schéma)
│       ├── metrics-snapshot.yml  # export hebdo stars/traffic -> metrics/history.csv
│       └── stale.yml
├── 00-start-here/
│   └── README.md                 # Quickstart 15 min, 3 parcours
├── 01-theories-frameworks/
│   └── README.md                 # Résumés actionnables (Part 1)
├── 02-tools-stack/
│   ├── README.md
│   ├── ai-tools.md
│   ├── saas-boilerplates.md
│   ├── payments-africa.md
│   ├── cloud-credits.md
│   ├── analytics.md
│   ├── devops-deployment.md
│   ├── gtm-sales.md
│   ├── whatsapp-comms.md
│   └── stacks-by-scenario.md
├── 03-playbooks/
│   ├── README.md
│   ├── 01-validate-idea.md
│   ├── 02-build-mvp-7-days.md
│   ├── 03-gtm-0-to-1000.md
│   ├── 04-content-marketing.md
│   ├── 05-cold-outreach.md
│   ├── 06-launch.md
│   ├── 07-funding.md
│   ├── 08-community-building.md
│   ├── 09-open-source-contribution.md
│   └── 10-pricing-monetization.md
├── 04-ai-skills/
│   ├── README.md
│   ├── validate-idea.md ... plan-content-30-days.md  (10 fichiers)
│   └── .claude/skills/<name>/SKILL.md               (10 dossiers)
├── 05-africa/
│   ├── README.md
│   ├── grants-by-country.md
│   ├── accelerators.md
│   ├── payments-by-country.md
│   ├── distribution-channels.md
│   ├── case-studies.md
│   ├── communities.md
│   ├── events.md
│   └── regulations/
│       ├── _template.md
│       ├── bj.md  ng.md  ke.md  gh.md  sn.md  ci.md  za.md ...
├── 06-launch-virality/
│   ├── README.md
│   ├── launch-plan.md            # J-7 -> J+90
│   ├── post-templates.md         # HN, PH, X, LinkedIn, Reddit, communautés
│   ├── outreach-targets.md       # 50 médias/influenceurs + statut
│   └── readme-gabarit.md
├── 07-metrics/
│   ├── README.md
│   └── history.csv               # rempli par la CI
├── 08-monetization/
│   └── README.md
├── templates/
│   ├── prd.md  one-pager.md  pitch-deck.md  pricing-page.md  landing-page.md
│   ├── cold-dm-whatsapp.md  cold-email.md  interview-guide.md
│   ├── launch-checklist.md  grant-application.md  content-calendar.md
│   └── payments-adapter.ts
├── data/                          # Sources de vérité structurées (pour la CI + futurs outils)
│   ├── tools.yml
│   ├── payments/  bj.yml ng.yml ...
│   ├── grants.yml
│   └── schema/  *.schema.json
└── assets/
    ├── logo.svg  banner.png  og-image.png  demo.gif
```

## 8.2 Fichiers clés — objectif + squelette

### `README.md`
- **Objectif :** convertir un visiteur en « star + clic » en 7 secondes, puis l'orienter.
- **Sections :** bannière → badges → titre + tagline → GIF → « Why this exists » (3 lignes) → « Start here » (3 parcours) → « What's inside » (tableau) → « Use it » → « Contribute in 1 PR » → star-history → contributors → sponsors → licence.
- **Exemple de contenu :** *« African AI Founder OS — the open-source operating system for African founders who ship with AI, from idea to $10k MRR. 10 executable playbooks, 10 Claude Code skills, a pre-vetted stack, and an Africa layer (mobile-money providers by country, grants, accelerators, regulations). Built in the open from Cotonou 🇧🇯. »*

### `00-start-here/README.md`
- **Objectif :** un parcours de 15 min qui donne une première victoire.
- **Structure :** « Choisis ton point de départ » (idée / MVP / financement) → pour chacun : 1 playbook + 1 skill + 1 section outils → « rejoins la communauté » → « contribue ».
- **Contenu :** *« Tu as une idée ? 1) Ouvre `03-playbooks/01-validate-idea.md`. 2) Copie `04-ai-skills/validate-idea.md` dans Claude Code. 3) Lance-le avec ton idée. En 15 min tu as un guide d'interview et un plan de waitlist. »*

### `CONTRIBUTING.md`
- **Objectif :** rendre la 1ʳᵉ contribution triviale et gratifiante.
- **Structure :** « 3 façons de contribuer en 1 PR » (ajouter un outil, ajouter une ressource pays, traduire) → process (fork → branche → PR → review < 24 h) → format des données (YAML + schéma, exemple) → règle de source (`source:` + `last_checked:`) → style (concision, pas de superlatifs, liens directs) → « deviens country maintainer » → Code of Conduct.
- **Contenu type — ajouter un provider :**
  ```
  1. Édite data/payments/<iso>.yml (copie _template.yml)
  2. Ajoute la ligne dans 05-africa/payments-by-country.md
  3. Mets source: <url> et last_checked: 2026-09
  4. npm run lint:data  (doit passer)
  5. Ouvre la PR avec le template "add-country-resource"
  ```

### `CODE_OF_CONDUCT.md`
- **Objectif :** cadre de communauté sûr et pro.
- **Contenu :** Contributor Covenant v2.1 + email de contact modération + spécificité : tolérance zéro pour le spam/scam d'« investisseurs » et la promo non sollicitée.

### `LICENSE` / `LICENSE-CONTENT`
- **Choix :** **MIT** pour `templates/`, `install.sh`, `data/` (réutilisation maximale) ; **CC-BY-4.0** pour le contenu éditorial (playbooks, parties) → autorise blogs/cours *avec attribution* = backlinks. Le préciser dans le README (« Code & templates: MIT. Written guides: CC-BY-4.0. »).

### `.github/workflows/link-check.yml`
- **Objectif :** garantir que la partie Afrique ne pourrit pas.
- **Contenu :** action `lycheeverse/lychee-action` sur `**/*.md`, planifiée (`schedule: cron` hebdo) + sur PR ; échoue si lien mort ; ouvre une issue automatique avec la liste.

### `.github/workflows/welcome.yml`
- **Objectif :** réponse < 1 min à toute 1ʳᵉ interaction.
- **Contenu :** `actions/first-interaction` → message chaleureux : « Merci 🙏 Un mainteneur passe sous 24 h. En attendant : voici comment on structure les données / rejoins le Discord. »

### `data/schema/*.schema.json` + `data-lint.yml`
- **Objectif :** contributions structurées et validables → merges rapides sans débat.
- **Contenu :** JSON Schema pour `tool`, `payment_provider`, `grant` (champs requis : `name`, `url`, `country`/`scope`, `source`, `last_checked`). CI : `ajv validate`.

### `templates/payments-adapter.ts`
- **Objectif :** découpler le code produit du provider.
- **Squelette :**
  ```ts
  export interface PaymentProvider {
    createCheckout(input: CheckoutInput): Promise<{ url: string; ref: string }>;
    verifyWebhook(req: Request): Promise<WebhookEvent>;
    createSubscription(input: SubInput): Promise<Subscription>;
    refund(ref: string, amount?: number): Promise<Refund>;
    getStatus(ref: string): Promise<PaymentStatus>;
  }
  // impl: PaystackProvider, CinetPayProvider, FlutterwaveProvider
  ```

### `06-launch-virality/outreach-targets.md`
- **Objectif :** transformer la Part 9 en CRM léger (statut par contact).
- **Colonnes :** `nom | type | pays | contact | angle | statut | dernier contact | résultat`.

## 8.3 Badges (shields.io)

```
![Stars](https://img.shields.io/github/stars/<user>/african-ai-founder-os?style=flat)
![Forks](https://img.shields.io/github/forks/<user>/african-ai-founder-os)
![Contributors](https://img.shields.io/github/all-contributors/<user>/african-ai-founder-os)
![Last commit](https://img.shields.io/github/last-commit/<user>/african-ai-founder-os)
![License: MIT](https://img.shields.io/badge/code-MIT-green)
![Content: CC BY 4.0](https://img.shields.io/badge/content-CC--BY--4.0-blue)
![Discord](https://img.shields.io/discord/<id>?label=community)
![Made in Benin](https://img.shields.io/badge/built%20in-Cotonou%20%F0%9F%87%A7%F0%9F%87%AF-black)
```

---

# Part 9 — Distribution & Marketing

> **Transition.** Le repo est prêt et instrumenté. Cette partie est le carnet d'adresses et les gabarits de messages pour le faire connaître, en boucle, pendant 90 jours.

## 9.1 50 endroits où partager

**Agrégateurs / dev (tier 1)**
1. Hacker News (Show HN) 2. Product Hunt 3. Reddit r/Entrepreneur 4. r/SideProject 5. r/webdev 6. r/opensource 7. r/Africa 8. r/startups 9. Lobsters (si angle tech) 10. Indie Hackers (Product + post) 11. Dev.to 12. Hashnode 13. Medium (Better Programming, The Startup) 14. GitHub Trending (organique) 15. Console.dev (newsletter submit) 16. Changelog / Changelog News 17. TLDR newsletter (submit) 18. Hacker Newsletter 19. BetaList 20. Peerlist

**Afrique / écosystème (tier 1 pour ce repo)**
21. TechCabal (pitch édito) 22. Techpoint Africa 23. Disrupt Africa 24. Benjamindada 25. Rest of World (pitch) 26. Launch Base Africa 27. Afrobytes 28. The Flip (podcast/newsletter) 29. Big Deal (newsletter data) 30. Startup Africa Weekly 31. ForLoop Africa (Slack/events) 32. GDG chapters (Cotonou, Lagos, Nairobi, Dakar) 33. She Code Africa 34. Zindi community 35. AfricArena network 36. Sèmè City / Bénin tech groups 37. Francophone : Réseau Jokkolabs, Orange Digital Center communautés, GroupeWhatsApp « Startups Bénin / CI / SN » 38. AfroTech (US diaspora) 39. Founders of Africa 40. Moonshot/TechCabal community

**Social / créateurs**
41. X (thread + réponses aux « build in public ») 42. LinkedIn (post + articles + groupes founders Afrique) 43. Threads 44. TikTok (démo) 45. YouTube (démo + Shorts) 46. Twitch/live coding (optionnel) 47. Bluesky (dev crowd) 48. Mastodon (fosstodon) 49. Telegram (canaux devs Afrique) 50. WhatsApp Status + Communautés WhatsApp officielles

## 9.2 Gabarits de posts

**X — thread de launch (structure) :**
```
1/ Je code RESTAFY depuis Cotonou. Chaque semaine, même mur : quel outil ? quel grant ?
   quel paiement marche ICI ? J'en ai fait un OS open source. 🧵
2/ african-ai-founder-os : 10 playbooks exécutables, 10 skills Claude Code, une stack
   triée, et une couche Afrique (mobile money par pays, grants, accélérateurs).
3/ Skill /validate-idea : tu donnes ton idée -> guide d'interview Mom Test + plan waitlist
   + verdict go/no-go. [GIF]
4/ Playbook "MVP en 7 jours" : plan de sprint + prompts Claude Code + adapter de paiement
   Paystack/CinetPay (parce que Stripe ne marche pas partout).
5/ Couche Afrique : 20 grants non-dilutifs avec deadlines, providers de paiement pour 20
   pays, checklists de régulation (data protection, Startup Acts).
6/ C'est FR + EN. MIT pour le code, CC-BY pour les guides.
7/ Tu peux ajouter ton pays en 1 PR. J'ai 20 good-first-issues prêtes.
8/ Repo : [lien] · Communauté : [lien] · Un ⭐ si ça peut aider un founder autour de toi 🇧🇯
```

**LinkedIn — post de launch (structure) :** hook perso (2 lignes) → le problème concret → ce qu'il y a dans le repo (4 puces) → pourquoi open source / Africa-first → CTA (repo + « dites-moi ce qui manque pour votre pays »).

**Reddit — r/SideProject (structure) :** titre « I built an open-source OS for African founders who build with AI (playbooks + Claude Code skills + Africa payments/grants) » → corps : contexte, ce que ça résout, ce qui est dedans, ce sur quoi tu veux du feedback, lien. Pas de langage marketing.

**Message communauté (WhatsApp/Slack) :**
```
Salut 👋 J'ai open-sourcé un truc qui pourrait servir : african-ai-founder-os.
En gros : des playbooks (valider une idée, MVP en 7 j, GTM), des skills IA prêts à coller
dans Claude Code, et surtout une couche Afrique (paiements par pays, grants avec deadlines).
Feedback très bienvenu, surtout sur ce qui manque pour [pays] : [lien]
```

**Cold email presse (structure) :** objet « An open-source “operating system” for African AI founders (built from Benin) » → 3 phrases : qui tu es, ce que c'est, pourquoi c'est un angle (data agrégée inédite : grants + paiements par pays) → « je peux vous donner un accès exclusif à l'étude de cas + aux données » → lien.

## 9.3 50 influenceurs / médias à contacter (catégories + exemples)

| Catégorie | Cibles types |
|---|---|
| Médias tech Afrique | TechCabal, Techpoint, Disrupt Africa, Benjamindada, Rest of World, Sifted, Launch Base Africa, WeeTracker/TechInAfrica |
| Newsletters | The Flip, Big Deal, Startup Africa Weekly, Afridigest, Communiqué, TLDR, Console.dev, Bytes, Pointer |
| Podcasts | The Flip, Afrobytes, African Tech Roundup, Building The Future, My First Million (long shot), Lenny's (long shot) |
| Founders/opérateurs Afrique (X/LinkedIn) | fondateurs Paystack/Flutterwave/Wave alumni, Iyin Aboyeji, opérateurs devrel Afrique, « tech Twitter » NG/KE |
| Open source / indie (X) | comptes « build in public », mainteneurs d'awesome-lists, IndieHackers staff, devrel Supabase/PostHog/Vercel |
| Communautés/《orgs》 | GDG leads (Cotonou/Lagos/Nairobi/Dakar), She Code Africa, ForLoop, Zindi, AfricArena, MEST, CcHUB, Sèmè City |
| Diaspora / FR | créateurs FR « build in public », communautés Station F Africa, French Tech Afrique, Digital Africa |
| VC (pour amplification, pas argent) | Partech Africa, TLcom, Ventures Platform, Future Africa, Norrsken22, Launch Africa — leurs comptes partagent volontiers les ressources écosystème |

**Méthode :** 1 tableau (Part 8, `outreach-targets.md`), 5 contacts personnalisés/semaine, angle « data exclusive + founder béninois », relance unique à J+4, offrir l'embargo sur l'étude de cas.

## 9.4 SEO & découvrabilité GitHub

- **Nom de repo :** `african-ai-founder-os` (contient les mots-clés « african », « ai », « founder »).
- **Description GitHub (350 c.) :** « Open-source OS for African founders building with AI. 10 executable playbooks, 10 Claude Code skills, a vetted stack, and an Africa layer: mobile-money providers by country, non-dilutive grants, accelerators, regulations. FR + EN. »
- **Topics GitHub (max 20) :** `africa`, `african-startups`, `founders`, `ai`, `claude`, `claude-code`, `startup`, `entrepreneurship`, `saas`, `mvp`, `no-code`, `product-led-growth`, `open-source`, `playbooks`, `fintech`, `payments`, `grants`, `awesome`, `french`, `bootstrapping`.
- **Fichier `README` = page SEO :** H1 clair, H2 par section, FAQ en bas (« Which payment provider for Benin? », « How to get AWS credits without a VC? ») → capte la longue traîne.
- **Landing (`africanaifounder.dev`) :** balises `title`/`meta description` optimisées, `og-image`, sitemap, contenu = résumé du repo + newsletter. Renvoie le « link juice » vers GitHub et inversement.
- **Backlinks :** awesome-lists (dofollow), articles invités, mentions presse, dépôts qui citent (badge « powered by African AI Founder OS » pour les projets d'utilisateurs).
- **Contenu evergreen :** les comparos (paiements, credits, boilerplates) et les annuaires (grants par pays) captent du trafic 12+ mois — les héberger aussi en pages web indexables, pas seulement en `.md`.

---

# Part 10 — Monetization & Sustainability

> **Transition.** 10k stars sans modèle de soutien = un projet qui s'éteint quand le founder est fatigué. Cette partie sécurise le carburant, sans trahir le « free & open ».

## 10.1 Modèles (rappel Part 1.8) appliqués

| Levier | Quand l'activer | Potentiel 12 mois | Risque |
|---|---|---|---|
| **GitHub Sponsors + Open Collective** | Dès 2 000 ⭐ | 300-1 500 $/mois | Faible ; normal en OSS |
| **Ateliers payants** (« idée→MVP en 7 j », cohortes) | Dès une communauté de 500 | 500-3 000 $/session | Temps ; ne pas cannibaliser le gratuit |
| **B2B accélérateurs** (licence de programme + animation) | Après 1 partenariat pilote | 2 000-10 000 $/programme | Cycle de vente long |
| **« OS Circle »** (communauté payante : office hours, deal flow, intros) | Après 1 000 membres gratuits | 10-20 $/mois × 100-300 | Modération, valeur à tenir |
| **Sponsors outils** (section « stack » sponsorisée, **labellisée**) | Après trafic prouvé | 200-1 000 $/mois/sponsor | Confiance : transparence obligatoire, jamais dans les recommandations neutres |
| **Grants open source** (Sovereign Tech Fund, GitHub Fund, ecosystem) | Dès 3 000 ⭐ + usage prouvé | 5 000-50 000 $ one-off | Dossier, éligibilité géo |
| **« Founder OS Pro »** (SaaS léger : dashboard de progression, cohortes, templates premium) | An 2 | MRR | Build/maintenance produit |

## 10.2 Plateformes de funding

| Plateforme | Pour quoi | Note |
|---|---|---|
| GitHub Sponsors | Dons récurrents devs | 0 % de commission, paiement Stripe Connect (vérifier éligibilité pays du bénéficiaire — sinon passer par une entité tierce/fiscal host) |
| Open Collective | Transparence budget + fiscal host | Idéal pour un projet « mouvement » ; hosts comme OSC |
| Ko-fi / Buy Me a Coffee | Dons ponctuels + memberships | Simple, payouts PayPal/Stripe |
| Polar.sh | Monétiser un repo (subs, produits digitaux) | Pensé pour devs, bon pour vendre templates/guides premium |
| Liberapay | Dons récurrents, non-profit | Communauté FOSS |
| Patreon | Memberships contenu | Si forte composante contenu/newsletter |
| Gumroad / LemonSqueezy | Vendre packs (templates, cohorte) | LS gère la TVA/MoR |

⚠️ **Contrainte Afrique :** GitHub Sponsors et Stripe payouts ne sont pas disponibles partout (vérifier pour le Bénin au moment T). Solutions : (a) entité au Delaware via Stripe Atlas, (b) fiscal host Open Collective, (c) Polar/LemonSqueezy comme Merchant of Record, (d) partenaire de confiance dans un pays éligible. Le repo tiendra une note à jour dans `08-monetization/README.md`.

## 10.3 Stratégie de grants (pour le repo lui-même)

1. **Documenter l'usage** dès le début : témoignages, nombre de founders, pays, contributions → dossier de preuve.
2. **Cibles :** Sovereign Tech Fund (infra numérique), GitHub Accelerator/Fund, Mozilla/Open Tech Fund, ecosystem grants (Vercel OSS, Supabase, Linux Foundation), fondations « digital public goods » (le repo peut candidater au **DPG Registry**).
3. **Angle :** « bien public numérique pour l'entrepreneuriat africain » — mesurable (emplois créés par les founders, capital non-dilutif débloqué).

## 10.4 Partenariats (sponsors & institutions)

- **Charte de transparence :** toute section sponsorisée porte un bandeau `Sponsored`, n'altère jamais les recommandations neutres, et est refusable. Publier la liste des sponsors + montants (Open Collective) → renforce la confiance.
- **Institutions :** accélérateurs (licence + atelier), Digital Africa / AFD, Orange Digital Center, Google for Startups (ressource recommandée), banques centrales/regulateurs (fiche régulation co-validée = crédibilité).

## 10.5 Roadmap de sustainability

| Horizon | Objectif | Actions |
|---|---|---|
| **0-6 mois** | Croissance pure, zéro monétisation intrusive | Ouvrir Sponsors à 2k ⭐ (bouton discret), 1 atelier pilote payant, documenter l'impact |
| **6-12 mois** | 500-2 000 $/mois récurrents + 1 grant | OS Circle (payant), 1-2 sponsors outils labellisés, candidater à 2 grants OSS, 2-3 ateliers/trimestre, 1 deal accélérateur |
| **12-24 mois** | Soutenir 1 mainteneur à temps partiel + contributeurs payés | Grant OSS obtenu, B2B accélérateurs récurrent, « Founder OS Pro » en beta, newsletter sponsorisée, gouvernance formalisée (maintainers, décisions RFC) |
| **24 mois+** | Organisation légère et pérenne | Entité (association / OpenCollective host / société), 1-2 salaires partiels, budget contributeurs, événement annuel |

**Principe directeur :** le cœur (playbooks, skills, couche Afrique) reste **gratuit et ouvert pour toujours**. On monétise le *service* (ateliers, accompagnement, communauté premium, données agrégées pour B2B), jamais l'accès au savoir.

---

# Annexe A — Sources

> Sources principales consultées pour ce document (2025-2026). Chaque entrée de données du repo (`data/`, `05-africa/`) doit porter sa propre `source:` + `last_checked:`. Les montants et deadlines **doivent être revérifiés au clic** — ils bougent trimestre par trimestre.

## Viralité open source & GitHub growth
1. « I Analyzed 50 GitHub Repos That Went From 0 to 10K Stars — Here Are the 7 Patterns », DEV Community, 2025 — https://dev.to/0012303/i-analyzed-50-github-repos-that-went-from-0-to-10k-stars-here-are-the-7-patterns-54o1 — README as product, launch HN mardi-jeudi 8-10h ET, awesome-lists = 50-200 ⭐/mois, réponse aux issues < 24 h.
2. « Best Trending GitHub Repositories 2026 », Firecrawl blog, 2026 — https://www.firecrawl.dev/blog/best-github-repos — catégories de repos qui percent (listes, curriculums, software runnable).
3. star-history.com — graphe de vélocité des stars (outil à intégrer au README).
4. ossinsight.io — analytics repo (temps de review, contributeurs, comparaisons).

## Cloud credits (montants 2026)
5. « Cloud Credits for Startups: AWS, Google & Azure 2026 », Pragma-code — https://www.pragma-code.de/en/blog-cloud-credits-startup-funding
6. « Startup Cloud Credits 2026 — how much you can get », CloudKompas — https://cloudkompas.com/blog/startup-cloud-credits-2026-see-how-much-you-can-get
7. « Startup Credits 2026: $500k+ Free (AWS, GCP, AI & More) », OrbitMoney — https://orbitmoney.io/deals/blog/startup-credits
8. « AWS vs Azure vs GCP for Startups in 2026 », Gart Solutions — https://gartsolutions.com/comparing-aws-gcp-and-azure-startup-programs/
   → AWS Activate : 1 000 $ (Founders) / jusqu'à 100 000 $ (Portfolio) / jusqu'à 300 000 $ (GenAI). Google for Startups : jusqu'à 200 000 $ / 350 000 $ (AI-first). Microsoft Founders Hub : jusqu'à 150 000 $ (palier 1 = 1 000 $ sans VC).
9. AWS Activate — https://aws.amazon.com/activate/ · Google for Startups Cloud — https://cloud.google.com/startup · Microsoft for Startups Founders Hub — https://foundershub.startups.microsoft.com/

## Financement startups africaines (2026)
10. « AI Grants and Funding Opportunities for African Startups in 2026 », aipreneurs.org — https://aipreneurs.org/ai-grants-and-funding-opportunities-for-african-startups-in-2026/
11. « The Complete Guide to Business Grants for African Entrepreneurs in 2026: $500M+ Non-Dilutive », Techmoonshot, 19 jan. 2026 — https://techmoonshot.com/2026/01/19/the-complete-guide-to-business-grants-for-african-entrepreneurs-in-2026-500m-in-non-dilutive-funding-available/
12. « Tony Elumelu Foundation Opens 2026 Entrepreneurship Programme », TEF — https://www.tonyelumelufoundation.org/press-releases/apply-tef-entrepreneurship-programme-2026 — 5 000 $ non-dilutif, candidatures 1 janv → 1 mars 2026, 54 pays ; >100 M$ investis / >20 000 entrepreneurs depuis 2015.
13. « Google for Startups Black Founders Fund: Africa » — https://startup.google.com/programs/black-founders-fund/africa/ · CcHUB disbursement — https://cchub.africa/google-for-startups-black-founders-fund-africa-apply-now/ — >40 M$ distribués globalement depuis 2020 ; ~3 M$ non-dilutif / ~50 startups Afrique.
14. « Google for Startups Accelerator: Africa » — https://startup.google.com/programs/accelerator/africa/ — cohorte ~avril-juin 2026, equity-free, growth-stage.
15. « Five African Startup Funding Programs Still Open — Aug 2026 », CofoundAlly — https://cofoundally.com/startup-funding/five-african-startup-funding-programs-still-open-in-august-2026/ — MEST AI Startup Program (7 mois + 4 mois incubation + pré-seed), ABH, TEF, Orange Corners.
16. « Startup Funding in Africa (2026) — Grants, Accelerators & Investors », Startup Map Africa — https://startupmapafrica.com/funding
17. « Top Funding Opportunities for African Entrepreneurs 2026 », MOHAC Africa — https://mohacafrica.org/funding-opportunities-for-african-entrepreneurs/
18. « Grants for Ghanaian Founders: Non-Dilutive Funding (2026) », JBKlutse — https://www.jbklutse.com/grants-ghanaian-founders/
19. VC4A — Black Founders Fund Africa — https://vc4a.com/google-for-startups/black-founders-fund-africa/

## Paiements Afrique
20. « Top Paystack Alternatives for African SaaS in 2026 », Dodo Payments — https://dodopayments.com/blogs/paystack-alternatives
21. « Best Payment Gateways in Africa (2026 Guide) », QueryFinders — https://queryfinders.com/blogread-more/best-payment-gateways-guide-africa-2026
22. « Paystack vs Flutterwave vs Moniepoint in 2026 », Launchpad NG — https://launchpad.ng/resources/paystack-vs-flutterwave-2026
23. « Top Payment Gateways in Africa », Dusupay — https://www.dusupay.com/post/top-payment-gateways-in-africa
24. « Choosing a Payment Processor in Africa », Eleo — https://eleo.app/blog/choosing-payment-processor-africa
25. « Meilleurs agrégateurs de paiement en Afrique 2026 », Elimboo — https://elimboo.com/meilleurs-agregateurs-paiement-afrique/
   → Flutterwave 30+ pays / 30+ devises ; Paystack (Stripe) NG/GH/ZA/KE/CI ; CinetPay 64+ moyens de paiement, francophone/WAEMU.
26. Docs officielles : paystack.com/docs · developer.flutterwave.com · cinetpay.com · developer.safaricom.co.ke (M-Pesa Daraja) · momodeveloper.mtn.com · developers.airtel.africa · africastalking.com · termii.com

## Boilerplates SaaS
27. « Best Next.js SaaS Boilerplates 2026: MakerKit, ShipFast and Alternatives », MakerKit — https://makerkit.dev/blog/saas/best-nextjs-saas-boilerplate
28. « Best Next.js Boilerplates in 2026 », Supastarter — https://supastarter.dev/best-nextjs-boilerplate-2026
29. « Best SaaS Boilerplate Templates for 2026 », Lovable — https://lovable.dev/guides/best-saas-boilerplate-templates
30. « Best SaaS Boilerplates for Next.js in 2026 (Honest Comparison) », ShipAI — https://shipai.today/blog/best-saas-boilerplate-nextjs-2026
   → MakerKit (Next 16 / Supabase / Drizzle / Better Auth, multi-tenant B2B), Supastarter (DB-agnostic, 3 frameworks), ShipFast, SaaSRocket (~50 $), Open SaaS / ixartz/SaaS-Boilerplate / nextjs-saas-starter (gratuits MIT).

## Outils IA pour founders
31. « Best AI Tools for Startup Founders in 2026: Top 10 Ranked », ValueAddVC — https://valueaddvc.com/blog/top-10-ai-tools-for-startup-founders-in-2026-ranked-by-actual-usefulness
32. « Best AI Tools for Founders in 2026: From Idea to PMF », Perspective AI — https://getperspective.ai/blog/best-ai-tools-for-founders-in-2026-from-idea-to-product-market-fit
33. « 10 Best AI Tools for Startups in 2026 », Bubble — https://bubble.io/blog/ai-tools-for-startups/
34. « Best AI Tools for Founders in 2026 (Tested) », Iwo Szapar — https://www.iwoszapar.com/p/best-ai-tools-for-founders
35. « Top AI Tools for Founders 2026 », AI for Founders — https://aiforfounders.co/resources
   → Claude (stratégie/écriture/code), Cursor (IDE IA), Perplexity (recherche sourcée), Clay/Apollo (GTM).

## Déploiement / DevOps
36. « Fly.io vs Railway vs Render vs Coolify: 2026 PaaS Comparison », DevToolReviews — https://www.devtoolreviews.com/reviews/fly-io-vs-railway-vs-render-vs-coolify-2026
37. « Best Coolify Alternatives in 2026 », PandaStack — https://pandastack.io/blog/best-coolify-alternatives-2026
38. « Railway vs Render vs Fly.io for Solo Developers in 2026 », DevToolPicks — https://devtoolpicks.com/blog/railway-vs-render-vs-fly-io-solo-developers-2026
   → Coolify (self-hosted OSS, 44 000+ ⭐, 280+ services 1-clic, ~10 $/mo VPS Hetzner) ; Railway (usage-based, DX top) ; Fly.io (multi-région) ; Render (feature set large).

## Communautés tech Afrique
39. « 10 tech communities to join in Nigeria and Africa », Hacktive Devs / Medium — https://medium.com/hacktive-devs/10-tech-communities-to-join-in-nigeria-and-africa-if-you-are-a-developer-or-designer-d4d8f8caec54
40. github.com/balotofi/NigerianTechCommunities · github.com/lagosnomad/nigerian-slack-communities · github.com/thisdot/tech-community-slacks
41. « Top 10 African Tech Communities », The Bulb Africa / Medium — https://thebulbafrica.medium.com/top-10-african-tech-communities-9c518073f162
   → ForLoop Africa (2016, chapitres GH/KE/TZ/UG/ZW/ZM), GDG + DevFest, Devcenter Square, Python Nigeria, She Code Africa.

## Frameworks (références canoniques — livres)
42. Rob Fitzpatrick, *The Mom Test*, 2013.
43. Eric Ries, *The Lean Startup*, 2011.
44. Teresa Torres, *Continuous Discovery Habits*, 2021.
45. Gabriel Weinberg & Justin Mares, *Traction*, 2015.
46. Peter Thiel, *Zero to One*, 2014.
47. Geoffrey Moore, *Crossing the Chasm*, 1991.
48. Andrew Chen, *The Cold Start Problem*, 2021.
49. Chip & Dan Heath, *Made to Stick*, 2007 ; Jonah Berger, *Contagious*, 2013.
50. Nadia Asparouhova (Eghbal), *Working in Public*, 2020 ; GitHub Open Source Survey, 2017.
51. Strategyzer — Value Proposition Canvas ; Reforge — Growth Loops ; Sean Ellis — PMF Survey ; Van Westendorp — Price Sensitivity Meter.

> **Note de fiabilité :** les sources 5-41 sont des articles secondaires 2026 ; utiles pour les ordres de grandeur et les listes, mais chaque montant de crédit/grant et chaque frais de paiement doit être confirmé sur le site officiel avant publication dans le repo. Les sources 42-51 sont des références stables.

---

# Annexe B — Glossaire

| Terme | Définition courte |
|---|---|
| **ACV** | Annual Contract Value — revenu annuel moyen par client. |
| **ARR / MRR** | Annual / Monthly Recurring Revenue — revenu récurrent. |
| **Activation** | Moment/action où un nouvel utilisateur perçoit la valeur du produit pour la 1ʳᵉ fois. |
| **BSP** | Business Solution Provider — fournisseur d'accès à la WhatsApp Cloud API (ex. 360dialog). |
| **CAC** | Customer Acquisition Cost — coût d'acquisition d'un client. |
| **CDP** | Customer Data Platform — collecte et route les événements utilisateur (Segment, RudderStack). |
| **CLG / PLG / SLG** | Community- / Product- / Sales-Led Growth — moteur principal de croissance. |
| **Cold Start Problem** | Difficulté d'amorcer un réseau/marketplace vide (Andrew Chen). |
| **DoD** | Definition of Done — critère binaire qui dit qu'une tâche est finie. |
| **GFI** | `good first issue` — tâche calibrée pour une 1ʳᵉ contribution. |
| **GTM** | Go-To-Market — plan de mise sur le marché. |
| **ICP** | Ideal Customer Profile — profil du client idéal. |
| **JTBD** | Jobs To Be Done — le « job » pour lequel un client « embauche » un produit. |
| **KYB / KYC** | Know Your Business / Customer — vérifications réglementaires (bloquent souvent le versement de fonds). |
| **LOI** | Letter of Intent — engagement non contraignant d'un futur client. |
| **MoR** | Merchant of Record — l'entité qui vend légalement et gère la TVA (LemonSqueezy, Polar). |
| **Mobile money** | Compte de paiement lié à un numéro de téléphone (M-Pesa, MTN MoMo, Orange Money, Wave). |
| **Moat** | Avantage concurrentiel durable (« douve »). |
| **MVP** | Minimum Viable Product — plus petite version qui teste l'hypothèse la plus risquée. |
| **Non-dilutif** | Financement sans céder de capital (grant, prix, crédits, dette). |
| **NRR** | Net Revenue Retention — revenu conservé + expansion sur une cohorte (churn inclus). |
| **OKR** | Objectives & Key Results — objectifs qualitatifs + résultats chiffrés. |
| **Open Core** | Cœur open source + modules propriétaires payants. |
| **PQL** | Product-Qualified Lead — utilisateur dont l'usage prédit l'achat. |
| **PSP** | Payment Service Provider — prestataire de paiement. |
| **RAT** | Riskiest Assumption Test — tester d'abord l'hypothèse qui tue le projet. |
| **STEPPS** | Grille de viralité de Jonah Berger (Social currency, Triggers, Emotion, Public, Practical value, Stories). |
| **TAM / SAM / SOM** | Total / Serviceable / Obtainable Market — tailles de marché emboîtées. |
| **Time-to-value** | Délai entre l'inscription et la 1ʳᵉ valeur perçue. |
| **USSD** | Menus texte sur téléphone sans internet (`*123#`) — clé pour les feature phones. |
| **UEMOA / CEMAC** | Unions monétaires d'Afrique de l'Ouest (XOF) / Centrale (XAF). |
| **Van Westendorp (PSM)** | 4 questions de prix → fourchette acceptable et point optimal. |
| **WAU / MAU / DAU** | Weekly / Monthly / Daily Active Users. |
| **XOF / XAF** | Franc CFA Ouest / Central (parité fixe avec l'euro). |

---

# Annexe C — Checklists

## C.1 Checklist « Repo launch-ready » (à cocher avant S0)

**Contenu**
- [ ] README : bannière, badges, tagline, GIF 15 s, 3 parcours, « contribute in 1 PR », star-history, licence
- [ ] `00-start-here/README.md` testé par une personne externe en < 15 min
- [ ] Playbooks 1, 2, 3 complets et relus
- [ ] 10 skills : prompt + exemple input/output + fichier `.claude/skills/*/SKILL.md`
- [ ] Part 2 : au moins ai-tools, boilerplates, payments-africa, cloud-credits
- [ ] Part 5 : paiements pour ≥ 10 pays, grants panafricains, ≥ 3 fiches régulation
- [ ] ≥ 8 templates dans `templates/` (dont `payments-adapter.ts`, `interview-guide.md`, `launch-checklist.md`)
- [ ] FR + EN au moins pour README + `00-start-here` + 1 playbook

**Infra GitHub**
- [ ] `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md`
- [ ] 5 issue templates + PR template
- [ ] Workflows : welcome, link-check, data-lint, stale, metrics-snapshot — CI verte
- [ ] `data/schema/*.schema.json` + validation qui passe
- [ ] All-Contributors initialisé
- [ ] `FUNDING.yml` (peut rester vide/commenté au début)
- [ ] 20 `good first issue` prêtes (brouillons), 15 publiées le jour du hard launch
- [ ] Topics GitHub (20) + description (350 c.) remplis
- [ ] « Template repository » activé (Settings)
- [ ] Licence(s) : `LICENSE` MIT + `LICENSE-CONTENT` CC-BY-4.0

**Marketing**
- [ ] Landing en ligne (capte les emails) + og-image
- [ ] Domaine configuré et redirigé
- [ ] `launch/copy.md` : Show HN, thread X, post LinkedIn, texte PH, 10 messages communautés, newsletter #1
- [ ] Liste de 100 soutiens (nom, canal, créneau J0) — 30 confirmés pour la 1ʳᵉ heure
- [ ] Draft Product Hunt programmé (00:01 PT mardi)
- [ ] 5 communautés Afrique prévenues (soft launch lundi)
- [ ] Newsletter connectée (Buttondown/ConvertKit), 1ʳᵉ édition prête
- [ ] Dub.co : liens de campagne créés (1 par canal)
- [ ] Analytics landing (Plausible/GoatCounter) + PostHog

## C.2 Checklist « Jour du hard launch » (mardi)

- [ ] 08:00 UTC — Product Hunt live, 1er commentaire = founder story, 30 soutiens notifiés
- [ ] 13:00 — « Show HN » posté (titre exact), war room ouverte
- [ ] 13:15 — Thread X épinglé + post LinkedIn + newsletter envoyée
- [ ] 13:30 — 10 communautés + subreddits (message adapté à chacun)
- [ ] Toutes les 30 min — répondre partout, < 15 min de délai
- [ ] Milestones tweetés (500 / 1 000 / 2 000 ⭐)
- [ ] Chaque contributeur/commentateur remercié nominativement
- [ ] 22:00 — README mis à jour (témoignages, « trending »)
- [ ] Fin de journée — retours transformés en issues, indécis relancés

## C.3 Checklist hebdo (S2 → S8)

- [ ] 1 nouveau playbook OU 1 nouveau pays mergé + annoncé (thread + newsletter + communauté)
- [ ] 2 threads X + 1 post LinkedIn (via `/create-viral-hook`)
- [ ] 15-20 GFI ouvertes ; toutes les issues répondues < 24 h ; toutes les PR reviewées < 72 h
- [ ] 1 contributor spotlight
- [ ] 5 contacts partenariat/presse personnalisés + relances J+4
- [ ] Snapshot métriques exporté (`metrics/history.csv`) + revue des 6 métriques contenu
- [ ] 1 lien mort corrigé s'il y en a (CI link-check)
- [ ] 30 min communauté : accueil des nouveaux, « win du vendredi »

## C.4 Checklist « validation d'idée » (founder utilisateur)

- [ ] Idée en 1 phrase « J'aide QUI à FAIRE X pour RÉSULTAT »
- [ ] Riskiest assumption identifiée
- [ ] Guide d'interview Mom Test prêt (0 question hypothétique)
- [ ] 10 interviews réalisées et enregistrées
- [ ] Waitlist en ligne avec question qualifiante + question prix
- [ ] 100 inscrits en 12 jours
- [ ] ≥ 5 pré-ventes / LOI
- [ ] Grille de décision remplie → Go / Pivot / No-go écrit noir sur blanc

## C.5 Checklist « MVP en 7 jours » (founder utilisateur)

- [ ] PRD 1 page validé, HORS SCOPE explicite
- [ ] Boilerplate cloné, déployé « hello world » en prod (J0)
- [ ] Auth + DB migrée (J2)
- [ ] Parcours cœur end-to-end (J3)
- [ ] Paiement intégré via l'adapter (provider local) + webhook testé (J4)
- [ ] Notifications + page succès + onboarding minimal (J5)
- [ ] Responsive mobile + états d'erreur + PostHog + Sentry (J6)
- [ ] Testé sur Android milieu de gamme / 3G ; 1 vrai utilisateur onboardé (J7)
- [ ] Event d'activation visible dans PostHog

## C.6 Checklist « candidature grant » (founder utilisateur)

- [ ] One-pager + deck 12 slides + vidéo 2 min prêts et réutilisables
- [ ] 15-20 opportunités listées, triées (montant, dilution, deadline, fit, effort)
- [ ] Réponses types : problème, marché bottom-up, traction, équipe, usage des fonds, impact
- [ ] 3 candidatures/semaine, intro + section impact personnalisées à chaque programme
- [ ] Société enregistrée ou en cours (sinon = blocage de versement)
- [ ] 5 intros chaudes/semaine (mentors, alumni de programmes)
- [ ] Tableau de suivi (programme, deadline, statut, prochaine action)

---

## Mot de la fin

Ce document est un point de départ, pas une bible. La partie 5 (Afrique) *doit* vivre : c'est là que le repo gagne ou perd sa crédibilité. La partie 6 (viralité) *doit* être exécutée en entier — un demi-launch ne fait pas 10k stars. Et la partie 10 (sustainability) *doit* être activée avant l'épuisement, pas après.

Construis en public. Documente RESTAFY comme ta première étude de cas. Réponds à chaque issue en moins de 24 h. Ajoute un pays chaque semaine. Dans six mois, on regarde le graphe star-history ensemble. 🚀🇧🇯

*— African AI Founder OS · v1.0 · 2026-09-02*
