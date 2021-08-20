import React from 'react';
import { useForm } from 'react-hook-form';
import { get } from 'lodash';

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
        //send this json response to api...
    }

    return (
        <center>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="container">
                    <center> <h1>Registration Form</h1></center>
                    <label><b>Name</b></label>
                    <input id="name" name="name"
                        className={errors.name ? "errorBorder" : ""}
                        {...register('name',
                            { required: true, maxLength: 20, pattern: /^[a-zA-Z]+$/ })}
                    />
                    <div className="errormsg">
                        {get(errors, 'name.type') === 'required' && "required"}
                        {get(errors, 'name.type') === 'pattern' && "enter valid Name"}
                        
                    </div>

                    <label><b>Email</b></label>
                    <input id="Email" name="email"
                        className={errors.email ? "errorBorder" : ""}
                        {...register('email',
                            { required: true, maxLength: 50, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                    <div className="errormsg">
                        {get(errors, 'email.type') === 'required' && "required"}
                        {get(errors, 'email.type') === 'pattern' && "enter valid Email"}
                        {get(errors, 'email.type') === 'maxLength' && "enter valid Email"}
                    </div>

                    <label><b>Phone</b></label>
                    <input id="phone" name="phone"
                        className={errors.phone ? "errorBorder" : ""}
                        {...register('phone',
                            { required: true, maxLength: 10, pattern: /^([0-9]+)/ })} />

                    <div className="errormsg">
                        {get(errors, 'phone.type') === 'required' && "required"}
                        {get(errors, 'phone.type') === 'pattern' && "enter valid Phone"}
                        {get(errors, 'phone.type') === 'maxLength' && "enter valid Phone"}
                    </div>

                    <label><b>Birthdate</b></label>
                    <input id="dob" type='date' name="date"
                        className={errors.date ? "errorBorder" : ""}{...register('dob',
                            { required: true, maxLength: 10, pattern: /^([a-zA-Z0-9-]+)$/ })} />
                    <div className="errormsg">
                        {get(errors, 'dob.type') === 'required' && "required"}
                    </div>

                    <label><b>select country</b></label>
                    <select name="country"
                        className={errors.country ? "errorBorder" : ""}
                        {...register("country", { required: "true" })}>
                        <option value="">select country</option>
                        <option value="1">India</option>
                        <option value="2">US</option>
                        <option value="3">Canada</option>
                        <option value="4">UK</option>
                    </select>
                    <div className="errormsg">
                        {get(errors, "country.type") === "required" && "please select country"}
                    </div>

                    <p><b>languages</b></p>

                    <label>java</label>
                    <input id="language" type="checkbox" name="java"
                        className={errors.java ? "errorBorder" : ""}
                        {...register('language',{ required: true})} />
                    <div className="errormsg">
                        {get(errors, 'language.type') === 'required' && "required"}
                    </div>

                    <label>Reactjs</label>
                    <input id="language" name="lang" type="checkbox"
                        className={errors.lang ? "errorBorder" : ""}
                        {...register('Reactjs', { required: true })} />
                    <div className="errormsg">
                        {get(errors, 'Reactjs.type') === 'required' && "required"}
                    </div>


                    <p><b> select the gender</b></p>
                    <label>male</label>
                    <input id="male" type="radio" {...register('male', { required: false })} />
                    <div className="errormsg">
                        {get(errors, 'male.type') === 'required' && "required"}
                    </div>

                    <label>female</label>
                    <input id="female" type="radio" {...register('female',{ required: false })} />
                    <div className="errormsg">
                        {get(errors, 'female.type') === 'required' && "required"}
                    </div>
                    <button type="submit" class="registerbtn">submit </button>
                </div>
            </form>
        </center>
    )
}
export default RegistrationForm;