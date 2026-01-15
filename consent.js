
const infoSheet = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
     <div style="text-align: left;
      max-width: 900px;
      margin: 0 auto;
      line-height: 1.6;">
  
      <h2>Study Title - Daily life cognition and educational tasks.</h2>
  
      <h3>Invitation</h3>
      <p>
        You are being invited to take part in a research study. Before you decide whether or not to take part, it is important for you to understand why the research is being done and what it will involve. Please take time to read the following information carefully.
      </p>
  
      <h3>What Is the Purpose of the Study?</h3>
      <p>
        This study is investigating the relationship between daily life cognition and performance on educational tasks. Through this, we hope to gain insight into patterns linking lifestyle behaviours with performance on educational tasks. The study will take no longer than 45 minutes. You will be awarded 3 credits for your time.
      </p>
  
      <h3>Why Have I Been Invited to Participate?</h3>
      <p>
        You have been invited to take part because participants for this study are being recruited through the SONA research participation system. Anyone who meets the study’s eligibility criteria on SONA can volunteer. In total, approximately 250–500 participants will be invited to take part in this study.
      </p>
  
      <h3>Do I Have to Take Part?</h3>
      <p>
        It is up to you to decide whether or not to take part. If you do decide to take part you will be given this information sheet to keep and be asked to sign a consent form. If you decide to take part, you are still free to withdraw at any time and without giving a reason. Choosing to either take part or not take part in the study will have no impact on your marks, assessments, or future studies.
      </p>
  
      <h3>What Will Happen to Me If I Take Part?</h3>
      <p>
        If you choose to participate, you will complete an online study that has two parts. First, you will answer a variety of short multiple-choice questions about general knowledge and maths. After this, you will complete a questionnaire in which you will be asked to rate how strongly you agree or disagree with a series of statements, and you may also choose to provide demographic information.
      </p>
  
      <h3>What Are the Possible Benefits of Taking Part?</h3>
      <p>
        For your time, you will be awarded course credits. Your participation will help researchers better understand how daily life habits relate to performance on educational tasks, which may ultimately inform strategies to improve learning experiences. The study is unlikely to cause distress, but if it does you are free to withdraw by closing the window at any time.
      </p>
  
      <h3>Will My Information Be Kept Confidential?</h3>
      <p>
        All information that enables you to be identified (“personal data”) will be kept strictly confidential, subject to legal limitations. All research data will be stored securely on encrypted, access-restricted university servers. Personal identifiers will be stored separately from research data and linked only via participant ID codes, with datasets anonymised or pseudonymised before analysis. Data will be retained only for the minimum necessary period and then securely destroyed. You can withdraw your data at any time up until the results are analysed (May 2026). Anonymised data may be shared with the scientific community via the Open Science Framework.
      </p>
  
      <h3>What Should I Do If I Want to Take Part?</h3>
      <p>
        If you decide to participate in the experiment, you will be asked to provide consent. You will give your consent online by clicking an approval button on the next page.
      </p>
  
      <h3>What Will Happen to the Results of the Research?</h3>
      <p>
        The results of this research may be written into a publication, poster, or presented in a talk. Anonymised data and analysis scripts may be uploaded to the Open Science Framework. A summary of the findings will be available on request from September 2027.
      </p>
  
      <h3>Who Is Organising and Funding the Research?</h3>
      <p>
        This research is being conducted as part of studies at the University of Sussex, within the School of Psychology. The project is not externally funded.
      </p>
  
      <h3>Who Has Approved This Study?</h3>
      <p>
        This research has been approved by the School of Psychology ethical review process (ER/NUMBER).
      </p>
  
      <h3>Contact for Further Information</h3>
      <p>
        If you have any concerns relating to this project, please contact Olivia Stevens (os319@sussex.ac.uk), Jolie McWilliams (jm2191@sussex.ac.uk), or the project supervisor Dr. Sophie Forster (s.forster@sussex.ac.uk). You may also contact the Chair of the Science and Technology Cross Schools Research Ethics Committee at crecscitec@sussex.ac.uk.
      </p>
  
      <h3>Insurance</h3>
      <p>
        The University of Sussex has insurance in place to cover its legal liabilities in respect of this study.
      </p>
  
      <h3>Thank You</h3>
      <p>
        Thank you for taking the time to read this information sheet.
      </p> 
      <br>
      <p> By clicking the button below, you are confirming you have read through the information sheet. </p>
      </div>
    `, 
    choices: ['Proceed to Consent Form'],
    data: {
      trial_section: 'infoSheet'
    }
  }

//  const consent = {
//       type: jsPsychHtmlButtonResponse,
//       stimulus: `
//       <div>
//         <h2 style="text-align:center; margin-bottom: 30px;">Consent Form</h2>
//       </div>
//       <div style="text-align: left;
//         max-width: 900px;
//         margin: 0 auto;
//         line-height: 1.6;">
    
//         <p>
//           Please read through the consent form carefully. If you are happy to proceed, please click <strong>'I agree'</strong> at the bottom of the page. If you do not consent to taking part, please close down the window and stop the experiment. 
//         </p>
//         <br>
    
//         <ul>
    
//           <li style="margin-bottom: 15px;">
//             I understand that by signing below I am agreeing to take part in the University of Sussex research described here, and that I have read and understood this information sheet.
//           </li>
//           <li style="margin-bottom: 15px;">
//             I understand that my participation is entirely voluntary, that I can choose not to participate in part or all of the study, and that I can withdraw at any stage without having to give a reason and without being penalised in any way (e.g., if I am a student, my decision whether or not to take part will not affect my grades).
//           </li>
//           <li style="margin-bottom: 15px;">
//             I understand I can request without penalty that my data be withdrawn and deleted even after the data collection is complete, any time up until the results are analysed (May 2026).
//           </li>
//           <li style="margin-bottom: 15px;">
//             I understand that my personal data will be used for the purposes of this research study and will be handled in accordance with Data Protection legislation. 
//           </li>
//           <li style="margin-bottom: 15px;">
//             I understand that the University's Privacy Notice provides further information on how the University uses personal data in its research.
//           </li>
//           <li style="margin-bottom: 15px;">
//             I understand that my collected data will be stored in a de-identified way (e.g. using ID numbers not names), and kept separate from other details about me (e.g. from the consent form).  Electronic data will be stored securely on a University managed system, and hard-copies will be stored behind a locked door. Anonymised data may be shared with the scientific community on the website www.osf.io. 
//           </li>
//           <li style="margin-bottom: 15px;">
//             I understand that my identity will remain confidential in any written reports of this research, and that no information I disclose will lead to the identification in those reports of any individual either by the researchers or by any other party, without first obtaining my written permission.
//           </li>
//           <li style="margin-bottom: 15px;">
//             I understand that my name and data will not be shared with any third party outside the research group, unless I later provide written permission. 
//           </li>
    
//         </ul>
    
//       </div>
//       `,
//       choices: ['I agree'],
//       data: {
//         trial_section: 'consent'
//       }
//      };
    
    // const consent = {
    //   type: jsPsychSurveyMultiSelect,
    //   preamble: `
    //     <h2 style="text-align:center; margin-bottom: 20px;">Consent Form</h2>
    //     <p style="max-width:900px;margin:0 auto;line-height:1.6;">
    //       Please read through the consent form carefully. If you are happy to proceed,
    //       please tick <b>every</b> box and click <b>I agree</b>. If you do not consent,
    //       please close the window (via Esc) and stop the experiment.
    //     </p>
    //   `,
    //   questions: [
    //     {
    //       prompt: "By continuing, I confirm that:",
    //       name: "consent_items",
    //       options: [
    //         "I understand that by signing below I am agreeing to take part in the University of Sussex research described here, and that I have read and understood this information sheet.",
    //         "I understand that my participation is entirely voluntary, that I can choose not to participate in part or all of the study, and that I can withdraw at any stage without having to give a reason and without being penalised in any way (e.g., if I am a student, my decision whether or not to take part will not affect my grades).",
    //         "I understand I can request without penalty that my data be withdrawn and deleted even after the data collection is complete, any time up until the results are analysed (May 2026).",
    //         "I understand that my personal data will be used for the purposes of this research study and will be handled in accordance with Data Protection legislation.",
    //         "I understand that the University's Privacy Notice provides further information on how the University uses personal data in its research.",
    //         "I understand that my collected data will be stored in a de-identified way (e.g. using ID numbers not names), and kept separate from other details about me (e.g. from the consent form). Electronic data will be stored securely on a University managed system, and hard-copies will be stored behind a locked door. Anonymised data may be shared with the scientific community on the website www.osf.io.",
    //         "I understand that my identity will remain confidential in any written reports of this research, and that no information I disclose will lead to the identification in those reports of any individual either by the researchers or by any other party, without first obtaining my written permission.",
    //         "I understand that my name and data will not be shared with any third party outside the research group, unless I later provide written permission."
    //       ],
    //       required: true
    //     }
    //   ],
    //   button_label: "I agree",
    //   data: { trial_section: "consent" },
    //   on_finish: (data) => {
    //     // require all 8 items checked
    //     const chosen = data.response?.consent_items ?? [];
    //     data.consented_all = chosen.length === 8;
    //   }
    // };

    const consent = {
      type: jsPsychSurveyHtmlForm,
      preamble: `
        <h2 style="text-align:center; margin-bottom: 20px;">Consent Form</h2>
        <p style="max-width:900px;margin:0 auto;line-height:1.6;">
          Please read through the consent form carefully. If you are happy to proceed,
          please tick <b>every</b> box and click <b>I agree</b>. If you do not consent,
          please close the window (via Esc) and stop the experiment.
        </p>
      `,
      html: `
        <div style="max-width:900px;margin: 0 auto; line-height:1.6;">
          <p><b>By continuing, I confirm that:</b></p>
    
          <label style="display:block; margin: 10px 0;">
            <input type="checkbox" name="c1" required>
            I understand that by signing below I am agreeing to take part in the University of Sussex research described here, and that I have read and understood this information sheet.
          </label>
    
          <label style="display:block; margin: 10px 0;">
            <input type="checkbox" name="c2" required>
            I understand that my participation is entirely voluntary, that I can choose not to participate in part or all of the study, and that I can withdraw at any stage without having to give a reason and without being penalised in any way (e.g., if I am a student, my decision whether or not to take part will not affect my grades).
          </label>
    
          <label style="display:block; margin: 10px 0;">
            <input type="checkbox" name="c3" required>
            I understand I can request without penalty that my data be withdrawn and deleted even after the data collection is complete, any time up until the results are analysed (May 2026).
          </label>
    
          <label style="display:block; margin: 10px 0;">
            <input type="checkbox" name="c4" required>
            I understand that my personal data will be used for the purposes of this research study and will be handled in accordance with Data Protection legislation.
          </label>
    
          <label style="display:block; margin: 10px 0;">
            <input type="checkbox" name="c5" required>
            I understand that the University's Privacy Notice provides further information on how the University uses personal data in its research.
          </label>
    
          <label style="display:block; margin: 10px 0;">
            <input type="checkbox" name="c6" required>
            I understand that my collected data will be stored in a de-identified way (e.g. using ID numbers not names), and kept separate from other details about me (e.g. from the consent form). Electronic data will be stored securely on a University managed system, and hard-copies will be stored behind a locked door. Anonymised data may be shared with the scientific community on the website www.osf.io.
          </label>
    
          <label style="display:block; margin: 10px 0;">
            <input type="checkbox" name="c7" required>
            I understand that my identity will remain confidential in any written reports of this research, and that no information I disclose will lead to the identification in those reports of any individual either by the researchers or by any other party, without first obtaining my written permission.
          </label>
    
          <label style="display:block; margin: 10px 0;">
            <input type="checkbox" name="c8" required>
            I understand that my name and data will not be shared with any third party outside the research group, unless I later provide written permission.
          </label>
        </div>
      `,
      button_label: "I agree",
      data: { trial_section: "consent" },
      on_finish: (data) => {
        // survey-html-form returns an object of field values
        // Checked checkboxes will appear as "on" (browser default) unless you set value="" explicitly.
        const r = data.response || {};
        const all = ["c1","c2","c3","c4","c5","c6","c7","c8"].every(k => k in r);
        data.consented_all = all;
      }
    };
    