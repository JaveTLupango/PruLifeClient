<?php

namespace App\Http\Controllers;

use App\Notifications\NotifRequestURL;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\RequestUrl;
use Illuminate\Support\Facades\Notification;

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
            'url'=> env('APP_URL_WEB').'/policy-information-terms/'.$reqURL['id'],
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
            'data'=>RequestUrl::Where('is_deleted', 0)->OrderBy('id', 'desc')->get(),
            'StatusCode'=>200
        ]);
    }

    public function requestURLSubmitted(Request $request)
    {
        $reqURL = RequestUrl::Where('id',$request->id)->
        update(
            [
                'is_submitted'=>1,
            ]
        );
        return response()->json([
            'message'=>'Successfully Submitted!',
            'data'=>$reqURL,
            'StatusCode'=>200
        ]);
    }
    
    public function requestURLDeleted(Request $request)
    {
        $reqURL = RequestUrl::Where('id',$request->id)->
        update(
            [
                'is_deleted'=>1,
            ]
        );
        return response()->json([
            'message'=>'Successfully Deleted!',
            'data'=>$reqURL,
            'dataNew'=>RequestUrl::Where('is_deleted', 0)->OrderBy('id', 'desc')->get(),
            'StatusCode'=>200
        ]);
    }
    
    public function requestURLDeActived(Request $request)
    {
        $reqURL = RequestUrl::Where('id',$request->id)->
        update(
            [
                'is_active'=>0,
            ]
        );
        return response()->json([
            'message'=>'Successfully Deactivated!',
            'data'=>$reqURL,
            'dataNew'=>RequestUrl::Where('is_deleted', 0)->OrderBy('id', 'desc')->get(),
            'StatusCode'=>200
        ]);
    }

    public function reSendRequestURL(Request $request)
    {
        $retval = RequestUrl::where('id', $request->id)->
                update(
                    [
                        'is_submitted'=>0,
                    ]
                );
        $reqURL = RequestUrl::where('id', $request->id)->get();

        $requestURLData = [
            'body'=>'You Recieved an new email notification.',
            'contentText'=>'Click and Fill out the form.',
            'url'=> env('APP_URL_WEB').'/policy-information-terms/'.$request->id,
            'thankyou'=>'You have 5mins to take action before this link will expired. Thank you.',
        ];

        //$emailAddress->notify(new testRequestURL($requestURLData));
        Notification::send($reqURL[0], new NotifRequestURL($requestURLData));

        return response()->json([
            'message'=>'Request URL successfully generated',
            'data'=>$reqURL,
            'dataNew'=>RequestUrl::Where('is_deleted', 0)->OrderBy('id', 'desc')->get(),
            'StatusCode'=>200
        ]);
    }
}
