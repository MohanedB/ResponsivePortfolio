import { strawV05CaseStudy } from './strawV05CaseStudy';
import { boustreamingCaseStudy } from './boustreamingCaseStudy';
import { grouillereCaseStudy } from './grouillereCaseStudy';
import archiverifHome from '../Image/case-studies/archiverif-home.png';
import archiverifWorkflow from '../Image/case-studies/archiverif-document-workflow.png';

// Content verified against source snapshots and the developer's stated role.
// Research and media provenance: docs/project-case-studies.md.
export const caseStudies = {
  archiverif: {
    role: {
      en: 'Sole developer · Product, frontend and backend',
      fr: 'Développeur unique · Produit, interface et backend',
    },
    intro: {
      en: 'I designed and built ARCHIVERIF to bring subcontractor document collection and Québec registry monitoring into one bilingual product. My work covers the Next.js interface, FastAPI backend, database, integrations and deployment.',
      fr: 'J’ai conçu et développé ARCHIVERIF pour réunir la collecte de documents des sous-traitants et la surveillance des registres du Québec dans un produit bilingue. Mon travail couvre l’interface Next.js, le backend FastAPI, la base de données, les intégrations et le déploiement.',
    },
    systems: [
      {
        title: { en: 'Document collection without another account', fr: 'Recueillir les documents sans créer un autre compte' },
        body: {
          en: 'I built a request flow around expiring upload links. Subcontractors submit the requested PDFs without signing up. The backend checks the link before processing the file, parses supported document types in memory and checks the company number. A rejected upload leaves the link available for another attempt; custom documents are stored as supplied.',
          fr: 'J’ai créé un parcours fondé sur des liens de téléversement à durée limitée. Les sous-traitants transmettent les PDF demandés sans s’inscrire. Le backend vérifie le lien avant de traiter le fichier, lit les types de documents pris en charge en mémoire et vérifie le numéro d’entreprise. Un envoi rejeté laisse le lien disponible pour réessayer; les documents personnalisés sont conservés tels quels.',
        },
      },
      {
        title: { en: 'Reminders tied to the document’s expiry', fr: 'Des rappels liés à l’échéance du document' },
        body: {
          en: 'Scheduled jobs send reminders at lead times selected for each document type. Notification history prevents repeated reminders for the same expiry, while catch-up windows handle a missed run. The interface and backend use the Montréal calendar so crossing midnight on a UTC server does not mark a document expired while it is still valid locally.',
          fr: 'Des tâches planifiées envoient les rappels selon des délais adaptés au type de document. L’historique évite de répéter un rappel pour la même échéance, et des périodes de rattrapage couvrent une exécution manquée. L’interface et le backend suivent le calendrier de Montréal pour éviter qu’un passage à minuit UTC rende un document expiré avant la fin de sa journée locale.',
        },
      },
      {
        title: { en: 'Turning registry snapshots into changes', fr: 'Transformer les données des registres en changements utiles' },
        body: {
          en: 'I implemented scheduled ingestion for RBQ, RENA, REA and OQLF information. A comparison layer distinguishes new records, status transitions and disappeared licences. Relevant changes feed notifications and invalidate cached company and project views. Each source has its own collection strategy, including targeted lookups for watched company numbers.',
          fr: 'J’ai mis en place l’ingestion planifiée des informations RBQ, RENA, REA et OQLF. Une couche de comparaison distingue les nouvelles entrées, les changements de statut et les licences disparues. Les changements pertinents alimentent les notifications et invalident les vues d’entreprises et de projets mises en cache. Chaque source suit sa propre méthode de collecte, dont des recherches ciblées sur les numéros d’entreprises suivies.',
        },
      },
      {
        title: { en: 'Projects built around a shared watchlist', fr: 'Des projets organisés autour d’une liste de suivi commune' },
        body: {
          en: 'A company can belong to several projects without being counted repeatedly for billing. Project operations are scoped to the signed-in client. I also introduced an internal company ID so document collection works for companies without a Québec enterprise number; Québec companies retain their registry lookup capabilities.',
          fr: 'Une entreprise peut appartenir à plusieurs projets sans être comptée plusieurs fois pour la facturation. Les opérations sur les projets sont limitées au client connecté. J’ai aussi introduit un identifiant interne pour recueillir les documents d’entreprises sans numéro d’entreprise du Québec, tout en conservant les recherches dans les registres pour les entreprises québécoises.',
        },
      },
      {
        title: { en: 'One status model across the interface', fr: 'Une logique de statut commune dans l’interface' },
        body: {
          en: 'I developed the French and English interfaces, company search, document badges and watchlist summaries. Shared helpers rank the documents needing attention and supply overview counts and expiry panels from the same data. This keeps the overview consistent with the individual documents behind it.',
          fr: 'J’ai réalisé les interfaces française et anglaise, la recherche d’entreprises, les indicateurs de documents et les résumés de suivi. Des fonctions communes classent les documents à traiter et alimentent les compteurs ainsi que les panneaux d’échéance à partir des mêmes données. Le résumé reste ainsi cohérent avec les documents qu’il représente.',
        },
      },
    ],
    flow: {
      title: { en: 'Document collection workflow', fr: 'Parcours de collecte des documents' },
      steps: [
        { en: 'Request documents', fr: 'Demander les documents' },
        { en: 'Open an expiring upload link', fr: 'Ouvrir un lien à durée limitée' },
        { en: 'Submit and process the PDF', fr: 'Transmettre et traiter le PDF' },
        { en: 'Track its expiry', fr: 'Suivre son échéance' },
        { en: 'Send scheduled reminders', fr: 'Envoyer les rappels planifiés' },
      ],
    },
    outcome: {
      en: 'ARCHIVERIF is a live bilingual product connecting document collection, company monitoring and project organization. Building the entire stack let me carry a product rule—such as when a document expires—from the database and scheduled jobs through to the status visitors see.',
      fr: 'ARCHIVERIF est un produit bilingue en ligne qui relie la collecte de documents, le suivi des entreprises et l’organisation par projets. Réaliser toute la chaîne m’a permis d’appliquer une règle du produit, comme la date d’expiration d’un document, depuis la base de données et les tâches planifiées jusqu’au statut affiché dans l’interface.',
    },
    availability: {
      en: 'The public website is live in English and French. The screenshots below show the public product presentation and its example watchlist.',
      fr: 'Le site public est en ligne en français et en anglais. Les captures ci-dessous présentent le produit et sa liste de suivi d’exemple.',
    },
    media: [
      {
        kind: 'image',
        src: archiverifHome,
        alt: {
          en: 'ARCHIVERIF homepage with document-collection introduction and example registry status panel.',
          fr: 'Accueil d’ARCHIVERIF avec présentation de la collecte de documents et panneau d’exemple des statuts des registres.',
        },
        caption: {
          en: 'The public homepage introduces document collection and illustrates registry signals in an example watchlist.',
          fr: 'La page publique présente la collecte de documents et illustre les signaux des registres dans une liste de suivi d’exemple.',
        },
        credit: { label: 'ARCHIVERIF', url: 'https://archiverif.ca' },
      },
      {
        kind: 'image',
        src: archiverifWorkflow,
        alt: {
          en: 'ARCHIVERIF workflow section with document upload links and automatic registry monitoring.',
          fr: 'Parcours ARCHIVERIF présentant les liens de téléversement et la surveillance automatique des registres.',
        },
        caption: {
          en: 'The public workflow section explains how document upload links and automatic monitoring work together.',
          fr: 'La section publique du parcours explique le fonctionnement des liens de téléversement et de la surveillance automatique.',
        },
        credit: { label: 'ARCHIVERIF', url: 'https://archiverif.ca' },
      },
    ],
    code: [
      {
        title: { en: 'An expiry date follows the local calendar', fr: 'Une échéance suit le calendrier local' },
        description: {
          en: 'The server can already be on tomorrow’s UTC date while it is still evening in Montréal. This shared function uses montrealToday, which formats the date in America/Toronto, to distinguish “expires today” from “expired”. Missing, pending or unusable dates preserve their existing state.',
          fr: 'Le serveur peut déjà être au lendemain en UTC alors qu’il fait encore soir à Montréal. Cette fonction commune utilise montrealToday, qui formate la date dans le fuseau America/Toronto, pour distinguer « expire aujourd’hui » de « expiré ». Les documents manquants, en attente ou sans date exploitable conservent leur état.',
        },
        language: 'typescript',
        code: `export function expiryDisplayStatus(
  expiresAt: string | null,
  fallback: DocStatusValue,
  now: Date = new Date(),
): DocStatusValue {
  if (fallback === 'missing' || fallback === 'pending') return fallback;
  if (!expiresAt) return fallback;
  // Both are date-only ISO strings: parsed as UTC midnights, the difference is
  // a whole number of days on the Montreal calendar.
  const expires = Date.parse(expiresAt.slice(0, 10));
  const today = Date.parse(montrealToday(now));
  if (!Number.isFinite(expires) || !Number.isFinite(today)) return fallback;
  const days = Math.round((expires - today) / 86_400_000);
  if (days < 0) return 'expired';
  if (days === 0) return 'expires_today';
  if (days <= 30) return 'expiring';
  return 'valid';
}`,
        source: {
          file: 'lib/documents.ts',
          revision: '34093ac05f449019dee3ce5185c1ed382fcf425c',
        },
      },
    ],
  },
  'letumloop-tps': {
    role: { en: 'Solo developer · Gameplay, camera and combat', fr: 'Développeur solo · Gameplay, caméra et combat' },
    intro: {
      en: 'I originally built this third-person prototype for my LetumLoop university pitch. The pitch did not advance after the first selection round. The source snapshot presented here includes later technical work on movement, the shoulder camera and a rifle combat loop in Unreal Engine 5 and C++.',
      fr: 'J’ai développé ce prototype à la troisième personne à l’origine pour ma proposition universitaire LetumLoop. Le projet n’a pas été retenu après la première sélection. Le code présenté ici comprend aussi du travail technique ultérieur sur les déplacements, la caméra à l’épaule et une boucle de combat au fusil dans Unreal Engine 5 et C++.',
    },
    systems: [
      {
        title: { en: 'Movement that preserves a near-miss jump', fr: 'Des déplacements qui tolèrent un saut légèrement décalé' },
        body: {
          en: 'I implemented walking and falling states, sprinting, jump buffering and coyote time. A jump pressed just before landing can be remembered briefly, and a jump immediately after leaving a ledge can still be accepted. Releasing jump during ascent applies stronger gravity for a shorter jump. Buffered requests are consumed once.',
          fr: 'J’ai implémenté des états de marche et de chute, le sprint, la mémorisation d’un saut pressé juste avant l’atterrissage et une courte tolérance après avoir quitté une plateforme. Relâcher le saut pendant la montée augmente la gravité pour raccourcir le saut. Chaque demande de saut mémorisée est consommée une seule fois.',
        },
      },
      {
        title: { en: 'A shoulder camera that stays outside walls', fr: 'Une caméra à l’épaule qui reste hors des murs' },
        body: {
          en: 'I built aim transitions and left/right shoulder switching by blending camera distance, field of view and lateral offset. The rifle support position follows the selected shoulder. Camera collision retracts the view immediately to a safe distance, then eases it outward when the obstacle clears, avoiding interpolation through newly blocking geometry.',
          fr: 'J’ai créé les transitions de visée et le changement d’épaule gauche/droite en interpolant la distance, le champ de vision et le décalage latéral. Le support du fusil suit l’épaule choisie. Devant un obstacle, la caméra se rétracte immédiatement à une distance sûre, puis revient progressivement lorsque l’espace se libère.',
        },
      },
      {
        title: { en: 'A visible target still needs a clear muzzle', fr: 'Voir la cible ne suffit pas si le canon est bloqué' },
        body: {
          en: 'The camera chooses the aim point, but the shot is traced from the rifle muzzle. A separate obstruction check between the character and muzzle handles close cover. This addresses a third-person aiming problem: the camera can see around an obstacle while the weapon remains blocked. The first blocking hit stops the shot.',
          fr: 'La caméra choisit le point visé, mais le tir est calculé depuis le canon. Un test distinct entre le personnage et le canon prend en compte les obstacles proches. Il traite un problème de visée à la troisième personne : la caméra peut voir derrière un obstacle alors que l’arme reste bloquée. Le premier impact bloquant arrête le tir.',
        },
      },
      {
        title: { en: 'Automatic fire and reload as explicit states', fr: 'Le tir automatique et le rechargement sous forme d’états' },
        body: {
          en: 'I built the rifle’s automatic fire, magazine and reserve ammunition, and reload state machine. The first shot is immediate; later shots follow a timer derived from the fire rate. Reloading interrupts fire and transfers only the missing ammunition. State-transition checks prevent callbacks from installing timers for a state that has already changed, and gameplay tags expose the weapon state to the ability system.',
          fr: 'J’ai développé le tir automatique, les munitions du chargeur et de réserve ainsi que la machine à états du rechargement. Le premier tir est immédiat; les suivants utilisent un minuteur calculé à partir de la cadence. Le rechargement interrompt le tir et transfère seulement les munitions manquantes. Des vérifications de transition empêchent les callbacks d’installer des minuteurs pour un état déjà remplacé, et des tags exposent l’état de l’arme au système de capacités.',
        },
      },
      {
        title: { en: 'Damage results drive the feedback', fr: 'Le résultat des dégâts pilote le retour visuel' },
        body: {
          en: 'I connected rifle impacts to Unreal’s Gameplay Ability System. Health is clamped, and damage events report the health actually removed so a finishing blow does not exaggerate the result. A reusable damageable actor feeds health feedback; a training dummy restores its health, collision and original transform after death. Ammo, reload and damage events are available to UI and effects.',
          fr: 'J’ai relié les impacts au Gameplay Ability System d’Unreal. La santé est bornée et les événements indiquent les points de vie réellement retirés pour ne pas exagérer un coup final. Un acteur réutilisable alimente le retour sur la santé; un mannequin d’entraînement restaure sa santé, ses collisions et sa transformation initiale après sa mort. Les munitions, le rechargement et les dégâts exposent aussi des événements pour l’interface et les effets.',
        },
      },
    ],
    flow: {
      title: { en: 'Implemented rifle hit flow', fr: 'Parcours implémenté d’un impact de fusil' },
      steps: [
        { en: 'Camera selects aim point', fr: 'La caméra choisit le point visé' },
        { en: 'Check muzzle obstruction', fr: 'Vérifier les obstacles au canon' },
        { en: 'Trace the rifle shot', fr: 'Calculer la trajectoire du tir' },
        { en: 'Apply damage through GAS', fr: 'Appliquer les dégâts avec GAS' },
        { en: 'Update health and feedback', fr: 'Actualiser la santé et le retour visuel' },
      ],
    },
    outcome: {
      en: 'The current source brings together a custom controller, a collision-aware shoulder camera and a rifle training loop. It lets me show the implementation decisions behind a third-person prototype beyond the original school pitch. The technical breakdown is based on the committed source snapshot.',
      fr: 'Le code actuel réunit un contrôleur personnalisé, une caméra à l’épaule qui gère les collisions et une boucle d’entraînement au fusil. Il me permet de présenter les choix d’implémentation d’un prototype à la troisième personne au-delà de la proposition scolaire initiale. Cette présentation technique repose sur une version précise du code source.',
    },
    availability: {
      en: 'This is a development prototype. A public download is not available.',
      fr: 'Il s’agit d’un prototype de développement. Aucun téléchargement public n’est disponible.',
    },
    media: [],
    code: [
      {
        title: { en: 'A short grace period after leaving a ledge', fr: 'Une courte tolérance après le bord d’une plateforme' },
        description: {
          en: 'The controller first checks for a real walkable floor. If the character has just left the ground, the jump remains available only during the one-use coyote window. This preserves the player’s intent when the jump input arrives just after crossing an edge.',
          fr: 'Le contrôleur vérifie d’abord la présence d’un sol praticable. Si le personnage vient de quitter le sol, le saut reste disponible seulement pendant une courte fenêtre à usage unique. Cela préserve l’intention du joueur lorsque la commande arrive juste après avoir franchi un bord.',
        },
        language: 'cpp',
        code: `bool UCounterforceMovementComponent::CanJump_Implementation()
{
	if (IsMovingOnGround())
	{
		FFindFloorResult CurrentFloor;
		FindFloor(CurrentFloor, false);
		if (CurrentFloor.IsWalkableFloor())
		{
			return true;
		}
	}

	const double TimeSinceGrounded = GetMovementTimeSeconds() - LastGroundedTimeSeconds;
	return bCoyoteJumpAvailable
		&& FMath::IsFinite(TimeSinceGrounded)
		&& TimeSinceGrounded >= 0.0
		&& TimeSinceGrounded <= static_cast<double>(GetCoyoteTime());
}`,
        source: {
          file: 'Prototype_V1/Source/Counterforce/Movement/CounterforceMovementComponent.cpp',
          revision: '294662a40f0db48ea42f00015599a931a606d895',
        },
      },
      {
        title: { en: 'Retract immediately; recover smoothly', fr: 'Se rétracter immédiatement, revenir progressivement' },
        description: {
          en: 'Excerpt from BlendLocations. The camera must not interpolate through a wall. It moves directly to a newly required safe distance and interpolates only when there is room to extend again. Invalid timing or a disabled recovery speed also use the safe distance immediately.',
          fr: 'Extrait de BlendLocations. La caméra ne doit pas traverser un mur pendant une interpolation. Elle passe directement à la nouvelle distance sûre et interpole son retour seulement lorsque l’espace le permet. Une durée invalide ou une vitesse de retour désactivée utilise aussi immédiatement la distance sûre.',
        },
        language: 'cpp',
        code: `	const float SafeDistance = bHitSomething
		? FMath::Min(FVector::Distance(TraceOrigin, TraceHitLocation), DesiredDistance)
		: DesiredDistance;
	const bool bMustRetractImmediately = !bIsRecoveringFromCollision
		|| SafeDistance < CurrentCollisionDistance;
	if (bMustRetractImmediately
		|| !FMath::IsFinite(DeltaTime)
		|| DeltaTime <= 0.f
		|| CollisionRecoverySpeed <= 0.f)
	{
		// Interpolating inward could leave the camera behind newly blocking geometry.
		CurrentCollisionDistance = SafeDistance;
	}
	else
	{
		CurrentCollisionDistance = FMath::Min(
			FMath::FInterpTo(CurrentCollisionDistance, SafeDistance, DeltaTime, CollisionRecoverySpeed),
			SafeDistance);
	}`,
        source: {
          file: 'Prototype_V1/Source/Counterforce/Camera/CounterforceCameraBoomComponent.cpp',
          revision: '294662a40f0db48ea42f00015599a931a606d895',
        },
      },
    ],
  },
  'straw-and-feathers': strawV05CaseStudy,
  boustreaming: boustreamingCaseStudy,
  grouillere: grouillereCaseStudy,
};
