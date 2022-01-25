<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class ServiceResource extends JsonResource
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
            'price' => $this['price'],
            'time' => $this['time'],
        ];
    }
}
