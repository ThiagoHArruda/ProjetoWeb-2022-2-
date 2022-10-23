export class loginView{
    caixaLogin(){
        return `
            <section class="container">
            <div class="login">
                <p class="login__text texto">Insira seu login</p>
                <input type="email" placeholder="Login" class="login__user texto">
                <input type="password" placeholder="Senha" class="login__password texto"></input>
                <button class="login__submit texto">Entrar</button>
            </div>
        </section>
            `
    }

}