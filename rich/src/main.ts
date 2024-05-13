const textNrea = document.querySelector("textarea") as HTMLTextAreaElement;
const itensIConfiguracoes = document.querySelectorAll("i");
const isimparArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

interface Configuracoes {
  tamanhoFont: (text: HTMLTextAreaElement, configFont: string) => void;
  textNegrito: (text: HTMLTextAreaElement, negrito: string) => void
}

const config: Configuracoes = {
  tamanhoFont: (text: HTMLTextAreaElement, tamanhoFont: string) => {
    text.style.fontSize = tamanhoFont;
  },
  textNegrito:(text: HTMLTextAreaElement, negrito) => {
    text.style.fontWeight = negrito
  }
};

const { tamanhoFont, textNegrito } = config;

const pegarInputValue = (): void => {
  textNrea.addEventListener("input", () => {
    localStorage.setItem("dadosSalvos", textNrea.value);
  });
};

const salvarDadosInputLocalStorage = (): void => {
  const recuperarDados = localStorage.getItem("dadosSalvos");
  textNrea.value = `${recuperarDados}`;
};

const isimparTextNegritoEtamanho = (array: number[], number: number) => {
  ++array[0];
  if (array[number] % 2 !== 0) {
    tamanhoFont(textNrea, "30px");
    textNegrito(textNrea, "bolder");
  } else {
    tamanhoFont(textNrea, "15px");
    textNegrito(textNrea, "normal");
  }
};

itensIConfiguracoes[0].addEventListener("click", () => {
  isimparTextNegritoEtamanho(isimparArray, 0);
});

salvarDadosInputLocalStorage();
pegarInputValue();
