export interface Author {
    id: string
    name: string
    picture?: string | null;
  }
  
  export interface RawComment {
    id: string
    parent_id: string | null
    author: Author
    text: string
    timestamp: number
  }
  
  export interface CommentNode extends RawComment {
    children: CommentNode[]
  }
  