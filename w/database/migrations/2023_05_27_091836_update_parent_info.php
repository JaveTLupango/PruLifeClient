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
        Schema::table('client_parent_info', function(Blueprint $table) {
            $table->dropColumn('is_death');
            $table->dropColumn('is_illness');
        });
        Schema::table('client_parent_info', function(Blueprint $table) {
            $table->string('is_not_death');
            $table->string('is_not_illness');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
         Schema::table('client_parent_info', function(Blueprint $table) {
            $table->string('is_death');
            $table->string('is_illness');
        });
        Schema::table('client_parent_info', function(Blueprint $table) {
            $table->dropColumn('is_not_death');
            $table->dropColumn('is_not_illness');
        });
    }
};
