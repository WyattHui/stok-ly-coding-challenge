<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TodoController;

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

Route::group([], function ($route) {
    $route->group(['prefix' => 'todo'], function ($route) {
        $route->post('', [TodoController::class, 'create']);
        $route->put('{todo}', [TodoController::class, 'update']);
        $route->put('{todo}/pending', [TodoController::class, 'pending']);
        $route->put('{todo}/complete', [TodoController::class, 'complete']);
        $route->delete('{todo}', [TodoController::class, 'delete']);
        $route->get('list', [TodoController::class, 'list']);
        $route->get('get/{todo}', [TodoController::class, 'get']);
    });
});
