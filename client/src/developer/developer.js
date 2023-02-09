import profile from '../assets/img/profile.jpg';

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

const developer = {
    fullname: 'Gino Dela Vega',
    date_birth: getAge('1997-12-30'),
    img: profile
}



export default developer;