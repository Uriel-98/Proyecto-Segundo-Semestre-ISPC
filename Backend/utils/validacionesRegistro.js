const validaciones = {
  nombreCompleto: {
    notEmpty: {
      errorMessage: 'Campo obligatorio'
    },
    matches: {
      options: /^[A-Za-z\s]+$/,
      errorMessage: 'El nombre no debe contener números ni caracteres especiales'
    }
  },
  email: {
    notEmpty: {
      errorMessage: 'Campo obligatorio',
      bail: true
    },
    isEmail: {
      errorMessage: 'Email inválido'
    }
  },
  password: {
    notEmpty: {
      errorMessage: 'Campo obligatorio',
      bail: true
    },
    isStrongPassword: {
      options: {
        minLength: 8,
        maxLength: 24,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
      },
      errorMessage: 'La contraseña debe tener entre 8 y 24 caracteres, una mayúscula, una minúscula, un caracter especial y un número'
    }
  }
}

module.exports = validaciones;