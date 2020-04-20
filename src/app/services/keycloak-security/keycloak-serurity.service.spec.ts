import { TestBed } from '@angular/core/testing';

import { KeycloakSerurityService } from './keycloak-serurity.service';

describe('KeycloakSerurityService', () => {
  let service: KeycloakSerurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloakSerurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
