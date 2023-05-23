<template>
  <div class="work">
    <div class="container">
      <div class="work-heading">
        <span></span>
        <h2>WORK</h2>
      </div>
      <ul>
        <li>
          <h4>My Personal Website</h4>
          <p>Built by myself using Vue.js, HTML, CSS, and Firebase.</p>
          <div class="github-link">
            <a href="https://github.com/mitamam/mitamamasuda.com/" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="fa-github" icon="fa-brands fa-github" /></a>
          </div>
        </li>
        <li>
          <h4>Product demand visualization in Mercari</h4>
          <p>This feature visualizes the demand for products bought and sold on the flea market app Mercari. We developed this feature in Hackweek of Build@mercari 2022.</p>
          <div class="github-link">
            <a href="https://github.com/mitamam/Team3/" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="fa-github" icon="fa-brands fa-github" /></a>
          </div>
        </li>
        <li>
          <h4>My Memo App</h4>
          <p>CRUD memo application created for Django practice.</p>
          <div class="github-link">
            <a href="https://github.com/mitamam/my_memo_app/" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="fa-github" icon="fa-brands fa-github" /></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
}
</script>

<style>
.work {
  width: 100%;
  flex: 1;
}

.work .container {
  color: var(--main-color);
  padding: 48px 0;
}

.work-heading {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
}

.work span {
  width: 3rem;
  height: 1px;
  background-color: var(--main-color);
}

.work h2 {
  margin-bottom: 0;
  margin-left: 1.5rem;
}

.work ul {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  row-gap: 32px;
}

.work li {
  width: 100%;
  padding: 16px;
  border: 1px solid var(--main-color);
  position: relative;
}

.work li > h4 {
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 12px;
}

.work li > p {
  font-size: 12px;
  max-width: calc(100% - 3rem);
}

.work li:last-child {
  margin-bottom: 0;
}


.work .github-link {
  position: absolute;
  bottom: 24px;
  right: 24px;
  text-align: right;
  line-height: 1;
  font-size: 24px;
}

@media only screen and (min-width: 600px) {
  .work .container {
    padding: 64px 0;
  }

  .work .work-heading {
    margin-bottom: 48px;
  }

  .work li {
    padding: 24px;
    max-width: 560px;
    margin: 0 auto;
  }

  .work li > h4 {
    font-size: 20px;
  }

  .work li > p {
  font-size: 14px;
  }
}

@media only screen and (min-width: 905px) {
  .work ul {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  .work li {
    margin: 0;
  }
}

</style>