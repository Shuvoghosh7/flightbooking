import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { removeBook } from '../../redux/booking/actionCreator';

const TableBody = ({book}) => {
    const dispatch = useDispatch();
    const{from,to,date,guests,ticketClass,}=book
    return (
        <tr class="lws-bookedTable text-black">
            <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                    <p class="lws-bookedFrom">{from}</p>
                </div>
            </td>
            <td class="px-6 py-4">
                <p class="lws-bookedTo">{to}</p>
            </td>
            <td class="px-6 py-4 text-center">
                <p class="lws-bookedDate">{date}</p>
            </td>
            <td class="px-6 py-4 text-center">
                <p class="lws-bookedGustes">{guests}</p>
            </td>
            <td class="px-6 py-4 text-center">
                <span class="lws-bookedClass"> {ticketClass} </span>
            </td>
            <td class="px-6 py-4 text-center">
                <div class="flex justify-center gap-4">
                    <button class="lws-remove" onClick={()=>dispatch(removeBook(book))}>
                        remove
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default TableBody;