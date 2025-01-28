import type { Scene } from "../page";
import type { Archetype } from "../components/SceneContainer";

type Option = {
  id: string;
  text: string;
};

type Question = {
  question: string;
  options: Option[];
};

export const oracleQuestions: Question[] = [
  {
    question: "What do you seek on your journey?",
    options: [
      { id: "1a", text: "Healing" },
      { id: "1b", text: "Clarity" },
      { id: "1c", text: "Self-discovery" },
      { id: "1d", text: "Manifestation" },
      { id: "1e", text: "Releasing" },
    ],
  },
];

export const abstractTitles = [
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

export const introductions = [
  "You find yourself at the edge of something extraordinary. The air hums with quiet energy, and the world before you feels both strange and familiar, as if you’ve been here before in dreams. Each step forward feels like a question waiting to be answered.",
  "The journey begins with a single breath, a single step. The path ahead is uncharted, yet it feels like it was meant for you alone. Shadows and light weave together, forming a tapestry of endless possibilities.",
  "The first steps are always the hardest, yet something pulls you forward. The horizon shimmers with promise, and the air carries the faint scent of stories yet untold. You cannot turn back, for the journey has already begun.",
  "This is not the beginning of your journey, though it feels like it. Threads of memory tug at you, guiding your steps into the unknown. The world shifts around you, alive with mysteries waiting to unfold.",
  "There is no map, no guide. Only the quiet pull of something greater. The path ahead is veiled in shadow and light, yet it calls to you, unmistakable and unyielding. You step forward, leaving everything behind.",
];

export const endings = [
  "The journey ends not with a conclusion, but with a beginning. Each step has shaped you, and each choice has left its mark. The path ahead is yours to forge, its possibilities endless, its stories waiting to be written.",
  "As the final echoes of this place fade, you carry its whispers with you. The world feels lighter now, as though it, too, has been transformed. The journey has changed you, though its lessons may take a lifetime to unfold.",
  "The path disappears behind you, yet its impact lingers in your mind. Each moment was a question, each choice a thread in the tapestry of your story. The journey is not over—it never is—but for now, you rest.",
  "You find yourself at the edge once more, but this time, you know there is no end. The world is vast and full of wonder, and the story you have walked is but one chapter in an infinite tale. You step forward, not away, but into the unknown.",
  "The final step feels like the first, a quiet return to something both familiar and new. The echoes of this journey will guide you, their wisdom woven into your soul. You are no longer the same, and the world is no longer as it was.",
];

export const scenesData: Scene[] = [
  {
    src: "/images/scenes/desert-of-keys.png",
    mobileSrc: "/images/scenes/mobile/desert-of-keys.png",
    alt: "Desert of Keys",
    keywords: ["Discovery", "Choice", "Patience", "Clarity through Simplicity"],
    meaning:
      "The Desert of Keys reflects a moment of searching for the right path or unlocking hidden truths. The scattered keys represent the choices before you, each one leading to a new door. This scene speaks to the power of discernment and the wisdom that comes from exploring your inner landscape.",
    reversed:
      "Overwhelm, indecision, or searching for answers outside yourself.",
    transitionText: {
      "tree-of-threads":
        "The keys fade as the sand gives way to a glowing tree with threads weaving through the air.",
      "mirror-sea":
        "The desert dissolves into rippling glassy reflections, revealing the vast Mirror Sea.",
      "night-circus":
        "A whisper of music carries on the warm air as flickering lights announce the Night Circus.",
      "labyrinth-of-voices":
        "The soft hum of voices emerges, and the desert winds shift into a shadowy maze.",
      "chamber-of-light":
        "The desert’s heat softens into golden warmth as a glowing chamber comes into view.",
      "spiral-staircase":
        "The shifting sands stabilize into spiraling stone steps leading upward.",
      "the-gateway":
        "The desert recedes, and the shimmering Gateway stands before you, inviting your next step.",
      "starry-abyss":
        "The dunes dissolve into cosmic vastness, stars spreading out in every direction.",
      "ember-cave":
        "The warmth intensifies as the sands transform into the glowing embers of a fiery cave.",
      "broken-bridge":
        "The desert’s stillness is replaced by the cool air of a crumbling bridge above a chasm.",
      "forgotten-library":
        "The desert fades as the towering shelves of an ancient library take form.",
    },
  },
  {
    src: "/images/scenes/tree-of-threads.png",
    mobileSrc: "/images/scenes/mobile/tree-of-threads.png",
    alt: "Tree of Threads",
    keywords: ["Connection", "Destiny", "Weaving", "Interconnectedness"],
    meaning:
      "The Tree of Threads embodies the web of life, where every thread tells a story and contributes to the whole. It reminds you of your role in a larger tapestry and the connections that shape your journey. This scene reflects unity and the magic of seeing the patterns in your life.",
    reversed: "Feeling isolated, disconnected, or lost in a tangled web.",
    transitionText: {
      "desert-of-keys":
        "The threads fade into glinting keys scattered across golden sands.",
      "mirror-sea":
        "The threads shimmer and stretch outward, becoming ripples on the surface of the Mirror Sea.",
      "night-circus":
        "The threads unravel into flickering lights as the Night Circus emerges in the distance.",
      "labyrinth-of-voices":
        "The threads twist into shadows and whispers, forming the Labyrinth of Voices.",
      "chamber-of-light":
        "The threads glow brighter, weaving themselves into the golden light of a sacred chamber.",
      "spiral-staircase":
        "The threads spiral upward, forming the curving steps of a staircase into the unknown.",
      "the-gateway":
        "The threads pull together, forming the shimmering arch of the Gateway.",
      "starry-abyss":
        "The threads stretch outward, dissolving into the stars of a cosmic abyss.",
      "ember-cave":
        "The threads glow like embers, merging into the warmth of a fiery cave.",
      "broken-bridge":
        "The threads unravel into the crumbling stones of a broken bridge.",
      "forgotten-library":
        "The threads tighten into glowing lines, leading to the shelves of a forgotten library.",
    },
  },
  {
    src: "/images/scenes/mirror-sea.png",
    mobileSrc: "/images/scenes/mobile/mirror-sea.png",
    alt: "Mirror Sea",
    keywords: ["Reflection", "Self-Awareness", "Truth", "Perception"],
    meaning:
      "The Mirror Sea invites you to gaze into your reflection and confront the truths that lie beneath the surface. It symbolizes introspection and the way the external world mirrors your inner self. This scene represents clarity, honesty, and the opportunity to see yourself in a new light.",
    reversed: "Distortion, avoidance of truth, or self-deception.",
    transitionText: {
      "desert-of-keys":
        "The rippling water stills, and the reflections sharpen into a desert of scattered keys.",
      "tree-of-threads":
        "The ripples stretch into glowing threads, leading you to the Tree of Threads.",
      "night-circus":
        "The reflections shimmer and shift, resolving into the flickering lights of the Night Circus.",
      "labyrinth-of-voices":
        "The sea darkens, and the whispers of voices begin to form a shadowy maze.",
      "chamber-of-light":
        "The sea’s surface glows, forming the radiant walls of a golden chamber.",
      "spiral-staircase":
        "The reflections twist upward, becoming the curving steps of a spiraling staircase.",
      "the-gateway":
        "The ripples part, revealing the shimmering archway of the Gateway.",
      "starry-abyss":
        "The sea dissolves into starlight, revealing the infinite vastness of the Starry Abyss.",
      "ember-cave":
        "The water shimmers with warmth, transforming into the glowing embers of a fiery cave.",
      "broken-bridge":
        "The sea’s surface hardens into the crumbling stones of a broken bridge.",
      "forgotten-library":
        "The ripples settle into the stillness of the Forgotten Library, its shelves towering around you.",
    },
  },
  {
    src: "/images/scenes/night-circus.png",
    mobileSrc: "/images/scenes/mobile/night-circus.png",
    alt: "Night Circus",
    keywords: ["Mystery", "Wonder", "Play", "Hidden Depths"],
    meaning:
      "The Night Circus captures the magic of stepping into the unknown and finding enchantment in unexpected places. It represents the joy of play, the allure of mystery, and the beauty of seeing the world through a lens of curiosity. This scene reflects the importance of embracing wonder while being mindful of illusion.",
    reversed: "Distraction, superficiality, or becoming lost in fantasy.",
    transitionText: {
      "desert-of-keys":
        "The circus lights fade, and the quiet stillness of the desert of keys returns.",
      "tree-of-threads":
        "The flickering lights merge into glowing threads, leading you to the Tree of Threads.",
      "mirror-sea":
        "The circus dissolves into shimmering reflections, becoming the vast Mirror Sea.",
      "labyrinth-of-voices":
        "The playful sounds grow faint, replaced by whispers and shadowy paths forming a labyrinth.",
      "chamber-of-light":
        "The circus lights shift to a steady glow, revealing the golden walls of the Chamber of Light.",
      "spiral-staircase":
        "The swirling colors twist upward, becoming the steps of a spiraling staircase.",
      "the-gateway":
        "The circus fades, leaving only the glow of the Gateway in its place.",
      "starry-abyss":
        "The lights scatter into stars, revealing the endless expanse of the Starry Abyss.",
      "ember-cave":
        "The warmth of the circus grows hotter, transforming into the glowing embers of a fiery cave.",
      "broken-bridge":
        "The laughter and music dissolve into the stillness of a crumbling bridge above a void.",
      "forgotten-library":
        "The circus fades into shadow, and the shelves of a forgotten library rise around you.",
    },
  },
  {
    src: "/images/scenes/labyrinth-of-voices.png",
    mobileSrc: "/images/scenes/mobile/labyrinth-of-voices.png",
    alt: "Labyrinth of Voices",
    keywords: ["Confusion", "Guidance", "Inner Dialogue", "Seeking Clarity"],
    meaning:
      "The Labyrinth of Voices represents the complexity of navigating your thoughts and emotions. The whispers of the labyrinth may guide or mislead, urging you to listen carefully to your inner voice. This scene speaks to the process of finding direction and understanding amidst uncertainty.",
    reversed: "Overwhelm, feeling trapped, or ignoring your inner wisdom.",
    transitionText: {
      "desert-of-keys":
        "The whispers fade, replaced by the crunch of sand underfoot as the Desert of Keys emerges.",
      "tree-of-threads":
        "The shadows twist and unravel, becoming glowing threads that lead to a radiant tree.",
      "mirror-sea":
        "The whispers grow faint, replaced by the gentle rippling sounds of the Mirror Sea.",
      "night-circus":
        "The shadows dissolve into flickering lights and distant music, revealing the Night Circus.",
      "chamber-of-light":
        "The labyrinth fades into golden light, and a warm, glowing chamber takes form.",
      "spiral-staircase":
        "The labyrinth shifts, and the walls curve upward into the spiraling steps of a staircase.",
      "the-gateway":
        "The shadows pull back to reveal the shimmering arch of the Gateway.",
      "starry-abyss":
        "The voices fade, and the walls dissolve into a vast expanse of swirling stars.",
      "ember-cave":
        "The cool shadows warm as glowing embers light your path into a fiery cave.",
      "broken-bridge":
        "The whispers vanish into silence, replaced by the sound of crumbling stones underfoot as a broken bridge appears.",
      "forgotten-library":
        "The shadows give way to rows of towering shelves, and the Labyrinth becomes a Forgotten Library.",
    },
  },
  {
    src: "/images/scenes/chamber-of-light.png",
    mobileSrc: "/images/scenes/mobile/chamber-of-light.png",
    alt: "Chamber of Light",
    keywords: ["Illumination", "Awakening", "Revelation", "Sacred Space"],
    meaning:
      "The Chamber of Light is a place of clarity and awakening, where answers come into focus and truth is revealed. It symbolizes the warmth of understanding and the radiance of your inner light. This scene represents a sacred moment of insight and transformation.",
    reversed:
      "Resistance to illumination, fear of exposure, or avoiding self-revelation.",
    transitionText: {
      "desert-of-keys":
        "The golden light softens into warm sands, revealing the scattered keys of a vast desert.",
      "tree-of-threads":
        "The golden glow forms into weaving threads, leading you to the Tree of Threads.",
      "mirror-sea":
        "The light reflects off rippling waters, and the Chamber shifts into the Mirror Sea.",
      "night-circus":
        "The steady glow flickers into colorful lights and music, transforming into the Night Circus.",
      "labyrinth-of-voices":
        "The golden glow dims, and the warmth gives way to the whispers of the Labyrinth.",
      "spiral-staircase":
        "The light condenses into a steady beam, spiraling upward into a staircase of stars.",
      "the-gateway":
        "The golden glow fades, revealing the shimmering arch of the Gateway.",
      "starry-abyss":
        "The light stretches outward, forming stars and nebulas in the vast Starry Abyss.",
      "ember-cave":
        "The golden light flickers into glowing embers, drawing you toward the warmth of a fiery cave.",
      "broken-bridge":
        "The light dissolves, and crumbling stones emerge underfoot as the Chamber becomes a Broken Bridge.",
      "forgotten-library":
        "The golden light fades into rows of glowing shelves, and the Forgotten Library emerges.",
    },
  },
  {
    src: "/images/scenes/spiral-staircase.png",
    mobileSrc: "/images/scenes/mobile/spiral-staircase.png",
    alt: "Spiral Staircase",
    keywords: ["Progress", "Repetition", "Growth", "Cyclical Change"],
    meaning:
      "The Spiral Staircase reflects the journey of growth, where every step leads upward or downward, offering perspective and opportunity for transformation. It symbolizes the balance between movement and reflection, progress, and patience.",
    reversed:
      "Feeling stuck, fear of change, or being caught in a loop without growth.",
    transitionText: {
      "desert-of-keys":
        "The spiral path descends, and the ground becomes golden sands littered with keys.",
      "tree-of-threads":
        "The stairs dissolve into glowing threads, weaving into a radiant tree.",
      "mirror-sea":
        "The spiral reflects and ripples, forming the surface of the Mirror Sea.",
      "night-circus":
        "The staircase curves into colorful lights and music, becoming the Night Circus.",
      "labyrinth-of-voices":
        "The spiraling steps straighten into shadowy paths, forming the Labyrinth of Voices.",
      "chamber-of-light":
        "The steps brighten into golden beams of light, leading to a radiant chamber.",
      "the-gateway":
        "The spiral path narrows, and the shimmering arch of the Gateway appears ahead.",
      "starry-abyss":
        "The staircase dissolves into starlight, spreading into the infinite Starry Abyss.",
      "ember-cave":
        "The stairs glow red-hot and flicker into embers, leading into a fiery cave.",
      "broken-bridge":
        "The steps crumble into fragments, forming the jagged path of a Broken Bridge.",
      "forgotten-library":
        "The staircase becomes rows of shelves, spiraling into the Forgotten Library.",
    },
  },
  {
    src: "/images/scenes/the-gateway.png",
    mobileSrc: "/images/scenes/mobile/the-gateway.png",
    alt: "The Gateway",
    keywords: ["Transition", "Initiation", "Choices", "New Opportunities"],
    meaning:
      "The Gateway symbolizes a threshold between the known and the unknown, marking the beginning of a journey. It invites reflection on the decisions that shape your path and the courage to step into the unfamiliar. This scene represents possibility and the call to explore what lies ahead.",
    reversed:
      "Hesitation, fear of change, or lingering in the past instead of moving forward.",
    transitionText: {
      "desert-of-keys":
        "The glow of the Gateway fades, and the warm sands of the Desert of Keys take shape.",
      "tree-of-threads":
        "The shimmering arch shifts into glowing threads, forming a radiant tree.",
      "mirror-sea":
        "The archway dissolves, and the shimmering surface of the Mirror Sea stretches before you.",
      "night-circus":
        "The Gateway’s light dims, replaced by flickering lanterns and music from the Night Circus.",
      "labyrinth-of-voices":
        "The archway fades into shadowy paths, forming the Labyrinth of Voices.",
      "chamber-of-light":
        "The Gateway glows brighter, transforming into the radiant Chamber of Light.",
      "spiral-staircase":
        "The archway twists upward into the spiraling steps of a staircase.",
      "starry-abyss":
        "The Gateway dissolves into stars, spreading out into the infinite Starry Abyss.",
      "ember-cave":
        "The shimmering light warms and flickers, revealing the embers of a fiery cave.",
      "broken-bridge":
        "The Gateway’s glow fades, and the cool air of a crumbling bridge emerges ahead.",
      "forgotten-library":
        "The archway twists into rows of shelves, becoming the Forgotten Library.",
    },
  },
  {
    src: "/images/scenes/starry-abyss.png",
    mobileSrc: "/images/scenes/mobile/starry-abyss.png",
    alt: "Starry Abyss",
    keywords: ["Transcendence", "Mystery", "Infinite Potential", "The Unknown"],
    meaning:
      "The Starry Abyss symbolizes cosmic wonder and limitless possibility. It invites you to embrace the vast unknown and connect with something greater than yourself. This scene reflects transcendence and the beauty of the infinite.",
    reversed:
      "Feeling insignificant, overwhelmed by the unknown, or resisting connection with the larger whole.",
    transitionText: {
      "desert-of-keys":
        "The stars dim and the ground becomes warm and sandy, revealing the Desert of Keys.",
      "tree-of-threads":
        "The stars stretch into glowing threads, leading to the radiant Tree of Threads.",
      "mirror-sea":
        "The stars reflect and ripple, forming the shimmering surface of the Mirror Sea.",
      "night-circus":
        "The stars swirl into flickering lanterns, revealing the colorful Night Circus.",
      "labyrinth-of-voices":
        "The vast expanse tightens into shadowy corridors, forming the Labyrinth of Voices.",
      "chamber-of-light":
        "The stars condense into a golden glow, becoming the radiant Chamber of Light.",
      "spiral-staircase":
        "The stars align into a spiraling path, forming the curves of a staircase.",
      "the-gateway":
        "The stars part to reveal the shimmering arch of the Gateway.",
      "ember-cave":
        "The stars fade, and the warmth of glowing embers takes their place, revealing a fiery cave.",
      "broken-bridge":
        "The stars scatter, and crumbling stones appear beneath your feet, forming a Broken Bridge.",
      "forgotten-library":
        "The stars solidify into towering shelves, creating the Forgotten Library.",
    },
  },
  {
    src: "/images/scenes/ember-cave.png",
    mobileSrc: "/images/scenes/mobile/ember-cave.png",
    alt: "Ember Cave",
    keywords: ["Creativity", "Passion", "Transformation", "Potential"],
    meaning:
      "The Ember Cave is a place of glowing warmth and hidden energy. It symbolizes the power of potential and transformation, inviting you to reignite your inner fire and embrace the sparks of creation.",
    reversed: "Suppressed creativity, fear of failure, or a lack of direction.",
    transitionText: {
      "desert-of-keys":
        "The embers cool into golden sands, revealing scattered keys in the Desert of Keys.",
      "tree-of-threads":
        "The glowing embers stretch into threads of light, forming the radiant Tree of Threads.",
      "mirror-sea":
        "The embers flicker and dissolve, giving way to the rippling waters of the Mirror Sea.",
      "night-circus":
        "The embers brighten and shift into colorful lights and music, transforming into the Night Circus.",
      "labyrinth-of-voices":
        "The embers dim, and shadows twist into the corridors of the Labyrinth of Voices.",
      "chamber-of-light":
        "The flickering embers glow brighter, becoming the steady radiance of the Chamber of Light.",
      "spiral-staircase":
        "The embers align into a spiraling path, forming the steps of a staircase.",
      "the-gateway":
        "The embers fade, leaving only the shimmering glow of the Gateway.",
      "starry-abyss":
        "The embers scatter into stars, dissolving into the infinite vastness of the Starry Abyss.",
      "broken-bridge":
        "The embers cool into cracked stones, forming the jagged path of a Broken Bridge.",
      "forgotten-library":
        "The embers dim and solidify into shelves of books, revealing the Forgotten Library.",
    },
  },
  {
    src: "/images/scenes/broken-bridge.png",
    mobileSrc: "/images/scenes/mobile/broken-bridge.png",
    alt: "Broken Bridge",
    keywords: ["Disconnection", "Rebuilding", "Perseverance", "Resilience"],
    meaning:
      "The Broken Bridge represents a moment of challenge, where a connection has been severed or a path interrupted. It speaks to the strength required to rebuild and the opportunity for growth that lies in the process of repair.",
    reversed:
      "Avoidance of confrontation, fear of rebuilding, or retreating from challenges.",
    transitionText: {
      "desert-of-keys":
        "The crumbling stones dissolve into warm sands, forming the Desert of Keys.",
      "tree-of-threads":
        "The jagged stones smooth into glowing threads, leading to the Tree of Threads.",
      "mirror-sea":
        "The mist clears, and the reflective surface of the Mirror Sea stretches before you.",
      "night-circus":
        "The broken stones fade, replaced by flickering lanterns and the music of the Night Circus.",
      "labyrinth-of-voices":
        "The stones darken and shift into shadowy walls, forming the Labyrinth of Voices.",
      "chamber-of-light":
        "The broken path glows, brightening into the golden light of a radiant chamber.",
      "spiral-staircase":
        "The stones curve upward, forming the spiraling steps of a staircase.",
      "the-gateway":
        "The broken stones solidify into the shimmering archway of the Gateway.",
      "starry-abyss":
        "The mist clears into a vast expanse of stars, revealing the Starry Abyss.",
      "ember-cave":
        "The jagged path glows red-hot, leading into the warmth of a fiery cave.",
      "forgotten-library":
        "The stones smooth into shelves of books, forming the Forgotten Library.",
    },
  },
  {
    src: "/images/scenes/forgotten-library.png",
    mobileSrc: "/images/scenes/mobile/forgotten-library.png",
    alt: "Forgotten Library",
    keywords: ["Knowledge", "Wisdom", "Memory", "Repressed Truths"],
    meaning:
      "The Forgotten Library represents the hidden stories and knowledge buried within. It symbolizes the power of remembering and uncovering truths that guide you forward. This scene reflects the depth of learning and the value of reconnecting with what was lost.",
    reversed:
      "Fear of discovery, neglecting lessons from the past, or clinging to outdated knowledge.",
    transitionText: {
      "desert-of-keys":
        "The towering shelves dissolve into golden sands, revealing scattered keys.",
      "tree-of-threads":
        "The books shimmer and weave into threads of light, forming the Tree of Threads.",
      "mirror-sea":
        "The stillness of the library reflects outward, becoming the rippling surface of the Mirror Sea.",
      "night-circus":
        "The library fades into shadow, and flickering lights reveal the Night Circus.",
      "labyrinth-of-voices":
        "The shelves twist into shadowy walls, forming the Labyrinth of Voices.",
      "chamber-of-light":
        "The library brightens, its glow forming the golden radiance of the Chamber of Light.",
      "spiral-staircase":
        "The shelves curve upward, forming the spiraling steps of a staircase.",
      "the-gateway":
        "The rows of books part, revealing the shimmering archway of the Gateway.",
      "starry-abyss":
        "The shelves dissolve into stars, revealing the infinite expanse of the Starry Abyss.",
      "ember-cave":
        "The shelves glow red-hot, transforming into the embers of a fiery cave.",
      "broken-bridge":
        "The shelves crack and crumble, forming the jagged path of a Broken Bridge.",
    },
  },
];

export const sceneReadings = {
  "desert-of-keys": {
    seeker:
      "The Seeker in the Desert of Keys might reflect a moment of curiosity and exploration. The scattered keys could symbolize opportunities waiting to be discovered or challenges that require patience. This pairing may suggest a journey of self-discovery through choices yet to be made.",
    protector:
      "The Protector in the Desert of Keys could emphasize the need to safeguard your decisions. This combination might highlight the importance of creating boundaries while navigating vast possibilities. It may suggest resilience and care in the face of uncertainty.",
    shadow:
      "The Shadow in the Desert of Keys might represent the fear of choosing the wrong path or the hesitation to confront hidden truths. The scattered keys could symbolize unresolved doubts or repressed desires. This pairing may point toward an opportunity to face inner uncertainties.",
    child:
      "The Child in the Desert of Keys might bring a sense of playful exploration to the scene. The keys could symbolize endless possibilities viewed through a lens of wonder and simplicity. This combination may encourage embracing curiosity without overthinking the outcome.",
    caretaker:
      "The Caretaker in the Desert of Keys may reflect a need to nurture yourself or others as you navigate a world of choices. This pairing could suggest that decisions require compassion and patience, both for yourself and those around you.",
    warrior:
      "The Warrior in the Desert of Keys might symbolize determination and the courage to make decisive choices. The keys could represent opportunities requiring strength and focus to unlock. This pairing may suggest that clarity comes through bold action.",
    dreamer:
      "The Dreamer in the Desert of Keys may highlight imaginative possibilities hidden within the scene. The keys could be portals to new ideas or visions waiting to be explored. This combination might encourage looking beyond the obvious for inspiration.",
    sage: "The Sage in the Desert of Keys might bring wisdom and reflection to the process of making choices. The keys could represent lessons learned or insights yet to be gained. This pairing may suggest that looking inward can illuminate the path ahead.",
    rebel:
      "The Rebel in the Desert of Keys might challenge conventional approaches to decision-making. The keys could represent systems or expectations that the Rebel seeks to bypass or redefine. This pairing may suggest breaking free from imposed limitations.",
    lover:
      "The Lover in the Desert of Keys might imbue the scene with emotional depth. The keys could symbolize connections, passions, or desires waiting to be unlocked. This pairing may reflect the importance of listening to the heart when navigating choices.",
    builder:
      "The Builder in the Desert of Keys may highlight the importance of creating stability and structure. The keys could symbolize tools for crafting a meaningful foundation. This pairing might suggest that progress requires steady, deliberate effort.",
    witness:
      "The Witness in the Desert of Keys could reflect a quiet observation of the landscape and its possibilities. The keys might symbolize choices to consider without immediate action. This pairing may suggest clarity through detachment and reflection.",
  },
  "tree-of-threads": {
    seeker:
      "The Seeker at the Tree of Threads might reflect a journey of discovery and curiosity about life's connections. The glowing threads could symbolize unseen pathways or stories waiting to unfold. This pairing may encourage exploration of how different aspects of life intertwine.",
    protector:
      "The Protector at the Tree of Threads may suggest safeguarding fragile connections or reinforcing bonds. The threads could symbolize relationships that need care and protection. This pairing might highlight the strength required to maintain balance in interconnectedness.",
    shadow:
      "The Shadow at the Tree of Threads might reveal fears of entanglement or losing control in complex relationships. The threads could represent obligations or attachments that feel overwhelming. This pairing may suggest an opportunity to confront hidden emotions about connection.",
    child:
      "The Child at the Tree of Threads could bring a sense of wonder and simplicity to the intricate patterns of life. The threads might symbolize the beauty of discovery and the joy of interconnectedness. This pairing may encourage a playful approach to seeing the bigger picture.",
    caretaker:
      "The Caretaker at the Tree of Threads might reflect the need to nurture relationships and tend to the bonds that hold things together. The threads could symbolize the importance of maintaining what sustains us. This pairing may suggest a gentle, patient energy.",
    warrior:
      "The Warrior at the Tree of Threads could highlight the courage needed to navigate or untangle complex connections. The threads might symbolize challenges requiring resilience and focus. This pairing may suggest that strength can bring clarity to life's knots.",
    dreamer:
      "The Dreamer at the Tree of Threads might bring a sense of wonder and imagination to the scene. The threads could represent endless possibilities and potential futures. This pairing may encourage envisioning new paths woven from existing connections.",
    sage: "The Sage at the Tree of Threads may reflect the wisdom that comes from seeing the interconnectedness of all things. The threads could symbolize lessons from the past and the present shaping the future. This pairing might encourage thoughtful reflection on life’s patterns.",
    rebel:
      "The Rebel at the Tree of Threads could challenge the idea of being bound by predetermined patterns. The threads might symbolize limitations that the Rebel seeks to break free from. This pairing may suggest a redefinition of what connection and freedom mean.",
    lover:
      "The Lover at the Tree of Threads might bring emotional depth to the scene, where the threads symbolize bonds of love and intimacy. This pairing may reflect the beauty and complexity of relationships, inviting a deeper appreciation of connection.",
    builder:
      "The Builder at the Tree of Threads may emphasize the importance of weaving strong, stable foundations. The threads could symbolize the process of creating structure and growth. This pairing might suggest that steady effort brings meaningful results.",
    witness:
      "The Witness at the Tree of Threads could reflect an appreciation of the intricate patterns of life. The threads might symbolize connections observed without interference. This pairing may suggest clarity and insight gained through quiet observation.",
  },
  "mirror-sea": {
    seeker:
      "The Seeker at the Mirror Sea might reflect a journey of self-discovery through introspection. The reflective surface could symbolize a search for clarity or hidden truths, encouraging the Seeker to explore their inner world with curiosity.",
    protector:
      "The Protector at the Mirror Sea could emphasize guarding your inner truths and ensuring you feel safe while confronting your reflections. The still water might suggest a need to protect emotional boundaries or maintain balance.",
    shadow:
      "The Shadow at the Mirror Sea might reveal hidden fears or suppressed aspects of the self. The distortions in the water could symbolize illusions or unresolved emotions that are waiting to be acknowledged and integrated.",
    child:
      "The Child at the Mirror Sea may bring a sense of wonder to the reflective surface. The interplay of light and ripples might symbolize an opportunity to explore the world with innocence and curiosity, embracing self-discovery without judgment.",
    caretaker:
      "The Caretaker at the Mirror Sea might reflect the need to nurture yourself while facing emotional truths. The water’s calm surface could symbolize a healing space where compassion and self-acceptance flow freely.",
    warrior:
      "The Warrior at the Mirror Sea might represent the courage to confront hard truths and face personal challenges. The reflections in the water could signify battles fought within, requiring strength to move forward.",
    dreamer:
      "The Dreamer at the Mirror Sea may highlight the imaginative potential hidden within the reflections. The shifting ripples could symbolize endless possibilities, encouraging creative exploration of what lies beneath the surface.",
    sage: "The Sage at the Mirror Sea might bring wisdom and clarity to the scene. The reflective water could symbolize the knowledge gained through introspection, inviting a deeper understanding of your journey.",
    rebel:
      "The Rebel at the Mirror Sea might challenge the illusions or falsehoods reflected on the surface. The shifting water could symbolize a rejection of societal expectations, encouraging authenticity and individuality.",
    lover:
      "The Lover at the Mirror Sea might bring emotional depth to the reflections. The water could symbolize the interplay of relationships and the emotional truths that lie beneath. This pairing may highlight the importance of love and connection.",
    builder:
      "The Builder at the Mirror Sea might emphasize the construction of a stable inner foundation. The calm surface could symbolize the potential to create clarity and purpose through deliberate reflection and effort.",
    witness:
      "The Witness at the Mirror Sea could reflect quiet observation of the self and the environment. The stillness of the water might symbolize a moment of clarity gained through detachment and mindfulness.",
  },
  "night-circus": {
    seeker:
      "The Seeker at the Night Circus might reflect the thrill of exploring the unknown. The flickering lanterns and vibrant performances could symbolize a search for wonder and discovery in unexpected places.",
    protector:
      "The Protector at the Night Circus may emphasize the need to stay grounded amidst the illusions and excitement. The swirling lights might suggest guarding your sense of self while navigating the spectacle.",
    shadow:
      "The Shadow at the Night Circus could reveal the danger of losing yourself in illusions or distractions. The mysterious atmosphere might symbolize repressed desires or fears lurking behind the curtain.",
    child:
      "The Child at the Night Circus might bring a sense of playfulness and wonder to the scene. The colorful displays could symbolize the joy of uninhibited exploration and the magic of seeing the world with fresh eyes.",
    caretaker:
      "The Caretaker at the Night Circus might reflect the need to create a space for joy and connection. The scene could symbolize nurturing relationships or finding balance between work and play.",
    warrior:
      "The Warrior at the Night Circus might emphasize courage and focus in a world full of distractions. The lively performances could symbolize challenges that require determination and clarity to navigate.",
    dreamer:
      "The Dreamer at the Night Circus may highlight the creative energy and imaginative potential of the scene. The swirling lights and enigmatic performances could symbolize dreams waiting to be realized.",
    sage: "The Sage at the Night Circus might bring wisdom and insight to the scene. The vibrant displays could symbolize lessons hidden within the spectacle, waiting to be uncovered through reflection.",
    rebel:
      "The Rebel at the Night Circus could challenge the illusions and societal norms reflected in the performances. The lively energy might symbolize breaking free from conventions and embracing individuality.",
    lover:
      "The Lover at the Night Circus might bring emotional depth to the scene. The magic of the circus could symbolize passion, connection, and the joy of shared experiences.",
    builder:
      "The Builder at the Night Circus may focus on creating stability amidst chaos. The ever-changing performances might symbolize the importance of grounding yourself while navigating a dynamic environment.",
    witness:
      "The Witness at the Night Circus could reflect quiet observation of the vibrant scene. The swirling lights and performances might symbolize the beauty of simply appreciating the moment without becoming entangled.",
  },
  "labyrinth-of-voices": {
    seeker:
      "The Seeker in the Labyrinth of Voices might reflect a journey of navigating through confusion and hidden truths. The maze could symbolize the complexity of finding clarity amidst internal or external chaos, encouraging persistence in the search for understanding.",
    protector:
      "The Protector in the Labyrinth of Voices could emphasize the importance of creating boundaries to protect yourself from overwhelming influences. The whispers in the maze might suggest guarding your energy while navigating challenges.",
    shadow:
      "The Shadow in the Labyrinth of Voices might reveal fears of being lost or trapped. The shifting paths and haunting voices could symbolize inner doubts or unresolved emotions waiting to be confronted and understood.",
    child:
      "The Child in the Labyrinth of Voices may bring a sense of curiosity to the maze. The echoes and shifting walls might symbolize the wonder of exploration and the ability to approach challenges with openness and playfulness.",
    caretaker:
      "The Caretaker in the Labyrinth of Voices might reflect the need to nurture yourself or others during times of confusion. The maze could symbolize emotional complexity, where compassion becomes the guiding light.",
    warrior:
      "The Warrior in the Labyrinth of Voices might symbolize the courage to confront shadows and find a way forward. The maze and its whispers could represent challenges that require focus and determination to overcome.",
    dreamer:
      "The Dreamer in the Labyrinth of Voices may highlight the power of imagination amidst confusion. The shifting walls could symbolize endless possibilities, suggesting that creativity can illuminate new paths through the unknown.",
    sage: "The Sage in the Labyrinth of Voices might bring wisdom and clarity to the complexity of the scene. The maze could symbolize the lessons hidden within confusion, encouraging reflection and patience to uncover deeper truths.",
    rebel:
      "The Rebel in the Labyrinth of Voices might challenge the structure of the maze itself. The shifting paths could symbolize societal or personal limitations that the Rebel seeks to break apart or bypass entirely.",
    lover:
      "The Lover in the Labyrinth of Voices might bring emotional depth to the scene. The maze could symbolize the complexity of relationships or the process of finding connection and understanding amidst uncertainty.",
    builder:
      "The Builder in the Labyrinth of Voices may focus on creating structure within chaos. The maze could symbolize the process of establishing order and stability through careful planning and resilience.",
    witness:
      "The Witness in the Labyrinth of Voices might reflect quiet observation of the shifting paths and whispers. The maze could symbolize the power of stillness and detachment in gaining clarity through observation.",
  },
  "chamber-of-light": {
    seeker:
      "The Seeker in the Chamber of Light might reflect a journey of illumination and discovery. The golden glow could symbolize a new understanding or revelation that emerges from the willingness to explore the unknown.",
    protector:
      "The Protector in the Chamber of Light could emphasize the importance of guarding what is sacred. The radiant warmth might symbolize the need to protect clarity and truth from being overshadowed or diminished.",
    shadow:
      "The Shadow in the Chamber of Light might reveal discomfort with exposure or fear of being fully seen. The bright illumination could symbolize hidden truths or vulnerabilities brought to the surface for healing and integration.",
    child:
      "The Child in the Chamber of Light may bring a sense of wonder and joy to the scene. The glowing warmth might symbolize the beauty of discovering clarity and embracing life’s simplest and most heartfelt truths.",
    caretaker:
      "The Caretaker in the Chamber of Light might reflect the need to nurture what is emerging into clarity. The radiant space could symbolize the importance of tending to personal growth and creating a space for others to flourish.",
    warrior:
      "The Warrior in the Chamber of Light might symbolize the courage to step into truth and embrace transformation. The golden glow could represent the strength required to confront challenges and emerge stronger.",
    dreamer:
      "The Dreamer in the Chamber of Light may highlight the creative potential that comes with illumination. The warm glow might symbolize endless possibilities and the inspiration to dream bigger and brighter.",
    sage: "The Sage in the Chamber of Light might bring wisdom and perspective to the scene. The radiant space could symbolize the clarity that comes from reflection and the ability to see the bigger picture.",
    rebel:
      "The Rebel in the Chamber of Light might challenge conventional ideas of clarity or truth. The brightness could symbolize an opportunity to redefine what illumination means on personal terms, breaking free from imposed definitions.",
    lover:
      "The Lover in the Chamber of Light might bring emotional depth to the scene. The glowing warmth could symbolize the power of love and connection as forces of healing and illumination.",
    builder:
      "The Builder in the Chamber of Light may focus on creating stability and growth from a place of clarity. The golden radiance could symbolize the foundation needed to build something meaningful and enduring.",
    witness:
      "The Witness in the Chamber of Light might reflect a quiet appreciation of the scene’s beauty and clarity. The radiant space could symbolize the value of observing without judgment, allowing truths to emerge naturally.",
  },
  "spiral-staircase": {
    seeker:
      "The Seeker on the Spiral Staircase might reflect a journey of exploration that feels endless yet purposeful. The winding steps could symbolize the process of uncovering truths one step at a time, encouraging curiosity and persistence.",
    protector:
      "The Protector on the Spiral Staircase may emphasize the importance of staying grounded while navigating cyclical challenges. The curve of the staircase could symbolize the need to safeguard your progress as you ascend or descend.",
    shadow:
      "The Shadow on the Spiral Staircase might reveal feelings of being trapped in repetitive patterns. The endless spirals could symbolize doubts or fears that need to be faced to find a clearer path forward.",
    child:
      "The Child on the Spiral Staircase may bring a sense of wonder to the winding path. The spiral could symbolize a playful exploration of life’s twists and turns, embracing the joy of movement and discovery.",
    caretaker:
      "The Caretaker on the Spiral Staircase might reflect the need to nurture yourself or others during a time of progress. The steps could symbolize the importance of pausing to reflect and care for what sustains you on the journey.",
    warrior:
      "The Warrior on the Spiral Staircase might symbolize determination and strength to keep moving forward. The winding path could represent challenges that require resilience and focus to overcome.",
    dreamer:
      "The Dreamer on the Spiral Staircase may highlight the imaginative possibilities of the journey. The spiraling steps could symbolize creative visions and the potential for transformation through inspired thinking.",
    sage: "The Sage on the Spiral Staircase might bring wisdom and perspective to the winding path. The curve of the stairs could symbolize the interconnectedness of progress and reflection, encouraging thoughtful movement.",
    rebel:
      "The Rebel on the Spiral Staircase might challenge the idea of linear progress or endless repetition. The steps could symbolize a structure that the Rebel seeks to redefine, creating their own way forward.",
    lover:
      "The Lover on the Spiral Staircase might bring emotional depth to the journey. The spirals could symbolize the intertwining of connections and relationships, reflecting the beauty and complexity of shared growth.",
    builder:
      "The Builder on the Spiral Staircase may focus on creating stability within the twists and turns. The steps could symbolize the process of building a foundation even when the path feels uncertain or winding.",
    witness:
      "The Witness on the Spiral Staircase might reflect a quiet observation of the journey’s rhythm. The spirals could symbolize the importance of appreciating the process without rushing toward an end.",
  },
  "the-gateway": {
    seeker:
      "The Seeker at the Gateway might reflect the excitement of stepping into the unknown. The shimmering arch could symbolize a threshold to new opportunities and discoveries, inviting curiosity and boldness.",
    protector:
      "The Protector at the Gateway may emphasize the importance of preparing for what lies ahead. The arch could symbolize a moment of transition that requires mindfulness and safeguarding your energy.",
    shadow:
      "The Shadow at the Gateway might reveal fears or hesitation about crossing into the unknown. The threshold could symbolize the tension between staying in the familiar and embracing change.",
    child:
      "The Child at the Gateway may bring a sense of wonder and excitement to the threshold. The shimmering arch could symbolize the magic of beginnings, where anything feels possible.",
    caretaker:
      "The Caretaker at the Gateway might reflect the importance of tending to yourself or others before stepping forward. The threshold could symbolize a moment to pause and prepare with care and compassion.",
    warrior:
      "The Warrior at the Gateway might symbolize the courage to step boldly into new territory. The arch could represent a challenge or opportunity that requires strength and determination to move through.",
    dreamer:
      "The Dreamer at the Gateway may highlight the imaginative possibilities beyond the threshold. The shimmering arch could symbolize the potential for new dreams and visions waiting to be realized.",
    sage: "The Sage at the Gateway might bring wisdom and reflection to the moment of transition. The arch could symbolize the importance of considering past lessons as you prepare to step into the unknown.",
    rebel:
      "The Rebel at the Gateway might challenge the nature of the threshold itself. The shimmering arch could symbolize societal or personal boundaries that the Rebel seeks to transcend or redefine.",
    lover:
      "The Lover at the Gateway might bring emotional depth to the moment of transition. The threshold could symbolize the connection between what is known and what is longed for, reflecting the power of love to guide the way.",
    builder:
      "The Builder at the Gateway may focus on creating a solid foundation before crossing into new territory. The arch could symbolize the importance of planning and preparation to ensure stability in what lies ahead.",
    witness:
      "The Witness at the Gateway might reflect quiet observation of the threshold. The shimmering arch could symbolize the beauty of transition and the clarity gained from pausing to reflect.",
  },
  "starry-abyss": {
    seeker:
      "The Seeker in the Starry Abyss might reflect a yearning to explore the infinite and unknown. The endless expanse of stars could symbolize the vast potential of discovery and the courage to step into mystery.",
    protector:
      "The Protector in the Starry Abyss may emphasize the importance of staying grounded while navigating the immensity of the cosmos. The scene could symbolize the need to protect your sense of self while connecting with something greater.",
    shadow:
      "The Shadow in the Starry Abyss might reveal feelings of insignificance or fear of losing oneself in the vastness. The stars could symbolize hidden doubts or unresolved emotions that emerge in the face of the infinite.",
    child:
      "The Child in the Starry Abyss may bring a sense of wonder and playfulness to the vast expanse. The sparkling stars could symbolize the joy of curiosity and the innocence of embracing the unknown.",
    caretaker:
      "The Caretaker in the Starry Abyss might reflect the importance of nurturing yourself or others while facing the immensity of life. The scene could symbolize the quiet strength found in compassion and care.",
    warrior:
      "The Warrior in the Starry Abyss might symbolize the courage to confront the unknown and forge a path through it. The stars could represent challenges that require determination and focus to navigate.",
    dreamer:
      "The Dreamer in the Starry Abyss may highlight the boundless possibilities of imagination. The infinite expanse could symbolize creative potential and the power of dreams to shape reality.",
    sage: "The Sage in the Starry Abyss might bring wisdom and perspective to the scene. The stars could symbolize timeless truths and the interconnectedness of all things, inviting deep reflection.",
    rebel:
      "The Rebel in the Starry Abyss might challenge conventional perceptions of the cosmos. The vastness could symbolize a breaking away from limitations and a bold reimagining of what lies beyond.",
    lover:
      "The Lover in the Starry Abyss might bring emotional depth to the infinite expanse. The stars could symbolize the beauty of connection and the enduring power of love, even in the face of vastness.",
    builder:
      "The Builder in the Starry Abyss may focus on creating stability within the infinite. The stars could symbolize the process of constructing meaning and structure in a boundless, ever-changing environment.",
    witness:
      "The Witness in the Starry Abyss might reflect quiet observation of the infinite expanse. The stars could symbolize the value of seeing without judgment, appreciating the vast beauty of existence.",
  },
  "ember-cave": {
    seeker:
      "The Seeker in the Ember Cave might reflect a journey of exploring hidden potential and creativity. The glowing embers could symbolize sparks of inspiration waiting to be uncovered and nurtured.",
    protector:
      "The Protector in the Ember Cave may emphasize the importance of guarding your inner fire. The warmth of the embers could symbolize the need to protect your energy and passions from being extinguished.",
    shadow:
      "The Shadow in the Ember Cave might reveal fears of burning out or being consumed by intense emotions. The flickering embers could symbolize unresolved desires or hidden anger that needs acknowledgment.",
    child:
      "The Child in the Ember Cave may bring a sense of curiosity and playfulness to the glowing warmth. The embers could symbolize the joy of discovering small but meaningful sparks in unexpected places.",
    caretaker:
      "The Caretaker in the Ember Cave might reflect the need to tend to your inner fire with care and patience. The scene could symbolize the importance of nurturing your passions and protecting what lights your path.",
    warrior:
      "The Warrior in the Ember Cave might symbolize the courage to harness the power of your inner fire. The glowing embers could represent challenges that require focus and strength to transform into action.",
    dreamer:
      "The Dreamer in the Ember Cave may highlight the creative potential that lies within the glowing warmth. The embers could symbolize the spark of imagination, waiting to be fanned into something extraordinary.",
    sage: "The Sage in the Ember Cave might bring wisdom and insight to the scene. The glowing embers could symbolize the lessons that arise from small moments of reflection and the power of subtle transformation.",
    rebel:
      "The Rebel in the Ember Cave might challenge the limitations placed on creativity and passion. The embers could symbolize the potential to break free from convention and ignite bold new ideas.",
    lover:
      "The Lover in the Ember Cave might bring emotional depth to the glowing warmth. The embers could symbolize the passion and connection that drive transformation and the beauty of shared energy.",
    builder:
      "The Builder in the Ember Cave may focus on using the sparks of potential to create something lasting. The embers could symbolize the foundation of growth, requiring patience and care to develop fully.",
    witness:
      "The Witness in the Ember Cave might reflect quiet appreciation of the scene’s warmth and glow. The embers could symbolize the beauty of observing transformation without interference, allowing it to unfold naturally.",
  },
  "broken-bridge": {
    seeker:
      "The Seeker at the Broken Bridge might reflect a journey interrupted by obstacles or disconnection. The fractured path could symbolize the need to find new ways forward, encouraging creativity and resilience in exploration.",
    protector:
      "The Protector at the Broken Bridge may emphasize the importance of stability and caution. The broken path might symbolize a need to safeguard progress while finding ways to repair or navigate the challenges ahead.",
    shadow:
      "The Shadow at the Broken Bridge might reveal fears of failure or a sense of being stuck. The fractured structure could symbolize unresolved emotions or doubts, offering a chance to confront what feels unsteady.",
    child:
      "The Child at the Broken Bridge may bring a sense of curiosity and playfulness to the fractured path. The scene could symbolize seeing potential in what appears broken and finding joy in creating something new.",
    caretaker:
      "The Caretaker at the Broken Bridge might reflect the importance of tending to the fractures in life. The scene could symbolize the value of nurturing relationships or rebuilding connections with patience and care.",
    warrior:
      "The Warrior at the Broken Bridge might symbolize the courage to face setbacks and keep moving forward. The fractured structure could represent challenges that require determination and strength to overcome.",
    dreamer:
      "The Dreamer at the Broken Bridge may highlight the potential to imagine new possibilities from what seems lost. The scene could symbolize the creative energy needed to envision a path forward despite obstacles.",
    sage: "The Sage at the Broken Bridge might bring wisdom and reflection to the scene. The fractured path could symbolize lessons learned from adversity and the importance of seeing challenges as opportunities for growth.",
    rebel:
      "The Rebel at the Broken Bridge might challenge the idea of following the original path. The scene could symbolize an opportunity to break free from expectations and forge a new direction entirely.",
    lover:
      "The Lover at the Broken Bridge might bring emotional depth to the fractured path. The scene could symbolize the complexity of relationships and the beauty of healing bonds that have been strained or broken.",
    builder:
      "The Builder at the Broken Bridge may focus on rebuilding what has been damaged. The scene could symbolize the process of creating stability and strength from a place of disruption.",
    witness:
      "The Witness at the Broken Bridge might reflect quiet observation of the fractures and their significance. The scene could symbolize the value of understanding the bigger picture before taking action.",
  },
  "forgotten-library": {
    seeker:
      "The Seeker in the Forgotten Library might reflect a journey into the depths of knowledge and memory. The towering shelves could symbolize hidden truths or forgotten lessons waiting to be uncovered.",
    protector:
      "The Protector in the Forgotten Library may emphasize the importance of preserving wisdom and guarding what is sacred. The endless shelves could symbolize a need to ensure valuable knowledge is not lost or neglected.",
    shadow:
      "The Shadow in the Forgotten Library might reveal fears of confronting buried memories or truths. The dusty tomes could symbolize repressed emotions or unresolved experiences that surface when we look inward.",
    child:
      "The Child in the Forgotten Library may bring a sense of wonder to the vast collection of stories. The scene could symbolize the joy of discovery and the ability to see magic in forgotten places.",
    caretaker:
      "The Caretaker in the Forgotten Library might reflect the importance of nurturing what has been neglected. The scene could symbolize the need to tend to your inner world, preserving wisdom and fostering growth.",
    warrior:
      "The Warrior in the Forgotten Library might symbolize the courage to confront forgotten truths or difficult lessons. The towering shelves could represent challenges that require strength and determination to face.",
    dreamer:
      "The Dreamer in the Forgotten Library may highlight the creative potential hidden within its dusty corners. The scene could symbolize the power of imagination to bring forgotten stories to life and inspire new possibilities.",
    sage: "The Sage in the Forgotten Library might bring wisdom and reflection to the scene. The endless shelves could symbolize the interconnectedness of knowledge and the importance of seeking deeper understanding.",
    rebel:
      "The Rebel in the Forgotten Library might challenge the idea of clinging to outdated knowledge. The scene could symbolize the need to break free from traditions or beliefs that no longer serve you.",
    lover:
      "The Lover in the Forgotten Library might bring emotional depth to the rediscovery of knowledge. The scene could symbolize the beauty of reconnecting with lost passions or the emotional resonance of untold stories.",
    builder:
      "The Builder in the Forgotten Library may focus on organizing and preserving what has been uncovered. The endless shelves could symbolize the process of creating structure and meaning from fragments of the past.",
    witness:
      "The Witness in the Forgotten Library might reflect quiet appreciation of the wisdom stored within. The scene could symbolize the value of observing without judgment, allowing the forgotten to reveal itself in time.",
  },
};

export const archetypeData: Archetype[] = [
  {
    src: "/images/archetypes/seeker.png",
    mobileSrc: "/images/archetypes/mobile/seeker.png",
    alt: "The Seeker",
    name: "The Seeker",
    keywords: [
      "Curiosity",
      "Exploration",
      "New Beginnings",
      "Yearning for Knowledge",
    ],
    meaning:
      "The Seeker embodies the spirit of adventure and the desire to uncover hidden truths. They represent a fresh start, guiding you to embrace curiosity and move forward with an open mind. This archetype symbolizes both the courage to step into the unknown and the excitement of discovery.",
    reversed:
      "Fear of change, reluctance to explore, or becoming lost in aimless wandering.",
  },
  {
    src: "/images/archetypes/protector.png",
    mobileSrc: "/images/archetypes/mobile/protector.png",
    alt: "The Protector",
    name: "The Protector",
    keywords: ["Strength", "Guardianship", "Resilience", "Boundaries"],
    meaning:
      "The Protector stands as a guardian, offering safety, courage, and the power to preserve what is sacred. They symbolize the importance of establishing boundaries and the strength required to maintain them. Their presence reflects steadfastness and the ability to shield oneself or others from harm.",
    reversed:
      "Overprotection, rigidity, or shielding oneself from necessary growth.",
  },
  {
    src: "/images/archetypes/shadow.png",
    mobileSrc: "/images/archetypes/mobile/shadow.png",
    alt: "The Shadow",
    name: "The Shadow",
    keywords: [
      "Repressed Desires",
      "Hidden Truths",
      "Transformation",
      "The Unknown",
    ],
    meaning:
      "The Shadow symbolizes the unseen and the unacknowledged. They invite you to embrace what lies beneath the surface, transforming fear into wisdom and shame into strength. They embody the transformative power of facing the parts of yourself you may have hidden.",
    reversed: "Denial, avoidance, or being overwhelmed by unresolved fears.",
  },
  {
    src: "/images/archetypes/child.png",
    mobileSrc: "/images/archetypes/mobile/child.png",
    alt: "The Child",
    name: "The Child",
    keywords: ["Innocence", "Wonder", "Playfulness", "New Perspectives"],
    meaning:
      "The Child brings the energy of joy, simplicity, and fresh perspectives. They encourage reconnection with a sense of wonder and the freedom of unfiltered emotion. Their presence represents openness, creativity, and the ability to approach life with curiosity and trust.",
    reversed: "Naivety, emotional immaturity, or a loss of connection to joy.",
  },
  {
    src: "/images/archetypes/caretaker.png",
    mobileSrc: "/images/archetypes/mobile/caretaker.png",
    alt: "The Caretaker",
    name: "The Caretaker",
    keywords: ["Compassion", "Nurturing", "Healing", "Selflessness"],
    meaning:
      "The Caretaker radiates compassion and the energy of healing. They reflect the delicate balance of giving and receiving care, encouraging connection and self-preservation in the process. Their presence represents tending to what truly matters, cultivating a space for growth and love.",
    reversed:
      "Neglect of self, overextension, or imbalance in giving and receiving care.",
  },
  {
    src: "/images/archetypes/warrior.png",
    mobileSrc: "/images/archetypes/mobile/warrior.png",
    alt: "The Warrior",
    name: "The Warrior",
    keywords: ["Courage", "Action", "Determination", "Focus"],
    meaning:
      "The Warrior embodies the drive to face challenges and move forward with resolve. They represent decisive action and the strength to overcome obstacles, whether internal or external. Their presence reflects bravery, purpose, and the will to defend what is important.",
    reversed: "Aggression, burnout, or misdirected energy.",
  },

  {
    src: "/images/archetypes/dreamer.png",
    mobileSrc: "/images/archetypes/mobile/dreamer.png",
    alt: "The Dreamer",
    name: "The Dreamer",
    keywords: ["Imagination", "Intuition", "Potential", "Vision"],
    meaning:
      "The Dreamer symbolizes creative energy and the vast potential of intuition. They encourage the exploration of inner worlds and the power of envisioning what could be. Their presence reflects the ability to dream beyond boundaries and manifest new realities.",
    reversed: "Escapism, unrealistic expectations, or neglecting action.",
  },
  {
    src: "/images/archetypes/sage.png",
    mobileSrc: "/images/archetypes/mobile/sage.png",
    alt: "The Sage",
    name: "The Sage",
    keywords: ["Wisdom", "Introspection", "Guidance", "Perspective"],
    meaning:
      "The Sage reflects the quiet power of introspection and the unfolding of wisdom over time. They symbolize guidance and understanding, offering perspective and clarity. Their presence encourages the cultivation of patience and trust in the journey of self-discovery.",
    reversed: "Isolation, stubbornness, or resistance to learning.",
  },
  {
    src: "/images/archetypes/rebel.png",
    mobileSrc: "/images/archetypes/mobile/rebel.png",
    alt: "The Rebel",
    name: "The Rebel",
    keywords: ["Defiance", "Transformation", "Individuality", "Freedom"],
    meaning:
      "The Rebel stands for boldness, individuality, and the courage to challenge limitations. They represent the drive to transform and reshape the world in alignment with truth and freedom. Their presence encourages a fearless embrace of personal authenticity.",
    reversed: "Recklessness, stubborn defiance, or rejecting help from others.",
  },
  {
    src: "/images/archetypes/lover.png",
    mobileSrc: "/images/archetypes/mobile/lover.png",
    alt: "The Lover",
    name: "The Lover",
    keywords: ["Connection", "Passion", "Relationships", "Self-Love"],
    meaning:
      "The Lover embodies the energy of connection and vulnerability, radiating warmth and passion. They symbolize relationships in all forms—romantic, platonic, or self-love—and represent the power of opening the heart. Their presence reflects intimacy, harmony, and emotional depth.",
    reversed: "Co-dependency, fear of intimacy, or neglect of self-love.",
  },
  {
    src: "/images/archetypes/builder.png",
    mobileSrc: "/images/archetypes/mobile/builder.png",
    alt: "The Builder",
    name: "The Builder",
    keywords: ["Creation", "Structure", "Growth", "Stability"],
    meaning:
      "The Builder represents the steady process of creation and growth. They symbolize the importance of building strong foundations and cultivating patience. Their presence reflects dedication, craftsmanship, and the ability to transform vision into reality.",
    reversed: "Stagnation, perfectionism, or an inability to adapt.",
  },
  {
    src: "/images/archetypes/witness.png",
    mobileSrc: "/images/archetypes/mobile/witness.png",
    alt: "The Witness",
    name: "The Witness",
    keywords: ["Observation", "Neutrality", "Clarity", "Self-Awareness"],
    meaning:
      "The Witness embodies the power of observation and detachment, offering clarity and understanding without judgment. They symbolize the importance of seeing things as they are and finding insight in stillness. Their presence reflects the gift of perspective and the ability to gain wisdom through awareness.",
    reversed: "Detachment, apathy, or fear of engagement.",
  },
];

export const getRandomArchetype = () => {
  return archetypeData[Math.floor(Math.random() * archetypeData.length)];
};
