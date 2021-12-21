<?php

namespace App\Http\Controllers\ApiAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiAuthController extends Controller
{
    /**
     * register new user
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request) {
        return response()->json([
            'status' => 1,
            'message' => 'test',
            'data' => 'data',
        ], 200);
    }

    /**
     * login user
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request) {
        return response()->json([
            'status' => 1,
            'message' => 'test',
            'data' => 'data',
        ], 200);
    }

    /**
     * logout user
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request) {
        return response()->json([
            'status' => 1,
            'message' => 'test',
            'data' => 'data',
        ], 200);
    }

    /**
     * verification email user
     * @param Request $request
     * @return JsonResponse
     */
    public function verification(Request $request) {
        return response()->json([
            'status' => 1,
            'message' => 'test',
            'data' => 'data',
        ], 200);
    }
}
