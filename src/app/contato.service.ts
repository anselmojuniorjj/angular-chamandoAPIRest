import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosURL = 'https://apirest-aj.herokuapp.com/api/produtos';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.contatosURL}`);
  }
}
