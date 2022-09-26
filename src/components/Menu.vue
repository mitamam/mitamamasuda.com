<template>
<div class="menu" v-bind:class="{isopen: open}">
  <div class="logo-light"><img src="../assets/logo_light.svg" alt="MITAMA MASUDA"></div>
  <ul  class="header-menu" :class="{'on-home-page': $route.path === '/'}">
    <li class="header-menu-item"><router-link to="/" @click="closeMenu">Home</router-link></li>
    <li class="header-menu-item"><router-link to="/about" @click="closeMenu">About</router-link></li>
    <li class="header-menu-item"><router-link to="/work" @click="closeMenu">Work</router-link></li>
    <li class="header-menu-item"><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
  </ul>
  <ul class="sns-link">
    <li>
      <a href="https://twitter.com/AuClairDeLune3" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
    </li>
    <li>
      <a href="https://jp.linkedin.com/in/mitama-masuda-3a5453238" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
    </li>
    <li>
      <a href="https://github.com/mitamam/mitamamasuda.com/" target="_blank" rel="noopener noreferrer"><font-awesome-icon icon="fa-brands fa-github" /></a>
    </li>
  </ul>
  <div class="dark-mode-toggler">
    <input type="checkbox" @click="toggleDarkMode"/>
    <img src="../assets/moon.svg" alt="dark">
  </div>
  <div class="dark-mode-switch">
    <div class="switch-icon sun"><img src="../assets/sun.svg" alt="light"></div>
    <input type="checkbox" id="dark-mode-toggle" @click="toggleDarkMode">
    <label for="dark-mode-toggle"></label>
    <div class="switch-icon moon"><img src="../assets/moon.svg" alt="dark"></div>
  </div>
</div>
</template>

<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
export default {
  name: 'Menu',
  props: { open: Boolean },
  data() {
    return {
      menu: null,
      darkMode: false
    }
  },
  mounted() {
    this.menu = document.querySelector('.menu')
  },
  beforeUnmount() {
    clearAllBodyScrollLocks()
  },
  watch: {
    open (isopen) {
      if (isopen == true)
        disableBodyScroll(this.menu)
      else
        enableBodyScroll(this.menu)
    }
  },
  methods: {
    closeMenu() {
      enableBodyScroll(this.menu)
      this.$emit('pageTransition' , this.isopen)
    },
    toggleDarkMode() {
      if (this.darkMode == true) {
        document.body.classList.remove('dark-mode')
        this.darkMode = false
      }
      else {
        document.body.classList.add('dark-mode')
        this.darkMode = true
      }
      this.closeMenu()
    }
  }
}
</script>

<style>
.menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  margin: 0;
  padding: 32px;
  padding-top: 48px;
  z-index: 20;
  
  background: #40362D;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform: translateX(100%);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

.menu.isopen
{
  transform: translateX(0);
  opacity: 1;
}

.header .logo-light {
  margin-bottom: 64px;
}

.header-menu {
  margin-left: 16px;
}

.header-menu-item {
  padding-bottom: 16px;
  font-size: 24px;
  position: relative;
}

.header-menu-item a {
  transition: color 0.3s ease;
  color: #F0E8E0;
}

.header-menu-item a:hover {
  color: #A2917E;
}

.sns-link {
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin: 0 0 56px 16px;
}

.sns-link a {
  display: block;
  margin-top: 2px;
  font-size: 18px;
  color: #F0E8E0;
}

/* Dark mode toggler (desktop) */
.dark-mode-toggler {
  display: none;
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 24px;
}

.dark-mode-toggler input {
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: pointer;
  z-index: 5;
  opacity: 0;
}

.dark-mode-toggler img {
  margin: 0 auto;
  filter: invert(18%) sepia(18%) saturate(610%) hue-rotate(347deg)
    brightness(98%) contrast(88%);
}

.dark-mode-toggler input:checked + img {
  margin-top: 2px;
  content: url(../assets/sun.svg);
  width: 16px;
  height: 16px;
  filter: invert(98%) sepia(4%) saturate(4857%) 
    hue-rotate(296deg) brightness(116%) contrast(86%);
}

/* Dark mode switch (mobile) */
#dark-mode-toggle {
  display: none;
}

#dark-mode-toggle + label {
  display: block;
  width: 36px;
  height: 20px;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #F0E8E0;
  border-radius: 2em;
  padding: 2px;
}

#dark-mode-toggle + label:after,
#dark-mode-toggle + label:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}

#dark-mode-toggle + label::after {
  left: 0;
  border-radius: 50%;
  background: #40362D;
  transition: all .4s ease;
}

#dark-mode-toggle + label::before {
  display: none;
}

#dark-mode-toggle:checked + label {
  background: #40362D;
  border: 1px solid #F0E8E0;
}

#dark-mode-toggle:checked + label::after {
  left: 50%;
  background: #F0E8E0;
}

.dark-mode-switch {
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
  margin-left: 16px;
}

.switch-icon {
  width: 12px;
  height: 12px;
  filter: invert(98%) sepia(4%) saturate(4857%) 
    hue-rotate(296deg) brightness(116%) contrast(86%);
}

.moon {
  width: 13px;
  height: 13px;
}

.switch-icon img {
  width: 100%;
  height: 100%;
}
/* /Dark mode switch */

@media screen and (min-width: 600px) {
  .menu {
    background-color: transparent;
    transform: none;
    transition: none;
    opacity: 1;
    margin: 0;
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .header .logo-light {
    display: none;
  }
  
  .header-menu {
    display: flex;
    align-items: center;
    column-gap: 32px;
    margin: 0;
  }

  .header-menu-item {
    padding: 0;
    font-size: 20px;
  }

  .header-menu-item:first-child {
    display: none;
  }

  .header-menu-item::before {
    position: absolute;
    width: 100%;
    height: 1px;
    background: var(--main-color);
    top: 100%;
    left: 0;
    pointer-events: none;
    content: '';
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }

  .header-menu-item:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }

  .header-menu-item:hover {
    --d: 100%;
  }
  
  .sns-link {
    margin: 0;
    margin-left: 48px;
  }
  
  .header a {
    color: var(--main-color);
  }

  .dark-mode-toggler {
    display: block;
  }

  .dark-mode-switch {
    display: none;
    margin: 0;
  }
}
</style>