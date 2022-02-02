<?php

namespace App\Repositories;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Interfaces\WorkshopRepositoryInterface;

class WorkshopRepository implements WorkshopRepositoryInterface
{
    /**
     * PutImage
     * Загрузка обложки мастерской.
     *
     * @param Request $request
     * @return string
     */
    public function putImage(Request $request) : string
    {

        if ($request->file('cover')) {
            $path = Storage::put('public', $request->file('cover'));
            $url = Storage::url($path);
        }

        return $url;
    }
}
