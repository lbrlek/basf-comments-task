<script setup lang="ts">
import { useCommentsStore } from "@/store/comments";
import CommentList from "@/components/CommentList.vue";

const commentsStore = useCommentsStore();
await commentsStore.fetchComments();
</script>

<template>
  <div class="comments-page">
    <h1>Threaded Comments</h1>
    <CommentList :comments="commentsStore.comments" />
  </div>
</template>

<style scoped>
.comments-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: sans-serif;
}
</style>
