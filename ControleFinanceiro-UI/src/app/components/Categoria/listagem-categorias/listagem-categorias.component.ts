import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/Categorias.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listagem-categorias',
  templateUrl: './listagem-categorias.component.html',
  styleUrls: ['./listagem-categorias.component.css']
})
export class ListagemCategoriasComponent implements OnInit {

  categorias = new MatTableDataSource<any>();
  displayedColumns: string[];

  constructor( private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriaService.PegarTodos().subscribe(resultado => {
      this.categorias.data = resultado;
    });
    this.displayedColumns = this.ExibirColunas();
  }

  ExibirColunas(): string[]{
    return ['nome', 'icone', 'tipo','ações']
  }

}
