<script setup lang="ts">
import type { CommentNode } from "@/types/comments";

defineProps<{
  comments: CommentNode[];
}>();
</script>

<template>
  <ul class="comment-list">
    <li
      v-for="comment in comments"
      :key="comment.id"
      class="comment-list__item space-y-[30px]"
    >
      <CommentItem :comment="comment" />
      <CommentList v-if="comment.children.length" :comments="comment.children" />
    </li>
  </ul>
</template>
