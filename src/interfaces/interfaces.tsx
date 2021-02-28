export interface InfoItem {
  name: string;
  description: string;
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
  isMutedGame: boolean;
}

export interface CardsData {
  endGame: any;
  isMutedGame: boolean;
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
  handlerSoundsFromParent: any;
}

export interface FormDataItem {
  handlerFormFromParent: any;
}

export interface PlayTheGameItem {
  handlerScoreFromParent: any;
  isMutedValue: boolean;
}

export interface Document extends HTMLDocument {
  fullscreenElement: any;
  mozFullScreenElement: any;
  msFullscreenElement: any;
  webkitFullscreenElement: any;
  onfullscreenchange: any;
}

export type Direction = 'left' | 'right' | 'up' | 'down';
