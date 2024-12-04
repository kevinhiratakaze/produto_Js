let tituloPrincipal = document.createElement("h1");
tituloPrincipal.id = "produto";
tituloPrincipal.textContent = "Um Livro ai qualquer";

document.body.appendChild(tituloPrincipal);

let divisao = document.createElement("div");

divisao.innerHTML = `
    <h2>Este é o titulo do livro para leitura</h2>
    <img src="https://artrianon.com/wp-content/uploads/2019/08/o-livro-que-te-despertou-artrianon-ok.jpg?w=640" alt="imagemLivro">
    <h3>Preço do livro: R$ 50,00</h3>
    <p>Descrição do livro e que é um objeto que tem várias páginas, algumas com leitura visual, outras também,
         mas o importante é que todas tem algum tipo de leitura.
    </p>
`;
document.body.appendChild(divisao);
