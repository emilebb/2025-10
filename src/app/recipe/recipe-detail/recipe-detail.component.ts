import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe| null = null;
  ingredienteMasUsado: string | null = null;

  constructor(private route: ActivatedRoute,
  private recipeService: RecipeService,
  private location: Location
){}

ngOnInit(): void {
    const Id = Number(this.route.snapshot.paramMap.get('id'));
    if (Id) {
      this.recipeService.getRecipeDetails(Id).subscribe((data: Recipe) => {
        this.recipe = data;
        this.calcularIngredienteMasUsado();
      });
    }
}
calcularIngredienteMasUsado(): void {
  if (!this.recipe?.ingredientes?.length) return;

  let maxCantidad = 0;
  let ingredienteMax = '';

  this.recipe.ingredientes.forEach((ing) => {
    const cantidadNumerica = parseFloat(ing.cantidad); 
    if (!isNaN(cantidadNumerica) && cantidadNumerica > maxCantidad) {
      maxCantidad = cantidadNumerica;
      ingredienteMax = ing.nombre;
    }
  });

  this.ingredienteMasUsado = ingredienteMax;
  }

  goBack(): void {
  this.location.back();
}
  
}
