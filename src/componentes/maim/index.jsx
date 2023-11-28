// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import LoadingAnimacao from "../iconsAnimacao/loadingAnimacao";


export default function Maim (){
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(25);
  const [total, setTotal] = useState(30);
  const [errors, setErrors] = useState(0);
  const [paused, setPaused] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [configuring, setConfiguring] = useState(false);

  useEffect(() => {
    if (paused) {
      setStatusText("Pausado");
    } else if (statusText === "Pausado") {
      setStatusText(""); // Limpar a mensagem quando não estiver pausado
    }
  }, [paused, statusText]);

  const handleExecute = () => {
    setLoading(true);
    setStatusText("Em execução");

    // Simulando uma operação assíncrona (exemplo: requisição de API)
    setTimeout(() => {
      setLoading(false);
      setProgress(30);
      setErrors(0);
      if (paused) {
        setPaused(false);
        setProgress(0);
        setTotal(0);
        setStatusText("Pausado");
      } else {
        setStatusText("Em execução");
      }
    }, 2000);
  };

  const handleConfigure = () => {
    console.log("Configurando robô...");
    setConfiguring(!configuring);
  };

  const handlePause = () => {
    setPaused(!paused);
    // StatusText será atualizado pelo useEffect
  };

  const handleRestart = () => {
    setPaused(false);
    setProgress(0);
    setTotal(0);
    setStatusText("Reiniciando");

    // Simular um pequeno atraso antes de começar a execução
    setTimeout(() => {
      handleExecute();
    }, 500);
  };

  return (
    <div className="w-30 min-h-full border border-[#D9D5EC] bg-[#FFFF] rounded-lg mt-20 mx-6 p-4 text-[#807D9B] relative">
      <div className="">
        <h1 className="text-[#000000] font-semibold text-sm">
          #D9D5EC - Busca no Diário Oficial
        </h1>
        <p className="text-[#807D9B] font-normal text-xs ">
          Busca de processos através de consulta no Diário Oficial
        </p>
        <div className="flex items-center mt-2">
          {loading && (
            <div className="mr-2">
              <LoadingAnimacao />
            </div>
          )}
          <p className="font-bold text-xs">
            {loading ? `Executando (${progress}/${total})` : `Erros: ${errors}`}
          </p>
        </div>
        {paused && (
          <p className="font-bold text-xs text-red-500">{`Pausado (${progress}/${total})`}</p>
        )}
      </div>

      {/* Removido o bloco que exibe o statusText */}
      
      <div className="flex items-center justify-end mt-4">
        <div className="mt-">
          <button
            onClick={handleConfigure}
            className={`${
              configuring
                ? "bg-[#EAE7FA] border-[#5E48E8] text-white"
                : "border border-[#5E48E8] text-[#5E48E8]"
            } px-4 py-2 mr-2 mb-2 rounded-md font-normal text-xs`}
          >
            Configurar Robô
          </button>
          <button
            onClick={paused ? handleRestart : handleExecute}
            className={`${
              loading
                ? "bg-[#EAE7FA] border-[#D9D5EC]"
                : paused
                ? "bg-[#5E48E8] border-[#5E48E8]"
                : "border border-[#5E48E8] text-[#5E48E8]"
            } text-white px-4 py-2 mr-2 rounded-md font-normal text-xs mb-2`}
            disabled={loading}
          >
            {loading ? "Executando" : paused ? "Reiniciar" : "Executar"}
          </button>
          <button
            onClick={handlePause}
            className={`${
              paused
                ? "bg-[#D9D5EC] border-[#D9D5EC]"
                : "border border-[#5E48E8] text-[#5E48E8]"
            } text-white px-4 py-2 rounded-md font-normal text-xs mb-2`}
          >
            {paused ? "Pausado" : "Pausar"}
          </button>
        </div>
      </div>

      <a href="#" className="text-blue-500 mt-4 block font-bold text-sm">
        Ver detalhes
      </a>
    </div>
  );
}

