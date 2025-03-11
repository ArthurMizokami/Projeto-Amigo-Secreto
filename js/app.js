let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');   
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);

    if (nomeAmigo.value == '') {
        alert('Digite o nome de um amigo.');
    } else 

    if (listaAmigos.textContent == '') {
    listaAmigos.textContent = nomeAmigo.value;
    } else { 
    listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;    
    }
    nomeAmigo.value = ' ';

    atualizarLista();
    atualizarSorteio();

}

function sortear() {
   embaralha(amigos);  

    let sorteio = document.getElementById('lista-sorteio');

   for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
   }
   }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    amigos = [];   
    document.getElementById('lista-amigos').innerHTML = ' '
    document.getElementById('lista-sorteio').innerHTML = ' '
    
}