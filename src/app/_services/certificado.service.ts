import { Certificado } from './../interface/certificado';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: Certificado[] = [];

  constructor() { }

  adicionarCertificado(certificado: Certificado){
    this.certificados.push({ ...certificado });
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
