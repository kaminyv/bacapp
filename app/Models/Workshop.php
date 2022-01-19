<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workshop extends Model
{
    use HasFactory;

    /**
     * Получить услуги
     */
    public function service() {
        return $this->hasMany(Service::class);
    }
}
