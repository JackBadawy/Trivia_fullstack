type Answer = {
  text: string;
  correct: boolean;
};
type Question = {
  question: string;
  potentialAnswers: {
    [x: string]: any;
    [key: number]: Answer;
  };
};

export const triviaQuestions: { [key: number]: Question } = {
  1: {
    question: "test question one",
    potentialAnswers: {
      1: {
        text: "test answer",
        correct: false,
      },
      2: {
        text: "test answer true",
        correct: true,
      },
      3: {
        text: "test answer",
        correct: false,
      },
      4: {
        text: "test answer",
        correct: false,
      },
    },
  },
  2: {
    question: "test question two",
    potentialAnswers: {
      1: {
        text: "test answer",
        correct: false,
      },
      2: {
        text: "test answer true",
        correct: true,
      },
      3: {
        text: "test answer",
        correct: false,
      },
      4: {
        text: "test answer",
        correct: false,
      },
    },
  },
  3: {
    question: "test question three",
    potentialAnswers: {
      1: {
        text: "test answer",
        correct: false,
      },
      2: {
        text: "test answer true",
        correct: true,
      },
      3: {
        text: "test answer",
        correct: false,
      },
      4: {
        text: "test answer",
        correct: false,
      },
    },
  },
  4: {
    question: "test question four",
    potentialAnswers: {
      1: {
        text: "test answer",
        correct: false,
      },
      2: {
        text: "test answer true",
        correct: true,
      },
      3: {
        text: "test answer",
        correct: false,
      },
      4: {
        text: "test answer",
        correct: false,
      },
    },
  },
  5: {
    question: "test question five",
    potentialAnswers: {
      1: {
        text: "test answer",
        correct: false,
      },
      2: {
        text: "test answer true",
        correct: true,
      },
      3: {
        text: "test answer",
        correct: false,
      },
      4: {
        text: "test answer",
        correct: false,
      },
    },
  },
  6: {
    question: "test question six",
    potentialAnswers: {
      1: {
        text: "test answer",
        correct: false,
      },
      2: {
        text: "test answer true",
        correct: true,
      },
      3: {
        text: "test answer",
        correct: false,
      },
      4: {
        text: "test answer",
        correct: false,
      },
    },
  },
  7: {
    question: "test question seven",
    potentialAnswers: {
      1: {
        text: "test answer",
        correct: false,
      },
      2: {
        text: "test answer true",
        correct: true,
      },
      3: {
        text: "test answer",
        correct: false,
      },
      4: {
        text: "test answer",
        correct: false,
      },
    },
  },
  8: {
    question: "test question eight",
    potentialAnswers: {
      1: {
        text: "test answer",
        correct: false,
      },
      2: {
        text: "test answer true",
        correct: true,
      },
      3: {
        text: "test answer",
        correct: false,
      },
      4: {
        text: "test answer",
        correct: false,
      },
    },
  },
  9: {
    question: "test question nine",
    potentialAnswers: {
      1: {
        text: "test answer",
        correct: false,
      },
      2: {
        text: "test answer true",
        correct: true,
      },
      3: {
        text: "test answer",
        correct: false,
      },
      4: {
        text: "test answer",
        correct: false,
      },
    },
  },
  10: {
    question: "test question ten",
    potentialAnswers: {
      1: {
        text: "test answer",
        correct: false,
      },
      2: {
        text: "test answer true",
        correct: true,
      },
      3: {
        text: "test answer",
        correct: false,
      },
      4: {
        text: "test answer",
        correct: false,
      },
    },
  },
};
