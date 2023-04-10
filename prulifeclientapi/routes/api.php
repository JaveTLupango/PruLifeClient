<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CreateRequestURLController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('/request-url/create', [CreateRequestURLController::class,'create'])->middleware('auth:sanctum');   