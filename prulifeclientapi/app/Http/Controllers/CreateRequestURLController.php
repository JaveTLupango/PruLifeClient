<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use app\Models\RequestUrl;

class CreateRequestURLController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'reciept_alias'=>'required|min:2|max:100',
            'reciept_email'=>'required|email',
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
                'reciept_email'=>$request->reciept_email,
                'reciept_alias'=>$request->reciept_alias,
                'is_active'=>true,
                'is_delete'=>false,
                'gen_id'=>$request->user_id
            ]            
        );

        return response()->json([
            'message'=>'Request URL successfully generated',
            'date'=>$reqURL,
            'StatusCode'=>200
        ]);
    }
}
