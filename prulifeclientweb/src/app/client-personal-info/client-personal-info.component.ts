import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalInfoService } from '../shared/services/policy/personal-info.service';
import { PersonalInfo } from '../Model/policy/personal-info.model';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-client-personal-info',
  templateUrl: './client-personal-info.component.html',
  styleUrls: ['./client-personal-info.component.css']
})
export class ClientPersonalInfoComponent {
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}
    Req_id: number = 0;
    isValid:boolean = true;
    rowCount : number = 0;
    isDisabled: boolean = false;
    fname : string = '';
    lname : string = '';
    mname : string = '';
    bday : Date = new Date;
    contact_no : string = '';
    email : string = '';
    gender : number = 0;
    id : number = 0;

  personalmodel : PersonalInfo = new PersonalInfo();
  personalInfo: PersonalInfoService = new PersonalInfoService(this.http);
  ngOnInit()
  {
    this.Req_id = this.route.snapshot.params['id'];
    console.log(this.Req_id);
    this.personalInfo.validatePersonalInfo(this.Req_id).subscribe(
      data =>
      {
        console.log(data);
        if(data.StatusCode == -100)
        {
          Swal.fire({
            title: 'Something Wrong!',
            text: data.message,
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.isValid = false;
            }
          })
        }
        else if(data.StatusCode == 200)
        {
          if(data.dataCount > 0)
          {
            this.rowCount = data.dataCount;
            this.personalmodel = data.data[0];
            console.log(this.personalmodel);
            this.fname = this.personalmodel.fname;
            this.lname = this.personalmodel.lname;
            this.mname = this.personalmodel.mname;
            this.bday = this.personalmodel.bday;
            this.email = this.personalmodel.email;
            this.gender = this.personalmodel.gender;
            this.contact_no = this.personalmodel.contact_no;
            this.id = this.personalmodel.id;
          }        
          else{
            this.rowCount = 0;  
          }                  
          this.isValid = true;
        }
        else{          
          this.isValid = false;
        }        
      }
    );
  }

  onsubmit()
  {
    this.personalmodel.fname = this.fname;
    this.personalmodel.lname = this.lname;
    this.personalmodel.mname = this.mname;
    this.personalmodel.bday = this.bday;
    this.personalmodel.email = this.email;
    this.personalmodel.gender = this.gender;
    this.personalmodel.contact_no = this.contact_no;
    this.personalmodel.request_id = this.Req_id;
    console.log(this.personalmodel);
    if(this.rowCount == 0)
    {
      this.personalInfo.createPersonalInfo(this.personalmodel).subscribe(
        data =>
        {
          if(data.StatusCode == 200)
          {
            Swal.fire(
              'Personal Information is successfuly Saved!',
              data.message,
              'success'
            )
            this.router.navigate(['/policy-client-address/'+ this.Req_id]);
          }
          else{
            Swal.fire(
              'Something went wrong!',
              data.message,
              'error'
            )
          }
        }
      );
    }
    else{
        this.personalmodel.id = this.id;
        //this.router.navigate(['/policy-client-address/'+ this.Req_id]);
        this.personalInfo.updatePersonalInfo(this.personalmodel).subscribe(
          data =>
          {
            if(data.StatusCode == 200)
            {
              Swal.fire(
                'Personal Information is successfuly Saved!',
                data.message,
                'success'
              )
              this.router.navigate(['/policy-client-address/'+ this.Req_id]);
            }
            else{
              Swal.fire(
                'Something went wrong!',
                data.message,
                'error'
              )
            }
          }
        );
        // Swal.fire({
        //   title: 'Do you want to save the changes?',
        //   showDenyButton: true,
        //   showCancelButton: true,
        //   confirmButtonText: 'Save',
        //   denyButtonText: `Don't save`,
        // }).then((result) => {
        //   /* Read more about isConfirmed, isDenied below */
        //   if (result.isConfirmed) {
        //     Swal.fire('Saved!', '', 'success')
        //   } else if (result.isDenied) {
        //     Swal.fire('Changes are not saved', '', 'info')
        //   }
        // })
    }
  }

  onchangeBday()
  { 
    console.log( this.bday)
    const convertAge = new Date(this.bday);
    let timeDiff = Math.abs(Date.now() - convertAge.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    console.log(age)
  }
}
