<script setup lang="ts">
let data = ref(null);
async function handleClick() {
  try {
    data.value = await useNuxtApp().$fetcher('/api/flake');
  } catch (e) {
    showErrorToast(e)
  }
}
</script>
<template>
  <button class="button" @click="handleClick">Click</button>
  <pre>{{ data }}</pre>
</template>