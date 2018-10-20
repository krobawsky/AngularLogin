import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicio/auth.service';
import {Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
public email:string;
public password:string;
public registerForm: FormGroup;
public submitted = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.jquery_code();
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  get f() { return this.registerForm.controls; }

  onSubmitAddUser(){
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.authService.registerUser(this.email, this.password)
    .then( (res) =>{
      this.router.navigate(['/privado']);
    }).catch((err)=>{
      console.log(err);
      alert(err.message)
    });
  }

  jquery_code()
  {
    $(document).ready(function(){
      $('.modal').modal();
    });

  }

}
