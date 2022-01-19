<?php

namespace Database\Factories;

use App\Models\Workshop;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'workshop_id' => Workshop::factory(),
            'name' => $this->faker->realText(Rand(20, 30)),
            'price' => $this->faker->randomFloat(false, 300, 5000),
            'time' => $this->faker->time('H:i', rand(1800,7200)),
        ];
    }
}
