// Evidence: V05 local source snapshot and the team's technical proof/reflection.
// Ownership and source provenance are documented in docs/project-case-studies.md.
export const strawV05CaseStudy = {
  role: {
    en: 'Gameplay programmer · Character controllers, cameras and interactions',
    fr: 'Programmeur gameplay · Contrôleurs, caméras et interactions',
  },
  intro: {
    en: 'Straw and Feathers grew from my first two-character prototype into a more advanced university team prototype, V05, in 2026. I developed the scarecrow and crow controllers, their cameras and switching, then added reusable interactions and integrated the team’s animations. V05 brings that work into a rough level with models, textures, animations and effects created by my teammates. The game was not selected for continued school production.',
    fr: 'Straw and Feathers est passé de mon premier prototype à deux personnages à un prototype universitaire en équipe plus avancé, la V05, en 2026. J’ai développé les contrôleurs de l’épouvantail et du corbeau, leurs caméras et le passage entre les deux, puis ajouté des interactions réutilisables et intégré les animations de l’équipe. La V05 réunit ce travail dans un niveau encore sommaire, avec des modèles, textures, animations et effets réalisés par mes coéquipiers. Le jeu n’a pas été retenu pour poursuivre la production à l’école.',
  },
  systems: [
    {
      title: { en: 'A custom scarecrow controller', fr: 'Un contrôleur personnalisé pour l’épouvantail' },
      body: {
        en: 'I built the ground movement around walking and falling states, with movement relative to the camera and character facing that follows the player’s direction. Jump buffering remembers an input just before landing, while coyote time allows a brief window after leaving an edge. Movement and camera settings remain adjustable through presets so they can be tuned alongside the level.',
        fr: 'J’ai construit le déplacement au sol autour d’états de marche et de chute, avec des commandes relatives à la caméra et une orientation du personnage qui suit la direction du joueur. La mémorisation du saut conserve une commande pressée juste avant l’atterrissage, tandis qu’une courte tolérance permet de sauter après avoir quitté un bord. Les réglages de déplacement et de caméra restent ajustables pour les adapter au niveau.',
      },
    },
    {
      title: { en: 'Flight built for the crow', fr: 'Un déplacement en vol propre au corbeau' },
      body: {
        en: 'I implemented a separate flight controller with horizontal movement, ascent and descent. Acceleration and braking are tuned independently, and a ground-clearance check keeps the crow above nearby surfaces. The crow turns toward its travel direction, with visual pitch and roll to support the motion. Carrying an object can reduce its movement speed through that object’s settings.',
        fr: 'J’ai implémenté un contrôleur de vol distinct qui gère le déplacement horizontal, la montée et la descente. L’accélération et le freinage se règlent séparément, et une vérification de la distance au sol maintient le corbeau au-dessus des surfaces proches. Il s’oriente dans sa direction de déplacement, avec une inclinaison visuelle qui accompagne le mouvement. Les réglages de l’objet transporté peuvent réduire sa vitesse.',
      },
    },
    {
      title: { en: 'Switching control and camera together', fr: 'Transférer le contrôle et la caméra ensemble' },
      body: {
        en: 'Switching characters coordinates two pawns, their input and their cameras. I clear both characters’ pending input, blend toward the new view and transfer possession while tracking the transition. The crow returns to its perch on the scarecrow when control switches back. Collision checks prevent a blocked departure, and a failed switch restores the previous character and view.',
        fr: 'Le changement de personnage coordonne les deux personnages, leurs entrées et leurs caméras. Je réinitialise les commandes en attente, effectue une transition vers la nouvelle vue et transfère le contrôle en suivant l’état du changement. Le corbeau revient sur son perchoir sur l’épouvantail lors du retour. Des vérifications de collision empêchent un départ obstrué, et un changement échoué restaure le personnage et la vue précédents.',
      },
    },
    {
      title: { en: 'Reusable carrying and object receivers', fr: 'Un transport d’objets et des récepteurs réutilisables' },
      body: {
        en: 'I made carrying a component that can be added to different objects. The crow selects a nearby reachable object, grabs it and releases it with its current movement velocity; switching away also drops what it holds. Receivers accept configured item types and expose accepted or rejected events to Blueprints. This lets the team build interactions without rewriting the grab-and-drop code for every prop.',
        fr: 'J’ai fait du transport un composant que l’on peut ajouter à différents objets. Le corbeau sélectionne un objet proche et accessible, le saisit et le relâche avec sa vitesse de déplacement; changer de personnage fait aussi lâcher l’objet. Les récepteurs acceptent des types d’objets configurables et exposent des événements d’acceptation ou de refus aux Blueprints. L’équipe peut ainsi créer des interactions sans réécrire le code de prise et de lâcher pour chaque accessoire.',
      },
    },
    {
      title: { en: 'Connecting the censer to the scarecrow’s aura', fr: 'Relier l’encensoir à l’aura de l’épouvantail' },
      body: {
        en: 'I implemented the censer’s activation around the scarecrow’s aura. A carried censer, or one placed on a receiver, can light when it enters the activation radius. It keeps that state while carried or attached to a receiver and turns off when freely dropped. A state-change event lets Blueprint presentation respond, keeping the interaction rule separate from the visual effect.',
        fr: 'J’ai implémenté l’activation de l’encensoir autour de l’aura de l’épouvantail. Un encensoir transporté ou placé sur un récepteur peut s’allumer lorsqu’il entre dans le rayon d’activation. Il conserve cet état tant qu’il est porté ou attaché à un récepteur, puis s’éteint lorsqu’il est lâché librement. Un événement de changement d’état permet aux Blueprints de réagir et sépare la règle d’interaction de son effet visuel.',
      },
    },
    {
      title: { en: 'Integrating the team’s character animations', fr: 'Intégrer les animations de personnages de l’équipe' },
      body: {
        en: 'I integrated the animations created by my teammates with the character controllers. This connected my movement and switching work to the team’s visual production as the prototype moved beyond its first version. My contribution was the gameplay integration; the character models, textures, animation assets and effects were team work.',
        fr: 'J’ai intégré les animations réalisées par mes coéquipiers aux contrôleurs des personnages. Ce travail a relié mes systèmes de déplacement et de changement de personnage à la production visuelle de l’équipe, au-delà de la première version du prototype. Ma contribution portait sur l’intégration au gameplay; les modèles, textures, animations et effets ont été réalisés par l’équipe.',
      },
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
    en: 'V05 is an advanced prototype from the 2026 university project, bringing my controllers, cameras, switching and interactions into a rough level with the team’s models, textures, animations and effects. Teammates also developed the crow vision, traps and respawn, scare ability and enemies. The game was not selected for continued school production; this case study presents the prototype we reached and my contribution to it.',
    fr: 'La V05 est un prototype avancé du projet universitaire de 2026. Elle réunit mes contrôleurs, caméras, changements de personnage et interactions dans un niveau sommaire, avec les modèles, textures, animations et effets de l’équipe. Mes coéquipiers ont également développé la vision du corbeau, les pièges et la réapparition, la capacité d’effrayer et les ennemis. Le jeu n’a pas été retenu pour poursuivre la production à l’école; cette présentation porte sur le prototype atteint et sur ma contribution.',
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
