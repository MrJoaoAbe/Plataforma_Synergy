import { Link } from "react-router-dom";
import FotoExemplo from "../assets/Example.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function MeuPerfil() {
  const usuarioLogado =
    JSON.parse(localStorage.getItem("UsuarioLogado")) || {
      darkMode: false,
    };

  const [ativado, setAtivado] = useState(usuarioLogado?.darkMode || false);

  function handleClick() {
    localStorage.removeItem("UsuarioLogado");
  }

  function alternarDarkMode() {
    const usuarioAtualizado = {
      ...usuarioLogado,
      darkMode: !usuarioLogado.darkMode,
    };

    localStorage.setItem("UsuarioLogado", JSON.stringify(usuarioAtualizado));

    window.dispatchEvent(new Event("darkmode-change"));
  }

  const modoClaro = usuarioLogado.darkMode === false;

  return (
    <div>
      {/* MODO CLARO */}
      {modoClaro ? (
        <div className="bg-[#DFDFDF] min-h-screen flex items-center justify-center">
          <div className="w-full max-w-4xl bg-white rounded-4xl shadow-2xl flex flex-col p-6 sm:p-10">
            {/* CABEÇALHO */}
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <h1 className="font-extralight text-3xl sm:text-4xl text-[#859F74]">
                MEU PERFIL
              </h1>

              {/* Switch */}
              <div className="flex flex-row gap-3 items-center mt-4 sm:mt-0">
                <button
                  onClick={() => {
                    alternarDarkMode();
                    setAtivado(!ativado);
                  }}
                  className={`w-14 h-8 rounded-full flex items-center px-1 transition duration-300 shadow 
                    ${
                      ativado
                        ? "bg-[#859F74] justify-end"
                        : "bg-[#DFDFDF] justify-start"
                    }`}
                >
                  <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
                </button>

                <FontAwesomeIcon
                  icon={faMoon}
                  className="text-2xl text-[#859F74]"
                />
              </div>
            </div>

            {/* GRID PRINCIPAL RESPONSIVO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 text-[#859F74]">
              {/* FOTO */}
              <div className="flex justify-center">
                <img
                  src={
                    usuarioLogado.foto === "" ? FotoExemplo : usuarioLogado.foto
                  }
                  className="w-40 sm:w-52 rounded-4xl border-4 border-white shadow-xl"
                />
              </div>

              {/* DADOS PRINCIPAIS */}
              <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-light flex items-center gap-2">
                  {usuarioLogado.nome} {usuarioLogado.idade}
                </p>
                <p className="text-xl sm:text-2xl">{usuarioLogado.cargo}</p>
                <p className="text-xl sm:text-2xl">{usuarioLogado.area}</p>
                <p className="text-xl sm:text-2xl">
                  {usuarioLogado.localizacao}
                </p>
              </div>

              {/* MÉTRICAS */}
              <div className="flex justify-around text-center">
                <div>
                  <p className="font-bold text-3xl">
                    {usuarioLogado.avaliacoes}
                  </p>
                  <p className="text-sm">Estrelas</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">
                    {usuarioLogado.seguidores.length}
                  </p>
                  <p className="text-sm">Seguidores</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">
                    {usuarioLogado.postagens.length}
                  </p>
                  <p className="text-sm">Posts</p>
                </div>
              </div>

              {/* RESUMO */}
              <p className="col-span-1 sm:col-span-2 text-center text-lg font-light">
                {usuarioLogado.resumo}
              </p>

              {/* EXPERIÊNCIAS E FORMAÇÃO */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xl font-semibold">EXPERIÊNCIAS</p>
                  <p className="text-xl">
                    {usuarioLogado.experiencias[0].empresa}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-semibold">FORMAÇÃO</p>
                  <p className="text-xl">
                    {usuarioLogado.formacao[0].instituicao}
                  </p>
                </div>
              </div>

              {/* IDIOMAS */}
              <div>
                <p className="text-xl font-semibold">IDIOMAS</p>
                <p className="text-xl">{usuarioLogado.idiomas[0].idioma}</p>
              </div>

              {/* SOFT SKILLS */}
              <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
                <p className="text-xl font-semibold">SOFTSKILLS</p>
                <div className="flex flex-wrap gap-2">
                  {usuarioLogado.soft_skills.map((skill, i) => (
                    <p
                      key={i}
                      className="bg-[#859F74] text-white text-md p-1 px-2 rounded-full"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              {/* HABILIDADES */}
              <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
                <p className="text-xl font-semibold">HABILIDADES</p>
                <div className="flex flex-wrap gap-2">
                  {usuarioLogado.habilidades.map((hab, i) => (
                    <p
                      key={i}
                      className="bg-[#859F74] text-white text-md p-1 px-3 rounded-full"
                    >
                      {hab}
                    </p>
                  ))}
                </div>
              </div>

              {/* BOTOES */}
              <div className="flex flex-col items-center gap-4 col-span-1 sm:col-span-3 mt-4">
                <Link
                  to="/dashboard"
                  className="font-semibold bg-white p-4 rounded-2xl text-[#859F74] border-4 border-[#859F74] shadow hover:bg-[#859F74] hover:text-white transition w-full sm:w-auto text-center"
                >
                  VISUALIZAR DASHBOARD
                </Link>

                <Link
                  to="/"
                  onClick={handleClick}
                  className="font-semibold bg-white px-6 py-2 rounded-2xl text-[#ff0000] border-2 border-[#ff0000] shadow hover:bg-[#ff0000] hover:text-white transition w-full sm:w-auto text-center"
                >
                  SAIR
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ============================
        // ======= MODO ESCURO ========
        // ============================
        <div className="bg-[#111411] min-h-screen flex items-center justify-center">
          <div className="w-full max-w-4xl bg-[#1A1D1A] rounded-4xl shadow-2xl flex flex-col p-6 sm:p-10 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <h1 className="font-extralight text-3xl sm:text-4xl text-white">
                MEU PERFIL
              </h1>

              <div className="flex flex-row gap-3 items-center mt-4 sm:mt-0">
                <button
                  onClick={() => {
                    alternarDarkMode();
                    setAtivado(!ativado);
                  }}
                  className={`w-14 h-8 rounded-full flex items-center px-1 transition duration-300 shadow 
                    ${
                      ativado
                        ? "bg-[#859F74] justify-end"
                        : "bg-[#DFDFDF] justify-start"
                    }`}
                >
                  <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
                </button>

                <FontAwesomeIcon icon={faMoon} className="text-2xl text-white" />
              </div>
            </div>

            {/* GRID PRINCIPAL RESPONSIVO (ESCURO) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              <div className="flex justify-center">
                <img
                  src={
                    usuarioLogado.foto === "" ? FotoExemplo : usuarioLogado.foto
                  }
                  className="w-40 sm:w-52 rounded-4xl border-4 border-white shadow-xl"
                />
              </div>

              <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-light flex items-center gap-2">
                  {usuarioLogado.nome} {usuarioLogado.idade}
                </p>
                <p className="text-xl sm:text-2xl">{usuarioLogado.cargo}</p>
                <p className="text-xl sm:text-2xl">{usuarioLogado.area}</p>
                <p className="text-xl sm:text-2xl">
                  {usuarioLogado.localizacao}
                </p>
              </div>

              <div className="flex justify-around text-center">
                <div>
                  <p className="font-bold text-3xl">
                    {usuarioLogado.avaliacoes}
                  </p>
                  <p className="text-sm">Estrelas</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">
                    {usuarioLogado.seguidores.length}
                  </p>
                  <p className="text-sm">Seguidores</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">
                    {usuarioLogado.postagens.length}
                  </p>
                  <p className="text-sm">Posts</p>
                </div>
              </div>

              <p className="col-span-1 sm:col-span-2 text-center text-lg font-light">
                {usuarioLogado.resumo}
              </p>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xl font-semibold">EXPERIÊNCIAS</p>
                  <p className="text-xl">
                    {usuarioLogado.experiencias[0].empresa}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-semibold">FORMAÇÃO</p>
                  <p className="text-xl">
                    {usuarioLogado.formacao[0].instituicao}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xl font-semibold">IDIOMAS</p>
                <p className="text-xl">{usuarioLogado.idiomas[0].idioma}</p>
              </div>

              <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
                <p className="text-xl font-semibold">SOFTSKILLS</p>
                <div className="flex flex-wrap gap-2">
                  {usuarioLogado.soft_skills.map((skill, i) => (
                    <p
                      key={i}
                      className="bg-[#859F74] text-white text-md p-1 px-2 rounded-full"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
                <p className="text-xl font-semibold">HABILIDADES</p>
                <div className="flex flex-wrap gap-2">
                  {usuarioLogado.habilidades.map((hab, i) => (
                    <p
                      key={i}
                      className="bg-[#859F74] text-white text-md p-1 px-3 rounded-full"
                    >
                      {hab}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 col-span-1 sm:col-span-3 mt-4">
                <Link
                  to="/dashboard"
                  className="font-semibold bg-[#859F74] p-4 rounded-2xl text-white border-4 border-[#859F74] shadow hover:bg-white hover:text-[#859F74] transition w-full sm:w-auto text-center"
                >
                  VISUALIZAR DASHBOARD
                </Link>

                <Link
                  to="/"
                  onClick={handleClick}
                  className="font-semibold bg-[#ff0000] px-6 py-2 rounded-2xl text-white border-2 border-[#ff0000] shadow hover:bg-white hover:text-[#ff0000] transition w-full sm:w-auto text-center"
                >
                  SAIR
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeuPerfil;
