<template>
<div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen" :class="theme">
    <header class="top-0 left-0 z-40 fixed w-full border-t-14 border-green-700 pl-3">
        <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
            <div>
                <g-link v-if="theme === 'theme-light'" to="/" @click.native="scrollToTop">
                    <g-image src="../../static/logo.svg" class="w-40" alt="logo" />
                </g-link>
                <g-link v-else to="/" @click.native="scrollToTop">
                    <g-image src="../../static/logo_dark_mode.svg" class="w-40" alt="logo" />
                </g-link>
            </div>
            <div class="block lg:hidden pr-10">
                <button @click="toggle" class=" flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600" data-cypress="hamburger">
                    <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
                </button>
            </div>
            <ul class="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0 " :class="isOpen ? 'block': 'hidden'">
                <li class="ml-5">
                    <theme-switcher :theme="theme" @themeChanged="updateTheme" />
                </li>
                <li>
                    <g-link to="/" class="text-copy-primary hover:text-gray-600 ml-5">Bus</g-link>
                </li>
                <li>
                    <g-link to="/contact" class="text-copy-primary hover:text-gray-600 ml-5">Contact</g-link>
                </li>
               
                <li>
                    <g-link to="/testimona" class="text-copy-primary hover:text-gray-600 ml-5">Testimony</g-link>
                </li>
                <li>
                    <g-link to="/about" class="text-copy-primary hover:text-gray-600 ml-5">About</g-link>
                </li>
                <!-- <li>
                    <g-link to="/language" class="text-copy-primary hover:text-gray-600">Language <svg class="inline w-4 h-4 dark:text-white ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                        </svg>
                    </g-link>
                </li> -->
                <!-- <div class="relative text-left inline-blockflex-col mx-auto my-7 mt-5 uppercase tracking-wide font-bold">
                    <button @click="open = !open" class="p-3 bg-gray-10 flex items-center uppercase tracking-wide"><a>Choose Bus</a>
                        <svg class="w-4 h-4 dark:text-white ml-3 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                        </svg>
                    </button>
                    <div v-if="open" class="absolute mt-2 w-full bg-gray-300 border-t border-gray-300">
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800" href="#">Habesha </a>
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800" href="#">Yegna </a>
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800" href="#">Zemen </a>
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800" href="#">Golden </a>
                    </div>
                </div> -->
                 <div class="relative text-left inline-blockflex-col mx-auto my-7 mt-5 uppercase tracking-wide font-bold ml-2">
                    <button @click="open = !open" class="p-3 bg-gray-10 flex items-center uppercase tracking-wide capitalize"><a>Manage Booking</a>
                        <svg class="w-4 h-4 dark:text-white ml-3 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                        </svg>
                    </button>
                    <div v-if="open" class="absolute mt-2 w-full bg-gray-300 border-t border-gray-300 rounded" >
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800 capitalize text-black font-semibold" href="#">Bus Tickets </a>
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800 capitalize  text-black font-semibold" href="#">Cancel Booking </a>
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800 capitalize  text-black font-semibold" href="#">Change Travel Date </a>
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800 capitalize text-black font-semibold" href="#">Show My Tickets </a>
                    </div>
                </div>
                  <div class="relative text-left inline-blockflex-col mx-auto my-7 mt-5 uppercase tracking-wide font-bold">
                    <button @click="languageOpen = !languageOpen" class="p-3 bg-gray-10 flex items-center uppercase tracking-wide capitalize"><a>Language</a>
                        <svg class="w-4 h-4 dark:text-white ml-3 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                        </svg>
                    </button>
                    <div v-if="languageOpen" class="absolute mt-2 w-36 bg-gray-300 border-t border-gray-300 rounded" >
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800 capitalize text-black font-semibold" href="#">English (Eng) </a>
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800 capitalize  text-black font-semibold" href="#">Amharic (Amh) </a>
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800 capitalize  text-black font-semibold" href="#">Oromic (Oro) </a>
                        <a class="block p-3 border-b border-gray-300 hover:border-gray-800 capitalize text-black font-semibold" href="#">Tigray (Tig) </a>
                    </div>
                </div>
                 <li>
                    <g-link to="/login" class="text-copy-primary hover:text-gray-300 border-2 py-2 px-5 rounded-2xl bg-green-700 text-white capitalize ml-5">SignIn</g-link>
                </li>
            </ul>
        </nav>
    </header>

    <main class="flex flex-col flex-grow overflow-hidden pt-12">
        <slot />
    </main>
    <footer>
        <div class="p-10 bg-gray-800 text-gray-200">
            <div class="max-w-7x1 mx-auto">
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    <div class="mb-5">
                        <h4 class="text-2xl pb-4">Company</h4>
                        <li class="mb-4 list-none"><span><svg class="inline bg-green-50 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>Ethiopia, Addis Ababa</span> </li>
                        <li class="mb-4 list-none"><span><svg class="inline bg-green-50 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>cbe@combanket.et</span></li>
                        <li class="mb-4 list-none"><span><svg class="inline bg-green-50 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" /></svg>
                                952 or +25111-122-87-55</span> </li>
                        <li class="mb-4 list-none"><span><svg class="inline bg-green-50 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" /></svg>+2511-1-51-50-00</span> </li>
                        <li class="mb-4 list-none"><span><svg class="inline bg-green-50 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" /></svg></span>linkedin.com/in/abenezer-kifle-2490271a3</li>
                        <li class="mb-4 list-none"><span><svg class="inline bg-green-50 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></span>https://github.com/abenooo/portofilo-with-nextjs </li>
                    </div>
                    <div class="mb-5">
                        <h4 class="text-2xl mb-4">Useful Links</h4>
                        <ul>
                            <li class="pb-4"><svg class="inline bg-green-50 rounded-full " width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" /></svg><span class="ml-2">Home</span> </li>
                            <li class="pb-4"><svg class="inline bg-green-50 rounded-full" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" /></svg><span class="ml-2">About Us</span></li>
                            <li class="pb-4"><svg class="inline bg-green-50 rounded-full" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" /></svg><span class="ml-2">Contact Us</span> </li>
                            <li class="pb-4"><svg class="inline bg-green-50 rounded-full" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" /></svg><span class="ml-2">Terms of Service</span> </li>
                            <li class="pb-4"><svg class="inline bg-green-50 rounded-full" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" /></svg><span class="ml-2">Privacy policy</span> </li>
                        </ul>
                    </div>
                    <div class="mb-5">
                        <h4 class="text-2xl mb-4">Our Service</h4>
                        <ul>
                            <li class="pb-4"><svg class="inline bg-yellow-100 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M16 16v4l8-8-8-8v4h-8.929c-9.059 0-7.134 9.521-6.334 11.418.788-2.445 2.464-3.418 5.371-3.418h9.892z" /></svg>Bus Ticket</li>
                            <li class="pb-4"><svg class="inline bg-yellow-100 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M16 16v4l8-8-8-8v4h-8.929c-9.059 0-7.134 9.521-6.334 11.418.788-2.445 2.464-3.418 5.371-3.418h9.892z" /></svg>Tiket system</li>
                            <li class="pb-4"><svg class="inline bg-yellow-100 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M16 16v4l8-8-8-8v4h-8.929c-9.059 0-7.134 9.521-6.334 11.418.788-2.445 2.464-3.418 5.371-3.418h9.892z" /></svg>CBE utility</li>
                            <li class="pb-4"><svg class="inline bg-yellow-100 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M16 16v4l8-8-8-8v4h-8.929c-9.059 0-7.134 9.521-6.334 11.418.788-2.445 2.464-3.418 5.371-3.418h9.892z" /></svg>Concert Ticket </li>
                            <li><svg class="inline bg-yellow-100 rounded-full mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M16 16v4l8-8-8-8v4h-8.929c-9.059 0-7.134 9.521-6.334 11.418.788-2.445 2.464-3.418 5.371-3.418h9.892z" /></svg>Other</li>
                        </ul>
                    </div>
                    <div class="mb-5 ">
                        <h4 class="text-2xl pb-4">Join Our Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque ut numquam eum porro id! Laborum molestias cum voluptatibus! Quaerat est consequuntur repellat nisi animi modi non dolorum nam pariatur.</p>
                        <form class="flex flex-row flex-wrap gap-0">
                            <input type="text" class="text-gray-500 w-2/3 p-2 focus:border-yellow-500" placeholder="alephakilo@gmail.com">
                            <button class="p-2  bg-yellow-500 text-white hover:bg-yellow-600">Subscribe </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-gray-900 text-gray-500 px-10">
            <div class="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
                <div class="text-center">
                    <div>Copyright {{ new Date().getFullYear() }}. Comercial Bank of Ethiopia. All right reserved.

                    </div>
                    <div>
                        Designed By <a href="#"><span> <svg class="inline" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z" fill-rule="nonzero" /></svg> Alepha Kilo</span></a>
                    </div>
                </div>
                <div class="text-center text-xl flex flex-row">
                    <div class="flex space-x-4">
                        <svg class="w-6 h-6 dark:text-white my-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                        </svg>
                        <svg class="w-6 h-6 dark:text-white my-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
                        </svg>
                        <svg class="w-6 h-6 dark:text-white my-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <svg class="w-6 h-6 dark:text-white my-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path>
                        </svg>
                    </div>
                    <a class="w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-800 mx-2 ml-10"> <svg class="mx-2.5 my-2 animate-beat" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0c1.814 0 3.487.435 5.02 1.306a9.827 9.827 0 0 1 3.639 3.542A9.33 9.33 0 0 1 20 9.734c0 2.121-.636 4.03-1.908 5.723a9.783 9.783 0 0 1-4.928 3.518c-.234.042-.408.012-.52-.09a.49.49 0 0 1-.17-.38l.006-.969c.005-.621.007-1.19.007-1.705 0-.82-.226-1.42-.677-1.8.495-.05.94-.126 1.335-.228a5.4 5.4 0 0 0 1.223-.494 3.62 3.62 0 0 0 1.055-.843c.282-.334.512-.777.69-1.33.178-.554.267-1.19.267-1.909a3.7 3.7 0 0 0-1.028-2.61c.32-.77.286-1.631-.105-2.586-.243-.076-.594-.03-1.054.14-.46.168-.86.354-1.198.557l-.495.304a9.478 9.478 0 0 0-2.5-.33c-.86 0-1.693.11-2.5.33a11.6 11.6 0 0 0-.553-.342c-.23-.135-.593-.298-1.088-.488-.494-.19-.863-.247-1.106-.171-.391.955-.426 1.816-.105 2.585A3.7 3.7 0 0 0 3.62 9.227c0 .719.089 1.352.267 1.902.178.549.406.993.683 1.33.278.339.627.622 1.048.85a5.4 5.4 0 0 0 1.224.494c.395.102.84.178 1.335.228-.338.305-.551.74-.638 1.306a2.631 2.631 0 0 1-.586.19 3.782 3.782 0 0 1-.742.063c-.287 0-.57-.09-.853-.272a2.256 2.256 0 0 1-.723-.792 2.068 2.068 0 0 0-.631-.66c-.256-.168-.471-.27-.645-.304l-.26-.038c-.182 0-.308.02-.378.057-.07.038-.09.087-.065.146.026.06.065.118.117.178.053.059.109.11.17.152l.09.063c.192.085.38.245.567.482.187.236.324.452.41.646l.13.292c.113.32.304.58.574.78.269.198.56.325.872.38.312.054.614.084.905.088.29.004.532-.01.723-.044l.299-.05c0 .32.002.694.007 1.12l.006.692a.49.49 0 0 1-.17.38c-.112.101-.286.13-.52.089a9.783 9.783 0 0 1-4.928-3.518C.636 13.763 0 11.855 0 9.734a9.33 9.33 0 0 1 1.341-4.886 9.827 9.827 0 0 1 3.64-3.542C6.512.436 8.185 0 10 0zM3.79 13.98c.025-.058-.005-.11-.092-.151-.087-.026-.143-.017-.17.025-.025.06.005.11.092.152.078.05.134.042.17-.025zm.403.432c.06-.043.052-.11-.026-.203-.087-.076-.157-.089-.209-.038-.06.042-.052.11.026.203.087.084.157.097.209.038zm.39.57c.078-.06.078-.14 0-.24-.07-.11-.143-.136-.221-.077-.078.042-.078.118 0 .228.078.11.152.14.221.089zm.547.532c.07-.067.052-.148-.052-.24-.104-.102-.19-.115-.26-.039-.078.068-.061.148.052.241.104.102.19.114.26.038zm.742.317c.026-.093-.03-.16-.169-.203-.13-.033-.213-.004-.247.09-.035.092.021.155.169.19.13.05.213.025.247-.077zm.82.064c0-.11-.073-.157-.22-.14-.14 0-.209.047-.209.14 0 .11.074.156.221.139.14 0 .209-.046.209-.14zm.756-.127c-.017-.093-.096-.131-.234-.114-.14.025-.2.088-.183.19.018.101.096.135.235.101.139-.034.2-.093.182-.177z" fill-rule="nonzero" /></svg></a>
                    <a class="w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-800 mx-2"> <svg class="mx-2.5 my-2 animate-wiggle" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></a>
                    <a class="w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-800 mx-2"> <svg class="mx-2.5 my-2 animate-bounce" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg></a>
                    <a class="w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-800 mx-2"> <svg class="mx-2.5 my-2 animate-ping" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" /></svg> </a>
                    <a class="w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-800 mx-2"> <svg class="mx-2.5 my-2 animate-spin-slow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fill-rule="evenodd" clip-rule="evenodd" /></svg> </a>
                </div>

            </div>
        </div>
    </footer>

    <div style="display:none">
        <svg id="dots-triangle" width="170" height="170" xmlns="http://www.w3.org/2000/svg">
            <path d="M168.152 170a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm-18.479 0a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zM94.24 133.043a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478 36.956a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478 55.434a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm-18.479 73.913a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm-18.478 92.391a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM1.848 133.044a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.695zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696z" fill="#2C8056" fill-rule="evenodd" opacity=".503" /></svg>
    </div>
</div>
</template>

<static-query>
    query { metadata { siteName } }
</static-query>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher'

export default {
    components: {
        ThemeSwitcher
    },
    mounted() {
        this.theme = localStorage.getItem('theme') || 'theme-light'
    },
    data() {
        return {
            isOpen: false,
            theme: '',
            open: false,
            languageOpen: false,
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        toggle() {
            this.isOpen = !this.isOpen
        },
        updateTheme(theme) {
            this.theme = theme
        }
    }
}
</script>

<style src="../css/main.css" />
