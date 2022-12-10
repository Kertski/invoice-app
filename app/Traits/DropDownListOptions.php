<?php

namespace App\Traits;

use App\Models\Currency;
use App\Models\Option;

trait DropDownListOption {

    public function getCurrencyList() {
        return Currency::orderby('cur_name', 'ASC')->get();
    }

    public function getInvoiceStatusList() {
        return Option::orderby('opt_sort_order', 'ASC')->get();
    }

    public function getInvoicePaymentMethodList() {
        return Option::orderby('opt_sort_order', 'ASC')->get();
    }
}