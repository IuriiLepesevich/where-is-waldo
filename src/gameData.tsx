import test from "./images/test.jpeg";

const levels = [
  {
    id: 1,
    name: "Level 1",
    image: test,
    characters: [
      {
        id: "character 1 1",
        name: "Name 1 1",
        image: "test",
      },
      {
        id: "character 1 2",
        name: "Name 1 2",
        image: "test",
      },
      {
        id: "character 1 3",
        name: "Name 1 3",
        image: "test",
      },
    ],
  },
  {
    id: 2,
    name: "Level 2",
    image: "image2",
    characters: [
      {
        id: "character 2 1",
        name: "Name 2 1",
        image: "image 2 1",
      },
      {
        id: "character 2 2",
        name: "Name 2 2",
        image: "image 2 2",
      },
      {
        id: "character 2 3",
        name: "Name 2 3",
        image: "image 2 3",
      },
    ],
  },
];

export default levels;
