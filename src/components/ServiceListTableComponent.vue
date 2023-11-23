<template>
  <table class="shadow-2xl" data-id="result">
    <thead>
      <tr class="bg-green-600 divide-x divide-cold-gray text-white uppercase">
        <th scope="col" class="px-6 py-3">Microservice</th>
        <th scope="col" class="px-6 py-3">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-cold-gray">
      <tr
        v-for="service in services"
        :key="service.name"
        class="bg-white divide-x divide-cold-gray"
      >
        <td class="italic px-6 py-3 text-left">
          {{ serviceNameFormatter(service.name) }}
        </td>
        <td class="px-6 py-3 text-center">
          {{ getServiceStatusIcon(service.state) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { FetchServiceStatusResponse } from "../interfaces/fetch-service-status-response.interface";

defineProps<{ services: FetchServiceStatusResponse }>();
const getServiceStatusIcon = (status: string): string => {
  return status === "ENABLED" ? "✅" : "❌";
};

const serviceNameFormatter = (serviceName: string): string => {
  const getFirstLetter = serviceName.charAt(0);
  const removeLowDashes = serviceName.slice(1).replace(/_/g, " ");
  return getFirstLetter + removeLowDashes.toLowerCase();
};
</script>
