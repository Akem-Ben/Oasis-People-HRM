import React, {useState} from 'react';
import oasisPhoto from '../assets/homepage/Oasis.png';
import { useFormik } from "formik";
import * as Yup from "yup";
import oasisLogo from '../assets/homepage/oasis-logo.png';

function Home() {

  const [loading, setLoading] = useState(false);

 const initialFormlikLoginValues = {
    loginKey: "",
    password: "",
  };


  const loginFormik = useFormik({
    initialValues: initialFormlikLoginValues,
    validationSchema: Yup.object({
      loginKey: Yup.string().required("Enter email or username"),
      password: Yup.string()
        .min(8, "Password should be 8 characters or more")
        .required("Enter password"),
    }),

    onSubmit: async (values, setSubmitting) => {
      try {
        setLoading(true);

        const loginForm = new FormData();

        loginForm.append("loginKey", values.loginKey);
        loginForm.append("password", values.password);

        const data = await loginUser(loginForm);

        if (data.status === 401) {
          localStorage.setItem("loginKey", values.loginKey);
          setLoading(false);
          return setCheckVerification(true);
        }

        if (data.status !== 200) {
          setLoading(false);
          return showErrorToast(data.data.message);
        }

        showSuccessToast(data.data.message);

        localStorage.setItem("token", data.data.token);

        localStorage.setItem("user", JSON.stringify(data.data.user));

        values.loginKey = "";
        values.password = "";

        setLoading(false);

        return navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className='flex'>
      <section className='p-2 w-[60%] h-screen'>
        <div className="bg-[#F8F6FE] w-[100%] h-[100%] flex items-center justify-end rounded-xl">
        <img src={oasisPhoto} alt='Oasis' width="700" className='rounded-tl-xl rounded-bl-xl'/>
        <div class="absolute inset-0 bg-black opacity-10 w-[60%] h-screen"></div>
        </div>
      </section>
      <section className='w-[40%] flex items-center justify-center'>
        <div className='rounded-xl bg-red-600 border-2 border-gray-500 w-[80%] h-[80%] flex flex-col justify-center items-center'>
             <div className='flex w-[80%] gap-2 items-center justify-center'>
              <img src={oasisLogo} alt="Oasis Logo" width="40" className='rounded-xl' />{" "}
              <div className='font-bold text-2xl'>Oasis People HRM</div> 
             </div>
             <div></div>
      <form
      className="mt-10 w-40 p-3"
        onSubmit={loginFormik.handleSubmit}
      >
        <div>
          <label htmlFor="inputPassword5">
            Email/Username
          </label>
          <input
            type="text"
            id="loginKey"
            name="loginKey"
            className='border-2 border-gray-200 rounded-xl w-full p-1'
            value={loginFormik.values.loginKey}
            onChange={loginFormik.handleChange}
          />
          {loginFormik.errors.loginKey ? (
            <div>
              <em>
                {loginFormik.errors.loginKey}
              </em>
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="inputPassword5">
            Password
          </label>
          <input
            type="password"
            id="password"
            className='border-2 border-gray-200 rounded-xl w-full p-1'
            value={loginFormik.values.password}
            onChange={loginFormik.handleChange}
          />
          {loginFormik.errors.password ? (
            <div>
              <em>
                {loginFormik.errors.password}
              </em>
            </div>
          ) : null}
        </div>
        <button
          type="submit"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      </div>
      </section>
    </div>
  )
}

export default Home;