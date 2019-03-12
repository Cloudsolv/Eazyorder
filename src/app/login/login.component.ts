import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
//import { User } from  '../user';
//import { AuthService } from  '../auth.service';
 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  errorMessage: string;
  submitted = false;
  constructor(
    private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }
   return = '';

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => this.return = params['return'] || '/dashboard');
    this.buildLoginForm();
  }

  /**
	 * builds the login form
	 */
  buildLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  get f() { return this.loginForm.controls; }
 

  loginHandler() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
     //this.authService.login(this.loginForm.value);
     //this.router.navigateByUrl('/dashboard');

   // var formemail = JSON.stringify(this.loginForm.value.email);
   // var pwd = JSON.stringify(this.loginForm.value.password);

    // if(formemail=="admin@eezeeorder.com"){
    //   alert('SUCCESS!! :-)\n\n' + 'welcome Admin');
    //}else{
    //  alert('SUCCESS!! :-)\n\n' + 'Invalid User')
   // }
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value.email))
}
}
