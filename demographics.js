const demographics = {
    type: jsPsychSurveyMultiChoice,
    data: {
        trial_section: "demographics"
    },
    questions: [ 
        {prompt: "What is your age?", name:'age', options: ["18-21", "22-30", "31-40", "41-50", "Older than 50"]},
        {prompt: "What is your gender?", name: 'gender', options: ["Female", "Male", "Non-binary / third gender", "Prefer not to say"]},
        {prompt: "Do you have a formal diagnosis of ADHD?", name: 'diagnosis', options: ["Yes, I have combined type ADHD", "Yes, I have inattentive type ADHD", "I have a formal diagnosis of ADHD, but I do not know what type", "No, but I self diagnose", "No"]}
    ]
}