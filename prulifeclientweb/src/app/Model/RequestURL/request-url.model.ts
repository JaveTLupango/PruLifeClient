export class RequestURL {
    id :string = '';
    user_id: number = 0;
    receipt_alias : string = '';
    receipt_email : string = '';
    is_active : boolean = false;
    is_deleted : boolean = false;
    gen_id : string = '';
    created_at : Date = new Date();
    updated_at : Date = new Date();
}

export class CreateRequestURL
{
  receipt_alias : string = '';
  receipt_email : string = '';
  user_id: number = 0;
}
