const textNrea = document.querySelector("textarea") as HTMLTextAreaElement;

const pegarInputValue = (): void => {
  textNrea.addEventListener("input", () => {
    console.log(textNrea.value);
    localStorage.setItem("dadosSalvos", textNrea.value)
  })
};


const salvarDadosInputLocalStorage = () : void => {
  const recuperarDados = localStorage.getItem("dadosSalvos");
  textNrea.value = `${recuperarDados}`;
};

salvarDadosInputLocalStorage()
pegarInputValue();