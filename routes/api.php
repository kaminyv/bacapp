<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CatalogController;

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
Route::get('/catalog', [CatalogController::class, 'index']);
Route::get('/catalog/{workshop}', [CatalogController::class, 'show']);

Route::group(['prefix' => 'auth', 'as' => 'auth.'], function ()
{
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/token', [AuthController::class, 'token']);

    Route::middleware('auth:sanctum')->group(function() {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/logout-all', [AuthController::class, 'logoutAll']);
    });
});
