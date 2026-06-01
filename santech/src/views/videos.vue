<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- Hero Section -->
    <section class="bg-green-700 text-white py-16">
      <div class="container mx-auto text-center px-6">
        <h1 class="text-5xl font-bold mb-4">
          Rwanda Tourism Videos
        </h1>
        <p class="text-xl">
          Watch amazing tourism experiences from Rwanda
        </p>
      </div>
    </section>

    <!-- Videos Grid -->
    <section class="container mx-auto px-6 py-16">
      <div class="grid md:grid-cols-2 gap-10">

        <!-- Video 1 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            class="w-full h-80"
            src="https://www.youtube.com/embed/aqz-KE-bpKQ"
            title="Visit Rwanda"
            allowfullscreen
          ></iframe>

          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-700">
              Visit Rwanda Official
            </h2>
            <p class="text-gray-600 mt-2">
              Discover the beauty of the Land of a Thousand Hills.
            </p>
          </div>
        </div>

        <!-- Video 2 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            class="w-full h-80"
            src="https://www.youtube.com/embed/aqz-KE-bpKQ"
            title="Mountain Gorillas"
            allowfullscreen
          ></iframe>

          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-700">
              Gorilla Trekking
            </h2>
            <p class="text-gray-600 mt-2">
              Experience Rwanda's famous mountain gorillas.
            </p>
          </div>
        </div>

        <!-- Video 3 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            class="w-full h-80"
            src="https://www.youtube.com/embed/aqz-KE-bpKQ"
            title="Akagera National Park"
            allowfullscreen
          ></iframe>

          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-700">
              Akagera National Park
            </h2>
            <p class="text-gray-600 mt-2">
              Wildlife, safari and the Big Five experience.
            </p>
          </div>
        </div>

        <!-- Video 4 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            class="w-full h-80"
            src="https://www.youtube.com/embed/aqz-KE-bpKQ"
            title="Lake Kivu"
            allowfullscreen
          ></iframe>

          <div class="p-6">
            <h2 class="text-2xl font-bold text-green-700">
              Lake Kivu Adventures
            </h2>
            <p class="text-gray-600 mt-2">
              Explore one of Africa's most beautiful lakes.
            </p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
</script>