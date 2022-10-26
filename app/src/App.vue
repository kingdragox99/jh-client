<template>
  <HeaderComponents />
  <main class="font-didact">
    <router-view />
  </main>
  <FooterComponent />
</template>

<script>
// @ is an alias to /src
import HeaderComponents from "@/components/HeaderComponents.vue";
import FooterComponent from "./components/FooterComponents.vue";

export default {
  name: "App",
  components: {
    HeaderComponents,
    FooterComponent,
  },
};
</script>

<style></style>
