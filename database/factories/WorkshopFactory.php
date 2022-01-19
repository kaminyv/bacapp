<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class WorkshopFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'city' => $this->faker->city,
            'address' => $this->faker->streetAddress,
            'description' => $this->faker->realText(Rand(20, 100)),
            'cover' => $this->faker->image('public/storage',640,480, null, false),
            'phone' => $this->faker->numerify('79#########'),
            'rating' => $this->faker->numberBetween(1, 5),
        ];
    }
}
