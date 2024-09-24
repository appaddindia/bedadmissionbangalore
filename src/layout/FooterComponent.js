"use client"
import Link from 'next/link';
import React from 'react';

const FooterComponent = () => {
  return (
    <div className='small' style={{ position: 'fixed', bottom: '0px', zIndex: 999, width: '100%' }}>
      <div className="row">
        <div style={{ backgroundColor: '#565557', padding: '18px 3px' }} className="col-3">
          <a style={{ width: '100%' }} href="tel:9538861888">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <svg
                style={{ width: '20px', marginBottom: '8px' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="white"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </div>
            <p style={{ textAlign: 'center', marginBottom: '0px', color: 'white', fontSize: '12px' }}>Call Us</p>
          </a>
        </div>

        <div style={{ backgroundColor: '#a61524', padding: '18px 3px' }} className="col-3">
          <a style={{ width: '100%' }} href="https://api.whatsapp.com/send/?phone=%2B9538861888&text=Hello">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <svg
                style={{ width: '20px', marginBottom: '8px' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="white"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
            </div>
            <p style={{ textAlign: 'center', marginBottom: '0px', color: 'white', fontSize: '12px' }}>Whatsapp</p>
          </a>
        </div>

        <div style={{ backgroundColor: '#565557', padding: '18px 3px' }} className="col-3">
          <Link style={{ width: '100%' }} href="/contacts">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <svg
                style={{ width: '17px', marginBottom: '8px' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="white"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
            </div>
            <p style={{ textAlign: 'center', marginBottom: '0px', color: 'white', fontSize: '12px' }}>Location</p>
          </Link>
        </div>

        <div style={{ backgroundColor: '#a61524', padding: '18px 3px' }} className="col-3">
          <a style={{ width: '100%' }} href="mailto:digitaleducation855@gmail.com">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <svg
                style={{ width: '20px', marginBottom: '8px' }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="white"
                  d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"
                />
              </svg>
            </div>
            <p style={{ textAlign: 'center', marginBottom: '0px', color: 'white', fontSize: '12px' }}>Appoint</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
