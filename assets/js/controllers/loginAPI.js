export class LoginAPI{
    constructor(user,password){
        this.item = { email: user, password: password };
    }
    async login() {
        return new Promise((req,res)=>{
            this.loginAPI(this.item).then((data) => {
                if (data) {
                    const lista = localStorage.getItem('token')
                    if (lista) {
                        console.log("Entrou")
                        req(lista)
                    }
    
                } else {
                    console.log("Erro no login")
                }
    
            }).catch((err) => res(err))
        })
    }
     loginAPI(item) {
        return new Promise(req => {
            this.conectaAPI(item).then((data) => {
                if (data.status ==200) {
                     data = data.json()
                    data.then((result) => {
                        localStorage.setItem("token", JSON.stringify(result));
                        req(result);                      
                    })
                }
            }).catch(() => console.log("Falha ao conectar a API"))

        })

    }
    async conectaAPI(item) {
        let result = await fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
            
        });
        // console.log(result.status);
        // Chamar mensagem de error
        return result
    }
    
}