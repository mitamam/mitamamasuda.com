<template>
  <div class="header">
    <div class="container">
      <div class="logo"><router-link to="/"><img src="../assets/logo.svg" alt="MITAMA MASUDA" class="logo-img"></router-link></div>
      <!-- Hamburger menu -->
      <div class="hamburger">
        <input type="checkbox" class="hamburger-switch" v-model="checked"/>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <nav class="hamburger-menu">
          <div class="container">
            <div class="logo-light"><img src="../assets/logo_light.svg" alt="MITAMA MASUDA" class="logo-img"></div>
            <ul>
              <li><router-link to="/" @click="checked=false">Home</router-link></li>
              <li><router-link to="/about" @click="checked=false">About</router-link></li>
              <li><router-link to="/work" @click="checked=false">Work</router-link></li>
              <li><router-link to="/contact" @click="checked=false">Contact</router-link></li>
            </ul>
            <div class="switch">
              <div class="switch-icon sun"><img src="../assets/sun.svg" alt="light"></div>
              <input type="checkbox" id="dark-mode-toggle">
              <label for="dark-mode-toggle"></label>
              <div class="switch-icon moon"><img src="../assets/moon.svg" alt="dark"></div>
            </div>
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
      checked: false
    }
  }
}
</script>

<style>
.header {
  padding-top: 48px;
}

.header > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--main-color);
}

.dark-mode .logo {
  content: url(../assets/logo_light.svg);
}

/* Hamburger menu */
.hamburger {
  display: block;
  position: absolute;
  top: 72px;
  right: 32px;
  z-index: 1;
  user-select: none;
}

.hamburger .hamburger-switch {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

.hamburger .hamburger-line {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background-color: var(--main-color);
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

.hamburger .hamburger-line:first-child {
  transform-origin: 0% 0%;
}

.hamburger .hamburger-line:nth-last-child(2) {
  transform-origin: 0% 100%;
}

.hamburger .hamburger-switch:checked ~ .hamburger-line {
  opacity: 1;
  background-color: #F0E8E0;
  transform: rotate(45deg) translate(-2px, -1px);
}

.hamburger .hamburger-switch:checked ~ .hamburger-line:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.hamburger .hamburger-switch:checked ~ .hamburger-line:nth-last-child(2) {
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
}

.hamburger-menu {
  width: 100vw;
  height: 100vh;
  position: absolute;
  margin: -99px 0 0 0;
  top: 0;
  right: -32px;
  
  padding-top: 48px;
  background-color: #40362D;
  -webkit-font-smoothing: antialiased;

  transform-origin: 0% 0%;
  /* transform: translate(100%, 0); */
  transform: translateX(100%);

  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

.hamburger-menu .logo-light {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #F0E8E0;
}

.hamburger-menu ul {
  margin: 2rem 0;
}

.hamburger-menu li {
  padding: 10px 0;
  font-size: 1.5rem;
}

.hamburger-menu li a {
  color: #F0E8E0;
}

.hamburger .hamburger-switch:checked ~ nav {
  transform: none;
  opacity: 1;
}
/* /Hamburger menu */

/* Dark mode switch */
#dark-mode-toggle {
  display: none;
}

#dark-mode-toggle + label {
  display: block;
  width: 4rem;
  height: 2rem;
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
/* /Dark mode switch */

.switch {
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
}

.switch-icon {
  width: 1rem;
  height: 1rem;
  filter: invert(98%) sepia(4%) saturate(4857%) 
    hue-rotate(296deg) brightness(116%) contrast(86%);
}

.moon {
  width: 1.1rem;
  height: 1.1rem;
}

.switch-icon img {
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 600px) {
  .hamburger {
    right: 64px;
  }

  .hamburger-menu {
    right: -64px;
  }
}

@media only screen and (min-width: 905px) {
  .hamburger {
    right: calc((100vw - 840px) / 2);
  }
  .hamburger-menu {
    right: calc(0px - (100vw - 840px) / 2);
  }
}

@media only screen and (min-width: 1240px) {
  .hamburger {
    right: calc((100vw - 1040px) / 2);
  }
  .hamburger-menu {
    right: calc(0px - (100vw - 1040px) / 2);
  }
}

</style>