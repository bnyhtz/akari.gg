import { Project } from '@/types/project'; // Import Project type

export const projects: Project[] = [
    // --- I Bee Xploring ---
    // NOTES: Add gamescom experience.
  {
    id: 'ibeexploring',
    title: 'I Bee Xploring',
    description: "An Mobile Infinite Runner game where you have to collect pollen and avoid obstacles. The game is set in a 3D world with a bee as the main character.",
    featuredImageUrl: '/projects/IBeeXploring/FeaturedImage.png',
    tags: ['Unity', 'C#', 'Mobile', 'Infinite Runner', 'Birungi Studio'],
    projectInfo: [
        { label: "Engine", value: "Unity Engine" },
        { label: "Language", value: "C#" },
        { label: "Duration", value: "10 weeks (5 days/week)" },
        { label: "Type", value: "Mobile Game" },
        { label: "Reason", value: "Project for Birungi Studio" }
    ],
    contributions: [
      "Created a system for Player Damage Feedback.",
      "Fixed bugs in the game.",
      "Handled IOS beta testing.",
    ],
    contentBlocks: [

      { type: 'heading', level: 3, text: "Work In Progress" },
      { type: 'paragraph', text: "This project is currently still a work in progress. The project page will be updated as soon as there is more to show!" },
      { type: 'heading', level: 3, text: "Damage Feedback" },
      { type: 'paragraph', text: "When the player takes damage, a visual feedback is shown on the screen to indicate the hit. The player gets bounced back, takes damage, stops moving for a brief moment and then recovers." },
      {
        type: 'iframe',
        url: 'https://www.youtube-nocookie.com/embed/8bECTOfU5KA',
        title: 'Player Damage Feedback',
        description: "Visual representation of the player damage feedback.",
      }
    ]
  },    // --- Starborn ---
  {
    id: 'starborn',
    title: 'Starborn',
    description: "A mixed reality space journey where listening to AI isn't always the answer. An Extended Reality (XR) Installation for CineKid Festival 2024 with the theme 'eigenwijs' (stubborn in Dutch), in collaboration with 'Spatial Design' students from Mediacollege Amsterdam.",
    featuredImageUrl: '/projects/Starborn/FeaturedImage.png',
    tags: ['Unreal Engine', 'Blueprints', 'Interactive', 'XR', 'Mixed Reality', 'Virtual Production', 'Augmented Reality', 'Virtual Reality', 'Cinekid'],
    projectInfo: [
        { label: "Engine", value: "Unreal Engine" },
        { label: "Language", value: "C++" },
        { label: "Duration", value: "10 weeks (5 days/week)" },
        { label: "Type", value: "Mixed Reality Installation/Experience" },
        { label: "Reason", value: "Project for CineKid" }
    ],
    contributions: [
      "Involved in the Game Design process",
      "Created Minigame #1",
      "Helped with XR Passthrough",
      "Using your hands as 'Controllers'",
    ],
    contentBlocks: [
      
      { type: 'heading', level: 3, text: "About This Project" },
      { type: 'paragraph', text: "After an emergency landing on an unknown planet, participants chose between finding their own way home or following the orders of the AI robot Cap-Ti. It paid off not always listening to AI! The experience featured a beautiful physical set built \ Over 1000 children experienced Starborn during its two-week run at Cinekid." },
      
      {
        type: 'iframe',
        url: 'https://www.youtube-nocookie.com/embed/cGDGqgsrNO4',
        title: 'Starborn Trailer',
        description: "The trailer made by XR Lab for Starborn.",
      },
        { type: 'heading', level: 3, text: "Minigame #1: Connect The Wires" },
        { type: 'paragraph', text: "The player has to connect the right coloured wires to the correct coloured ports to be able to progress." },
        {
            type: 'image',
            src: '/images/projects/Starborn/mg1.gif',
            description: "Gif showing the minigame both in real life and in game.",
        },
        { type: 'heading', level: 3, text: "test header" },
        { type: 'paragraph', text: "pretend theres a lorem ipsum text here or smth, idfk kkew" },
    ]
  },
  // --- Operatie Infiltratie ---
  {
    id: 'operatie-infiltratie',
    title: 'Operatie Infiltratie',
    description: "An interactive virtual play where children are playfully challenged to make their voices heard through mini-games via Twitch, infiltrating places normally inaccessible to them. The story unfolds based on participants' input during a live stream.",
    featuredImageUrl: '/projects/OperatieInfiltratie/FeaturedImage.png',
    tags: ['Unreal Engine', 'Blueprints', 'VR', 'Virtual Production', 'Mixed Reality', 'Twitch Integration', 'Interactive', 'Live Stream', 'VPRO'],
    projectInfo: [
        { label: "Engine", value: "Unreal Engine 5.2.1" },
        { label: "Language", value: "UE Blueprints" },
        { label: "Duration", value: "10 weeks (4 days/week)" },
        { label: "Type", value: "Virtual Production/Mixed Reality" },
        { label: "Reason", value: "Project for VPRO Medialab" }
    ],
    contributions: [
      "Worked on Twitch x Unreal Engine Compatibility",
      "Worked on Minigame #1",
      "Created & Implemented SFX for Minigame #1",
      "Created OST for Minigame #2",
      "Contributed ideas to the show concept."
    ],
    contentBlocks: [
      { type: 'heading', level: 3, text: "Gallery" },
      {
        type: 'imageGallery',
        images: [
            { url: '/projects/OperatieInfiltratie/FeaturedImage.png', alt: 'Screenshot 1' },
            { url: '/projects/OperatieInfiltratie/FeaturedImage.png', alt: 'Screenshot 2' },
            { url: '/projects/OperatieInfiltratie/FeaturedImage.png', alt: 'Screenshot 3' },
        ]
      },
      { type: 'heading', level: 3, text: "Twitch Integration" },
      { type: 'paragraph', text: "We have used the TwiWorks 3rd party plugin to be able to read the Twitch Chat inside of Unreal Engine and fire off events that way, so that the chat was actually interactive. Since we only had 10 weeks to do everything from start to finish, creating something from scratch would not be feasible.\n\nWhenever “the game” starts, a browser pops up, causing you to log in and those credentials are being sent thru to the project. The Twitch Chat itself gets stored into a variable for later use. (see first blueprint)\n\nEvery time a message is sent, that message will be stored into a “Twitch Message” variable, the latest message will be stored in the “Latest Message” variable and then “OnNewMessage” will run. (see second blueprint)" },
      {
        type: 'iframe',
        url: 'https://blueprintue.com/render/_qmf7h14/',
        title: 'Twitch Login/Credentials',
        description: "Visual representation of the Twitch login flow.",
        isBlueprint: true
      },
      {
        type: 'iframe',
        url: 'https://blueprintue.com/render/m4hj26e-/',
        title: 'Twitch New Message Handling',
        isBlueprint: true
      },
      { type: 'heading', level: 3, text: "Graffiti Font" },
      { type: 'paragraph', text: "I have imported the Graffiti Font made by Rida into the Engine and created a Material with it so we could use it to have text in different places during the experience." },
      {
        type: 'iframe',
        url: 'https://blueprintue.com/render/if8pns39/',
        title: 'Graffiti Font Material',
        description: "The material setup for the custom font.",
        isBlueprint: true
      },
      { type: 'heading', level: 3, text: "SFX & OST" },
      { type: 'paragraph', text: "I have sound-designed all the SFX for Minigame #1 and the OST for Minigame #2 using Fl Studio with creative input from Hendrik Walther." },
      { type: 'paragraph', text: "Due to technical difficulties, the song is not live right now on DSPs. This will be resolved soon." },
      //   {
    //     type: 'spotify',
    //     trackId: '0H0Fir8ukF6czrVZRO1Hx8',
    //     title: "OST Minigame #2",
    //     description: "The original soundtrack created for the second minigame."
    //   }
    ]
  },
  // --- Bon Appmobile ---
  {
    id: 'bon-appmobile',
    title: 'Bon Appmobile',
    description: "A VR cooking simulator where the objective is to bake pizzas and deliver them to houses in villages using a food truck in a large world.",
    featuredImageUrl: '/projects/BonAppmobile/FeaturedImage.png',
    tags: ['Unreal Engine', 'Blueprints', 'VR', 'Cooking Simulator', 'School Project', 'Game Development'],
    projectInfo: [
        { label: "Engine", value: "Unreal Engine 5.1.1" },
        { label: "Language", value: "UE Blueprints" },
        { label: "Duration", value: "8 weeks (3 days/week)" },
        { label: "Type", value: "School Project" }
    ],
    contributions: [
      "Co-created the initial game idea.",
      "Co-Project Lead.",
      "Developed the 'Hammer the Dough' mechanic.",
      "Implemented the Hammer mechanic.",
      "Handled all audio-related tasks.",
      "Provided general development assistance."
    ],
    contentBlocks: [
      { type: 'heading', level: 3, text: "Hammer SFX" },
      { type: 'paragraph', text: "Once the hammer touches anything with its collider, it checks if the hammer is grabbed. If the hammer is grabbed, it plays the SFX, waits a little bit and then resets the [Do Once]." },
      {
        type: 'iframe',
        url: 'https://blueprintue.com/render/4zzuky-j/',
        title: 'Hammer SFX Logic',
        isBlueprint: true
      },
      { type: 'heading', level: 3, text: "The Dough" },
      { type: 'paragraph', text: "The dough checks if it’s hit by something that has the [Smash Component], it enables the [Is Hit] boolean, checks if the [Hit Index] is less/equal to the [Last Index] of the Array and if it is NOT at the [Last Index]. If it’s not at the [Last Index], it changes the Static Mesh of the dough, and waits a little bit." },
      {
        type: 'iframe',
        url: 'https://blueprintue.com/render/mjdbu2cg/',
        title: 'Dough Deformation Logic',
        description: "Blueprint showing how the dough mesh changes upon impact.",
        isBlueprint: true
      },
    ]
  },
  // --- Untitled Rhythm Game (URG) ---
  {
    id: 'urg',
    title: 'Untitled Rhythm Game (URG)',
    description: "Untitled Rhythm Game (URG) is a VR game where you have to hit drones to break them on the beat of the music.\nThere are multiple songs with different difficulties for you to choose from,\nso that everyone can have as much fun as they want.",
    featuredImageUrl: '/projects/UntitledRhythmGame/FeaturedImage.png',
    tags: ['Games', 'UE Blueprints', 'Unreal Engine', 'VR', 'Rhythm Game', 'School Project'],
    projectInfo: [
        { label: "Engine", value: "Unreal Engine 5.1.2" },
        { label: "Language", value: "UE Blueprints" },
        { label: "Time Spent", value: "8 weeks, 3 days/week)" },
        { label: "Reason", value: "School Project" },
        { label: "# of Levels", value: "5 Levels" }
    ],
    contributions: [
        "Created the Midi Engine",
        "Created the Midi files",
        "Edited some songs to be shorter",
        "Created the base of the drone spawning mechanic."
    ],
    contentBlocks: [
      { type: 'heading', level: 3, text: "MIDI Creation" },
      { type: 'paragraph', text: "For every song, I had to create a MIDI file with the notes split left and right. The songs were chosen in coordination with the entire team and then shortened by me in FL Studio to fit the overall song durations. See the video on the right here what it looks like in FL & as Gameplay." },
      {
        type: 'youtube',
        videoId: 'https://youtube-nocookie.com/embed/0gTujrs0ifA',
        title: "Gameplay & MIDI Preview",
        description: "Shows MIDI editing in FL Studio and corresponding gameplay. ID: Ray Volpe – Laserbeam (Blanke’s ÆON:REMIX)"
      },
      { type: 'heading', level: 3, text: "MIDI Engine" },
      { type: 'paragraph', text: "The MIDI Engine loads the song that got chosen by the player by getting all the data from said data table, loads the MIDI track, calculates the miss margin, sets the distance & time, calculates the delay and then plays the song." },
      {
        type: 'iframe',
        url: 'https://blueprintue.com/render/08l46f9x/',
        title: 'MIDI Engine Logic',
        description: "Core logic for loading and processing MIDI data.",
        isBlueprint: true
      },
      { type: 'heading', level: 3, text: "Drone Spawning" },
      { type: 'paragraph', text: "Every Tick the timer goes up and then the [Validate Spawn Timer] function checks if the next drone should spawn. If the [Spawn Next Drone] boolean is true, the drone spawns left or right accordingly" },
      {
        type: 'iframe',
        url: 'https://blueprintue.com/render/6hh138zn/',
        title: 'Drone Spawning Logic',
        description: "How drones are spawned based on the MIDI timing.",
        isBlueprint: true
      },
    ]
  },
  // --- BackyardTD ---
  {
    id: 'backyard-td',
    title: 'BackyardTD',
    description: "BackyardTD is a 2D Tower Defense game where the goal is to attack the evil plants that are trying to attack your base. Your army consists of different animals that you can buy with your starting capital. As you kill the plants, you get more money to spend so you can buy multiple agents to get a bigger army making you undefeatable.",
    featuredImageUrl: '/projects/BackyardTD/FeaturedImage.png',
    tags: ['C#', 'Games', 'Unity', 'Windows', 'Tower Defense'],
    projectInfo: [
        { label: "Engine", value: "Unity Engine" },
        { label: "Language", value: "C#" },
        { label: "Time Spent", value: "10 days" },
        { label: "Reason", value: "School Project" },
        { label: "# of Levels", value: "2 Levels" }
    ],
    contributions: [
        "First time creating a game on my own.",
        "Made the UI.",
        "Implemented features.",
        "Designed the levels.",
        "Tilemap assets from free pack."
    ],
    contentBlocks: [
        { type: 'heading', level: 3, text: "Design" },
        { type: 'paragraph', text: "I’ve used a Tilemap to draw out the map and set a path up for the enemies to walk over. There are waypoints for the enemies and borders to prevent the “towers” to be placed. The UI is made using Canvases and Buttons with a very transparent background." },
        { type: 'paragraph', text: "Asset Credits:\nTilemap: Kittens and Elves at Work\nFrog Ninja & Pink Man: Pixel Frog\nPiranha Plants: Ansimuz" },
        { type: 'heading', level: 3, text: "Towers: Idling/Attacking" },
        { type: 'paragraph', text: "The towers will play the idle animation until enemies walk into their collider. Whenever that happens, the tower locks onto that target, plays the attack animation and starts attacking the enemy." },
        { type: 'codeSnippet', language: 'csharp', title: 'TowerAttack.cs', code:
`public class TowerAttack : MonoBehaviour
{
    private GameObject target;
    [SerializeField] private bool canAttack = true;
    [SerializeField] private float damage = 5f;
    [SerializeField] private float attackCooldown = 0.8f;
    private Animator animator;
    private CircleCollider2D circleCollider;

    void Start()
    {
        animator = GetComponent<Animator>();
        circleCollider = GetComponent<CircleCollider2D>();
        circleCollider.enabled = true;
    }


    void OnTriggerStay2D(Collider2D other)
    {
        if (other.CompareTag("Enemy") == true && canAttack == true)
        {
            target = other.gameObject;
            Attack();
        }
    }

    void Attack()
    {
        if (canAttack == true)
        {
            canAttack = false;
            animator.SetTrigger("Attack");
            target.GetComponent<EnemyHealth>().TakeDmg(damage);
            StartCoroutine(Cooldown());
        }
    }

    IEnumerator Cooldown()
    {
        yield return new WaitForSeconds(attackCooldown);
        canAttack = true;
    }
}`
        },
        { type: 'heading', level: 3, text: "Towers: Spawning + Shop + Balance" },
        { type: 'paragraph', text: "Whenever you buy a tower in the shop, it’ll follows your mouse position until you place it. Whenever you touch a border, you cannot place it and the tower will turn red. When you place the tower, the money will be deducted from your balance and it will start it’s idle animation." },
        { type: 'codeSnippet', language: 'csharp', title: 'TowerSpawn.cs', code:
`public class TowerSpawn : MonoBehaviour
{
    // Note: Some variables like sprite, playerCurrency, mousePositionManager, red, normal, radiusRenderer, collisionCheck are assumed to be defined elsewhere or handled by Unity Inspector
    private SpriteRenderer sprite;
    private PlayerCurrency playerCurrency;
    private MousePositionManager mousePositionManager;
    private Color red;
    private Color normal;
    private bool isPlaced = false;
    private bool collisionCheck = false; // Assuming this is set by collision events
    private SpriteRenderer radiusRenderer; // Assuming this is assigned

    private void Start()
    {
        sprite = GetComponent<SpriteRenderer>();
        playerCurrency = GameObject.Find("Player").GetComponent<PlayerCurrency>();
        mousePositionManager = GameObject.Find("Player").GetComponent<MousePositionManager>();
        red = new Color(1f, 0.3f, 0.3f, 1f);
        normal = new Color(1f, 1f, 1f, 1f);
        transform.position = Vector3.zero;
        // Assuming radiusRenderer is assigned here or in Inspector
        radiusRenderer = GetComponentInChildren<SpriteRenderer>(); // Example assignment
        if (radiusRenderer) radiusRenderer.enabled = true;
    }
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (collisionCheck == false)
            {
                isPlaced = true;
            }
        }

        if (isPlaced == false)
        {
            transform.position = mousePositionManager.newPos;
            // Simplified color change logic - needs collision detection implementation
            // sprite.color = collisionCheck ? red : normal;
        }

        if (isPlaced == true && collisionCheck == false)
        {
            if (radiusRenderer) radiusRenderer.enabled = false;
            gameObject.GetComponent<TowerAttack>().enabled = true;
            gameObject.GetComponent<Animator>().enabled = true;
            DeductBalance();
            Destroy(this); // Destroy the spawn script component
        }
    }

    void DeductBalance()
    {
        // Simplified balance check - assumes playerCurrency exists and works
        if (gameObject.name.Contains("Frog Tower") && playerCurrency.Balance >= 50)
        {
            playerCurrency.NFT_NoStonks(); // Assumes this method exists
        }
        else if (gameObject.name.Contains("Pink Man Tower") && playerCurrency.Balance >= 125)
        {
            playerCurrency.PMT_NoStonks(); // Assumes this method exists
        }
        else if ((gameObject.name.Contains("Frog Tower") && playerCurrency.Balance < 50) || (gameObject.name.Contains("Pink Man Tower") && playerCurrency.Balance < 125))
        {
            Destroy(gameObject); // Destroy the tower object if not enough balance
        }
    }

    // Need collision detection methods (OnTriggerEnter2D, OnTriggerExit2D)
    // to set collisionCheck and change sprite color based on borders
}`
        },
        { type: 'heading', level: 3, text: "Enemies: Spawning + Waves System + Damage" },
        { type: 'paragraph', text: "When you click the [Start First Wave] button, the Enemy script (which is actually the Waves System/Game Manager) randomly assigns the amount of waves and then starts the first wave. While the countdown happens for the wave to start, the NewWave() function randomly assigns the amount of enemies that will spawn with random health, speed and damage that it does to the player if you fail to kill it." },
        { type: 'codeSnippet', language: 'csharp', title: 'Enemy.cs (Wave/Game Manager)', code:
`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro; // Assuming TextMeshPro is used

public class Enemy : MonoBehaviour // Renaming suggestion: WaveManager or GameManager
{
    public static List<GameObject> enemies; // Static list to track enemies
    private bool endWave = false;
    private bool startGame = false;
    private int wavesLeft;
    private int enemyCount;
    [SerializeField] private GameObject enemyPrefab; // Assign enemy prefab in Inspector
    [SerializeField] private Transform spawnPoint; // Assign spawn point in Inspector
    [SerializeField] private Transform[] waypoints; // Assign waypoints in Inspector
    [SerializeField] private float delay = 0.5f; // Delay between spawns
    [SerializeField] private GameObject startFirstWaveButton; // Assign button in Inspector
    [SerializeField] private GameObject wcGameObject; // Assign Wave Countdown UI object
    [SerializeField] private TextMeshProUGUI wcText; // Assign Wave Countdown Text
    // Assuming a Texts struct/class exists and is assigned
    // [SerializeField] private Texts texts;

    void Awake()
    {
        enemies = new List<GameObject>();
        endWave = false;
        if (wcGameObject) wcGameObject.SetActive(false); // Hide countdown initially
        // Assuming texts are assigned elsewhere or via Inspector
        // if (texts?.wavesText) texts.wavesText.enabled = false;
        // if (texts?.enemyText) texts.enemyText.enabled = false;
    }

    void Update()
    {
        if (startGame == true)
        {
            if (enemies.Count == 0 && endWave == false)
            {
                endWave = true;
                if (wavesLeft <= 0) // Check if wavesLeft is 0 or less
                {
                    Debug.Log("All waves cleared!");
                    SceneManager.LoadScene("Wave Cleared"); // Ensure this scene exists
                }
                else
                {
                    // wavesLeft is already decremented before calling NewWave
                    NewWave();
                }
            }
        }
    }

    public void StartFirstWave()
    {
        if (startFirstWaveButton) startFirstWaveButton.SetActive(false);
        wavesLeft = Random.Range(2, 5);
        // if (texts?.wavesText) texts.wavesText.enabled = true;
        // if (texts?.enemyText) texts.enemyText.enabled = true;
        Debug.Log($"Starting Game with {wavesLeft + 1} waves."); // +1 because wavesLeft is decremented before first wave starts
        NewWave(); // Start the first wave process
    }

    void NewWave()
    {
        enemyCount = Random.Range(2, 7);
        Debug.Log($"Starting Wave {wavesLeft}. Spawning {enemyCount} enemies.");
        startGame = true; // Ensure game logic runs
        StartCoroutine(CountdownNextWave());
    }

    IEnumerator Spawn()
    {
        if (wcGameObject) wcGameObject.SetActive(false);
        Transform parentTransform = spawnPoint ? spawnPoint : transform; // Use spawnPoint or this object's transform

        for (int i = 0; i < enemyCount; i++)
        {
            if (enemyPrefab)
            {
                GameObject instenemy = Instantiate(enemyPrefab, parentTransform.position, Quaternion.identity);
                EnemyMove moveScript = instenemy.GetComponent<EnemyMove>();
                if (moveScript)
                {
                    moveScript.Waypoints(waypoints);
                    // Assign random stats here if needed, e.g.:
                    // instenemy.GetComponent<EnemyHealth>().InitializeHealth(Random.Range(10f, 25f));
                }
                enemies.Add(instenemy);
            }
            yield return new WaitForSeconds(delay);
        }
        wavesLeft--; // Decrement wavesLeft *after* spawning for the current wave
        endWave = false; // Ready for next wave check
    }

    IEnumerator CountdownNextWave()
    {
        if (wcGameObject && wcText)
        {
            wcGameObject.SetActive(true);
            for (int i = 5; i > 0; i--)
            {
                wcText.SetText($"Wave starts in: \n{i}\n Seconds.");
                yield return new WaitForSeconds(1);
            }
        } else {
             yield return new WaitForSeconds(1); // Default wait if no UI
        }
        StartCoroutine(Spawn());
    }
}`
        },
        { type: 'heading', level: 3, text: "Enemies: Movement" },
        { type: 'paragraph', text: "The Enemies follow waypoints (white dots which are referenced in the EnemyMove() script) to navigate through the map. When the enemy reaches the end, the player takes damage." },
        { type: 'codeSnippet', language: 'csharp', title: 'EnemyMove.cs', code:
`using UnityEngine;

public class EnemyMove : MonoBehaviour
{
    private Transform[] waypoints;
    private int waypointIndex = 0;
    private float moveSpeed; // Set externally or randomized in Start
    private PlayerHealth player; // Assign player health script reference
    private float dmg = 1; // Damage dealt by this enemy

    void Start()
    {
        player = GameObject.Find("Player")?.GetComponent<PlayerHealth>(); // Find player health script
        // Initialize speed, potentially randomized
        moveSpeed = Random.Range(1f, 3f);
        // Ensure waypoints are assigned before trying to access them
        if (waypoints != null && waypoints.Length > 0)
        {
             transform.position = waypoints[waypointIndex].position;
        } else {
             Debug.LogError("Waypoints not assigned to EnemyMove script on " + gameObject.name);
             // Optionally destroy the enemy if waypoints are missing
             // Destroy(gameObject);
        }
    }

    void Update()
    {
        if (waypoints != null && waypoints.Length > 0) // Check if waypoints exist
        {
            Move();
        }
    }

    // Call this from the spawner to assign waypoints
    public void Waypoints(Transform[] wps)
    {
        waypoints = wps;
        // Set initial position after waypoints are assigned
        if (waypoints != null && waypoints.Length > 0)
        {
             transform.position = waypoints[waypointIndex].position;
        }
    }

    void Move()
    {
        if (waypointIndex >= waypoints.Length) return; // Already reached the end

        // Move towards the current waypoint
        transform.position = Vector3.MoveTowards(transform.position, waypoints[waypointIndex].position, moveSpeed * Time.deltaTime);

        // Check if the waypoint is reached
        if (transform.position == waypoints[waypointIndex].position)
        {
            waypointIndex++;
        }

        // Check if the end is reached
        if (waypointIndex == waypoints.Length)
        {
            Enemy.enemies?.Remove(gameObject); // Safely remove from static list
            player?.TakeDmg(dmg); // Damage player if script found
            Destroy(gameObject);
        }
    }
}`
        },
        { type: 'heading', level: 3, text: "Enemies: Health" },
        { type: 'paragraph', text: "Whenever the enemy gets hit by a tower, the enemy loses health until it runs out. When the enemy is out of health, it dies." },
        { type: 'codeSnippet', language: 'csharp', title: 'EnemyHealth.cs', code:
`using UnityEngine;

public class EnemyHealth : MonoBehaviour
{
    [SerializeField] private float maxHealth = 10f; // Use maxHealth for clarity
    private float currentHealth;
    [SerializeField] private Transform healthbar; // Assign health bar transform in Inspector
    private PlayerCurrency playerCurrency;
    private float initialHealthbarScaleX; // Store initial scale

    void Start()
    {
        currentHealth = maxHealth; // Start with full health
        playerCurrency = GameObject.Find("Player")?.GetComponent<PlayerCurrency>(); // Safely find currency script

        // Store initial health bar scale if assigned
        if (healthbar != null)
        {
            initialHealthbarScaleX = healthbar.localScale.x;
        } else {
            Debug.LogWarning("Healthbar transform not assigned to EnemyHealth on " + gameObject.name);
        }
        UpdateHealthBar(); // Set initial health bar size
    }

    public void InitializeHealth(float healthValue) {
        maxHealth = healthValue;
        currentHealth = maxHealth;
        UpdateHealthBar();
    }

    public void TakeDmg(float damage)
    {
        currentHealth -= damage;
        UpdateHealthBar();

        if (currentHealth <= 0)
        {
            Die();
        }
    }

    void UpdateHealthBar()
    {
        if (healthbar != null)
        {
            float healthPercentage = currentHealth / maxHealth;
            Vector3 scale = healthbar.localScale;
            scale.x = initialHealthbarScaleX * healthPercentage;
            healthbar.localScale = scale;
        }
    }

    void Die()
    {
        Enemy.enemies?.Remove(gameObject); // Safely remove from static list
        playerCurrency?.Stonks(); // Grant currency if script found
        Destroy(gameObject);
    }
}`
        }
    ]
  },
  // --- MA Jump ---
  {
    id: 'ma-jump',
    title: 'MA Jump',
    description: "MA Jump is a platforming game where you are a snowman who wants to get as high as possible. How further up you go, the harder it gets. There is a surprise once you get up to 1000 points! 😉",
    featuredImageUrl: '/projects/MAJump/FeaturedImage.png',
    tags: ['C#', 'Games', 'Unity', 'Windows', 'Platformer', 'Game Jam'],
    projectInfo: [
        { label: "Engine", value: "Unity 2020.3.30f1" },
        { label: "Language", value: "C#" },
        { label: "Time Spent", value: "1 Day" },
        { label: "Reason", value: "Game Jam @ School" },
        { label: "# of Levels", value: "2 Levels" }
    ],
    contributions: [
        "Came up with the idea.",
        "Helped team members with their code.",
        "Made the music for it."
    ],
    contentBlocks: [
        { type: 'heading', level: 3, text: "Showreel" },
        {
        type: 'iframe',
        url: 'https://www.youtube-nocookie.com/embed/1y-TXHR_S0g',
        title: 'MA Jump: Showreel',
        description: "Visual representation of 'MA Jump' gameplay.",
},
]
  },
];
