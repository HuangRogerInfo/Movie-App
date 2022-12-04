import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.router.navigate(["home"]);
    this.authService.connectedUser = null;
    this.authService.logout().subscribe(
      () => {},
      (error) => {
        console.log("Erreur lors de la déconnexion");
      }
    );
  }
}
