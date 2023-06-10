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
        //
        // Schema::table('client_siblings_info', function(Blueprint $table) {
        //     $table->renameColumn('is_death', 'is_not_death');
        //     $table->renameColumn('is_illness', 'is_not_illness');
        // });

        // Schema::table('client_siblings_info', function (Blueprint $table) {
        //     $table->dropColumn('cause_of-death');
        //     $table->dropColumn('is_death');
        //     $table->dropColumn('is_illness');
        // });

        // Schema::table('client_siblings_info', function (Blueprint $table) {
        //     $table->string('illness')->nullable();
        //     $table->string('cause_of_death')->nullable();
        //     $table->string('is_not_death')->nullable();
        //     $table->string('is_not_illness')->nullable();
        // });

        Schema::table('client_siblings_info', function (Blueprint $table) {
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
    }
};
