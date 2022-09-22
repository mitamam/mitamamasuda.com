<template>
  <div class="header">
    <div class="container">
      <div class="logo"><router-link to="/"><img src="../assets/logo.svg" alt="MITAMA MASUDA" class="logo-img"></router-link></div>
      <div class="hamburger">
        <input type="checkbox" class="hamburger-btn" v-model="open"/>
        <span></span>
        <span></span>
        <span></span>
        <Modal :open=open @pageTransition="toggleMenu"></Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
    name: "GlobalHeader",
    data() {
      return {
        open: false
      }
    },
    components: {
      Modal
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

body.dark-mode .header .logo {
  content: url(../assets/logo_light.svg);
}

.hamburger {
  position: absolute;
  top: 72px;
  right: 32px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
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
.hamburger > input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #F0E8E0;
}

/*
 * But let's hide the middle one.
 */
.hamburger > input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
.hamburger > input:checked ~ span:nth-last-child(2)
{
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
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
