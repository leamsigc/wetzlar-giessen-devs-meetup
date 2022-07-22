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

const menuState = ref<boolean>(false)

const HandleToggleMenu = () => {
  menuState.value = !menuState.value
}
</script>

<template>
  <header class="header">
    <div grid>
      <div grid grid-cols-3 gap-x-4>
        <NuxtLink class="nav--link" to="/" col-span-2 text-left>
          <img src="/logo/DuckLogo.svg" preload alt="Wetzlar developers logo" width="200px" height="100px" loading="eager" decoding="async" class="w-[150px] h-16">
        </NuxtLink>
        <div grid content-center text-white @click="HandleToggleMenu">
          <button class=" d-block w-10 h-10 ml-auto transition-all duration-700 " :class="[`${menuState ? ' i-eva:close-outline' : 'i-bx-menu-alt-right'}`]" />
        </div>
      </div>
      <nav :class="[`${menuState ? '-translate-y-0 top-24 opacity-100' : '-translate-y-full opacity-0 '}`]" class="absolute inset-0  overflow-y-scroll z-10 w-screen min-h-screen transform transition-transform bg-[var(--main-color)] p-6 text-white">
        <ul class="grid gap-5 text-left">
          <li class="nav--li">
            <NuxtLink class="uppercase fw-bold block hover:text-green-400 transition-all" to="/">
              Home
            </NuxtLink>
          </li>
          <li class="nav--li">
            <NuxtLink class="uppercase fw-bold block  hover:text-green-400 transition-all" to="/about">
              About
            </NuxtLink>
          </li>
          <li v-for="link in nav" :key="link._path" class="nav--li">
            <NuxtLink class="uppercase fw-bold block hover:text-green-400 transition-all" :to="`${link._path}`">
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
// .header .container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   @media (max-width: 800px) {
//     flex-direction: column;
//   }
// }
// .logo-container {
//   text-align: left;
//   flex: 3;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .logo-container img {
//   display: block;
//   width:200px;

//   max-height: 100px;
// }
// .nav {
//   flex: 4;
// }
// .nav .nav--ul {
//   display: flex;
//   list-style: none;
//   justify-content: space-around;
//   align-items: center;
// }
// .nav .nav--li {
//   display: inline-block;
// }
// .nav .nav--link {
//   color: var(--secondary-color);
//   text-decoration: none;
//   padding: 1rem;
// }
</style>
