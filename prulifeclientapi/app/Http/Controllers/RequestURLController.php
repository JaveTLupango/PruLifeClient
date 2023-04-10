<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\RequestUrl;

class RequestURLController extends Controller
{
    public function createRequestURL(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'receipt_alias'=>'required',
            'receipt_email'=>'required|email',
            'user_id'=>'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

        $reqURL = RequestUrl::create(
            [
                'user_id'=>$request->user_id,
                'receipt_email'=>$request->receipt_email,
                'receipt_alias'=>$request->receipt_alias,
                'is_active'=>true,
                'is_deleted'=>false,
                'gen_id'=>$request->user_id
            ]            
        );

        return response()->json([
            'message'=>'Request URL successfully generated',
            'data'=>$reqURL,
            'StatusCode'=>200
        ]);

        // return response()->json([
        //     'message'=>'Request URL successfully generated',
        //     'date'=>$reqURL,
        //     'StatusCode'=>200
        // ]);
    }

    public function getListofRequestURL()
    {
        return response()->json([
            'message'=>'Request URL successfully fetch',
            'data'=>RequestUrl::all(),
            'StatusCode'=>200
        ]);
    }
}
