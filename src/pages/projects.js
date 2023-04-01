import Navbar from "../components/NavBar";
import Image from "next/image";
import Head from "next/head";
import { useContext } from "react";
import { MyContext } from "@/Context/context";
import TrybeTunesImage from '../public/TrybeTunes.png'
import Planetas from '../public/Planetas.jpg'
import tfcImage from '../public/TFC.png'

export default function Projects () {
  const {darkMode} = useContext(MyContext);
  return(
    <div className={darkMode? "dark": ""}>
<Head>
   <title>Gustavo Vasconcelos Portfolio</title>
   <meta name="description" content="Generated by create next app" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="icon" href="/favicon.ico" />
</Head>
<main className="bg-white md:px-20 lg:px-40 dark:bg-gray-900">
   <Navbar />
   <div className="text-center py-10">
      <h3 className="text-2xl text-teal-800 dark:text-teal-300 py-2 md:text-3xl">Meus Projetos</h3>
   </div>
<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto animate-pulse">
        <h1 class="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

        <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            <div class="w-full text-center">
                <div class="w-full h-64 o bg-gray-300 rounded-lg dark:bg-gray-600">
                  <Image className="rounded-lg" src={TrybeTunesImage}/>
                  <p className="text-center dark:text-teal-300 py-1">React.Js</p>
                  <p className="text-center dark:text-teal-300">JavaScript</p>
                  <p className="text-center dark:text-teal-300">React Router</p>
                </div>
                <h1 class="text-2xl mt-2 text-center text-teal-800 dark:text-teal-300">TrybeTunes</h1>
                <h1 class="w-56 h-2 mx-auto mt-2 bg-gray-200 rounded-lg dark:bg-gray-700">
                </h1>
                <h4 class="text-2m mt-2 text-teal-800 text-center dark:text-teal-300">Aplicação utilizando API de musicas</h4>
                <p class="w-28 h-2 mx-auto mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <button class="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <a target="_blank" href="https://github.com/vasconcelosguu/trybe-tunes" >Acesse o Repositorio</a>
                </button>
                <p class="w-24 h-2 mt-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full text-center">
                <div class="w-full h-64 o bg-gray-300 rounded-lg dark:bg-gray-600">
                  <Image className="rounded-lg" src={Planetas}/>
                  <p className="text-center dark:text-teal-300 py-1">React.Js</p>
                  <p className="text-center dark:text-teal-300">JavaScript</p>
                  <p className="text-center dark:text-teal-300">React Components</p>
                </div>
                <h1 class="text-2xl mt-2 text-center text-teal-800 dark:text-teal-300">Solar System</h1>
                <h1 class="w-56 h-2 mx-auto mt-2 bg-gray-200 rounded-lg dark:bg-gray-700">
                </h1>
                <h4 class="text-2m mt-2 text-teal-800 text-center dark:text-teal-300">Aplicação React utilizando compontentes</h4>
                <p class="w-28 h-2 mx-auto mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <button class="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <a target="_blank" href="https://github.com/vasconcelosguu/Solar-System" >Acesse o Repositorio</a>
                </button>
                <p class="w-24 h-2 mt-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full text-center">
                <div class="w-full h-64 o bg-gray-300 rounded-lg dark:bg-gray-600">
                  <Image className="rounded-lg" src={tfcImage}/>
                  <p className="text-center dark:text-teal-300 py-1">React.Js</p>
                  <p className="text-center dark:text-teal-300">JavaScript</p>
                  <p className="text-center dark:text-teal-300">TypeScript</p>
                </div>
                <h1 class="text-2xl mt-2 text-center text-teal-800 dark:text-teal-300">Trybe Futebol Clube</h1>
                <h1 class="w-56 h-2 mx-auto mt-2 bg-gray-200 rounded-lg dark:bg-gray-700">
                </h1>
                <h4 class="text-2m mt-2 text-teal-800 text-center dark:text-teal-300">Aplicação Full-Stack com React e MySql</h4>
                <p class="w-28 h-2 mx-auto mt-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <button class="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <a target="_blank" href="https://github.com/vasconcelosguu/Trybe-Futebol-Clube" >Acesse o Repositorio</a>
                </button>
                <p class="w-24 h-2 mt-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
        </div>
    </div>
</section>
</main>
</div>
  )
}