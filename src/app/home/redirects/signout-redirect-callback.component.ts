import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-signout-redirect-callback',
  templateUrl: './signout-redirect-callback.component.html',
  styleUrls: ['./signout-redirect-callback.component.scss'],
})
export class SignoutRedirectCallbackComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.completeLogout().then((_) => {
      this.router.navigate(['/'], { replaceUrl: true });
    });
  }
}
