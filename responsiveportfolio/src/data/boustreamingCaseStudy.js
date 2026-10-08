import boustreamingBanner from '../Image/case-studies/boustreaming-banner.png';

// Source snapshot: BouStreaming d1fbf45927d25174cd5b3e7e529ecfaaa087b85c.
// Original brand asset: android/app/src/main/res/drawable-xhdpi/banner.png.
export const boustreamingCaseStudy = {
  role: {
    en: 'Full-stack developer · Interface, navigation and application services',
    fr: 'Développeur full-stack · Interface, navigation et services applicatifs',
  },
  intro: {
    en: 'I built BouStreaming as a web application designed for TVs and projectors. My work covers the interface, directional navigation, metadata search, personal libraries, account history and recommendations, with controls designed for a remote, gamepad or keyboard.',
    fr: 'J’ai développé BouStreaming comme une application Web conçue pour les téléviseurs et les projecteurs. Mon travail couvre l’interface, la navigation directionnelle, la recherche de métadonnées, les bibliothèques personnelles, l’historique des comptes et les recommandations, avec des commandes adaptées à la télécommande, à la manette et au clavier.',
  },
  systems: [
    {
      title: {
        en: 'Navigation from the sofa',
        fr: 'Naviguer depuis le canapé',
      },
      body: {
        en: 'I built a shared input layer that translates keyboard, remote and gamepad input into interface commands. Spatial navigation chooses focus targets from their position on screen. Priority-based dispatch lets a dialog receive commands before the page behind it, and overlapping device adapters claim each key event only once.',
        fr: 'J’ai créé une couche d’entrée commune qui traduit les commandes du clavier, de la télécommande et de la manette. La navigation spatiale choisit les éléments selon leur position à l’écran. Les priorités permettent à une fenêtre de recevoir les commandes avant la page située derrière, et les adaptateurs d’entrée traitent chaque événement de touche une seule fois.',
      },
    },
    {
      title: {
        en: 'Search that stays in the address',
        fr: 'Une recherche conservée dans l’adresse',
      },
      body: {
        en: 'The search query lives in the URL and updates after a short typing delay, avoiding a navigation for every keystroke. A geometric on-screen keyboard supports directional input, while phones use their native keyboard. Results can be shared, and refreshing the page preserves the query.',
        fr: 'La recherche est conservée dans l’URL et actualisée après une courte pause de saisie, ce qui évite une navigation à chaque touche. Un clavier à l’écran permet la navigation directionnelle, tandis que les téléphones utilisent leur clavier natif. Les résultats sont partageables et la recherche survit à l’actualisation de la page.',
      },
    },
    {
      title: {
        en: 'Remove with a chance to undo',
        fr: 'Retirer avec la possibilité d’annuler',
      },
      body: {
        en: 'Removing a title first replaces its card with an Undo tile. A shared state store waits up to six seconds before committing the change and also handles focus leaving the tile, navigation and backgrounding. Undo restores the item without a server mutation. The same behavior works across history, favourites, folders and lists.',
        fr: 'Retirer un titre remplace d’abord sa carte par une option Annuler. Un état partagé attend jusqu’à six secondes avant de valider le changement et gère aussi le déplacement du focus, la navigation et le passage en arrière-plan. Annuler restaure l’élément sans modification sur le serveur. Ce fonctionnement est commun à l’historique, aux favoris, aux dossiers et aux listes.',
      },
    },
    {
      title: {
        en: 'History that stays forgotten',
        fr: 'Un historique réellement effacé',
      },
      body: {
        en: 'I separated device history from account history and added a revision per title. Forgetting a title increments that revision under the same database lock used by progress writes. A delayed write from an older session cannot silently restore removed history. The interface reconciles these revisions when history is opened again.',
        fr: 'J’ai séparé l’historique de l’appareil de celui du compte et ajouté une révision par titre. Oublier un titre incrémente cette révision sous le même verrou de base de données que les écritures de progression. Une écriture tardive d’une ancienne session ne peut donc pas rétablir discrètement l’historique supprimé. L’interface synchronise ces révisions à la réouverture de l’historique.',
      },
    },
    {
      title: {
        en: 'Explainable recommendations',
        fr: 'Des recommandations explicables',
      },
      body: {
        en: 'Liked, saved and watched titles provide weighted recommendation signals. The ranking accounts for their strength and recency, genre fit and candidate quality, then introduces variety into each row. The scoring is deterministic: the same signals, candidates and reference time produce the same ranking, making the behavior easier to test and explain.',
        fr: 'Les titres aimés, enregistrés et regardés alimentent des signaux pondérés. Le classement tient compte de leur importance, de leur ancienneté, des genres et de la qualité des candidats, puis introduit de la variété dans chaque rangée. Le calcul est déterministe : les mêmes signaux, candidats et date de référence produisent le même classement, ce qui facilite les tests et les explications.',
      },
    },
  ],
  flow: {
    title: {
      en: 'How a list removal becomes final',
      fr: 'Comment le retrait d’un élément devient définitif',
    },
    steps: [
      { en: 'Request removal', fr: 'Demander le retrait' },
      { en: 'Show an Undo tile', fr: 'Afficher l’option Annuler' },
      { en: 'Wait for timeout or departure', fr: 'Attendre le délai ou le départ' },
      { en: 'Clear pending state before moving focus', fr: 'Effacer l’état en attente avant de déplacer le focus' },
      { en: 'Commit once; restore the item on failure', fr: 'Valider une fois; restaurer l’élément en cas d’échec' },
    ],
  },
  outcome: {
    en: 'BouStreaming is a working application that I continue to iterate on. It connects a TV-oriented interface with search, personal libraries, history and recommendation services. The project gives me a concrete place to work on input handling, asynchronous state and persistence across devices.',
    fr: 'BouStreaming est une application fonctionnelle que je continue à faire évoluer. Elle relie une interface pensée pour la télévision à la recherche, aux bibliothèques personnelles, à l’historique et aux recommandations. Ce projet me permet de travailler concrètement sur la gestion des commandes, les états asynchrones et la persistance entre appareils.',
  },
  availability: {
    en: 'The application currently has restricted access. A future version based on legally authorized content is planned.',
    fr: 'L’application est actuellement à accès restreint. Une future version reposant sur des contenus légalement autorisés est prévue.',
  },
  media: [
    {
      kind: 'image',
      src: boustreamingBanner,
      alt: {
        en: 'BouStreaming brand banner with a red play symbol and the project wordmark on a dark background.',
        fr: 'Bannière BouStreaming avec un symbole de lecture rouge et le nom du projet sur fond sombre.',
      },
      caption: {
        en: 'Original BouStreaming brand artwork used by the Android TV application. This is a brand banner, not a screenshot of the interface.',
        fr: 'Visuel de marque original de BouStreaming utilisé par l’application Android TV. Il s’agit d’une bannière de marque, et non d’une capture de l’interface.',
      },
      credit: { label: 'BouStreaming' },
    },
  ],
  code: [
    {
      title: {
        en: 'Commit a removal once',
        fr: 'Valider une suppression une seule fois',
      },
      description: {
        en: 'The pending state is cleared before the focus callback runs. Moving focus can trigger another flush, so settling that state first prevents the same removal from being committed twice. This function completes the shared Undo workflow; the settle helper handles the result and restores the item if the write fails.',
        fr: 'L’état en attente est effacé avant d’exécuter le callback de focus. Déplacer le focus peut déclencher une nouvelle validation; modifier l’état en premier empêche donc de valider deux fois le même retrait. Cette fonction termine le parcours Annuler commun aux listes; la fonction settle traite le résultat et restaure l’élément si l’écriture échoue.',
      },
      language: 'typescript',
      code: `export function flushRemovals(): void {
  const request = pendingRequest;
  const pending = state.pending;
  if (request === null || pending === null) return;
  stopTimer();
  // Settled before anything else runs, so that moving focus off the tile in
  // onFinal cannot find it still waiting and make it final a second time.
  pendingRequest = null;
  state = { ...state, pending: null };
  try {
    request.onFinal?.();
  } catch (error) {
    console.error('A removal could not move focus on', error);
  }
  committing.add(pending.key);
  publish({ hidden: withHidden(pending.scope, pending.itemKey, true) });
  void settle(request, pending.key);
}`,
      source: {
        file: 'src/components/library/pending-removal.ts',
        revision: 'd1fbf45927d25174cd5b3e7e529ecfaaa087b85c',
      },
    },
  ],
};
