<template>
  <div class="flex justify-center my-16">
    <table class="shadow-2xl" data-id="result">
      <thead>
      <tr class="bg-green-600 divide-x divide-cold-gray text-white uppercase">
        <th scope="col" class="px-6 py-3">Microservice</th>
        <th scope="col" class="px-6 py-3">Status</th>
      </tr>
      </thead>
      <tbody class="divide-y divide-cold-gray">
      <tr
          v-for="service in serviceStatus.services" :key="service.updatedAt"
          class="bg-white divide-x divide-cold-gray">
        <td class="italic px-6 py-3 text-left">{{ service.updatedAt }}</td>
        <td class="px-6 py-3 text-center">
          {{ getServiceStatusIcon(service.healthStatus) }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">

import { API_URL } from '../constants/api';
import axios from 'axios';
import { SERVICE_STATUS } from '../services/mock-service-status';

const serviceStatus = SERVICE_STATUS;
const mappedServiceStatus = () => {
  const data = []
  for (const serviceKey in serviceStatus.services) {
    console.log(serviceKey)
  }
}

const getServiceStatusIcon = (status: string): string => {
  return status ==='UP' ? '✅' : '❌';
}

const fetchStatus = () => {
  axios.get(API_URL).then((response) => {
    console.log(response.data)
  }).catch((error) => {
    console.log('ERROR', error)
  })
}

fetchStatus()


</script>