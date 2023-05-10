<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Addcolumntablesiblings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('client_siblings_infos', function (Blueprint $table) {
            $table->string('cause_of_death')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('client_siblings_infos', function (Blueprint $table) {
            $table->dropColumn('cause_of_death');
        });
    }
}
