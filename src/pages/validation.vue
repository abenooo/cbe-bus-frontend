<template>
<Layout>

    <form class="text-gray-500 shadow-xl  flex flex-wrap justify-center mx-21 md:flex-2  sm:flex-1">
        <div class="w-full md:w-1/3 p-12  mt-10">
            <p class="mb-8 text-3xl flex items-center underline">
                <svg width="32" height="32" viewBox="0 0 512 512" class="inline-block fill-current h-8 w-8 mr-2">
                    <path d="m64 496l0-256 48 0 0-80c0-71 57-128 128-128l16 0c71 0 128 57 128 128l0 80 48 0 0 256z m172-131l-12 83 48 0-12-83c12-5 20-17 20-30 0-18-14-32-32-32-18 0-32 14-32 32 0 13 8 25 20 30z m100-197c0-49-39-88-88-88-49 0-88 39-88 88l0 72 176 0z" />
                </svg>
                Book Now
            </p>
            <div class="mb-4">
                <label class="block text-sm mb-4">Select Departure

                </label>
            </div>
              <div class="mb-4">
                <label class="block text-sm mb-4">Select Destination

                </label>
            </div>
         
            <div class="mb-4">
                <label class="block text-sm mb-4">Depart Date
                    <input class="rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Please Select Arrival" />
                </label>
            </div>
            <div class="mb-4">
                <label class="block text-sm mb-4">Return Date
                    <input class="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Please Select Arrival" />
                </label>
            </div>
            <div class="main flex border rounded-full overflow-hidden m-0 select-none">
                <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Travel Type</div>
                <label class="flex radio p-2 cursor-pointer">
                    <input class="my-auto transform scale-125" type="radio" name="sfg" />
                    <div class="title px-2">One Way</div>
                </label>

                <label class="flex radio p-2 cursor-pointer">
                    <input class="my-auto transform scale-125" type="radio" name="sfg" />
                    <div class="title px-2">Rounded</div>
                </label>

            </div>

            <div class="flex flex-row">
                <a href="/validation"> <button class="mt-6 mb-4 py-2 px-14 rounded-full text-center bg-green-700 text-white  hover:bg-green-500 transition duration-75">Book Now </button></a>
                <a href="/" class="ml-7"> <button class="mt-6 mb-4 py-2 px-14 rounded-full text-center bg-green-700 text-white  hover:bg-green-500 transition duration-75">Return Back
                    </button></a>
            </div>

        </div>

        <div class="w-full md:w-1/3 p-20 flex flex-col justify-between px-8  mt-10  ">
            <g-image class="w-full h-full rounded-2xl mb-4" src="https://www.safaribay.net/wp-content/uploads/2020/04/Odaa-Bus.jpg" alt=""></g-image>

            <!-- <hr class="block w-full mb-4 border-0 border-t border-gray-300" /> -->

            <div class="flex flex-wrap justify-center">
                <div class="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
                    <button class="w-full text-gray-400 border-2 rounded-lg font-bold py-2 px-4 hover:bg-gray-500 hover:text-white" type="button">Go To Offical website</button>
                </div>
                <!-- <div class="w-full sm:w-1/2 sm:pl-2">
                    <button class="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">Login with Google</button>
                </div> -->
            </div>
        </div>


        </div>
    </form>
</Layout>
</template>
