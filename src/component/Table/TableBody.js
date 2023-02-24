import React from 'react';

const TableBody = () => {
    return (
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
    );
};

export default TableBody;