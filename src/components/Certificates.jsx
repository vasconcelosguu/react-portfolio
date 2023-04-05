import CertificadoFront from "../public/Certificado Front.jpg";
import Image from "next/image";

export default function Certificates() {
  return (
    <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-400 flex-1">
        <Image src={CertificadoFront} alt="aplicação" width={650} height={650} />
        <button className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a
            target="_blank"
            href="https://www.credential.net/b1d52ba1-5cc3-44a4-959f-f1f1d8fb0127"
          >
            Acesse o Certificado
          </a>
        </button>
      </div>
    </div>
  );
}
