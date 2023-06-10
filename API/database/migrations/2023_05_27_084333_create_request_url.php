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
        Schema::create('request_url', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('receipt_alias')->nullable();
            $table->string('receipt_email')->nullable();
            $table->boolean('is_active')->default(false);
            $table->boolean('is_deleted')->default(false);
            $table->string('gen_id')->nullable();
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
        Schema::dropIfExists('request_url');
    }
};
