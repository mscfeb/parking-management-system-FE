import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteBooking, fetchBookings, updateBooking } from '../api/api'
import { DeleteModal } from '../components';

const Booking = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [bookings, setBookings] = useState()

    // Delete management states
    const [selectedBooking, setSelectedBooking] = useState()
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    // Used to display multiple Booking cards
    const bookingsRow = () => {
        return bookings && bookings.map((item, index) => (
            <tr className='col-md-4' key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item?.vehicle_company}</td>
                <td>{item?.vehicle_model}</td>
                <td>{item?.plate_number}</td>
                <td>{item?.car_color}</td>
                <td>{item?.space_id?.name}</td>
                <td>{moment.utc(item?.space_id?.date).format('DD-MM-YYYY')}</td>
                <td>{item?.space_id?.slot_start_time}</td>
                <td>{item?.space_id?.slot_end_time}</td>
                <td>{moment.utc(item?.createdAt).format('DD-MM-YYYY / hh:mm a')}</td>
                <td>{item?.confirm_booking}</td>
                <td>
                    {user?.type === 'seeker' ?
                        <button className='btn btn-outline-danger ms-2' onClick={() => handleDelete(item)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        </button>
                        :
                        <>
                            {item?.confirm_booking === 'pending' ?
                                <>
                                    <button className='btn btn-outline-success ms-2' onClick={() => handleUpdateBooking({ id: item?._id, confirm_booking: 'approved' })}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                    </button>
                                    <button className='btn btn-outline-danger ms-2' onClick={() => handleUpdateBooking({ id: item?._id, confirm_booking: 'rejected' })}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </button>
                                </>
                                :<span>Done</span>}
                        </>
                    }
                </td>
            </tr>
        ))
    }

    useEffect(() => {
        // Booking List API sets bookings state using setBookings passed as callback function
        if (user?.type === 'owner') {
            fetchBookings({ owner_id: user?._id, setBookings })
        }
        else {
            fetchBookings({ user_id: user?._id, setBookings })
        }
    }, [])

    const handleDelete = (booking) => {
        setSelectedBooking(booking)
        setShowDeleteModal(true)
    }

    // Used to change state of booking confirmation.
    const handleUpdateBooking = ({ id, confirm_booking }) => {
        let body = {
            confirm_booking
        }
        updateBooking({ id, body, handleUpdateBookingSuccess, handleUpdateBookingFailure })
    }

    const handleUpdateBookingSuccess = (result) => {
        if (user?.type === 'owner') {
            fetchBookings({ owner_id: user?._id, setBookings })
        }
        else {
            fetchBookings({ user_id: user?._id, setBookings })
        }
    }

    const handleUpdateBookingFailure = (error) => {
        console.log('handleUpdateBookingFailure ', error);
    }

    // Used to delete parking
    const handleDeleteBooking = () => {
        deleteBooking({ id: selectedBooking?._id, handleDeleteBookingSuccess, handleDeleteBookingFailure })
    }

    const handleDeleteBookingSuccess = () => {
        fetchBookings({ user_id: user?._id, setBookings })
        setShowDeleteModal(false)
    }

    const handleDeleteBookingFailure = () => {
        setShowDeleteModal(false)
    }


    return (
       <div className='container'>
  <h1 className='mt-5'>My Bookings</h1>

  {/* Table View for sm and up */}
  <div className='row mt-2 g-5 table-responsive d-none d-sm-block'>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Vehicle company</th>
          <th>Vehicle model</th>
          <th>Plate number</th>
          <th>Car color</th>
          <th>Space</th>
          <th>Space Date</th>
          <th>Slot start time</th>
          <th>Slot end time</th>
          <th>Booking time</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {bookings?.length > 0 ? (
          bookingsRow()
        ) : (
          <tr className='text-center'>
            <td colSpan={12}><em>No bookings found</em></td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

  {/* Card View for xs only */}
  <div className='row mt-2 g-3 d-block d-sm-none'>
    {bookings?.length > 0 ? (
      bookings.map((item, index) => (
        <div className="col-12" key={index}>
          <div className="card shadow-sm p-3">
            <h5 className='card-title'>#{index + 1} - {item?.vehicle_company} {item?.vehicle_model}</h5>
            <div className="card-body p-2">
              <p><strong>Plate:</strong> {item?.plate_number}</p>
              <p><strong>Color:</strong> {item?.car_color}</p>
              <p><strong>Space:</strong> {item?.space_id?.name}</p>
              <p><strong>Date:</strong> {moment.utc(item?.space_id?.date).format('DD-MM-YYYY')}</p>
              <p><strong>Time:</strong> {item?.space_id?.slot_start_time} - {item?.space_id?.slot_end_time}</p>
              <p><strong>Booked at:</strong> {moment.utc(item?.createdAt).format('DD-MM-YYYY / hh:mm a')}</p>
              <p><strong>Status:</strong> {item?.confirm_booking}</p>

              <div className="d-flex gap-2 flex-wrap mt-2">
                {user?.type === 'seeker' ? (
                  <button className='btn btn-outline-danger btn-sm' onClick={() => handleDelete(item)}>
                    Delete
                  </button>
                ) : item?.confirm_booking === 'pending' ? (
                  <>
                    <button className='btn btn-outline-success btn-sm' onClick={() => handleUpdateBooking({ id: item?._id, confirm_booking: 'approved' })}>
                      Approve
                    </button>
                    <button className='btn btn-outline-danger btn-sm' onClick={() => handleUpdateBooking({ id: item?._id, confirm_booking: 'rejected' })}>
                      Reject
                    </button>
                  </>
                ) : (
                  <span className='text-muted'>Done</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className='text-center'><em>No bookings found</em></div>
    )}
  </div>

  {/* Delete Modal */}
  <DeleteModal showModal={showDeleteModal} setShowModal={setShowDeleteModal} onDeleteConfirm={handleDeleteBooking} />
</div>

    )
}

export default Booking