<script lang="ts" setup>
/**
 *
 * Component Description:Blog hero
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

interface PropsInterface {
  imageUrl: ''
}
const props = defineProps<PropsInterface>()
const { imageUrl } = toRefs(props)
</script>

<template>
  <div grid text-center>
    <h1 class="max-w-lg mx-auto">
      <Markdown :use="$slots.title" unwrap="p" />
    </h1>
    <div class="blog-description-small py-4 max-w-lg mx-auto">
      <Markdown :use="$slots.descriptionSmall" unwrap="p" />
    </div>
    <div class="blog-author grid  grid-cols-2 my-4">
      <div class="profile-image bg-blue-900 w-16 h-16  rounded-full ml-auto" />
      <div class="profile-details text-left pl-4 pt-2">
        <div class="username">
          <Markdown :use="$slots.username" unwrap="p" />
        </div>
        <div class="date">
          <Markdown :use="$slots.date" unwrap="p" />
        </div>
      </div>
    </div>
    <div class="blog-image w-full h-[500px]">
      <img
        class="object-cover w-full shadow-sm h-full rounded"
        :src="imageUrl"
      >
    </div>
    <div class="blog-description text-left py-4">
      <Markdown :use="$slots.description" unwrap="p" />
    </div>
    <div class="line w-full h-[.5px] bg-gray-500 rounded" />
  </div>
</template>

<style scoped>

</style>
