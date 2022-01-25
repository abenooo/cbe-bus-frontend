<template>
<Layout>
     
     <div class="w-full md:px-44 p-5 mt-0 ">
         <form action="" class="p-6 md:p-16  shadow-md ">
                  <div class="md:flex items-center">
                         <div class="w-full md:w-1/3 flex flex-col md:ml-6 ">
                            <label class="font-semibbold leading-none text-gray-500">Departure</label>
                            <!-- <input type="selec" placeholder="Select your departure location" class="leading-none text-gray-600 p-3 focus:outline-none focus:border-green-600 mt-4 border-2 rounded"> -->
                            <select name="destination" id="" class="bg-white leading-none text-gray-600 p-3 focus:outline-none focus:border-green-600 mt-4 border-2 rounded">
                                <option value="" selected>Select your departure</option>
                                <option value="addis abeba"  class="">Addis Abeba</option>
                                <option value="Hawassa">Hawassa</option>
                                <option value="Bahir Dar">Bahir Dar</option>
                                <option value="Adama">Adama</option>
                            </select>
                        </div>
                        <div class="pt-5 pl-5 text-green-500 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 " fill="none" viewBox="0 0 24 16" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6" fill="none" viewBox="0 0 24 16" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </div>
                        <div class="w-full md:w-1/3 flex flex-col md:ml-6 ">
                            <label class="font-semibbold leading-none text-gray-600">Destination</label>
                            <!-- <input type="selec" placeholder="Select your departure location" class="leading-none text-gray-600 p-3 focus:outline-none focus:border-green-600 mt-4 border-2 rounded"> -->
                            <select name="destination" id="" class="bg-white leading-none text-gray-500 p-3 focus:outline-none focus:border-green-600 mt-4 border-2 rounded">
                                <option value="" selected>Select your destination</option>
                                <option value="addis abeba"  class="">Addis Abeba</option>
                                <option value="Hawassa">Hawassa</option>
                                <option value="Bahir Dar">Bahir Dar</option>
                                <option value="Adama">Adama</option>
                            </select>
                        </div>
                         <div class="w-full md:w-1/3 flex flex-col md:ml-6 ">
                            <label class="font-semibbold leading-none text-gray-500">Travel Date</label>
                            <input type="date"  class="leading-none text-gray-600 p-3 focus:outline-none focus:bordet-blue-600 mt-4 border-2 rounded">
                        </div>
                        <div class="w-full md:w-1/3 flex flex-col md:ml-6 " v-if="twoWay">
                            <label class="font-semibbold leading-none text-gray-500">Return Date</label>
                            <input type="date" class="leading-none text-gray-600 p-3 focus:outline-none focus:bordet-blue-600 mt-4 border-2 rounded">
                        </div>
                        <!-- round way selection -->
                        <div class="p-2 w-full md:w-1/5 flex flex-col ml-6">
                            <label class="font-semibbold leading-none text-gray-500 block">Round</label>
                            <div class="pt-4 pb-1">
                                <input type="radio" id="one" value="oneWay" v-model="roundValue"  class="mr-3 text-gray-500" @click="()=>{twoWay=false}">
                                <label for="one" class="text-gray-500">One Way</label>
                            </div>
                            <div>
                                <input type="radio" id="two" value="twoWay" v-model="roundValue" class="mr-3 text-gray-500" @click="()=>{twoWay=true}">
                                <label for="two" class="text-gray-500">Two Way</label>
                            </div>
                        </div>
                        
                        <button class="w-full md:w-auto font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:outline-none md:mx-5 mt-9" >
                            Search
                        </button>
                    </div>
         </form>
     </div>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-8 py-5">
        
        <div class="md:flex md:justify-center md:space-x-8 md:px-14" v-for="bsp in $page.allBusServiceProvider.edges"
        :key="bsp.node.id">
            <!-- box-1 -->
            <div class="mt-0 py-0 mb-10 px-0 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div class="w-sm">
                    <g-image class="w-full rounded" height="200px" :src="`http://localhost:1337${bsp.node.logo.url}`" alt="image" />
                    <div class="mt-4 text-green-600 text-center px-4">
                        <h1 class="text-xl font-bold">{{bsp.node.name}}</h1>
                        <p class="mt-4 text-gray-600">{{bsp.node.slogan}}</p>
                      
                     <!-- <a href="/validation">   </a> -->
                    <g-link  :to="{ path: ('/BusServiceProvider/') + bsp.node.id }"  class="" >
                        <button class="mt-6 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 hover:text-gray-700 transition duration-75">
                           Book Now <svg class="inline ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </g-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</Layout>
</template>
<page-query>
    query{
        allBusServiceProvider{
            edges{
                node{
                id
                name
                slogan
                path
                website
                city
                phone
                email
                description
                logo{
                    url
                }
                }
            }
        }
    }
</page-query>
<script>
    export default {
        metaInfo: {
            title: 'Bus System!'
        },
        data(){
            return{
                // busServiceProvider:[],
                twoWay :false,
                roundValue:''
            }
        },
        // mounted(){
        //     this.busServiceProvider=this.$page.allBusServiceProvider.edges;
        // }
    }
</script>


<style>
    /* .home-links a {
  margin-right: 1rem;
} */
</style>
