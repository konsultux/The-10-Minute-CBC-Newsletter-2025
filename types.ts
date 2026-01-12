export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  quote?: string;
  imagePlaceholderId: number;
  specialNote?: string;
}

export interface ReadingListItem {
  title: string;
  author?: string;
  dates: string;
  duration: string;
  note?: string;
}

export interface EventDetails {
  title: string;
  speaker: string;
  date: string;
  time: string;
  description: string;
  registrationLink?: string;
}