<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\Workshop;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        Workshop::factory(1)->create(['user_id' => 1]);
        Service::factory(10)->create(['workshop_id' => 1]);

        User::factory(5)->create();
        User::factory(20)
            ->has(
                Workshop::factory(1)
                    ->has(Service::factory(10))
            )->create(['is_master' => true,]);
    }
}
