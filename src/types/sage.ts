export interface Sage {
  id: string;
  name: string;
  period: string;
  biography: string;
  image: string;
  quotes: Quote[];
  poems: Poem[];
  gallery: GalleryImage[];
}

export interface Quote {
  id: string;
  text: string;
  source: string;
  year?: string;
}

export interface Poem {
  id: string;
  title: string;
  content: string;
  year?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  type: 'portrait' | 'location' | 'manuscript';
}