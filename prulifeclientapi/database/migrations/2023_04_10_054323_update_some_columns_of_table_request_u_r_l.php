<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateSomeColumnsOfTableRequestURL extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('request_urls', function (Blueprint $table) {
            $table->boolean('is_active')->default(true)->change();
            $table->boolean('is_deleted')->default(false)->change();
            $table->string('gen_id')->nullable()->change();
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
            $table->boolean('is_active')->change();
            $table->boolean('is_deleted')->change();
            $table->string('gen_id')->change();
        });
    }
}
