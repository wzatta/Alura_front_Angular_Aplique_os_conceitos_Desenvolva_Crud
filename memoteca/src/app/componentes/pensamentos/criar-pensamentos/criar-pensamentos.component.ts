import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/model/pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'dev',
    modelo: 'modelo1'
  }

  constructor(){}

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("Conteudo Salvo "+this.pensamento.conteudo  + " "+ this.pensamento.autoria + " "+ this.pensamento.modelo);
   }

  cancelar() {

    this.pensamento.conteudo="";
    this.pensamento.autoria="";
    alert("Pensamento cancelado")
    }

}
