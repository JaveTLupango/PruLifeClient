export class ClientParentInfo {
  id:number = 0;
  user_id: number = 0;
  pi_id: number = 0;
  request_id : number = 0;
  fname : string = '';
  lname : string = '';
  mname : string = ''
  bday : Date = new Date;
  type : number = 0;
  string_type: string = '';
  is_not_death : boolean = false;
  cause_of_death : string = '';
  is_not_illness : boolean = false;
  illness : string = '';
  age_diagnosis: number = 0;
}
