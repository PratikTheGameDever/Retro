//https://codecraft.tv/courses/angular/routing/router-guards/

import { CanActivate } from "@angular/router";

export class AlwaysAuthGuard implements CanActivate {
    canActivate() {
      console.log("AlwaysAuthGuard");
      return true;
    }
}

  