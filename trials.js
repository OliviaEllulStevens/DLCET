// CORRECT ANSWERS ================================================================
const correctAnswers = {
    q1: "75", 
    q2: "52", 
    q3: "41", 
    q4: "93", 
    q5: "32", 
    q6: "12+88", 
    q7: "300", 
    q8: "6", 
    q9: "2", 
    q10: "99.2", q11: "101", q12: "200", q13: "6", q14: "19", q15: "13", q16: "37", q17: "-1", q18: "30", q19: "27",
    q20: "98", q21: "360", q22: "65", q23: "0", q24: "0", q25: "4", q26: "4", q27: "1", q28: "88", q29: "142", q30: "4", q31: "148", q32: "20", q33: "23", q34: "8", q35: "9", q36: "121", q37: "36", q38: "16", q39: "63", 
    q40: "550", q41: "Jupiter", q42: "William Shakespeare", q43: "Tokyo", q44: "Oxygen", q45: "Brazil", q46: "H2O", q47: "Africa", q48: "Albert Einstein", q49: "2", 
    q50: "Pacific", q51: "Paris", q52: "Leonardo da Vinci", q53: "Oxygen", q54: "7", q55: "Japan", q56: "100", q57: "Cheetah", q58: "Blue Whale", q59: "Rome", q60: "Hydrogen",
    q61: "Mars", q62: "Neil Armstrong", q63: "Yen", q64: "Mandarin", q65: "Peacock", q66: "Vatican City", q67: "Heart", q68: "Everest", q69: "Sahara", q70: "Sumo wrestling",
    q71: "Nile", q72: "Italy", q73: "Au", q74: "Falcon", q75: "11", q76: "Atlantic", q77: "Mariana", q78: "Thomas Edison", q79: "Greenland", q80: "Ottawa",
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
    q91: "The way an individual behaves, the \‘how\’ of behaviour",
    q92: "Piaget\’s theory of cognitive development",
    q93: "Theory of mind",
    q94: "Separation comfort",
    q95: "Anxiety disorder",
    q96: "65%",
    q97: "Cognitive",
    q98: "Anxious preoccupied",
    q99: "Cognitive dissonance",
    q100: "Actions done by the same sex",
    q101: "Ego",
    q102: "The unconscious",
    q103: "Displacement",
    q104: "Anal retentive",
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
    q121: "Here",
    q122: "Me"
      };
  

//*************************************** DEFINE PAGES ******************************************************
  
  const page1_qs = {
    type: jsPsychSurveyMultiChoice,
    preamble: `
      <div style="padding-top: 40px;">
      <p>Please answer all the questions <strong>in order</strong></p>
    </div>
    `,
      data: {
        trial_section: 'task'
      },
    questions: [ 
      {prompt: "What is 51 + 24?", name: 'q1', options: ["72", "75", "77", "74"]},
      {prompt: "What is 9 + 43?", name: 'q2', options: ["54", "51", "52", "49"]},
      {prompt: "What is 4 + 37?", name: 'q3', options: ["31", "41", "44", "45"]},
      {prompt: "What is 31 x 3?", name: 'q4', options: ["93", "63", "91", "90"]},
      {prompt: "Which number is not a multiple of 6?", name: 'q5', options: ["24", "66", "32", "6"]},
      {prompt: "Choose the sum that does not equal one", name: 'q6', options: ["0.51+0.49", "12+88", "0.76+0.24", "0.80+0.20"]},
      {prompt: "What is 130 + 170?", name: 'q7', options: ["300", "400", "280", "330"]},
      {prompt: "What is 36/6?", name: 'q8', options: ["5", "6", "7", "8"]},
      {prompt: "What is 56 - 58?",name: 'q9', options: ["4", "1", "2", "-2"]},
      {prompt: "What is 98.7 + 0.5?",name: 'q10', options: ["99.2", "99.4", "100.2", "100.4"]},
      {prompt: "What is 23 + 78?",name: 'q11', options: ["100", "101", "103", "104"]},
      {prompt: "What is 50 x 4?", name: 'q12',options: ["220", "200", "150", "250"]},
      {prompt: "How many faces are on a cube?",name: 'q13', options: ["5", "4", "7", "6"]},
      {prompt: "Which of these numbers is prime?",name: 'q14', options: ["15", "16", "19", "21"]},
      {prompt: "Halve 26",name: 'q15', options: ["12", "14", "13", "11"]},
      {prompt: "What is 90 - 53?", name: 'q16',options: ["37", "47", "33", "29"]},
      {prompt: "What is 10 - 11?", name: 'q17',options: ["1", "2", "-2", "-1"]},
      {prompt: "What is 43 - 13?", name: 'q18',options: ["30", "29", "28", "31"]},
      {prompt: "What is 94 - 67?", name: 'q19',options: ["39", "32", "27", "31"]},
      {prompt: "What is 56 + 42?", name: 'q20',options: ["88", "98", "94", "86"]},
      {prompt: "How many degrees are in a square?", name: 'q21', options: ["720", "360", "180", "420"]},
      {prompt: "What is 5 x 13?", name: 'q22',options: ["60", "75", "70", "65"]},
      {prompt: "What is 0 x 0?", name: 'q23',options: ["0.1", "0", "1", "2"]},
      {prompt: "What is 5 x 0?", name: 'q24',options: ["1", "5", "0", "4"]},
      {prompt: "What is 93 - 89?", name: 'q25',options: ["5", "4", "6", "7"]},
      {prompt: "What is 12/3?", name: 'q26',options: ["4", "3", "6", "2"]},
      {prompt: "What is 5/5?", name: 'q27',options: ["5", "2", "1", "0"]},
      {prompt: "What is 4 x 22?", name: 'q28',options: ["44", "88", "99", "80"]},
      {prompt: "What is 60 + 82?", name: 'q29',options: ["122", "136", "142", "132"]},
      {prompt: "What is 20/5?", name: 'q30',options: ["2", "4", "6", "5"]},
      {prompt: "What is 58 + 90?", name: 'q31',options: ["139", "150", "138", "148"]},
      {prompt: "What is 83 - 63?", name: 'q32',options: ["15", "20", "22", "23"]},
      {prompt: "What is 23.25 to the nearest whole number?", name: 'q33',options: ["23", "24", "22", "20"]},
      {prompt: "What is the square root of 64?",name: 'q34', options: ["6", "12", "8", "16"]},
      {prompt: "What is 54/6?", name: 'q35',options: ["9", "6", "12", "4"]},
      {prompt: "What is 11 x 11?", name: 'q36',options: ["139", "111", "121", "100"]},
      {prompt: "What is 73 - 37?", name: 'q37',options: ["41", "51", "42", "36"]},
      {prompt: "What is 4 squared?", name: 'q38',options: ["24", "16", "8", "4"]},
      {prompt: "What is 9 x 7?", name: 'q39',options: ["63", "61", "70", "54"]},
      {prompt: "What is 50 x 11?", name: 'q40',options: ["520", "500", "550", "450"]}
      ]
      };
  
  const page2_qs = {
      type: jsPsychSurveyMultiChoice,
      preamble: `
      <div style="padding-top: 40px;">
      <p>Please answer all the questions <strong>in order</strong></p>
    </div>
    `,
      data: {
        trial_section: 'task'
      },
      questions: [
      {prompt: "What is the largest planet in our Solar System?", name: "q41", options: ["Earth", "Jupiter", "Saturn", "Neptune"]},
      {prompt: "Who wrote 'Romeo and Juliet'?", name: "q42", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"]},
      {prompt: "What is the capital city of Japan?", name: "q43", options: ["Kyoto", "Osaka", "Tokyo", "Sapporo"]},
      {prompt: "Which element has the symbol 'O'?", name: "q44", options: ["Oxygen", "Gold", "Silver", "Osmium"]},
      {prompt: "Which country hosted the 2016 Summer Olympics?", name: "q45", options: ["Brazil", "China", "UK", "Russia"]},
      {prompt: "What is the chemical formula of water?", name: "q46", options: ["CO2", "H2O", "O2", "NaCl"]},
      {prompt: "Which continent is the Sahara Desert on?", name: "q47", options: ["Asia", "Africa", "Australia", "South America"]},
      {prompt: "Who developed the theory of relativity?", name: "q48", options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo"]},
      {prompt: "What is the smallest prime number?", name: "q49", options: ["0", "1", "2", "3"]},
      {prompt: "Which ocean is the largest?", name: "q50", options: ["Atlantic", "Indian", "Pacific", "Arctic"]},
      {prompt: "What is the capital of France?", name: "q51", options: ["Paris", "Berlin", "Rome", "Madrid"]},
      {prompt: "Who painted the Mona Lisa?", name: "q52", options: ["Van Gogh", "Leonardo da Vinci", "Michelangelo", "Picasso"]},
      {prompt: "Which gas do humans breathe in?", name: "q53", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"]},
      {prompt: "How many continents are there?", name: "q54", options: ["5", "6", "7", "8"]},
      {prompt: "Which country is known as the Land of the Rising Sun?", name: "q55", options: ["China", "South Korea", "Japan", "Thailand"]},
      {prompt: "What is the boiling point of water in Celsius?", name: "q56", options: ["90", "100", "110", "120"]},
      {prompt: "What is the fastest land animal?", name: "q57", options: ["Cheetah", "Horse", "Leopard", "Lion"]},
      {prompt: "Which is the largest mammal?", name: "q58", options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"]},
      {prompt: "What is the capital of Italy?", name: "q59", options: ["Rome", "Milan", "Venice", "Naples"]},
      {prompt: "What is H in the periodic table?", name: "q60", options: ["Helium", "Hydrogen", "Hafnium", "Holmium"]},
      {prompt: "Which planet is known as the Red Planet?", name: "q61", options: ["Venus", "Mars", "Jupiter", "Mercury"]},
      {prompt: "Who was the first man on the moon?", name: "q62", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"]},
      {prompt: "What is the currency of Japan?", name: "q63", options: ["Yen", "Won", "Dollar", "Peso"]},
      {prompt: "Which language has the most speakers worldwide?", name: "q64", options: ["English", "Mandarin", "Hindi", "Spanish"]},
      {prompt: "Which bird is known for its colorful feathers?", name: "q65", options: ["Crow", "Parrot", "Peacock", "Penguin"]},
      {prompt: "Which is the smallest country in the world?", name: "q66", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"]},
      {prompt: "Which organ pumps blood in the body?", name: "q67", options: ["Liver", "Lungs", "Heart", "Kidney"]},
      {prompt: "Which is the tallest mountain?", name: "q68", options: ["K2", "Everest", "Kilimanjaro", "Denali"]},
      {prompt: "Which desert is the largest in the world?", name: "q69", options: ["Sahara", "Gobi", "Kalahari", "Arabian"]},
      {prompt: "What is the national sport of Japan?", name: "q70", options: ["Karate", "Judo", "Sumo wrestling", "Baseball"]},
      {prompt: "What is the longest river in the world?", name: "q71", options: ["Amazon", "Nile", "Yangtze", "Mississippi"]},
      {prompt: "Which country is famous for pizza and pasta?", name: "q72", options: ["France", "Italy", "Spain", "Portugal"]},
      {prompt: "What is the chemical symbol for gold?", name: "q73", options: ["Ag", "Au", "Pb", "Gd"]},
      {prompt: "Which is the fastest bird?", name: "q74", options: ["Falcon", "Eagle", "Sparrow", "Ostrich"]},
      {prompt: "How many players in a football (soccer) team?", name: "q75", options: ["9", "10", "11", "12"]},
      {prompt: "Which ocean is the Bermuda Triangle in?", name: "q76", options: ["Pacific", "Atlantic", "Indian", "Arctic"]},
      {prompt: "Which is the deepest ocean trench?", name: "q77", options: ["Java", "Puerto Rico", "Mariana", "Tonga"]},
      {prompt: "Who invented the light bulb?", name: "q78", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Einstein"]},
      {prompt: "Which is the largest island?", name: "q79", options: ["Greenland", "New Guinea", "Borneo", "Madagascar"]},
      {prompt: "What is the capital of Canada?", name: "q80", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"]},
    ]
  };
  
  const page3_qs = {
    type: jsPsychSurveyMultiChoice,
    preamble: `
      <div style="padding-top: 40px;">
      <p>Please answer all the questions <strong>in order</strong></p>
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
        options: ['The safe haven', 'Separation comfort', 'The secure base', 'Proximity maintenance']},
        
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
        
        {prompt: "Which baby animal imprinted onto Gosling in his study?", name: 'q120',
        options: ['Mice', 'Kittens', 'Geese', 'Puppies']}
        ],
        };
  
  const page4_qs = {
    type: jsPsychSurveyMultiChoice,
    preamble: `
      <div style="padding-top: 40px;">
      <p>Please answer all the questions <strong>in order</strong></p>
    </div>
    `,
    data: {
        trial_section: 'task'
      },
    questions: function() { //questions is a function
      const basePG4Questions = [
      {prompt: "what?", name:'q121', options:['Here','no1','no2','no3']},
      {prompt: "hmmm?", name:'q122', options:['Me','yes1','yes2','yes3']},
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
                        <p>Please click the button below to save your data, this should only take a few seconds.</p>
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

        //================================================================================================
        // DEMOGRAPHICS ================================================================
        const demo_trial = jsPsych.data.get()
          .filter({ trial_section: "demographics" })
          .last(1)
          .values()[0];

        const demo = demo_trial?.response ?? {}; 
    
        jsPsych.data.write({
          trial_section: "summary",
          subject_id: subject_id,
          accuracy_overall: accuracy_overall,
          rt_overall_mean: rt_overall_mean,
          retry_rts_mean: retry_rts_mean,
          rt_after_skip_mean: rt_after_skip_mean,
          skipped_correct_retry: retry_correct,
          skipped_incorrect_retry: retry_incorrect,
          ...demo,
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
    stimulus: "<p>Data saved succesfully. Please click here to end the Experiment. You will be redirected to the SONA platform to recieve your credits. </p>"
  };
