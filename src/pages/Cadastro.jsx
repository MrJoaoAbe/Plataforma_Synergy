import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Cadastro() {

    const navigate = useNavigate()

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [idioma, setIdioma] = useState("");
    const [email, setEmail] = useState("");
    const [cargo, setCargo] = useState("");
    const [area, setArea] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [foto, setFoto] = useState("");
    const [resumo, setResumo] = useState("");
    const [habilidade1, setHabilidade1] = useState("");
    const [habilidade2, setHabilidade2] = useState("");
    const [habilidade3, setHabilidade3] = useState("");
    const [softSkill1, setSoftSkill1] = useState("");
    const [softSkill2, setSoftSkill2] = useState("");
    const [softSkill3, setSoftSkill3] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [formacao, setFormacao] = useState("");
    const [curso, setCurso] = useState("");
    const [inicio, setInicio] = useState("0");
    const [fim, setFim] = useState("0");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        if (nome === '' || idade === '' || idioma === '' || email === '' || cargo === '' || area === '' || localizacao === '' || foto === ''
            || resumo === '' || habilidade1 === '' || habilidade2 === '' || habilidade3 === '' || softSkill1 === '' || softSkill2 === '' || softSkill3 === '' || experiencia === ''
            || formacao === '' || curso === '' || inicio === '' || fim === '' || senha === '' || confirmarSenha === ''
        ) {
            alert("Preencha todos os campos")
        }
        else if (senha !== confirmarSenha) {
            alert("A senhas precisam ser iguais")
        }
        else {
            const novoUsuario = {
                nome: nome,
                email: email,
                senha: senha,
                foto: foto,
                cargo: cargo,
                resumo: resumo,
                localizacao: localizacao,
                area: area,
                habilidades: [habilidade1, habilidade2, habilidade3],
                soft_skills: [softSkill1, softSkill2, softSkill3],
                darkMode: false,
                idade: idade,
                experiencias: [
                    {
                        empresa: experiencia,
                        cargo: cargo,
                        inicio: inicio,
                        fim: fim,
                        descricao: "texto",
                    },
                ],
                formacao: [
                    {
                        instituicao: formacao,
                        curso: curso,
                    },
                ],
                projetos: [
                    { nome: "aura_calculator", linguagem: "JavaScript", url: "https://github.com" },
                    { nome: "portfolio", linguagem: "JavaScript", url: "https://github.com" },
                ],
                certificacoes: ["AWS", "SQL"],
                idiomas: [{ idioma: idioma, nivel: "Fluente" }],
                seguidores: [],
                seguindo: [],
                avaliacoes: 0,
                postagens: [],
            };

            const usuariosExistentes = JSON.parse(localStorage.getItem("Usuarios")) || [];
            usuariosExistentes.push(novoUsuario);

            localStorage.setItem("Usuarios", JSON.stringify(usuariosExistentes));
            localStorage.setItem("UsuarioLogado", JSON.stringify(novoUsuario));

            alert("Usuário Criado");
            alert(`Bem vindo ${nome}`);
            navigate("/");

        }
    }

    return (
        <div className="bg-[#DFDFDF] min-h-screen flex items-center justify-center p-20">
            <div className="w-200 bg-white rounded-4xl shadow-2xl flex flex-col">
                <h1 className="font-extralight text-4xl text-[#859F74] p-20 flex items-center ml-10 mt-15">CRIAR CONTA</h1>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-0">
                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                        <div className="flex flex-row gap-8">
                            <input type="number" className="w-60 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Idade" onChange={(e) => setIdade(e.target.value)} />
                            <input type="text" className="w-60 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Idioma" onChange={(e) => setIdioma(e.target.value)} />
                        </div>
                        <input type="email" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                        <div className="flex flex-row gap-8">
                            <input type="text" className="w-60 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Cargo" onChange={(e) => setCargo(e.target.value)} />
                            <input type="text" className="w-60 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Área" onChange={(e) => setArea(e.target.value)} />
                        </div>

                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Localização" onChange={(e) => setLocalizacao(e.target.value)} />
                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Adicionar Foto" onChange={(e) => setFoto(e.target.value)} />
                        <textarea name="resumo" id="resumo" className="w-130 h-50 border-gray-200 border-4 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Resumo" onChange={(e) => setResumo(e.target.value)} ></textarea>
                        <div className="flex flex-row gap-5">
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Habilidades Técnicas" onChange={(e) => setHabilidade1(e.target.value)} />
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Habilidades Técnicas" onChange={(e) => setHabilidade2(e.target.value)} />
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Habilidades Técnicas" onChange={(e) => setHabilidade3(e.target.value)} />
                        </div>
                        <div className="flex flex-row gap-5">
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Soft Skills" onChange={(e) => setSoftSkill1(e.target.value)} />
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Soft Skills" onChange={(e) => setSoftSkill2(e.target.value)} />
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Soft Skills" onChange={(e) => setSoftSkill3(e.target.value)} />
                        </div>

                        <textarea name="experiencia" id="experiencia" className="w-130 h-30 border-gray-200 border-4 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Experiência" onChange={(e) => setExperiencia(e.target.value)}></textarea>

                        <div className="flex flex-row gap-5">
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Formação" onChange={(e) => setFormacao(e.target.value)} />
                            <input type="text" className="w-30 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Curso" onChange={(e) => setCurso(e.target.value)} />
                            <input type="date" className="w-20 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Inicio" onChange={(e) => setInicio(e.target.value)} />
                            <input type="date" className="w-20 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Fim" onChange={(e) => setFim(e.target.value)} />
                        </div>

                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-5" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" placeholder="Confirmar Senha" onChange={(e) => setConfirmarSenha(e.target.value)} />
                        <button type="submit" className="bg-[#859F74] w-80 h-15 rounded-2xl text-white mt-15 mb-20">CRIAR CONTA</button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Cadastro