<?php

namespace App\Http\Controllers;

use App\Enums\UserRoles;
use App\Http\Resources\User as ResourcesUser;
use App\Models\User as ModelsUser;
use Illuminate\Http\Request;

class User extends Controller
{
    public function index()
    {
        return ModelsUser::orderBy('id', 'asc')->get()->toResourceCollection();
    }

    public function show(ModelsUser $user)
    {
        return new ResourcesUser($user);
    }

    public function store(Request $request)
    {
        if ($request->user()->cannot('create', auth()->user())) {
            return response()->json([
                'message' => 'Vous devez disposer des droits suffisants pour effectuer cette action.',
            ], 403);
        }

        $user = ModelsUser::create([
            "name" => $request->name,
            "first_name" => $request->first_name,
            "company_position" => $request->company_position,
            "email" => $request->email,
            'password' => $request->password,
            "created_at" => now(),
        ]);

        $roleId = intval($request->role);
        $user->roles()->attach([$roleId]);
    }

    public function update(Request $request, ModelsUser $user)
    {
        if ($request->user()->cannot('update', $user)) {
            return response()->json([
                'message' => 'Vous devez disposer des droits suffisants pour effectuer cette action.',
            ], 403);
        }

        $user->updateOrFail([
            "name" => $request->name,
            "first_name" => $request->first_name,
            "company_position" => $request->company_position,
            "email" => $request->email,
            'password' => $request->password,
            "updated_at" => now()
        ]);

        $adminRole = UserRoles::ADMIN->name;
        if ((!$user->roles->pluck('name')->contains(UserRoles::ADMIN->name) && !$user->roles->pluck('name')->contains(UserRoles::MODERATOR->name)) &&
            $adminRole != $request->role
        ) {
            return response()->json([
                'message' => 'Vous devez disposer des droits suffisants pour changer le role.',
            ], 403);
        }

        $roleId = intval($request->role);
        $user->roles()->sync([$roleId]);

        return response()->json([
            "message" => "Utilisateur mis à jour",
            "data" => $user
        ], 200);
    }

    public function destroy(Request $request, ModelsUser $user)
    {
        if ($request->user()->cannot('delete', $user)) {
            return response()->json([
                'message' => 'Vous devez disposer des droits suffisants pour effectuer cette action.',
            ], 403);
        }

        $user->delete();

        return response()->noContent();
    }
}
