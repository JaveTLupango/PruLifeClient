<?php

namespace App\Http\Controllers;

use App\Mail\RequestURL;
use App\Models\RequestUrl as ModelsRequestUrl;
use App\Models\User;
use App\Notifications\NotifRequestURL;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class testRequestURLController extends Controller
{
    //
    public function sendRequest()
    {
        $requestURL = ModelsRequestUrl::where('id', 6)->get();
        //$requestURL = User::where('id', 2)->get();

        $requestURLData = [
            'body'=>'You Recieved an new email notification.',
            'contentText'=>'Click and Fill out the form.',
            'url'=> url('/'),
            'thankyou'=>'You have 5mins to take action before this link will expired. Thank you.',
        ];

        //$emailAddress->notify(new testRequestURL($requestURLData));
        Notification::send( $requestURL, new NotifRequestURL($requestURLData));
    }
}
