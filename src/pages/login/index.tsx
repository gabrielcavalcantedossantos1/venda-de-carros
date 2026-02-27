//logo
import logoImg from "../../assets/logo.svg";

//react-router-dom
import { Link } from "react-router-dom";

//container
import { Container } from "../../components/container";

//input
import { Input } from "../../components/input";

//react-hook-form
import { useForm } from "react-hook-form";

//zod
import { z } from "zod";

//zod resolver
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("E-mail inválido").nonempty("Campo obrigatório"),
  password: z.string().nonempty("Senha é obrigatório"),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onsubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to="/" className="mb-6">
          <img src={logoImg} alt="Logo do site" />
        </Link>

        <form
          className="bg-white max-w-xl w-full rounded-lg p-4"
          onSubmit={handleSubmit(onsubmit)}
        >
          <div className="mb-3">
            <Input
              text="E-mail"
              type="email"
              placeholder="Digite o seu email"
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>

          <div className="mb-3">
            <Input
              text="Senha"
              type="password"
              placeholder="Digite sua senha"
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button
            type="submit"
            className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium cursor-pointer"
          >
            Acessar
          </button>
        </form>
      </div>
    </Container>
  );
}
