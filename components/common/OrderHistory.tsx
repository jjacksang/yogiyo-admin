import React from 'react';

type Props = {};

const OrderHistory = (props: Props) => {
  return (
    <div className="flex flex-col mt-8 border border-gray-200 shadow-md rounded-lg bg-white" style={{ maxWidth: '59.0625rem' }}>
      <div className="p-8 pb-6 border-b border-gray-200" style={{ paddingTop: '2rem', paddingRight: '1.5rem', paddingLeft: '1.5rem' }}>
        <div className="flex items-center">
          <div className="flex items-center flex-1 min-h-10 text-xl leading-7" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '1.375rem', lineHeight: '1.875rem' }}>
            주문내역
          </div>
        </div>
      </div>

      <div className="box-border border-0">
        <div className="px-5" style={{ padding: '0px 20px' }}>
          <div className="py-6" style={{ padding: '24px 0px' }}>
            <div className="flex flex-col items-start">
              <div className="flex flex-col lg:flex-row items-start justify-between w-full mb-7 lg:mb-0">
                
                <div className="flex justify-between w-full flex-row">
                  <div className="flex-1" style={{ marginRight: '16px', flex: '1 1 0%' }}>
                    <div style={{ minWidth: '325px', width: 'fit-content' }}>
                      <div className="react-datepicker-wrapper block">
                        <div className="relative inline-block w-full">
                          <div className="inline-flex flex-col w-full">
                            <div className="inline-flex justify-between items-center relative px-4" style={{ minWidth: '120px', height: '48px', padding: '0px 12px', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset' }}>
                              
                              <div style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', pointerEvents: 'none', borderRadius: '10px' }}>
                                <div className="whitespace-nowrap min-w-14 mr-2 text-sm leading-5 font-normal text-gray-600" style={{ minWidth: '56px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '14px', lineHeight: '19px' }}>
                                  빠른설정
                                </div>
                                
                                <div className="flex flex-1 items-center pr-2">
                                  <input
                                    type="text"
                                    readOnly
                                    className="w-full px-1 text-gray-800 cursor-pointer text-base leading-6 font-normal"
                                    style={{ color: 'rgba(0, 0, 0, 0.8)', padding: '0px 4px', fontSize: '16px', lineHeight: '22px' }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
