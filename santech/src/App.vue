<script setup>
import Home from './views/Home.vue';
import NavBar from './components/ui/NavBar.vue';
import { RouterView } from 'vue-router';
import Footer from './views/footer.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
  

  