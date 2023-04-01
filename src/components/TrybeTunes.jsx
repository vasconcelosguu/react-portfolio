import trybeTunes from '../public/TrybeTunes.png'
import Image from 'next/image';

export default function TrybeTunes() {
  return (
  <div className="lg:flex gap-10">
    <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-400 flex-1">
      <Image src={ trybeTunes } alt="aplicação" width={650} height={650} />
      <h3 className="text-lg font-medium pt-8 pb-2"> TrybeTunes </h3>
      <p className="py-2 ">Projeto inspirado no app Itunes, utilizando a sua API para criar esta aplicação</p>
      <h4 className="py-4 text-teal-600 text-1xl dark:text-teal-300">Tecnologias Utilizadas</h4>
      <p className="text-gray-800 py-1">React.js</p>
      <p className="text-gray-800 py-1">JavaScript</p>
      <p className="text-gray-800 py-1">React Router</p>
      <p className="text-gray-800 py-1">Jest & Mock</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a target="_blank" href="https://github.com/vasconcelosguu/trybe-tunes" >Acesse o Repositorio</a></button>
    </div>
  </div>
  )
}