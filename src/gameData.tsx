import picture1 from "./images/picture1.jpg";
import RoboCop from "./images/RoboCop.jpg";
import Wheatley from "./images/Wheatley.png";
import R2D2 from "./images/R2D2.jpg";

const levels = [
  {
    id: 1,
    name: "Anarchy",
    image: picture1,
    characters: [
      {
        id: "robocop",
        name: "RoboCop",
        image: RoboCop,
      },
      {
        id: "wheatley",
        name: "Wheatley",
        image: Wheatley,
      },
      {
        id: "r2d2",
        name: "R2D2",
        image: R2D2,
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
        name: "Name 1",
        image: "image 2 1",
      },
      {
        id: "character 2 2",
        name: "Name 2",
        image: "image 2 2",
      },
      {
        id: "character 2 3",
        name: "Name 3",
        image: "image 2 3",
      },
    ],
  },
];

export default levels;
