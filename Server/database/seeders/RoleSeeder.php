<?php

namespace Database\Seeders;

use App\Enums\UserRoles;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->insert([
            'name' => UserRoles::ADMIN,
            "created_at" => now(),
            "updated_at" => now()
        ]);
        DB::table('roles')->insert([
            'name' => UserRoles::MODERATOR,
            "created_at" => now(),
            "updated_at" => now()
        ]);
        DB::table('roles')->insert([
            'name' => UserRoles::USER,
            "created_at" => now(),
            "updated_at" => now()
        ]);
    }
}
