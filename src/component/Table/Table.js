import React from 'react';

const Table = () => {
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
                <tr class="lws-bookedTable text-black">
            <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                    <p class="lws-bookedFrom">Dhaka</p>
                </div>
            </td>
            <td class="px-6 py-4">
                <p class="lws-bookedTo">Sylhet</p>
            </td>
            <td class="px-6 py-4 text-center">
                <p class="lws-bookedDate">11-01-23</p>
            </td>
            <td class="px-6 py-4 text-center">
                <p class="lws-bookedGustes">2</p>
            </td>
            <td class="px-6 py-4 text-center">
                <span class="lws-bookedClass"> Business </span>
            </td>
            <td class="px-6 py-4 text-center">
                <div class="flex justify-center gap-4">
                    <button class="lws-remove">
                        remove
                    </button>
                </div>
            </td>
        </tr>
            </tbody>
        </table>
    </div>
    );
};

export default Table;