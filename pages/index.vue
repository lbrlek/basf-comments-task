<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { RawComment } from "@/types/comments";

const rawComments = ref<RawComment[]>([]);

onMounted(async () => {
  const res = await fetch("/data/example.json");
  const json = await res.json();
  rawComments.value = json.data.comments;
});
</script>

<template>
  <div class="comments-page">
    <h1>Threaded Comments (Raw View)</h1>
    <ul>
      <li v-for="comment in rawComments" :key="comment.id">
        <p>
          <strong>{{ comment.author.name }}</strong
          >: {{ comment.text }}
        </p>
        <small>{{ new Date(comment.timestamp).toLocaleString() }}</small>
      </li>
    </ul>
  </div>
</template>
