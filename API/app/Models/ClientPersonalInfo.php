<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientPersonalInfo extends Model
{
    use HasFactory;

    protected $table = 'client_personal_info';
    protected $fillable = [
        'user_id',
        'request_id',
        'fname',
        'lname',
        'mname',
        'bday',
        'contact_no',
        'email',
        'gender'
    ];
}
