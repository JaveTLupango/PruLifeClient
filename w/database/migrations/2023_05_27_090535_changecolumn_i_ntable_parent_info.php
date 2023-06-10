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

        //  Schema::table('client_parent_info', function (Blueprint $table) {
        //     $table->dropColumn('cause_of-death');
        // });


        // Schema::table('client_parent_info', function (Blueprint $table) {
        //     $table->string('illness')->nullable();
        //     $table->string('cause_of_death')->nullable();
        // });

        // Schema::table('client_parent_info', function (Blueprint $table) {
        //     $table->string('mname')->nullable()->change();
        //     $table->string('string_type')->nullable()->change();
        //     $table->string('age_diagnosis')->nullable()->change();
        // });

        // Schema::table('client_parent_info', function(Blueprint $table) {
        //     $table->renameColumn('is_death', 'is_not_death');
        //     $table->renameColumn('is_illness', 'is_not_illness');
        // });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {


        Schema::table('client_parent_info', function (Blueprint $table) {
            $table->dropColumn('illness');
            $table->dropColumn('cause_of_death');
        });
        Schema::table('client_parent_info', function (Blueprint $table) {
            $table->string('mname')->change();
            $table->string('string_type')->change();
            $table->string('age_diagnosis')->change();
        }); //
        // Schema::table('client_parent_info', function(Blueprint $table) {
        //     $table->renameColumn('is_not_death', 'is_death');
        //     $table->renameColumn('is_not_illness', 'is_illness');
        // });
    }
};
