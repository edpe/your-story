import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

type Scene = {
  src: string;
  alt: string;
  texts: string[];
  transitionText: {
    "desert-of-keys"?: string;
    "tree-of-threads"?: string;
    "mirror-sea"?: string;
    "night-circus"?: string;
    "labyrinth-of-voices"?: string;
    "chamber-of-light"?: string;
    "spiral-staircase"?: string;
    "the-gateway"?: string;
  };
};

const abstractTitles = [
  "The Shape of What Is Hidden",
  "A Map Drawn in Stars",
  "Threads of the Unspoken",
  "The Echo Beyond the Gate",
  "Reflections in the Stillness",
  "The Weight of What Was Found",
  "Whispers Between the Lines",
  "The Door Without a Key",
  "Paths That Shape Themselves",
  "A Song Heard in Silence",
  "The Spiral of Forgotten Truths",
  "Light Falling Through the Veil",
  "Shadows Cast by Choices",
  "A Horizon Unfolding Within",
  "Steps Left in the Dark",
  "The Mirror’s Silent Answer",
  "A Thread Pulled from the Void",
  "Marks Left by the Invisible",
  "The Distance Between Realms",
  "A Key Forged in Stillness",
  "The Shape of Quiet Light",
  "Patterns Beneath the Surface",
  "The Edge Where Stories Begin",
  "Paths Woven Through Silence",
  "The Place Where the Shadows Rest",
];

const introductions = [
  "You find yourself at the edge of something extraordinary. The air hums with quiet energy, and the world before you feels both strange and familiar, as if you’ve been here before in dreams. Each step forward feels like a question waiting to be answered.",
  "The journey begins with a single breath, a single step. The path ahead is uncharted, yet it feels like it was meant for you alone. Shadows and light weave together, forming a tapestry of endless possibilities.",
  "The first steps are always the hardest, yet something pulls you forward. The horizon shimmers with promise, and the air carries the faint scent of stories yet untold. You cannot turn back, for the journey has already begun.",
  "This is not the beginning of your journey, though it feels like it. Threads of memory tug at you, guiding your steps into the unknown. The world shifts around you, alive with mysteries waiting to unfold.",
  "There is no map, no guide. Only the quiet pull of something greater. The path ahead is veiled in shadow and light, yet it calls to you, unmistakable and unyielding. You step forward, leaving everything behind.",
];

const endings = [
  "The journey ends not with a conclusion, but with a beginning. Each step has shaped you, and each choice has left its mark. The path ahead is yours to forge, its possibilities endless, its stories waiting to be written.",
  "As the final echoes of this place fade, you carry its whispers with you. The world feels lighter now, as though it, too, has been transformed. The journey has changed you, though its lessons may take a lifetime to unfold.",
  "The path disappears behind you, yet its impact lingers in your mind. Each moment was a question, each choice a thread in the tapestry of your story. The journey is not over—it never is—but for now, you rest.",
  "You find yourself at the edge once more, but this time, you know there is no end. The world is vast and full of wonder, and the story you have walked is but one chapter in an infinite tale. You step forward, not away, but into the unknown.",
  "The final step feels like the first, a quiet return to something both familiar and new. The echoes of this journey will guide you, their wisdom woven into your soul. You are no longer the same, and the world is no longer as it was.",
];

export default function Home() {
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [ending, setEnding] = useState("");

  useEffect(() => {
    const scenesData: Scene[] = [
      {
        src: "/images/the-gateway.png",
        alt: "The Gateway",
        texts: [
          "You stand before the shimmering gateway, a threshold between the familiar and the unknown. The light dances in intricate patterns, whispering promises of transformation. The air feels heavy with possibility, as if the entire universe holds its breath for your first step.", // Position 1
          "The gateway looms larger as you approach, the glow intensifying. A soft hum fills your ears, not unpleasant but insistent, urging you to cross. You sense that once you pass through, nothing will ever be the same.", // Position 2
          "Through the archway, the world opens into something both wondrous and unsettling. Shapes blur and reform, and the path ahead feels both infinite and fragile, as though it could vanish at any moment.", // Position 3
          "The light from the gateway pulses behind you, a reminder of the world you’ve left behind. Each step forward feels heavier, as though the act of crossing has bound you to a destiny not yet revealed.", // Position 4
          "The air thickens with unspoken truths, and the gateway fades into the distance. Yet its presence lingers, a quiet pull at the edges of your consciousness, as though it’s still watching, still waiting.", // Position 5
          "As the gateway recedes, you realize it was never just a door—it was a mirror, reflecting not the path ahead, but the transformation already taking place within you.", // Position 6
          "Looking back, the arch is now a faint glimmer, barely distinguishable from the horizon. Its whispers fade, leaving you alone with the enormity of what lies ahead.", // Position 7
          "The gateway is gone, but its presence lingers in your bones. The step you took was not into the unknown, but into yourself. And so, the journey begins.", // Position 8
        ],
        transitionText: {
          "desert-of-keys":
            "The gateway’s glow fades, and the air grows warmer. The faint shimmer of something hidden stirs on the horizon",
          "tree-of-threads":
            "As you leave the gateway, the light shifts to a gentle hum. The feeling of threads weaving through the air brushes past you",
          "mirror-sea":
            "The glow of the gateway dims, and the ground softens beneath your feet. A cool breeze carries whispers of distant ripples",
          "night-circus":
            "The gateway dissolves into shadow, and flickering lights emerge on the edge of your vision. The faint sound of music stirs your curiosity",
          "labyrinth-of-voices":
            "As the gateway’s radiance fades, the air thickens with whispers. Shadows begin to weave their own paths ahead",
          "chamber-of-light":
            "The gateway’s light is replaced by a steady warmth. The golden glow ahead feels like it has been waiting for you",
          "spiral-staircase":
            "The gateway dissolves into an expanse of darkness. From its depths rises the soft curve of spiraling steps",
        },
      },
      {
        src: "/images/desert-of-keys.png",
        alt: "Desert of Keys",
        texts: [
          "The desert stretches endlessly before you, golden sands glittering under a sunless sky. Scattered across the dunes are keys of every shape and size, their purpose unknown. Each key feels alive, as though watching and waiting for your choice.", // Position 1
          "You walk among the keys, the crunch of sand beneath your feet the only sound. Some keys are half-buried, others rest atop the dunes, glinting in the light. Each seems to whisper faintly, asking: which will you choose?", // Position 2
          "As the wind shifts, the keys reveal their hidden patterns. Lines in the sand form a map, but the destination remains unclear. The desert itself feels alive, shaping your journey in ways you can’t yet see.", // Position 3
          "One key catches your eye, glowing faintly. As you pick it up, the sand beneath you shifts, as if responding to your choice. The weight of the key feels both real and metaphorical, a symbol of the door it might unlock.", // Position 4
          "The desert is vast, but the presence of the keys makes it feel intimate, as though you are being guided. Each step feels deliberate, each choice a ripple in a larger design.", // Position 5
          "You carry the key, its glow fading as if its purpose has already been fulfilled. The dunes shift behind you, erasing your footprints. The desert is a place of impermanence, where nothing stays the same.", // Position 6
          "The keys grow sparse as the horizon nears, their whispers fading into silence. You wonder if they were ever meant to be used, or if their purpose was simply to make you choose.", // Position 7
          "As you leave the desert behind, the key feels lighter, almost insubstantial. Yet its significance remains, a reminder that choices, once made, shape the paths we walk.", // Position 8
        ],
        transitionText: {
          "the-gateway":
            "The golden sands blur, and a faint shimmering archway emerges in the distance. Its presence feels inevitable, calling you forward",
          "tree-of-threads":
            "The desert winds fall silent, and the air grows still. The faint glow of something alive begins to light your path",
          "mirror-sea":
            "The sands give way to cool, smooth ground. A faint ripple in the air hints at something reflective ahead",
          "night-circus":
            "The warmth of the desert fades, replaced by a flicker of distant lights. The faint hum of music stirs in the stillness",
          "labyrinth-of-voices":
            "The sands beneath you shift and darken. The air cools, carrying with it the murmur of countless voices",
          "chamber-of-light":
            "The desert begins to fade, and the warmth of golden light rises ahead. The glow carries a quiet invitation",
          "spiral-staircase":
            "The sands drift into shadow, and the gentle curve of spiraling steps begins to form. Each step seems to pulse with quiet intention",
        },
      },
      {
        src: "/images/tree-of-threads.png",
        alt: "Tree of Threads",
        texts: [
          "The tree rises before you, ancient and glowing with threads of light. Each thread sways gently, as if moved by an unseen wind. They seem to hum softly, their vibrations resonating with something deep within you.", // Position 1
          "As you step closer, the threads become more distinct, their colors shifting and blending. Each thread feels like a story, a possibility waiting to be grasped. The tree itself seems to breathe, alive with potential.", // Position 2
          "The threads stretch infinitely upward, vanishing into the sky. Touching one, you feel a sudden surge of connection—a memory not your own, a glimpse of a path you might take. The tree does not judge, it simply offers.", // Position 3
          "The glow of the threads intensifies, and you realize that each thread is a story yet to be told. Each one represents a path, and yet, you cannot take them all. The weight of decision presses on you.", // Position 4
          "The threads begin to intertwine, forming patterns that seem to mirror your thoughts. The tree responds to you, shaping its offerings based on the questions you have not yet asked.", // Position 5
          "As you pull your hand away, the thread you touched remains warm, its glow fading into the vast tapestry above. The tree stands as a silent witness, offering no answers, only possibilities.", // Position 6
          "The threads sway gently as you step back, their hum fading but not disappearing. You feel their presence even as you turn away, as though they have woven themselves into your being.", // Position 7
          "The tree recedes into the distance, its glow a faint memory. Yet the thread you touched still lingers in your mind, a reminder that every choice carries a story.", // Position 8
        ],
        transitionText: {
          "the-gateway":
            "The gentle hum of the threads fades, and a glowing archway appears ahead. Its light feels both familiar and new",
          "desert-of-keys":
            "The threads dissolve, and the air grows warmer. Scattered shapes glint faintly on the horizon",
          "mirror-sea":
            "The threads drift into silence, and the ground becomes smooth and glassy. A faint ripple echoes in the distance",
          "night-circus":
            "The tree’s light dims, and flickers of color emerge in the distance. The hum of threads fades into distant music",
          "labyrinth-of-voices":
            "The threads unravel into shadow, and the sound of soft whispers begins to rise. The air grows heavier with each step",
          "chamber-of-light":
            "The glow of the threads merges into a steady radiance. The warmth ahead feels like it has been waiting for you",
          "spiral-staircase":
            "The threads dissolve into the air, and spiraling steps rise ahead. The staircase twists infinitely, beckoning you forward",
        },
      },
      {
        src: "/images/mirror-sea.png",
        alt: "Mirror Sea",
        texts: [
          "The Mirror Sea lies before you, still and glassy, reflecting the vast expanse of stars above. As you approach, the surface shimmers, its stillness both inviting and unnerving. This is not just a sea—it is a threshold to something deeper.", // Position 1
          "Each ripple distorts the reflections, reshaping the stars into fleeting constellations. You kneel to touch the surface, and it feels alive, almost as though the sea is breathing with you. The boundary between you and it begins to blur.", // Position 2
          "Walking along the edge, you catch glimpses of something beneath the surface—shadows, shapes, stories half-formed. The sea whispers softly, its voice just beyond comprehension, urging you to look closer.", // Position 3
          "A step into the sea sends waves cascading outward, breaking the stillness. The surface holds you for a moment before pulling you deeper. The water feels heavier than it should, pressing against you as though testing your resolve.", // Position 4
          "The stars above and the depths below seem to merge, their light weaving a web of infinite possibility. The sea shows you fragments of yourself, mirrored but unfamiliar, as if revealing truths you’ve long buried.", // Position 5
          "As you move deeper, the water becomes warmer, more luminous. Shapes in the distance take form—an island, a figure, a memory. The sea is no longer a reflection; it is a guide.", // Position 6
          "The sea begins to release you, the weight lessening as the surface becomes calm once more. Yet the reflections remain strange, no longer showing just the sky, but a piece of the journey you’ve undertaken.", // Position 7
          "Stepping away from the sea, you feel it watching you still. Its stillness lingers in your mind, a reminder that what it showed you was not just a reflection, but a question that only you can answer.", // Position 8
        ],
        transitionText: {
          "the-gateway":
            "The reflections on the water dissolve into faint light. The soft glow of an archway appears, calling you onward",
          "desert-of-keys":
            "The ripples fade, and the coolness of the sea gives way to the warmth of golden sands. Scattered shapes glint under the open sky",
          "tree-of-threads":
            "The stillness of the sea breaks, and faint threads of light appear. A great tree rises in the distance, its glow soft and inviting",
          "night-circus":
            "The mirrored surface fades, and faint lights flicker ahead. The sound of distant music stirs in the silence",
          "labyrinth-of-voices":
            "The reflections vanish, replaced by shifting shadows. The faint murmur of voices echoes in the air",
          "chamber-of-light":
            "The ripples subside, and a steady warmth begins to rise. The golden glow ahead feels both close and unreachable",
          "spiral-staircase":
            "The sea’s reflections dissolve, and spiraling steps appear before you. The staircase twists upward and downward into the unknown",
        },
      },
      {
        src: "/images/night-circus.png",
        alt: "Night Circus",
        texts: [
          "The Night Circus appears without warning, its striped tents glowing faintly under the moonlight. Laughter and whispers drift on the air, but the performers remain hidden in shadow. It feels as though the circus has been waiting just for you.", // Position 1
          "Stepping closer, you hear the faint hum of music, haunting yet beautiful. The air is thick with the scent of incense and something sweeter, almost intoxicating. A fortune teller’s tent beckons you inside.", // Position 2
          "The performers begin to emerge, their movements impossibly graceful. A magician tips their hat in your direction, their eyes alight with mischief. You sense that every act in this circus is more than it seems.", // Position 3
          "The striped tents seem to shift and shimmer as you move through the circus, their boundaries blurring. Each act tells a story, but together they weave something larger—an invitation to explore what lies within yourself.", // Position 4
          "A dancer spins in the distance, their form dissolving into light. The crowd cheers, but their faces are veiled, unreadable. This is no ordinary circus—it feels like a dream you once forgot but now remember.", // Position 5
          "The magician approaches, holding out a card. It shows an image you recognize, though you cannot place why. They smile knowingly, as though they’ve answered a question you haven’t yet asked.", // Position 6
          "The circus begins to fade, the lights dimming but not extinguishing. The air feels lighter now, as though the mysteries of the circus have taken some weight from your soul.", // Position 7
          "As you leave, you glance back. The tents are gone, but their whispers linger. The Night Circus is not just a place—it is a mirror of the magic within you.", // Position 8
        ],
        transitionText: {
          "the-gateway":
            "The vibrant energy of the circus fades, and a glowing archway appears ahead. Its light feels steady and grounding",
          "desert-of-keys":
            "The lights dim, and the warmth of golden sands rises ahead. Scattered shapes glint under a vast, silent sky",
          "tree-of-threads":
            "The colors of the circus dissolve into soft light. Threads sway gently in the air as a great tree comes into view",
          "mirror-sea":
            "The music fades, replaced by the cool stillness of water. The mirrored surface of a sea stretches out before you",
          "labyrinth-of-voices":
            "The laughter grows quiet, replaced by faint whispers. Shadows rise around you, twisting into intricate patterns",
          "chamber-of-light":
            "The circus fades into quiet darkness, and the warmth of golden light emerges. A glowing chamber stands ahead",
          "spiral-staircase":
            "The tents vanish, and spiraling steps rise before you. The staircase twists infinitely into the void above and below",
        },
      },
      {
        src: "/images/labyrinth-of-voices.png",
        alt: "Labyrinth of Voices",
        texts: [
          "The labyrinth rises before you, an intricate maze of twisting corridors and shifting walls. Faint whispers echo from every direction, overlapping until they are almost indistinguishable. Each step forward feels like entering a story you’ve only half-heard.", // Position 1
          "The walls are adorned with masks, each one unique and unsettlingly lifelike. As you pass, their whispers grow louder, forming words that seem to speak directly to your thoughts. The air feels heavy, alive with unseen presences.", // Position 2
          "Every turn of the labyrinth reveals a new shadow, a new question. The whispers begin to harmonize, creating a melody that stirs something deep within you. The labyrinth does not just contain voices—it is made of them.", // Position 3
          "A faint light appears in the distance, flickering like a candle. The whispers grow softer, more urgent. It feels as though the labyrinth itself is guiding you, but to what end you cannot yet see.", // Position 4
          "The masks on the walls shift as you move, their expressions changing subtly. One seems to smile at you, its voice distinct from the rest: 'Do you know why you are here?'", // Position 5
          "The labyrinth tightens around you, the whispers becoming a single voice, clear and commanding: 'Choose your path.' The light grows brighter, but the way forward is unclear.", // Position 6
          "As you step toward the light, the labyrinth begins to dissolve, its walls fading into mist. The voices grow faint, but one lingers, repeating a phrase you cannot yet understand.", // Position 7
          "Emerging from the labyrinth, you feel as though you’ve left something behind and taken something with you. The voices are gone, but their questions remain, unanswered and eternal.", // Position 8
        ],
        transitionText: {
          "the-gateway":
            "The whispers fade, and a glowing archway rises in the distance. Its light feels like clarity after chaos",
          "desert-of-keys":
            "The shadowed walls dissolve, and golden sands emerge ahead. Scattered keys glint faintly under the open sky",
          "tree-of-threads":
            "The labyrinth’s whispers quiet, and the glow of threads begins to fill the air. A great tree rises before you",
          "mirror-sea":
            "The voices fade, and the cool stillness of a mirrored sea emerges. The faint ripple of water echoes in the air",
          "night-circus":
            "The labyrinth dissolves, and flickering lights appear in the distance. The hum of music and laughter grows louder",
          "chamber-of-light":
            "The shadows fade, and the steady warmth of golden light rises. A chamber glows ahead, inviting you inward",
          "spiral-staircase":
            "The labyrinth fades into darkness, and a spiraling staircase emerges. Its steps twist into the unknown",
        },
      },
      {
        src: "/images/chamber-of-light.png",
        alt: "Chamber of Light",
        texts: [
          "The chamber glows softly, its golden light spilling out into the darkness. The air inside is warm and inviting, yet it carries a weight, as though this place remembers everything it has seen.", // Position 1
          "Shadows dance along the walls, their movements independent of any source. Symbols carved into the stone seem to shift when you’re not looking, telling a story you cannot yet understand.", // Position 2
          "At the center of the chamber floats an orb of pure light, pulsing gently. Its radiance fills you with a strange mixture of comfort and unease, as though it sees more than you wish to show.", // Position 3
          "The light grows brighter as you step closer, illuminating not just the chamber, but the depths of your own thoughts. The orb feels alive, as though it is waiting for something from you.", // Position 4
          "You reach out to the orb, and for a moment, everything else fades. The light surrounds you, filling you with clarity and a sense of profound stillness.", // Position 5
          "The orb dims as you step away, but the warmth remains, as though it has left a part of itself within you. The chamber’s walls shimmer faintly, their symbols now still.", // Position 6
          "The chamber begins to fade into the shadows, its light retreating but not disappearing. You carry its glow with you, a quiet reminder of what you’ve found here.", // Position 7
          "As you leave the chamber, its presence lingers in your thoughts. It was not just a place—it was a moment, a pause, a reflection of the light you hold within.", // Position 8
        ],
        transitionText: {
          "the-gateway":
            "The golden light recedes, and a glowing archway appears ahead. Its steady presence feels like a guide",
          "desert-of-keys":
            "The warmth of the chamber fades, replaced by golden sands. Scattered keys glint faintly under a sunless sky",
          "tree-of-threads":
            "The chamber’s light dims, and soft threads of light appear. A great tree rises in the distance, its glow inviting",
          "mirror-sea":
            "The glow fades into stillness, and the ground becomes smooth and glassy. A mirrored sea stretches out before you",
          "night-circus":
            "The chamber fades into shadow, and faint lights flicker ahead. The hum of music drifts softly through the air",
          "labyrinth-of-voices":
            "The warmth fades, and the air grows heavy with whispers. Shadows rise ahead, forming intricate patterns",
          "spiral-staircase":
            "The chamber’s glow recedes, and a spiraling staircase emerges. Its infinite steps twist upward and downward",
        },
      },
      {
        src: "/images/spiral-staircase.png",
        alt: "Spiral Staircase",
        texts: [
          "The staircase spirals infinitely, rising into the stars and descending into shadow. Each step echoes as you ascend, the sound carrying through the vast emptiness surrounding you.", // Position 1
          "The stars seem closer now, their light weaving patterns that shift with every step. The void hums softly, a low vibration that resonates in your chest.", // Position 2
          "As you climb, the staircase begins to twist more sharply, its edges blurring. The constellations above seem to guide you, though their meaning remains unclear.", // Position 3
          "Every step feels heavier, as though the staircase is testing your resolve. The void stretches infinitely in every direction, but your path is singular and unyielding.", // Position 4
          "Looking up, you see a faint glow at the top of the staircase, distant but constant. Looking down, the steps fade into darkness, their end unknowable.", // Position 5
          "The stars begin to shift, their light forming shapes that feel familiar yet unrecognizable. The staircase grows narrower, its twists and turns more deliberate.", // Position 6
          "The glow at the top grows brighter as you near, but the void around you deepens. Each step feels like a choice, each choice a question unanswered.", // Position 7
          "As you reach the top, the glow envelops you, and the staircase fades into memory. The stars remain, quiet witnesses to the journey you’ve taken and the paths you’ve yet to walk.", // Position 8
        ],
        transitionText: {
          "the-gateway":
            "The staircase fades, and a glowing archway rises ahead. Its light feels like a steady promise of what lies ahead",
          "desert-of-keys":
            "The twisting steps dissolve, and golden sands stretch out before you. Scattered shapes glint faintly in the distance",
          "tree-of-threads":
            "The staircase fades, and threads of light appear, swaying gently. A great tree rises before you, its branches alive with energy",
          "mirror-sea":
            "The steps vanish, and the cool stillness of a mirrored sea emerges. The faint ripple of water carries you forward",
          "night-circus":
            "The staircase dissolves into shadow, and faint lights flicker in the distance. The hum of distant music stirs the air",
          "labyrinth-of-voices":
            "The steps fade, replaced by twisting shadows. The faint murmur of voices echoes through the stillness",
          "chamber-of-light":
            "The staircase recedes, and the steady warmth of golden light rises ahead. A glowing chamber stands before you",
        },
      },
    ];

    // Shuffle the scenes array
    scenesData.sort(() => Math.random() - 0.5);

    // Select a random title
    const randomTitle =
      abstractTitles[Math.floor(Math.random() * abstractTitles.length)];

    // Select a random introduction
    const randomIntroduction =
      introductions[Math.floor(Math.random() * introductions.length)];

    // Select a random ending
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];

    setScenes(scenesData);
    setTitle(randomTitle);
    setIntroduction(randomIntroduction);
    setEnding(randomEnding);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.introduction}>{introduction}</div>
      <div className={styles.imageContainer}>
        {scenes.map((scene, index) => {
          const nextScene = scenes[(index + 1) % scenes.length];
          const transitionText =
            scene.transitionText[
              nextScene.alt
                .toLowerCase()
                .replace(/ /g, "-") as keyof Scene["transitionText"]
            ] + " . . .";

          return (
            <div key={index} className={styles.scene}>
              <div className={styles.vignetteGradient}>
                <Image
                  src={scene.src}
                  alt={scene.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className={styles.imageWithMargin}
                  layout="responsive"
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  className={
                    index % 2 === 0
                      ? styles.overlayTextLeft
                      : styles.overlayTextRight
                  }
                >
                  {scene.texts[index % scene.texts.length]}
                </div>
              </div>
              {index < scenes.length - 1 && (
                <div className={styles.verticalSpacing}>
                  <div className={styles.transitionText}>{transitionText}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.ending}>{ending}</div>
    </main>
  );
}
