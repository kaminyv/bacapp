<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class WorkshopResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request) : array
    {
        return [
            'id' => $this['id'],
            'master' => new UserResource(User::query()->find($this['user_id'])),
            'city' => $this['city'],
            'address' => $this['address'],
            'cover' => $this['cover'],
            'phone' => $this['phone'],
            'rating' => $this['rating'],
            'service' => ServiceResource::collection($this->service),
        ];
    }
}
