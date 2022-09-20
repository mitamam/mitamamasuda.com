<template>
  <transition mode="out-in">
    <loading v-if="loading"></loading>
  </transition>
  <global-header/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <global-footer/>
</template>

<script>
import Loading from '@/components/Loading'
import GlobalHeader from '@/components/Header'
import GlobalFooter from '@/components/Footer'

export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  },
  components: {
    Loading,
    GlobalHeader,
    GlobalFooter
  }
}
</script>

<style>
:root {
  --main-color: #40362D;
  --bg-color: #F0E8E0;
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
  height: 100%;
  font-size: calc(1rem + ((1vw - 0.234375rem) * 2.0657));
}

body {
  height: 100%;
  margin: 0;
  background-color: var(--bg-color);
  overflow-x: hidden;
  font-family: 'Cormorant', serif;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.container {
  margin: 0 32px;
  overflow: hidden;
}

h2 {
  font-size: 40px;
  letter-spacing: 0.25px;
  font-weight: normal;
  margin-bottom: 32px;
}

p {
  font-family: 'Lato', sans-serif;
}

/* Page transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Loading transition */
.v-enter-active,
.v-leave-active {
  transition: opacity .8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media only screen and (min-width: 600px) {
  .container {
    margin: 0 64px;
  }

  h2 {
    font-size: 48px;
    margin-bottom: 48px;
  }
}

@media only screen and (min-width: 905px) {
  .container {
    max-width: 840px;
    margin: 0 auto;
  }

  h2 {
    font-size: 64px;
    margin-bottom: 64px;
  }
}

@media only screen and (min-width: 1240px) {
  .container {
    max-width: 1040px;
    margin: 0 auto;
  }
}

</style>
