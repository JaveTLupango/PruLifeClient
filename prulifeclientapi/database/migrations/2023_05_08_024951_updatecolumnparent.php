<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Updatecolumnparent extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('client_parent_infos', function (Blueprint $table) {
            $table->string('mname')->nullable()->change();
            $table->string('illness')->nullable()->change();
            $table->string('string_type')->nullable()->change();
            $table->string('age_diagnosis')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('client_parent_infos', function (Blueprint $table) {
            $table->string('mname')->change();
            $table->string('illness')->change();
            $table->string('string_type')->change();
            $table->string('age_diagnosis')->change();
        });
    }
}
