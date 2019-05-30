import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicio/auth.service';
import { MessageService } from '../../services/message.service';
import { MyUserServService } from '../../servicio/my-user-serv-service.service';
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
  public ubi:boolean;
  
  constructor(
    public authService: AuthService,
    private userService: MyUserServService,
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
    
    var getIPAddress = function() {
      $.getJSON("https://jsonip.com?callback=?", function(data) {
        console.log("ip: " + data.ip);
      });
      
      $.getJSON('http://ip-api.com/json?callback=?', function(data) {
        console.log(JSON.stringify(data, null, 2));
        if(data.regionName == "Lima"){
          this.ubi = true;
        } else {
          this.ubi = false;
        }
        console.log("Verificar lugar: " + this.ubi);
      });

    };
    getIPAddress();
  }

  get f() { return this.loginForm.controls; }

  onSubmitLogin(){
    this.submitted = true;

    if (this.ubi = false) {
      alert("Imposible iniciar sesión debio a su ubicación");
      return;
    }

    if (this.loginForm.invalid) {
      return;
    }

    var codigo = Math.round(this.getRandom());

    var form = {
      nombre: "Krobawsky",
      email: "ricardo.berrospi@tecsup.edu.pe",
      destino: this.email,
      asunto: "Codigo Verificación",
      mensaje: codigo
    }

    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.messageService.sendMessage(form).subscribe(() => {
        console.log("Codigo enviado: " + codigo);
      })
      localStorage.setItem("correo", this.email);
      localStorage.setItem("codigo", codigo.toString());
      this.router.navigate(['/codigo']);
    }).catch((err) => {
      console.log(err);
      alert(err.message)
    });
  }

  onClickGoogleLogin() {

    if (this.ubi = false) {
      alert("Imposible iniciar sesión debio a su ubicación");
      return;
    }

    this.authService.loginGoogle()
     .then((res) => {
        this.router.navigate(['/privado']);
     }).catch( err => console.log(err.message));
  }

  getRandom() {
    return Math.random() * (9999 - 1000) + 1000;
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
