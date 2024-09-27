import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './NavBar/navbar/navbar.component';
import { HeroComponent } from './HeroSection/hero/hero.component';
import { SobreMiComponent } from './AboutMe/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './Experience/experiencia/experiencia.component';
import { ProyectosComponent } from './PtoyectList/proyectos/proyectos.component';
import { ArticulosComponent } from './Articles/articulos/articulos.component';
import { ComentariosComponent } from './Coments/comentarios/comentarios.component';
import { ContactoComponent } from './Contact/contacto/contacto.component';
import { FooterComponent } from './Footer/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterOutlet, 
    NavbarComponent,
    HeroComponent,
    SobreMiComponent,
    ExperienciaComponent,
    ProyectosComponent,
    ArticulosComponent,
    ComentariosComponent,
    ContactoComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'napster-page';
}
