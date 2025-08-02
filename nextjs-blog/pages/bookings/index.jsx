import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
// import Button from "../../components/Button";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  notification,
  Row,
  Col,
  Checkbox,
} from "antd";
import FloatInput from "../../components/FloatInput";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import moment from "moment";
import { callApi } from "../../utils/apiUtils";
import Appointment from "../../utils/endpoints/Appointment";
import { useRouter } from "next/router";
const { TextArea } = Input;

const Bookings = () => {
  const [form] = Form.useForm();
  let router = useRouter();
  // const layout = {
  //   labelCol: { span: 8 },
  //   wrapperCol: { span: 24 },
  // };
  const [disableDate, setDisableDate] = useState({});
  const [date, setDate] = useState('');

  useEffect(() => {
    let defaultDate = getDefaultDate(true);
    // console.log(defaultDate, "defaultDate");
    getAppointmentSchedulesDayWise({
      query: { date: defaultDate + "" },
      pathParams: { day: defaultDate.getDay() },
    });
    // callApi({ uriEndPoint: { uri: "/getBooking", method: "GET", version: "" } })
    //   .then((res) => {
    //     setDisableDate({ [new Date().toDateString()]: true });
    //   })
    //   .catch((err) => console.log("err", err));
  }, []);

  const handleDateChange = (e) => {
    const inputChar = e.target.value.slice(-1);

    console.log("inputChar", inputChar);

    // Allow only digits and hyphens
    if (!/[\d-]/.test(inputChar)) {
      return;
    }

    // Concatenate the input character to the existing date
    const updatedDate = e.target.value;

    console.log("updatedDate", updatedDate);
    
    // Your custom validation logic here
    // Enforce the format YYYY-MM-DD
    const isValidDate = /^\d{0,4}-\d{0,2}-\d{0,2}$/.test(updatedDate);

    console.log("isValidDate", isValidDate);

    if (isValidDate) {
      setDate(updatedDate);
    }
  };

  const layout = {
    col: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 12,
      xl: 12,
    },
    formItem: {
      labelCol: {
        xs: 24,
        sm: 24,
        md: 4,
        lg: 24,
        xl: 4,
      },
      wrapperCol: {
        xs: 24,
        sm: 24,
        md: 20,
        lg: 24,
        xl: 20,
      },
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} options={[{ value: "1", label: "+1" }]} />
      {/* <Option value="1">+1</Option>
      </Select> */}
    </Form.Item>
  );
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    let body = {
      firstName: values.firstName,
      lastName: values.lastName,
      pronouns: values.pronouns,
      dateOfBirth: values.dateOfBirth,
      email: values.user.email,
      isExisting: values.existing_patient,
      phone: values.phone,
      preferredContactMethod: values.preferred_contact_method,
      appointmentDate: values.date,
      appointmentSlot: values.slot,
      comment: values.comment,
      healthcareId: values.healthcareId,
      examType: values.examType,
      haveHealthNumber: values.haveHealthNumber,
      isGlasses: values.isGlasses,
      insuranceProvider: values?.insuranceProvider,
      insuranceProviderOther: values.insuranceProviderOther,
    };

    callApi({
      uriEndPoint: {
        ...Appointment.bookAppointment,
      },
      body,
    }).then((e) => {
      console.log("e", e);

      notification.success({
        message: "Appointment request is received!",
        description: "Our staff will contact you soon.",
      });
      router.push("/service-products");
    });
  };

  const getAppointmentSchedules = async ({ query }) => {
    const schedules = await callApi({
      uriEndPoint: {
        ...Appointment.getSchedules,
      },
      query,
    });
    return schedules;
  };

  const getAppointmentSchedulesDayWise = async ({ query, pathParams }) => {
    const schedules = await callApi({
      uriEndPoint: {
        ...Appointment.getSingleDaySchedule,
      },
      query,
      pathParams,
    });
    if (schedules?.schedule?.scheduleSlots) {
      let newSchedules = schedules?.schedule?.scheduleSlots.map((obj) => {
        return {
          value: obj._id,
          label: getFormattedSlotTime(obj),
        };
      });

      setSlots(newSchedules);
      if (!newSchedules.length) {
        notification.error({
          message: "No slot avialable !!!",
          message: "The selected date has no slots available.",
        });
      }
    }
    return schedules;
  };

  function getFormattedSlotTime(obj) {
    let timeStr = "";
    if (obj) {
      if (obj.timeFromObjStr) {
        timeStr += obj.timeFromObjStr;
      }
      if (obj.timeAmPm) {
        timeStr += " " + obj.timeAmPm;
      }
      timeStr += " - ";
      if (obj.timeToObjStr) {
        timeStr += obj.timeToObjStr;
      }
      if (obj.timeToAmPm) {
        timeStr += " " + obj.timeToAmPm;
      } else if (obj.timeAmPm) {
        timeStr += " " + obj.timeAmPm;
      }
    }
    return timeStr;
  }

  function disableDateRanges(range = { startDate: false, endDate: false }) {
    const { startDate, endDate } = range;
    return function disabledDate(current) {
      let startCheck = true;
      let endCheck = true;
      if (startDate) {
        startCheck = current && current < moment(startDate, "YYYY-MM-DD");
      }
      if (endDate) {
        endCheck = current && current > moment(endDate, "YYYY-MM-DD");
      }
      return (startDate && startCheck) || (endDate && endCheck);
    };
  }

  function disableDateCheck(range = { startDate: false, endDate: false }) {
    const { startDate, endDate } = range;
    return function disabledDate(current) {
      let startCheck = true;
      let endCheck = true;
      if (startDate) {
        startCheck = current && current < moment(startDate, "YYYY-MM-DD");
      }
      if (endDate) {
        endCheck = current && current > moment(endDate, "YYYY-MM-DD");
      }
      return (startDate && startCheck) || (endDate && endCheck);
    };
  }

  const onChangeDate = (value) => {
    console.log(`selected ${value}`);
    form.setFieldsValue({ slot: undefined });
    let selectedAppointmentDate = new Date(value);
    console.log("selectedAppointmentDate", selectedAppointmentDate.getDay());
    if (selectedAppointmentDate.getDay()) {
      getAppointmentSchedulesDayWise({
        query: { date: selectedAppointmentDate + "" },
        pathParams: { day: selectedAppointmentDate.getDay() },
      });
    }
  };

  const getDefaultDate = (fromUseEffect = false) => {
    let todaysDate = new Date();
    // todaysDate = new Date(Date.now() + (3600 * 1000 * 24));
    // current.day() === 0 || current.day() === 2 || current.day() === 3 || current.day() === 5
    if (todaysDate.getDay() == 0 || todaysDate.getDay() == 3 || todaysDate.getDay() == 5) {
      todaysDate.setDate(todaysDate.getDate() + 1);
    } else if (todaysDate.getDay() == 2) {
      todaysDate.setDate(todaysDate.getDate() + 2);
    }
    if (fromUseEffect) {
      return todaysDate;
    }

    // return dayjs(todaysDate.toLocaleString("en-CA"), "DD/MM/YYYY");
    console.log("date, ", todaysDate.toLocaleString("en-CA"));
    let canDate = dayjs(todaysDate.toLocaleString("en-CA"), "YYYY-MM-DD");
    if (!canDate) {
      console.log("canDate#1", canDate);
      canDate = dayjs(todaysDate.toLocaleString(), "DD/MM/YYYY");
    }
    console.log("canDate", canDate);
    return canDate;
  };

  const [slots, setSlots] = useState([]);
  const [showAppointmentSuccess, setShowAppointmentSuccess] = useState(true);
  const [existingPatientValue, setExistingPatientValue] = useState("-");
  const [bcCard, setBcCardValue] = useState("-");

  const onChangeExistingPatient = (e) => {
    console.log('radio checked', e.target.value);
    setExistingPatientValue(e.target.value);
  };

  const onChangeBcCard = (e) => {
    console.log('radio checked', e.target.value);
    setBcCardValue(e.target.value);
  };

  /**
 * Defines collections of dates and date ranges to be disabled.
 * By defining these outside the main function, we ensure they are created only once,
 * improving performance by avoiding re-creation on every function call.
 */

// Use a Set for single, specific dates. Sets provide very fast O(1) lookup time.
const DISABLED_SINGLE_DATES = new Set([
  '2025-08-04',
  '2025-09-02',
  '2025-10-13',
  '2025-11-11',
  '2025-12-25',
  '2025-12-26',
  '2026-01-01',
  '2025-08-25',
  '2025-08-26',
  '2025-08-27',
  '2025-08-28',
  '2025-08-29',
  '2025-08-30',
  '2025-08-31',
  '2025-09-01',
  '2025-09-03',
]);

// Use an array of objects for date ranges. This is easy to read and expand.
const DISABLED_DATE_RANGES = [
  { start: '2025-08-25', end: '2024-09-03' },
];


/**
 * Checks if a given date should be disabled based on the predefined single dates and ranges.
 * The function is optimized to handle a large number of disabled dates efficiently.
 *
 * @param {object} currentDate - A date object from a library like Moment.js or Day.js,
 * which must have a .format() method.
 * @returns {boolean} - Returns true if the date should be disabled, otherwise false.
 */
const isDateDisabled = (currentDate) => {
  // Format the input date to a 'YYYY-MM-DD' string. This creates a consistent,
  // timezone-agnostic format for reliable comparisons.
  const dateString = currentDate.format('YYYY-MM-DD');

  // 1. Check for single disabled dates.
  // This is a highly efficient check against the Set.
  if (DISABLED_SINGLE_DATES.has(dateString)) {
    return true;
  }

  // 2. Check if the date falls within any of the disabled ranges.
  // We parse the date strings to get their numeric timestamp representation for comparison.
  // This is more reliable than comparing Date objects directly.
  const currentDateTime = Date.parse(dateString);
  for (const range of DISABLED_DATE_RANGES) {
    const startDateTime = Date.parse(range.start);
    const endDateTime = Date.parse(range.end);
    if (currentDateTime >= startDateTime && currentDateTime <= endDateTime) {
      return true; // The date is within a disabled range.
    }
  }

  // 3. If the date has not been found in the Set or any range, it is enabled.
  return false;
};

  return (
    <main>
      <div className="md:mt-0">
        <Banner
          banner="banner-bookings-img"
          text={`<span class="text-black md:text-white">
            Get a full check up
            <br />
            with one of our Optometrists, we're available evenings
            <br />
            and weekends too!
          </span>`}
        />
      </div>
      <div className="flex justify-center md:mt-10 ">
        <div
          // style={{ boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)" }}
          className="md:px-8 py-4 rounded-border mx-auto md:w-2/5 w-11/12 md:shadow-sm"
        >
          <Form
            // {...layout}
            form={form}
            // name="nest-messages"
            onFinish={onFinish}
            // style={{ maxWidth: 800 }}
            // validateMessages={validateMessages}
            size={"large"}
            layout="vertical"
          >
            <Form.Item
              label="Pronouns"
              name="pronouns"
              rules={[{ required: true }]}
            >
              <Radio.Group value={"no"}>
                <Radio.Button value="he">He/His</Radio.Button>
                <Radio.Button checked value="she">
                  She/Her
                </Radio.Button>

                <Radio.Button value="they">They/Their</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="dateOfBirth"
              label="Date of Birth"
              rules={[{ required: true, message: "Please enter date" }]}
            >
              <DatePicker className="w-full" defaultValue={dayjs('2000-06-01', 'YYYY-MM-DD')}/>
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email", required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Existing Patient?"
              name="existing_patient"
              rules={[{ required: true }]}
            >
              <Radio.Group value={"no"} onChange={onChangeExistingPatient}>
                <Radio.Button value="yes">Yes</Radio.Button>
                <Radio.Button checked value="no"> No
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            {existingPatientValue == "no" && (<>
              <Form.Item
                label="Do you have a BC Service Card or your Personal Health Number?"
                name="haveHealthNumber"
                rules={[{ required: existingPatientValue == "no" }]}
              >
                <Radio.Group value={"no"} onChange={onChangeBcCard}>
                  <Radio.Button value="yes">Yes</Radio.Button>
                  <Radio.Button value="no">No</Radio.Button>
                </Radio.Group>
              </Form.Item>
              {bcCard == "yes" && (<> <Form.Item
                name="healthcareId"
                label="Healthcare Id"
                rules={[
                  { required: bcCard == "yes", message: "Health care id is required" },
                ]}
              >
                <Input />
              </Form.Item>
              </>)
              }
            </>)
            }
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Prefered Contact Method"
              name="preferred_contact_method"
              rules={[{ required: true }]}
            >
              <Radio.Group value={"email"}>
                <Radio.Button value="email">Email</Radio.Button>
                <Radio.Button value="phone">Phone</Radio.Button>
                <Radio.Button selected value="any">
                  Any
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Choose your Exam Type"
              name="examType"
              rules={[{ required: true, message: "Please select exam type" }]}
            >
              <Radio.Group value={"eye_exams_contact"}>
                <Radio.Button value="Eye exam only (health check and refraction)">
                  Eye exam only (health check & refraction)
                </Radio.Button>
                <Radio.Button value="Eye exam with contact lens">
                  Eye exam with contact lens
                </Radio.Button>
                <Radio.Button value="Scleral fitting">
                  Scleral fitting
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Do you currently wear corrective lenses? (Glasses or contact lenses)" name="isGlasses">
              <Radio.Group value={"no"}>
                <Radio.Button value="yes">Yes</Radio.Button>
                <Radio.Button value="no">No</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="insuranceProvider"
              label="Please select your insurance provider?"
            >
              <Radio.Group value={"Canada Life"}>
                <Radio.Button value="Canada Life">Canada Life</Radio.Button>
                <Radio.Button value="Equitable Life">Equitable Life</Radio.Button>
                <Radio.Button value="Green Shield Insurance">Green Shield Insurance</Radio.Button>
                <Radio.Button value="Manu Life">Manu Life</Radio.Button>
                <Radio.Button value="Sun Life">Sun Life</Radio.Button>
                <Radio.Button value="Empire Life">Empire Life</Radio.Button>
                <Radio.Button value="Pacific Blue Cross">Pacific Blue Cross</Radio.Button>
                <Radio.Button value="Cooperators">Cooperators</Radio.Button>
                <Radio.Button value="SSQ">SSQ</Radio.Button>
                <Radio.Button value="NexgenRx">NexgenRx</Radio.Button>
                <Radio.Button value="Chambers of Commerce">Chambers of Commerce</Radio.Button>
                <Radio.Button value="Desjardins">Desjardins</Radio.Button>
                <Radio.Button value="Group Health">Group Health</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="insuranceProviderOther"
              label="Insurance provider's name (If not in list)"
            >
              <Input style={{ width: "100%" }} placeholder="Other insurance" />
            </Form.Item>
            <Form.Item
              name="date"
              label="Appointment Date"
              rules={[{ required: true, message: "Please select date" }]}
            >
              <DatePicker
                className="w-full"
                // defaultValue={getDefaultDate()}
                disabledDate={(current) => {
                  return (
                    current.startOf("hour", 0) < moment().startOf("hour", 0) ||
                    current.day() === 0 || current.day() === 2 || current.day() === 3
                     || isDateDisabled(current)
                    );
                }}
                format={"DD/MM/YYYY"}
                onChange={onChangeDate}
              />
            </Form.Item>
            <Form.Item
              name="slot"
              label="Appointment Slot"
              rules={[
                {
                  required: true,
                  message: "Slot is not available for selected date",
                },
              ]}
            >
              <Select
                placeholder="Select a slot"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={slots}
              />
            </Form.Item>
            <Form.Item name="comment" label="Comments">
              <TextArea
                rows={4}
                placeholder="Any questions or comments..."
                maxLength={320}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
              <Button
                type="primary"
                block
                className="book-appointment-button"
                htmlType="submit"
                style={{ backgroundColor: "#1D3D74" }}
              >
                Book
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      {showAppointmentSuccess && (
        <div id="success_tic" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <a className="" href="#" data-dismiss="modal">
                &times;
              </a>
              <div className="page-body">
                <div className="head">
                  <h3 className="mt-2">Lorem ipsum dolor sit amet</h3>
                  <h4>Lorem ipsum dolor sit amet</h4>
                </div>

                <h1 style={{ textAlign: "center" }}>
                  <div className="checkmark-circle">
                    <div className="background"></div>
                    <div className="checkmark draw"></div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Bookings;
