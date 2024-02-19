import { Component, OnInit } from '@angular/core';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { Pensamento } from 'src/app/model/pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos:Pensamento[] = [];

  constructor(){

  }

  ngOnInit(): void {

  }

  adicionarPensamentos() {
    alert("mudar rota")
}

}
