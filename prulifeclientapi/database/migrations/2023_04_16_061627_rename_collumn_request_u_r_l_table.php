<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameCollumnRequestURLTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('request_urls', function(Blueprint $table) {
            $table->renameColumn('receipt_email', 'email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('request_urls', function(Blueprint $table) {
            $table->renameColumn('email', 'receipt_email');
        });
    }
}
