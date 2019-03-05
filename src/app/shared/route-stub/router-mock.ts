import { Observable } from "rxjs";

export const routerMock = {
    navigateByUrl: (url: string) => {
      return url;
    },
    events: new Observable(),
    createUrlTree: (commands, navExtras = {}) => {},
    serializeUrl: (url:string)=>{
      return url;
    }
  };
