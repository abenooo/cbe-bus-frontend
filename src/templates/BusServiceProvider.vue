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
                    <!-- <input class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="" placeholder="Email" /> -->
                    <select name="departure" id="" class="w-full py-2 px-3 text-black rounded-lg">
                        <option value="" disabled>Departure</option>
                        <option value="addis abeba">Addis Abeba</option>
                        <option value="Hawassa">Hawassa</option>
                        <option value="Bahir Dar">Bahir Dar</option>
                        <option value="Adama">Adama</option>

                    </select>
                </label>
            </div>
              <div class="mb-4">
                <label class="block text-sm mb-4">Select Destination
                    <!-- <input class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="" placeholder="Email" /> -->
                    <select name="departure" id="" class="w-full py-2 px-3 text-black rounded-lg">
                        <option value="" disabled>Departure</option>
                        <option value="addis abeba">Addis Abeba</option>
                        <option value="Hawassa">Hawassa</option>
                        <option value="Bahir Dar">Bahir Dar</option>
                        <option value="Adama">Adama</option>

                    </select>
                </label>
            </div>
         
            <div class="mb-4">
                <label class="block text-sm mb-4">Depart Date
                    <input class="rounded-lg appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Please Select Arrival" />
                </label>
            </div>
             <div class="mb-4" id="ifYes" style="visibility:hidden">
                <label class="block text-sm mb-4">Return Date
                    <input id='yes' name='yes' class="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Please Select Arrival" />
                </label>
            </div>
              <div class="main flex border rounded-full overflow-hidden m-0 select-none">
                <div class="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">Travel Type</div>
                <label class="flex radio p-2 cursor-pointer">
                    <input class="my-auto transform scale-125" type="radio"  @click="yesnoCheck();" name="yesno" id="noCheck" />
                    <div class="title px-2" >One Way</div>
                </label>

                <label class="flex radio p-2 cursor-pointer">
                    <input class="my-auto transform scale-125" type="radio"  @click="yesnoCheck();" name="yesno" id="yesCheck" />
                    <div class="title px-2" >Rounded</div>
                </label>

            </div>
            <div class="flex flex-row">
                <a href=""> <button class="mt-6 mb-4 py-2 px-14 rounded-full text-center bg-green-700 text-white  hover:bg-green-500 transition duration-75">Book Now </button></a>
                <g-link to="/" class="ml-7"> <button class="mt-6 mb-4 py-2 px-14 rounded-full text-center bg-green-700 text-white  hover:bg-green-500 transition duration-75">Return Back</button>
                </g-link>
            </div>

        </div>

        <div class="w-full md:w-1/3 p-20 flex flex-col justify-between px-8  mt-10  ">
            <g-image class="w-full h-full rounded-2xl mb-4" :src=" `http://localhost:1337${$page.busServiceProvider.logo.url}`" alt=""></g-image>

            <!-- <hr class="block w-full mb-4 border-0 border-t border-gray-300" /> -->

            <div class="flex flex-wrap justify-center">
                <div class="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
                    <button class="w-full text-gray-400 border-2 rounded-lg font-bold py-2 px-4 hover:bg-gray-500 hover:text-white" type="button"><u>Go To Offical website</u> <span class="block text-green-700 hover:text-green-500">{{$page.busServiceProvider.website}}</span></button>
                </div>
                <!-- <div class="w-full sm:w-1/2 sm:pl-2">
                    <button class="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">Login with Google</button>
                </div> -->
            </div>
        </div>
         <div class="w-full md:w-1/3  p-6 text-gray-500 mt-10">
            <p class="mb-8 text-3xl flex items-center">
             <h1 class="text-center text-2xl mb-2 underline">About {{$page.busServiceProvider.name}} </h1>
             <p>{{$page.busServiceProvider.description}}</p>    
             <h1 class="text-right pt-5 pr-5 text-gray-600">Address: <span>{{$page.busServiceProvider.city}}</span></h1>       
             <h1 class="text-right pr-5 text-gray-600">Phone: <span>{{$page.busServiceProvider.phone}}</span></h1>       
             <h1 class="text-right pr-5 text-gray-600">Email: <span>{{$page.busServiceProvider.email}}</span></h1>       
        </div>
    </form>
</Layout>
</template>
<script>

export default ({
    setup() {
        
    },
    data(){
      return {
    } 
    } ,
    methods:{
     yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';

}
    }
})
</script>

<page-query>
    query($id:ID!){
        busServiceProvider(id:$id){
                id
                name
                
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
</page-query>
