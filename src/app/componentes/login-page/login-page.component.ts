import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicio/auth.service';
import { MessageService } from '../../services/message.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email:string;
  public password:string;
  public loginForm: FormGroup;
  public submitted = false;
  
  constructor(
    public authService: AuthService,
    public messageService: MessageService,
    public router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.jquery_code();
    this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmitLogin(){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    var form = {
      nombre: "Krobawsky",
      email: "ricardo.berrospi@tecsup.edu.pe",
      destino: this.email,
      asunto: "Codigo Verificación",
      mensaje: "1234"
    }

    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.messageService.sendMessage(form).subscribe(() => {
        console.log("Codigo enviado");
      })
      this.router.navigate(['/codigo']);
    }).catch((err) => {
      console.log(err);
      alert(err.message)
      //this.router.navigate(['/login']);
    });
  }


  onClickGoogleLogin() {
    this.authService.loginGoogle()
     .then((res) => {
         this.router.navigate(['/privado']);
     }).catch( err => console.log(err.message));
  }

  
  jquery_code()
  {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    $(document).ready(function(){
      $('.parallax').parallax();
    });
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });

  }
}
