import {NgModule} from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  constructor(){} 
  ngOnInit(): void {
    

  }

}

