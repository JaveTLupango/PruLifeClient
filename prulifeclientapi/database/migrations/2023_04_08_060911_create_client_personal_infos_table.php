<?php

use Facade\Ignition\Tabs\Tab;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientPersonalInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_personal_infos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('request_id');
            $table->string('fname');
            $table->string('lname');
            $table->string('mname');
            $table->date('bday');
            $table->string('contact_no');
            $table->string('email');
            $table->integer('gender');
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
        Schema::dropIfExists('client_personal_infos');
    }
}
