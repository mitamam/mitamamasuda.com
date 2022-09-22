<template>
    <div class="contact">
      <div class="container">
        <h2>CONTACT</h2>
        <div class="contact-content">
          <div class="contact-img"><img src="../assets/contact_img.jpg"></div>
          <div class="contact-text">
            <h5>My Links</h5>
            <ul>
              <li><span></span><a href="https://twitter.com/AuClairDeLune3" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><span></span><a href="https://jp.linkedin.com/in/mitama-masuda-3a5453238" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><span></span><a href="https://github.com/mitamam/" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
            <h5>Email</h5>
            <a href="mailto:mitama.md@gmail.com">mitama.md@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'Contact',
}
</script>

<style>
.contact {
  width: 100%;
  flex: 1;
}

.contact .container {
  color: var(--main-color);
  padding: 48px 0;
}

.contact .contact-content {
  display: flex;
  flex-direction: column;
  row-gap: 48px;
}

.contact .contact-img {
  max-width: 320px;
  margin: 0 auto;
}

.contact .contact-img > img {
  border-top-left-radius: 50% calc(100% / 3);
  border-top-right-radius: 50% calc(100% / 3);
}

.contact h5 {
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 16px;
}

.contact ul {
  margin-bottom: 32px;
}

.contact li {
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
}

.contact span {
  width: 0.6rem;
  height: 1px;
  background-color: var(--main-color);
}

.contact a {
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  margin-left: 1rem;
}

@media only screen and (min-width: 600px) {
  .contact .container {
    padding: 64px 0;
  }

  .contact .contact-content {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    row-gap: 0;
    column-gap: 32px;
  }

  .contact .contact-img {
    margin: 0;
    max-width: 360px;
  }

  .contact a {
    font-size: 16px;
  }
}

@media only screen and (min-width: 905px) {
  .contact .contact-img {
    margin-right: 64px;
  }
}

@media only screen and (min-width: 1240px) {
  .contact .contact-img {
    max-width: 400px;
    margin-right: 90px;
  }
}
</style>
  