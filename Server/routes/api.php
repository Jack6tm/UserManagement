<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Role;
use App\Http\Controllers\User as ControllersUser;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('jwt.auth')->group(function () {
    Route::get('me', [AuthController::class, 'me']);
    Route::get('roles', [Role::class, 'index']);
    Route::post('logout', [AuthController::class, 'logout']);

    Route::apiResource("users", ControllersUser::class);
});
