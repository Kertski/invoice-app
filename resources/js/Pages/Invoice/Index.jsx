import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia'
import { Head, Link } from '@inertiajs/inertia-react';
import { get } from 'lodash';
import { useState } from 'react';

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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className='row flex gap-20'>
                            <div className='col-sm-3'>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="keyword" 
                                    placeholder="keyword" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='col-sm-3'>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="invoice_to" 
                                    placeholder="Invoice To" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='col-sm-3'>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    name="date_from" 
                                    placeholder="Date From" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='col-sm-3'>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    name="date_to" 
                                    placeholder="Date To" 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='col-sm-3'>
                               <button className ="rounded-full" onClick={doSearchHandler}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <table className="w-full whitespace-nowrap">
                            <thead>
                            <tr className="text-left font-bold">
                                <th className="pb-4 pt-6 px-6">Invoice #</th>
                                <th className="pb-4 pt-6 px-6">Invoice To</th>
                                <th className="pb-4 pt-6 px-6">Date</th>
                                <th className="pb-4 pt-6 px-6">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                                {props.invoices.map((item)=> {
                                    return (
                                    <tr className="text-left">
                                            <td className="pb-4 pt-6 px-6">
                                                <Link className="flex items-center px-6 py-4 focus:text-indigo-500 font-bold" href={`/admin/invoices/${item.inv_id}/edit`}>
                                                    {item.inv_number}
                                                </Link>
                                            </td>
                                            <td className="pb-4 pt-6 px-6">{item.inv_to}</td>
                                            <td className="pb-4 pt-6 px-6">{item.inv_date}</td>
                                            <td className="pb-4 pt-6 px-6">{item.inv_amount}</td>
                                        </tr>
                                    );
                                    })} 
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            </AuthenticatedLayout>
        );

}