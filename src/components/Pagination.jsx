import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const {page, totalPages, handlePageChange} = useContext(AppContext);

  return (
    <div className=''>
        <footer className='w-screen h-14 flex border-0 border-t-2 fixed bottom-0 bg-white'>
            <div className='w-1/2 mx-auto flex justify-between py-2'>
                <div className='flex gap-2'>
                    { page > 1 &&
                        <button onClick={ () => handlePageChange(page-1)}
                        className='border-solid border-slate-300 border-2 rounded-md px-4'
                        >
                            Previous
                        </button>
                    }

                    { page < totalPages &&
                        <button onClick={() => handlePageChange(page+1)}
                         className='border-solid border-slate-300 border-2 rounded-md px-4'
                        >
                            Next
                        </button>
                    }
                </div>

                <div className='flex items-center'>
                    <p className='font-semibold text-sm'>Page {page} of {totalPages}</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Pagination



