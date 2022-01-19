<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;

class WorkshopResource extends JsonResource
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
            'master' => new UserResource(User::query()->find($this['user_id'])),
            'city' => $this['city'],
            'address' => $this['address'],
            'cover' => $this['cover'],
            'phone' => $this['phone'],
            'rating' => $this['rating'],
            'service' => ServiseResource::collection($this->service),
        ];
    }
}
