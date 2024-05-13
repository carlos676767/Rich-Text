const textNrea = document.querySelector("textarea") as HTMLTextAreaElement;
const itensIConfiguracoes = document.querySelectorAll("i") 
let contadorFontTamanho: number = 0;

interface Configuracoes {
  textNegrito: (text: HTMLTextAreaElement,  tamanhoFont: string) => void
}

const config: Configuracoes = {
  textNegrito: (text: HTMLTextAreaElement, tamanhoFont: string) => {text.style.fontSize = tamanhoFont},
};

const { textNegrito } = config;


const pegarInputValue = (): void => {
  textNrea.addEventListener("input", () => {
    console.log(textNrea.value);
    localStorage.setItem("dadosSalvos", textNrea.value);
  });
};

const salvarDadosInputLocalStorage = (): void => {
  const recuperarDados = localStorage.getItem("dadosSalvos");
  textNrea.value = `${recuperarDados}`;
};


const isimpar = (): void => {
  ++contadorFontTamanho;
  if (contadorFontTamanho % 2 !== 0) {
    textNegrito(textNrea, "30px");
  } else {
    textNegrito(textNrea, "15px");
  }
};

itensIConfiguracoes[0].addEventListener("click", () => {
 isimpar();
});

salvarDadosInputLocalStorage();
pegarInputValue();
