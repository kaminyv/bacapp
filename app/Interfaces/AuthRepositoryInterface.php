<?php

namespace App\Interfaces;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\TokenRequest;
use App\Models\User;
use Illuminate\Http\Request;

interface AuthRepositoryInterface
{
    public function savingUser(RegisterRequest $request, User $user): void;
    public function getTokenByUser(Request $request, $user): string;
    public function getVerifiedUser(TokenRequest $request, User $user);

}
