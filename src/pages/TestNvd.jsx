import React from 'react';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );


const TestNvd = (props) => {
    //  await delay(10000);
    return (
        <div className='page-loader'>
            <h1>Test page</h1>
            <p></p>
        </div>
    );
}

export default TestNvd