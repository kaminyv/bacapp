<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Faker;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create('ru_RU');
        DB::table('users')
            ->insert([
                'name' => 'Анна',
                'email' => 'anna@mail.ru',
                'is_master' => true,
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'remember_token' => Str::random(10),
                'phone' => '79991234567',
                'avatar' => $faker->image('public/storage',640,480, null, false),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
    }
}
