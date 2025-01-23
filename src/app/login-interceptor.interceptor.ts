import { HttpInterceptorFn } from '@angular/common/http';

export const loginInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  let token = localStorage.getItem('ngToken');
const cloneReq = req.clone({
  setHeaders:{
    Authorization:`Bearer ${token}`
  }
})

  return next(cloneReq);
};
