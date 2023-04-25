import { EndPoint } from ' ../../../types/index';

const Appointment: EndPoint = {
  getSchedules: {
    uri: '/schedules',
    method: 'GET',
    version: '',
  },
  getSingleDaySchedule: {
    uri: '/schedules/day-wise/:day',
    method: 'GET',
    version: '',
  },
  bookAppointment: {
    uri: '/schedules',
    method: 'POST',
    version: '',
  }
};

export default Appointment;
