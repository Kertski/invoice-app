<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class OptionGroup extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = "opg_id";

    protected $dates = ['created_at', 'updated_at', 'deleted_at', 'inv_date'];

    public function createdBy() {

        return $this->belongsTo('App\Models\User','created_by');
    }

    public function getOptionGroupCode() {
        return $this->opg_code;
    }

    public function options() {
        return $this->hasMany(Option::class, 'opt_group_id');
    }

}
