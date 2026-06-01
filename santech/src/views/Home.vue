<template>
  <div class="bg-gray-100">

    <!-- Hero Section -->
    <section
      class="h-screen bg-cover bg-center flex items-center justify-center"
      style="background-image: url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop');"
    >
      <div class="bg-green bg-opacity-60 p-10 rounded-xl text-center text-white">
        <h1 class="text-5xl font-bold mb-4">Visit Rwanda</h1>
        <p class="text-xl mb-6">
          Discover the beauty of Rwanda with Tembera Urwanda Project
        </p>
        
      </div>
    </section>

    <!-- Attractions -->
    <section class="py-16 px-6">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-10">
        Top Tourist Attractions
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Card 1 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop"
            class="w-full h-60 object-cover"
          />
          <div class="p-5">
            <h3 class="text-2xl font-bold text-green-700 mb-3">
              Volcanoes National Park
            </h3>
            <p class="text-gray-600">
              Home of mountain gorillas and beautiful volcano mountains in Rwanda.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
            class="w-full h-60 object-cover"
          />
          <div class="p-5">
            <h3 class="text-2xl font-bold text-green-700 mb-3">
              Lake Kivu
            </h3>
            <p class="text-gray-600">
              Enjoy relaxing beaches, boat rides and amazing sunset views.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop"
            class="w-full h-60 object-cover"
          />
          <div class="p-5">
            <h3 class="text-2xl font-bold text-green-700 mb-3">
              Akagera National Park
            </h3>
            <p class="text-gray-600">
              Experience wildlife safari with lions, elephants and giraffes.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Welcome -->
    <section class="bg-green-700 text-white py-16 text-center px-6">
      <h2 class="text-4xl font-bold mb-4">Welcome to Rwanda</h2>
      <p class="max-w-3xl mx-auto text-lg">
        Rwanda is known as the land of a thousand hills with amazing culture,
        wildlife, clean cities and friendly people.
      </p>
    </section>

  </div>
</template>

<script setup>
</script>