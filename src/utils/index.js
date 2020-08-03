function olar(page) {
  if (!window[`olar-${page}`]) {
    setTimeout(() => {
      window.console.info('%c Olar pessoa desenvolvedora! :D ', 'font-weight: bold; font-style: oblique; font-size:25px;');

      window.console.info('%c Bom ver você aqui, olha, estou a procura de uma nova oportunidade no mercado! ', 'font-weight: bold; font-style: oblique; font-size:20px;');

      window.console.info('%c Segue o contatinho, bóra trocar uma ideia: vempari@gmail.com', 'font-weight: bold; font-style: oblique; font-size:15px;');

      window.console.info(`\n Olá visitante, vejo que se interessou em ver meu código!
      \n Para facilitar seu trabalho fique a vontade para acessar meu perfil no GITHUB:;
      \n https://github.com/garouxl/
      \n Lá você poderá baixar esse projeto bem como todos os outros aqui listados;
      \n Ah, e não custa nada deixar aqui meu perfil do LinkedIn, né!
      \n https://www.linkedin.com/in/laalmeida/`);
    }, 3500);
  }
  window[`olar-${page}`] = window[`olar-${page}`] || {};
}

export default olar;
