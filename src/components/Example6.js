import React, { memo } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const NestedInput = memo(({ register, formState: { isDirty } }) => {
    console.log("render");
    return (
        <div>
            <input {...register("test")} />
            {isDirty && <p>This field is dirty</p>}
        </div>
    );
},(prevProps, nextProps) =>
    prevProps.formState.isDirty === nextProps.formState.isDirty)

export const NestedInputContainer = ({ children }) => {
    const methods = useFormContext();

    return <NestedInput {...methods} />;
};

export default function Example6() {
    const methods = useForm();
    const register = methods.register;
    const { isDirty } = methods.formState;
    console.log(isDirty);
    const onSubmit = (data) => console.log(data);


    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <NestedInputContainer />
                <input {...register("lastName", {required: true})} />
                <input type="submit"/>
            </form>
        </FormProvider>
    );
}
