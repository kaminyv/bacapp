<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Workshop;
use App\Http\Resources\WorkshopResource;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CatalogController extends Controller
{
    /**
     * Выводит мастеров
     *
     * @return AnonymousResourceCollection
     */
    public function index() : AnonymousResourceCollection
    {
        return WorkshopResource::collection(Workshop::query()->paginate(10));
    }

}
