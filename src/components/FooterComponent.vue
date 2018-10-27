<template>
    <footer class="footer">
        <div class="container">
            <div class="columns is-centered has-text-centered">
                <logo class="icon is-large" :link="link" :key="link.name" v-for="link in links"/>
            </div>

            <p class="content has-text-centered">
                This source code for this project can be found on
                <a href="https://github.com/ruchern/task-list.git" target="_blank" rel="noopener">Github</a> and its
                licensed by <a href="https://opensource.org/licenses/mit-license.php" target="_blank"
                               rel="noopener nofollow">MIT</a>.
            </p>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '@/components/Logo'

export default {
  name: 'FooterComponent',
  components: { Logo },
  computed: {
    ...mapState(['links'])
  }
}
</script>

<style lang="scss" scoped>
.icon {
  margin: 15px;
}
</style>
