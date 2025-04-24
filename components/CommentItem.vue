<script setup lang="ts">
import type { CommentNode } from "@/types/comments";
import dayjs from "@/utils/dayjs";

const { comment } = defineProps<{ comment: CommentNode }>();

const formattedDate = computed(() => dayjs(comment.timestamp).format("dddd, DD.MM.YYYY"));
</script>

<template>
  <div class="comment-item">
    <p>
      <strong>{{ comment.author.name }}</strong>
    </p>
    <p>{{ comment.text }}</p>
    <small>{{ formattedDate }}</small>
  </div>
</template>
