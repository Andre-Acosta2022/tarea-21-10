import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [HomeComponent, ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

}