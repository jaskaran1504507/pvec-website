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
  let router = useRouter();
  // const layout = {
  //   labelCol: { span: 8 },
  //   wrapperCol: { span: 24 },
  // };
  const [disableDate, setDisableDate] = useState({});

  useEffect(() => {
    let defaultDate = getDefaultDate(true);

    console.log(defaultDate, "defaultDate");
    getAppointmentSchedulesDayWise({
      query: { date: defaultDate + "" },
      pathParams: { day: defaultDate.getDay() },
    });
    callApi({ uriEndPoint: { uri: "/getBooking", method: "GET", version: "" } })
      .then((res) => {
        setDisableDate({ [new Date().toDateString()]: true });
      })
      .catch((err) => console.log("err", err));
  }, []);

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
      name: values.user.name,
      email: values.user.email,
      isExisting: values.existing_patient,
      phone: values.phone,
      preferredContactMethod: values.preferred_contact_method,
      appointmentDate: values.date,
      appointmentSlot: values.slot,
      comment: values.comment,
      healthcareId: values.healthcareId,
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
        timeStr += " " + obj.timeAmPm;
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
    if (todaysDate.getDay() == 0) {
      todaysDate.setDate(todaysDate.getDate() + 1);
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

  return (
    <main>
      <div className="mt-28 md:mt-0">
        <Banner
          banner="banner-bookings-img"
          text={
            <span className="text-black md:text-white">
              Get a full check up
              <br />
              with one of our Optometrists, we're available evenings
              <br />
              and weekends too!
            </span>
          }
        />
      </div>
      <div className="flex justify-center mt-10 ">
        <div
          style={{ boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)" }}
          className="px-8 py-4 rounded-border mx-auto md:w-2/5 w-3/4"
        >
          <Form
            // {...layout}
            name="nest-messages"
            onFinish={onFinish}
            // style={{ maxWidth: 800 }}
            validateMessages={validateMessages}
            size={"large"}
            layout="vertical"
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email", required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="healthcareId"
              label="Healthcare Id"
              rules={[
                { required: true, message: "Health care id is required" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Existing patient?"
              name="existing_patient"
              rules={[{ required: true }]}
            >
              <Radio.Group value={"no"}>
                <Radio.Button value="yes">Yes</Radio.Button>
                <Radio.Button checked value="no">
                  No
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
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
              label="Preferred Contact Method"
              name="preferred_contact_method"
              rules={[{ required: true }]}
            >
              <Radio.Group value={"no"}>
                <Radio.Button value="email">Email</Radio.Button>
                <Radio.Button value="phone">Phone</Radio.Button>
                <Radio.Button selected value="any">
                  Any
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="date"
              label="Appointment Date"
              rules={[{ required: true, message: "Please select date" }]}
            >
              {/* <Input style={{ width: "100%" }} /> */}
              {/* let date = new Date().toLocaleDateString(); */}
              <DatePicker
                defaultValue={getDefaultDate()}
                disabledDate={(current) => {
                  return (
                    current.startOf("hour", 0) <= moment().startOf("hour", 0) ||
                    current.day() === 0 ||
                    disableDate[current.toDate().toDateString()]
                  );
                }}
                format={"DD/MM/YYYY"}
                onChange={onChangeDate}
              />
            </Form.Item>
            <Form.Item
              name="slot"
              label="Appointment Slot"
              rules={[{ required: true, message: "Please select the slot" }]}
            >
              {/* <Input style={{ width: "100%" }} /> */}
              <Select
                placeholder="Select a slot"
                optionFilterProp="children"
                // onSearch={onSearch}
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
