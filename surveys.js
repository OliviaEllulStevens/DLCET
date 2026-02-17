// INFOSHEET AND CONSENT FORM INITIAL PAGE ======================================================================================
const infoConsent = {
    type: jsPsychSurvey,
    survey_json: {
      title: "Study Information",
      showQuestionNumbers: false,
      pages: [
        {
          elements: [
            // INFOSHEET ======================================================================================
            {
              type: "html",
              name: "info_sheet",
              html: `
              <div style="text-align: left;
                max-width: 1000px;
                margin: 0 auto;
                line-height: 1.6;">
  
                <img src="media/LOGO.png" width="150" height="150" style = "float: right; position: relative; top: -40px;" >
  
                <h3>Daily life cognition and educational tasks</h3>
  
                <h4>Invitation</h4>
                <p>
                  You are being invited to take part in a research study. Before you decide whether or not to take part, it is important for you to understand why the research is being done and what it will involve. Please take time to read the following information carefully.
                </p>
  
                <h4>What Is the Purpose of the Study?</h4>
                <p>
                  This study is investigating the relationship between daily life cognition and performance on educational tasks. Through this, we hope to gain insight into patterns linking lifestyle behaviours with performance on educational tasks. The study will take no longer than 45 minutes. You will be awarded 3 credits for your time.
                </p>
  
                <h4>Why Have I Been Invited to Participate?</h4>
                <p>
                  You have been invited to take part because participants for this study are being recruited through the SONA research participation system. Anyone who meets the study’s eligibility criteria on SONA can volunteer. In total, approximately 250–500 participants will be invited to take part in this study.
                </p>
  
                <h4>Do I Have to Take Part?</h4>
                <p>
                  It is up to you to decide whether or not to take part. If you do decide to take part you will be given this information sheet to keep and be asked to sign a consent form. If you decide to take part, you are still free to withdraw at any time and without giving a reason by simply closing the window. Choosing to either take part or not take part in the study will have no impact on your marks, assessments, or future studies.
                </p>
  
                <h4>What Will Happen to Me If I Take Part?</h4>
                <p>
                  If you choose to participate, you will complete an online study that has two parts. First, you will answer a variety of short multiple-choice questions about general knowledge, psychology and maths. After this, you will complete a questionnaire in which you will be asked to rate how strongly you agree or disagree with a series of statements, and you may also choose to provide demographic information.
                </p>
  
                <h4>What Are the Possible Benefits of Taking Part?</h4>
                <p>
                  For your time, you will be awarded course credits. Your participation will help researchers better understand how daily life habits relate to performance on educational tasks, which may ultimately inform strategies to improve learning experiences. The study is unlikely to cause distress, but if it does you are free to withdraw by closing the window at any time.
                </p>
  
                <h4>Will My Information Be Kept Confidential?</h4>
                <p>
                  All information that enables you to be identified (“personal data”) will be kept strictly confidential, subject to legal limitations. All research data will be stored securely on encrypted, access-restricted university servers. Personal identifiers will be stored separately from research data and linked only via participant ID codes, with datasets anonymised or pseudonymised before analysis. Data will be retained only for the minimum necessary period and then securely destroyed. You can withdraw your data at any time up until the results are analysed (31st May 2026). Anonymised data may be shared with the scientific community via the Open Science Framework.
                </p>
  
                <h4>What Should I Do If I Want to Take Part?</h4>
                <p>
                  If you decide to participate in the experiment, you will be asked to provide consent. You will give your consent online by clicking an approval button on the next page.
                </p>
  
                <h4>What Will Happen to the Results of the Research?</h4>
                <p>
                  The results of this research may be written into a publication, poster, or presented in a talk. Anonymised data and analysis scripts may be uploaded to the Open Science Framework. A summary of the findings will be available on request from September 2027.
                </p>
  
                <h4>Who Is Organising and Funding the Research?</h4>
                <p>
                  This research is being conducted as part of studies at the University of Sussex, within the School of Psychology. The project is not externally funded.
                </p>
  
                <h4>Who Has Approved This Study?</h4>
                <p>
                  This research has been approved by the School of Psychology ethical review process (ER/0866).
                </p>
  
                <h4>Contact for Further Information</h4>
                <p>
                  If you have any concerns relating to this project, please contact Olivia Stevens (os319@sussex.ac.uk), Jolie McWilliams (jm2191@sussex.ac.uk), or the project supervisor Dr. Sophie Forster (s.forster@sussex.ac.uk). You may also contact the Chair of the Science and Technology Cross Schools Research Ethics Committee at crecscitec@sussex.ac.uk.
                </p>
  
                <h4>Insurance</h4>
                <p>
                  The University of Sussex has insurance in place to cover its legal liabilities in respect of this study.
                </p>
  
                <h4>Thank You</h4>
                <p>
                  Thank you for taking the time to read this information sheet.
                </p>
              </div>
              `
            },
            // CONSENT FORM ======================================================================================
            { 
              type: "html",
              name: "consent_intro",
              html: `
                <h4 style="text-align:left; margin: 0 auto; max-width: 1000px;">Consent Form</h4>
                <br>
                <p style="max-width:1000px; margin:0 auto; line-height:1.6; text-align:left;">
                  Please read through the consent form carefully. If you are happy to proceed,
                  please tick <strong>every</strong> box and click <strong>'Complete'</strong>.
                  If you do <strong>not</strong> consent, please exit the window and simply close your browser.
                </p>
                <br>
              `
            },
            {
              type: "checkbox",
              name: "consent_items",
              title: "If you agree to participate in this study, then please read the following statements, and tick the box next to each statement to indicate consent:",
              isRequired: true,
              requiredErrorText: "You must agree to all statements to continue.",
              colCount: 1,
              choices: [
                {
                  value: "c1",
                  text: "I understand that by signing below I am agreeing to take part in the University of Sussex research described here, and that I have read and understood this information sheet."
                },
                {
                  value: "c2",
                  text: "I understand that my participation is entirely voluntary, that I can choose not to participate in part or all of the study, and that I can withdraw at any stage without having to give a reason and without being penalised in any way (e.g., if I am a student, my decision whether or not to take part will not affect my grades)."
                },
                {
                  value: "c3",
                  text: "I understand I can request without penalty that my data be withdrawn and deleted even after the data collection is complete, any time up until the results are analysed (31st May 2026)."
                },
                {
                  value: "c4",
                  text: "I understand that my personal data will be used for the purposes of this research study and will be handled in accordance with Data Protection legislation."
                },
                {
                  value: "c5",
                  text: "I understand that the University's Privacy Notice provides further information on how the University uses personal data in its research."
                },
                {
                  value: "c6",
                  text: "I understand that my collected data will be stored in a de-identified way (e.g., using ID numbers not names), and kept separate from other details about me. Electronic data will be stored securely on a University-managed system, and hard copies will be stored behind a locked door. Anonymised data may be shared with the scientific community on www.osf.io."
                },
                {
                  value: "c7",
                  text: "I understand that my identity will remain confidential in any written reports of this research, and that no information I disclose will lead to my identification in those reports without my written permission."
                },
                {
                  value: "c8",
                  text: "I understand that my name and data will not be shared with any third party outside the research group, unless I later provide written permission."
                }
              ],
              validators: [
                {
                  type: "answercount",
                  minCount: 8,
                  text: "You must agree to all statements to continue."
                }
              ]
            }
              ]
            }
          ]
        },
        data: {
          trial_section: "infoConsent"
        },
        on_finish: (data) => {
          const responses = data.response?.consent_items || [];
          data.consented_all = responses.length === 8;
        }
      };
  

// INSTRUCTIONS ======================================================================================
const instructions = {
    type: jsPsychSurvey,
    survey_json: {
      title: "Instructions",
      showQuestionNumbers: false,
      pages: [
      {
        elements: [
          {
            type: "html",
            name: "instructions",
            html: `
              <div>
                <h3 style = "color:red">
                   ! READ THROUGH THESE INSTRUCTIONS CAREFULLY !
                <h3>
              </div>
              <br>
              <div style="text-align: left;
                max-width: 1000px;
                margin: 0 auto;
                line-height: 1.6;">
                <p style="font-size: 20px"> 
                  You will see three pages of multiple choice questions. 
                </p>
                <ul>
                  <li style="margin-bottom: 20px; font-size: 20px">
                    Answer each question <strong>IN ORDER</strong>, from top to bottom.
                  </li>
                  <li style="margin-bottom: 20px; font-size: 20px">
                    Once you select an answer, you <strong>CAN NOT</strong> change it.
                  </li>
                  <li style="margin-bottom: 20px; font-size: 20px">
                    At the end of each page, there will be a <strong>'Submit'</strong> button to move onto the next page. The new page will start immediately.
                  </li>
                  </ul>
                <p style="margin-bottom: 20px; font-size: 20px">
                  After you complete all three pages of questions, there will be a break.
                </p>
                <p style="margin-bottom: 20px; font-size: 20px">
                  After your break, you will complete a questionnaire in which you will be asked to rate how strongly you agree or disagree with a series of statements, and you may also choose to provide demographic information.
                </p>
                <p style="margin-bottom: 20px; font-size: 20px"><strong>Click 'Complete' to begin</strong> and to acknowledge you have read the instructions. The questionnaire will start immediately. If you no longer want to participate, simply exit by closing the tab. </p>
              </div>
              `,
          }
        ]
      }
    ]
  },
  data: {
    trial_section: "instructions"
  }
};


// BREAK BEFORE QUESTIONNAIRES ======================================================================================
const break_page = {
  type: jsPsychSurvey,
  survey_json: {
    title: "Break",
    showQuestionNumbers: false,
    pages: [
      {
        elements: [
          {
            type: "html",
            name: "break_page",
            html: `
            <div>
                <h3>
                  Please take your time to have a break.
                <h3>
              </div>
              <br>
              <div style="text-align: centre;
                max-width: 1000px;
                margin: 0 auto;
                line-height: 1.6;">
                <p> 
                  The next part of the experiment is a few questionnaires. Please click <strong>CONTINUE</strong> when you are ready to continue.
                </p>
            `,
          }
        ]
      }
    ]
  },
  data: {
    trial_section: "break"
  }
}
      

// DEMOGRAPHICS ======================================================================================
const demographics = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Please answer these demographics questions",
        goNextPageAutomatic: false,
        pages: [
            {
                elements: [
                    {
                        title: "What is your age?",
                        name: "age",
                        type: "radiogroup",
                        choices: ["18-21", "22-30", "31-40", "41-50", "Older than 50"],
                        isRequired: true,
                    },
                    {
                        title: "What is your gender?",
                        name: "gender",
                        type: "radiogroup",
                        choices: ["Female", "Male", "Non-binary / third gender", "Prefer not to say"],
                        isRequired: true,
                    },
                    {
                        title: "Do you have a diagnosis of Attention Defecit Hyperactivity Disorder (ADHD)?",
                        name: "adhd",
                        type: "radiogroup",
                        choices: ["Yes, I have combined type ADHD", "Yes, I have inattentive type ADHD", "I have a formal diagnosis of ADHD, but I do not know what type", "No, but I self diagnose", "No"],
                        isRequired: true,
                    },
                ]
            }
        ]
    }, 
    data: {
          trial_section: "demographics"}
    };


// ADULT ADHD SELF-REPORT SCALE (ASRS-v1.1) ======================================================================================
    const asrs_items_ina = {
      ASRS_1:
          "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
      ASRS_2:
          "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
      ASRS_3:
          "How often do you have problems remembering appointments or obligations?",
      ASRS_4:
          "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
      ASRS_7:
          "How often do you make careless mistakes when you have to work on a boring or difficult project?",
      ASRS_8:
          "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
      ASRS_9:
          "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
      ASRS_10:
          "How often do you misplace or have difficulty finding things at home or at work?",
      ASRS_11:
          "How often are you distracted by activity or noise around you?",
      ASRS_12:
          "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
  }

  const asrs_items_hyp = {
    ASRS_5:
        "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
    ASRS_6:
        "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
    ASRS_13:
        "How often do you feel restless or fidgety?",
    ASRS_14:
        "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
    ASRS_15:
        "How often do you find yourself talking too much when you are in social situations?",
    ASRS_16:
        "When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
    ASRS_17:
        "How often do you have difficulty waiting your turn in situations when turn taking is required?",
    ASRS_18:
        "How often do you interrupt others when they are busy?"
}
  
  function make_asrs(items, required = true) {

    asrs_questions = []

    const likert = [
      { value: 0, text: "Never" },
      { value: 1, text: "Rarely" },
      { value: 2, text: "Sometimes" },
      { value: 3, text: "Often" },
      { value: 4, text: "Very Often" },
  ]

    for (const key of Object.keys(items)) {
        q = {
            title: items[key],
            name: key,
            type: "rating",
            displayMode: "buttons",
            isRequired: required,
            rateValues: likert,
        }
        asrs_questions.push(q)
    }

    return { elements: asrs_questions }
}
const questionnaire_asrs_ina = {
  type: jsPsychSurvey,
  survey_json: function () {
      return {
          title: "Questionnaire Part 1",
          description:
              "Please indicate how often each statement has applied to you over the past 6 months.",
          showQuestionNumbers: false,
          goNextPageAutomatic: false,
          pages: [
            make_asrs(asrs_items_ina) 
        ],
      }
  },

  on_finish: function (data) {
      let total = 0
      Object.values(data.response).forEach(v => {
          total += v
      })
      data.asrs_total_ina = total
  },
  data: {
      trial_section: "asrsQs"
  },
}

const questionnaire_asrs_hyp = {
  type: jsPsychSurvey,
  survey_json: function () {
      return {
          title: "Questionnaire Part 2",
          description:
              "Please indicate how often each statement has applied to you over the past 6 months.",
          showQuestionNumbers: false,
          goNextPageAutomatic: false,
          pages: [
            make_asrs(asrs_items_hyp) 
        ],
      }
  },

  on_finish: function (data) {
      let total = 0
      Object.values(data.response).forEach(v => {
          total += v
      })
      data.asrs_total_hyp = total
  },
  data: {
      trial_section: "asrsQs"
  },
}
