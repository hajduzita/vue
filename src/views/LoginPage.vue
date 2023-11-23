<template>
  <div class="flex justify-center">
    <form
      class="bg-white flex flex-col p-2 w-96 shadow-2xl"
      @submit.prevent="onSubmitLoginForm"
    >
      <label for="email" class="p-2 text-left">Email address</label>
      <input type="text" class="border-2 p-4" v-model="loginForm.email" />
      <p v-if="!loginForm.email" class="mt-1 text-right text-red-600">
        This field is required
      </p>

      <label for="password" class="p-2 text-left">Password</label>
      <input
        type="password"
        class="border-2 p-4"
        v-model="loginForm.password"
      />
      <p v-if="!loginForm.password" class="mt-1 text-right text-red-600">
        This field is required
      </p>

      <button
        type="submit"
        class="bg-green-500 mt-4 p-4 color-white font-medium uppercase"
      >
        Log in
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { required, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { AuthenticationService } from "../services/authentication";

const loginForm = ref({
  email: "",
  password: "",
});

const rules = computed(() => ({
  email: { required, email },
  password: { required },
}));

const $v = useVuelidate(rules, loginForm);
const authenticationService = new AuthenticationService();

const onSubmitLoginForm = () => {
  $v.value.$touch();
  $v.value.$invalid ? alert("Invalid form!") : authenticationService.login();
};
</script>
