import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ProductsComponent } from "./components/products/products.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, ProductsComponent]
})
export class AppComponent implements OnInit {
  imageIndex: number =1; 

  constructor(){

  }
  ngOnInit(): void {
     
  }
}
