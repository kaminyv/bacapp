<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CatalogController;
use App\Http\Controllers\API\User\EntryController as UserEntryController;
use App\Http\Controllers\API\User\ProfileController as UserProfileController;
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
Route::get('/catalog', [CatalogController::class, 'index']);
Route::get('/catalog/{workshop}', [CatalogController::class, 'show']);

Route::prefix('auth')->group(function() {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/token', [AuthController::class, 'token']);

    Route::middleware('auth:sanctum')->group(function() {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/logout-all', [AuthController::class, 'logoutAll']);
    });
});

Route::prefix('user')->middleware('auth:sanctum')->group(function() {

    Route::prefix('profile')->group(function() {
        Route::get('/', [UserProfileController::class, 'index']);
    });

    Route::prefix('entry')->group(function() {
       Route::post('/', [UserEntryController::class, 'store']);
       Route::get('/past', [UserEntryController::class, 'past']);
       Route::get('/current', [UserEntryController::class, 'current']);
    });
});
