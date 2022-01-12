<?php

namespace App\Providers;

use App\Interfaces\AuthRepositoryInterface;
use App\Repositories\AuthRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{

    protected $list_repositories = [
        AuthRepositoryInterface::class => AuthRepository::class
    ];


    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        if (!empty($this->list_repositories)) {
            foreach ($this->list_repositories as $interfaceClass => $repositoryClass) {
                $this->app->bind($interfaceClass, $repositoryClass);
            }
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

}
