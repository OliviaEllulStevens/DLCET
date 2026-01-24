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
                  It is up to you to decide whether or not to take part. If you do decide to take part you will be given this information sheet to keep and be asked to sign a consent form. If you decide to take part, you are still free to withdraw at any time and without giving a reason. Choosing to either take part or not take part in the study will have no impact on your marks, assessments, or future studies.
                </p>
  
                <h4>What Will Happen to Me If I Take Part?</h4>
                <p>
                  If you choose to participate, you will complete an online study that has two parts. First, you will answer a variety of short multiple-choice questions about general knowledge and maths. After this, you will complete a questionnaire in which you will be asked to rate how strongly you agree or disagree with a series of statements, and you may also choose to provide demographic information.
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
                  This research has been approved by the School of Psychology ethical review process (ER/NUMBER).
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
                  please tick <strong>every</strong> box and click <strong>Complete</strong>.
                  If you do <strong>not</strong> consent, please exit the window (via Esc) and simply close your browser.
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
  

const instructions = {
    type: jsPsychSurvey,
    survey_json: {
      title: "Instructions",
      showQuestionNumbers: false,
      pages: [
      {
        elements: [
          // INSTRUCTIONS ======================================================================================
          {
            type: "html",
            name: "instructions",
            html: `
              <div>
                <h3>
                  READ THROUGH THESE INSTRUCTIONS CAREFULLY
                <h3>
              </div>
              <br>
              <div style="text-align: left;
                max-width: 1000px;
                margin: 0 auto;
                line-height: 1.6;">
                <p> 
                  You will see four pages of multiple choice questions. 
                </p>
                <ul>
                  <li style="margin-bottom: 15px;">
                    Answer each question <strong>IN ORDER</strong>, from top to bottom.
                  </li>
                  <li style="margin-bottom: 15px;">
                    Once you select an answer, please <strong>DO NOT</strong> change it.
                  </li>
                  <li style="margin-bottom: 15px;">
                    At the end of each page, there will be a <strong>'Submit'</strong> button to move onto the next page. The new page will start immediately.
                  </li>
                  </ul>
                <p>
                  After you complete all four pages of questions, you will be allowed to take a break.
                <p>
                <p>
                  After your break, you will complete a questionnaire in which you will be asked to rate how strongly you agree or disagree with a series of statements, and you may also choose to provide demographic information.
                </p>
                  Click <strong>'I understand'</strong> to begin. The questionnaire will start immediately. 
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
      
const demographics = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Please answer these demographics questions",
        pages: [
            {
                elements: [
                  // DEMOGRAPHICS ======================================================================================
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

