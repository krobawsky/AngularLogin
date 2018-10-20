import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-codigo-page',
  templateUrl: './codigo-page.component.html',
  styleUrls: ['./codigo-page.component.css']
})
export class CodigoPageComponent implements OnInit {

  public codigo:string;
  public codigoForm: FormGroup;
  public submitted = false;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.codigoForm = this.formBuilder.group({
            codigo: ['', [Validators.required]],
    });
  }

  get f() { return this.codigoForm.controls; }

  onSubmit(){
    this.submitted = true;

    if (this.codigoForm.invalid) {
      return;
    }

    if(this.codigo == "1234"){
      this.router.navigate(['/privado']);
    } else {
      alert("Codigo incorrecto");
    }

  }
}
