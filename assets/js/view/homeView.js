export class homeView{
    mainView(){
        return `
        <section class="container">
            <div class="pesquisa__links">
                <div class="pesquisa">
                    <i class="fas fa-search lupa"></i>

                    <input type="search" name="Pesquisar" alt="Pesquisar Loja" placeholder="Pesquisar loja" class="pesquisa__input">
                </div>
                <div class="link link__esquerda">
                    <a href="" class="link__texto texto">Descobrir</a>
                    <a href="" class="link__texto texto">Navegar</a>
                    <a href="" class="link__texto texto">Novidades</a>

                </div>
                <div class="link link__direita">
                    <i class="fa-regular fa-circle-check link__icon"></i>
                    
                    <i class="fa-solid fa-cart-shopping link__icon"></i>

                    <a href="" class="link__texto texto">Lista de Desejos</a>
                    <a href="" class="link__texto texto">Carrinho</a>
                </div>
            </div>
        </section>
        <section class="container">
            <div class="expo">
                <div class="expo__poster">
                    <span class="expo__poster-conteudo">
                        <div class="poster__descricao">
                            <p class="poster__descricao-resumo texto"></p>
                            <p class="poster__descricao-preco texto">R$DIMDIM,DIM</p>
                        </div>
                        <div class="poster__descricao-btn">
                            <button class="poster__descricao-comprar texto">Compre Agora</button>
                        </div>
                    </span>
                    
                </div>
                <div class="expo__poster">
                    <span class="expo__poster-conteudo">
                        <div class="poster__descricao">
                            <p class="poster__descricao-resumo texto"></p>
                            <p class="poster__descricao-preco texto">R$DIMDIM,DIM</p>
                        </div>
                        <div class="poster__descricao-btn">
                            <button class="poster__descricao-comprar texto">Compre Agora</button>
                        </div>
                    </span>
                    
                </div>
                
                
                <div class="expo__lista">
                    <ul>

                    </ul>
                </div>
            </div>
        </section>
        
        `
    }
    headerView(){
        return `
        <nav class="cabecalho">
            <div class="cabecalho__logo">
                <a href="#" class="cabecalho__logo-link"></a>
            </div>
            
            <div class="cabecalho__menu-esquerda">
                <ul class="cabecalho__options">
                    <li class="cabecalho__options-li">
                        <a href="#" class="cabecalho__texto texto">
                            <p>Store</p>
                        </a>
                        <div class="cabecalho__caixa-azul"></div>
                    </li>
                    <li class="cabecalho__options-li">
                        <a href="#" class="cabecalho__texto texto">
                            <p>Perguntas Frequentes</p>
                        </a>
                        <div class="cabecalho__caixa-azul"></div>
                    </li>
                    <li class="cabecalho__options-li">
                        <a href="#" class="cabecalho__texto texto">
                            <p>Ajuda</p>
                        </a>
                        <div class="cabecalho__caixa-azul"></div>
                    </li>
                    <li class="cabecalho__options-li">
                        <a href="#" class="cabecalho__texto texto">
                            <p>Unreal Engine</p>
                        </a>
                        <div class="cabecalho__caixa-azul"></div>
                    </li>
                </ul>
            </div>
            <div class="cabecalho__menu-direita">
                <i class="fa-solid fa-bars cabecalho__icon-direita"></i>
                <ul class="cabecalho__options">
                    <li class="cabecalho__options-li">
                        <a href="#" class="cabecalho__texto texto">
                            <i class="fa-solid fa-globe"></i>
                        </a>
                    </li>
                    <li class="cabecalho__options-li sair">
                        <i class="fas fa-user"></i>
                        <a href="#" class="cabecalho__texto texto">
                            <p>Sair</p>
                        </a>
                    </li>
                    <li class="cabecalho__options-li">
                        <a href="#" class="cabecalho__texto texto">
                            <p>Baixe Epic Games</p>
                        </a>
                    </li>
                </ul>
            </div>

        </nav>
        `
    }
    
}