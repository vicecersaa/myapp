import Logo from '../img/ForlandLogo.png'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Footer = () => {

  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required("Your Email is Required!")
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })

  

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div className='footer'>
      <div className='footer-one'>
        <img src={Logo}></img>
        <p>Nature, technology, and the purest materials come together to create the brand new PureBliss natural latex mattress collection from Forland Living.</p>
        <div className='sosmed'>
          <h2>Connect With Us</h2>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>

      <div className='footer-links'>
        <div className='category-one'>
          <h4>SHOP</h4>
            <a alt='Bed' href='/product'>Bed & Mattresses</a>
            <a alt='Sofas' href='/product'>Sofas</a>
            <a alt='Furniture' href='/product'>Furniture</a>
            <a alt='In The Box' href='/product'>In The Box</a>
            <a alt='Accessories' href='/product'>Accessories</a>
          </div>
          <div className='category-one'>
          <h4>ABOUT</h4>
            <a alt='About Us' href='/'>About Us</a>
            <a alt='Careers' href='/'>Careers</a>
            <a alt='Our Vision & Mission' href='/'>Our Vision & Mission</a>
            <a alt='Business & Commercial' href='/'>Business & Commercial</a>
          </div>
          <div className='category-one'>
          <h4>HELP</h4>
            <a alt='FAQS' href='/'>FAQS</a>
            <a alt='Contact Us' href='/'>Contact Us</a>
            <a alt='Warranty' href='/'>Warranty</a>
            <a alt='Delivery' href='/'>Delivery</a>
        </div>
      </div>
      <div className='signup-newsletter'>
        <h1>Sign Up For Our Newsletter Get 10% Off!</h1>
        <div className='newsletter'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="First Name" type="text" {...register("fullName")}/>
            <input placeholder="Enter Your Email" type="text" {...register("email")}/>
            <button>Sign Up</button>
            <p>{errors.fullName?.message}</p>
            <p>{errors.email?.message}</p>
          </form>
        </div>
      </div>
    </div>
  )
}