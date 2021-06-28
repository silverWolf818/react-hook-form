import {useForm} from 'react-hook-form'
import {useEffect} from 'react'

const Example3 = () => {
    const {register, watch, trigger, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur'
    })

    const onSubmit = data => {
        console.log(data)
    }

    const validateFn = async (val)=> {
       await new Promise(resolve => setTimeout(resolve, 1000))
       return 'mubiekajsd'
    }


    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("firstName", { required: true, validate: validateFn })} />
                {errors.firstName?.type === 'required' && "First name is required"}
            </div>
            <div>
                <input {...register("lastName", { required: true })} />
                {errors.lastName && "Last name is required"}
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    )
}

export default Example3