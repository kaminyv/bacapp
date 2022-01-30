<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\EntryResource;
use App\Models\Entry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class EntryController extends Controller
{
    /**
     * Past
     * Вывод прошедших записей к мастеру.
     *
     * @return ResourceCollection
     */
    public function past() : ResourceCollection
    {
        return EntryResource::collection(
            Entry::query()
                ->where('user_id', Auth::id())
                ->where('date', '<', date('Y-m-d'))
                ->orderBy('date')
                ->get()
        );
    }

    /**
     * Current
     * Вывод текущих записей к мастеру.
     *
     * @return ResourceCollection
     */
    public function current() : ResourceCollection
    {
        return EntryResource::collection(
            Entry::query()
                ->where('user_id', Auth::id())
                ->where('date', '>=', date('Y-m-d'))
                ->orderBy('date')
                ->get()
        );
    }

    /**
     * Store
     * Записей к мастеру.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request) : JsonResponse
    {
        $input = $request->all();
        $input['user_id'] = Auth::id();

        $entry = new Entry();

        return response()->json(
            $entry->fill($input)->save()
        );
    }
}
