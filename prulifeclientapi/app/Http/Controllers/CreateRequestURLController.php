<?php

namespace App\Http\Controllers;

use App\Notifications\NotifRequestURL;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\RequestUrl;
use App\Models\RequestUrl as ModelsRequestUrl;
use Illuminate\Support\Facades\Notification;

class CreateRequestURLController extends Controller
{
    public function createRequestURL(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'receipt_alias'=>'required',
            'email'=>'required|email',
            'user_id'=>'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'Validations fails',
                'errors'=>$validator->errors(),
                'StatusCode'=>422
            ]);
        }

                //'receipt_email'=>$request->receipt_email,
        $reqURL = RequestUrl::create(
            [
                'user_id'=>$request->user_id,
                'email'=>$request->email,
                'receipt_alias'=>$request->receipt_alias,
                'is_active'=>true,
                'is_deleted'=>false,
                'gen_id'=>$request->user_id
            ]
        );

        //$requestURL = ModelsRequestUrl::where('id', 6)->get();
        //$requestURL = User::where('id', 2)->get();

        $requestURLData = [
            'body'=>'You Recieved an new email notification.',
            'contentText'=>'Click and Fill out the form.',
            'url'=> url('/'),
            'thankyou'=>'You have 5mins to take action before this link will expired. Thank you.',
        ];

        //$emailAddress->notify(new testRequestURL($requestURLData));
        Notification::send($reqURL, new NotifRequestURL($requestURLData));

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
}
