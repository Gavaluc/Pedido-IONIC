import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categorias = [
    { codigo: 1, nome: 'Pizzas Individuais'    },
    { codigo: 2, nome: 'Hambúrgueres Caseiros'  },
    { codigo: 3, nome: 'Fritos'    },
    { codigo: 4, nome: 'Dogão' }
  ]

  public slideOpts = {
    slidesPerView: 3
  }

  public produtos = [
    { codigo: 1, categoria: 3, descricao: 'A Coxinha de Frango é o salgado mais popular do Brasil e, convenhamos, é irresistível!', nome: 'Coxinha de frango - 5 un', valor: 15.90, imagens: ['coxinha-1-1.jpg'], visibled: false },
    { codigo: 2, categoria: 3, descricao: 'Risoles de carne moída. Contém 10 unidades de 100g cada.', nome: 'Risoles de Carne - 10 un', valor: 30.00, imagens: ['risoles-1-1.jpg'], visibled: false },
    { codigo: 3, categoria: 3, descricao: '10 unidades de pura delícia! Compre agora nossas bolinhas de queijo!', nome: 'Bolinha de Queijo - 10 un', valor: 10.00, imagens: ['bolinha-2-1.jpg'], visibled: false },
    { codigo: 4, categoria: 1, descricao: 'Deliciosa pizza marguerita, com gosto marcante da mussarela de búfala e um toque de manjericão. Serve UMA pessoa.', nome: 'Marguerita com Queijo de Búfala', valor: 31.90, imagens: ['pizza-1-6.jpg'], visibled: false },
    { codigo: 5, categoria: 1, descricao: 'Para os amantes de cheddar, a cheddarbresa é uma delícia! MUITO cheddar com pedaços de calabresa para saciar sua vontade.', nome: 'Cheddar com Calabresa', valor: 35.45, imagens: ['pizza-2-6.jpg'], visibled: false },
    { codigo: 6, categoria: 1, descricao: 'Para as pessoas que gostam do "tradicional", a nossa queridinha: Frangupiry.', nome: 'Frango com Catupiry', valor: 29.50, imagens: ['pizza-3-6.jpg'], visibled: false },  
    { codigo: 7, categoria: 2, descricao: 'Delicioso cheddar duplo, para se lambuzar!', nome: 'Cheddar Duplo', valor: 41.30, imagens: ['hamburg-1-1.jpg' ], visibled: false },
    { codigo: 8, categoria: 2, descricao: 'Pão de hamburguer, duas carnes, queijo prato, fatia de queijo cheddar, bacon e molho da casa.', nome: 'Duplo Bacon', valor: 45.50, imagens: ['hamburg-2-1.jpg' ], visibled: false },
    { codigo: 9, categoria: 2, descricao: 'O hambúrguer vegetariano de soja é uma versão muito saborosa e saudável para preparar um lanche gourmet em casa!', nome: 'Vegano com Carne de Soja', valor: 24.99, imagens: ['hamburg-3-1.jpg'], visibled: false },
    { codigo: 10, categoria: 4, descricao: 'Mais simples que tudo na vida, mas que saceia a vontade enorme de um dogão.', nome: 'Simples', valor: 12.00, imagens: ['dogao-1-1.jpg'], visibled: false },
    { codigo: 11, categoria: 4, descricao: '4 salsichas, maionese, ketchup, mostarda, tomate, batata palha, frango e catupiry.', nome: 'Duplo com Frango Catupiry', valor: 21.00, imagens: ['dogao-2-1.jpg'], visibled: false },
    { codigo: 12, categoria: 4, descricao: 'Pão, salsicha, batata palha, maionese, catchup, tomate, 2 fatias de mussarela, 2 fatias de presunto, orégano.', nome: 'Duplo de Pizza', valor: 19.00, imagens: ['dogao-3-1.jpg'], visibled: false }  
  ]

  public pathImgs = '../../assets/img/';

  public selected = 0;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }

}
