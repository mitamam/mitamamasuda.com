<template>
  <div class="header">
    <div class="container">
      <div class="logo"><router-link to="/"><img src="../assets/logo.svg" alt="MITAMA MASUDA" class="logo-img"></router-link></div>
      <div class="hamburger">
        <input type="checkbox" class="hamburger-btn" v-model="open"/>
        <span></span>
        <span></span>
        <span></span>
        <nav>
          <div class="logo-light"><img src="../assets/logo_light.svg" alt="MITAMA MASUDA"></div>
          <ul  class="header-menu" :class="{'on-home-page': $route.path === '/'}">
            <li class="header-menu-item"><router-link to="/" @click="toggleMenu">Home</router-link></li>
            <li class="header-menu-item"><router-link to="/about" @click="toggleMenu">About</router-link></li>
            <li class="header-menu-item"><router-link to="/work" @click="toggleMenu">Work</router-link></li>
            <li class="header-menu-item"><router-link to="/contact" @click="toggleMenu">Contact</router-link></li>
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
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GlobalHeader',
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleMenu() {
      if (this.open == true)
        this.open = false
      else
        this.open = true
    }
  }
}
</script>

<style>
.header {
  width: 100%;
  z-index: 3;
  overflow-x: hidden;
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--main-color);
  padding: 24px 0;
  margin-top: 24px;
}

.header nav {
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

.hamburger {
  position: absolute;
  top: 72px;
  right: 32px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

.hamburger input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

.hamburger span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: var(--main-color);
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

.hamburger span:first-child
{
  transform-origin: 0% 0%;
}

.hamburger span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
.hamburger input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: var(--bg-color);
}

/*
 * But let's hide the middle one.
 */
.hamburger input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
.hamburger input:checked ~ span:nth-last-child(2)
{
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
}

.hamburger input:checked ~ nav
{
  transform: none;
  opacity: 1;
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
  .hamburger {
    position: static;
  }

  .hamburger input {
    display: none;
  }

  .hamburger span {
    display: none;
  }

  .header nav {
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

  /* header menu on Home page */
  .on-home-page {
    display: none;
  }
}
</style>
