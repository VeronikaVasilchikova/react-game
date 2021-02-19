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

export type Direction = 'left' | 'right' | 'up' | 'down';
