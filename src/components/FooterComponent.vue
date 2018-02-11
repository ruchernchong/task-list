<template>
    <footer class="footer">
        <div class="container">
            <div class="columns is-centered has-text-centered">
                <a :href="link.url" class="icon is-large" target="_blank" rel="noopener" v-for="link in links">
                    <i class="fa fa-2x" :class="`fa-${link.name.replace(' ','-').toLowerCase()}`"></i>
                </a>
            </div>

            <p class="content has-text-centered">
                This source code can be found on
                <a href="https://github.com/ruchern/task-list.git" target="_blank" rel="noopener">Github</a>.
            </p>
        </div>
    </footer>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'footer-component',
    computed: {
      ...mapState(['links'])
    }
  }
</script>