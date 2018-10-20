import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicio/auth.service';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {

  public emailUsuario: string;
  
  constructor(
    public authService: AuthService 
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth){
        this.emailUsuario = auth.email;
        console.log(this.emailUsuario);
      }
    });
  }

}
