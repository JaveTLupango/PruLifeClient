<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TableModificationOfClientSiblings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        // Schema::table('client_siblings_infos', function(Blueprint $table) {
        //     $table->renameColumn('is_death', 'is_not_death');
        //     $table->renameColumn('is_illness', 'is_not_illness');
        // });

        Schema::table('client_siblings_infos', function (Blueprint $table) {
            $table->dropColumn('cause_of-death');
        });

        Schema::table('client_siblings_infos', function (Blueprint $table) {
            $table->string('illness')->nullable();
        });

        Schema::table('client_siblings_infos', function (Blueprint $table) {
            $table->string('mname')->nullable()->change();
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
        //
        Schema::table('client_siblings_infos', function(Blueprint $table) {
            $table->renameColumn('is_death', 'is_not_death');
            $table->renameColumn('is_illness', 'is_not_illness');
        });

        Schema::table('client_siblings_infos', function (Blueprint $table) {
            $table->dropColumn('illness');
        });

        Schema::table('client_siblings_infos', function (Blueprint $table) {
            $table->string('mname')->change();
            $table->string('string_type')->change();
            $table->string('age_diagnosis')->change();
        });
    }
}
