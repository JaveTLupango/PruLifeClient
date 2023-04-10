<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestUrl extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'receipt_email',
        'receipt_alias',
        'is_active',
        'is_delete',
        'gen_id'
    ];

}
