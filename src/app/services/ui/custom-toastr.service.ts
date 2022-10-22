import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { 
  }
  message(message:string, title:string, toasterOptions:Partial<ToasterOptions> ){
    this.toastr[toasterOptions.messagType](message,title,{
      positionClass : toasterOptions.position
    });   
  }
}

export class ToasterOptions{
  messagType: ToastrMessageType;
  position: ToastrPosition
}

export enum ToastrMessageType{
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}

export enum ToastrPosition{
TopRight = "toast-top-right",
BottomRight = "toast-bottom-right",
BottomLeft = "toast-bottom-light",
TopLeft = "toast-top-left",
TopFullWidth = "toast-top-full-width",
BottomFullWidth = "toast-bottom-full-width",
TopCenter = "toast-top-center",
BottomCenter = "toast-bottom-center"
}
