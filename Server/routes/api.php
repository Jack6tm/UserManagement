<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

// ------------------------
// LOGIN JWT
// ------------------------
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('jwt.auth')->group(function () {
 Route::get('me', [AuthController::class, 'me']);
 Route::post('logout', [AuthController::class, 'logout']);
 Route::post('refresh', [AuthController::class, 'refresh']);
});
