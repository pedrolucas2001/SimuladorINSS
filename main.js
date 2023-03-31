let pessoa = []
const tabela = document.getElementById('tabela')


class Funcionario{
    constructor(nomeFunc,salarioBruto){
        this.nome = nomeFunc;
        this.salarioBruto =parseFloat(salarioBruto);
    
    }

   
    taxaINSS(){
        if(this.salarioBruto <= 1302.01){
            return this.txINSS = 7.5

        }else if(this.salarioBruto <=2571.29){
            return this.txINSS = 9

        }else if(this.salarioBruto<=3856.94){
            return this.txINSS= 12

        }else if(this.salarioBruto<=7507.49){
            return this.txINSS = 14

        }else if(this.salarioBruto>7507.49){
            return this.txINSS = 15

        }else{
            return this.txINSS = 15
        }
    }
    descontoINSS(){
        return this.salarioBruto * (this.txINSS / 100)
    }
    salLiquido(){
        this.taxaINSS()
        const desconto = this.descontoINSS()
        return this.salarioBruto -  desconto

    }
   
}

function apagarCampos(){
    let name = document.querySelector("#nome")
    name.value = "";
    let salario = document.querySelector("#salario")
    salario.value = "";

}
function listarFuncionarios(){
    const tabela = document.getElementById("tabelaDeUsuario")
    
    tabela.innerHTML = "" //limpando a tabela de usuario
    pessoa.forEach(pessoa => { //
        const linha = `<tr >
            <td>${pessoa?.nome}</td>
            <td>${pessoa?.salarioBruto}</td>
            <td>${pessoa?.taxaINSS()}</td>
            <td>${pessoa?.descontoINSS()}</td>
            <td>${pessoa?.salLiquido()}</td>
      </tr> `
      tabela.innerHTML += linha
    })

    console.log(...pessoa)


}

tabela.style.display = 'none'

const btn = document.querySelector("#send") // Criação do botão de cadastrar funcionário

btn.addEventListener("click", function (e){


    e.preventDefault();

    tabela.style.visibility ="visible"

    let nome = document.querySelector("#nome").value 

    let salario = document.querySelector("#salario").value  

    

   pessoa.push(new Funcionario(nome,salario)) //Adicionando funcionario no array
    
  


   apagarCampos();
   listarFuncionarios();
   

  
})























/*document.write(`Olá ${nomeFunc} ! Aqui está o resultado do seu salário com descontos detalhado\n
                    Salário bruto.: R$${salarioFunc.toFixed(2)}\n
                    Taxa de INSS...: ${txINSS()}%\n
                    Desconto.......: R$${descontoINSS().toFixed(2)}\n
                    Salário líquido: R$${salLiquido().toFixed(2)}`)*/





