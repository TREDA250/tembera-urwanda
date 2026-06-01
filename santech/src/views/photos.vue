<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- Hero -->
    <section class="bg-green-700 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-6xl font-bold mb-4">
          Rwanda Photos
        </h1>
        <p class="text-xl">
          Explore the beauty of Rwanda through stunning photography.
        </p>
      </div>
    </section>

    <!-- Photos Gallery -->
    <section class="container mx-auto px-6 py-16">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div class="overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div class="overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div class="overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div class="overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div class="overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div class="overflow-hidden rounded-2xl shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            class="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

      </div>

    </section>

  </div>
</template>

<script setup>
</script>