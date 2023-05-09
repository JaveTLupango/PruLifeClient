<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnOfParentInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('client_parent_infos', function(Blueprint $table) {
            $table->renameColumn('is_death', 'is_not_death');
            $table->renameColumn('is_illness', 'is_not_illness');
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('client_parent_infos', function(Blueprint $table) {
            $table->renameColumn('is_not_death', 'is_death');
            $table->renameColumn('is_not_illness', 'is_illness');
        });

    }
}
