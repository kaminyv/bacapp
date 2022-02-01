<?php

namespace App\Http\Controllers\API\Master;

use App\Http\Controllers\Controller;
use App\Models\Workshop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class WorkshopController extends Controller
{
    public function index()
    {
        $workshop = Auth::user()->workshop;
        return response()->json(['data' => $workshop]);
    }

    public function store(Request $request, Workshop $workshop)
    {
        if (Auth::user()->workshop) {
            return response()->json(['У пользователя есть мастерская.'], 401);
        }

        $request->validate([
            'city' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'description' => 'required|string',
            'cover' => 'required|image',
            'phone' => 'required|string|max:11',
        ]);

        $input = $request->all();

        if ($file = $request->file('cover')) {
            $path = $file->store('public');
            $url = Storage::url($path);
            $input['cover'] = $url;
        }

        $input['user_id'] = Auth::id();

        $workshop->fill($input)->save();

        return response()->json([
            'data' => $workshop,
        ]);
    }

    public function update(Request $request)
    {
        $workshop = Auth::user()->workshop;

        $request->validate([
            'city' => 'string|max:255',
            'address' => 'string|max:255',
            'description' => 'string',
            'cover' => 'image',
            'phone' => 'string|max:11',
        ]);

        $input = $request->all();

        if ($file = $request->file('cover')) {
            $path = $file->store('public');
            $url = Storage::url($path);
            $input['cover'] = $url;
        }

        $workshop->fill($input)->save();

        return response()->json([
            'data' => $workshop,
        ]);
    }
}
