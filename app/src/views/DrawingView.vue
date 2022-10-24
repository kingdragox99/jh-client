<script setup>
const base64Arraybuffer = require("base64-arraybuffer");
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex w-full mb-10 flex-wrap p-10">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4"
        >
          Drawing
        </h1>
        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit at
          deserunt porro consequuntur distinctio! Animi fugiat quisquam quas,
          fugit voluptate provident optio maxime nesciunt sunt nisi dolor
          numquam recusandae necessitatibus!
        </p>
      </div>
      <div class="flex flex-wrap md:-m-2 -m-1">
        <div v-for="img in data" :key="img._id" class="md:p-2 p-1">
          <div v-for="img in data" :key="img._id">
            <img
              class="w-[400px] object-cover h-[400px] object-center block"
              :src="
                'data:image/image/jpg;base64,' +
                base64Arraybuffer.encode(img.img.data.data)
              "
              alt="gallery"
            />
            <h2
              class="text-2xl font-medium text-gray-900 mt-6 mb-3 text-center"
            >
              {{ img.name }}
            </h2>
            <p class="text-center">
              {{ img.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("http://admin-jh.dev-abc.xyz/api/drawing");
      this.data = await response.json();
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
