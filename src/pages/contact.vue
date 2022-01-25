<template>
<Layout>
    <!-- <div class=" w-full "> -->
        <!-- <div class="bg-red-900 h-96"></div> -->
            <div class=" w-full shadow rounded sm:p-10 md:px-6 mt-12 justify-center flex">
                <form method="post" action="">
                <p class="text-3xl lg:text-4xl font-bold leading-7 text-center text-gray-600 underline">Contact Us</p>

                    <div class="md:flex items-center mt-12">
                        <div class="w-full md:w-1/2 flex flex-col ">
                            <label class="font-semibbold leading-none text-gray-700">Name</label>
                            <input placeholder="please enter your name" type="text" required class="leading-none text-gray-50 p-3 focus:outline-none focus:bordet-blue-700 mt-4 border-0 bg-gray-500 rounded">
                        </div>
                        <div class="w-full md:w-1/2 flex flex-col md:ml-6 ">
                            <label class="font-semibbold leading-none text-gray-700">Email</label>
                            <input type="text" placeholder="Please enter your email" class="leading-none text-gray-50 p-3 focus:outline-none focus:bordet-blue-700 mt-4 border-0 bg-gray-500 rounded">
                        </div>
                    </div>
                    <div class="md:flex items-center mt-8">
                        <div class="w-full flex flex-col">
                            <label class="font-semibbold leading-none text-gray-700">Subject</label>
                            <input type="text" placeholder="your subject here" class="leading-none text-gray-50 p-3 focus:outline-none focus:bordet-blue-700 mt-4 border-0 bg-gray-500 rounded">

                        </div>
                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-8">
                            <label class="font-semibold leading-none text-gray-700">Message</label>
                            <textarea type="text" placeholder="your message here" class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-500 border-0 rounded"></textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <button class="mt-6 font-semibold leading-none text-white hover:text-gray-300 py-4 px-10 bg-green-700 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2  focus:outline-none">
                            Send message
                        </button>
                    </div>
                </form>

            </div>
        <!-- </div> -->
</Layout>
</template>
