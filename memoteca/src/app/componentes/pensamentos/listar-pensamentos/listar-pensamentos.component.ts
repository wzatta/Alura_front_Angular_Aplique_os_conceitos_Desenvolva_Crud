import { Component, OnInit } from '@angular/core';
import { PensamentoComponent } from '../pensamento/pensamento.component';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [


    {
      conteudo: 'Passando Inormações para o componente Filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'AComponente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo et repellat quam eligendi. Labore architecto quam assumenda corporis vitae veniam quibusdam. Debitis explicabo deleniti modi esse dolorum, ullam nostrum quisquam blanditiis quibusdam totam laudantium tempore ad excepturi veniam aspernatur soluta aliquid perspiciatis nisi nulla sapiente recusandae omnis vero? Nihil tempore ratione nemo temporibus at id vel facilis delectus. Unde nesciunt quaerat facilis expedita dolorum itaque? Repellendus quibusdam sint voluptas molestias veritatis tempore repudiandae, libero ducimus ratione porro quidem molestiae explicabo, officia nemo? Nisi tempora ea fugiat mollitia. Animi inventore repudiandae distinctio minus quod. Aliquid itaque neque quos eveniet harum distinctio.',
      autoria: 'AComponente filho',
      modelo: 'modelo2'
    }

  ];

  constructor(){

  }

  ngOnInit(): void {

  }

  adicionarPensamentos() {
    alert("mudar rota")
}

}
