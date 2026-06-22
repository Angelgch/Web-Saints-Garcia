import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sg-store');
// Variables de estado (inician cerradas en falso)
  isMenuOpen: boolean = false;
  isSearchOpen: boolean = false;

  // Intercambia el estado del menú lateral (abierto/cerrado)
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Opcional: Si abres el menú, asegúrate de cerrar la búsqueda para que no se crucen
    if (this.isMenuOpen) {
      this.isSearchOpen = false;
    }
  }

  // Intercambia el estado de la barra de búsqueda superior
  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    
    // Opcional: Si abres la búsqueda, cierra el menú lateral
    if (this.isSearchOpen) {
      this.isMenuOpen = false;
    }
  }
}