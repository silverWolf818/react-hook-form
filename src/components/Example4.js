import {useForm, FormProvider, useFormContext} from 'react-hook-form'

const Example4 = () => {
    const methods = useForm({
        defaultValues: {
            firstName: 'tom'
        }
    })

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input/>
                <Input2/>
                <input type="submit"/>
            </form>
        </FormProvider>
    )
}

const ConnectForm = ({children}) => {
    const methods = useFormContext()

    return children({...methods})
}

function Input() {
    const {register, watch} = useFormContext()
    watch((data, {name, type}) => {
        console.log(data, name, type)
    })
    return <input {...register('firstName')} />
}

function Input2() {
    return <ConnectForm>
        {
            ({register}) => <input {...register('lastName')} />
        }
    </ConnectForm>
}

export default Example4