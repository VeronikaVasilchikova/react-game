export interface InfoItem {
  name: string;
  description: string;
  backgroundColor: string;
}

export interface CarouselItem {
  content: InfoItem
}

export interface Arrow {
  direction: string;
  clickFunction: any;
}

export interface CardImage {
  name: string
  picture: any
  flipped: boolean
}

export interface CardItem {
  endGame: any;
}

export interface CardsData {
  endGame: any;
}

export interface EndGameItem {
  newGame: any;
}
export interface MessageItem {
  title: string;
  text: string;
}

export interface UserInfo {
  userName: string;
  userScore: number;
  handlerThemeFromParent: any;
}

export interface FormDataItem {
  handlerFormFromParent: any;
}

export interface PlayTheGameItem {
  handlerScoreFromParent: any;
}

export type Direction = 'left' | 'right' | 'up' | 'down';
