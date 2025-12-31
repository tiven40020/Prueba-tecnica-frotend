import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/auth.api";
import { AuthContext } from "../context/AuthContext";
import logoBeKind from "../assets/beKingLogo.png";
import correoIcon from "../assets/correo.png";
import candadoIcon from "../assets/candado.png";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const result = await loginRequest(data);
      const token = result;

      if (token && typeof token === "string" && token.includes(".")) {
        localStorage.setItem("token", token);
        login(token);
        navigate("/Bakanes");
      } else {
        throw new Error("Token invalido");
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          setError("El correo o la contraseña son incorrectos.");
        } else if (err.response.status === 500) {
          setError("Error en el servidor. Inténtalo más tarde.");
        } else {
          setError("Hubo un problema al iniciar sesión. Intenta de nuevo.");
        }
      } else {
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contenedor-page-login">
      <div className="login-container">
        {loading && (
          <div className="loading-overlay">
            <div className="spinner-grande"></div>
          </div>
        )}

        <img src={logoBeKind} alt="Logo" className="logo-login" />
        <h2>¡Empieza a conectar tu comunidad ante buenas acciones!</h2>

        <form className="formulario-login" onSubmit={handleSubmit(onSubmit)}>
          <div className="container-campo">
            <label htmlFor="username">Correo Electrónico*</label>
            <div className="input-with-icon">
              <img src={correoIcon} alt="correo" />
              <input
                id="username"
                type="email"
                placeholder="Ingresar correo"
                {...register("username", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Correo electrónico no válido",
                  },
                })}
              />
            </div>
            {errors.username && (
              <span className="error-text">{errors.username.message}</span>
            )}
          </div>

          <div className="container-campo">
            <label htmlFor="password">Contraseña*</label>
            <div className="input-with-icon">
              <img src={candadoIcon} alt="candado" />
              <input
                id="password"
                type="password"
                placeholder="Ingrese tu contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
              />
            </div>
            {errors.password && (
              <span className="error-text">{errors.password.message}</span>
            )}
          </div>

          <a className="acor-recuperar-contraseña" href="#!">
            Recuperar contraseña
          </a>
          {error && <p className="error-main">{error}</p>}

          <button
            className="btn-login"
            type="submit"
            disabled={loading || !isValid}
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
