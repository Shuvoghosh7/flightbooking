import React from 'react';
import './Flight.css'
import From from './From/From';
import Table from './Table/Table';

const Flight = () => {
    return (
        <div>
            <section>
                 <From/>
                 <div>
                    <Table/>     
                 </div>   
            </section>
        </div>
    );
};

export default Flight;