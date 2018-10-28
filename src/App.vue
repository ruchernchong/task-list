<template>
  <div id="app">
    <header-component/>

    <transition enter-active-class="animated fadeIn">
      <router-view/>
    </transition>

    <footer-component/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import "./sass/app.scss";
</style>
