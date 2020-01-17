import axios from 'axios'

export const signup = regUser => {

    return axios
        .post('Singup', {
            Firstname: regUser.Firstname,
            Lastname: regUser.Lastname,
            email: regUser.email,
            password: regUser.password,
            Confirmpassword: regUser.Confirmpassword,
            Mobnum: regUser.Mobnum,
        })
        .then(res => {
            console.log(res)
        })
}
export const login = user => {
    return axios
        .post('Signin', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            console.log('login')
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}


