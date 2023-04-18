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
        $retval = ClientPersonalInfo::where('id', $request->id)->get();       
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
    }
}
