<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    const STATUS_PENDING = 0;
    const STATUS_COMPLETE = 1;

    protected $fillable = [
        'description'
    ];
}
