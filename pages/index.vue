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
import Meetup from '~~/components/content/Meetup.vue'
const blogs = await queryContent('blogs').limit(5).find()
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <main>
    <div class="container ">
      <div class="grid grid-cols-4 gap-4">
        <Meetup v-for="blog in blogs" :key="blog._path" :item="{ title: blog.title, imgUrl: 'docker.png' }" class=" rounded p-unset ">
          <template #description>
            <p class="text-gray-800 text-base mb-4 ">
              {{ blog.description }}
            </p>
            <Nuxt-link :to="blog._path" class="bg-gray-500 px-3 py-2">
              Read More
            </Nuxt-link>
          </template>
        </Meetup>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
