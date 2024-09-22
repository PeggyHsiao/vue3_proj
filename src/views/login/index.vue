<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('');
const password = ref('');
let show = ref(false);
let dialog = ref(false);

function login(): void {
  if (username.value === 'admin' && password.value === '1234') {
    console.log(router);

    router.push({ name: 'tree' });
  } else {
    dialog.value = true;
  }
}
</script>

<template>
  <v-container>
    <v-text-field v-model="username" label="User name" variant="outlined" />
    <v-text-field
      v-model="password"
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      label="Password"
      variant="outlined"
      name="input-10-1"
      @click:append-inner="show = !show"
    />
    <v-btn color="blue-darken-3" size="x-large" variant="flat" block @click="login">Sign in</v-btn>

    <v-dialog v-model="dialog" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-close-circle "
        text="Incorrect username or password"
        title="Login Failed"
      >
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="dialog = false" />
        </template>
      </v-card>
    </v-dialog>
  </v-container>
</template>
