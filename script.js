window.onload= function(){

    fetch('http://localhost/LivrosBackEnd/conteudo/novos')
    .then(
        response => response.json()
    )
    .then(
        data => {             
            data.forEach( livro => {
                console.log(livro); 
                //for (var i = 1; i < 4; i++) {
                
                
                let i = 1;
                let html = '';
                if ( i == 4  ) {
                html = "</div> <div class='row'>  <div class='card'> <img class='card-img-top' src= "+livro.imagem+" alt='Card image cap'>   <div class='card-body'> <h4 class='card-title'><a href='pgcompra.html' title='View Product'>"+livro.titulo+"</a></h4>  <p class='card-text'>Autor: "+livro.autor+" </p> <p class='card-text'>Ano lançamento: "+livro.anolancamento+" </p>  <p class='card-text'>Estado: "+livro.estado+" </p>  <div class='row'> <div class='col-dm-2'> <p class='btn btn-danger btn-block'> "+livro.Valor+" </p>  </div>  <div class='col-dm-4'>  <a href='#' class='btn btn-success btn-block'>Adicionar ao Carrinho</a>        "
                i = 1;
                }
                else { 
                html = "<div class='col-md-5'> <div class='card'> <img class='card-img-top' src= "+livro.imagem+" alt='Card image cap'>   <div class='card-body'> <h4 class='card-title'><a href='pgcompra.html' title='View Product'>"+livro.titulo+"</a></h4>  <p class='card-text'>Autor: "+livro.autor+" </p> <p class='card-text'>Ano lançamento: "+livro.anolancamento+" </p>  <p class='card-text'>Estado: "+livro.estado+" </p>  <div class='row'> <div class='col-dm-2'> <p class='btn btn-danger btn-block'> "+livro.Valor+" </p>  </div>  <div class='col-dm-4'>  <a href='#' class='btn btn-success btn-block'>Adicionar ao Carrinho</a>      "
                i++;
                }
            
                let livrosanun = document.getElementById("livrosanun");                                                  
                    
                    livrosanun.innerHTML = livrosanun.innerHTML + html; 

                                    
                    
                }
            //}
            )

             
        }
    )         
    fetch('http://localhost/LivrosBackEnd/conteudo/usados')
    .then(
        response => response.json()
    )
    .then(
        data => {             
            data.forEach( livro => {
                console.log(livro);
                    let livrosusado = document.getElementById("livrosusado");                    
                    let html= "<div class='row'> <div class='col-lg-6'> <div class='card'> <img class='card-img-top' src= "+livro.imagem+" alt='Card image cap'>   <div class='card-body'> <h4 class='card-title'><a href='pgcomprausado.html' title='View Product'>"+livro.titulo+"</a></h4>  <p class='card-text'>Autor: "+livro.autor+" </p> <p class='card-text'>Ano lançamento: "+livro.anolancamento+" </p>  <p class='card-text'>Estado: "+livro.estado+" </p>  <div class='row'> <div class='col-dm-2'> <p class='btn btn-danger btn-block'> "+livro.Valor+" </p>  </div>  <div class='col-dm-4'>  <a href='#' class='btn btn-success btn-block'>Adicionar ao Carrinho</a> </div>   </div> </div> </div>  </div>"
                    livrosusado.innerHTML = livrosusado.innerHTML + html; 

                                    
                    
                }
            )

             
        }
    )    
};

