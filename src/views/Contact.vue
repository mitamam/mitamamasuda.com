<template>
    <div class="contact">
      <div class="container">
        <h2>CONTACT</h2>
        <div class="contact-img"><img src="../assets/contact_img.jpg"></div>
        <h5>My Links</h5>
        <ul>
          <li><span></span><a href="https://twitter.com/AuClairDeLune3" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><span></span><a href="linkedin.com/in/mitama-masuda-3a5453238" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><span></span><a href="https://github.com/mitamam/" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
        <h5>Email</h5>
        <a href="mailto:mitama.md@gmail.com">mitama.md@gmail.com</a>
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
  padding: 3rem 0;
}

.contact .contact-img {
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 3rem;
}

.contact .contact-img > img {
  border-top-left-radius: 50% calc(100% / 3);
  border-top-right-radius: 50% calc(100% / 3);
}

.contact h5 {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
}

.contact ul {
  margin-bottom: 2rem;
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
  font-size: 0.9rem;
  font-family: 'Lato', sans-serif;
  margin-left: 1rem;
}

</style>
  