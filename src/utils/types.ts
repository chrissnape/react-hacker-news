export type Post = {
  id: number,
  deleted?: boolean,
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt',
  by: string,
  time: number,
  text?: string,
  dead?: boolean,
  parent?: number,
  poll?: number,
  kids: Array<number>,
  url?: string,
  score?: number,
  title?: string,
  parts?: Array<number>,
  descendants: number,
};

export interface CommentType extends Post {
  parent: number,
  text: string,
};

export interface Story extends Post {
  score: number,
  title: string,
};
