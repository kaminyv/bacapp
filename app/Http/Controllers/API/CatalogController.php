<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Workshop;
use App\Http\Resources\WorkshopResource;
use Illuminate\Http\JsonResponse;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Resources\Json\ResourceResponse;

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

    /**
     * Выводит мастерскую
     *
     * @return WorkshopResource
     */
    public function show(Workshop $workshop) : WorkshopResource
    {
        return new WorkshopResource($workshop);
    }

}
