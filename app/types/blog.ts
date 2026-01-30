export interface BlogPost {
  name: string;
  title: string;
  route: string;
  date: string;
  excerpt: string;
  tags: string[];
  image?: string;
  slug?: string;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

export interface BlogContentProps {
  posts: BlogPost[];
  showTitle?: boolean;
  title?: string;
  rssButton?: React.ReactNode;
  showTagFilter?: boolean;
  columns?: 1 | 2 | 3 | 4;
  layout?: "card" | "row";
  gridGapClassName?: string;
}

export interface BlogContentServerProps {
  maxPosts?: number;
  showTitle?: boolean;
  title?: string;
  rssButton?: React.ReactNode;
  showTagFilter?: boolean;
  columns?: 1 | 2 | 3 | 4;
  layout?: "card" | "row";
  gridGapClassName?: string;
}
