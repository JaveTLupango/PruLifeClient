<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientAddressInfo extends Model
{
    use HasFactory;
    protected $table = 'client_address_info';
    protected $fillable = [
            'user_id',
            'request_id',
            'pi_id',
            'house_no',
            'subd_name',
            'street_name',
            'barangay',
            'municipality',
            'city',
            'province',
            'zipcode',
            'address_type',
            'is_permanent'
    ];
}
