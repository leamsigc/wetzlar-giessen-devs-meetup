<script setup>
useSchemaOrg([
  // https://vue-schema-org.netlify.app/guide/guides/identity.html
  // @todo select appropriate identity
  // https://vue-schema-org.netlify.app/schema/website.html
  defineWebSite({
    name: 'Giessen and Wetzlar Developers meetup',
  }),
  // https://vue-schema-org.netlify.app/schema/webpage.html
  defineWebPagePartial(),
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --main-color: #001353;
  --secondary-color: #f7f7f7;
  --textbg-color: #e9ab00;
  --main-font-family: "Montserrat";
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  overflow-x: hidden;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  @media (max-width: 800px) {
    font-size: 15px;
  }
}
#app {
  font-family: var(--main-font-family), "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: var(--secondary-color);
}
/* Atomic Styles  */
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.title {
  font-size: 2rem;
  font-weight: 900;
}
.subtitle {
  padding: 0.5rem;
}
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;

  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.5rem;
  font-weight: 700;
  border: 1px solid transparent;

  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;
}
.btn:hover,
.btn:active {
  transform: translate3d(0px, -0.2rem, 0px) scale(1.05);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.btn-secondary {
  border-color: var(--secondary-color);
  color: var(--secondary-color);

  font-size: 0.8rem;
  font-weight: 400;
}
.btn-secondary:hover,
.btn-secondary:active {
  border-color: var(--secondary-color);
  color: var(--main-color);
  background: var(--secondary-color);
}
.btn-main {
  background: var(--secondary-color);
  color: var(--main-color);
  border: 1px solid var(--secondary-color);
}
.btn-main:hover,
.btn-main:active {
  background: var(--main-color);
  color: var(--secondary-color);
}
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  --main-color: #001353;
  --secondary-color: #f7f7f7;
  --dark: #222;
  --textbg-color: #e9ab00;
  background: var(--main-color);
  color: var(--dark);

}
</style>
