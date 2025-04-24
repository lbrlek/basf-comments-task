<script setup lang="ts">
import { useCommentsStore } from "@/store/comments";
import CommentList from "@/components/CommentList.vue";

const commentsStore = useCommentsStore();
await commentsStore.fetchComments();
</script>

<template>
  <div class="comments-page bg-basf-blue mx-[103px] my-[106px]">
    <div
      class="comments-list-container bg-basf-gray rounded-[10px] space-y-[30px] pt-[14px] pl-[23px] pr-[23px] pb-[24px]"
    >
      <CommentList :comments="commentsStore.comments" />
    </div>
  </div>
</template>
