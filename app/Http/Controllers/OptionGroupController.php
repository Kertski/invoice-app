<?php

namespace App\Http\Controllers;

use App\Models\OptionGroup;
use App\Http\Requests\StoreOptionGroupsRequest;
use App\Http\Requests\UpdateOptionGroupsRequest;

class OptionGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOptionGroupsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOptionGroupsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OptionGroup  $optionGroups
     * @return \Illuminate\Http\Response
     */
    public function show(OptionGroup $optionGroups)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OptionGroups  $optionGroups
     * @return \Illuminate\Http\Response
     */
    public function edit(OptionGroup $optionGroup)
    {
        // $optionGroups = OptionGroup::find(1);
        \Log::info(print_r($optionGroup->options, true));
        \Log::info(print_r($optionGroup, true));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOptionGroupsRequest  $request
     * @param  \App\Models\OptionGroup  $optionGroups
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOptionGroupsRequest $request, OptionGroup $optionGroups)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OptionGroup  $optionGroups
     * @return \Illuminate\Http\Response
     */
    public function destroy(OptionGroup $optionGroups)
    {
        //
    }
}
