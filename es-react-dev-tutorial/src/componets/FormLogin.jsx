import './FormLogin.css';

export default () => 
  <>
    <form>
        <h2>Iniciar sesión</h2>
        <label>
            Usuario:
            <input type="text" name="name" />
        </label>
        <label>
            Contraseña:
            <input type="password" name="password" />
        </label>
        <button type="submit">Iniciar sesión</button>
    </form>
  </>