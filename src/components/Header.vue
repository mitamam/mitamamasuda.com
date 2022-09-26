<template>
  <div class="header">
    <div class="container">
      <div class="logo"><router-link to="/"><img src="../assets/logo.svg" alt="MITAMA MASUDA" class="logo-img"></router-link></div>
      <div class="hamburger">
        <input type="checkbox" class="hamburger-btn" v-model="open"/>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Menu :open=open @pageTransition="toggleMenu"></Menu>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
    name: "GlobalHeader",
    data() {
      return {
        open: false
      }
    },
    components: {
      Menu
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
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--main-color);
  padding: 24px 0;
  margin-top: 24px;
}

body.dark-mode .header .logo img {
  content: url(../assets/logo_light.svg);
}

body.dark-mode .header .logo a {
  z-index: 5;
}

.hamburger {
  position: absolute;
  top: 72px;
  right: 32px;
  z-index: 21;
  -webkit-user-select: none;
  user-select: none;
  transform: translateZ(0);
}

.hamburger > input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 23; /* and place it over the hamburger */
  
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
  
  z-index: 22;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

.hamburger span:nth-of-type(1)
{
  transform-origin: 0% 0%;
}

.hamburger span:nth-of-type(3)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
.hamburger > input:checked ~ span:nth-of-type(1)
{
  opacity: 1;
  transform: rotate(45deg) translate(-3px, -2px);
  background: #F0E8E0;
}

/*
 * But let's hide the middle one.
 */
.hamburger > input:checked ~ span:nth-of-type(2)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
.hamburger > input:checked ~ span:nth-of-type(3)
{
  opacity: 1;
  background: #F0E8E0;
  transform: rotate(-45deg) translate(-1px, 0px);
}

@media screen and (min-width: 600px) {
  .hamburger {
    position: static;
  }

  .hamburger > input {
    display: none;
  }

  .hamburger span {
    display: none;
  }

  /* header menu on Home page */
  .on-home-page {
    display: none;
  }
}
</style>
