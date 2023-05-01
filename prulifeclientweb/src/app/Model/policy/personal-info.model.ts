import { HttpErrorResponse } from '@angular/common/http';
export class PersonalInfo {
    id:number = 0;
    user_id : number = 0;
    request_id : number = 0;
    fname : string = '';
    lname : string = '';
    mname : string = '';
    bday : Date = new Date;
    contact_no : string = '';
    email : string = '';
    gender : number = 0;    
}  

export class PersonalInfoError {
    message : string = '';
    StatusCode : number = 0;
    errors : PI_Error | undefined;
}

export class PI_Error
{
    id:number[] | undefined;
    user_id : number[] | undefined;
    request_id : number[] | undefined;
    fname : string[] | undefined;
    lname : string[] | undefined;
    mname : string[] | undefined;
    bday : Date[] | undefined;
    contact_no : string[] | undefined;
    email : string[] | undefined;
    gender : number[] | undefined;    
}