// CORRECT ANSWERS ================================================================
const correctAnswers = {
  q1: "December",
  q2: "Silver",
  q3: "Prague",
  q4: "Venus",
  q5: "Greenland",
  q6: "Skin",
  q7: "Venus",
  q8: "1989",
  q9: "88",
  q10: "Purple",
  q11: "50",
  q12: "Entomophobia",
  q13: "Saturn",
  q14: "Macbeth",
  q15: "Plinky",
  q16: "1969",
  q17: "Aldous Huxley",
  q18: "Gimli",
  q19: "Hitchhiker\'s Guide to the Galaxy",
  q20: "366",
  q21: "4",
  q22: "Fred",
  q23: "Mortimer Mouse",
  q24: "The Beatles",
  q25: "Photosynthesis",
  q26: "Neil Diamond",
  q27: "Hydrogen",
  q28: "AC/DC",
  q29: "Nevermind",
  q30: "Leonardo da Vinci",
  q31: "Van Gogh",
  q32: "Apollo",
  q33: "Mandarin",
  q34: "Pasteurisation",
  q35: "Vaccination",
  q36: "Unicorn",
  q37: "Cerberus",
  q38: "Tetris",
  q39: "Three",
  q40: "Helsinki",
  q41: "75",
  q42: "52",
  q43: "41",
  q44: "124",
  q45: "32",
  q46: "0.14 + 0.88",
  q47: "300",
  q48: "4.5",
  q49: "-2",
  q50: "99.2",
  q51: "101",
  q52: "3",
  q53: "19",
  q54: "6.5",
  q55: "37",
  q56: "-1",
  q57: "30",
  q58: "13",
  q59: "98",
  q60: "360",
  q61: "65",
  q62: "0",
  q63: "Undefined",
  q64: "4",
  q65: "4",
  q66: "1",
  q67: "88",
  q68: "142",
  q69: "10000",
  q70: "148",
  q71: "16",
  q72: "30",
  q73: "8",
  q74: "9",
  q75: "121",
  q76: "36",
  q77: "49",
  q78: "63",
  q79: "520",
  q80: "500",
  q81: "Classical conditioning",
  q82: "Watson and Rayner",
  q83: "Negative reinforcement",
  q84: "The neutral stimulus",
  q85: "Extinction",
  q86: "Reading colour-related words with matching or differing text colour",
  q87: "Beck\’s cognitive triad",
  q88: "Studying the effects brain damage and disorders have on cognitive function",
  q89: "All of the above",
  q90: "Failure of object recognition",
  q91: "The way an individual behaves, the \'how\' of behaviour",
  q92: "Piaget\’s theory of cognitive development",
  q93: "Theory of mind",
  q94: "Co-sleeping",
  q95: "Anxiety disorder",
  q96: "65%",
  q97: "Cognitive",
  q98: "Anxious preoccupied",
  q99: "Cognitive dissonance",
  q100: "Actions done by the same sex",
  q101: "Ego",
  q102: "The unconscious",
  q103: "Displacement",
  q104: "Anal expulsive",
  q105: "He introduced the idea of the collective unconscious",
  q106: "Prefrontal cortex",
  q107: "Cerebellum",
  q108: "When sensory organs convert stimuli into neuronal activity",
  q109: "Frontal cortex",
  q110: "Damage to the tympanic membrane",
  q111: "Being genetically predisposed",
  q112: "Alogia",
  q113: "Behaviour",
  q114: "Self-actualisation",
  q115: "Treating the symptoms a person has without comparing them to diagnostic criteria",
  q116: "A cognitive method of organising information",
  q117: "Learned helplessness",
  q118: "Smashed",
  q119: "Positive reinforcement",
  q120: "Geese",
  q121: "1.9",
  q122: "2.1",
  q123: "Frontal lobe",
  q124: "Soma",
  q125: "Homer"
      };
  

//*************************************** DEFINE PAGES ******************************************************
  
  const page1_qs = {
    type: jsPsychSurveyMultiChoice,
    preamble: `
      <div style="padding-top: 40px;">
      <h2>General Knowledge Round</h2>
    </div>
    `,
      data: {
        trial_section: 'task'
      },
      questions: [ 
        {prompt: "Which of these months has the most days?", name: "q1", 
          options: ["December", "April", "September", "June"]},
    
        {prompt: "Which element is \‘Ag\’ on the periodic table?", name: "q2", 
        options: ["Aluminium", "Argon", "Silver", "Gold"]},
    
        {prompt: "What is the capital city of the Czech Republic?", name: "q3", 
        options: ["Budapest", "Prague", "Minsk", "Bucharest"]},
    
        {prompt: "Which of these planets is smallest?", name: "q4", 
        options: ["Earth", "Saturn", "Venus", "Jupiter"]},
    
        {prompt: "What is the largest island?", name: "q5", 
        options: ["Madagascar", "New Guinea", "Greenland", "Borneo"]},
    
        {prompt: "What is the largest organ in the body?", name: "q6", 
        options: ["Lungs", "Skin", "Hair", "Heart"]},
    
        {prompt: "Which planet rotates clockwise on its axis?", name: "q7", 
        options: ["Mercury", "Earth", "Venus", "Mars"]},
    
        {prompt: "In what year did the Berlin Wall fall?", name: "q8", 
        options: ["1985", "1989", "1990", "1993"]},
    
        {prompt: "How many keys are there on a piano?", name: "q9", 
        options: ["80", "88", "62", "100"]},
    
        {prompt: "What is the rarest colour to appear on country flags?", name: "q10", 
        options: ["Purple", "Pink", "Brown", "Orange"]},
    
        {prompt: "How many states are there in the United States of America?", name: "q11", 
        options: ["50", "51", "52", "53"]}, 
    
        {prompt: "What is the word for a fear of insects?", name: "q12", 
        options: ["Arachnophobia", "Ailurophobia", "Acrophobia", "Entomophobia"]},
    
        {prompt: "Which planet has the most moons?", name: "q13", 
        options: ["Jupiter", "Saturn", "Venus", "Earth"]},
    
        {prompt: "Which Shakespeare play contains three witches as characters?", name: "q14", 
        options: ["Romeo and Juliet", "Macbeth", "Hamlet", "Othello"]},
    
        {prompt: "Which of these is NOT a ghost from the game pac-man?", name: "q15", 
        options: ["Inky", "Pinky", "Clyde", "Plinky"]},
    
        {prompt: "What year was the Moon Landing?", name: "q16", 
        options: ["1960", "1964", "1969", "1972"]},
    
        {prompt: "Who wrote ‘Brave New World’?", name: "q17", 
        options: ["George Orwell", "Isaac Aasimov", "Aldous Huxley", "Arthur C Clarke"]},
    
        {prompt: "Which of these names belongs to a dwarf in Lord of the Rings trilogy?", name: "q18", 
        options: ["Thorin", "Merry", "Gimli", "Bombur"]},
    
        {prompt: "In which book is \‘42\’ the answer to life, the universe, and everything?", name: "q19", 
        options: ["Hitchhiker\'s Guide to the Galaxy", "I, Robot", "The Final Answer", "Cryptozoic!"]},
    
        {prompt: "How many days are in a leap year?", name: "q20", 
        options: ["360", "365", "366", "367"]},
    
        {prompt: "How many chambers does the human heart have?", name: "q21", 
        options: ["2", "3", "4", "5"]},
    
        {prompt: "What is the name of Ebeneezer Scrooge\’s nephew in \‘A Christmas Carol\’?", name: "q22", 
        options: ["George", "John", "Fred", "Jacob"]},
    
        {prompt: "What was Mickey Mouse originally called?", name: "q23", 
        options: ["Thomas Mouse", "Michael Mouse", "Mortimer Mouse", "Maximillion Mouse"]},
    
        {prompt: "Which band recorded the song \“Let it be\”?", name: "q24", 
        options: ["U2", "The Beatles", "Queen", "The Who"]},
    
        {prompt: "What is the process in which plants convert light to food?", name: "q25", 
        options: ["Chemosynthesis", "Fermentation", "Photosynthesis", "Radiosynthesis"]},
    
        {prompt: "Which artist sang Sweet Caroline?", name: "q26", 
        options: ["Elton John", "Neil Diamond", "David Bowie", "Michael Jackson"]},
    
        {prompt: "What is H in the Periodic Table?", name: "q27", 
        options: ["Helium", "Hydrogen", "Holmium", "Hafnium"]},
    
        {prompt: "Which rock band wrote the song \‘Let there be rock\’?", name: "q28", 
        options: ["Radiohead", "The Rolling Stones", "AC/DC", "Judas Priest"]},
    
        {prompt: "Which Nirvana album contains the song \‘In Bloom\’?", name: "q29", 
        options: ["In Utero", "Bleach", "Incesticide", "Nevermind"]},
    
        {prompt: "Who painted the Mona Lisa?", name: "q30", 
        options: ["Van Gogh", "Michaelangelo", "Leonardo da Vinci", "Picasso"]},
    
        {prompt: "Who painted Starry Night?", name: "q31", 
        options: ["Frida Kahlo", "Van Gogh", "Picasso", "Banksy"]},
    
        {prompt: "Which Greek God is the God of light?", name: "q32", 
        options: ["Apollo", "Artemis", "Poseidon", "Zeus"]},
    
        {prompt: "Which language has the most speakers worldwide, as a first language?", name: "q33", 
        options: ["Mandarin", "Arabic", "Spanish", "English"]},
    
        {prompt: "What is the name of the process where bacteria is removed from milk?", name: "q34", 
        options: ["Sterilisation", "Immunation", "Pasteurisation", "Manipulation"]},
    
        {prompt: "Which medical procedure involves injecting a weak version of a pathogen?", name: "q35", 
        options: ["Vaccination", "Trepidation", "Biopsy", "Phlebotomy"]},
        
        {prompt: "What is Scotland\’s national animal?", name: "q36", 
        options: ["Unicorn", "Lochness Monster", "Lion", "Highland Cow"]},
    
        {prompt: "Which mythological monster guards the gates of the Underworld?", name: "q37", 
        options: ["Hydra", "Medusa", "Cerberus", "Wyvern"]},
    
        {prompt: "Which game came pre-packaged with the original Gameboy?", name: "q38", 
        options: ["Tetris", "Super Mario Land", "Wario Land", "The Legend of Zelda: Link\'s Awakening"]},
    
        {prompt: "How many hearts does an Octopus have?", name: "q39", 
        options: ["One", "Four", "Eight", "Three"]},
    
        {prompt: "What is the capital of Finland?", name: "q40", 
        options: ["Oslo", "Cern", "Helsinki", "Copenhagen"]}
      ]
      };

  const page2_qs = {
    type: jsPsychSurveyMultiChoice,
    preamble: `
      <div style="padding-top: 40px;">
      <h2>Maths Round</h2>
    </div>
    `,
    data: {
        trial_section: 'task'
      },
      questions: [
        {prompt: "What is 37 + 38?", name: "q41", options: ["72", "75", "77", "74"]},

        {prompt: "What is 9 + 43?", name: "q42", options: ["54", "51", "52", "49"]},

        {prompt: "What is 4 + 37?", name: "q43", options: ["31", "41", "44", "45"]},

        {prompt: "What is 31 x 4?", name: "q44", options: ["124", "93", "112", "128"]},

        {prompt: "Which number is not a multiple of 6?", name: "q45",
            options: ["24", "66", "32", "6"]},

        {prompt: "Choose the sum that does not equal one", name: "q46", 
          options: ["0.51 + 0.49", "0.14 + 0.88", "0.76 + 0.24", "0.80 + 0.20"]},

        {prompt: "What is 130 + 170?", name: "q47",
            options: ["300", "400", "280", "330"]},

        {prompt: "What is 36/8?", name: "q48", options: ["4", "4.5", "5.5", "6"]},

        {prompt: "What is 56 - 58?", name: "q49", options: ["4", "1", "2", "-2"]},

        {prompt: "What is 98.7 + 0.5?", name: "q50",
            options: ["99.2", "99.4", "100.2", "100.4"]},

        {prompt: "What is 23 + 78?", name: "q51", options: ["100", "101", "103", "104"]},

        {prompt: "How many faces are on a cylinder?", name: "q52",
            options: ["5", "4", "2", "3"]},

        {prompt: "Which of these numbers is prime?", name: "q53",
            options: ["15", "16", "19", "21"]},

        {prompt: "Halve 13", name: "q54", options: ["5.5", "7.5", "6.5", "4.5"]},

        {prompt: "What is 90 - 53?", name: "q55", options: ["37", "47", "33", "29"]},

        {prompt: "What is 10 - 11?", name: "q56", options: ["1", "2", "-2", "-1"]},

        {prompt: "What is 43 - 13?", name: "q57", options: ["30", "29", "28", "31"]},

        {prompt: "What is 5 - -8?", name: "q58", options: ["-13", "13", "-5", "12"]},

        {prompt: "What is 56 + 42?", name: "q59", options: ["88", "98", "94", "86"]},

        {prompt: "How many degrees are in a square?", name: "q60",
            options: ["720", "360", "180", "420"]},

        {prompt: "What is 5 x 13?", name: "q61", options: ["60", "75", "70", "65"]},

        {prompt: "What is 0 x 0?", name: "q62", options: ["0.1", "0", "1", "2"]},

        {prompt: "What is 0 / 0?", name: "q63", options: ["1", "0", "Undefined", "-1"]},

        {prompt: "What is 93 - 89?", name: "q64", options: ["5", "4", "6", "7"]},

        {prompt: "What is 120/30?", name: "q65", options: ["4", "3", "6", "2"]},

        {prompt: "What is 5/5?", name: "q66", options: ["5", "2", "1", "0"]},

        {prompt: "What is 4 x 22?", name: "q67", options: ["44", "88", "99", "80"]},

        {prompt: "What is 60 + 82?", name: "q68", options: ["122", "136", "142", "132"]},

        {prompt: "What is 10 to the power of 4?", name: "q69", options: ["100", "1000", "10000", "100000"]},

        {prompt: "What is 58 + 90?", name: "q70", options: ["139", "150", "138", "148"]},

        {prompt: "What is 83 - 67?", name: "q71", options: ["15", "16", "22", "23"]},

        {prompt: "What is 34.5 to the nearest ten?", name: "q72",
            options: ["30", "40", "35", "34"]},

        {prompt: "What is the square root of 64?", name: "q73",
            options: ["6", "12", "8", "16"]},

        {prompt: "What is 54/6?", name: "q74", options: ["9", "6", "12", "4"]},

        {prompt: "What is 11 x 11?", name: "q75", options: ["139", "111", "121", "100"]},

        {prompt: "What is 73 - 37?", name: "q76", options: ["41", "51", "42", "36"]},

        {prompt: "What is 7 squared?", name: "q77", options: ["41", "49", "56", "35"]},

        {prompt: "What is 9 x 7?", name: "q78", options: ["63", "61", "70", "54"]},

        {prompt: "What is 40 x 13?", name: "q79", options: ["520", "500", "540", "560"]},

        {prompt: "How many centimetres are in 5 metres?", name: "q80",
            options: ["50000", "500", "5", "50"]}
            ],
            };

  const page3_qs = {
      type: jsPsychSurveyMultiChoice,
      preamble: `
      <div style="padding-top: 40px;">
      <h2>Psychology Round</h2>
    </div>
    `,
      data: {
        trial_section: 'task'
      },
      questions: [
        {prompt: "Which type of conditioning is referred to as learning by association?", name: 'q81',
          options: ['Classical conditioning', 'Operant conditioning', 'Positive reinforcement', 'The law of effect']}, 
          
        {prompt: "Which researchers conducted the Little Albert study?", name: 'q82', 
        options: ['Skinner', 'Pavlov', 'Watson and Rayner', 'Loftus and Palmer']},
        
        {prompt: "Katie refuses to fasten her seatbelt, but ultimately does because her car begins playing an annoying ringing sound. Which type of reinforcement is this?", name: 'q83', 
        options: ['Positive reinforcement', 'Negative punishment', 'Positive punishment', 'Negative reinforcement']},
        
        {prompt: "In the first stage of classical conditioning, which is the stimulus which eventually becomes the Conditioned Stimulus?", name: 'q84', 
        options: ['The neutral stimulus', 'The unconditioned stimulus', 'The unconditioned response', 'The bell']},
        
        {prompt: "What is the term for when a conditioned response fades over time?", name: 'q85', 
        options: ['Contiguity', 'Extinction', 'Reacquisition', 'Spontaneous recovery']},
        
        {prompt: "What does the stroop task involve?", name: 'q86', 
        options: ['Priming attention to one side of the screen before a stimulus is shown', 'Finding a particular stimulus in a visual field', 'Reading colour-related words with matching or differing text colour', 'Playing different sounds in each headphone ear']},
        
        {prompt: "What model can be described as a negative view of the world, oneself, and the future?", name: 'q87',
        options: ['Beck\'s cognitive triad', "Ellis\' ABC model", 'Hot cross bun model', 'CBT model']},
        
        {prompt: "What is Cognitive Neuropsychology?", name: 'q88',
        options: ['Using brain scans to study cognitive function', 'Using neural networks simulate cognitive function', 'Studying the effects brain damage and disorders have on cognitive function', 'Conducting highly controlled lab experiments on healthy humans']},
        
        {prompt: "What makes up perception?", name: 'q89',
        options: ['Sight', 'Smell', 'Sound', 'All of the above']},
        
        {prompt: "What is Agnosia?", name: 'q90',
        options: ['The inability to attend to the left side of objects', 'Failure of object recognition', 'The inability to encode new short-term memories', 'Novel perceptual experiences involving multiple sensory modalities e.g. seeing sounds']},
        
        {prompt: "What is temperament?", name: 'q91',
        options: ['A trait', "The way an individual behaves, the \'how\' of behaviour", 'A person\’s individual temper', 'An inherited personality']},
        
        {prompt: "Which theory of development includes the sensorimotor and concrete operational stage?", name: 'q92',
        options: ["Piaget\’s theory of cognitive development", 'Kohlberg\’s stages of moral development', 'Vygotsky\’s socio-cultural theory', 'Theory of mind']},
        
        {prompt: "What is the Sally Anne test designed to measure?", name: 'q93',
        options: ['Schema development', 'Object permanence', 'Theory of mind', 'Conservation']},
        
        {prompt: "What characteristic of attachment did John Bowlby NOT list?", name: 'q94',
        options: ['The safe haven', 'Co-sleeping', 'The secure base', 'Proximity maintenance']},
        
        {prompt: "Which disorder is most prevalent among populations of children?", name: 'q95',
        options: ['Oppositional Defiant Disorder', 'Depressive disorder', 'Conduct disorder', 'Anxiety disorder']},
        
        {prompt: "What percentage of participants shocked people up to 450 volts in Milgram\’s experiment?", name: 'q96',
        options: ['65%', '74%', '51%', '26%']},
        
        {prompt: "Are stereotypes a cognitive, affective, or behavioural component of attitudes to a social group?", name: 'q97',
        options: ['Cognitive', 'Affective', 'Behavioural', 'All 3']},
        
        {prompt: "Which attachment style is intrusive, demanding, and overly disclosing?", name: 'q98',
        options: ['Secure', 'Fearful avoidant', 'Anxious preoccupied', 'Dismissive avoidant']},
        
        {prompt: "What is it called when somebody\’s behaviour conflicts with their attitudes?", name: 'q99',
        options: ['Stereotype threat', 'Cognitive dissonance', 'Explicit attitude', 'Reasoned action approach']},
        
        {prompt: "Which behaviour did boys replicate the most in Bandura\’s experiment?", name: 'q100',
        options: ['Speech done by the same sex', 'Actions done by the opposite sex', 'Actions done by the same sex', 'Speech done by the opposite sex']},
        
        {prompt: "According to Freud, which part of the tripartite model of the mind operates under the reality principle?", name: 'q101',
        options: ['Id', 'Ego', 'Superego', 'The unconscious']},
        
        {prompt: "The id is often associated with which part of the mind?", name: 'q102',
        options: ['The conscious', 'The pre-conscious', 'The unconscious', 'The ego']},
        
        {prompt: "Which Freudian defence mechanism involved redirecting negative emotion to a less threatening target?", name: 'q103',
        options: ['Projection', 'Displacement', 'Reaction formation', 'Rationalisation']},
        
        {prompt: "How would Freud describe somebody who is overly messy and disorganised?", name: 'q104',
        options: ['Suffering from an Oedipal Complex', 'Oral fixated', 'Anal expulsive', 'Anal retentive']},
        
        {prompt: "How did Carl Jung expand on Freud\’s ideas?", name: 'q105',
        options: ['He introduced age-related crises into Freud’s theory of Psychosexual stages', 'He introduced the idea of the collective unconscious', 'He developed dream analysis as a therapy', 'He introduced the idea of an ego-strength personality']},
        
        {prompt: "Which section of the brain is largely implicated in personality?", name: 'q106',
        options: ['Hippocampus', 'Hypothalamus', 'Cerebral cortex', 'Prefrontal cortex']},
        
        {prompt: "Which section of the brain is important for fine motor skills?", name: 'q107',
        options: ['Cerebellum', 'Brain stem', 'Corpus callossum', 'Hippocampus']},
        
        {prompt: "What is stimulus transduction?", name: 'q108',
        options: ['The conscious experience of sensory information', 'How receptors detect specific parts of the world', 'When sensory organs convert stimuli into neuronal activity', 'The third stage of an action potential']},
        
        {prompt: "Which subcortical area of the brain is involved in short-term and working memory?", name: 'q109',
        options: ['Hippocampus', 'Cerebellum', 'Amygdala', 'Frontal cortex']},
        
        {prompt: "Which one of these causes of hearing loss is NOT permanent?", name: 'q110',
        options: ['Damage to the tympanic membrane', 'Otosclerosis', 'Age related hearing loss', 'Sensorineural hearing loss']},
        
        {prompt: "Which is NOT one of Rachmann\’s 3 pathways to fear acquisition?", name: 'q111',
        options: ['Direct conditioning or experience', 'Being genetically predisposed', 'Transmission of fearful information', 'Learning through observation (vicarious conditioning)']},
        
        {prompt: "Which of these is a negative symptom of Schizophrenia?", name: 'q112',
        options: ['Delusions', 'Hallucinations', 'Disorganised speech', 'Alogia']},
        
        {prompt: "Which of these is NOT a part of Ellis\’ ABC model?", name: 'q113',
        options: ['Action', 'Behaviour', 'Belief', 'Consequences']},
        
        {prompt: "What is the final goal of Maslow\’s hierarchy of needs?", name: 'q114',
        options: ['Safety', 'Physiological needs', 'Belongingness and love', 'Self-actualisation']},
        
        {prompt: "What is a transdiagnostic approach to care?", name: 'q115',
        options: ['Treating the symptoms a person has without comparing them to diagnostic criteria', 'Diagnosing multiple illnesses at once', 'The process of changing somebody\’s diagnosis', 'Diagnosing somebody while scrutinising the diagnostic criteria']},
        
        {prompt: "What is a schema?", name: 'q116',
        options: ['A stereotype somebody holds', 'A crystallised memory', 'A cognitive method of organising information', 'A thought']},
        
        {prompt: "Martin Seligman\’s experiment on dogs generated which theory?", name: 'q117',
        options: ['Learned helplessness', 'Classical conditioning', 'Operant conditioning', 'Attribution theory']},
        
        {prompt: "Which word would likely create a false memory of broken glass in the Loftus and Palmer experiment?", name: 'q118',
        options: ['Bumped', 'Hit', 'Touched', 'Smashed']},
        
        {prompt: "What did Skinner use to teach rats to pull a lever?", name: 'q119',
        options: ['Manipulation', 'Classical conditioning', 'Positive reinforcement', 'Positive punishment']},
        
        {prompt: "Which baby animal imprinted onto Lorenz in his study?", name: 'q120',
        options: ['Mice', 'Kittens', 'Geese', 'Puppies']}
        ],
        };
  
  const page4_qs = {
    type: jsPsychSurveyMultiChoice,
    preamble: `
      <div style="padding-top: 40px;">
      <h2><strong>FINAL ROUND! MIXED TOPIC!</strong></h2>
    </div>
    `,
    data: {
        trial_section: 'task'
      },
    questions: function() { //questions is a function
      const basePG4Questions = [
        {prompt: "What is 0.4 + 1.5?", name: 'q121',
        options: ['2.1', '3.4', '1.5', '1.9']},
        
        {prompt: "What is 3.9 - 1.8?", name: 'q122',
        options: ['2.1', '2.3', '2.4', '2.5']},
        
        {prompt: "Which part of Phineas Gage’s brain was damaged?", name: 'q123',
        options: ['Cerebellum', 'Midbrain', 'Corpus callossum', 'Frontal lobe']},
        
        {prompt: "What is the cell body of a neuron called", name: 'q124',
        options: ['Axon terminal', 'Soma', 'Dendrites', 'Axons']},
        
        {prompt: "Who wrote \‘Odyssey\’?", name: 'q125',
        options: ['Homer', 'Plato', 'Aristotle', 'Cicero']},
      ];
  
      //if no skipped qs globally, nothing to attach basePG4Questions to, if else then merge arrays
      if (skipped_glob.length === 0) {
        return basePG4Questions.concat();
      } else {
          return basePG4Questions.concat(skipped_glob);
      }
    }
  }
  
  const debrief = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Debrief",
        pages: [
            {
                elements: [
                  // DEBRIEF ======================================================================================
                    {
                        title: "Explanation and Study Debrief?",
                        name: "debrief",
                        type: "html",
                        html: `
                        <p style="text-align:left; margin: 0 auto; max-width: 1000px;">Thank you for taking part in this study. Some individuals with (diagnosed or trait) ADHD often make small mistakes on forms, such as forgetting to fill in questions etc. The aim was to try and induce this specific symptom of ADHD, referred to as: 'often makes careless mistakes' by using of a lengthy multiple choice quiz. Please note that if you did miss questions in this experiment, it is not necessarily indicative of ADHD and sufficient for a diagnosis.</p>
                        <br>
                        <p style="text-align:left; margin: 0 auto; max-width: 1000px;">Please click the button below to be reminded of your participant ID. You’ll then be taken to a screen to save your data, which should only take about a minute. <strong>After this is completed and the experiment is finished</strong>, you will be automatically allocated credits.</p>
                        `,
                    }
                ]
            }
        ]
    }, 
    data: {
          trial_section: "debrief"}
    };

    const save_summary_trial = {
      type: jsPsychCallFunction,
      func: () => {
    
        const trials = jsPsych.data.get().filter({ trial_section: 'task' }).values();
    
        // COUNTING VARIABLES ================================================================
        let total_correct = 0;
        let total_answered = 0;
        let all_rts = [];
        let retry_rts = [];
        let rt_after_skip = [];
    
        let skipped_questions = new Set();
        let retry_correct = 0;
        let retry_incorrect = 0;
        let skipped_again = 0;

        let notFoundNextCounter = 0;
    
        // CALCULATIONS 1: accuracy, RTs, skipped ================================================================
        trials.forEach(trial => {
          if (!trial.rt_per_question) return;
    
          const qnames = Object.keys(trial.rt_per_question);
    
          qnames.forEach((q, idx) => {
            const rt_custom = trial.rt_per_question[q];
            const acc = trial.accuracy_per_question[q];
            const wasSkipped = trial.skipped[q];
    
            if (acc === true) total_correct++;
            if (acc !== null) total_answered++;
    
            if (rt_custom !== null && !q.endsWith("_retry")) all_rts.push(rt_custom);
            if (rt_custom !== null && q.endsWith("_retry")) retry_rts.push(rt_custom);
    
            if (wasSkipped) {
              skipped_questions.add(q);
    
              let foundNext = false;
              for (let j = idx + 1; j < qnames.length; j++) {
                const nextQ = qnames[j];
                const nextRT = trial.rt_per_question[nextQ];
    
                if (nextRT !== null) {
                  rt_after_skip.push(nextRT);
                  foundNext = true;
                  break;
                }
              }
    
              if (!foundNext) {
                if (trial.submit_latency_from_last !== undefined && trial.submit_latency_from_last !== null) {
                  rt_after_skip.push(trial.submit_latency_from_last);
                  notFoundNextCounter++;
                }
              }
            }
          });
        });
    
        // CALCULATIONS 2: retries ================================================================
        trials.forEach(trial => {
          if (!trial.response) return;
    
          Object.entries(trial.response).forEach(([q, response]) => {
            if (!q.endsWith('_retry')) return;
    
            const base_q = q.replace('_retry', '');
            if (!skipped_questions.has(base_q)) return;

            if (response == null || response === '') {
              skipped_again++;
              return;
            }
    
            if (correctAnswers[base_q] === response) retry_correct++;
            else retry_incorrect++;
          });
        });
    
        // PARTICIPANT-LEVEL VARIABLES ================================================================
        const accuracy_overall = total_answered > 0 ? total_correct / total_answered : null;
    
        const rt_overall_mean = all_rts.length > 0
          ? all_rts.reduce((a, b) => a + b, 0) / all_rts.length
          : null;
    
        const rt_after_skip_mean = rt_after_skip.length > 0
          ? rt_after_skip.reduce((a, b) => a + b, 0) / rt_after_skip.length
          : null;
    
        const retry_rts_mean = retry_rts.length > 0
          ? retry_rts.reduce((a, b) => a + b, 0) / retry_rts.length
          : null;


        // DEMOGRAPHICS ================================================================
        const demo_trial = jsPsych.data.get()
          .filter({ trial_section: "demographics" })
          .last(1)
          .values()[0];

        const demo = demo_trial?.response ?? {}; 

        // ASRS ================================================================

        const asrs_trials = jsPsych.data.get()
        .filter({ trial_section: "asrsQs" })
        .values();

        let asrs_total_ina = 0;
        let asrs_total_hyp = 0;
        let asrs_total_overall = 0;

        asrs_trials.forEach(t => {
          if (typeof t.asrs_total_ina === "number") {
            asrs_total_ina = t.asrs_total_ina;
          }
          if (typeof t.asrs_total_hyp === "number") {
            asrs_total_hyp = t.asrs_total_hyp;
          }
        });

        asrs_total_overall = asrs_total_ina + asrs_total_hyp;

    
        jsPsych.data.write({
          trial_section: "summary",
          subject_id: subject_id,
          accuracy_overall: accuracy_overall,
          rt_overall_mean: rt_overall_mean,
          retry_rts_mean: retry_rts_mean,
          rt_after_skip_mean: rt_after_skip_mean,
          notFoundNextCounter: notFoundNextCounter,
          skipped_correct_retry: retry_correct,
          skipped_incorrect_retry: retry_incorrect,
          skipped_again: skipped_again,
          ...demo,
          asrs_total_ina: asrs_total_ina,
          asrs_total_hyp: asrs_total_hyp,
          asrs_total_overall: asrs_total_overall,
          timestamp: Date.now()
        });
      }
    };
    
  const end_test = {
    type: jsPsychHtmlButtonResponse,
    data: {
      trial_section: 'end'
    },
    choices: ['End Experiment'],
    stimulus: `
    <p>DATA SAVED SUCCESSFULLY.</p>
    <p>Please click here to end the Experiment.</p>
    <p>You will be redirected to the SONA platform to recieve your credits.</p>
    `
  };
