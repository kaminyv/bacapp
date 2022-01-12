<?php

namespace App\Http\Requests;

use App\Traits\AuthRequestTrait;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{

    use AuthRequestTrait;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'role_id' => ['required', 'string', 'exists:roles,id']
        ];
    }

    public function attributes()
    {
        return [
            'name' => __('Имя пользователя'),
            'email' => __('Адрес электронной почты'),
            'password' => __('Пароль'),
            'role_id' => __('Роль')
        ];
    }

}
