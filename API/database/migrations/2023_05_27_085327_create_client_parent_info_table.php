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
        Schema::create('client_parent_info', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('pi_id'); // personal info ID
            $table->integer('request_id');
            $table->string('fname');
            $table->string('lname');
            $table->string('mname');
            $table->date('bday');
            $table->integer('type');
            $table->string('string_type');
            $table->boolean('is_death');
            $table->string('cause_of-death')->nullable();
            $table->boolean('is_illness');
            $table->integer('age_diagnosis');
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
        Schema::dropIfExists('client_parent_info');
    }
};
