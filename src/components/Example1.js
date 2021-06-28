import {forwardRef} from 'react'
import {useForm} from 'react-hook-form'

const Input = ({label, register, required}) => (
    <>
        <label>{label}</label>
        <input {...register(label, {required})} />
    </>
)

const Select = forwardRef(({onChange, onBlur, name, label}, ref) => (
    <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value="tom">tom</option>
            <option value="cat">cat</option>
        </select>
    </>
))

const Example1 = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input label="name" register={register} required />
            </div>
            <div>
                <Select label="select" {...register("select")} />
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    )
}

export default Example1