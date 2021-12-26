<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
                                       'name' => 'John Smith',
                                       'email' => 'maks-manzulin@mail.ru',
                                       'role_id' => 1,
                                       'password' => Hash::make('123456Qw'),
                                   ]);
    }
}
