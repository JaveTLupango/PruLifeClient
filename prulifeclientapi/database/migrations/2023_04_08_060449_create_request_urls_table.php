<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestUrlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request_urls', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('receipt_alias');
            $table->string('receipt_email');
            $table->boolean('is_active');
            $table->boolean('is_deleted');
            $table->string('gen_id');
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
        Schema::dropIfExists('request_urls');
    }
}
