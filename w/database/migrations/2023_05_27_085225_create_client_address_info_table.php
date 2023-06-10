<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_address_info', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('pi_id'); // personal info ID
            $table->integer('request_id');
            $table->string('house_no');
            $table->string('subd_name');
            $table->string('street_name');
            $table->string('barangay');
            $table->string('municipality');
            $table->string('city');
            $table->string('province');
            $table->string('zipcode');
            $table->integer('address_type');
            $table->boolean('is_permanent');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('client_address_info');
    }
};
