<script lang="ts" setup>
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
interface NAV_ITEM {
  title: string
  _path: string
  navLabel: string
  layout: string
}
const nav = ref<NAV_ITEM[]>([])
const { data }: { data: { value: unknown | NAV_ITEM[] } } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
nav.value = data.value as NAV_ITEM[]
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo-container">
        <NuxtLink class="nav--link" to="/">
          <img src="/logo/DuckLogo.svg" preload alt="Wetzlar developers logo" width="200px" height="100px" loading="eager" decoding="async">
        </NuxtLink>
      </div>
      <nav class="nav">
        <ul class="nav--ul">
          <li class="nav--li">
            <NuxtLink class="nav--link" to="/">
              Home
            </NuxtLink>
          </li>
          <li v-for="link in nav" :key="link._path" class="nav--li">
            <NuxtLink class="nav--link" :to="`${link._path}`">
              {{ link.navLabel }}
            </NuxtLink>
          </li>
          <li class="nav--li">
            <a href="#" class="btn btn-main">Join slack</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: var(--main-color);
  padding: 1rem;
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
}
.logo-container {
  text-align: left;
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-container img {
  display: block;
  width:200px;

  max-height: 100px;
}
.nav {
  flex: 4;
}
.nav .nav--ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
}
.nav .nav--li {
  display: inline-block;
}
.nav .nav--link {
  color: var(--secondary-color);
  text-decoration: none;
  padding: 1rem;
}
</style>
