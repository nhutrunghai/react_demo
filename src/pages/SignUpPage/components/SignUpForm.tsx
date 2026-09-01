import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import TextField from "../../../components/ui/TextField";
import PasswordField from "../../../components/ui/PasswordField";
import Button from "../../../components/ui/Button";

const signUpSchema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <TextField
        label="Fullname"
        placeholder="Enter your fullname"
        error={errors.fullname?.message}
        {...register("fullname")}
      />

      <TextField
        label="Email"
        type="email"
        placeholder="Enter your email address"
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordField
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password")}
      />

      <Button type="submit" isLoading={isSubmitting}>
        Sign Up
      </Button>

      <p className="text-center text-sm text-[var(--text)]">
        Already have an account?{" "}
        <Link
          to="/sign-in"
          className="font-semibold text-[var(--accent)] hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}