const textNrea = document.querySelector("textarea") as HTMLTextAreaElement;

const pegarInputValue = (): void => {
  textNrea.addEventListener("input", () => {
    console.log(textNrea.value);
  })
};


const salvarDadosInputLocalStorage = () => {
  
}


pegarInputValue()