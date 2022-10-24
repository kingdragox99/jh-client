<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            class="object-cover object-center h-full w-full"
            src="https://iili.io/tr1oKl.md.jpg"
          />
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <img
              class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
              src="https://iili.io/t6bk3F.jpg"
              alt=""
            />
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                Joyce Huberty
              </h2>
              <div class="w-12 h-1 bg-pink-500 rounded mt-2 mb-4"></div>
              <p class="text-base">
                Je suis une jeune artiste belge. J'ai toujours été passionnée
                par l'art. Ma pratique artistique tourne autour du souvenir et
                de la mémoire.
              </p>
            </div>
          </div>
          <div
            class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
          >
            <p class="leading-relaxed text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              veritatis molestias. Culpa modi, itaque excepturi illo rem facere
              recusandae dolores? Voluptates illo omnis exercitationem dicta
              impedit quidem aliquam mollitia porro sunt minima dolor, veniam
              temporibus amet iure accusantium, quod tenetur deleniti optio
              saepe ea magnam eligendi reiciendis suscipit. Vel, sapiente?
            </p>
            <router-link
              class="text-pink-500 hover:text-pink-700 inline-flex items-center"
              to="/about"
              >About<svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path></svg
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
