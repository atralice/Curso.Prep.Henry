/* eslint-disable no-undef */
const {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
} = require('../homework');

describe('crearGato(nombre, edad)', function() {
  it('should create a new cat with the nombre and edad properties set', function() {
    expect(crearGato('Snowball', 1).nombre).toBe('Snowball');
    expect(crearGato('Snowball', 1).edad).toBe(1);
    expect(crearGato('Snowball II', 5).nombre).toBe('Snowball II');
    expect(crearGato('Snowball II', 5).edad).toBe(5);
  });
  it('should add a method called meow to the new cat object', function() {
    expect(crearGato('Snowball III', 2).meow()).toBe('Meow!');
  });
});

describe('agregarPropiedad(object, property)', function() {
  it('should add the property to the object with a value of null', function() {
    const object = {
      x: 1,
      y: 2,
    };
    const updatedObject = {
      x: 1,
      y: 2,
      z: null,
    };
    expect(agregarPropiedad(object, 'z')).toEqual(updatedObject);
  });
});

describe('invocarMetodo(object, method)', function() {
  it('should invoke the method on the object', function() {
    const object = {
      x: 0,
      incrementX: function() {
        this.x++;
      },
    }
    invocarMetodo(object, 'incrementX');
    expect(object.x).toBe(1);
  });
});

describe('multiplicarNumeroDesconocidoPorCinco(mysteryNumberObject)', function() {
  it('should return the mysteryNumber property multiplied by five', function() {
    const mysteryBox = {
      numeroMisterioso: 999,
    };
    expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(4995);
    mysteryBox.numeroMisterioso = -5;
    expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(-25);
  });
});

describe('eliminarPropiedad(object, property)', function() {
  it('should delete the property from the object', function() {
    const updatedObject = {
      x: 1,
      y: 2,
    };
    const object = {
      x: 1,
      y: 2,
      z: null,
    };
    expect(eliminarPropiedad(object, 'z')).toEqual(updatedObject);
  });
});

describe('nuevoUsuario(nombre, email, password)', function() {
  it('should return a new user object with a nombre, email, and password property that match the arguments', function() {
    const user = {
      nombre: 'Jhon',
      email: 'jhon@email.com',
      password: 'correcthorsebatterystaple',
    };
    expect(nuevoUsuario(user.nombre, user.email, user.password)).toEqual(user);
    const user2 = {
      nombre: 'Samuel',
      email: 'samuel@email.com',
      password: 'password',
    };
    expect(nuevoUsuario(user2.nombre, user2.email, user2.password)).toEqual(user2);
  });
});

describe('tieneEmail(user)', function() {
  it('should return true if the user object has a value for its email property', function() {
    expect(tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' })).toEqual(true);
    expect(tieneEmail({ usernombre: 'Jhon', email: null })).toEqual(false);
    expect(tieneEmail({ usernombre: 'Antonio' })).toEqual(false);
  });
});

describe('tienePropiedad(object, property)', function() {
  it('should return true if the object has the property that is passed in', function() {
    const obj = {
      x: true,
    };
    expect(tienePropiedad(obj, 'x')).toEqual(true);
    expect(tienePropiedad(obj, 'y')).toEqual(false);
  });
});

describe('verificarPassword(user, password)', function() {
  it('should return true if passwords match', function() {
    const user = {
      password: 'Me encanta JS!',
    };
    const password = 'Me encanta JS!';
    expect(verificarPassword(user, password)).toBe(true);
  });
  it('should return false if passwords do not match', function() {
    const user = {
      password: 'Me encanta JS!',
    };
    const password = 'Hacker time!';
    expect(verificarPassword(user, password)).toBe(false);
  });
});

describe('actualizarPassword(user, password)', function() {
  it('should return the user object with the updated password', function() {
    const user = {
      password: 'Me encanta JS!',
    };
    const password = 'Me encanta JS mucho más!';
    expect(actualizarPassword(user, password).password).toBe(password);
  });
});

describe('agregarAmigo(user, newFriend)', function() {
  it('should add a new friend to the end of the amigos array property', function() {
    const user = {
      amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
    };
    const newFriend = 'Shay';
    expect(agregarAmigo(user, 'Shay').amigos.pop()).toBe('Shay');
  });
});

describe('pasarUsuarioAPremium(users)', function() {
  it('should return the users array with each user\'s esPremium property set to true', function() {
    const users = [
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
    ];
    const updatedUsers = [
      { esPremium: true },
      { esPremium: true },
      { esPremium: true },
      { esPremium: true },
      { esPremium: true },
    ];
    expect(pasarUsuarioAPremium(users)).toEqual(updatedUsers);
  });
});

describe('sumarLikesDeUsuario(user)', function() {
  it('should return the sum of likes for all user posts', function() {
    const user = {
      usernombre: 'Jhon Doe',
      password: 'JavaScript es genial!',
      posts: [
        {
          id: '1',
          title: 'Aventuras en JS!',
          likes: 10
        },
        {
          id: '2',
          title: 'Soy Henry!',
          likes: 100
        },
        {
          id: '3',
          title: 'Qué es un JavaScript?',
          likes: 35
        },
        {
          id: '4',
          title: 'JS Objects for Dummies',
          likes: 42
        },
        {
          id: '5',
          title: 'Educación online',
          likes: 99
        },
      ],
    };
    expect(sumarLikesDeUsuario(user)).toBe(286);
  });
});

describe('agregarMetodoCalculoDescuento(storeItem)', function() {
  const storeItem = {
    precio: 80,
    porcentajeDeDescuento: 0.1,
  };
  const storeItem2 = {
    precio: 5,
    porcentajeDeDescuento: 0.5,
  };

  it('should add the method \'calcularPrecioDescuento\' to the store item object', function() {
    expect(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento).toBeDefined();
    expect(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento).toBeDefined();
  });
  it('should return the discount precio from the new \'precioConDescuento\' method', function() {
    expect(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento()).toBe(72);
    expect(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento()).toBe(2.5);
  });
});
