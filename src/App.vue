<template>
  <div class="text-center">
    <p class="font-bold my-8 text-3xl text-black">{{ APP_TITLE }}</p>
    <router-view/>
  </div>
</template>


<script setup lang="ts">
import { APP_TITLE } from './constants/app-title';
</script>

<style>
body {
  background-color: rgb(208 216 232 / 1);
}
</style>
