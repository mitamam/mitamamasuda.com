<template>
  <global-header/>
  <router-view/>
  <global-footer/>
</template>

<script>
import GlobalHeader from '@/components/Header'
import GlobalFooter from '@/components/Footer'

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>

<style>
:root {
  --main-color: #40362D;
  --bg-color: #F0E8E0;

  --mobile-breakpoint: 599px;
  --tablet-breakpoint: 904px;
  --desktop-breakpoint: 905px;
}

.dark-mode {
  --main-color: #F0E8E0;
  --bg-color: #40362D;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--main-color);
}

li {
  list-style: none;
}

html {
  width: 100%;
}

body {
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  overflow-x: hidden;
  font-family: 'Cormorant', 'Lato', serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  margin: 0 1rem;
  overflow: hidden;
}
</style>
