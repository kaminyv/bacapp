<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class UserResource extends JsonResource
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
            'name' => $this['name'],
            'email' => $this['email'],
            'avatar' => $this['avatar'],
            'phone' => $this['phone'],
        ];
    }
}
