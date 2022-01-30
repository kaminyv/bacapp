<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Workshop;
use App\Http\Resources\WorkshopResource;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CatalogController extends Controller
{
    /**
     * Index
     * Выводит мастеров
     *
     * @return AnonymousResourceCollection
     */
    public function index() : AnonymousResourceCollection
    {
        return WorkshopResource::collection(Workshop::query()->paginate(9));
    }

    /**
     * Show
     * Выводит мастерскую по id
     * @param Workshop $workshop
     *
     * @return WorkshopResource
     */
    public function show(Workshop $workshop) : WorkshopResource
    {
        return new WorkshopResource($workshop);
    }
}
