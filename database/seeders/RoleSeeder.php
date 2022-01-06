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
        $data[1] = [
            'role' => 'admin',
            'name' => 'Администратор',
            'created_at' => now(),
            'updated_at' => now(),
        ];
        $data[2] = [
            'role' => 'master',
            'name' => 'Мастер',
            'created_at' => now(),
            'updated_at' => now(),
        ];
        $data[3] = [
            'role' => 'user',
            'name' => 'Пользователь',
            'created_at' => now(),
            'updated_at' => now(),
        ];
        return $data;
    }
}
