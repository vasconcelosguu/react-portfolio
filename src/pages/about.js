import Image from "next/image";
import ReactIcon from "../public/React Icon.svg";
import CertificadoFront from '../public/Certificado Front.jpg'
import Js from "../public/Js.svg";
import Jest from "../public/Jest.svg";
import Ts from "../public/Ts.svg";
import VueJs from "../public/VueJs.svg";
import css from "../public/css.svg";
import Html from "../public/Html.svg";
import Navbar from "@/components/NavBar";
import { useContext } from "react";
import { MyContext } from "@/Context/context";
import Head from "next/head";

export default function About() {
  const { darkMode } = useContext(MyContext);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <link
          rel="stylesheet"
          href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css"
        />
        <title>Gustavo Vasconcelos Porfolio| About</title>
      </Head>
      <main className="bg-white md:px-20 lg:px-40 dark:bg-gray-900">
        <Navbar />
        <div class="flex flex-col justify-center items-center h-[100vh] dark:bg-gray-900">
          <div class="relative flex flex-col items-center rounded-[20px] h-[70%] w-[80%] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:bg-gray-600 dark:text-white dark:!shadow-none p-3">
            <div class="mt-2 mb-8 w-full">
              <h4 class="px-2 text-center text-2xl font-bold text-navy-700 dark:text-teal-300">
                Sobre Mim
              </h4>
              <p class="mt-2 px-2 text-base text-gray-600 dark:text-white">
                Meu nome é Gustavo Vasconcelos Salomão, tenho 19 anos e sempre
                fui apaixonado em criar soluções e tecnologia, entrei no mundo
                da tecnologia em maio de 2022 estudando na Trybe, e hoje me
                tornei um Dev Full Stack apaixonado em Front-End buscando por
                minha primeira vaga na carreira profissional.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4 px-2 w-full">
              <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p class="text-sm text-gray-600 dark:text-teal-300">
                  Instituição de ensino
                </p>
                <p class="text-base font-medium text-navy-700 dark:text-white">
                  Trybe
                </p>
              </div>

              <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p class="text-sm text-gray-600 dark:text-teal-300">
                  Languages
                </p>
                <p class="text-base font-medium text-navy-700 dark:text-white">
                  Português | Inglês
                </p>
              </div>

              <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p class="text-sm text-gray-600 dark:text-teal-300">Formação</p>
                <p class="text-base font-medium text-navy-700 dark:text-white">
                  Desenvolvedor Full-Stack
                </p>
              </div>

              <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p class="text-sm text-gray-600 dark:text-teal-300">
                  Aniversário
                </p>
                <p class="text-base font-medium text-navy-700 dark:text-white">
                  25 Fevereiro 2004
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
