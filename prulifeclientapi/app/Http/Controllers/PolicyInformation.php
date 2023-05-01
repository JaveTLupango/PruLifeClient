<?php

namespace App\Http\Controllers;

use App\Models\ClientPersonalInfo;
use App\Models\RequestUrl;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class PolicyInformation extends Controller
{
    public function validatePolicy(Request $request)
    {
        $policy = RequestUrl::where('id', $request->id)->get();
        return response()->json([
            'message'=>'Success',
            'data'=>$policy,
            'dataCount'=>count($policy),
            'StatusCode'=>200
        ]);
    }

    public function validateClientPersonalinfo(Request $request)
    {
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
}
