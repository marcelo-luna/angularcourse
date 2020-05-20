import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

declare let toastr:any;

@Injectable()
export class ToastService{

    success(message: string, title: string){
        toastr.success(message, title);
    }

    error(message: string, title: string){
        toastr.error(message, title);
    }

    warning(message: string, title: string){
        toastr.warning(message, title);
    }
}