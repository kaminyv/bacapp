<?php

namespace App\Http\Resources\User;

use App\Http\Resources\ServiceResource;
use App\Models\Service;
use Illuminate\Http\Resources\Json\JsonResource;

class EntryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this['id'],
            'service' => new ServiceResource(Service::query()->findOrFail($this['service_id'])),
            'date' => $this['date'],
            'time' => $this['time'],
        ];
    }
}
