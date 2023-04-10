<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTableRequestUrl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('request_urls', function (Blueprint $table) {
            $table->string('receipt_alias')->nullable()->change();
            $table->string('receipt_email')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('request_urls', function (Blueprint $table) {
            $table->string('receipt_alias')->change();
            $table->string('receipt_email')->change();
        });
    }
}
