export interface BlogPost {
  name: string;
  title: string;
  route: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface BlogContentProps {
  posts: BlogPost[];
  showTitle?: boolean;
  title?: string;
}

export interface BlogContentServerProps {
  maxPosts?: number;
  showTitle?: boolean;
  title?: string;
}
