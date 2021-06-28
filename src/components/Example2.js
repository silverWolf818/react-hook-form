import {forwardRef} from 'react'
import {useForm, Controller} from 'react-hook-form'

const Input = forwardRef((props, ref) => {
    const {onChange, onBlur} = props
    return  <input ref={ref} onChange={onChange} onBlur={onBlur}/>
})

const Example2 = () => {
    const {control, handleSubmit} = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller
                    rules={{ required:'required' }}
                    name="firstName"
                    control={control}
                    render={({field}) => <Input {...field} />}
                />
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    )
}

export default Example2