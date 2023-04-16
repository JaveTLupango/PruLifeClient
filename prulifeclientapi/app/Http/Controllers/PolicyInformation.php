<?php

namespace App\Http\Controllers;

use App\Models\RequestUrl;
use Illuminate\Http\Request;

class PolicyInformation extends Controller
{
    public function validatePolicy(Request $request)
    {
        $policy = RequestUrl::where('id', $request->id)->get();       
        return response()->json([
            'message'=>'Login Successfully',
            'data'=>$policy,
            'StatusCode'=>200
        ]); 
    }
}
