let randomId = () => {
  let ids = Math.random() * 100;
  let newId = Math.round(ids);
  return newId;
};

export const dynamicData = [
  {
    id: randomId(),
    title: "First Item",
    expand: false,
    innerItem: [
      {
        id: randomId(),
        title: "First Child One",
        expand: false,
        innerItem: [
          {
            id: randomId(),
            title: "First GrandChildOne One",
          },
          {
            id: randomId(),
            title: "First GrandChildOne Two",
          },
        ],
      },
      {
        id: randomId(),
        title: "First Child Two",
        expand: false,
        innerItem: [
          {
            id: randomId(),
            title: "First GrandChildTwo Two",
          },
        ],
      },
    ],
  },
  {
    id: randomId(),
    title: "Second Item",
    expand: false,
    innerItem: [
      {
        id: randomId(),
        title: "Second Child One",
        expand: false,
        innerItem: [
          {
            id: randomId(),
            title: "Second GrandChildOne One",
          },
          {
            id: randomId(),
            title: "Second GrandChildOne Two",
          },
        ],
      },
      {
        id: randomId(),
        title: "Second Child Two",
        expand: false,
        innerItem: [
          {
            id: randomId(),
            title: "Second GrandChildTwo One",
          },
          {
            id: randomId(),
            title: "Second GrandChildTwo Two",
          },
          {
            id: randomId(),
            title: "Second GrandChildTwo Three",
          },
        ],
      },
    ],
  },
];
