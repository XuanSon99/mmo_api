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
Route::get('p2p/{type}', 'App\Http\Controllers\ClientController@getPrice');
Route::get('coins', 'App\Http\Controllers\ClientController@getCoinList');
Route::get('currencies', 'App\Http\Controllers\ClientController@getCurrencyList');
Route::get('exchanges', 'App\Http\Controllers\ClientController@getExchange');


Route::group([
    'prefix' => 'admin'
], function () {
    Route::post('login', 'App\Http\Controllers\AdminController@login');
});

Route::resource('group', 'App\Http\Controllers\GroupController');
Route::resource('posts', 'App\Http\Controllers\PostController');
Route::resource('categories', 'App\Http\Controllers\CategoryController');
Route::get('search', 'App\Http\Controllers\PostController@search');

Route::group([
    'middleware' => 'auth:admin'
], function () {
    Route::resource('admin', 'App\Http\Controllers\AdminController');
    Route::resource('client', 'App\Http\Controllers\ClientController');
    Route::get('overview', 'App\Http\Controllers\ClientController@getOverview');
    Route::get('user-info/{username}', 'App\Http\Controllers\ClientController@getUserInfo');
    Route::post('send-message', 'App\Http\Controllers\ClientController@sendMessWithBot');
});
