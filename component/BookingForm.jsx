import React from 'react'

const BookingForm = () => {
  return (
    <div className="mt-6">
    <h2 className="text-xl font-bold">Book this Room</h2>
    <form className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="check_in_date"
            className="block text-sm font-medium text-gray-700"
          >
            Check-In Date
          </label>
          <input
            type="date"
            id="check_in_date"
            name="check_in_date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_in_time"
            className="block text-sm font-medium text-gray-700"
          >
            standard_7d52b07b10a08a754939af4d51c8bc0037606d96036847f278586c82464f1205459889b0ac95b0cd605056121415dfd77d78515005ed1b31db4720cbd8b019aa09dd6426b479bbab061a64dbf6cca95907db445dbf927391e344094e0df582e85fd3f321beba8f163f2caa8e987a7783da4732e6e53bc63b97cee721ebffda39
            Check-In Time
          </label>
          <input
            type="time"
            id="check_in_time"
            name="check_in_time"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_out_date"
            className="block text-sm font-medium text-gray-700"
          >
            Check-Out Date
          </label>
          <input
            type="date"
            id="check_out_date"
            name="check_out_date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_out_time"
            className="block text-sm font-medium text-gray-700"
          >
            Check-Out Time
          </label>
          <input
            type="time"
            id="check_out_time"
            name="check_out_time"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          Book Room
        </button>
      </div>
    </form>
  </div>
  )
}

export default BookingForm