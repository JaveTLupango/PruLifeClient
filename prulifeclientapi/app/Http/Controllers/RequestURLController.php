<?php

namespace App\Http\Controllers;

use App\Notifications\NotifRequestURL;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\RequestUrl;
use App\Models\RequestUrl as ModelsRequestUrl;
use Illuminate\Support\Facades\Notification;

class RequestURLController extends Controller
{
    public function createRequestURL(Request $request)
    {
        $baseURL = 'http://localhost:4200/'; //localbase
        //$baseURL = 'http://localhost:4200/'; //localbase

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
                'email'=>$request->receipt_email,
                'receipt_alias'=>$request->receipt_alias,
                'is_active'=>true,
                'is_deleted'=>false,
                'gen_id'=>$request->user_id
            ]
        );

        $requestURLData = [
            'body'=>'You Recieved an new email notification.',
            'contentText'=>'Click and Fill out the form.',
            'url'=> $baseURL.'policy-information-terms/'.$reqURL['id'],
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

    public function getListofRequestURL()
    {
        return response()->json([
            'message'=>'Request URL successfully fetch',
            'data'=>RequestUrl::OrderBy('id', 'desc')->get(),
            'StatusCode'=>200
        ]);
    }
}
