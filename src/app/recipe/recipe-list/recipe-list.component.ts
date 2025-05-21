import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}
  ngOnInit(){
    this.recipeService.getRecipes().subscribe((data:any[])=>{
      this.recipes = data;
    })
      
  }
  onSelect(recipe: Recipe) {
    this.router.navigate(['/recipe', recipe.id]);
  }

}
 
