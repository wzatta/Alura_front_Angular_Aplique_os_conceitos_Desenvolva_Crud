import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'dev',
    modelo: ''
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
