import { useForm } from "react-hook-form";

export default function FormComponent({ onSubmitForm }) {
    const { register, handleSubmit } = useForm();
    console.log(register)
    return (
        <div>
            <h2>Form Component</h2>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <input {...register("name")} placeholder="Enter name" />
                <input {...register("age")} type="number" placeholder="Enter age" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
