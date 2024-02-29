const textInputStyle =
  "w-11/12 px-3 py-3 dark:bg-slate-700/40 dark:border-slate-500 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 dark:text-slate-300";

export let inputMaker = [
  {
    type: "textInput",
    children: [
      {
        type: "text",
        value: "",
        placeholder: "Enter firstName",
        name: "firstName",
        label: "Your First Name",
        inputStyle: textInputStyle,
        required: true,
      },
      {
        type: "text",
        value: "",
        placeholder: "Enter lastName",
        name: "lastName",
        label: "Your Last Name",
        inputStyle: textInputStyle,
        required: true,
      },
      {
        type: "email",
        value: "",
        placeholder: "Enter Email",
        name: "email",
        label: "Your Email",
        inputStyle: textInputStyle,
        required: true,
      },
      {
        type: "number",
        value: 0,
        placeholder: "Enter Age",
        name: "age",
        label: "Your Age",
        inputStyle: textInputStyle,
        required: true,
      },
    ],
  },
  {
    type: "multiCheckBox",
    label: "Programming Language",
    children: [
      {
        type: "checkbox",
        value: "Java",
        label: "Java",
        name: "languages",
      },
      {
        type: "checkbox",
        value: "Python",
        label: "Python",
        name: "languages",
      },
      {
        type: "checkbox",
        value: "Javascript",
        label: "Javascript",
        name: "languages",
      },

      {
        type: "checkbox",
        value: "Go",
        label: "Go",
        name: "languages",
      },
      {
        type: "checkbox",
        value: "C#",
        label: "C#",
        name: "languages",
      },
    ],
  },
  {
    type: "multiSelect",
    children: [
      {
        name: "profession",
        label: "Profession",
        value: "",
        options: ["Engineer", "Doctor"],
      },
      {
        name: "hobbies",
        label: "Hobbies",
        value: "",
        options: ["Playing", "Coding"],
      },
    ],
  },
];
