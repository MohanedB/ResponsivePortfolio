import CalculatorImg from '../Image/Calculator.png'
import PaysageMelocheImg from '../Image/PaysageMeloche.png'
import PetClinicImg from '../Image/Pet-Clinic.png'
import FallenGodImg from '../Image/FallenGod.png'
import HalalBitesImg from '../Image/HalalBites.png'
import QuickReloadImg from '../Image/QuickReload.png'
import QuizAppImg from "../Image/QuizApp.jpg"
import Fred from "../Image/Fred.jpg"
import Montreal from "../Image/MontrealCityLogo.gif"
import Internship from "../Image/PhotoInternship.png"
import GreatGameOfWar from "../Image/GreatGameOfWar.png"
import RobotLab from "../Image/RobotLab.png"

export const Bio = {
  name: "Mohaned Bouzaidi",
  roles: ["Programmer"],
  description:
    "I am a motivated and versatile Student, always eager to take on new challenges with a passion for learning. I am dedicated to delivering high-quality results with a positive attitude and a great mindset and I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/MohanedB",
  resume:
    "https://drive.google.com/file/d/1gYPWbHka132RoIe99fekqtijmsf_iT0N/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/mohaned-bouzaidi-a7390724a/",
  insta: "https://www.instagram.com/_momo204/",
  facebook: "https://www.facebook.com/mohaned.bouzaidi.7/",
  itch: "https://mohanedbouzaidi.itch.io",
};

// ─── Skills by portfolio mode ────────────────────────────────────────────────

export const skillsByMode = {
  software: [
    {
      titleKey: "skill0",
      skills: [
        { name: "React Js", image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" },
        { name: "EJS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PvXIB8twwKNE3k9ty9oAUcwxLKhrf4yOScQuj0wUMQ&s" },
        { name: "HTML", image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
        { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" },
        { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" },
        { name: "Bootstrap", image: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" },
        { name: "TailWind", image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg" },
      ],
    },
    {
      titleKey: "skill1",
      skills: [
        { name: "Node Js", image: "https://nodejs.org/static/images/logo.svg" },
        { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "MySQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
        { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
        { name: "Firebase", image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        { name: "Java", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        { name: "PHP", image: "https://img.icons8.com/?size=256&id=UGYn5TapNioV&format=png" },
      ],
    },
    {
      titleKey: "skill2",
      skills: [
        { name: "Git", image: "https://img.icons8.com/?size=256&id=20906&format=png" },
        { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
        { name: "Docker", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
        { name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" },
        { name: "Postman", image: "https://img.icons8.com/?size=256&id=QEQQKirln6Tf&format=png" },
        { name: "Figma", image: "https://img.icons8.com/?size=256&id=zfHRZ6i1Wg0U&format=png" },
        { name: "Linux", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Linux_Logo_in_Linux_Libertine_Font.svg/1200px-Linux_Logo_in_Linux_Libertine_Font.svg.png" },
      ],
    },
  ],

  gamedev: [
    {
      titleKey: "skill_gd0",
      skills: [
        { name: "Unity", image: "https://www.svgrepo.com/show/331626/unity.svg" },
        { name: "Unreal Engine", image: "https://cdn2.unrealengine.com/ue-logotype-2023-vertical-white-1686x2048-bbfded26daa7.png" },
        { name: "C#", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png" },
        { name: "C++", image: "https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000" },
        { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      ],
    },
    {
      titleKey: "skill_gd1",
      skills: [
        { name: "Git", image: "https://img.icons8.com/?size=256&id=20906&format=png" },
        { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
        { name: "Visual Studio", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" },
        { name: "Xcode", image: "https://icon.icepanel.io/Technology/svg/Xcode.svg" },
        { name: "Linux", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Linux_Logo_in_Linux_Libertine_Font.svg/1200px-Linux_Logo_in_Linux_Libertine_Font.svg.png" },
        { name: "Figma", image: "https://img.icons8.com/?size=256&id=zfHRZ6i1Wg0U&format=png" },
      ],
    },
  ],
};

// Keep the original `skills` export for backward compatibility if needed
export const skills = skillsByMode.software;

// ─── Education ───────────────────────────────────────────────────────────────

export const education = [
  {
    id: 0,
    img: "",
    schoolKey: "education3",
    dateKey: "education2",
    grade: "27.6",
    descKey: "education0",
    degreeKey: "education1",
  },
  {
    id: 1,
    img: "",
    schoolKey: "NEDU1",
    dateKey: "NEDU2",
    grade: "n/a",
    descKey: "NEDU3",
    degreeKey: "NEDU4",
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export const experiences = [
  {
    id: 0,
    img: Montreal,
    role: "exper1",
    company: "exper2",
    date: "exper3",
    desc: "exper4",
    skills: ["NodeJS", "EJS", "Visual Studio code", "ONE UEM"],
    doc: "",
  },
  {
    id: 1,
    img: Montreal,
    role: "exper7",
    company: "exper2",
    date: "exper9",
    desc: "exper10",
    skills: ["Active Directory", "Microsoft 365", "ServiceNow", "Windows 10", "Windows 11", "Remote Desktop"],
    doc: "",
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────
// portfolioMode: "software" | "gamedev" | "both"

export const projects = [
  {
    id: 1,
    titleKey: "education10",
    dateKey: "education11",
    descriptionKey: "education12",
    image: PaysageMelocheImg,
    tags: ["ReactJs", "Visual Studio Code", "NodeJS", "MongoDB", "Jira"],
    mainCategory: "Cegep",
    subCategory: "YEAR3",
    portfolioMode: "software",
    github: "https://github.com/Carstal/paysages-meloche",
    webapp: "",
    members: [
      { name: "John Doe", img: "https://example.com/john_doe.png", linkedin: "https://www.linkedin.com/in/johndoe/", github: "https://github.com/johndoe" }
    ],
    whatIDidKey: "proj1_whatIDid",
    proudCodeLang: "JavaScript",
    proudCodeDescKey: "proj1_proudCodeDesc",
    proudCode: `// POST /api/schedules — create with conflict check
router.post('/', async (req, res) => {
  const { workerId, start, end } = req.body;

  const conflict = await Schedule.findOne({
    workerId,
    $or: [{ start: { $lt: end }, end: { $gt: start } }],
  });

  if (conflict) {
    return res.status(409).json({ error: 'Schedule conflict detected' });
  }

  const schedule = await Schedule.create({ workerId, start, end });
  res.status(201).json(schedule);
});`,
  },
  {
    id: 2,
    titleKey: "education19",
    dateKey: "education20",
    descriptionKey: "education21",
    image: HalalBitesImg,
    tags: ["JavaScript", "Visual Studio Code", "IntelliJ", "ReactJs", "Java SpringBoot", "MySQL", "Jira"],
    mainCategory: "Cegep",
    subCategory: "YEAR3",
    portfolioMode: "software",
    github: "https://halalbites.onrender.com/",
    webapp: "",
    members: [],
    whatIDidKey: "proj2_whatIDid",
    proudCodeLang: "Java",
    proudCodeDescKey: "proj2_proudCodeDesc",
    proudCode: `@GetMapping("/api/restaurants/search")
public ResponseEntity<List<Restaurant>> search(
    @RequestParam String query,
    @RequestParam(required = false) String cuisine,
    @RequestParam(defaultValue = "false") boolean halalOnly) {

  List<Restaurant> results = restaurantService
      .search(query, cuisine, halalOnly);

  return ResponseEntity.ok(results);
}`,
  },
  {
    id: 3,
    titleKey: "education13",
    dateKey: "education14",
    descriptionKey: "education15",
    image: PetClinicImg,
    tags: ["JavaScript", "Visual Studio Code", "Git Hub", "Jira"],
    mainCategory: "Cegep",
    subCategory: "YEAR3",
    portfolioMode: "software",
    github: "https://github.com/istiaque-champ/champ_petclinic",
    webapp: "",
    members: [],
    whatIDidKey: "proj3_whatIDid",
    proudCodeLang: "JavaScript",
    proudCodeDescKey: "proj3_proudCodeDesc",
    proudCode: `// Filter appointments within a date range
function filterByRange(appointments, from, to) {
  const start = new Date(from);
  const end   = new Date(to);

  return appointments.filter(appt => {
    const date = new Date(appt.date);
    return date >= start && date <= end;
  });
}`,
  },
  {
    id: 4,
    titleKey: "education25",
    dateKey: "education26",
    descriptionKey: "education27",
    image: Internship,
    tags: ["EJS", "Visual Studio", "NodeJS", "ONE UEM"],
    mainCategory: "Cegep",
    subCategory: "YEAR3",
    portfolioMode: "software",
    github: "",
    webapp: "",
    members: [],
    whatIDidKey: "proj4_whatIDid",
    proudCodeLang: "JavaScript",
    proudCodeDescKey: "proj4_proudCodeDesc",
    proudCode: `// Split devices into N equal groups
function splitIntoGroups(devices, groupCount) {
  const groups = Array.from({ length: groupCount }, () => []);

  devices.forEach((device, i) => {
    groups[i % groupCount].push(device);
  });

  return groups;
}`,
  },
  {
    id: 5,
    titleKey: "education4",
    dateKey: "education5",
    descriptionKey: "education6",
    image: CalculatorImg,
    tags: ["C#", "Visual Studio", "XAML"],
    mainCategory: "Cegep",
    subCategory: "YEAR1",
    portfolioMode: "gamedev",
    github: "https://github.com/MohanedB/Calculator",
    webapp: "",
    members: [],
    whatIDidKey: "proj5_whatIDid",
    proudCodeLang: "C#",
    proudCodeDescKey: "proj5_proudCodeDesc",
    proudCode: `private double Evaluate(double left, double right, string op)
{
    return op switch
    {
        "+" => left + right,
        "-" => left - right,
        "*" => left * right,
        "/" => right != 0 ? left / right
                          : throw new DivideByZeroException(),
        _   => right,
    };
}`,
  },
  {
    id: 6,
    titleKey: "education7",
    dateKey: "education8",
    descriptionKey: "education9",
    image: QuizAppImg,
    tags: ["Firebase", "SwiftUI", "Swift", "Xcode"],
    mainCategory: "Cegep",
    subCategory: "YEAR2",
    portfolioMode: "software",
    github: "https://drive.google.com/drive/folders/1m76YGJ4o-YVeRBAoO9fLtQVap-J3kfFy?usp=sharing",
    webapp: "",
    members: [],
    whatIDidKey: "proj6_whatIDid",
    proudCodeLang: "Swift",
    proudCodeDescKey: "proj6_proudCodeDesc",
    proudCode: `func fetchQuestions(amount: Int) async throws -> [Question] {
    let url = URL(string: "https://opentdb.com/api.php?amount=\\(amount)")!
    let (data, _) = try await URLSession.shared.data(from: url)
    let response = try JSONDecoder().decode(TriviaResponse.self, from: data)

    return response.results.map { q in
        var answers = q.incorrectAnswers + [q.correctAnswer]
        answers.shuffle()
        return Question(text: q.question,
                        answers: answers,
                        correct: q.correctAnswer)
    }
}`,
  },
  {
    id: 7,
    titleKey: "education16",
    dateKey: "education17",
    descriptionKey: "education18",
    image: FallenGodImg,
    tags: ["Unity", "C#", "Git Hub", "Visual Studio", "Game"],
    mainCategory: "Cegep",
    subCategory: "YEAR2",
    portfolioMode: "gamedev",
    github: "https://github.com/ShadowFever3/FinalProject2D",
    webapp: "",
    members: [
      { name: "Fred", img: Fred, linkedin: "https://www.linkedin.com/in/frédéric-vezina/", github: "" }
    ],
    whatIDidKey: "proj7_whatIDid",
    proudCodeLang: "C#",
    proudCodeDescKey: "proj7_proudCodeDesc",
    proudCode: `private void UpdateState()
{
    switch (_state)
    {
        case EnemyState.Patrol:
            Patrol();
            if (CanSeePlayer()) SetState(EnemyState.Chase);
            break;

        case EnemyState.Chase:
            ChasePlayer();
            if (IsInAttackRange())  SetState(EnemyState.Attack);
            if (!CanSeePlayer())    SetState(EnemyState.Patrol);
            break;

        case EnemyState.Attack:
            AttackPlayer();
            if (!IsInAttackRange()) SetState(EnemyState.Chase);
            break;
    }
}`,
  },
  {
    id: 8,
    titleKey: "education22",
    dateKey: "education23",
    descriptionKey: "education24",
    image: QuickReloadImg,
    tags: ["Unity", "Visual Studio", "C#", "GitHub", "Game"],
    mainCategory: "Cegep",
    subCategory: "YEAR3",
    portfolioMode: "gamedev",
    github: "https://github.com/MohanedB/QuickReload",
    webapp: "",
    members: [],
    whatIDidKey: "proj8_whatIDid",
    proudCodeLang: "C#",
    proudCodeDescKey: "proj8_proudCodeDesc",
    proudCode: `IEnumerator Reload()
{
    _isReloading = true;
    reloadBar.gameObject.SetActive(true);

    float elapsed = 0f;
    while (elapsed < reloadTime)
    {
        elapsed += Time.deltaTime;
        reloadBar.value = elapsed / reloadTime;
        yield return null;
    }

    _currentAmmo = maxAmmo;
    reloadBar.gameObject.SetActive(false);
    _isReloading = false;
}`,
  },
  {
    id: 9,
    titleKey: "UEDU1",
    dateKey: "UEDU2",
    descriptionKey: "UEDU3",
    image: RobotLab,
    tags: ["Unity", "Visual Studio", "C#", "GitHub", "Math"],
    mainCategory: "University",
    subCategory: "YEAR1",
    portfolioMode: "gamedev",
    github: "https://github.com/MohanedB/CarMathProject-H02",
    webapp: "",
    members: [],
    whatIDidKey: "proj9_whatIDid",
    proudCodeLang: "C#",
    proudCodeDescKey: "proj9_proudCodeDesc",
    proudCode: `void Update()
{
    float move   = Input.GetAxis("Vertical")   * speed * Time.deltaTime;
    float rotate = Input.GetAxis("Horizontal") * turnSpeed * Time.deltaTime;

    transform.Translate(Vector3.forward * move);
    transform.Rotate(Vector3.up * rotate);

    // Spin wheels proportional to movement
    float wheelSpin = (move / wheelRadius) * Mathf.Rad2Deg;
    foreach (var wheel in wheels)
        wheel.Rotate(Vector3.right * wheelSpin);
}`,
  },
  {
    id: 10,
    titleKey: "UEDU4",
    dateKey: "UEDU5",
    descriptionKey: "UEDU6",
    image: GreatGameOfWar,
    tags: ["Unity", "Visual Studio", "C#", "GitHub", "Game"],
    mainCategory: "University",
    subCategory: "YEAR1",
    portfolioMode: "gamedev",
    github: "https://github.com/UQATM/GameJam2025-UQATM",
    webapp: "",
    members: [],
    whatIDidKey: "proj10_whatIDid",
    proudCodeLang: "C#",
    proudCodeDescKey: "proj10_proudCodeDesc",
    proudCode: `IEnumerator SpawnWave(int waveNumber)
{
    int count = Mathf.Min(baseCount + waveNumber * 2, maxEnemies);
    float interval = Mathf.Max(minInterval, spawnInterval - waveNumber * 0.1f);

    for (int i = 0; i < count; i++)
    {
        Instantiate(enemyPrefab, spawnPoint.position, Quaternion.identity);
        yield return new WaitForSeconds(interval);
    }
}`,
  },
];