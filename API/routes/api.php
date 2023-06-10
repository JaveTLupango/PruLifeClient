<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RequestURLController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth/register', [AuthController::class,'register']);
Route::post('/auth/login', [AuthController::class,'login']);

Route::get('/auth/users', [AuthController::class,'listofuser'])->middleware('auth:sanctum');
Route::post('/auth/logout', [AuthController::class,'logout'])->middleware('auth:sanctum');

Route::post('/request-url/create', [RequestURLController::class,'createRequestURL'])->middleware('auth:sanctum');
Route::get('/request-url/list', [RequestURLController::class,'getListofRequestURL'])->middleware('auth:sanctum');
Route::post('/request-url/delete', [RequestURLController::class,'requestURLDeleted'])->middleware('auth:sanctum');
Route::post('/request-url/resend', [RequestURLController::class,'reSendRequestURL'])->middleware('auth:sanctum');
//requestURLSubmitted
Route::post('/request-url/submitted', [RequestURLController::class, 'requestURLSubmitted']);


// Route::get('/emails/requestURL', function () {
//     Mail::to('pangga.jave@gmail.com')->send(new RequestURL);
//     return 'success';
// })->middleware('auth:sanctum');