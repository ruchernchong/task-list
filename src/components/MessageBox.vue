<template>
    <article class="message" :class="`is-${message.style}`">
        <div class="message-header">
            <p>{{ message.title }}</p>
        </div>

        <div class="message-body">
            <p class="content" v-html="message.content"></p>
        </div>
    </article>
</template>

<script>
  export default {
    name: 'message-box',
    props: {
      message: Object
    }
  }
</script>

<style scoped>

</style>
