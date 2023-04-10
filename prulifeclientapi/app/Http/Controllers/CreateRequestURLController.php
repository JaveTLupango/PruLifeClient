<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CreateRequestURLController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'alias'=>'required|min:2|max:100',
            'email'=>'required|email'
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
