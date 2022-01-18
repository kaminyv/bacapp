<?php

namespace App\Repositories;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\TokenRequest;
use App\Interfaces\AuthRepositoryInterface;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthRepository implements AuthRepositoryInterface
{

    public function savingUser(RegisterRequest $request, User $user): void
    {
        $request->validated();
        $input = $request->validationData();
        $input['password'] = Hash::make($input['password']);
        $user->fill($input)->save();
    }

    /**
     * @param Request $request
     * @param $user
     * @return string
     */
    public function getTokenByUser(Request $request, $user): string
    {
        return $user->createToken($user->id)->plainTextToken;
    }

    public function getVerifiedUser(TokenRequest $request, User $user)
    {
        $request->validated();
        $user = $user->getUserByEmail($request->input('email'));
        if (!$user || !Hash::check($request->input('password'), $user->password)) {
            return null;
        }
        return $user;
    }

}
