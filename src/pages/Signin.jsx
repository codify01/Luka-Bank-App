import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
const Signin = () => {
  const formik = useFormik({
    initialValues:{
        email:'',
        password:''
    },
    validationSchema : yup.object({
        email : yup.string().required( "Email is required" ),
        password : yup.string().required( "Password is required" ),
    }),
    onSubmit: (value)=>{
            console.log(value);
            axios.post("http://localhost:5000/user/signin", value)
            .then((response)=>{
                console.log(response.data);                
            })
            .catch((err)=>{
                console.log(err);
                console.log(err.code);
                console.log(err.message);
            })
    }
})
  return (
    <div className='mx-3 my-16 ' > 
        <form class="max-w-md mx-auto  p-3 rounded" onSubmit={formik.handleSubmit}>
        <div class="relative z-0 w-full mb-5 group">
                <input 
                    type="email" 
                    name="email" id="floating_email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={formik.touched.email && formik.errors.email ? "errorInput peer" : "input peer"} 
                    placeholder=" " />
                <label for="floating_email" className={formik.touched.email && formik.errors.email ? "errorLabel" : "label"}>Email address</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input 
                    type="text" 
                    name="password" id="floating_password" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={formik.touched.password && formik.errors.password ? "errorInput peer" : "input peer"}
                    placeholder='' />
                <label for="floating_password" className={formik.touched.password && formik.errors.password ? "errorLabel" : "label"}>Password</label>
            </div>
            <button type='submit' className='bg-neutral-800 p-3 w-full rounded'>Log In</button>
        </form>
    </div>
  )
}

export default Signin