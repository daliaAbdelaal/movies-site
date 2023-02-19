import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router) {}

  registerForm=new FormGroup ({

    first_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    last_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.pattern(/^[A-Z][a-z0-9]{3,9}$/),Validators.required])
  })

  submitRegisterForm(registerForm:any)
  {
  //  console.log(registerForm.value)
  this._AuthService.register(registerForm.value).subscribe({
    next:(resp)=>{
      alert('register done');
      this.registerForm.reset();
      this._Router.navigate(['./login'])
    },
    error:()=>{
      alert('something went wrong')
    }
  })

  }



  ngOnInit(): void {
  }

}
