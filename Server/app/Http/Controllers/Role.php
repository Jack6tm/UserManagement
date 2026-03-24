<?php

namespace App\Http\Controllers;

use App\Models\Role as ModelsRole;

class Role extends Controller
{
    public function index()
    {
        return ModelsRole::all();
    }
}
