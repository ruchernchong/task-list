<template>
  <div class="notification" :class="`is-${message.style}`">
    <p class="content" v-html="message.content"></p>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    message: Object
  }
}
</script>
