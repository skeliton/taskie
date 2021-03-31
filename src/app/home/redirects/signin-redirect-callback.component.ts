import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-signin-redirect-callback',
  templateUrl: './signin-redirect-callback.component.html',
  styleUrls: ['./signin-redirect-callback.component.scss'],
})
export class SigninRedirectCallbackComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.completeLogin().then((user) => {
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    });
  }
}
