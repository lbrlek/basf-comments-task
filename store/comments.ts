import { defineStore } from 'pinia'
import type { RawComment, CommentNode } from '@/types/comments'

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    comments: [] as CommentNode[]
  }),

  actions: {
    async fetchComments() {
      const { data } = await useFetch('/api/comments')
      const flat = data.value?.data.comments as RawComment[]
      this.comments = this.buildTree(flat)
    },

    buildTree(flat: RawComment[]): CommentNode[] {
      const map = new Map<string, CommentNode>()
      const roots: CommentNode[] = []

      flat.forEach(comment => {
        map.set(comment.id, { ...comment, children: [] })
      })

      map.forEach(comment => {
        if (comment.parent_id) {
          map.get(comment.parent_id)?.children.push(comment)
        } else {
          roots.push(comment)
        }
      })

      return roots
    }
  }
})
