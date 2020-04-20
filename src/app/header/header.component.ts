import {Component, OnInit} from '@angular/core';
import {KeycloakSerurityService} from '../services/keycloak-security/keycloak-serurity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public securityService: KeycloakSerurityService) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.securityService.kc.logout();
  }

  onLogin() {
    this.securityService.kc.login();
  }

  onKcProfile() {
    this.securityService.kc.accountManagement();
  }

  isUserCompany() {
    return this.securityService.kc.hasRealmRole('company');
  }
}
