<script setup lang="ts">
import type { CommentNode } from "@/types/comments";
import dayjs from "@/utils/dayjs";

const { comment } = defineProps<{ comment: CommentNode }>();

const formattedDate = computed(() => dayjs(comment.timestamp).format("dddd, DD.MM.YYYY"));
</script>

<template>
  <div class="flex items-start space-x-4 p-4 rounded-lg max-w-[492px]">
    <div class="flex-shrink-0">
      <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
    </div>
    <div class="flex-1">
      <div
        class="flex flex-col justify-between bg-white rounded-[5px] pt-[14px] pl-[23px] pr-[23px] pb-[24px]"
      >
        <h4 class="text-lg font-semibold text-gray-900">
          {{ comment.author.name }}
        </h4>
        <p class="mt-2 text-gray-700">{{ comment.text }}</p>
      </div>
      <span class="text-sm text-gray-500">{{ formattedDate }}</span>
    </div>
  </div>
</template>
