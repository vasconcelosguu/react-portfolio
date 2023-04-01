import Planetas from '../public/Planetas.jpg'
import Image from 'next/image';

export default function SolarSystem() {
  return (
  <div className="lg:flex gap-10">
    <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-400 flex-1">
      <Image src={ Planetas } alt="aplicação" width={650} height={650} />
      <h3 className="text-lg font-medium pt-8 pb-2"> Solar System</h3>
      <p className="py-2 ">Projeto inspirado em recriar informações e dados sobre o nosso sistema solar.</p>
      <h4 className="py-4 text-teal-600 text-1xl dark:text-teal-300">Tecnologias Utilizadas</h4>
      <p className="text-gray-800 py-1">React.js</p>
      <p className="text-gray-800 py-1">React Components</p>
      <p className="text-gray-800 py-1">JavaScript</p>
      <p className="text-gray-800 py-1">Jest</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a target="_blank" href="https://github.com/vasconcelosguu/Solar-System" >Acesse o Repositorio</a></button>
    </div>
  </div>
  )
}