<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        label{
            margin-top: 10px;
        }
        </style>
</head>
<body>
<section class="bg-barra border-b border-black/5">
  <div class="w-full mx-auto md:px-12 px-8 max-w-7xl lg:px-16">
    <div
      x-data="{ open: false }"
      class="relative flex flex-col w-full py-5 mx-auto bg-barra md:items-center md:justify-between md:flex-row md:px-6">
      <div class="flex flex-row items-center justify-between lg:justify-start">
        <a href="/" class=" text-black inline-flex items-center gap-3">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2klEQVR4nO2aQWsTQRTHlyLYglpNZqqGQKDGZt7GN6kURFDopVdv5ib9CgU/QfDmsV+heOrVYy8iHnsSCl4q2h3CbtNDdlqLUuvIRBNSi7DpbtJO8/4wp+yE936zb+bN2+d5JBKJRCKNTMaYiXaruRBHQSOOgi0dKdM/4jA41mGwaX/Xzaafdp7neRNM4AIHbHCBW+fj9M7O1H6olnSoVuNQNU8ZH6nDOAo24jBYOdj9cjftvGLx8dQM4BIXuMoBmxyk6Y6ROR0rlY+jYDkO1boOA/2v8ToK9nSo1vZ3Vb3Val1PO68gRJ4LucyFXOcgdb/TIwPQDr/O2tX4uypHp41X23Y17aoaY66knTdzH2cZ4AoTcoMLPPqf00MDYM45npM4nDkAc4HieWQA4gsaz0MF0HYgnocKQJ82/MTIet6wHO4OBvIjB3w1TgCOOchNu2Hm5x6IxI67DICB/G5DyIZSvvKw4KWRdgQAE/iNA761m2au/OhGKqddAcAAW0zgWr4in5XL5ateApVKpUn7vLMAGODnTi7gy6c2IUriw3StdpP7WLewOGDs3ikgbLaHDZv9JbX7Tnmed3KIP2Hxw7FjEH8ywA92E8uVsZjY2JP/88vJPGAGai+mEW95KeVsIpSVLhUA7vvXuI/PuZBvxgZAoe8ixAQeDGq4swCYkC+5kO/tRpjGcGcB8IwMJwBAb4ChEADaAwxtgkCngKFjECgPMJQIAWWChlJhoLuAocsQ0G3Q0HUYqB5gqCCSVJoqQsqZkhivVu91aoog341NReg21KqdZqlOD0DyD6vOAiiVSpN9zVJqEKcvBQDW940gzXAWAM9oEIAxfAOOu81SOX/eHwsADPCw2yzFxEKv63QgaccAMJB7nVYYH+v5SqXXdXpmaQcAMJDb9li0x6O3uNjrOs1E+mICOFs8uwyAZRHPrgFgWcezIwA+MSFf87nak6R9gCQSieSl1G+/Uw6SzYcM1gAAAABJRU5ErkJggg==">
          <span class="font-black font-display text-fondo">EstuPrime</span>
        </a>
        <button
          @click="open = !open"
          class="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black lg:hidden">
          <svg
            class="w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24">
            <path
              :class="{'hidden': open, 'inline-flex': !open }"
              class="inline-flex"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
            <path
              :class="{'hidden': !open, 'inline-flex': open }"
              class="hidden"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav
        :class="{'flex': open, 'hidden': !open}"
        class="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
        <a
          class="px-2 lg:px-6 py-2 md:px-3 text-sm font-medium text-fondo hover:text-boton lg:ml-auto"
          href="/#aboutUs">Acerca de Nostros</a
        >
        <a
          class="px-2 lg:px-6 py-2 md:px-3 text-sm font-medium text-fondo hover:text-boton"
          href="/#pricing">Precios</a
        >

        <a
          class="px-2 lg:px-6 py-2 md:px-3 text-sm font-medium text-fondo hover:text-boton"
          href="/teachOnEstuPrime">
          Como Enseñar</a
        >

        <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
          <a
            href="/signup"
            class="inline-flex items-center h-8 justify-center px-4 py-2 text-sm font-medium text-fondo bg-boton rounded-lg group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-fondo active:bg-gray-200 active:text-input focus-visible:outline-black hover:text-boton">
            Registrarse
          </a>
          <a
            href="/login.php"
            class="inline-flex items-center h-8 justify-center px-4 py-2 text-sm font-medium text-fondo bg-boton rounded-lg group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-fondo active:bg-gray-200 active:text-input focus-visible:outline-black hover:text-boton">
            Iniciar Sesion  
          </a>
        </div>
      </nav>
    </div>
  </div>
</section>
<section>
  <div class="flex relative justify-center lg:px-0 items-center lg:h-screen md:px-12 overflow-hidden">
    <div class="bg-fondo px-4 relative flex flex-1 flex-col lg:py-24 md:flex-none md:px-28 py-10 sm:justify-center xl:py-36 z-10">
      <div class="w-full lg:h-full max-w-md md:max-w-sm md:px-0 md:w-96 mx-auto sm:px-4">
        <div class="flex flex-col">
          <div>
            <h2 class="font-medium leading-tight text-black text-xl font-display">
              <div>
                <a href="login-estudiante.php" >
                  Registro de Estudiante
                </a>
                <a href="login.php" class="inline-flex items-center h-8 w-150 justify-center px-4 py-2 text-sm font-medium text-fondo bg-boton rounded-lg group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-fondo duration-150 active:bg-gray-200 active:text-input focus-visible:outline-black hover:text-boton ">
                  Registro de Docente
                </a>
              </div>
            </h2>
            <div class="py-3">
              <span class="w-full inline-flex relative mt-3 z-0">
                <button class="items-center justify-center h-12 rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-boton border-2 border-black duration-150 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black px-6 py-3 text-center text-white w-full" type="button">
                  <span>Iniciar Sesion con:</span>
                  <span class="ml-3">
                    <svg fill="none" height="24" viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"></path>
                      <path d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z" fill="#34A853"></path>
                      <path d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z" fill="#FBBC05"></path>
                      <path d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z" fill="#EB4335"></path>
                    </svg>
                  </span>
                </button>
              </span>
              <div class="py-3 relative">
                <div class="flex absolute inset-0 items-center" aria-hidden="true">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="flex relative justify-center">
                  <span class="bg-fondo text-sm px-2 text-gray-500">O continuar como:</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form action="registro.php" method="post">

          <div class="space-y-6">
            <div class="w-full flex flex-row gap-3">
              <div class="w-full">
                <label class="sr-only" for="first_name">First name</label>
                <input class="w-full focus:outline-none border py-3 appearance-none h-12 bg-input block border-gray-200 focus:bg-white focus:border-accent-500 focus:ring-accent-500 placeholder-gray-400 px-3 rounded-xl sm:text-sm text-accent-500" id="first_name" name="first_name" autocomplete="given-name" required="" placeholder="Nonbres"/>
              </div>
              <div class="w-full">
                <label class="sr-only" for="last_name">Last name</label>
                <input class="w-full focus:outline-none border py-3 appearance-none h-12 bg-input block border-gray-200 focus:bg-white focus:border-accent-500 focus:ring-accent-500 placeholder-gray-400 px-3 rounded-xl sm:text-sm text-accent-500" id="last_name" name="last_name" autocomplete="family-name" required="" placeholder="Apellidos"/>
              </div>
            </div>
            <div>
              <label for="last_name" class="sr-only">Email Adress</label>
              <input id="email" name="email" class="w-full focus:outline-none border py-3 appearance-none h-12 bg-input block border-gray-200 focus:bg-white focus:border-accent-500 focus:ring-accent-500 placeholder-gray-400 px-3 rounded-xl sm:text-sm text-accent-500" placeholder="Email"/>
            </div>
            <div class="col-span-full">
              <label class="sr-only" for="company">Password</label>
              <input id="password" name="password" class="w-full focus:outline-none border py-3 appearance-none h-12 bg-input block border-gray-200 focus:bg-white focus:border-accent-500 focus:ring-accent-500 placeholder-gray-400 px-3 rounded-xl sm:text-sm text-accent-500" placeholder="Contraseña" type="password"/>
            </div>
            <div class="flex">
              <div class="flex items-start">
                <input class="text-accent-500 focus:ring-accent-500 border-accent-500 h-4 rounded w-4" id="remember-me" name="remember-me" type="checkbox" required/>
                <label class="font-medium text-xs block leading-tight ml-2 text-gray-500" for="remember-me">Creandote una cuenta significa que estas de acuerdo con nuestros <a class="text-accent-500 hover:text-accent-400" href="/terms">Terminos de servicio,</a><a class="text-accent-500 hover:text-accent-400" href="/privacy">Politicas de Privacidad</a>, y nuestro predeterminada <a class="text-accent-500 hover:text-accent-400" href="/notifications">Configuracion de Notificaciones</a></label>
              </div>
            </div>
            <div class="col-span-full">
              <button class="items-center justify-center h-12 rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-boton border-2 border-black duration-150 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black px-6 py-3 text-center text-white w-full" type="submit">Crear Cuenta</button>
            </div>
            <div class="space-y-4">
              <p class="font-medium text-sm leading-tight text-black">Ya eres miembro? <a class="text-accent-500 hover:text-accent-400 ml-3" href="/login">Inicia Sesion</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

</body>
</html>