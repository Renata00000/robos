// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Filter ()  {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Adicione lógica de busca aqui
    console.log("Pesquisando por:", searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex items-center mt-4">
      {/* Campo de pesquisa */}
      <div className="mx-10 relative mt-4 w-24 h-10" style={{ width: "80%" }}>
        <input
          type="text"
          placeholder="Pesquisar por robos"
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full px-20 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[#D9D5EC]"
        />
      </div>

      {/* Botão de filtro */}

      <div className="relative ml-2">
        <button
          onClick={handleSearch}
          className="px-4 py-2 border border-[#5E48E8] text-[#5E48E8] text-sm rounded-md hover:bg-blue-600 focus:outline-none w-24 max-h-10"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}


