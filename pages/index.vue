<script setup lang="ts">
import { useCommentsStore } from "@/store/comments";
import { useCurrentUser } from "@/composables/useCurrentUser";
import CommentList from "@/components/CommentList.vue";
import type { CommentNode } from "@/types/comments";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const commentsStore = useCommentsStore();
await commentsStore.fetchComments();

const currentUser = useCurrentUser();

const replyingTo = ref<CommentNode | null>(null);
const replyText = ref("");

const openReply = (comment: CommentNode) => {
  replyingTo.value = comment;
  replyText.value = "";
};

const closeReply = () => {
  replyingTo.value = null;
};

const submitReply = () => {
  if (replyText.value.trim() && replyingTo.value) {
    const newReply: CommentNode = {
      id: uuidv4(),
      author: {
        id: currentUser.id,
        name: currentUser.name,
        picture: null,
      },
      parent_id: null,
      text: replyText.value.trim(),
      timestamp: Date.now(),
      children: [],
    };

    replyingTo.value.children.push(newReply);

    closeReply();
  }
};
</script>

<template>
  <div class="relative min-h-screen bg-basf-blue flex items-center justify-center">
    <div
      class="comments-list-container bg-basf-gray rounded-[10px] w-[90%] max-w-[800px] h-[90vh] max-h-[90vh] overflow-y-auto space-y-[30px] pt-[14px] pl-[23px] pr-[23px] pb-[24px]"
    >
      <CommentList :comments="commentsStore.comments" :onReply="openReply" />
    </div>

    <Teleport to="body">
      <div
        v-if="replyingTo"
        class="reply-modal absolute left-1/2 transform translate-x-[calc(-50%-36px)] w-full max-w-[calc(70%-74px)] bg-white rounded-lg z-50"
      >
        <div class="flex gap-2">
          <input
            v-model="replyText"
            type="text"
            class="flex-grow p-2 border-none rounded-lg h-10 font-inter font-bold text-[10px] leading-[100%] tracking-[0%] placeholder:font-inter placeholder:font-bold placeholder:text-[10px] placeholder:leading-[100%] placeholder:tracking-[0%]"
            placeholder="Type something..."
          />
          <button
            @click="submitReply"
            class="bg-[#D9D9D9] text-black px-[27px] rounded-lg h-10 font-inter font-bold text-[10px] leading-[100%] tracking-[0%]"
          >
            Send
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.reply-modal {
  margin-left: 37px;
  margin-right: 37px;
  padding: 7px;
  bottom: calc(5vh + 13px);
  box-shadow: 0px 4px 4px 0px #00000040;
}

.comments-list-container {
  padding-right: 13px;
  scrollbar-gutter: stable both-edges;
}

.comments-list-container::-webkit-scrollbar {
  width: 6px;
}

.comments-list-container::-webkit-scrollbar-track {
  background: #eceef1;
  margin-top: 13px;
  margin-bottom: 13px;
  border-radius: 9999px;
}

.comments-list-container::-webkit-scrollbar-thumb {
  background: #82878d;
  border-radius: 9999px;
}

.comments-list-container::-webkit-scrollbar-thumb:hover {
  background: #6a6e74;
}
</style>
