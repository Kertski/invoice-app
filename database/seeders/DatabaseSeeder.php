<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Invoice::factory(10)->create();

        \App\Models\Currency::factory()->create(['cur_code' => 'AUD', 'cur_name' => 'AUS Dollar', 'created_by' => 1,]);
        \App\Models\Currency::factory()->create(['cur_code' => 'EUR', 'cur_name' => 'Euro', 'created_by' => 1,]);
        \App\Models\Currency::factory()->create(['cur_code' => 'JPY', 'cur_name' => 'Yen', 'created_by' => 1,]);
        \App\Models\Currency::factory()->create(['cur_code' => 'PHP', 'cur_name' => 'Philippine Peso', 'created_by' => 1,]);
        \App\Models\Currency::factory()->create(['cur_code' => 'USD', 'cur_name' => 'US Dollar', 'created_by' => 1,]);
    
        \App\Models\OptionGroups::factory()->create(['opg_code' => 'INVSTAT','opg_name' => 'Invoice Status', 'opg_description' => 'Status of Invoices', 'created_by' => 1,]);
    
        \App\Models\Option::factory()->create(['opt_code' => 'DRAFT', 'opt_name' => 'Draft', 'opt_group_id' => 1, 'opt_sort_order' => 1, 'opt_description' => "Invoice in Draft", 'created_by' => 1,]);
        \App\Models\Option::factory()->create(['opt_code' => 'NEW', 'opt_name' => 'New', 'opt_group_id' => 1, 'opt_sort_order' => 2, 'opt_description' => "Invoice Newly Created", 'created_by' => 1,]);
        \App\Models\Option::factory()->create(['opt_code' => 'RELEASED', 'opt_name' => 'Released', 'opt_group_id' => 1, 'opt_sort_order' => 3, 'opt_description' => "Package on Delivery", 'created_by' => 1,]);
        \App\Models\Option::factory()->create(['opt_code' => 'PAID', 'opt_name' => 'Paid', 'opt_group_id' => 1, 'opt_sort_order' => 4, 'opt_description' => "Order Paid", 'created_by' => 1,]);
        \App\Models\Option::factory()->create(['opt_code' => 'CANCELLED', 'opt_name' => 'Cancelled', 'opt_group_id' => 1, 'opt_sort_order' => 5, 'opt_description' => "Order has been cancelled", 'created_by' => 1,]);
    
        \App\Models\OptionGroups::factory()->create(['opg_code' => 'PAYMETH','opg_name' => 'Payment Method',  'opg_description' => 'Payment Method selected by the customer', 'created_by' => 1,]);
    
        \App\Models\Option::factory()->create(['opt_code' => 'COD', 'opt_name' => 'Cash on Delivery', 'opt_group_id' => 2, 'opt_sort_order' => 1, 'opt_description' => "Customer selected COD payment method", 'created_by' => 1,]);
        \App\Models\Option::factory()->create(['opt_code' => 'CC', 'opt_name' => 'Credit Cart', 'opt_group_id' => 2, 'opt_sort_order' => 2, 'opt_description' => "Customer selected Credit Card payment method", 'created_by' => 1,]);
        \App\Models\Option::factory()->create(['opt_code' => 'Gcash', 'opt_name' => 'Gcash', 'opt_group_id' => 2, 'opt_sort_order' => 3, 'opt_description' => "Customer selected Gcash payment method", 'created_by' => 1,]);
        \App\Models\Option::factory()->create(['opt_code' => 'Maya', 'opt_name' => 'Paymaya', 'opt_group_id' => 2, 'opt_sort_order' => 4, 'opt_description' => "Customer selected Paymaya payment method", 'created_by' => 1,]);
        \App\Models\Option::factory()->create(['opt_code' => 'Paypal', 'opt_name' => 'Paypal', 'opt_group_id' => 2, 'opt_sort_order' => 5, 'opt_description' => "Customer selected Paymaya payment method", 'created_by' => 1,]);
    }  

}
