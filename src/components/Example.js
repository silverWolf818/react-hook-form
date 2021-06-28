import {useForm} from 'react-hook-form'

const Example = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input defaultValue="tom" {...register('name')} />
            </div>
            <div>
                <input {...register('email', {required: true})} />
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    )
}

export default Example