import React from 'react';
import { useSelector } from 'react-redux';
import TableBody from './TableBody';

const Table = () => {
    const booking=useSelector((state) =>state.book)
    console.log(booking)
    return (
        <div class="table-container flex justify-center mt-12 ">
        <table class="booking-table bg-white">
            <thead class="bg-gray-100/50">
                <tr class="text-black text-left border-b-4 border-black">
                    <th>Destination From</th>
                    <th>Destination To</th>
                    <th class="text-center">Journey Date</th>
                    <th class="text-center">Guests</th>
                    <th class="text-center">Class</th>
                    <th class="text-center">Delete</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
                {/* <!-- Row 1 --> */}
                {
                    booking?.map(book => <TableBody book={book}/>)
                }
            </tbody>
        </table>
    </div>
    );
};

export default Table;