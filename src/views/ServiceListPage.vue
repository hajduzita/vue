<template>
  <div class="flex justify-center my-16">
    <LoadingComponent v-if="serviceStore.state === 'loading'" />
    <ServiceListTableComponent
      v-else-if="serviceStore.state === 'result'"
      :services="services"
    />
    <ErrorComponent v-else-if="serviceStore.state === 'error'" />
  </div>
</template>

<script setup lang="ts">
import { useServiceStatusStore } from "../stores/ServiceStore";
import { computed, onMounted } from "vue";

import LoadingComponent from "../components/LoadingComponent.vue";
import ErrorComponent from "../components/ErrorComponent.vue";
import ServiceListTableComponent from "../components/ServiceListTableComponent.vue";

const serviceStore = useServiceStatusStore();

const services = computed(() => {
  return serviceStore.features;
});

onMounted(() => {
  serviceStore.fetchServiceStatusList();
});
</script>
