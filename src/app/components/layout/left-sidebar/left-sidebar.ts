import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-left-sidebar',
  imports: [CommonModule, TooltipModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.scss'
})
export class LeftSidebar {
  hasActiveFilters = false;
}
