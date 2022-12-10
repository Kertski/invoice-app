<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BaseModel extends Model

{
    use HasFactory, SoftDeletes;

    protected $primaryKey = "inv_id";

    protected $dates = ['created_at', 'updated_at', 'deleted_at', 'inv_date'];

    public function createdBy() {
        return $this->belongsTo('App\Models\User'. 'created_by');
    }

    public function modifiedBy() {
        return $this->belongsTo('App\Models\User'. 'modified_by');
    }

}
