import { CertificadoService } from './_services/certificado.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BaseUiComponent,  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;

  constructor(private CertificadoService: CertificadoService){ }

  ngOnInit(): void {
      const certificados = localStorage.getItem('certificados');
      this.CertificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
