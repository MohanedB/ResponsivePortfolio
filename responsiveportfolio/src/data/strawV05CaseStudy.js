// Evidence: V05 local source snapshot, full Fibery task inventory and technical reflection.
// Ownership and source provenance are documented in docs/project-case-studies.md.
export const strawV05CaseStudy = {
  role: {
    en: 'Gameplay programmer · Controllers, interactions, animation integration and technical/QA work',
    fr: 'Programmeur gameplay · Contrôleurs, interactions, intégration des animations et travail technique/QA',
  },
  intro: {
    en: 'Straw and Feathers grew from my first two-character prototype into a more advanced university team prototype, V05, in 2026. I developed the scarecrow and crow controllers, cameras, switching, carrying, receivers and censer behavior. I also integrated character animations, connected animation timing to gameplay, adapted death handling, co-authored technical and QA documentation, and took part in technical oversight and consultation. This page follows the team’s Fibery tasks and my technical reflection, alongside the V05 source. The game was not selected for continued school production; the prototype’s models, textures, animations and effects were created by my teammates.',
    fr: 'Straw and Feathers est passé de mon premier prototype à deux personnages à un prototype universitaire en équipe plus avancé, la V05, en 2026. J’ai développé les contrôleurs de l’épouvantail et du corbeau, les caméras, le changement de personnage, le transport d’objets, les récepteurs et le comportement de l’encensoir. J’ai aussi intégré les animations, synchronisé leur déroulement avec le gameplay, adapté la gestion de la mort, corédigé la documentation technique et QA, et participé au suivi technique et aux consultations. Cette page s’appuie sur les tâches Fibery de l’équipe, ma réflexion technique et le code de la V05. Le jeu n’a pas été retenu pour poursuivre la production à l’école; les modèles, textures, animations et effets du prototype ont été réalisés par mes coéquipiers.',
  },
  systemsTitle: { en: 'My work, task by task', fr: 'Mon travail, tâche par tâche' },
  sourcesNote: {
    en: 'The linked tasks record my implementation, shared work, oversight and consultation roles. All 18 tasks below are marked Done in Fibery; remaining validation notes are identified where relevant. Fibery links may require access to the team’s workspace.',
    fr: 'Les tâches liées précisent mes rôles de réalisation, de travail partagé, de suivi et de consultation. Les 18 tâches ci-dessous sont marquées Done dans Fibery; les notes de validation restantes sont signalées lorsqu’elles s’appliquent. Les liens Fibery peuvent nécessiter un accès à l’espace de travail de l’équipe.',
  },
  systems: [
    {
      title: { en: 'A custom scarecrow controller', fr: 'Un contrôleur personnalisé pour l’épouvantail' },
      body: {
        en: 'I built the ground movement around walking and falling states, with movement relative to the camera and character facing that follows the player’s direction. Jump buffering remembers an input just before landing, while coyote time allows a brief window after leaving an edge. Movement and camera settings remain adjustable through presets so they can be tuned alongside the level.',
        fr: 'J’ai construit le déplacement au sol autour d’états de marche et de chute, avec des commandes relatives à la caméra et une orientation du personnage qui suit la direction du joueur. La mémorisation du saut conserve une commande pressée juste avant l’atterrissage, tandis qu’une courte tolérance permet de sauter après avoir quitté un bord. Les réglages de déplacement et de caméra restent ajustables pour les adapter au niveau.',
      },
      sources: [
        { label: { en: 'Task 38 · Scarecrow movement', fr: 'Tâche 38 · Déplacement de l’épouvantail' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/38' },
      ],
    },
    {
      title: { en: 'Flight built for the crow', fr: 'Un déplacement en vol propre au corbeau' },
      body: {
        en: 'I implemented a separate flight controller with horizontal movement, ascent and descent. Acceleration and braking are tuned independently, and a ground-clearance check keeps the crow above nearby surfaces. The crow turns toward its travel direction, with visual pitch and roll to support the motion. Carrying an object can reduce its movement speed through that object’s settings.',
        fr: 'J’ai implémenté un contrôleur de vol distinct qui gère le déplacement horizontal, la montée et la descente. L’accélération et le freinage se règlent séparément, et une vérification de la distance au sol maintient le corbeau au-dessus des surfaces proches. Il s’oriente dans sa direction de déplacement, avec une inclinaison visuelle qui accompagne le mouvement. Les réglages de l’objet transporté peuvent réduire sa vitesse.',
      },
      sources: [
        { label: { en: 'Task 43 · Crow flight', fr: 'Tâche 43 · Vol du corbeau' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/43' },
      ],
    },
    {
      title: { en: 'Switching control and camera together', fr: 'Transférer le contrôle et la caméra ensemble' },
      body: {
        en: 'Switching characters coordinates two pawns, their input and their cameras. I clear both characters’ pending input, blend toward the new view and transfer possession while tracking the transition. The crow returns to its perch on the scarecrow when control switches back. Collision checks prevent a blocked departure, and a failed switch restores the previous character and view.',
        fr: 'Le changement de personnage coordonne les deux personnages, leurs entrées et leurs caméras. Je réinitialise les commandes en attente, effectue une transition vers la nouvelle vue et transfère le contrôle en suivant l’état du changement. Le corbeau revient sur son perchoir sur l’épouvantail lors du retour. Des vérifications de collision empêchent un départ obstrué, et un changement échoué restaure le personnage et la vue précédents.',
      },
      sources: [
        { label: { en: 'Task 37 · Character and camera switching', fr: 'Tâche 37 · Changement de personnage et de caméra' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/37' },
      ],
    },
    {
      title: { en: 'A reusable grab, carry and drop system', fr: 'Un système réutilisable de prise, de transport et de lâcher' },
      body: {
        en: 'I created the crow’s grab/drop behavior and the automatic drop when switching characters. The crow selects a nearby reachable object, carries it visibly and releases it with its movement velocity.\n\nI refactored the original carryable Actor into a reusable CarryableComponent, so an object can remain transportable while also having another behavior, such as being a trap. I added a standard way to retrieve its physics component and kept configuration in a Data Asset, separate from runtime state. This lets new objects reuse the carrying rules without inheriting a special-purpose actor.',
        fr: 'J’ai créé la prise et le lâcher d’objets par le corbeau, ainsi que le lâcher automatique lors d’un changement de personnage. Le corbeau sélectionne un objet proche et accessible, le transporte de façon visible et le relâche avec sa vitesse de déplacement.\n\nJ’ai remplacé l’ancien Actor transportable par un CarryableComponent réutilisable. Un objet peut ainsi rester transportable tout en ayant un autre comportement, par exemple celui d’un piège. J’ai ajouté une façon commune de récupérer son composant physique et conservé la configuration dans un Data Asset, séparément de l’état d’exécution. De nouveaux objets peuvent donc réutiliser ces règles sans hériter d’un acteur spécialisé.',
      },
      sources: [
        { label: { en: 'Task 40 · Crow carrying', fr: 'Tâche 40 · Transport par le corbeau' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/40' },
      ],
    },
    {
      title: { en: 'Compatible receivers, hooks and a door response', fr: 'Des récepteurs compatibles, des crochets et une porte' },
      body: {
        en: 'I created InteractionItemComponent and InteractionReceiverComponent to match objects with compatible receivers through Item Type and Accepted Item Types. The same grab/drop input attempts placement on a nearby receiver, keeps the object carried when it is rejected, and drops normally when no receiver is available. OnItemAccepted and OnItemRejected expose the result to Blueprints.\n\nFor the censer puzzle, I connected the censer and BP_Hook: accepted placement disables physics and attaches the object to HookPoint. The hook’s DoorToOpen reference connects a lit censer to hiding the door and disabling its collision. I also improved detection around collision surfaces and component centers, retained obstacle checks, and exposed InteractionRadius independently of GrabRadius.\n\nThe prototype still had final validation notes for receiver compatibility, normal dropping, door collision and visibility, and placement detection.',
        fr: 'J’ai créé InteractionItemComponent et InteractionReceiverComponent pour associer les objets aux récepteurs compatibles grâce à Item Type et Accepted Item Types. Le même bouton de prise/lâcher tente un placement sur un récepteur proche, conserve l’objet porté en cas de refus et le lâche normalement lorsqu’aucun récepteur n’est disponible. OnItemAccepted et OnItemRejected transmettent le résultat aux Blueprints.\n\nPour l’énigme de l’encensoir, j’ai relié l’objet à BP_Hook : un placement accepté désactive la physique et attache l’objet à HookPoint. La référence DoorToOpen du crochet relie un encensoir allumé au masquage de la porte et à la désactivation de sa collision. J’ai aussi amélioré la détection autour des surfaces de collision et du centre des composants, conservé les vérifications d’obstacles et exposé InteractionRadius séparément de GrabRadius.\n\nLe prototype conservait des notes de validation finale sur la compatibilité des récepteurs, le lâcher normal, la visibilité et la collision de la porte, ainsi que la détection du placement.',
      },
      sources: [
        { label: { en: 'Task 62 · Item receivers', fr: 'Tâche 62 · Récepteurs d’objets' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/62' },
        { label: { en: 'My technical reflection · Hook and door integration', fr: 'Ma réflexion technique · Intégration du crochet et de la porte' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/13753' },
      ],
    },
    {
      title: { en: 'Connecting the censer to the scarecrow’s aura', fr: 'Relier l’encensoir à l’aura de l’épouvantail' },
      body: {
        en: 'I implemented the censer’s activation around the scarecrow’s aura, whether it is held by the crow or already attached to a receiver. It keeps its active state while carried or attached and turns off when freely dropped. A state-change event lets Blueprint presentation respond, keeping the interaction rule separate from the visual effect.\n\nI added a Data Asset to tune the activation radius and a debug display to visualize the zone. I was responsible for the censer’s behavior; its model and visual effects were created by teammates.',
        fr: 'J’ai implémenté l’activation de l’encensoir autour de l’aura de l’épouvantail, qu’il soit porté par le corbeau ou déjà accroché à un récepteur. Il conserve son état actif tant qu’il est porté ou attaché et s’éteint lorsqu’il est lâché librement. Un événement de changement d’état permet aux Blueprints de réagir et sépare la règle d’interaction de l’effet visuel.\n\nJ’ai ajouté un Data Asset pour régler le rayon d’activation et un affichage de debug pour visualiser cette zone. J’étais responsable du comportement de l’encensoir; son modèle et ses effets visuels ont été créés par mes coéquipiers.',
      },
      sources: [
        { label: { en: 'Task 63 · Censer activation', fr: 'Tâche 63 · Activation de l’encensoir' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/63' },
        { label: { en: 'My technical reflection · Censer behavior', fr: 'Ma réflexion technique · Comportement de l’encensoir' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/13753' },
      ],
    },
    {
      title: { en: 'Animation integration and scare timing', fr: 'Intégration des animations et synchronisation de l’effroi' },
      body: {
        en: 'Starting from the team’s animation assets and an Animation Blueprint already in progress, I connected Plant and Unplant to character switching and continued the jumpscare integration in the ABP.\n\nI synchronized the scare ability and its effects with the animation through Anim Notifies, corrected the return to other animations after the jumpscare, and blocked movement, character switching and repeated triggering during the scare. This extended the scare ability implemented by another programmer. My role was gameplay integration; the animation assets and effects were teammates’ work.\n\nI shared these tasks with the other programmer: Fibery records my oversight role, and my technical reflection details the animation and gameplay changes I implemented.',
        fr: 'À partir des animations de l’équipe et d’un Animation Blueprint déjà commencé, j’ai relié Plant et Unplant au changement de personnage et poursuivi l’intégration du jumpscare dans l’ABP.\n\nJ’ai synchronisé la capacité d’effroi et ses effets avec l’animation grâce aux Anim Notifies, corrigé le retour aux autres animations après le jumpscare et bloqué le déplacement, le changement de personnage et les déclenchements répétés pendant l’effroi. Ce travail complète la capacité développée par un autre programmeur. Mon rôle portait sur l’intégration au gameplay; les animations et les effets ont été réalisés par mes coéquipiers.\n\nJ’ai partagé ces tâches avec l’autre programmeur : Fibery indique mon rôle de suivi, et ma réflexion technique détaille les modifications d’animation et de gameplay que j’ai réalisées.',
      },
      sources: [
        { label: { en: 'Task 57 · Player Animation Blueprint', fr: 'Tâche 57 · Animation Blueprint du joueur' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/57' },
        { label: { en: 'Task 45 · Scare ability', fr: 'Tâche 45 · Capacité d’effroi' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/45' },
        { label: { en: 'My technical reflection · Animation integration', fr: 'Ma réflexion technique · Intégration des animations' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/13753' },
      ],
    },
    {
      title: { en: 'A death hook for animation-aware respawning', fr: 'Un point d’entrée de mort adapté à l’animation' },
      body: {
        en: 'I added HandleDeath as a shared entry point for traps and the witch timer expiring. The C++ BlueprintNativeEvent gives the Blueprint a place to handle the death animation before respawning; the delay belongs to the Blueprint behavior rather than a fixed delay in the C++ hook.\n\nThis was an adaptation to the death and respawn system developed by another programmer. Task 41 records my Accountable role, while my technical reflection identifies the HandleDeath change I implemented.',
        fr: 'J’ai ajouté HandleDeath comme point d’entrée commun pour les pièges et l’expiration du timer de la sorcière. Le BlueprintNativeEvent C++ permet au Blueprint de gérer l’animation de mort avant la réapparition; le délai relève du comportement Blueprint, et non d’un délai fixe dans ce point d’entrée C++.\n\nCette adaptation complète le système de mort et de réapparition développé par un autre programmeur. La tâche 41 indique mon rôle Accountable, tandis que ma réflexion technique précise mon intervention sur HandleDeath.',
      },
      sources: [
        { label: { en: 'Task 41 · Death handling', fr: 'Tâche 41 · Gestion de la mort' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/41' },
        { label: { en: 'My technical reflection · HandleDeath', fr: 'Ma réflexion technique · HandleDeath' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/13753' },
      ],
    },
    {
      title: { en: 'Technical documentation, QA and code organization', fr: 'Documentation technique, QA et organisation du code' },
      body: {
        en: 'I co-authored the technical and quality documentation with the other programmer. The technical document centralized the architecture, movement, cameras and character switching. The QA document established code conventions, Perforce changelist rules, the review process, and file and asset organization. Tasks 49 and 50 record shared Responsible roles; I was also Accountable on the technical document.\n\nWe followed up on those quality rules and corrected nonconforming Perforce changelist descriptions. I also reorganized the Interaction source folder into Carry, Censer, Items, Respawn and Traps to make the code easier to navigate.',
        fr: 'J’ai corédigé la documentation technique et qualité avec l’autre programmeur. Le document technique centralisait l’architecture, les déplacements, les caméras et le changement de personnage. Le document QA définissait les conventions de code, les règles des changelists Perforce, le processus de review et l’organisation des fichiers et assets. Les tâches 49 et 50 indiquent une responsabilité de réalisation partagée; j’étais aussi Accountable sur le document technique.\n\nNous avons suivi le respect de ces règles et corrigé les descriptions de changelists Perforce non conformes. J’ai également réorganisé le dossier source Interaction en Carry, Censer, Items, Respawn et Traps pour faciliter la navigation dans le code.',
      },
      sources: [
        { label: { en: 'Task 49 · Technical document', fr: 'Tâche 49 · Document technique' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/49' },
        { label: { en: 'Task 50 · Quality document', fr: 'Tâche 50 · Document qualité' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/50' },
        { label: { en: 'Technical Design Document', fr: 'Document de conception technique' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/12568' },
        { label: { en: 'Quality Assurance Document', fr: 'Document d’assurance qualité' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/12535' },
      ],
    },
    {
      title: { en: 'Shared integration and technical oversight', fr: 'Intégration partagée et suivi technique' },
      body: {
        en: 'I was Accountable for crow vision, traps and the enemy-crow task, alongside the animation, scare and death tasks described above. I participated in tracking and integrating crow vision, whose programming and shader work were handled by teammates. The traps and enemy-crow implementation also had another programmer assigned as Responsible.\n\nMy role here was technical coordination and integration support. The enemy crow was a temporary Blueprint placeholder used to demonstrate the scare ability, with full AI planned for a later stage.',
        fr: 'J’étais Accountable pour la vision du corbeau, les pièges et la tâche du corbeau ennemi, en plus des tâches d’animation, d’effroi et de mort détaillées plus haut. J’ai participé au suivi et à l’intégration de la vision du corbeau, dont la programmation et le shader étaient réalisés par mes coéquipiers. Un autre programmeur était également Responsible pour l’implémentation des pièges et du corbeau ennemi.\n\nMon rôle portait ici sur la coordination technique et le soutien à l’intégration. Le corbeau ennemi était un élément temporaire en Blueprint destiné à montrer la capacité d’effroi, avec une IA complète prévue pour une étape ultérieure.',
      },
      sources: [
        { label: { en: 'Task 39 · Crow vision oversight', fr: 'Tâche 39 · Suivi de la vision du corbeau' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/39' },
        { label: { en: 'Task 42 · Traps oversight', fr: 'Tâche 42 · Suivi des pièges' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/42' },
        { label: { en: 'Task 68 · Enemy-crow prototype', fr: 'Tâche 68 · Prototype du corbeau ennemi' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/68' },
      ],
    },
    {
      title: { en: 'Consultation across art and gameplay tuning', fr: 'Consultation avec l’art et l’ajustement du gameplay' },
      body: {
        en: 'The RACI task records identify me as Consulted on the crow-vision shader, scare visual effects, censer visual effects and core gameplay tuning. I contributed as a technical consultant alongside the teammate creating the shader and effects and the designer responsible for gameplay tuning, connecting programming with art and design.',
        fr: 'La répartition RACI m’identifie comme Consulted pour le shader de vision du corbeau, les effets visuels de l’effroi, ceux de l’encensoir et l’ajustement du gameplay principal. J’ai contribué comme consultant technique aux côtés de la coéquipière chargée du shader et des effets, ainsi que du designer responsable de l’ajustement du gameplay, pour relier programmation, art et design.',
      },
      sources: [
        { label: { en: 'Task 24 · Crow-vision shader', fr: 'Tâche 24 · Shader de vision du corbeau' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/24' },
        { label: { en: 'Task 33 · Scare visual effects', fr: 'Tâche 33 · Effets visuels de l’effroi' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/33' },
        { label: { en: 'Task 34 · Censer visual effects', fr: 'Tâche 34 · Effets visuels de l’encensoir' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/34' },
        { label: { en: 'Task 48 · Core gameplay tuning', fr: 'Tâche 48 · Ajustement du gameplay principal' }, url: 'https://cnm-mtl.fibery.io/StrawAndFeather/Task/48' },
      ],
    },
  ],
  flow: {
    title: { en: 'How my character-switching system coordinates the transition', fr: 'Comment mon système coordonne le changement de personnage' },
    steps: [
      { en: 'Check the destination', fr: 'Vérifier la destination' },
      { en: 'Clear pending input', fr: 'Effacer les commandes en attente' },
      { en: 'Blend the camera and transfer control', fr: 'Déplacer la caméra et transférer le contrôle' },
      { en: 'Confirm the switch or restore the previous state', fr: 'Confirmer le changement ou restaurer l’état précédent' },
    ],
  },
  outcome: {
    en: 'The team reached an advanced university prototype in 2026. My contribution spans character control, cameras, switching, reusable interactions, animation and death-handling integration, shared documentation, QA follow-up and technical collaboration. Fibery records eight tasks with me as Responsible, six additional Accountable roles and four additional Consulted roles, all marked Done. The remaining validation notes and the temporary enemy-crow implementation are preserved above. The game was not selected for continued school production; this case study documents the work completed and the prototype we reached.',
    fr: 'L’équipe a atteint un prototype universitaire avancé en 2026. Ma contribution couvre le contrôle des personnages, les caméras, le changement de personnage, les interactions réutilisables, l’intégration des animations et de la gestion de la mort, la documentation partagée, le suivi QA et la collaboration technique. Fibery recense huit tâches où je suis Responsible, six rôles Accountable supplémentaires et quatre rôles Consulted supplémentaires, tous marqués Done. Les notes de validation restantes et le caractère temporaire du corbeau ennemi sont précisés plus haut. Le jeu n’a pas été retenu pour poursuivre la production à l’école; cette présentation documente le travail accompli et le prototype atteint.',
  },
  availability: {
    en: 'V05 is an advanced prototype. A public playable build is not available here yet.',
    fr: 'La V05 est un prototype avancé. Aucune version jouable publique n’est encore proposée ici.',
  },
  media: [],
  code: [
    {
      title: { en: 'A camera transition coordinated with possession', fr: 'Une transition de caméra coordonnée avec le contrôle' },
      description: {
        en: 'This function is reproduced from the V05 local source snapshot. It clears both characters’ input before blending the camera, locks the outgoing view during the transition and transfers possession under a guard. The blend-complete callback lets the controller finish the switch when the camera transition ends.',
        fr: 'Cette fonction est reproduite depuis la copie locale du code de la V05. Elle efface les commandes des deux personnages avant la transition de caméra, verrouille la vue de départ pendant celle-ci et transfère le contrôle sous la protection d’un indicateur d’état. Le callback de fin de transition permet au contrôleur de terminer le changement lorsque la caméra a fini son déplacement.',
      },
      language: 'cpp',
      code: `void ACounterforcePlayerController::StartCharacterSwitch(APawn* Target, const UCharacterSwitchingDataAsset* Settings)
{
	Scarecrow->ResetControlInput();
	Crow->ResetControlInput();
	RotationInput = FRotator::ZeroRotator;
	RestoreCrowPitchLimits();

	bIsSwitching = true;
	SwitchTarget = Target;
	BlendCameraManager = PlayerCameraManager;
	BlendCompleteHandle = PlayerCameraManager->OnBlendComplete().AddUObject(this, &ThisClass::FinishSwitch);

	FViewTargetTransitionParams Transition;
	Transition.BlendTime = FMath::Max(Settings->CameraBlendDuration, 0.0f);
	Transition.bLockOutgoing = true;

	Super::SetViewTarget(Target, Transition);

	{
		TGuardValue<bool> PossessionGuard(bIsChangingPossession, true);
		Possess(Target);
	}
}`,
      source: {
        file: 'Source/Counterforce/Player/CounterforcePlayerController.cpp',
      },
    },
  ],
};
