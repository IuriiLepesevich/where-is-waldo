import level1 from "./images/level1.jpg";
import RoboCop from "./images/RoboCop.jpg";
import Wheatley from "./images/Wheatley.png";
import R2D2 from "./images/R2D2.jpg";

import level2 from "./images/level2.jpg";
import Consuela from "./images/Consuela.png";
import Steven from "./images/Steven.jpg";
import Worm from "./images/Worm.jpg";

const levels = [
  {
    id: 1,
    name: "Anarchy",
    image: level1,
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
    name: "A.D. 2.222",
    image: level2,
    characters: [
      {
        id: "consuela",
        name: "Consuela",
        image: Consuela,
      },
      {
        id: "steven",
        name: "Steven",
        image: Steven,
      },
      {
        id: "worm",
        name: "Worm",
        image: Worm,
      },
    ],
  },
];

export default levels;
