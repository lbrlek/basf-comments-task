<script setup lang="ts">
import type { CommentNode } from "@/types/comments";
import CommentItem from "@/components/CommentItem.vue";

const props = defineProps<{
  comments: CommentNode[];
  onReply: (comment: CommentNode) => void;
}>();
</script>

<template>
  <ul class="comment-list">
    <li v-for="comment in props.comments" :key="comment.id" class="comment-list__item">
      <CommentItem :comment="comment" :onReply="onReply" />

      <div v-if="comment.children.length" class="relative ml-8 pl-4 pt-4 overflow-hidden">
        <div class="absolute left-0 top-0 w-px bg-gray-300" style="height: 50px"></div>
        <div class="absolute left-0 top-[50px] w-[13px] h-px bg-gray-300"></div>

        <CommentList :comments="comment.children" :onReply="onReply" />
      </div>
    </li>
  </ul>
</template>
