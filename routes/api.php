<?php

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

Route::post('kyc', 'App\Http\Controllers\ClientController@addKyc');
Route::post('captcha', 'App\Http\Controllers\ClientController@addCaptcha');
Route::get('get-top', 'App\Http\Controllers\ClientController@getTop');
Route::get('check-user/{username}', 'App\Http\Controllers\ClientController@checkUser');


Route::group([
    'prefix' => 'admin'
], function () {
    Route::post('login', 'App\Http\Controllers\AdminController@login');
});

Route::group([
    'middleware' => 'auth:admin'
], function () {
    Route::resource('admin', 'App\Http\Controllers\AdminController');
    Route::resource('client', 'App\Http\Controllers\ClientController');
    Route::get('user-info/{username}', 'App\Http\Controllers\ClientController@getUserInfo');
    Route::post('send-message', 'App\Http\Controllers\ClientController@sendMessWithBot');
});
