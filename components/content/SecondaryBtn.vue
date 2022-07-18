<script>
export default {
  name: 'SecondaryBtn',
  props: {
    textContent: {
      type: String,
      default: null,
    },
  },
}
</script>

<template>
  <a href="#" class="btn btn-secondary">{{ textContent }}</a>
</template>

<style></style>
