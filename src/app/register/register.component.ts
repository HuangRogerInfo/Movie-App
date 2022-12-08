import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  username: any = "";
  password: any = "";
  firstName: any = "";
  lastName: any = "";
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  submit(): any {
    this.authService
      .register(this.firstName, this.lastName, this.username, this.password)
      .subscribe(
        (userInfo: any) => {
          this.authService.connectedUser = userInfo;
          this.router.navigate(["films"]);
        },
        (error) => {
          console.log("Error", error);
        }
      );
  }
}
