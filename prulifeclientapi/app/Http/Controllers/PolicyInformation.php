<?php

namespace App\Http\Controllers;

use App\Models\ClientAddressInfo;
use App\Models\ClientParentInfo;
use App\Models\ClientPersonalInfo;
use App\Models\ClientSiblingsInfo;
use App\Models\RequestUrl;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class PolicyInformation extends Controller
{
    public function validatePolicy(Request $request)
    {
        $policy = RequestUrl::where([
            ['id', $request->id],
            ['is_active', 1],
            ['is_deleted', 0],
            ['is_submitted', 0]
        ])->get();
        return response()->json([
            'message'=>'Success',
            'data'=>$policy,
            'dataCount'=>count($policy),
            'StatusCode'=>200
        ]);
    }

    public function validateClientPersonalinfo(Request $request)
    {
        $policy = RequestUrl::where([
                            ['id', $request->id],
                            ['is_active', 1],
                            ['is_deleted', 0],
                            ['is_submitted', 0]
                        ])->get();
        If(count($policy) == 0)
        {
            return response()->json([
                'message'=>'Request Id is invalid!',
                'StatusCode'=>-100
            ]);
        }
        
        $retval = ClientPersonalInfo::where('request_id', $request->id)->get();
        return response()->json([
            'message'=>'Success',
            'data'=>$retval,
            'dataCount'=>count($retval),
            'StatusCode'=>200
        ]);
    }

    public function InsertPersonalPolicyInfo(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'email'=>'required:email',
            'fname'=>'required',
            'lname'=>'required',
            'mname'=>'required',
            'bday'=>'required',
            'contact_no'=>'required',
            'gender'=>'required',
            'user_id'=>'required',
            'request_id'=>'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

        if($request->request_id == 0)
        {
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>"Request ID is Invalid!",
                'StatusCode'=>422
            ]);
        }

        $retval = ClientPersonalInfo::create(
            [
                'user_id'=> $request->user_id,
                'email'=> $request->email,
                'request_id'=> $request->request_id,
                'fname'=> $request->fname,
                'lname'=> $request->lname,
                'mname'=> $request->mname,
                'bday'=> $request->bday,
                'contact_no'=> $request->contact_no,
                'gender'=> $request->gender
            ]
        );

        return response()->json([
            'message'=>'Personal Information Saved!',
            'data'=>$retval,
            'StatusCode'=>200
        ]);
    }
    public function UpdatePersonalPolicyInfo(Request $request)
    {

        $validator = Validator::make($request->all(),
        [
            'email'=>'required:email',
            'fname'=>'required',
            'lname'=>'required',
            'mname'=>'required',
            'bday'=>'required',
            'contact_no'=>'required',
            'gender'=>'required',
            'user_id'=>'required',
            'request_id'=>'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

        if($request->request_id == 0)
        {
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>"Request ID is Invalid!",
                'StatusCode'=>422
            ]);
        }

        $retval = ClientPersonalInfo::where('id', $request->id)
                  ->update([
                    'user_id'=> $request->user_id,
                    'email'=> $request->email,
                    'request_id'=> $request->request_id,
                    'fname'=> $request->fname,
                    'lname'=> $request->lname,
                    'mname'=> $request->mname,
                    'bday'=> $request->bday,
                    'contact_no'=> $request->contact_no,
                    'gender'=> $request->gender
                  ]);

        return response()->json([
            'message'=>'Personal Information Saved!',
            'data'=>$retval,
            'StatusCode'=>200
        ]);
    }

    public function validateClientAddress(Request $request)
    {
        $retval = ClientAddressInfo::where('request_id', $request->id)->get();
        return response()->json([
            'message'=>'Success',
            'data'=>$retval,
            'dataCount'=>count($retval),
            'StatusCode'=>200
        ]);
    }

    public function InsertClientAddress(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'user_id'=>'required',
            'request_id'=>'required',
            'pi_id'=>'required:email',
            'house_no'=>'required',
            'subd_name'=>'required',
            'street_name'=>'required',
            'barangay'=>'required',
            'municipality'=>'required',
            'city'=>'required',
            'province'=>'required',
            'zipcode'=>'required',
            'address_type'=>'required',
            'is_permanent' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

        if($request->request_id == 0)
        {
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>"Request ID is Invalid!",
                'StatusCode'=>422
            ]);
        }

        $retval = ClientAddressInfo::create(
            [
            'user_id'=>$request->user_id,
            'request_id'=>$request->request_id,
            'pi_id'=>$request->pi_id,
            'house_no'=>$request->house_no,
            'subd_name'=>$request->subd_name,
            'street_name'=>$request->street_name,
            'barangay'=>$request->barangay,
            'municipality'=>$request->municipality,
            'city'=>$request->city,
            'province'=>$request->province,
            'zipcode'=>$request->zipcode,
            'address_type'=>$request->address_type,
            'is_permanent' => $request->is_permanent
            ]
        );

        return response()->json([
            'message'=>'Client Address Saved!',
            'data'=>$retval,
            'StatusCode'=>200
        ]);
    }
    
    public function UpdateClientAddress(Request $request)
    {

        $validator = Validator::make($request->all(),
        [
            'user_id'=>'required',
            'request_id'=>'required',
            'pi_id'=>'required:email',
            'house_no'=>'required',
            'subd_name'=>'required',
            'street_name'=>'required',
            'barangay'=>'required',
            'municipality'=>'required',
            'city'=>'required',
            'province'=>'required',
            'zipcode'=>'required',
            'address_type'=>'required',
            'is_permanent' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

        if($request->request_id == 0)
        {
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>"Request ID is Invalid!",
                'StatusCode'=>422
            ]);
        }

        $retval = ClientAddressInfo::Where('id', $request->id)
        ->Update(
            [
            'user_id'=>$request->user_id,
            'request_id'=>$request->request_id,
            'pi_id'=>$request->pi_id,
            'house_no'=>$request->house_no,
            'subd_name'=>$request->subd_name,
            'street_name'=>$request->street_name,
            'barangay'=>$request->barangay,
            'municipality'=>$request->municipality,
            'city'=>$request->city,
            'province'=>$request->province,
            'zipcode'=>$request->zipcode,
            'address_type'=>$request->address_type,
            'is_permanent' => $request->is_permanent
            ]
        );

        return response()->json([
            'message'=>'Client Address Saved!',
            'data'=>$retval,
            'StatusCode'=>200
        ]);
    }

    public function validateClientParent(Request $request)
    {
        $retvalMother = ClientParentInfo::where([
            ['request_id', $request->id],
            ['type', 0]
        ])->get();
        
        $retvalFather = ClientParentInfo::where([
            ['request_id', $request->id],
            ['type', 1]
        ])->get();
        
        return response()->json([
            'message'=>'Success',
            'dataMother'=>$retvalMother,
            'dataCountM'=>count($retvalMother),
            'dataFather'=>$retvalFather,
            'dataCountF'=>count($retvalFather),
            'StatusCode'=>200
        ]);
    }
    
    public function InsertClientParent(Request $request)
    {

        $validator = Validator::make($request->all(),
        [
            'user_id'=>'required',
            'request_id'=>'required',
            'pi_id'=>'required:email',
            'fname'=>'required',
            'lname'=>'required',
            'bday'=>'required',
            'type'=>'required',
            'is_not_death'=>'required',
            'cause_of_death'=>'required',
            'is_not_illness'=>'required',
            'illness' => 'required',
            'age_diagnosis' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

        if($request->request_id == 0)
        {
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>"Request ID is Invalid!",
                'StatusCode'=>422
            ]);
        }

        $retval = ClientParentInfo::create(
            [
                'user_id'=>$request->user_id,
                'request_id'=>$request->request_id,
                'pi_id'=>$request->pi_id,
                'fname'=>$request->fname,
                'lname'=>$request->lname,
                'mname'=>$request->mname,
                'bday'=>$request->bday,
                'type'=>$request->type,
                'string_type'=>$request->string_type,
                'is_not_death'=>$request->is_not_death,
                'cause_of_death'=>$request->cause_of_death,
                'is_not_illness'=>$request->is_not_illness,
                'illness' =>$request->illness,
                'age_diagnosis' =>$request->age_diagnosis,
            ]
        );

        return response()->json([
            'message'=>'Successfully saved!',
            'data'=>$retval,
            'StatusCode'=>200
        ]);
    }

    public function UpdateClientParent(Request $request)
    { 
        $validator = Validator::make($request->all(),
        [
            'user_id'=>'required',
            'request_id'=>'required',
            'pi_id'=>'required:email',
            'fname'=>'required',
            'lname'=>'required',
            'bday'=>'required',
            'type'=>'required',
            'is_not_death'=>'required',
            'cause_of_death'=>'required',
            'is_not_illness'=>'required',
            'illness' => 'required',
            'age_diagnosis' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

        if($request->request_id == 0)
        {
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>"Request ID is Invalid!",
                'StatusCode'=>422
            ]);
        }

        $retval = ClientParentInfo::where('id', $request->id)->
        update(
            [
                'user_id'=>$request->user_id,
                'request_id'=>$request->request_id,
                'pi_id'=>$request->pi_id,
                'fname'=>$request->fname,
                'lname'=>$request->lname,
                'mname'=>$request->mname,
                'bday'=>$request->bday,
                'type'=>$request->type,
                'string_type'=>$request->string_type,
                'is_not_death'=>$request->is_not_death,
                'cause_of_death'=>$request->cause_of_death,
                'is_not_illness'=>$request->is_not_illness,
                'illness' =>$request->illness,
                'age_diagnosis' =>$request->age_diagnosis,
            ]
        );

        return response()->json([
            'message'=>'Successfully Updated!',
            'data'=>$retval,
            'StatusCode'=>200
        ]);
    }

    public function getListOfSiblings(Request $request)
    {
        $retval = ClientSiblingsInfo::where('request_id', $request->id)->get();
        return response()->json([
            'message'=>'Success',
            'data'=>$retval,
            'dataCount'=>count($retval),
            'StatusCode'=>200
        ]);
    }

    public function getSiblingsInfo(Request $request)
    {
        $retval = ClientSiblingsInfo::where([
            ['request_id', $request->request_id],
            ['id', $request->id]
        ])->get();
        return response()->json([
            'message'=>'Success',
            'data'=>$retval,
            'dataCount'=>count($retval),
            'StatusCode'=>200
        ]);
    }

    public function InsertClientSiblings(Request $request)
    {
        
        $validator = Validator::make($request->all(),
        [
            'user_id'=>'required',
            'request_id'=>'required',
            'pi_id'=>'required:email',
            'fname'=>'required',
            'lname'=>'required',
            'bday'=>'required',
            'type'=>'required',
            'is_not_death'=>'required',
            'cause_of_death'=>'required',
            'is_not_illness'=>'required',
            'illness' => 'required',
            'age_diagnosis' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

        if($request->request_id == 0)
        {
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>"Request ID is Invalid!",
                'StatusCode'=>422
            ]);
        }

        $retval = ClientSiblingsInfo::create(
            [
                'user_id'=>$request->user_id,
                'request_id'=>$request->request_id,
                'pi_id'=>$request->pi_id,
                'fname'=>$request->fname,
                'lname'=>$request->lname,
                'mname'=>$request->mname,
                'bday'=>$request->bday,
                'type'=>$request->type,
                'string_type'=>$request->string_type,
                'is_not_death'=>$request->is_not_death,
                'cause_of_death'=>$request->cause_of_death,
                'is_not_illness'=>$request->is_not_illness,
                'illness' =>$request->illness,
                'age_diagnosis' =>$request->age_diagnosis,
            ]
        );

        return response()->json([
            'message'=>'Successfully saved!',
            'data'=>$retval,
            'StatusCode'=>200
        ]);
    }

    public function UpdateClientSiblings(Request $request)
    {
        
        $validator = Validator::make($request->all(),
        [
            'user_id'=>'required',
            'request_id'=>'required',
            'pi_id'=>'required:email',
            'fname'=>'required',
            'lname'=>'required',
            'bday'=>'required',
            'type'=>'required',
            'is_not_death'=>'required',
            'cause_of_death'=>'required',
            'is_not_illness'=>'required',
            'illness' => 'required',
            'age_diagnosis' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

        if($request->request_id == 0)
        {
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>"Request ID is Invalid!",
                'StatusCode'=>422
            ]);
        }

        $retval = ClientSiblingsInfo::where('id', $request->id)->
        update(
            [
                'user_id'=>$request->user_id,
                'request_id'=>$request->request_id,
                'pi_id'=>$request->pi_id,
                'fname'=>$request->fname,
                'lname'=>$request->lname,
                'mname'=>$request->mname,
                'bday'=>$request->bday,
                'type'=>$request->type,
                'string_type'=>$request->string_type,
                'is_not_death'=>$request->is_not_death,
                'cause_of_death'=>$request->cause_of_death,
                'is_not_illness'=>$request->is_not_illness,
                'illness' =>$request->illness,
                'age_diagnosis' =>$request->age_diagnosis,
            ]
        );

        return response()->json([
            'message'=>'Successfully Updated!',
            'data'=>$retval,
            'StatusCode'=>200
        ]);
    }

    public function getPreviewClientData(Request $request)
    {
        $retvalPI = ClientPersonalInfo::where('request_id', $request->id)->get();
        $retvalCA = ClientAddressInfo::where('request_id', $request->id)->get();
        $retvalPIMother = ClientParentInfo::where([
            ['request_id', $request->id],
            ['type', 0]
        ])->get();
        
        $retvalPIFather = ClientParentInfo::where([
            ['request_id', $request->id],
            ['type', 1]
        ])->get();
        $retvalCS = ClientSiblingsInfo::where('request_id', $request->id)->get();
        
        return response()->json([
            'message'=>'Success',
            'dataMother'=>$retvalPIMother,
            'dataCountM'=>count($retvalPIMother),
            'dataFather'=>$retvalPIFather,
            'dataCountF'=>count($retvalPIFather),
            'dataPI'=>$retvalPI,
            'dataCountPI'=>count($retvalPI),
            'dataCA'=>$retvalCA,
            'dataCountCA'=>count($retvalCA),
            'dataCS'=>$retvalCS,
            'dataCountCS'=>count($retvalCS),
            'StatusCode'=>200
        ]);
    }

}
