<template>
  <div class="notification" :class="`is-${message.style}`">
    <p class="content" v-html="message.content"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Notification",
  props: {
    message: Object,
  },
});
</script>
