<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;



class AuthController extends Controller
{
    //

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'name'=>'required|min:2|max:100',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:2|max:100',
            'confirm_password'=>'required|same:password'
            // ,'user_role'=>'required',
            // 'is_active'=>'required',
            // 'is_deleted'=>'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode' => 422
            ], 422);
        }

        $users = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
        ]);

        return response()->json([
            'message'=>'Registration successfully',
            'date'=>$users,
            'StatusCode' => 200
        ], status: 200);
    }

    public function login (Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'email'=>'required:email',
            'password'=>'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

        $user = User::where('email', $request->email)->first();

        if($user)
        {
            If(Hash::check($request->password, $user->password))
            {
                $token = $user->createToken('auth-token')->plainTextToken;
                return response()->json([
                    'message'=>'Login Successfully',
                    'token'=>$token,
                    'data'=>$user,
                    'StatusCode'=>200
                ]);
            }
            else{
                return response()->json([
                    'message'=>'Incorrect Credentials',
                    'StatusCode'=>400
                ]);
            }
        }
        else{
            return response()->json([
                'message'=>'Incorrect Credentials',
                'StatusCode'=>400
            ]);
        }
    }

    public function listofuser(Request $request)
    {
        return response()->json([
            'message'=>'users successfully fetch',
            'data'=>User::all()
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message'=>'users successfully logout',
            'StatusCode'=>200
        ], 200);
    }
}
