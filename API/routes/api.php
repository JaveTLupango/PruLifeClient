<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RequestURLController;
use App\Http\Controllers\PolicyInformation;


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
Route::post('/request-url/list', [RequestURLController::class,'getListofRequestURL'])->middleware('auth:sanctum');
Route::post('/request-url/delete', [RequestURLController::class,'requestURLDeleted'])->middleware('auth:sanctum');
Route::post('/request-url/resend', [RequestURLController::class,'reSendRequestURL'])->middleware('auth:sanctum');
//requestURLSubmitted
Route::post('/request-url/submitted', [RequestURLController::class, 'requestURLSubmitted']);


// Route::get('/emails/requestURL', function () {
//     Mail::to('pangga.jave@gmail.com')->send(new RequestURL);
//     return 'success';
// })->middleware('auth:sanctum');


Route::post('/policy-information-terms', [PolicyInformation::class, 'validatePolicy']);
Route::post('/policy-client-personal-info', [PolicyInformation::class, 'validateClientPersonalinfo']);
Route::post('/create-policy-client-personal-info', [PolicyInformation::class, 'InsertPersonalPolicyInfo']);
Route::put('/update-policy-client-personal-info', [PolicyInformation::class, 'UpdatePersonalPolicyInfo']);

Route::post('/policy-client-address-info', [PolicyInformation::class, 'validateClientAddress']);
Route::post('/create-client-address-info', [PolicyInformation::class, 'InsertClientAddress']);
Route::put('/update-client-address-info', [PolicyInformation::class, 'UpdateClientAddress']);


Route::post('/policy-client-parent-info', [PolicyInformation::class, 'validateClientParent']);
Route::post('/create-client-parent-info', [PolicyInformation::class, 'InsertClientParent']);
Route::put('/update-client-parent-info', [PolicyInformation::class, 'UpdateClientParent']);


Route::post('/policy-client-sibling-list', [PolicyInformation::class, 'getListOfSiblings']);
Route::post('/policy-client-sibling-info', [PolicyInformation::class, 'getSiblingsInfo']);
Route::post('/delete-client-sibling-info', [PolicyInformation::class, 'deleteSiblingsInfo']);
Route::post('/create-client-sibling-info', [PolicyInformation::class, 'InsertClientSiblings']);
Route::put('/update-client-sibling-info', [PolicyInformation::class, 'UpdateClientSiblings']);

//getPreviewClientData
Route::post('/policy-client-data-preview', [PolicyInformation::class, 'getPreviewClientData']);

