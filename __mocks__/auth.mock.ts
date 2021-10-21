/**
 * Email: testusergmail.com
 * password: testuser123
 */

export const signin = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 200)
  }).then(() => {
    if (email === 'testuser@gmail.com' && password === 'testuser123') {
      return {
        token: 'auth.token',
        user: {
          email: 'testuser@gmail.com',
          firstName: 'James',
          lastName: 'Wo',
          gender: 'Male',
          phone: 'xxxxx',
          role: 'user',
        },
      }
    }

    return 'invalid'
  })
}
