import { grouillereArtwork } from './projectArtwork';

// Ownership: Mohaned's confirmed character-programming scope.
// Behavior: H26-CJV1410-Taz design records and completed tasks, read October 8, 2026.
// The board has no assignee fields; task creators are not implementation credits.
// Evidence and limitations: docs/project-case-studies.md.
export const grouillereCaseStudy = {
  role: {
    en: 'Character programmer · Movement, camera and player interactions',
    fr: 'Programmeur personnage · Déplacement, caméra et interactions du joueur',
  },
  intro: {
    en: 'Grouillère is a completed university team game built in Unreal Engine 5. You play Maude, a hungry mouse racing through a farm, switching between precise walking and chaotic tornado movement. I developed the complete character controller and the systems around the player, including cheese and poison interactions.',
    fr: 'Grouillère est un jeu universitaire réalisé en équipe avec Unreal Engine 5. On y incarne Maude, une souris affamée qui traverse une ferme en alternant entre une marche précise et un déplacement chaotique en tornade. J’ai développé le contrôleur complet du personnage et les systèmes liés au joueur, notamment les interactions avec le fromage et le poison.',
  },
  sourcesNote: {
    en: 'The linked Fibery records describe the team’s mechanics and development tasks under the older Taz workspace name; some documents call the game Grouyère. They provide context for my character-programming work and may require workspace access.',
    fr: 'Les liens Fibery présentent les mécaniques et les tâches de développement de l’équipe dans l’ancien espace Taz; certains documents nomment le jeu Grouyère. Ils détaillent le contexte de ma programmation du personnage et peuvent nécessiter un accès à l’espace de travail.',
  },
  systems: [
    {
      title: { en: 'Two movement modes, one controller', fr: 'Deux modes de déplacement, un contrôleur' },
      body: {
        en: 'I built the character controller around camera-relative movement. Walking gives the player precise control around hazards, while tornado movement carries momentum and feels more like sliding. The documented transition depends on speed: crossing a threshold enters tornado mode, and losing enough speed returns the character to walking. In tornado mode, slowing down comes from passive speed loss or collisions rather than a manual brake.',
        fr: 'J’ai construit le contrôleur autour d’un déplacement relatif à la caméra. La marche permet de se diriger précisément près des dangers, tandis que la tornade conserve de l’inertie et donne une sensation de glissade. La transition documentée dépend de la vitesse : dépasser un seuil déclenche la tornade, puis perdre suffisamment de vitesse ramène le personnage à la marche. En tornade, le ralentissement vient de la perte de vitesse passive ou des collisions plutôt que d’un frein manuel.',
      },
      sources: [
        { label: { en: 'Walking controls', fr: 'Déplacement en marchant' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/14' },
        { label: { en: 'Tornado movement', fr: 'Déplacement en tornade' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/15' },
        { label: { en: 'Speed-based transitions', fr: 'Transitions selon la vitesse' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/2' },
      ],
    },
    {
      title: { en: 'Speed, slopes and collision response', fr: 'Vitesse, pentes et réactions aux collisions' },
      body: {
        en: 'My character work includes the speed changes that make traversal a constant balancing act. Uphill slopes slow the player down and downhill slopes accelerate them. Wall impacts remove speed, with a larger penalty for closely repeated collisions that resets after an interval. Bouncing objects redirect the character and add speed. These rules let the level shape the player’s momentum.',
        fr: 'Mon travail sur le personnage comprend les variations de vitesse qui rendent le déplacement dynamique. Les montées ralentissent le joueur et les descentes l’accélèrent. Les impacts contre les murs font perdre de la vitesse, avec une pénalité croissante lors de collisions rapprochées qui se réinitialise après un délai. Les objets rebondissants redirigent le personnage et lui ajoutent de la vitesse. Ces règles permettent au niveau d’influencer l’élan du joueur.',
      },
      sources: [
        { label: { en: 'Task 40 · Slopes', fr: 'Tâche 40 · Pentes' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/40' },
        { label: { en: 'Task 108 · Repeated collisions', fr: 'Tâche 108 · Collisions répétées' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/108' },
        { label: { en: 'Task 36 · Bounce interaction', fr: 'Tâche 36 · Interaction de rebond' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/36' },
      ],
    },
    {
      title: { en: 'Jumping and staying grounded', fr: 'Le saut et le contact avec le sol' },
      body: {
        en: 'The controller also handles jumping and ground contact. The completed character tasks include coyote time, which gives the player a short opportunity to jump after leaving an edge, and ground snapping to keep the character aligned with the terrain. These refinements support a character that moves quickly through uneven spaces.',
        fr: 'Le contrôleur gère aussi le saut et le contact avec le sol. Les tâches terminées du personnage comprennent le coyote time, une courte tolérance pour sauter après avoir quitté un bord, ainsi que le maintien du personnage au contact du terrain. Ces ajustements accompagnent un personnage qui traverse rapidement des espaces irréguliers.',
      },
      sources: [
        { label: { en: 'Task 55 · Coyote jump', fr: 'Tâche 55 · Tolérance de saut' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/55' },
        { label: { en: 'Task 140 · Ground snapping', fr: 'Tâche 140 · Contact avec le sol' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/140' },
      ],
    },
    {
      title: { en: 'Camera and control adjustments', fr: 'Les réglages de caméra et des commandes' },
      body: {
        en: 'Because movement follows the camera, camera control is part of the character’s feel. The player-control work covers camera recentering and automatic following, separate horizontal and vertical sensitivity settings, camera limits, vertical-axis inversion and remappable inputs. The design lets players look manually and resumes automatic camera movement after inactivity in tornado mode.',
        fr: 'Comme le déplacement suit la caméra, son contrôle fait partie des sensations du personnage. Le travail sur les commandes comprend le recentrage et le suivi automatique, des sensibilités horizontale et verticale distinctes, les limites de caméra, l’inversion de l’axe vertical et la réassignation des touches. Le design permet de regarder librement et reprend le mouvement automatique de la caméra après une période d’inactivité en tornade.',
      },
      sources: [
        { label: { en: 'Camera behavior', fr: 'Comportement de la caméra' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/17' },
        { label: { en: 'Task 53 · Recentering', fr: 'Tâche 53 · Recentrage' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/53' },
        { label: { en: 'Task 92 · Sensitivity and limits', fr: 'Tâche 92 · Sensibilité et limites' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/92' },
        { label: { en: 'Task 56 · Invert camera Y', fr: 'Tâche 56 · Inverser l’axe Y' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/56' },
        { label: { en: 'Task 91 · Input remapping', fr: 'Tâche 91 · Réassignation des touches' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/91' },
      ],
    },
    {
      title: { en: 'Cheese as a speed boost', fr: 'Le fromage comme accélérateur' },
      body: {
        en: 'I implemented the cheese interaction: collecting cheese boosts the character’s speed. It feeds directly into the movement system, giving the player a way to regain momentum while navigating the farm. The project records describe the effect without specifying a fixed boost amount or duration.',
        fr: 'J’ai implémenté l’interaction avec le fromage : le ramasser augmente la vitesse du personnage. Cet effet agit directement sur le déplacement et permet au joueur de reprendre de l’élan en traversant la ferme. Les documents du projet décrivent l’effet sans fixer ici de valeur ni de durée précise.',
      },
      sources: [
        { label: { en: 'Task 45 · Cheese interaction', fr: 'Tâche 45 · Interaction avec le fromage' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/45' },
        { label: { en: 'Cheese design', fr: 'Design du fromage' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Agent/9' },
      ],
    },
    {
      title: { en: 'Poison pickups and the score boundary', fr: 'Le poison et son lien avec le score' },
      body: {
        en: 'I implemented the character’s interaction with poison pickups. The design describes rat poison collected in tornado mode as a score penalty. My contribution is the pickup interaction on the player side; the score system itself was developed by teammates. This keeps the character behavior connected to the wider game without attributing their scoring work to me.',
        fr: 'J’ai implémenté l’interaction du personnage avec le poison à ramasser. Le design décrit le poison à rat collecté en mode tornade comme une pénalité de score. Ma contribution porte sur l’interaction côté joueur; le système de score lui-même a été développé par mes coéquipiers. Le comportement du personnage s’intègre ainsi au jeu sans m’attribuer leur travail sur le calcul des points.',
      },
      sources: [
        { label: { en: 'Task 43 · Poison interaction', fr: 'Tâche 43 · Interaction avec le poison' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Tâche/43' },
        { label: { en: 'Rat-poison design', fr: 'Design du poison à rat' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Agent/8' },
      ],
    },
    {
      title: { en: 'Hazard recovery and player state', fr: 'La récupération après un danger' },
      body: {
        en: 'The character systems also cover the response to poison pits. The documented sequence stops the player, exits tornado mode and briefly stuns the character. A fade accompanies repositioning to a recorded valid point, then movement becomes available again. The stun duration is a tunable Data Asset setting, so designers can adjust the recovery timing.',
        fr: 'Les systèmes du personnage couvrent aussi la réaction aux trous de poison. La séquence documentée arrête le joueur, met fin au mode tornade et étourdit brièvement le personnage. Un fondu accompagne son repositionnement vers un point valide enregistré, puis le déplacement redevient disponible. La durée d’étourdissement est un réglage de Data Asset que les designers peuvent ajuster.',
      },
      sources: [
        { label: { en: 'Stun and recovery sequence', fr: 'Séquence d’étourdissement et de récupération' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Mécanique/16' },
        { label: { en: 'Poison-pit design', fr: 'Design du trou de poison' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/Agent/6' },
      ],
    },
    {
      title: { en: 'My contribution within the team', fr: 'Ma contribution dans l’équipe' },
      body: {
        en: 'My responsibility was the complete character controller and its related systems. Teammates developed the enemies, ending cinematic, score and timer, and contributed the game’s art, animation, level design and feedback. The Fibery board records the wider team’s work; it is linked here as project documentation. Its task authors are not a list of programming credits.',
        fr: 'J’étais responsable du contrôleur complet et des systèmes liés au personnage. Mes coéquipiers ont développé les ennemis, la cinématique de fin, le score et le chronomètre, et ont contribué à l’art, aux animations, au design de niveau et aux rétroactions. Le tableau Fibery documente le travail de toute l’équipe. Les auteurs des tâches ne constituent pas une liste de crédits de programmation.',
      },
      sources: [
        { label: { en: 'Project task board on Fibery', fr: 'Tableau des tâches du projet sur Fibery' }, url: 'https://cnm-mtl.fibery.io/H26-CJV1410-Taz/8577' },
        { label: { en: 'Team project write-up', fr: 'Présentation du projet d’équipe' }, url: 'https://www.therookies.co/projects/104357' },
      ],
    },
  ],
  flow: {
    title: { en: 'Character systems I worked on', fr: 'Les systèmes du personnage sur lesquels j’ai travaillé' },
    steps: [
      { en: 'Movement and camera', fr: 'Déplacement et caméra' },
      { en: 'Speed and collisions', fr: 'Vitesse et collisions' },
      { en: 'Cheese and poison interactions', fr: 'Interactions avec le fromage et le poison' },
      { en: 'Hazard recovery', fr: 'Récupération après un danger' },
    ],
  },
  outcome: {
    en: 'My contribution brings together movement, camera control, momentum and player interactions in a completed team game. The central character alternates between controlled navigation and fast, slippery tornado movement, responding to the level’s slopes, collisions, pickups and hazards.',
    fr: 'Ma contribution réunit le déplacement, la caméra, la gestion de l’élan et les interactions du joueur dans un jeu d’équipe terminé. Le personnage alterne entre une navigation précise et un mouvement rapide et glissant en tornade, en réagissant aux pentes, aux collisions, aux objets à ramasser et aux dangers du niveau.',
  },
  availability: {
    en: 'A public team write-up and Fibery documentation are linked. Fibery may require workspace access. A verified public playable build is not currently linked.',
    fr: 'Une présentation publique de l’équipe et la documentation Fibery sont liées. Fibery peut nécessiter un accès à l’espace de travail. Aucune version jouable publique vérifiée n’est actuellement liée.',
  },
  media: [grouillereArtwork],
  code: [],
};
