<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request) : JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'role_name' => ['required', 'string', 'exists:roles,name']
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $input = $request->all();
        $input['role_id'] = $input['role_name'];
        $input['password'] = Hash::make($input['password']);
        $user = User::create($input);

        $token = $user->createToken($request->role_name)->plainTextToken;

        return response()->json(['token' => $token], 200);
    }

    /**
     * Функция запроса токена (если пользователь уже существует)
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function token(Request $request) : JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'max:255', 'exists:users,email'],
            'password' => ['required', 'string', 'min:8'],
            'role_name' => ['required', 'string', 'exists:roles,name']
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Введены неверные данные'], 401);
        }

        return response()->json(['token' => $user->createToken($request->role_name)->plainTextToken]);
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
