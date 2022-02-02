<?php

namespace App\Http\Controllers\API\Master;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ServiceResource;

class ServiceController extends Controller
{
    /**
     * Index
     * выводит услуги мастерской.
     *
     * @return ResourceCollection
     */
    public function index(): ResourceCollection
    {
        return ServiceResource::collection(
            Auth::user()->workshop->service
        );
    }

    /**
     * Store
     * создает новую услугу.
     *
     * @param  StoreServiceRequest $request
     * @return ServiceResource
     */
    public function store(StoreServiceRequest $request) : ServiceResource
    {
        $validated = $request->validated();
        $validated['workshop_id'] = Auth::user()->workshop->id;

        $service = new Service();
        $service->fill($validated)->save();

        return new ServiceResource($service);
    }

    /**
     * Show
     * выводит услугу по id.
     *
     * @param  Service $service
     * @return ServiceResource
     */
    public function show(Service $service) : ServiceResource
    {
        return new ServiceResource($service);
    }

    /**
     * Update
     * обновляет услугу по id.
     *
     * @param  UpdateServiceRequest $request
     * @param  Service $service
     * @return ServiceResource
     */
    public function update(UpdateServiceRequest $request, Service $service) : ServiceResource
    {
        $validated = $request->validated();

        $service->fill($validated)->save();

        return new ServiceResource($service);
    }

    /**
     * Destroy
     * удаление услуги.
     *
     * @param Service $service
     * @return JsonResponse
     * @throws \Throwable
     */
    public function destroy(Service $service) : JsonResponse
    {
        return response()->json([
            'message' => $service->deleteOrFail(),
        ]);
    }
}
