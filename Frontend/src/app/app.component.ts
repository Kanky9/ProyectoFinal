import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
]
})
export class AppComponent implements OnInit{
  title = 'Proyecto';

  constructor () {}
  
  ngOnInit(): void {

  }
  
}