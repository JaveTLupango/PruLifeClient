<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'name'=>'required|min:2|max:100',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:2|max:100',
            'confirm_password'=>'required|same:password',
            'user_role'=>'required',
            'is_active'=>'required',
            'is_deleted'=>'required'
        ]);

        return response()->json([
            'message'=>'Validations fails',
            'errors'=>$validator->errors()
        ]);

        // return response()->json([
        //     'message'=>'Register API'
        // ]);
    }

}
