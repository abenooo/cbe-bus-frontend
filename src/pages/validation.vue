<template>
<Layout>
        <div class="w-full px-44 mt-16  border-t-2 border-b-2 pt-2">
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
    <form class="bg-gray-900 shadow-xl  flex flex-wrap justify-center mx-21 md:flex-2  sm:flex-1">
        <div class="w-full md:w-1/3 bg-gray-900 p-12 text-white mt-10">
            <p class="mb-8 text-3xl flex items-center">
                <svg width="32" height="32" viewBox="0 0 512 512" class="inline-block fill-current h-8 w-8 mr-2">
                    <path d="m64 496l0-256 48 0 0-80c0-71 57-128 128-128l16 0c71 0 128 57 128 128l0 80 48 0 0 256z m172-131l-12 83 48 0-12-83c12-5 20-17 20-30 0-18-14-32-32-32-18 0-32 14-32 32 0 13 8 25 20 30z m100-197c0-49-39-88-88-88-49 0-88 39-88 88l0 72 176 0z" />
                </svg>
                Book Now
            </p>
            <div class="mb-4">
                <label class="block text-sm mb-4">Select Departure
                    <!-- <input class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="" placeholder="Email" /> -->
                    <select name="departure" id="" class="w-full py-2 px-3 text-black">
                        <option value="" disabled>Departure</option>
                        <option value="addis abeba">Addis Abeba</option>
                        <option value="Hawassa">Hawassa</option>
                        <option value="Bahir Dar">Bahir Dar</option>
                        <option value="Adama">Adama</option>

                    </select>
                </label>
            </div>
            <div class="mb-3">
                <label class="block text-sm mb-4">Select Destination
                    <input class="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" />
                </label>
            </div>
            <div class="mb-4">
                <label class="block text-sm mb-4">Date of Journey
                    <input class="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Please Select Arrival" />
                </label>
            </div>
            <div class="flex flex-row">
                <a href="/validation"> <button class="mt-8 mb-4 py-2 px-14 rounded-full text-center bg-green-700 text-white tracking-widest hover:bg-green-700 transition duration-75">Book Now <svg class="inline ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg></button></a>
                <a href="/" class="ml-7"> <button class="mt-8 mb-4 py-2 px-14 rounded-full text-center bg-green-700 text-white tracking-widest hover:bg-green-700 transition duration-75">Return Back <svg class="inline" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" /></svg>
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </button></a>
            </div>

        </div>

        <div class="w-full md:w-1/3 p-6 flex flex-col justify-between px-8  mt-10 ">
            <g-image class="w-full h-full rounded-2xl mb-4" src="https://www.safaribay.net/wp-content/uploads/2020/04/Odaa-Bus.jpg" alt=""></g-image>

            <!-- <hr class="block w-full mb-4 border-0 border-t border-gray-300" /> -->

            <div class="flex flex-wrap justify-center">
                <div class="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
                    <button class="w-full text-gray-400 border-2 rounded-lg font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">Go To Offical website</button>
                </div>
                <!-- <div class="w-full sm:w-1/2 sm:pl-2">
                    <button class="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">Login with Google</button>
                </div> -->
            </div>
        </div>
         <div class="w-full md:w-1/3  p-6 text-white mt-10">
            <p class="mb-8 text-3xl flex items-center">
             <h1 class="text-center text-2xl mb-2">About Habesha Bus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel iste impedit illum nihil modi, rerum consectetur veritatis accusamus laudantium dolores asperiores ipsum nostrum repellat dolore minus optio perspiciatis? Similique Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel iste impedit illum nihil modi, rerum consectetur veritatis accusamus laudantium dolores asperiores ipsum nostrum repellat dolore minus optio perspiciatis? Similique..</p>
            <p class="text-sm base mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore architecto molestias necessitatibus, quis similique earum velit alias aliquam accusamus reiciendis cum nulla, ipsam est. Cumque voluptas aperiam eligendi esse odio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore architecto molestias necessitatibus, quis similique earum velit alias aliquam accusamus reiciendis cum nulla, ipsam est. Cumque voluptas aperiam eligendi esse odio.</p>
            <p class="text-sm base mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore architecto molestias necessitatibus, quis similique earum velit alias aliquam accusamus reiciendis cum nulla, ipsam est. Cumque voluptas aperiam eligendi esse odio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore architecto molestias necessitatibus, quis similique earum velit alias aliquam accusamus reiciendis cum nulla, ipsam est. Cumque voluptas aperiam eligendi esse odio.</p>

        </div>
    </form>
</Layout>
</template>
