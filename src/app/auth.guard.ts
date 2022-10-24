import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./admin/services/auth.service";

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else  {
            this.router.navigate(['admin', 'login'], {
                queryParams: {
                    loginParams: true,
                }
            });
        }
    }
}
