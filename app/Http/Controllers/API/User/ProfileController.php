<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\UserResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\ResourceResponse;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    /**
     * Index
     * Выводит профайл пользователя.
     *
     * @return UserResource
     */
    public function index() : UserResource
    {
        return new UserResource(User::query()->findOrFail(Auth::id()));
    }
}
