import { Field, Form, Formik, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";

export default function NewUser() {
  let navigate = useNavigate();

  const submitHandler = async (values, setSubmitting) => {
    alert(JSON.stringify(values));
    await axios.post("http://localhost:8081/addItem", values);
    alert("New Item Added");
    navigate("/Items");
  };

  return (
    <Formik
      onSubmit={submitHandler}
      initialValues={{ model: "", brand: "", category: "", cost: "" }}
      style={{ margin: "0 auto" }}
    >
      {({ isSubmitting }) => (
        <Form
          className="card"
          style={{
            width: "40rem",
            padding: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "100px"
          }}
        >
          <div className="form-group">
            <Field
              type="text"
              id="id"
              name="id"
              className="form-control"
              placeholder="Create your Item ID"
              style={{ border: "2px solid black" }}
            />
            <ErrorMessage
              className="form-text text-muted"
              name="id"
              id="id"
              component="div"
            />
          </div>

          <div className="form-group">
            <Field
              text="text"
              id="model"
              name="model"
              placeholder="Enter your model name"
              className="form-control"
              style={{ border: "2px solid black" }}
            />
            <ErrorMessage
              className="form-text text-muted"
              name="model"
              id="model"
              component="div"
            />
          </div>

          <div className="form-group">
            <Field
              text="text"
              id="brand"
              name="brand"
              placeholder="Enter your brand name"
              className="form-control"
              style={{ border: "2px solid black" }}
            />
            <ErrorMessage
              className="form-text text-muted"
              name="brand"
              id="brand"
              component="div"
            />
          </div>

          <div className="form-group">
            <Field
              type="text"
              id="category"
              name="category"
              className="form-control"
              placeholder="Enter category name"
              style={{ border: "2px solid black" }}
            />
            <ErrorMessage
              className="form-text text-muted"
              name="category"
              id="category"
              component="div"
            />
          </div>

          <div className="form-group">
            <Field
              type="tel"
              id="cost"
              name="cost"
              className="form-control"
              placeholder="Enter your cost "
              style={{ border: "2px solid black" }}
            />
            <ErrorMessage
              className="form-text text-muted"
              name="cost"
              id="cost"
              component="div"
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark"
            disabled={isSubmitting}
          >
            Create
          </button>
        </Form>
      )}
    </Formik>
  );
}
