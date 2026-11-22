/**
 * Site copy. All wording comes from the current mmcounselling.co.za site.
 */

export type Service = {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  listTitle: string;
  helps: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export const services: Service[] = [
  {
    id: "individual",
    label: "Individual",
    title: "Individual Counselling",
    paragraphs: [
      "Life can feel overwhelming at times—whether you're navigating anxiety, depression, grief, or simply facing a difficult season of change. Individual counselling offers a private, compassionate space where you can pause, reflect and begin to make sense of what you’re experiencing.",
      "I work alongside tweens, teens and adults seeking support for a range of concerns, including mental health challenges, personal growth, trauma, stress and life transitions. Through a personalised approach that best suits you and your individual personality and needs, I help you explore your thoughts and emotions, build resilience and move forward with greater clarity and confidence.",
      "Whether you're feeling stuck, seeking healing or wanting to understand yourself better, individual counselling is a space where you will be heard, supported and challenged towards healing and growth.",
    ],
    listTitle: "Support with",
    helps: ["Anxiety", "Depression", "Grief", "Trauma", "Stress", "Personal growth", "Life transitions"],
    image: "/images/individual.jpg",
    imageAlt: "A green stem in a glass vase beside a notebook",
  },
  {
    id: "couples",
    label: "Couples",
    title: "Couples (Marriage Counselling)",
    paragraphs: [
      "Every relationship faces challenges—whether it’s communication breakdown, conflict, distance or the weight of life’s demands. Couples counselling provides a space where both partners can feel heard, supported and understood as you work through difficulties together.",
      "In our sessions, I help couples strengthen their connection, rebuild trust and develop healthier ways of relating to one another. Whether you're navigating a rough patch, dealing with unresolved issues, or simply want to deepen your relationship, counselling can offer the tools and insight needed to move forward with greater compassion and clarity.",
      "My role is to guide you both through open respectful conversations that foster understanding, healing and hope for the future.",
    ],
    listTitle: "Support with",
    helps: ["Communication breakdown", "Conflict", "Distance", "Rebuilding trust"],
    image: "/images/couples.jpg",
    imageAlt: "Two cups side by side on a wooden table",
  },
  {
    id: "family",
    label: "Family",
    title: "Family",
    paragraphs: [
      "Family life can be deeply rewarding, but it can also bring stress, conflict and growing pains—especially during times of change. Whether you're navigating parenting challenges, blending families, or learning how to co-parent after separation, I provide a supportive space for families to reconnect and move forward with greater understanding.",
      "In our sessions, I work with parents, caregivers and family members to strengthen communication, set healthy boundaries and build more harmonious relationships. My approach is grounded in empathy and respect for each person's experience, helping you navigate the complexities of family life with clarity and care.",
      "You don't have to have it all figured out - family counselling can be a place to pause, reflect and grow together.",
    ],
    listTitle: "Support with",
    helps: ["Communication", "Healthy boundaries", "Blending families", "Co-parenting after separation"],
    image: "/images/family.jpg",
    imageAlt: "Three small potted plants in a row",
  },
  {
    id: "youth",
    label: "Adolescents & youth",
    title: "Adolescents & Youth Counselling",
    paragraphs: [
      "I have a special interest—and many years of experience—working with tweens, teens and young adults. These years can be filled with growth and discovery but also with real challenges that impact emotional wellbeing and self-worth.",
      "In counselling, I offer a safe non-judgemental space where young people can explore their thoughts, feelings and experiences. I work with issues such as trauma, self-harm, bullying, social-media pressures, pornography and difficult peer or family relationships. I also support adolescents navigating psychosocial challenges related to learning or neurodevelopmental conditions like ADHD, Autism (ASD) and other forms of neurodiversity.",
      "Whether it's emotional support, help with goal setting, or making sense of a complex or changing world, I aim to walk alongside each young person with empathy, respect and care.",
    ],
    listTitle: "Support with",
    helps: [
      "Trauma",
      "Self-harm",
      "Bullying",
      "Social-media pressures",
      "Pornography",
      "Difficult peer or family relationships",
      "Psychosocial challenges related to ADHD, Autism (ASD) and other forms of neurodiversity",
    ],
    image: "/images/youth.jpg",
    imageAlt: "A single flower in a white jug",
  },
  {
    id: "career",
    label: "Career guidance",
    title: "Career Guidance & Psychometric Assessment",
    paragraphs: [
      "I offer career guidance counselling to support senior learners and adults as they explore subject choices, career options and university applications—both locally and internationally. These sessions provide clarity and direction during key decision-making moments.",
      "For those seeking deeper insight, I provide comprehensive psychometric assessments tailored for subject choice or career guidance. This process includes a full battery of tests - aptitude, personality, values and interests alongside qualitative methods to support meaningful self-discovery. The goal is to help you make informed, confident decisions about your future.",
      "When working with adolescents, I actively involve parents in the process. They are encouraged to attend the pre-assessment consultation and are invited to the detailed feedback session, where we discuss the report results and recommendations together.",
    ],
    listTitle: "A full battery of tests",
    helps: ["Aptitude", "Personality", "Values", "Interests"],
    image: "/images/career.jpg",
    imageAlt: "Reading glasses resting on a notebook beside a vase of flowers",
  },
  {
    id: "pastoral",
    label: "Pastoral",
    title: "Pastoral Counselling",
    paragraphs: [
      "I value and celebrate diversity, welcoming clients from all cultural, religious and life backgrounds. Throughout the counselling process, I am committed to maintaining professional conduct and adhering to the ethical standards outlined by the Health Professions Council of South Africa (HPCSA). In line with these principles, I do not bring my personal beliefs into counselling unless specifically invited to do so.",
      "On a personal note, though, I am a committed born-again Christian and am happy to incorporate a pastoral or biblically based approach to counselling when this aligns with a client’s preference.",
      "Pastoral counselling integrates psychological insight with spiritual care, offering support that addresses both emotional and faith-related aspects of a person’s wellbeing. It provides a compassionate space where individuals can explore their challenges through the lens of their spiritual beliefs and values.",
      "For those specifically seeking clinical pastoral care, I welcome the opportunity to support you—whether through faith-based guidance or another therapeutic approach—as we work together toward healing and personal growth.",
    ],
    listTitle: "When this aligns with your preference",
    helps: ["A pastoral approach", "A biblically based approach"],
    image: "/images/pastoral.jpg",
    imageAlt: "Hands resting on a well-read book",
  },
  {
    id: "supervision",
    label: "Other counsellors",
    title: "Supervision & Mentorship",
    paragraphs: [
      "In addition to client work, I’m committed to mentoring and supporting fellow counsellors, particularly those new to the field. I offer professional guidance, reflective spaces, and encouragement to help other practitioners grow in confidence, deepen their clinical insight and remain grounded in their own wellbeing.",
    ],
    listTitle: "Offering",
    helps: ["Professional guidance", "Reflective spaces", "Encouragement"],
    image: "/images/supervision.jpg",
    imageAlt: "A quiet, sunlit room with a small tree by the window",
  },
];

export const supportAreas = [
  "Anxiety",
  "Depression",
  "Grief",
  "Trauma",
  "Generational trauma",
  "Major life changes",
  "Relational struggles",
  "Difficult relationships",
  "Tough seasons",
];

export const testimonials = [
  {
    name: "Taryn",
    quote:
      "I’ve been seeing Michelle for over a year now and I’ve had a wonderful experience. Michelle is so kind, thoughtful and caring. I’ve learnt so many practical tools that I’m able to apply in my day to day life which has helped me tremendously. I’m always so eager for my sessions with Michelle and I think that shows how much I get from them. I highly recommend Michelle.",
  },
  {
    name: "Amber",
    quote:
      "Only in the beginning of my sessions but so far so great. She is lovely to talk to and asks all the right questions and really focuses on you and what you need.",
  },
  {
    name: "Cindy",
    quote:
      "It was a great help doing the career assessment. Michelle was very helpful in her feedback and guidance for Jason. She helped him see different ideas. She was also easy to talk to.",
  },
  {
    name: "Yeukai",
    quote:
      "I have been seeing Michelle for nearly a year now and the impact of her guidance in helping me untangle my emotions is undeniable. What I appreciate the most about her is her integrity - she points out that she believes that you are now in a much better position to navigate life, without, or less of her input. She is for an individuals wholeness, without her counselling as a crutch. I encourage anyone seeking sound counsel to connect with Michelle.",
  },
  {
    name: "Jason",
    quote:
      "The experience with Michelle was very enjoyable and educational. Going to her for career counselling was the best decision I’ve ever made.",
  },
  {
    name: "Anonymous",
    quote:
      "She has helped me unravel my emotions and feelings, helping me understand why certain things in my life happen and how I can deal with them. She has always been very kind and welcoming, making sure that I am comfortable with everything she does. Even though counselling is her job, it seems that it is her passion and she truly cares for her clients.",
  },
];
