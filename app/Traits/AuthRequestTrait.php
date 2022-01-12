<?php

namespace App\Traits;

use Illuminate\Contracts\Validation\Validator;

trait AuthRequestTrait
{

    /**
     * Получение валидатора
     *
     * @return Validator
     */
    public function getValidator(): Validator
    {
        return $this->getValidatorInstance();
    }

}
