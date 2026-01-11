<script>
import DefaultLayout from "../../layouts/DefaultLayout.vue";
import RegistrationForm from "./RegistrationForm.vue";

export default {
  name: "RegistrationScreen",
  components: {RegistrationForm, DefaultLayout}
}
</script>

<template>
<DefaultLayout>
  <RegistrationForm></RegistrationForm>
</DefaultLayout>
</template>

<style scoped>

</style>