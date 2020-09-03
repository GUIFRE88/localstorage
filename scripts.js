// Busca o localStorage se existir, caso contrário inicializa como vazio
// JSON.parse - transforma a string em array
let favorites = JSON.parse(localStorage.getItem('favorites')) || []

// Função para buscar Imagens
async function getExternalImage(){

	// Busca imagem aleatoria
	const response = await fetch('https://source.unsplash.com/random')

	// Adiciona a imagem no HTML
	document.querySelector('.image').innerHTML = `<img src="${response.url}" >`

}

// Chama função
getExternalImage()

// Adiciona a função no Botão do Html
document.querySelector('button').onclick = function() {
	getExternalImage()
}

// Click na imagem
// Salvar ou remove do localStorage
document.querySelector('.image').onclick = function() {

	const imageContainer = document.querySelector('.image')

	// Busca a Url da imagem
	const imageSource = document.querySelector('.image img').src

	// Se a imagem ja existe no localStorage
	const index = favorites.indexOf(imageSource)
	const existeInLocalStorage = index != -1

	// Caso ache a imagem, retira do array
	if( existeInLocalStorage ) {

		favorites.splice( index, 1)

		// Remove a estrela de favoritos
		imageContainer.classList.remove('fav')

	} else {

		// Adiciona a imagem ao array
		favorites.push(imageSource)

		// Adiciona a estrela de favoritos
		imageContainer.classList.add('fav')
	}

	// Salva no localStorage no formato array
	localStorage.setItem('favorites', JSON.stringify(favorites))


}
