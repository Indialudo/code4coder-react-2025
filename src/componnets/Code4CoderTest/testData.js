// ================== SET 1 ==================
export const questions= [
  // React (10)
  {
    id: 1,
    question: "Which hook is used to manage component-level state in React?",
    options: ["useMemo", "useReducer", "useState", "useEffect"],
    answer: 2,
  },
  {
    id: 2,
    question: "What is the correct way to pass data from parent to child in React?",
    options: ["Props", "State", "useContext", "Redux"],
    answer: 0,
  },
  {
    id: 3,
    question: "Which lifecycle method is replaced by useEffect in React?",
    options: ["componentDidMount", "componentWillUnmount", "componentDidUpdate", "All of the above"],
    answer: 3,
  },
  {
    id: 4,
    question: "What will happen if you call setState() in render method?",
    options: ["Component will re-render infinitely", "Error will occur", "Nothing happens", "Updates state once"],
    answer: 0,
  },
  {
    id: 5,
    question: "Which hook should be used to optimize performance for expensive calculations?",
    options: ["useEffect", "useMemo", "useCallback", "useReducer"],
    answer: 1,
  },
  {
  id: 6,
  question: "Which hook is used to manage state in functional components?",
  options: [
    "useState hook allows you to add state variables to functional components and manage them effectively over re-renders",
    "useEffect hook is primarily used to perform side effects in functional components like fetching data or subscribing to events",
    "useContext hook is used to share data across the component tree without passing props manually at every level",
    "useReducer hook is used for complex state logic in functional components, similar to how reducers work in Redux"
  ],
  answer: 0,
},
  {
    id: 7,
    question: "Which hook is best for managing form input values?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: 1,
  },
  {
    id: 8,
    question: "What is the default behavior of useEffect without dependency array?",
    options: ["Runs only once", "Runs on every render", "Runs on unmount", "Never runs"],
    answer: 1,
  },
  {
    id: 9,
    question: "In React 18, which hook allows streaming data from server?",
    options: ["useDeferredValue", "useTransition", "useSyncExternalStore", "useId"],
    answer: 2,
  },
  {
    id: 10,
    question: "Which React feature helps avoid prop drilling?",
    options: ["Context API", "useReducer", "Refs", "StrictMode"],
    answer: 0,
  },

  // JavaScript (5)
  {
    id: 11,
    question: "What will be the output of `typeof NaN` in JavaScript?",
    options: ["undefined", "number", "object", "NaN"],
    answer: 1,
  },
  {
    id: 12,
    question: "Which method is used to create a shallow copy of an object?",
    options: ["Object.create", "Object.assign", "JSON.parse", "new Object()"],
    answer: 1,
  },
  {
    id: 13,
    question: "Which keyword is used to prevent object modification?",
    options: ["const", "Object.seal", "Object.freeze", "static"],
    answer: 2,
  },
  {
    id: 14,
    question: "What is the result of `[] + []` in JavaScript?",
    options: ["[]", "0", "''", "undefined"],
    answer: 2,
  },
  {
    id: 15,
    question: "Which of the following is NOT a primitive type in JavaScript?",
    options: ["Symbol", "Object", "Boolean", "BigInt"],
    answer: 1,
  },

  // React (5 again)
  {
    id: 16,
    question: "Which hook is specifically designed for mutable values that don’t trigger re-renders?",
    options: ["useState", "useReducer", "useRef", "useMemo"],
    answer: 2,
  },
  {
    id: 17,
    question: "Which new React hook ensures consistent IDs for accessibility?",
    options: ["useDeferredValue", "useId", "useSyncExternalStore", "useLayoutEffect"],
    answer: 1,
  },
  {
    id: 18,
    question: "What happens when you use React.StrictMode?",
    options: ["Shows warnings for unsafe lifecycles", "Prevents rendering", "Optimizes performance", "Disables hooks"],
    answer: 0,
  },
  {
    id: 19,
    question: "How do you lazy-load a component in React?",
    options: ["React.load()", "React.lazy()", "useEffect()", "React.suspend()"],
    answer: 1,
  },
  {
    id: 20,
    question: "What does useTransition help with?",
    options: ["Managing local state", "Handling concurrent UI updates", "Optimizing DOM rendering", "CSS transitions"],
    answer: 1,
  },

  // JavaScript (5 again)
  {
    id: 21,
    question: "What will be the result of `[1,2,3] == [1,2,3]`?",
    options: ["true", "false", "undefined", "error"],
    answer: 1,
  },
  {
    id: 22,
    question: "Which of the following is a falsy value?",
    options: ["0", "''", "null", "All of the above"],
    answer: 3,
  },
  {
    id: 23,
    question: "Which method can flatten nested arrays?",
    options: ["flat()", "reduce()", "map()", "slice()"],
    answer: 0,
  },
  {
    id: 24,
    question: "What is the scope of a variable declared with var?",
    options: ["Block scope", "Function scope", "Global scope", "Both function & global"],
    answer: 1,
  },
  {
    id: 25,
    question: "What does `this` refer to in strict mode if used alone?",
    options: ["window", "undefined", "null", "global"],
    answer: 1,
  },

  // HTML/CSS (5)
  {
    id: 26,
    question: "Which HTML tag is semantic?",
    options: ["<div>", "<section>", "<span>", "<b>"],
    answer: 1,
  },
  {
    id: 27,
    question: "What does CSS property `z-index` control?",
    options: ["Font size", "Stacking order", "Flex direction", "Opacity"],
    answer: 1,
  },
  {
    id: 28,
    question: "Which CSS property makes an element responsive to parent width?",
    options: ["min-width", "max-width", "width: 100%", "flex-grow"],
    answer: 2,
  },
  {
    id: 29,
    question: "Which HTML attribute improves accessibility?",
    options: ["class", "id", "aria-label", "style"],
    answer: 2,
  },
  {
    id: 30,
    question: "Which unit is relative to viewport height?",
    options: ["em", "px", "vh", "%"],
    answer: 2,
  },

  // React/JS Advanced Hard (5)
  {
    id: 31,
    question: "What is the time complexity of React’s reconciliation process in the worst case?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
    answer: 1,
  },
  {
    id: 32,
    question: "Which scheduling algorithm does React Fiber use?",
    options: ["Depth-first", "Breadth-first", "Cooperative scheduling", "Round-robin"],
    answer: 2,
  },
  {
    id: 33,
    question: "How does React handle batching of state updates in React 18?",
    options: ["Manually with flushSync", "Automatic batching for all updates", "No batching", "Only in setTimeout"],
    answer: 1,
  },
  {
    id: 34,
    question: "Which JavaScript feature powers React hooks?",
    options: ["Closures", "Promises", "Prototypes", "Classes"],
    answer: 0,
  },
  {
    id: 35,
    question: "What is the output of `useState(()=> expensiveFunction())`?",
    options: ["expensiveFunction runs every render", "expensiveFunction runs once", "undefined", "error"],
    answer: 1,
  },
];

// ================== SET 2 ==================
// (same structure with new questions)

// ================== SET 3 ==================
// (same structure with new questions)
