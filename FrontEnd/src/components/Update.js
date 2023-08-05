import { Field, Form, Formik, ErrorMessage } from "formik";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
export default function Update() {
  let { id } = useParams();
  let navigate = useNavigate();
  const submitHandler = async (values, setSubmitting) => {
    await axios.put("http://localhost:8081/updateItem/" + id, values);
    alert("Item Details Updated");
    navigate("/Items");
    // setSubmitting(false);
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
            width: "30rem",
            padding: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "150px"
          }}
        >
          <div className="form-group">
            <Field
              type="text"
              id="model"
              name="model"
              placeholder="Update your model name"
              className="form-control"
              style={{ border: "5px solid black" }}
            />
            <ErrorMessage
              className="form-text text-muted"
              name="model"
              component="div"
            />
          </div>

          <div className="form-group">
            <Field
              type="text"
              id="brand"
              name="brand"
              placeholder="Update your brand name"
              className="form-control"
              style={{ border: "5px solid black" }}
            />
            <ErrorMessage
              className="form-text text-muted"
              name="brand"
              component="div"
            />
          </div>

          <div className="form-group">
            <Field
              type="text"
              id="category"
              name="category"
              className="form-control"
              placeholder="Update category name"
              style={{ border: "5px solid black" }}
            />
            <ErrorMessage
              className="form-text text-muted"
              name="category"
              component="div"
            />
          </div>

          <div className="form-group">
            <Field
              type="tel"
              id="cost"
              name="cost"
              className="form-control"
              placeholder="Update cost"
              style={{ border: "5px solid black" }}
            />
            <ErrorMessage
              className="form-text text-muted"
              name="cost"
              component="div"
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark"
            disabled={isSubmitting}
          >
            Update
          </button>
        </Form>
      )}
    </Formik>
  );
}
