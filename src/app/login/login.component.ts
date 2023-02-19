import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) { }

  loginForm=new FormGroup ({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.pattern(/^[A-Z][a-z0-9]{3,9}$/),Validators.required])
  })
  
 submitLoginForm(loginForm:FormGroup)
  {
  //  console.log(loginForm.value);
  
  this._AuthService.login().subscribe((resp)=>{

    // console.log(resp);
    const user=resp.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password===this.loginForm.value.password
    })
    if(user)
    {
      alert('login success');
      this._Router.navigate(['./home']);
    }else
    {
      alert('user not found')
    }
  })
  
}
  
  ngOnInit(): void {
  }

}
