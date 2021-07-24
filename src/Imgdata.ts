import Podcastr from "./assets/rocketseatb1.jpg";
import PodcastrGif from "./assets/PodcastrGif.gif";

import urcrud from "./assets/urcrud.jpg";
import UrcrudGif from "./assets/UrcrudGif.gif";

import kanban from "./assets/kanban.jpg";
import KanbanGif from "./assets/KanbanGif.gif";

import letmeask from "./assets/letmeask.jpg";
import LetmeaskGif from "./assets/LetmeaskGif.gif";

import flappy from "./assets/flappy.jpg";
import FlappyGif from "./assets/FlappyGif.gif";

interface ImgProps {
  img: string;
  gif: string;
  title: string;
}

export const data: ImgProps[] = [
  { img: Podcastr, gif: PodcastrGif, title: "Rocketseat Podcastr Bootcamp" },
  { img: urcrud, gif: UrcrudGif, title: "Urcrud Application" },
  { img: kanban, gif: KanbanGif, title: "Kanban Application" },
  { img: letmeask, gif: LetmeaskGif, title: "Rocketseat Letmeask Bootcamp" },
  { img: flappy, gif: FlappyGif, title: "Flappy Bird Application" },
];
