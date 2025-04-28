<script setup lang="ts">
import type { CommentNode } from "@/types/comments";
import dayjs from "@/utils/dayjs";
import { computed, ref, watch, onMounted } from "vue";

const { comment, onReply } = defineProps<{
  comment: CommentNode;
  onReply: (comment: CommentNode) => void;
}>();

const formattedTime = computed(() => dayjs(comment.timestamp).format("HH:mm"));

const colors = ["bg-basf-red", "bg-basf-green", "bg-basf-yellow"];

const getUserColor = (id: string | number) => {
  let numericId: number;

  if (typeof id === "number") {
    numericId = id;
  } else {
    numericId = Array.from(id).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  }

  const index = numericId % colors.length;
  return colors[index];
};

const showImage = ref(false);

const checkImage = async (url: string) => {
  if (typeof window === "undefined") return false;
  return new Promise<boolean>((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

const handleAvatar = async () => {
  if (!comment.author.picture) {
    showImage.value = false;
    return;
  }
  const exists = await checkImage(comment.author.picture);
  showImage.value = exists;
};

onMounted(() => {
  handleAvatar();
});

watch(
  () => comment.author.picture,
  () => {
    handleAvatar();
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex items-start space-x-4 p-4 rounded-lg max-w-[492px]">
    <div class="relative w-10 h-10">
      <div
        class="absolute inset-0 rounded-full flex items-center justify-center"
        :class="getUserColor(comment.id)"
      ></div>
      <img
        v-if="showImage && comment.author.picture"
        :src="comment.author.picture"
        alt="Avatar"
        class="absolute inset-0 w-full h-full object-cover rounded-full"
      />
    </div>

    <div class="flex-1">
      <div
        class="flex flex-col justify-between bg-white rounded-[5px] pt-[14px] pl-[23px] pr-[23px] pb-[24px]"
      >
        <h4
          class="font-inter font-semibold text-[12px] leading-[100%] tracking-[0%] text-gray-900"
        >
          {{ comment.author.name }}
        </h4>
        <p
          class="mt-2 font-inter font-normal text-[12px] leading-[100%] tracking-[0%] text-gray-700"
        >
          {{ comment.text }}
        </p>
      </div>

      <div class="flex items-center mt-2">
        <span
          class="font-inter font-normal text-[10px] leading-[100%] tracking-[0%] text-gray-500"
        >
          {{ formattedTime }}
        </span>

        <button
          @click="onReply(comment)"
          class="ml-[13px] font-inter font-normal text-[10px] leading-[100%] tracking-[0%] text-basf-darkBlue hover:underline"
        >
          Reply<span v-if="comment.children.length">
            ({{ comment.children.length }})
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
