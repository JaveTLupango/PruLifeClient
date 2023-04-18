<?php

namespace App\Http\Controllers;

use App\Models\ClientPersonalInfo;
use App\Models\RequestUrl;
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
}
