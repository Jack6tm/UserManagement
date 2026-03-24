<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use League\CommonMark\Util\ArrayCollection;

/**
 * @extends Factory<User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $jobTitles = new ArrayCollection([
            "Développeur backend",
            "Développeur frontend",
            "Fullstack",
            "Chef de projet",
            "Product Owner",
            "UX Designer",
            "DevOps",
            "QA Engineer",
            "Data Analyst",
            "Architecte logiciel"
        ]);

        return [
            'name' => fake()->lastName(),
            'first_name' => fake()->firstName(),
            'company_position' => fake()->randomElement($jobTitles),
            'email' => fake()->unique()->safeEmail(),
            'password' => static::$password ??= Hash::make('password'),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => []);
    }
}
