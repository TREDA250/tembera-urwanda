<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
    <img src="../../assets/image.png " alt="logo" class=" rounded-full w-10 h-10">

<ul class="flex gap-8 text-sm font-medium ">
    <li><a href="/" class="hover:text-yellow-300 cursor-">Home</a></li>
    <li><a href="/About" class="hover:text-yellow-300 cursor-">About Us</a></li>
    <li><a href="/Services" class="hover:text-yellow-300 cursor-">Services</a></li>
    <li class="group relative">
        <a href="#" class="hover:text-yellow-300 cursor-">Gallery<span> ▼</span></a>
        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 z-50 pt-2" style="top: 100%">
           <li ><a href="/Photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Photos</a></li>
           <li ><a href="/Videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</a></li>
        </ul> 
    </li>
    <li class="group relative">
        <a href="#" class="hover:text-yellow-300 cursor-">Destinations<span> ▼</span></a>
            <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 z-50 pt-2" style="top: 100%">
           <li ><a href="#" class="block px-4 py-2  text-green-900 hover:bg-green-200">Northern Province</a></li>
           <li ><a href="#" class="block px-4 py-2  text-green-900 hover:bg-green-200">Southern Province</a></li>
           <li ><a href="#" class="block px-4 py-2  text-green-900 hover:bg-green-200">Kigali City</a></li>
           <li ><a href="#" class="block px-4 py-2  text-green-900 hover:bg-green-200">Eastern</a></li>
           <li ><a href="#" class="block px-4 py-2  text-green-900 hover:bg-green-200">Western</a></li>
        </ul>
    </li>
    <li><a href="/Contact" class="hover:text-yellow-300 cursor-">Contact</a></li>
</ul>
  </nav>
</template>