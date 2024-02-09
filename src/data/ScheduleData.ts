import type { Schedule } from '../index';

export const allData: Schedule = [
  {
    daynum: '1',
    title: '',
    activities: [
      {
        name: 'Welcome + Goal-Setting',
        time: '3:30PM - 3:40PM',
        duration: '10',
        actType: 'lecture',
        links: [
          {
            linkURL:
              'https://docs.google.com/presentation/d/1FtwM2RCELcuEZXgCWiYJNLQRVyv0q151nXd4UdHsK9Y/edit?usp=sharing',
            displayText: 'Welcome + Goal-Setting',
          },
          {
            linkURL: 'https://chat.openai.com/',
            displayText: 'ChatGPT',
          },
        ],
      },
      {
        name: 'What can ChatGPT do?',
        time: '3:40PM - 4:00PM',
        duration: '20',
        actType: 'coreskill',
        links: [
          {
            displayText: 'All Star Code Practical AI Applications Workshop: Exploring AI',
            linkURL:
              'https://docs.google.com/presentation/d/1U3yfVYzr0HMZOACkwZ1Fw3xW_clbp9JyXXwUwndypNs/edit?usp=sharing',
          },
          {
            displayText: 'Exploration Guide: What can ChatGPT do?',
            linkURL:
              'https://docs.google.com/document/d/19MlK3dT64YLfy-65ygBio_KnzMsLc-Dq-fMqO0CkAmo/edit?usp=sharing',
          },
          {
            displayText: '<br />AI-tivity: Independent Exploration of ChatGPT I',
            linkURL:
              'https://docs.google.com/document/d/1jAqvJv0w5iY8aziqpCsQx0qmyHx6pj0ll9VlgOgTQqk/copy?title=AI-tivity:%20Independent%20Exploration%20of%20ChatGPT%20I',
          },
        ],
      },
      {
        name: "What can't ChatGPT do?",
        time: '4:00PM - 4:20PM',
        duration: '20',
        actType: 'coreskill',
        links: [
          {
            linkURL:
              'https://docs.google.com/document/d/1NskEQz8vWT6m2dn4_uRlfXhiSuOuRvAq9EQ2dDCRnb4/edit?usp=sharing',
            displayText: "Exploration Guide: What can't ChatGPT do?",
          },
        ],
      },
      {
        name: 'Group Discussion',
        time: '4:20PM - 4:30PM',
        duration: '20',
        actType: 'lecture',
        links: [],
      },
      {
        name: 'Enhancing Learning with ChatGPT',
        time: '4:30PM - 4:50PM',
        duration: '20',
        actType: 'coreskill',
        links: [
          {
            linkURL:
              'https://docs.google.com/document/d/1cgjFwx5XswNDWPy92O43S4EkMqZn-auGYV5TANMcCWc/edit?usp=sharing',
            displayText: 'Exploration Guide: Enhancing Learning with ChatGPT',
          },
          {
            linkURL:
              'https://docs.google.com/document/d/1wigaAYYby6Ee_8mxajnrd_cg09Z_4uiTTuBhb0NSc8M/edit?usp=sharing',
            displayText: 'AI-tivity: Independent Exploration of ChatGPT II',
          },
        ],
      },
      {
        name: 'Wrap Up',
        time: '4:50PM - 5:00PM',
        duration: '10',
        actType: 'lecture',
        links: [
          {
            linkURL:
              'https://drive.google.com/file/d/14YfKSI-PbdJ2jrrLB6BN6r4L9_A9Si5s/view?usp=sharing',
            displayText: "ChatGPT for Learning: Dos and Don'ts",
          },
          {
            linkURL:
              'https://docs.google.com/document/d/1rAWPwIiZeI9p0-PMIctRpIEGGoLBI0IazwdH1AfnVcE/edit?usp=sharing',
            displayText: 'AI Inquiry Day - Student & Instructor Feedback',
          },
          {
            linkURL: 'https://form.typeform.com/to/LEpyc07z',
            displayText: 'Post-Workshop Survey',
          },
        ],
      },
    ],
  },
];
