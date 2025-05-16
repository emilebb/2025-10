import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json';

  constructor(private http: HttpClient) { }

  // Consulta la lista de recetas
  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Consulta el detalle de una receta usando la URL específica por ID
  getRecipeDetailById(id: number): Observable<any> {
    const detailUrl = `https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/${id}/recipe.json`;
    return this.http.get<any>(detailUrl);
  }

}