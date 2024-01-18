<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/movie/NavBar.vue'
import FooterBar from './components/movie/FooterBar.vue';
</script>

<template>
  <NavBar/>
  <RouterView />
  <FooterBar/>
</template>

