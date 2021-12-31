<template>
    <Layout>
      <!-- This is an example component -->
<div class="max-w-lg mx-auto my-12">

    <form>
        <div class="mb-6">
            <label for="email" class="text-sm font-medium text-gray-400 block mb-2">Your email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="enter your email" required="">
        </div>
        <div class="mb-6">
            <label for="password" class="text-sm font-medium text-gray-400 block mb-2">Your password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="enter your password" required="">
        </div>
        <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            <div class="text-sm ml-3">
            <label for="remember" class="font-medium text-gray-400">Remember me</label>
            </div>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
    </form>

    <p class="mt-5 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae earum error, nemo alias reprehenderit! Hic perspiciatis necessitatibus magni tenetur architecto, nemo libero consequatur nam sint accusantium repellat, ipsam dolore? <a class="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.</p>
</div>
    </Layout>
    </template
