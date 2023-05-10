<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Removecolumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        // Schema::table('client_parent_infos', function (Blueprint $table) {
        //     $table->dropColumn('cause_of-death');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('client_parent_infos', function (Blueprint $table) {
            $table->string('cause_of-death');
        });
    }
}
