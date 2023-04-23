<template>
  <div id="app">
    <header-component />

    <router-view v-slot="{ Component, route }">
      <transition enter-active-class="animated fadeIn">
        <component :is="Component"></component>
      </transition>
    </router-view>

    <footer-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
})
</script>

<style lang="scss">
html,
body {
  background-color: #f5f5f5;
}
</style>
