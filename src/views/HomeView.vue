<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
const store = useStore();
const router = useRouter();

const email = ref("");
const emailError = ref("");

function handleSubmit() {
  emailError.value = "";

  if (!email.value) {
    return (emailError.value = "Email is required!");
  }
  store.commit("users/setEmail", { email: email.value });
  router.push("/wheel");
}
</script>

<template>
  <Navbar />
  <main class="h-screen flex justify-center space-x-2 items-center">
    <div class="flex flex-col space-y-2">
      <div class="flex-col flex space-y-3">
        <input
          type="email"
          placeholder="Enter email here"
          class="input input-bordered input-primary max-w-xsinput w-full max-w-xs"
          v-model="email"
        />
        <button class="btn" @click="handleSubmit()">Continue</button>
      </div>
      <span class="flex justify-center text-error">{{ emailError }}</span>
    </div>
  </main>
</template>
