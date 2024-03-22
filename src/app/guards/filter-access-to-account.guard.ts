import { CanActivateFn } from '@angular/router';

export const filterAccessToAccountGuard: CanActivateFn = (route, state) => {
  const id = route.params['id'];
  return !(id==='1');
};
