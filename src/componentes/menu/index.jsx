import { useState } from "react";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("todos");

  const tabs = [
    { id: "todos", label: "Todos" },
    { id: "em-execucao", label: "Em Execução" },
    { id: "ativos", label: "Ativos" },
    { id: "inativos", label: "Inativos" },
  ];

  return (
    <div className="flex items-center mt-5 -mb-1">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="cursor-pointer mx-10"
          onMouseEnter={() => setActiveTab(tab.id)}
          onMouseLeave={() => setActiveTab("")}
        >
          <div
            className={`px-8 my-1 text-[#807D9B] font-medium text-sm  ${
              activeTab === tab.id ? "font-bold text-black text-xs" : ""
            }`}
          >
            {tab.label}
          </div>
          <div
            className={`h-1 ${activeTab === tab.id ? "bg-[#5E48E8]" : ""}`}
          ></div>
        </div>
      ))}
    </div>
  );
}
