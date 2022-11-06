import {homeView} from "../view/homeView.js";
import {LoginAPI} from "../controllers/loginAPI.js"
import {loginView} from "../view/loginView.js";
import {genresMovie} from "./apiMovie/genresMovie.js"
import { Message } from "../view/message.js";

export class viewController{

    //checa a Existência do token
    checaToken(){
        if(localStorage.getItem("token")!=null){
            this.HomePage();
            const movie = new genresMovie()
            movie.GenresList()
        }
        else{
            this.LoginPage()
        }
    }

     HomePage(){
        let home = new homeView();
        //Pegando os elementos pais
        const header = document.querySelector("header");
        const main = document.querySelector("main");
        //colocando os elementos views
        header.innerHTML = home.headerView();
        main.innerHTML = home.mainView();
        this.SairHome()
    }
    
     LoginPage(){
        let login = new loginView();
        //Pegando elementos pais
        const main = document.querySelector("main")
        //colocando os elementos views
        main.innerHTML = login.caixaLogin();
        this.callLogin()
    }

    SairHome(){
        const sair = document.querySelector(".sair")
        sair.addEventListener("click",()=>{
                const nav = document.querySelector(".cabecalho");
                const container = document.querySelectorAll(".container");
                const mensagem = new Message();
                nav.outerHTML=""
                container.forEach(element => {
                    element.outerHTML=""
                });
                mensagem.insertMessage("Log Out Feito com Sucesso");
                localStorage.clear();
                this.checaToken();
        })
    }
    callLogin(){
        //pegando o botão
        const botao = document.querySelector(".login__submit");
        const mensagem = new Message();
        botao.addEventListener("click", ()=>{
            const login = document.querySelectorAll("input");
            if (login[1].value.length<=3){
                mensagem.insertMessage("Senha curta demais");
                return null
                // Chamar mensagem de error
            }
            let loginApi = new LoginAPI(login[0].value, login[1].value)
            loginApi.login().then((data)=>{
                this.checaToken();
            })
        })
    }
}
