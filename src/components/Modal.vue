<template>
<div class="modal" v-bind:class="{isopen: open}">
  <div class="logo-light"><img src="../assets/logo_light.svg" alt="MITAMA MASUDA"></div>
  <ul  class="header-menu" :class="{'on-home-page': $route.path === '/'}">
    <li class="header-menu-item"><router-link to="/" @click="closeModal">Home</router-link></li>
    <li class="header-menu-item"><router-link to="/about" @click="closeModal">About</router-link></li>
    <li class="header-menu-item"><router-link to="/work" @click="closeModal">Work</router-link></li>
    <li class="header-menu-item"><router-link to="/contact" @click="closeModal">Contact</router-link></li>
  </ul>
  <ul class="sns-link">
    <li>
      <a href="https://twitter.com/AuClairDeLune3"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
    </li>
    <li>
      <a href="linkedin.com/in/mitama-masuda-3a5453238"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
    </li>
    <li>
      <a href="https://github.com/mitamam/mitamamasuda.com/"><font-awesome-icon icon="fa-brands fa-github" /></a>
    </li>
  </ul>
  <div class="switch">
    <div class="switch-icon sun"><img src="../assets/sun.svg" alt="light"></div>
    <input type="checkbox" id="dark-mode-toggle">
    <label for="dark-mode-toggle"></label>
    <div class="switch-icon moon"><img src="../assets/moon.svg" alt="dark"></div>
  </div>
</div>
</template>

<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
export default {
  name: 'Modal',
  props: { open: Boolean },
  data() {
    return {
      modal: null,
    }
  },
  mounted() {
    this.modal = document.querySelector('.modal')
  },
  beforeUnmount() {
    clearAllBodyScrollLocks()
  },
  watch: {
    open (isopen) {
      if (isopen == true)
        disableBodyScroll(this.modal)
      else
        enableBodyScroll(this.modal)
    }
  },
  methods: {
    closeModal() {
      enableBodyScroll(this.modal)
      this.$emit('pageTransition' , this.isopen)
    }
  }
}
</script>

<style>
.modal {
  position: absolute;
  width: 100vw;
  height: 100vh;
  margin: -99px 0 0 0;
  padding: 32px;
  padding-top: 48px;
  right: -32px;
  
  background: var(--main-color);
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

.modal.isopen
{
  transform: none;
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

.header-menu-item::before {
  position: absolute;
  width: 100%;
  height: 1px;
  background: currentColor;
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

.header-menu-item a {
  transition: color 0.3s ease;
  color: var(--bg-color);
}

.sns-link {
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin: 0 0 56px 16px;
}

.sns-link a {
  font-size: 18px;
  color: var(--bg-color);
}

/* Dark mode switch */
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

.switch {
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
  .modal {
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
  }

  .header-menu-item:first-child {
    display: none;
  }
  
  .sns-link {
    margin: 0;
    margin-left: 48px;
  }
  
  .header a {
    color: var(--main-color);
  }

  .switch {
    display: none;
    margin: 0;
  }
}
</style>