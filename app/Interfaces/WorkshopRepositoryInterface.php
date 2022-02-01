<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface WorkshopRepositoryInterface
{
    public function putImage(Request $request): string;
}
