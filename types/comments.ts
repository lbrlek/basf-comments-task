// types/comments.ts

export interface Author {
    name: string
    picture?: string
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
  