import React from 'react'
import {useForm} from 'react-hook-form'

function Form({defaultValues, children, onSubmit}) {
    const methods = useForm({defaultValues})
    const {handleSubmit} = methods

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {React.Children.map(children, child => {
                return child.props.name
                    ? React.createElement(child.type, {
                        ...{
                            ...child.props,
                            register: methods.register,
                            key: child.props.name
                        }
                    })
                    : child
            })}
        </form>
    )
}

function Input({ register, name, ...rest }) {
    return <input {...register(name)} {...rest} />;
}

function Select({ register, options, name, ...rest }) {
    return (
        <select {...register(name)} {...rest}>
            {options.map(value => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    );
}

const Example5 = () => {
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input name="firstName" />
            <Input name="lastName" />
            <Select name="gender" options={["female", "male", "other"]} />
            <Input type="submit" value="Submit" />
        </Form>
    )
}

export default Example5