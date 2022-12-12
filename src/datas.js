let xAxisData = [
    { "name" :"Jan", "Sale" : 112_000},
    { "name" :"Feb", "Sale" : 99_000},
    { "name" :"Mar", "Sale" : 132_000},
    { "name" :"Apr", "Sale" : 82_000},
    { "name" :"May", "Sale" : 92_000},
    { "name" :"Jun", "Sale" : 172_000},
    { "name" :"Jul", "Sale" : 72_000},
    { "name" :"Aug", "Sale" : 162_000},
    { "name" :"Sep", "Sale" : 142_000},
    { "name" :"Oct", "Sale" : 192_000},
    { "name" :"Nov", "Sale" : 72_000},
    { "name" :"Dec", "Sale" : 122_000},
]

const newMembers =[
    {id : 1 , username : 'Mohmmod Shoja' , title : 'ui & ux', img :"image/index3.jfif"},
    {id : 2 , username : 'Ali Shoja' , title : 'Ui & ux', img :"image/index4.jfif"},
    {id : 3 , username : 'Ali Daei' , title : 'Football', img :"image/img.jfif"},
    {id : 4 , username : 'Sahar Shoja' , title : 'Student', img :"image/index1.jfif"},
    {id : 5 , username : 'Bita Shoja' , title : 'Devloper', img :"image/index2.jfif"},
    {id : 6 , username : 'Hidar Shoja' , title : 'Devloper', img :"image/index5.jfif"},
]
const Members =[
    {id : 1 ,stutus :'pending' , price:"$ 171.11", username : 'Ahmad Shoj ',data : '2013 oct 11' , img :"image/index3.jfif"},
    {id : 2 ,stutus :'Declined' , price:"$ 97.15", username : 'Saeeid Shoja ',data : '2019 oct 11' , img :"image/index4.jfif"},
    {id : 3 ,stutus :'Approved' , price:"$ 127.31", username : 'Ali Daei',data : '2018 oct 11', img :"image/img.jfif"},
    {id : 4 ,stutus :'Declined' , price:"$ 117.11", username : 'Yasaman Shoja ',data : '2012 oct 11' , img :"image/index1.jfif"},
    {id : 6 ,stutus :'Approved' , price:"$ 87.01", username : 'Hamid Shoja' , data : '2021 oct 11' , img :"image/index5.jfif"}
]
let userRows = [
    {
        id: 1,
        username: 'Qadir Yolme',
        avatar:"image/index4.jfif",
        status: 'active',
        transaction: '$129.52',
        email: 'qadir@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: "image/index5.jfif",
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: "image/index3.jfif",
        status: 'active',
        transaction: '$98',
        email: 'sasan@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: "image/index1.jfif",
        status: 'active',
        transaction: '$0',
        email: 'zahra@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar:"image/index5.jfif",
        status: 'active',
        transaction: '$55.98',
        email: 'Hamze@gmail.com'
    }
]

const product = [
    {id : 1 , title : "Ausus" , avatar :"image/ausus.jfif" , price : 890 },
    {id : 2 , title : "Dell" , avatar :"image/dell.jfif" , price : 990 },
    {id : 3 , title : "Lenovo" , avatar :"image/lenovo.jfif" , price : 980 },
    {id : 4 , title : "Mobail" , avatar :"image/mobail.jfif" , price : 800 },
    {id : 5 , title : "hp" , avatar :"image/hp.jfif" , price : 800 },
    {id : 6 , title : "Mc" , avatar :"image/mc.jfif" , price : 1090 }

]
const productsData = [
    { name: 'Jan', sales: 4000, },
    { name: 'Feb', sales: 3000,},
    { name: 'Mar', sales: 5000,},
]
const data = [
    {
      "name": "فروردین",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "اردیبهشت",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "خرداد",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "تیر",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "مرداد",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "شهریور",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "مهر",
      "uv": 3490,
      "pv": 4300
    },
    {
        "name":"آبان",
        "uv": 1490,
        "pv": 9300
      },
      {
        "name":"آذر",
        "uv": 1490,
        "pv": 4300
      },
      {
        "name":"دی",
        "uv": 1490,
        "pv": 8300
      },
      {
        "name":"بهمن",
        "uv": 1490,
        "pv": 7300
      },
      {
        "name":"اسفند",
        "uv": 2490,
        "pv": 4300
      }
  ]

export {xAxisData ,newMembers ,Members, userRows , product , productsData , data}
