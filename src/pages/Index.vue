<template>
<Layout>
     <div class="w-full md:px-44 mt-16  border-t-2 border-b-0 pt-2 overflow-x-auto">
         <ul class="flex  gap-2">
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900" href="" >Habesha Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Zemen Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Golden Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Abay Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Selam Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Ethio Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Yegna Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Sky Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Gada Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Oda Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Walia Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Noah Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Dreamliner Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Ghion Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">FM Bus</a></li>|
             <li class="hover:text-green-700 border-b-2 border-white hover:border-green-700 px-2 py-0 text-center"><a class="text-gray-900"  href="">Limalimo Bus</a></li>
         </ul>
     </div>
     <div class="w-full md:px-44 p-5">
         <form action="" class="p-6 md:p-16">
                  <div class="md:flex items-center">
                        <div class="w-full md:w-1/3 flex flex-col ">
                            <label class="font-semibbold leading-none text-gray-800">Departure</label>
                            <input placeholder="Select your departure location" type="text" required class="leading-none text-gray-50 p-3 focus:outline-none focus:bordet-blue-700 mt-4 border-2 rounded">
                        </div>
                        <div class="w-full md:w-1/3 flex flex-col md:ml-6 ">
                            <label class="font-semibbold leading-none text-gray-800">Destination</label>
                            <input type="text" placeholder="Select your departure location" class="leading-none text-gray-50 p-3 focus:outline-none focus:bordet-blue-700 mt-4 border-2 rounded">
                        </div>
                         <div class="w-full md:w-1/3 flex flex-col md:ml-6 ">
                            <label class="font-semibbold leading-none text-gray-800">Travel Date</label>
                            <input type="date"  class="leading-none text-gray-600 p-3 focus:outline-none focus:bordet-blue-700 mt-4 border-2 rounded">
                        </div>
                        <button class="w-full md:w-auto font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none md:mx-5 mt-9" >
                            Search
                        </button>
                    </div>
         </form>
     </div>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 py-5">
        
        <div class="md:flex md:justify-center md:space-x-8 md:px-14">
            <!-- box-1 -->
            <div class="mt-0 py-0 mb-10 px-0 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                    <g-image class="w-full rounded" src="https://www.safaribay.net/wp-content/uploads/2020/04/Odaa-Bus.jpg" alt="" />
                    <div class="mt-4 text-green-600 text-center px-4">
                        <h1 class="text-xl font-bold">Zemen Bus</h1>
                        <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                     <a href="/validation">   <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-75">Book Now <svg class="inline ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg></button></a>
                    </div>
                </div>
            </div>
        </div>
          <div class="md:flex md:justify-center md:space-x-8 md:px-14">
            <!-- box-1 -->
            <div class="mt-0 py-0 mb-10 px-0 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                    <g-image class="w-full rounded" src="https://www.safaribay.net/wp-content/uploads/2020/04/Odaa-Bus.jpg" alt="" />
                    <div class="mt-4 text-green-600 text-center px-4">
                        <h1 class="text-xl font-bold">Zemen Bus</h1>
                        <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                     <a href="/validation">   <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-75">Book Now <svg class="inline ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg></button></a>
                    </div>
                </div>
            </div>
        </div>
      <div class="md:flex md:justify-center md:space-x-8 md:px-14">
            <!-- box-1 -->
            <div class="mt-0 py-0 mb-10 px-0 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                    <g-image class="w-full rounded" src="https://www.safaribay.net/wp-content/uploads/2020/04/Odaa-Bus.jpg" alt="" />
                    <div class="mt-4 text-green-600 text-center px-4">
                        <h1 class="text-xl font-bold">Zemen Bus</h1>
                        <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                     <a href="/validation">   <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-75">Book Now <svg class="inline ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg></button></a>
                    </div>
                </div>
            </div>
        </div>
       <div class="md:flex md:justify-center md:space-x-8 md:px-14">
            <!-- box-1 -->
            <div class="mt-0 py-0 mb-10 px-0 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                    <g-image class="w-full rounded" src="https://www.safaribay.net/wp-content/uploads/2020/04/Odaa-Bus.jpg" alt="" />
                    <div class="mt-4 text-green-600 text-center px-4">
                        <h1 class="text-xl font-bold">Zemen Bus</h1>
                        <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                     <a href="/validation">   <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-75">Book Now <svg class="inline ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg></button></a>
                    </div>
                </div>
            </div>
        </div>
         <div class="md:flex md:justify-center md:space-x-8 md:px-14">
            <!-- box-1 -->
            <div class="mt-0 py-0 mb-10 px-0 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                    <g-image class="w-full rounded" src="https://www.safaribay.net/wp-content/uploads/2020/04/Odaa-Bus.jpg" alt="" />
                    <div class="mt-4 text-green-600 text-center px-4">
                        <h1 class="text-xl font-bold">Zemen Bus</h1>
                        <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                     <a href="/validation">   <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-75">Book Now <svg class="inline ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg></button></a>
                    </div>
                </div>
            </div>
        </div>
       <div class="md:flex md:justify-center md:space-x-8 md:px-14">
            <!-- box-1 -->
            <div class="mt-0 py-0 mb-10 px-0  bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                    <g-image class="w-full rounded" src="https://www.safaribay.net/wp-content/uploads/2020/04/Odaa-Bus.jpg" alt="" />
                    <div class="mt-4 text-green-600 text-center px-4">
                        <h1 class="text-xl font-bold">Zemen Bus</h1>
                        <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                     <a href="/validation">   <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-75">Book Now <svg class="inline ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg></button></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="md:flex md:justify-center md:space-x-8 md:px-14">
            <!-- box-1 -->
            <div class="mt-0 py-0 mb-10 px-0 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                    <g-image class="w-full rounded" src="https://www.safaribay.net/wp-content/uploads/2020/04/Odaa-Bus.jpg" alt="" />
                    <div class="mt-4 text-green-600 text-center px-4">
                        <h1 class="text-xl font-bold">Zemen Bus</h1>
                        <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                     <a href="/validation">   <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-75">Book Now <svg class="inline ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg></button></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="md:flex md:justify-center md:space-x-8 md:px-14">
            <!-- box-1 -->
            <div class="mt-0 py-0 mb-10 px-0 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                    <g-image class="w-full rounded" src="https://www.safaribay.net/wp-content/uploads/2020/04/Odaa-Bus.jpg" alt="" />
                    <div class="mt-4 text-green-600 text-center px-4">
                        <h1 class="text-xl font-bold">Zemen Bus</h1>
                        <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                     <a href="/validation">   <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-75">Book Now <svg class="inline ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg></button></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Bus System!'
        }
    }
</script>

<style>
    /* .home-links a {
  margin-right: 1rem;
} */
</style>f="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more
<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
</svg>
</a>
</div>
</Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: 'HOME'
        }
    }
</script>

<style>
    /* .home-links a {
  margin-right: 1rem;
} */
</style>
