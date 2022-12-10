import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia'
import { Head } from '@inertiajs/inertia-react';
import { useState } from 'react';
import React from 'react';
import Select from 'react-select';

export default function Invoices(props) {

    const [filters, setFilters] = useState();

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setFilters(values=>({...values, [fieldName]: fieldValue}));
    }

    const doSearchHandler = (event) => {

        Inertia.get(route(route().current()), filters,
        {
            preserveState: true,
            replace: true,
        });
    }

    /* useEffect (() => {
        Inertia.get(
            route(route().current()),
            filters,
            {
                preserveState: true,
                replace: true,
            });
        
    }, [filters]); */

    /* const doSearch = () => {
        fetch('http://localhost:8000/admin/invoices')
        .then(response => response.json())
        .ten(data => {
            props.invoices = data;
        })
        .catch((err) => {
            console.log(err.message);
        });
    } */

    return (
        <AuthenticatedLayout
            auth={props.auth} 
            errors={props.errors} 
            header={<h2 className="font-semibold text-x1 text-gray-800 leading-tight">Invoices</h2>}
        >

            <Head title="Invoices" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" row bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <form className=" mt-6 space-y-6">
                            <div className='col'>
                                <div>
                                    <InputLabel 
                                        for="invoice_number" 
                                        value="invoice #"
                                    />
                                    <TextInput id="invoice_number" 
                                        className="mt-1-block w-full" 
                                        handleChange={handleChange}
                                        value={props.invoice.inv_number} 
                                        required
                                        autofocus
                                    />
                                </div>
                                <div>
                                    <InputLabel 
                                        for="invoice_to" 
                                        value="invoice To"
                                    />
                                    <TextInput id="invoice_to" 
                                        className="mt-1-block w-full" 
                                        handleChange={handleChange}
                                        value={props.invoice.inv_to} 
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div>
                                    <InputLabel 
                                        for="contact_number" 
                                        value="Contact #"
                                    />
                                    <TextInput id="contact_number" 
                                        className="mt-1-block w-full" 
                                        handleChange={handleChange}
                                        value={props.invoice.inv_contact_number} 
                                        required
                                    />
                                </div>
                                <div>
                                    <InputLabel 
                                        for="invoice_date" 
                                        value="invoice Date"
                                    />
                                    <TextInput id="invoice_date" 
                                        typr="date"
                                        className="mt-1-block w-full" 
                                        handleChange={handleChange}
                                        value={props.invoice.inv_date} 
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div>
                                    <InputLabel 
                                        for="currency" 
                                        value="Currency"
                                    />
                                    <Select id="currency" className="mt-1-block w-full"  onChange={handleChange}>

                                    </Select>
                                </div>
                                <div>
                                    <InputLabel 
                                        for="status" 
                                        value="Status"
                                    />
                                    <Select id="status" className="mt-1-block w-full"  onChange={handleChange}>

                                    </Select>
                                </div>
                           
                                <div>
                                    <InputLabel 
                                        for="payment_method" 
                                        value="Payment Method"
                                    />
                                    <Select id="payment_method" className="mt-1-block w-full"  onChange={handleChange}>

                                    </Select>
                                </div>
                                </div>
                                <div>
                                    <InputLabel 
                                        for="delivery_address" 
                                        value="Delivery Address"
                                    />
                                    <textarea id="delivery_address" className="mt-1-block w-full"  onChange={handleChange}>

                                    </textarea>
                                </div>
                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
        );

}