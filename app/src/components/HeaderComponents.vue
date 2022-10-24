<template>
  <header class="text-gray-600 body-font">
    <router-link class="mr-8 hover:text-gray-900 text-2xl" to="/"
      ><h1 class="font-merienda text-center pt-10 text-6xl">
        Joyce Huberty
      </h1></router-link
    >
    <div
      class="font-didact container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center"
    >
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <router-link class="mr-8 hover:text-gray-900 text-2xl" to="/"
          >Home</router-link
        >
        <router-link class="mr-8 hover:text-gray-900 text-2xl" to="/engraving"
          >Engraving</router-link
        >
        <router-link class="mr-8 hover:text-gray-900 text-2xl" to="/drawing"
          >Drawing</router-link
        >
        <router-link class="mr-8 hover:text-gray-900 text-2xl" to="/photography"
          >Photography</router-link
        >
        <router-link class="mr-8 hover:text-gray-900 text-2xl" to="/painting"
          >Painting</router-link
        >
        <router-link class="mr-8 hover:text-gray-900 text-2xl" to="/about"
          >About</router-link
        >
        <router-link class="mr-8 hover:text-gray-900 text-2xl" to="/contacte"
          >Contact</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponents",
};
</script>
