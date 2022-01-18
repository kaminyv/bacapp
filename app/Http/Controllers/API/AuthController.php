<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\TokenRequest;
use App\Interfaces\AuthRepositoryInterface;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    /** @var AuthRepositoryInterface $repository */
    private $repository;

    public function __construct(AuthRepositoryInterface $authRepository)
    {
        $this->repository = $authRepository;
    }

    /**
     * Register
     * Регистрация нового пользователя.
     *
     * @param RegisterRequest $request
     * @param User $user
     * @return JsonResponse
     */
    public function register(RegisterRequest $request, User $user) : JsonResponse
    {
        $this->repository->savingUser($request, $user);
        $token = $this->repository->getTokenByUser($request, $user);

        return response()->json(['token' => $token]);
    }

    /**
     * Функция запроса токена (если пользователь уже существует)
     *
     * @param TokenRequest $request
     * @param User $user
     * @return JsonResponse
     */
    public function token(TokenRequest $request, User $user) : JsonResponse
    {
        $user = $this->repository->getVerifiedUser($request, $user);
        if (!$user) {
            return response()->json([
                'errors' => array(__('Введены неверные данные'))
            ], 422);
        }

        $token = $this->repository->getTokenByUser($request, $user);

        return response()->json(['token' => $token]);
    }

    /**
     * Logout
     * Удаляет текущий токен пользователя.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request) : JsonResponse
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Токен для текущего сеанса отозван.'
        ]);
    }

    /**
     * LogoutAll
     * Удаляет все токены пользователя.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function logoutAll(Request $request) : JsonResponse
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'Токены для всех сеансов отозваны'
        ]);
    }

}
