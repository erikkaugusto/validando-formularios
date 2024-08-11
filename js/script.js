import ehUmCPF from "./valida-cpf.js";
const camposDoFormulario = document.querySelectorAll("[required]"); // todos os elementos do form obrigatórios

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo)); // blur é quando tira o foco
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }
}