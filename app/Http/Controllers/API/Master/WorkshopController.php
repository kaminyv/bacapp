<?php

namespace App\Http\Controllers\API\Master;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateWorkshopRequest;
use App\Http\Requests\StoreWorkshopRequest;
use App\Interfaces\WorkshopRepositoryInterface;
use App\Models\Workshop;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class WorkshopController extends Controller
{
    /** @var WorkshopRepositoryInterface $repository */
    private $repository;

    public function __construct(WorkshopRepositoryInterface $workshopRepository)
    {
        $this->repository = $workshopRepository;
    }

    /**
     * Index
     * Выводит мастерскую.
     *
     * @return JsonResponse
     */
    public function index() : JsonResponse
    {
        $workshop = Auth::user()->workshop;
        return response()->json(['data' => $workshop]);
    }

    /**
     * Store
     * Создание мастерской.
     *
     * @param StoreWorkshopRequest $request
     * @param Workshop $workshop
     * @return JsonResponse
     */
    public function store(StoreWorkshopRequest $request, Workshop $workshop) : JsonResponse
    {
        if (Auth::user()->workshop) {
            return response()->json(['У пользователя есть мастерская.'], 401);
        }

        $validated = $request->all();

        if ($request->file('cover')) {
            $validated['cover'] = $this->repository->putImage($request);
        }

        $validated['user_id'] = Auth::id();

        $workshop->fill($validated)->save();

        return response()->json([
            'data' => $workshop,
        ]);
    }

    /**
     * Update
     * Обновление мастерской.
     *
     * @param UpdateWorkshopRequest $request
     * @return JsonResponse
     */
    public function update(UpdateWorkshopRequest $request) : JsonResponse
    {
        $workshop = Auth::user()->workshop;

        $validated = $request->all();

        if ($request->file('cover')) {
            $validated['cover'] = $this->repository->putImage($request);
        }

        $workshop->fill($validated)->save();

        return response()->json([
            'data' => $workshop,
        ]);
    }
}
