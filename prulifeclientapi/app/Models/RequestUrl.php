<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class RequestUrl extends Model
{
    use HasFactory,Notifiable;

    protected $fillable = [
        'user_id',
        'email',
        'receipt_alias',
        'is_active',
        'is_delete',
        'gen_id'
    ];

}
