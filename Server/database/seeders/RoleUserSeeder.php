<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $roles = Role::all();

        $users->values()->each(function ($user, $index) use ($roles) {
            $role = $roles[$index];
            $user->roles()->syncWithoutDetaching([$role->id]);
        });
    }
}
