<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert($this->newData());
    }

    private function newData()
    {
        return [
            [
                'role' => 'admin',
                'name' => 'Администратор',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role' => 'master',
                'name' => 'Мастер',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role' => 'user',
                'name' => 'Пользователь',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];
    }

}
