<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientSiblingsInfo extends Model
{
    use HasFactory;
   
    protected $table = 'client_siblings_info';
    protected $fillable = [
        'user_id',
        'pi_id',
        'request_id',
        'fname',
        'lname',
        'mname',
        'bday',
        'type',
        'string_type',
        'is_not_death',
        'cause_of_death',
        'is_not_illness',
        'illness',
        'age_diagnosis',
    ];
}
